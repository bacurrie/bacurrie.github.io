import React, { Component } from "react";
import * as THREE from "three";
import * as Physijs from "physijs";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import "./App.css";

export default class Scene extends Component {
  componentDidMount() {
    this.setUp();
    this.initEnv();
    this.addObjects();
    this.animation();
    this.updateDimensions();

    window.addEventListener("resize", this.handleWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize);
    window.cancelAnimationFrame(this.requestID);
  }
  
  setUp = () => {
    
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    });
    
    this.renderer.setClearColor(0xffffff, 0);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    
    this.mount.appendChild(this.renderer.domElement);
    
    this.scene = new Physijs.Scene();
    this.scene.setGravity(0,-30,0)
    
    this.camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 0.1, 1000 );
    
    this.camera.position.set(70, 25, 70);
    this.camera.lookAt(this.scene.position);
    this.scene.add(this.camera);
  };

  initEnv = () => {

    //lights
    const light = new THREE.DirectionalLight(0xFFFFF);
    light.position.set(0,40,0)
    light.target.position.copy(this.scene.position);
    light.castShadow = true;
    light.shadow.camera.top = -60;
    light.shadow.camera.right = 60;
    light.shadow.camera.bottom = 60;
    light.shadow.camera.near = 20;
    light.shadow.camera.far = 200;
    light.shadow.bias = -.0001;
    light.shadow.map = 2048;
    light.shadow.darkness = .7;
  
    const ambient = new THREE.AmbientLight();

    this.scene.add(light);
    this.scene.add(ambient);
  }

  addObjects = () => {

    this.omochao = new THREE.Object3D();
    const loader = new GLTFLoader();
    loader.load('Omochao/omochao.glb', (omo) => {
      this.omochao = omo.scene;
      this.omochao.scale.set(0.1,0.1,0.1);
      this.omochao.position.set(0,-1,0);
    });    

    //Ground Plane
    const groundPlane = new THREE.PlaneBufferGeometry(1000, 1000, 20, 20);
    const groundMat = new THREE.MeshLambertMaterial({
      transparent: true,
      opacity: 0,
    });

    groundPlane.visible = true;

    const physMat = Physijs.createMaterial(groundMat);
    const physMesh = new Physijs.BoxMesh(groundPlane, physMat, 0);
    physMesh.position.y = -50;
    physMesh.rotation.x = -0.5 * Math.PI;

    const floorCollision = (collided_with, linearVelocity, angularVelocity) => {
      this.scene.remove(collided_with);
      addBox();
    }

    physMesh.addEventListener('collision', floorCollision);

    this.scene.add(physMesh);

    //boxes

    //initial planes
    const addBox = () => {
      
      var cubeGeometry = new THREE.BoxBufferGeometry(1, 2, 1);
      var cubeMaterial = new THREE.MeshBasicMaterial({
        transparent: true,
        opacity: 0.0,
      });

      var box_material = Physijs.createMaterial(cubeMaterial, 1.5, 1.5);
      this.box = new Physijs.BoxMesh(cubeGeometry, box_material, 50);

      this.box.add(this.omochao.clone());

      function RandInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
      }

      var box_randx = RandInt(0,50);
      var box_randy = RandInt(5,15) * 10;
      var box_randz = RandInt(0,50);

      this.box.position.set(box_randx,box_randy,box_randz);
      this.box.scale.set(2,2,2);
      this.scene.add(this.box);
      this.box.setAngularVelocity({x:RandInt(-3,3),y:RandInt(-3,3),z:(-3,3)});
    };

    for (let index = 0; index < 30; index++) {
      addBox();     
    }

  };

  animation = () => {
    this.scene.simulate();
    this.renderer.render(this.scene, this.camera);
    this.requestID = window.requestAnimationFrame(this.animation);
  };

  handleWindowResize = () => {
    if (this.mount !== null) {
      const width = this.mount.clientWidth;
      const height = this.mount.clientHeight;

      this.renderer.setSize(width, height);
      this.camera.aspect = width / height;

      this.camera.updateProjectionMatrix();
    }
  };

  updateDimensions = () => {
    if (this.mount !== null) {
      this.renderer.setSize(this.mount.clientWidth, this.mount.clientHeight);
      this.camera.aspect = this.mount.clientWidth / this.mount.clientHeight;
      this.camera.updateProjectionMatrix();

      this.renderer.render(this.scene, this.camera);
    }
  };


  render() {
    return (
      <div
        id="scene"
        ref={mount => {
          this.mount = mount;
        }}
      />
    );
  }
}

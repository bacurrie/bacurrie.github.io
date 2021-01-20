import React, { Component, useRef, Suspense } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/bigChungus.png';
import {Canvas, render, useFrame, useLoader} from 'react-three-fiber';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from 'drei';
//import './Model';


class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            {/* <img src={profilepic} alt="ProfilePic" className="profilepic"></img> */}
            {/* <ReactTypingEffect className="typingeffect" text={['','big chungus']} speed={100} eraseDelay={700}/> */}
            <Canvas style={{ background: 'transparent'}} camera={{ position: [0.5, 0.8, 1], fov: 90, rotation: [5,5,0] }} resize={{width: 1, height:5}}>
          <ambientLight intensity={1}/>
          <directionalLight intensity={1.5} position={[0,10,0]}/>
          <Suspense fallback={<Loading/>}>
            <Cupic />
          </Suspense>
          <OrbitControls />
        </Canvas>
            </div>
            )
        }
    }
    
function Cupic() {
    const group = useRef();
    const model = useLoader(GLTFLoader, "model/crystal.glb");

    return (
        <group ref={group}>
        <primitive object={model.scene}/>
        </group>
    );

}


function Loading() {
    return (
      <mesh visible position={[0,0,0]} rotation={[0,0,0]}>
        <sphereGeometry attach='geometry' args={[1,16,16]} />
        <meshStandardMaterial 
          attach='material' 
          color='white' 
          transparent 
          opacity={0.6} 
          roughness={1} 
          metalness={0}
        />
      </mesh>
    );
  }
    export default Home
    
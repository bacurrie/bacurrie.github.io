(this["webpackJsonpportfolio-site"]=this["webpackJsonpportfolio-site"]||[]).push([[0],{48:function(t,e,c){},49:function(t,e,c){},59:function(t,e,c){"use strict";c.r(e);var i=c(3),n=c(1),s=c(36),a=c.n(s),r=(c(48),c(49),c(27)),o=c(16),j=c(2),l=c(6),b=c(4),h=c(5),u=function(t){Object(b.a)(c,t);var e=Object(h.a)(c);function c(){return Object(j.a)(this,c),e.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(i.jsx)("li",{id:this.props.item,children:Object(i.jsx)(r.b,{to:this.props.tolink,onClick:this.props.activec.bind(this,this.props.item),children:this.props.item})})}}]),c}(n.Component),d=function(t){Object(b.a)(c,t);var e=Object(h.a)(c);function c(t){var i;return Object(j.a)(this,c),(i=e.call(this,t)).activeitem=function(t){i.state.NavItemActive.length>0&&document.getElementById(i.state.NavItemActive).classList.remove("active"),i.setState({NavItemActive:t},(function(){document.getElementById(i.state.NavItemActive).classList.add("active")}))},i.state={NavItemActive:""},i}return Object(l.a)(c,[{key:"render",value:function(){return Object(i.jsx)("nav",{children:Object(i.jsxs)("ul",{children:[Object(i.jsx)(u,{item:"Home",tolink:"/",activec:this.activeitem}),Object(i.jsx)(u,{item:"About",tolink:"/about",activec:this.activeitem}),Object(i.jsx)(u,{item:"Education",tolink:"/education",activec:this.activeitem}),Object(i.jsx)(u,{item:"Skills",tolink:"/skills",activec:this.activeitem}),Object(i.jsx)(u,{item:"Contact",tolink:"/contact",activec:this.activeitem})]})})}}]),c}(n.Component),O=(c(55),c.p,c(20)),m=c(39),p=c(61);function v(){var t=Object(n.useRef)(),e=Object(O.c)(m.a,"model/crystal.glb");return Object(i.jsx)("group",{ref:t,children:Object(i.jsx)("primitive",{object:e.scene})})}function x(){return Object(i.jsxs)("mesh",{visible:!0,position:[0,0,0],rotation:[0,0,0],children:[Object(i.jsx)("sphereGeometry",{attach:"geometry",args:[1,16,16]}),Object(i.jsx)("meshStandardMaterial",{attach:"material",color:"white",transparent:!0,opacity:.6,roughness:1,metalness:0})]})}var f=function(t){Object(b.a)(c,t);var e=Object(h.a)(c);function c(){return Object(j.a)(this,c),e.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(i.jsx)("div",{className:"condiv home",children:Object(i.jsxs)(O.a,{style:{background:"transparent"},camera:{position:[.5,.8,1],fov:60},resize:{width:5,height:10},children:[Object(i.jsx)("ambientLight",{intensity:1}),Object(i.jsx)("directionalLight",{intensity:1.5,position:[0,10,0]}),Object(i.jsx)(n.Suspense,{fallback:Object(i.jsx)(x,{}),children:Object(i.jsx)(v,{})}),Object(i.jsx)(p.a,{})]})})}}]),c}(n.Component),y=function(t){Object(b.a)(c,t);var e=Object(h.a)(c);function c(){return Object(j.a)(this,c),e.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(i.jsxs)("div",{className:"condiv",children:[Object(i.jsx)("h1",{className:"subtopic",children:"About"}),Object(i.jsx)("h4",{children:"I'm a"}),Object(i.jsx)("h3",{children:"simple man"}),Object(i.jsx)("br",{}),Object(i.jsx)("p",{children:"lorem ipsum yadda yadda yadda"})]})}}]),c}(n.Component),k=function(t){Object(b.a)(c,t);var e=Object(h.a)(c);function c(){return Object(j.a)(this,c),e.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(i.jsx)("div",{class:"widecard",children:Object(i.jsxs)("div",{class:"compdet",children:[Object(i.jsx)("h3",{children:this.props.title}),Object(i.jsx)("h4",{class:"secondtext",children:this.props.where}),Object(i.jsxs)("h4",{class:"secondtext",children:[this.props.from," - ",this.props.to]})]})})}}]),c}(n.Component),g=function(t){Object(b.a)(c,t);var e=Object(h.a)(c);function c(){return Object(j.a)(this,c),e.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(i.jsxs)("div",{className:"condiv",children:[Object(i.jsx)("h1",{className:"subtopic",children:"Education"}),Object(i.jsx)(k,{title:"BA Computer Science",where:"Mount Allison University",from:"Sept. 2015",to:"Present"})]})}}]),c}(n.Component),w=function(t){Object(b.a)(c,t);var e=Object(h.a)(c);function c(t){var i;return Object(j.a)(this,c),(i=e.call(this,t)).state={myskills:["react","3d modelling","augmented reality","pentesting",""]},i}return Object(l.a)(c,[{key:"render",value:function(){return Object(i.jsxs)("div",{className:"condiv skills",children:[Object(i.jsx)("h1",{className:"subtopic",children:"My Skills"}),Object(i.jsx)("ul",{children:this.state.myskills.map((function(t){return Object(i.jsx)("li",{children:t})}))})]})}}]),c}(n.Component),N=function(t){Object(b.a)(c,t);var e=Object(h.a)(c);function c(){return Object(j.a)(this,c),e.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(i.jsxs)("div",{className:"condiv",children:[Object(i.jsx)("h1",{className:"subtopic",children:"Ping Me"}),Object(i.jsx)("h4",{children:"Email  :   bcurrie2@mta.ca"}),Object(i.jsx)("h4",{children:Object(i.jsx)("a",{href:"https://www.instagram.com/ben._.currie/",children:"@ben._.currie"})})]})}}]),c}(n.Component);var C=function(){return Object(i.jsx)(r.a,{children:Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(d,{}),Object(i.jsx)(o.a,{exact:!0,path:"/",children:Object(i.jsx)(f,{})}),Object(i.jsx)(o.a,{path:"/about",children:Object(i.jsx)(y,{})}),Object(i.jsx)(o.a,{path:"/education",children:Object(i.jsx)(g,{})}),Object(i.jsx)(o.a,{path:"/skills",children:Object(i.jsx)(w,{})}),Object(i.jsx)(o.a,{path:"/contact",children:Object(i.jsx)(N,{})})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(i.jsx)(C,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[59,1,2]]]);
//# sourceMappingURL=main.9dba0bec.chunk.js.map
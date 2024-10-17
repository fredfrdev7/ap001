// import { useRef, useEffect } from 'react';
// import * as THREE from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// const ObjectThree = () => {
//   const canvasRef = useRef();

//   useEffect(() => {
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const loader = new GLTFLoader();
//     const renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);

//     const canvas = canvasRef.current;
//     canvas.appendChild(renderer.domElement);

//     loader.load(`/scene.gltf`, function (gltf) {
//       const object = gltf.scene;
//       scene.add(object);
//     });

//     camera.position.z = 5;

//     return () => {
//       renderer.dispose();
//     };
//   }, []);

//   return <div ref={canvasRef} />;
// };

// export default ObjectThree;

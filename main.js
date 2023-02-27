import * as THREE from 'https://unpkg.com/three/build/three.module.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.TorusGeometry( 20, 10, 10, 10 );
const material = new THREE.MeshBasicMaterial( { color: 0xa99bb, wireframe: true } );
const torus = new THREE.Mesh( geometry, material );
scene.add( torus );

camera.position.z = 99;

function animate() {
	requestAnimationFrame( animate );
    torus.rotation.x += 0.000;
    torus.rotation.y += 0.005;
    torus.rotation.z += 0.000;
	renderer.render( scene, camera );
}
animate();
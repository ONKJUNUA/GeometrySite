import * as THREE from 'https://unpkg.com/three/build/three.module.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.TorusGeometry( 2, 1, 500, 500);
const material = new THREE.MeshStandardMaterial( { color: 0xa77ee} );
const torus = new THREE.Mesh( geometry, material );
scene.add(torus);

const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(0,0,5)

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight)

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );
    torus.rotation.y += 0.01;
    torus.rotation.x -= 0.1;
	renderer.render( scene, camera );
}
animate();
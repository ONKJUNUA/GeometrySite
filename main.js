import * as THREE from 'https://threejs.org/build/three.module.js'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.TorusGeometry( 5, 2, 500, 500);
const material = new THREE.MeshStandardMaterial( { color: 0xa77ee} );
const torus = new THREE.Mesh( geometry, material );
scene.add(torus);

const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(0,0,20)

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight)

const lightHelper = new THREE.PointLightHelper(pointLight)
scene.add(lightHelper)

const gridHelper = new THREE.GridHelper(200,50)
scene.add(gridHelper)

function addStar(){
    const geometry = new THREE.SphereGeometry(0.1, 20, 20);
    const material = new THREE.MeshStandardMaterial({color: 0xffffff} );
    const star = new THREE.Mesh(geometry, material);

    const [x,y,z] = Array(3).fill().map(()=> THREE.MathUtils.randFloatSpread(100));

    star.position.set(x,y,z);
    scene.add(star)
}

Array(200).fill().forEach(addStar);
const color2 = new THREE.Color(0xff0000);
scene.background = color2;

function animate() {
	requestAnimationFrame( animate );
    camera.position.x += .001;
    camera.position.y += .001;
    camera.position.z += .05;
    torus.rotation.y += 0.01;
    torus.rotation.x -= 0.1;

	renderer.render( scene, camera );
}
animate();
import * as THREE from 'https://threejs.org/build/three.module.js'

var renderer, scene, camera, composer, circle, skelet, torus, torus2, particle, p1, p2, p3;

window.onload = function() {
  init();
  animate();
}

function init() {
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio((window.devicePixelRatio) ? window.devicePixelRatio : 1);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.autoClear = false;
  renderer.setClearColor(0x000000, 0.0);
  document.getElementById('canvas').appendChild(renderer.domElement);

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 5000);
  camera.position.z = 600;
  camera.position.x = -300;
  scene.add(camera);

  circle = new THREE.Object3D();
  torus = new THREE.Object3D();
  torus2 = new THREE.Object3D();
  skelet = new THREE.Object3D();
  particle = new THREE.Object3D();
  p1 = new THREE.Object3D();
  p2 = new THREE.Object3D();
  p3 = new THREE.Object3D();

  torus.position.z=700
  torus2.position.z=700
  torus.position.x=-600
  torus2.position.x=-600

  p1.position.z=1600

  p2.position.z=2400
  p2.position.x=-600

  p3.position.z=3600

  scene.add(circle);
  scene.add(skelet);
  scene.add(particle);
  scene.add(torus);
  scene.add(torus2);

  scene.add(p1);
  scene.add(p2);
  scene.add(p3);

  var geometry = new THREE.TetrahedronGeometry(1, 1);
  var geom = new THREE.IcosahedronGeometry(10, 0);
  var geom2 = new THREE.IcosahedronGeometry(20, 1);
  var geom3 = new THREE.TorusGeometry(15, 2, 6, 50);
  var geom4 = new THREE.TorusGeometry(12, 1, 10, 50);
  var goem5 = new THREE.SphereGeometry(5, 15, 5);


  var material = new THREE.MeshPhongMaterial({
    color: 0x111111,
    wireframe: true,
    shading: THREE.FlatShading,
  });

  for (var i = 0; i < 1000; i++) {
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
    mesh.position.multiplyScalar(90 + (Math.random() * 1000));
    mesh.rotation.set(Math.random() * 2, Math.random() * 2, Math.random() * 2);
    particle.add(mesh);
  }

  var mat = new THREE.MeshPhongMaterial({
    color: 0x111111,
    shading: THREE.FlatShading,
  });

  var mat2 = new THREE.MeshPhongMaterial({
    color: 0x111111,
    wireframe: true,
    side: THREE.DoubleSide
  });

  var ring = new THREE.Mesh(geom3, mat2);
  ring.scale.x = ring.scale.y = ring.scale.z = 15;
  ring.rotation.z=1.5
  torus.add(ring);

  var ring = new THREE.Mesh(geom3, mat2);
  ring.scale.x = ring.scale.y = ring.scale.z = 15;
  ring.rotation.x=1.5
  torus.add(ring);

  var ring = new THREE.Mesh(geom3, mat2);
  ring.scale.x = ring.scale.y = ring.scale.z = 15;
  ring.rotation.y=1.5
  torus.add(ring);

  var ring = new THREE.Mesh(geom4, mat);
  ring.scale.x = ring.scale.y = ring.scale.z = 10;
  ring.rotation.z=1.5
  torus2.add(ring);

  var ring = new THREE.Mesh(geom4, mat);
  ring.scale.x = ring.scale.y = ring.scale.z = 10;
  ring.rotation.x=1.5
  torus2.add(ring);

  var ring = new THREE.Mesh(geom4, mat);
  ring.scale.x = ring.scale.y = ring.scale.z = 10;
  ring.rotation.y=1.5
  torus2.add(ring);

  var planet = new THREE.Mesh(goem5, mat2);
  planet.scale.x = planet.scale.y = planet.scale.z = 5;
  torus.add(planet);
  
  var planet = new THREE.Mesh(geom, mat);
  planet.scale.x = planet.scale.y = planet.scale.z = 15;
  circle.add(planet);

  var planet = new THREE.Mesh(geom, mat);
  planet.scale.x = planet.scale.y = planet.scale.z = 5;
  planet.position.z = 250
  circle.add(planet);
  var planet = new THREE.Mesh(geom, mat);
  planet.scale.x = planet.scale.y = planet.scale.z = 5;
  planet.position.z = -250
  circle.add(planet);

  var planet = new THREE.Mesh(geom, mat);
  planet.scale.x = planet.scale.y = planet.scale.z = 5;
  planet.position.x = -250
  circle.add(planet);
  var planet = new THREE.Mesh(geom, mat);
  planet.scale.x = planet.scale.y = planet.scale.z = 5;
  planet.position.x = 250
  circle.add(planet);

  var planet = new THREE.Mesh(geom, mat);
  planet.scale.x = planet.scale.y = planet.scale.z = 5;
  planet.position.y = 250
  circle.add(planet);
  var planet = new THREE.Mesh(geom, mat);
  planet.scale.x = planet.scale.y = planet.scale.z = 5;
  planet.position.y = -250
  circle.add(planet);

  var planet2 = new THREE.Mesh(geom2, mat2);
  planet2.scale.x = planet2.scale.y = planet2.scale.z = 10;
  skelet.add(planet2);

  var planet = new THREE.Mesh(geom, mat);
  planet.scale.x = planet.scale.y = planet.scale.z = 15;
  p1.add(planet);

  var planet = new THREE.Mesh(geom, mat);
  planet.scale.x = planet.scale.y = planet.scale.z = 15;
  p2.add(planet);

  var planet = new THREE.Mesh(geom, mat);
  planet.scale.x = planet.scale.y = planet.scale.z = 15;
  p3.add(planet);

  var ambientLight = new THREE.AmbientLight(0xffffff );
  scene.add(ambientLight);
  
  var lights = [];
lights[0] = new THREE.DirectionalLight( 0xffffff, 1 );
lights[0].position.set( 1, 0, 0 );
lights[1] = new THREE.DirectionalLight( 0xdddddd, 1 );
lights[1].position.set( 0.75, 1, 0.5 );
lights[2] = new THREE.DirectionalLight( 0xffffff, 1 );
lights[2].position.set( -0.75, -1, 0.5 );
scene.add( lights[0] );
scene.add( lights[1] );
scene.add( lights[2] );
  window.addEventListener('resize', onWindowResize, false);

};

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);

  particle.rotation.x += 0.0010;
  particle.rotation.y -= 0.0100;
  circle.rotation.y -= 0.0020;
  circle.rotation.x -= 0.0010;
  circle.rotation.z -= 0.0030;
  skelet.rotation.x -= 0.0010;
  skelet.rotation.y += 0.0020;
  torus.rotation.x -= 0.010;
  torus.rotation.y += 0.0020;
  torus2.rotation.x += 0.0200;
  torus2.rotation.y -= 0.0200;
  torus2.rotation.z -= 0.0100;
  renderer.clear();

  renderer.render( scene, camera )
};

function moveCamera(){
  const t = document.body.getBoundingClientRect().top;
  camera.position.z=-t*0.5+600;
}

document.body.onscroll= moveCamera
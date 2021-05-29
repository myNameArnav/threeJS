import './style.css'

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.setZ(50);
camera.position.setX(0);
camera.position.setY(40);

const geometry = new THREE.TorusKnotGeometry(7, 2.5, 10000, 50);
const material = new THREE.MeshNormalMaterial({ color: 0x1DB954, wireframe: false });
const shape = new THREE.Mesh(geometry, material);
shape.position.set(30, 5, 10)
scene.add(shape);



const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);

const gridHelper = new THREE.GridHelper(200, 50);
scene.add(gridHelper)

const controls = new OrbitControls(camera, renderer.domElement);

// function addShapes() {

// }

function animate() {
    requestAnimationFrame(animate);

    shape.rotation.x += 0.01;
    shape.rotation.y += 0.01;
    shape.rotation.z += 0.001;

    controls.update();
    renderer.render(scene, camera)
}

animate();
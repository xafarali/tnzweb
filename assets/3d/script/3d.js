/*
import * as THREE from './vendor/three.module.js';
import { OrbitControls } from './vendor/controls/OrbitControls.js';
import { GLTFLoader } from './vendor/loaders/GLTFLoader.js'
*/

import * as THREE from "https://unpkg.com/three@0.169.0/build/three.module.js";
import { OrbitControls } from "https://unpkg.com/three@0.169.0/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://unpkg.com/three@0.169.0/examples/jsm/loaders/GLTFLoader.js";


// GSAP
//import  gsap from "https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js"
//import ScrollTrigger from "/assets/script/ScrollMagic.min.js"

// Scene setup
// Scene setup
const scene = new THREE.Scene();
//scene.background = new THREE.Color(0x222222);

const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);


camera.position.set(0, 0, -1.2);





//camera.zoom = 0
// set by custom values
//camera.position.set(-0.9772778436794067, 0.05594388387184223, 0.6094697382697902);


camera.lookAt( new THREE.Vector3(0,0,0));

 // 🧱 Use your own <canvas> element
const canvas = document.getElementById('canvas_3d');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
renderer.setClearColor( 0x000000, 0 ); 

// the default
renderer.setSize( window.innerWidth, window.innerHeight );
//document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;



// 🌌 CubeTexture environment map
  const loaderCube = new THREE.CubeTextureLoader();
  const envMap = loaderCube.load([
    'https://threejs.org/examples/textures/cube/Bridge2/posx.jpg',
    'https://threejs.org/examples/textures/cube/Bridge2/negx.jpg',
    'https://threejs.org/examples/textures/cube/Bridge2/posy.jpg',
    'https://threejs.org/examples/textures/cube/Bridge2/negy.jpg',
    'https://threejs.org/examples/textures/cube/Bridge2/posz.jpg',
    'https://threejs.org/examples/textures/cube/Bridge2/negz.jpg'
  ]);
  scene.environment = envMap;
  // scene.background = envMap;



// Lighting
const light = new THREE.HemisphereLight(0xffffff, 0x444444, 4.5);
scene.add(light);
let mixer,
	model;



// Load GLTF model
const loader = new GLTFLoader();
loader.load(
    // "https://threejs.org/examples/models/gltf/DamagedHelmet/glTF/DamagedHelmet.gltf",
	"./assets/3d/assets/cute-tnz-robo.glb",
    (gltf) => {
		model = gltf.scene;
		// model.position.z = .3;
		model.position.x = .1;		
		model.rotation.y = xash_degToRad(-135);

        scene.add(model);
		console.log(gltf.animations)

		// Material setup
		const roboMaterial = model.getObjectByName('Engine003_Bot_0').material
		roboMaterial.roughness=.25;
		roboMaterial.metalness=1;
		roboMaterial.clearcoat =1;
		roboMaterial.clearcoatMap = envMap;
		


		//#region Animation Setup
		// Animation Mixer
		mixer = new THREE.AnimationMixer(model);
		mixer.clipAction(gltf.animations[0]).play()
		console.log(gltf.animations)
		mixer.timeScale = .25
		mixer.update(0.02);

		animateRoboSection()
		

    },
    (xhr)=>console.log(xhr),
    (error) => console.error("Error loading model:", error)
);



// Handle resize
window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
	mixer.update(0.02);
	 renderer.render(scene, camera);
});





//#region GSAP Animations

let canvas_cont = document.querySelector('.canvas-container');
// Initial fly in
gsap.from( camera.position, {	
	x: 11,
	y: 10.1,
	z: 14,
	duration: 4
});
/*==========================================
	.home-main-slider
	#sec-about-home  {} {5, -22, - }
	#sec-client-home
	#tagline-home
	#service-home
==========================================*/
function animateRoboSection () {
const $_robo_scroll_sec = document.querySelectorAll('.home-main-slider,	#sec-about-home,#sec-client-home,#tagline-home,#service-home');

	if( $_robo_scroll_sec.length > 0 ) {
		const $_robo_sec_arr = gsap.utils.toArray($_robo_scroll_sec);
		const robo_tl_abt = new gsap.timeline().pause();
		const robo_tl_tag = new gsap.timeline().pause();

			
		if ( model ) {


			//#region first section
			robo_tl_abt.fromTo(model.rotation, 
				{
					x :xash_degToRad(5),
					y:xash_degToRad(-140)
				}, 
				{
					x :xash_degToRad(5),
					y:xash_degToRad(-40),
					z: 0,				
					duration : 4
			}, 0 )

			.to(model.position, {
				z:.5,
				duration: 4
			},0 )

			.to(canvas_cont, {
				xPercent: -60,
				duration: 2,
				filter: "blur(0px)"
			},0 )

		let st1 = ScrollTrigger.create({
				trigger:'.home-main-slider',
				start: '0 1%',
				end: '100%',
				endTrigger: "#sec-about-home",
				scrub: true,	
				markers: {startColor:'purple', endColor: 'purple'},
				ease:"power4.in",
				animation: robo_tl_abt	
			})
			//#region End Section 1

			//#region first section
			robo_tl_tag.fromTo(model.rotation, {x :xash_degToRad(5),
				y:xash_degToRad(-40),
				z: 0,}, {
				x :xash_degToRad(0),
				y:xash_degToRad(-90),
				z: 0,				
				duration : 4
			}, 1 )
			.to(model.position, {				
				z:"-=.2",
				duration: 4
			},1)
			.to(canvas_cont, {
				//x: "25vw",
				xPercent: -35,
				duration: 4,
				filter: "blur(8px)",
				//css: {zIndex: 2}
			},1 )
			// .to(canvas_cont, {
			// 	y:200,
			// 	duration: 14,
			// 	filter: "blur(0px)",
			// 	//css: {zIndex: 2}
			// }, 2 )

		let st2 = ScrollTrigger.create({
				trigger:'#sec-client-home',
				start: 'top 20%',
				end: "100%",
				endTrigger: "#sec-client-home",
				scrub: true,	
				markers: {
					startColor: 'gold'
				},
				animation: robo_tl_tag	
			})
			
			
			//#region End Section 1
			


			
			/*
			gsap.to(model.rotation, {
				scrollTrigger: {
					trigger:'.home-main-slider',
					start: 'top 20%',
					end: 'bottom 20%',
					scrub: true,	
					markers: true	
				},
				x :xash_degToRad(5),
				y:xash_degToRad(-40),
				z: 0,				
				duration : 4
			})
			gsap.to(model.position, {
				scrollTrigger: {
					trigger:'.home-main-slider',
					start: 'top 20%',
					end: 'bottom 20%',
					scrub: true,	
					markers: true	
				},
				z: 2,				
				duration : 4
			})
				*/
		}
		
	}
}




//#regionEnd










// Animation loop
function animate() {
    requestAnimationFrame(animate);
    controls.update();
	if( mixer) mixer.update(0.02);
    renderer.render(scene, camera);
}
animate();


controls.addEventListener( "change", event => {  
    //console.log( camera ); 
} )


function xash_degToRad(deg) {
	return deg * (Math.PI / 180 );
}
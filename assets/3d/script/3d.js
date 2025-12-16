/**
 * TODO, Add global css classes to make GSAP animation fixes, rotate text, slide Up, Faded, and so on. with loop
 */


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



// Grid for Debug
const showGrid = false;
//camera.zoom = 0
// set by custom values
//camera.position.set(-0.9772778436794067, 0.05594388387184223, 0.6094697382697902);



// 🧱 Use your own <canvas> element
const canvas = document.getElementById('canvas_3d');
// if 3d elments are available 
if ( canvas ) {

	console.log(" Page has 3d ")


	camera.lookAt( new THREE.Vector3(0,0,0));
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
	const light = new THREE.HemisphereLight(0xEBFBFF, 0xF7DEA6, 2.5);
	// const light = new THREE.HemisphereLight(0xEBFBFF, 0xF7EDD7, 2.5);
	const directionalLight = new THREE.DirectionalLight( 0xffffff, 1.5 );
	scene.add( directionalLight );
	scene.add(light);

	// Globals
	let mixer, model, head;


	//#region LOOK AT Target setup

	const lookTarget = new THREE.Object3D();

	const intersectionPoint =  new THREE.Vector3();
	const planeNormal = new THREE.Vector3();
	const plane = new THREE.Plane();
	const mousePosition = new THREE.Vector2();
	const raycaster = new THREE.Raycaster();

	if(showGrid) {
		const helper = new THREE.AxesHelper(0.5); // 0.5 = size
		scene.add(helper);

		const grid = new THREE.GridHelper(.1, 300, 0x444444, 0x222222);
		scene.add(grid);
	}
	




	/** Cht gpt solution */ 
	const targetgpt = new THREE.Vector3();

	/** */
	//console.log("dfdddffdddfdfdfddf" + scene.rotation.y)

	scene.add(lookTarget);
	const moveSens = .65, sceneYAxisPreset = -2.35;
	mousePosition.x = .45;
	mousePosition.y = .45;
	let firstEntry = false;
	window.addEventListener('mousemove', function(e) {

		

		mousePosition.x = ((e.clientX/this.window.innerWidth) * 2 - 1 ) * moveSens;
		mousePosition.y = ((e.clientY/this.window.innerHeight) * 2 + 1 ) * moveSens;

		mousePosition.xnormal = (mousePosition.x + 1) / 2;
		mousePosition.ynormal = (mousePosition.y - 1) / 2;
		

		// first enter smooth animate
		if (firstEntry == false ) {
			gsap.to(scene.rotation, {
				y : (sceneYAxisPreset) + mousePosition.xnormal * moveSens,
				z : mousePosition.ynormal * moveSens,
				duration:.5,
				onComplete: function () {
					firstEntry = true;
				}
			})
		}
		else {
			scene.rotation.y = (sceneYAxisPreset) + mousePosition.xnormal * moveSens;
			scene.rotation.z = mousePosition.ynormal * moveSens;
		}
		
		
		/*
		planeNormal.copy(camera.position).normalize();
		plane.setFromNormalAndCoplanarPoint(planeNormal,scene.position);
		raycaster.setFromCamera(mousePosition, camera);
		raycaster.ray.intersectPlane( plane, intersectionPoint );
		lookTarget.position.set( mousePosition.x,  mousePosition.y, -52) ;
		*/

	})


	//#regionEnd





	// Load GLTF model
	const loader = new GLTFLoader();
	loader.load(
		// "https://threejs.org/examples/models/gltf/DamagedHelmet/glTF/DamagedHelmet.gltf",
		"./assets/3d/assets/cute-tnz-robo.glb",
		(gltf) => {
			model = gltf.scene;
			// model.position.z = .3;
			scene.position.x = .1;		
			scene.rotation.y = xash_degToRad(-135);

	//model.add(helper);
			scene.add(model);
			
			console.log(gltf.animations)

			// Material setup
			const roboMaterial = model.getObjectByName('Engine003_Bot_0').material
			roboMaterial.roughness=.25;
			roboMaterial.metalness=1;
			roboMaterial.clearcoat =1;
			roboMaterial.clearcoatMap = envMap;
			
			
			head = model.getObjectByName('Body_Bottom');

			


			//#region Animation Setup
			// Animation Mixer
			mixer = new THREE.AnimationMixer(model);
			mixer.clipAction(gltf.animations[0]).play()
			console.log(gltf.animations)
			mixer.timeScale = .25
			mixer.update(0.02);

			// Animation fn
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
				robo_tl_abt.to(model.rotation, 
					{
						x :xash_degToRad(5),
						y:xash_degToRad(90),
						z: 0,				
						duration : 4
				}, 0 )

				.to(model.position, {
					x:.54,
					duration: 4
				},0 )

				.to(canvas_cont, {
					xPercent: -70,
					duration: 3,
					yPercent: 20,
					filter: "blur(0px)"
				},0 )

			let st1 = ScrollTrigger.create({
					trigger:'.home-main-slider',
					start: '0 1%',
					end: '100%',
					endTrigger: "#sec-about-home",
					scrub: true,	
					//markers: {startColor:'purple', endColor: 'purple'},
					ease:"power4.in",
					animation: robo_tl_abt	
				})
				//#region End Section 1

				//#region first section
				robo_tl_tag.to(model.rotation,{
					x :xash_degToRad(0),
					y:xash_degToRad(20),
					z: 0,				
					duration : 4
				}, 1 )
				.to(model.position, {				
					//z:"-=.2",
					x:0,
					duration: 4
				},1)
				.to(canvas_cont, {
					//x: "25vw",
					yPercent: -20,
					xPercent: -15,
					duration: 4,
					filter: "blur(5px)",
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
					start: 'top 60%',
					end: "100%",
					endTrigger: "#sec-client-home",
					scrub: true,	
					// markers: { startColor: 'gold' },
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
		if(head) {
			
			//head.lookAt(lookTarget.position)
			// project mouse into 3D world
			raycaster.setFromCamera(mousePosition, camera);
			const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
			raycaster.ray.intersectPlane(plane, targetgpt);

			// make head look at target
			// scene.lookAt(targetgpt);
			
			//head.rotateX(Math.PI); // flip horizontally
			// head.rotateY(Math.PI);
			//head.rotateZ(Math.PI);

		}
		requestAnimationFrame(animate);
		controls.update();
		if( mixer) mixer.update(0.02);
		renderer.render(scene, camera);
	}
	animate();




	controls.addEventListener( "change", event => {  
    //console.log( camera ); 
	} )


}; /// IF CANVAS





function xash_degToRad(deg) {
	return deg * (Math.PI / 180 );
}
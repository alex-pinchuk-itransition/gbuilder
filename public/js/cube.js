var scene, camera, light, renderer;
var geometry, material, mesh;
var targetRotation, targetRotationOnMouseDown;
var mouseX, mouseXOnMouseDown;
var sceneHalfX, sceneHalfY;
var pos;
var target;

init();
animate();

function init() {
	target = document.getElementById('scene');
	sceneHalfX = Math.ceil(target.clientWidth / 2);
	sceneHalfY = Math.ceil(target.clientHeight / 2);
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera( 75, target.clientWidth / target.clientHeight, 1, 10000 );
	camera.position.z = 500;
	geometry = new THREE.BoxGeometry( 200, 200, 200 );
	for ( var i = 0; i < geometry.faces.length; i += 2 ) {
		var hex = Math.random() * 0xffffff;
		geometry.faces[ i ].color.setHex( hex );
		geometry.faces[ i + 1 ].color.setHex( hex );
	}
	var material = new THREE.MeshBasicMaterial( { vertexColors: THREE.FaceColors, overdraw: 0.5 } );
	mesh = new THREE.Mesh( geometry, material );
	light = new THREE.DirectionalLight( 0xffffff, 1 );
	light.position.set( 1, 1, 1 ).normalize();
	scene.add( light );
	scene.add( mesh );
	renderer = new THREE.WebGLRenderer();
	renderer.setSize(target.clientWidth, target.clientHeight);
	renderer.setClearColor( 0xffffff );

	renderer.domElement.addEventListener( 'mousedown', onDocumentMouseDown, false );
	renderer.domElement.addEventListener( 'touchstart', onDocumentTouchStart, false );
	renderer.domElement.addEventListener( 'touchmove', onDocumentTouchMove, false );
	window.addEventListener( 'resize', onWindowResize, false );
	target.appendChild( renderer.domElement );
}

function onWindowResize() {
	sceneHalfX = scene.innerWidth / 2;
	sceneHalfY = scene.innerHeight / 2;
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
}

//

function onDocumentMouseDown(event) {
	event.preventDefault();
	renderer.domElement.addEventListener( 'mousemove', onDocumentMouseMove, false );
	renderer.domElement.addEventListener( 'mouseup', onDocumentMouseUp, false );
	renderer.domElement.addEventListener( 'mouseout', onDocumentMouseOut, false );
	pos = {x: event.clientX, y: event.clientY};
}

function onDocumentMouseMove(event) {
	mesh.rotation.y -= (pos.x - event.clientX) * 0.005;
	mesh.rotation.x -= (pos.y - event.clientY) * 0.005;
	pos = {x: event.clientX, y: event.clientY};
}

function onDocumentMouseUp(event) {
	renderer.domElement.removeEventListener( 'mousemove', onDocumentMouseMove, false );
	renderer.domElement.removeEventListener( 'mouseup', onDocumentMouseUp, false );
	renderer.domElement.removeEventListener( 'mouseout', onDocumentMouseOut, false );
}

function onDocumentMouseOut(event) {
	renderer.domElement.removeEventListener( 'mousemove', onDocumentMouseMove, false );
	renderer.domElement.removeEventListener( 'mouseup', onDocumentMouseUp, false );
	renderer.domElement.removeEventListener( 'mouseout', onDocumentMouseOut, false );
}

function onDocumentTouchStart(event) {
	if (event.touches.length == 1) {
		event.preventDefault();
		mouseXOnMouseDown = event.touches[ 0 ].pageX - sceneHalfX;
		targetRotationOnMouseDown = targetRotation;
	}
}

function onDocumentTouchMove(event) {
	if (event.touches.length == 1) {
		event.preventDefault();
		mouseX = event.touches[ 0 ].pageX - sceneHalfX;
		targetRotation = targetRotationOnMouseDown + ( mouseX - mouseXOnMouseDown ) * 0.05;
	}
}

function animate() {
	var timer = 0.0001 * Date.now();
	requestAnimationFrame( animate );
	// mesh.rotation.x += targetRotation;
	// for ( var i = 0; i < geometry.faces.length; i += 2 ) {
		// var hex = Math.random() * 0xffffff;
		// geometry.faces[ i ].color.setHex( hex );
		// geometry.faces[ i + 1 ].color.setHex( hex );
	// }
	// geometry.colorsNeedUpdate = true;
	renderer.render( scene, camera );

}


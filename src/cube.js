let scene, camera, light, renderer, geometry, material, mesh, pos, target;
const cube = {init, set_colors};
export default cube;

function init(dom_node_id = 'scene', colors = [
	0x660000, 0x006600, 0x000066, 0x666600, 0x006666, 0x660066
]) {
	target = document.getElementById(dom_node_id);
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera( 55, target.clientWidth / target.clientHeight, 1, 10000);
	camera.position.z = 500;
	geometry = new THREE.BoxGeometry( 200, 200, 200 );
	set_colors(colors);
	material = new THREE.MeshBasicMaterial( { vertexColors: THREE.FaceColors, overdraw: 0.5 } );
	mesh = new THREE.Mesh( geometry, material );
	mesh.rotation.y = -0.7;
	mesh.rotation.x = 0.5;

	light = new THREE.DirectionalLight( 0xffffff, 1 );
	light.position.set( 1, 1, 1 ).normalize();
	scene.add( light );
	scene.add( mesh );
	renderer = new THREE.WebGLRenderer({antialias: true});
	renderer.setSize(target.clientWidth, target.clientHeight);
	renderer.setClearColor( 0xffffff );

	renderer.domElement.addEventListener( 'mousedown', onDocumentMouseDown, false );
	renderer.domElement.addEventListener( 'touchstart', onDocumentTouchStart, false );
	renderer.domElement.addEventListener( 'touchmove', onDocumentTouchMove, false );
	target.appendChild( renderer.domElement );
	animate();
}

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
	if(mesh.rotation.x > 0.666) mesh.rotation.x = 0.666;
	if(mesh.rotation.x < -0.666) mesh.rotation.x = -0.666;
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
		pos = {x: event.touches[0].pageX, y: event.touches[0].pageY};
	}
}

function onDocumentTouchMove(event) {
	if (event.touches.length == 1) {
		mesh.rotation.y -= (pos.x - event.touches[0].pageX) * 0.005;
		mesh.rotation.x -= (pos.y - event.touches[0].pageY) * 0.005;
		if(mesh.rotation.x > 0.666) mesh.rotation.x = 0.666;
		if(mesh.rotation.x < -0.666) mesh.rotation.x = -0.666;
		pos = {x: event.touches[0].pageX, y: event.touches[0].pageY};
	}
}

function animate() {
	let timer = 0.0001 * Date.now();
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}

function set_colors(colors) {
	for(let i = 0; i < colors.length; i++) {
		geometry.faces[2 * i].color.setHex(colors[i]);
		geometry.faces[2 * i + 1].color.setHex(colors[i]);
	}
	geometry.colorsNeedUpdate = true;
}

webpackHotUpdate(0,{

/***/ 262:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(77), RootInstanceProvider = __webpack_require__(85), ReactMount = __webpack_require__(87), React = __webpack_require__(139); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nvar scene = void 0,\n    camera = void 0,\n    light = void 0,\n    renderer = void 0,\n    geometry = void 0,\n    material = void 0,\n    mesh = void 0,\n    pos = void 0,\n    target = void 0;\nvar cube = { init: init, set_colors: set_colors };\nexports.default = cube;\n\n\nfunction init() {\n\tvar dom_node_id = arguments.length <= 0 || arguments[0] === undefined ? 'scene' : arguments[0];\n\tvar colors = arguments.length <= 1 || arguments[1] === undefined ? [0xff0000, 0x00ff00, 0x0000ff, 0xffff00, 0x00ffff, 0xff00ff] : arguments[1];\n\n\ttarget = document.getElementById(dom_node_id);\n\tscene = new THREE.Scene();\n\tcamera = new THREE.PerspectiveCamera(75, target.clientWidth / target.clientHeight, 1, 10000);\n\tcamera.position.z = 500;\n\tgeometry = new THREE.BoxGeometry(300, 300, 300);\n\tset_colors(colors);\n\tmaterial = new THREE.MeshBasicMaterial({ vertexColors: THREE.FaceColors, overdraw: 0.5 });\n\tmesh = new THREE.Mesh(geometry, material);\n\tlight = new THREE.DirectionalLight(0xffffff, 1);\n\tlight.position.set(1, 1, 1).normalize();\n\tscene.add(light);\n\tscene.add(mesh);\n\trenderer = new THREE.WebGLRenderer({ antialias: true });\n\trenderer.setSize(target.clientWidth, target.clientHeight);\n\trenderer.setClearColor(0xffffff);\n\n\trenderer.domElement.addEventListener('mousedown', onDocumentMouseDown, false);\n\trenderer.domElement.addEventListener('touchstart', onDocumentTouchStart, false);\n\trenderer.domElement.addEventListener('touchmove', onDocumentTouchMove, false);\n\ttarget.appendChild(renderer.domElement);\n\tanimate();\n}\n\nfunction onDocumentMouseDown(event) {\n\tevent.preventDefault();\n\trenderer.domElement.addEventListener('mousemove', onDocumentMouseMove, false);\n\trenderer.domElement.addEventListener('mouseup', onDocumentMouseUp, false);\n\trenderer.domElement.addEventListener('mouseout', onDocumentMouseOut, false);\n\tpos = { x: event.clientX, y: event.clientY };\n}\n\nfunction onDocumentMouseMove(event) {\n\tmesh.rotation.y -= (pos.x - event.clientX) * 0.005;\n\tmesh.rotation.x -= (pos.y - event.clientY) * 0.005;\n\tif (mesh.rotation.x > 0.666) mesh.rotation.x = 0.666;\n\tif (mesh.rotation.x < -0.666) mesh.rotation.x = -0.666;\n\tpos = { x: event.clientX, y: event.clientY };\n}\n\nfunction onDocumentMouseUp(event) {\n\trenderer.domElement.removeEventListener('mousemove', onDocumentMouseMove, false);\n\trenderer.domElement.removeEventListener('mouseup', onDocumentMouseUp, false);\n\trenderer.domElement.removeEventListener('mouseout', onDocumentMouseOut, false);\n}\n\nfunction onDocumentMouseOut(event) {\n\trenderer.domElement.removeEventListener('mousemove', onDocumentMouseMove, false);\n\trenderer.domElement.removeEventListener('mouseup', onDocumentMouseUp, false);\n\trenderer.domElement.removeEventListener('mouseout', onDocumentMouseOut, false);\n}\n\nfunction onDocumentTouchStart(event) {\n\tif (event.touches.length == 1) {\n\t\tevent.preventDefault();\n\t\tpos = { x: event.touches[0].pageX, y: event.touches[0].pageY };\n\t}\n}\n\nfunction onDocumentTouchMove(event) {\n\tif (event.touches.length == 1) {\n\t\tmesh.rotation.y -= (pos.x - event.touches[0].pageX) * 0.005;\n\t\tmesh.rotation.x -= (pos.y - event.touches[0].pageY) * 0.005;\n\t\tif (mesh.rotation.x > 0.666) mesh.rotation.x = 0.666;\n\t\tif (mesh.rotation.x < -0.666) mesh.rotation.x = -0.666;\n\t\tpos = { x: event.touches[0].pageX, y: event.touches[0].pageY };\n\t}\n}\n\nfunction animate() {\n\tvar timer = 0.0001 * Date.now();\n\trequestAnimationFrame(animate);\n\trenderer.render(scene, camera);\n}\n\nfunction set_colors(colors) {\n\tfor (var i = 0; i < colors.length; i++) {\n\t\tgeometry.faces[2 * i].color.setHex(colors[i]);\n\t\tgeometry.faces[2 * i + 1].color.setHex(colors[i]);\n\t}\n\tgeometry.colorsNeedUpdate = true;\n}\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(263); if (makeExportsHot(module, __webpack_require__(139))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot not apply hot update to \" + \"cube.js\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/cube.js\n ** module id = 262\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/cube.js?");

/***/ }

})
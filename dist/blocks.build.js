/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCBcIi4vYmxvY2svYmxvY2suanNcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9ja3MuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__(/*! ./style.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_scss__);\n/**\n * BLOCK: review-card\n *\n * based on Andy Bell series: \"Learning Gutenberg\"\n * https://css-tricks.com/learning-gutenberg-7-building-our-block-custom-card-block/\n *\n */\n\n//  Import CSS.\n\n\n\nvar _wp$blockEditor = wp.blockEditor,\n    RichText = _wp$blockEditor.RichText,\n    MediaUpload = _wp$blockEditor.MediaUpload,\n    PlainText = _wp$blockEditor.PlainText;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar Button = wp.components.Button;\n\n\nregisterBlockType(\"review-card/main\", {\n\ttitle: \"Card\",\n\ticon: \"heart\",\n\tcategory: \"common\",\n\tattributes: {\n\t\timageUrl: {\n\t\t\tattribute: \"src\",\n\t\t\tselector: \".card__image\"\n\t\t},\n\t\timageAlt: {\n\t\t\tattribute: \"alt\",\n\t\t\tselector: \".card__image\"\n\t\t},\n\t\ttitle: {\n\t\t\tsource: \"text\",\n\t\t\tselector: \".card__title\"\n\t\t},\n\t\tbody: {\n\t\t\ttype: \"array\",\n\t\t\tsource: \"children\",\n\t\t\tselector: \".card__body\"\n\t\t}\n\t},\n\tedit: function edit(_ref) {\n\t\tvar attributes = _ref.attributes,\n\t\t    className = _ref.className,\n\t\t    setAttributes = _ref.setAttributes;\n\n\t\tvar getImageButton = function getImageButton(openEvent) {\n\t\t\tif (attributes.imageUrl) {\n\t\t\t\treturn wp.element.createElement(\"img\", {\n\t\t\t\t\talt: \"\",\n\t\t\t\t\t\"aria-hidden\": \"true\",\n\t\t\t\t\tsrc: attributes.imageUrl,\n\t\t\t\t\tonClick: openEvent,\n\t\t\t\t\tclassName: \"image\"\n\t\t\t\t});\n\t\t\t}\n\t\t\treturn wp.element.createElement(\n\t\t\t\t\"div\",\n\t\t\t\t{ className: \"button-container\" },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\tButton,\n\t\t\t\t\t{ onClick: openEvent, className: \"button button-large\" },\n\t\t\t\t\t\"Pick an image\"\n\t\t\t\t)\n\t\t\t);\n\t\t};\n\n\t\treturn wp.element.createElement(\n\t\t\t\"div\",\n\t\t\t{ className: \"container\" },\n\t\t\twp.element.createElement(MediaUpload, {\n\t\t\t\tonSelect: function onSelect(media) {\n\t\t\t\t\tsetAttributes({ imageAlt: media.alt, imageUrl: media.url });\n\t\t\t\t},\n\t\t\t\ttype: \"image\",\n\t\t\t\tvalue: attributes.imageID,\n\t\t\t\trender: function render(_ref2) {\n\t\t\t\t\tvar open = _ref2.open;\n\t\t\t\t\treturn getImageButton(open);\n\t\t\t\t}\n\t\t\t}),\n\t\t\twp.element.createElement(PlainText, {\n\t\t\t\tonChange: function onChange(content) {\n\t\t\t\t\treturn setAttributes({ title: content });\n\t\t\t\t},\n\t\t\t\tvalue: attributes.title,\n\t\t\t\tplaceholder: \"Your card title\",\n\t\t\t\tclassName: \"heading\"\n\t\t\t}),\n\t\t\twp.element.createElement(RichText, {\n\t\t\t\tonChange: function onChange(content) {\n\t\t\t\t\treturn setAttributes({ body: content });\n\t\t\t\t},\n\t\t\t\tvalue: attributes.body,\n\t\t\t\tmultiline: \"p\",\n\t\t\t\tplaceholder: \"Your card text\",\n\t\t\t\tallowedFormats: [\"bold\", \"italic\", \"underline\"],\n\t\t\t\tisSelected: attributes.isSelected\n\t\t\t})\n\t\t);\n\t},\n\tsave: function save(_ref3) {\n\t\tvar attributes = _ref3.attributes;\n\n\t\tvar cardImage = function cardImage(src, alt) {\n\t\t\tif (!src) {\n\t\t\t\treturn null;\n\t\t\t}\n\n\t\t\tif (alt) {\n\t\t\t\treturn wp.element.createElement(\"img\", { className: \"card__image\", src: src, alt: alt });\n\t\t\t}\n\n\t\t\t// No alt set, so let's hide it from screen readers\n\t\t\treturn wp.element.createElement(\"img\", { className: \"card__image\", src: src, alt: \"\", \"aria-hidden\": \"true\" });\n\t\t};\n\n\t\treturn wp.element.createElement(\n\t\t\t\"div\",\n\t\t\t{ className: \"card\" },\n\t\t\tcardImage(attributes.imageUrl, attributes.imageAlt),\n\t\t\twp.element.createElement(\n\t\t\t\t\"div\",\n\t\t\t\t{ className: \"card__content\" },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t\"h3\",\n\t\t\t\t\t{ className: \"card__title\" },\n\t\t\t\t\tattributes.title\n\t\t\t\t),\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t\"div\",\n\t\t\t\t\t{ className: \"card__body\" },\n\t\t\t\t\tattributes.body\n\t\t\t\t)\n\t\t\t)\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQkxPQ0s6IHJldmlldy1jYXJkXG4gKlxuICogYmFzZWQgb24gQW5keSBCZWxsIHNlcmllczogXCJMZWFybmluZyBHdXRlbmJlcmdcIlxuICogaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9sZWFybmluZy1ndXRlbmJlcmctNy1idWlsZGluZy1vdXItYmxvY2stY3VzdG9tLWNhcmQtYmxvY2svXG4gKlxuICovXG5cbi8vICBJbXBvcnQgQ1NTLlxuaW1wb3J0IFwiLi9lZGl0b3Iuc2Nzc1wiO1xuaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XG5cbnZhciBfd3AkYmxvY2tFZGl0b3IgPSB3cC5ibG9ja0VkaXRvcixcbiAgICBSaWNoVGV4dCA9IF93cCRibG9ja0VkaXRvci5SaWNoVGV4dCxcbiAgICBNZWRpYVVwbG9hZCA9IF93cCRibG9ja0VkaXRvci5NZWRpYVVwbG9hZCxcbiAgICBQbGFpblRleHQgPSBfd3AkYmxvY2tFZGl0b3IuUGxhaW5UZXh0O1xudmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlO1xudmFyIEJ1dHRvbiA9IHdwLmNvbXBvbmVudHMuQnV0dG9uO1xuXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKFwicmV2aWV3LWNhcmQvbWFpblwiLCB7XG5cdHRpdGxlOiBcIkNhcmRcIixcblx0aWNvbjogXCJoZWFydFwiLFxuXHRjYXRlZ29yeTogXCJjb21tb25cIixcblx0YXR0cmlidXRlczoge1xuXHRcdGltYWdlVXJsOiB7XG5cdFx0XHRhdHRyaWJ1dGU6IFwic3JjXCIsXG5cdFx0XHRzZWxlY3RvcjogXCIuY2FyZF9faW1hZ2VcIlxuXHRcdH0sXG5cdFx0aW1hZ2VBbHQ6IHtcblx0XHRcdGF0dHJpYnV0ZTogXCJhbHRcIixcblx0XHRcdHNlbGVjdG9yOiBcIi5jYXJkX19pbWFnZVwiXG5cdFx0fSxcblx0XHR0aXRsZToge1xuXHRcdFx0c291cmNlOiBcInRleHRcIixcblx0XHRcdHNlbGVjdG9yOiBcIi5jYXJkX190aXRsZVwiXG5cdFx0fSxcblx0XHRib2R5OiB7XG5cdFx0XHR0eXBlOiBcImFycmF5XCIsXG5cdFx0XHRzb3VyY2U6IFwiY2hpbGRyZW5cIixcblx0XHRcdHNlbGVjdG9yOiBcIi5jYXJkX19ib2R5XCJcblx0XHR9XG5cdH0sXG5cdGVkaXQ6IGZ1bmN0aW9uIGVkaXQoX3JlZikge1xuXHRcdHZhciBhdHRyaWJ1dGVzID0gX3JlZi5hdHRyaWJ1dGVzLFxuXHRcdCAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcblx0XHQgICAgc2V0QXR0cmlidXRlcyA9IF9yZWYuc2V0QXR0cmlidXRlcztcblxuXHRcdHZhciBnZXRJbWFnZUJ1dHRvbiA9IGZ1bmN0aW9uIGdldEltYWdlQnV0dG9uKG9wZW5FdmVudCkge1xuXHRcdFx0aWYgKGF0dHJpYnV0ZXMuaW1hZ2VVcmwpIHtcblx0XHRcdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7XG5cdFx0XHRcdFx0YWx0OiBcIlwiLFxuXHRcdFx0XHRcdFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsXG5cdFx0XHRcdFx0c3JjOiBhdHRyaWJ1dGVzLmltYWdlVXJsLFxuXHRcdFx0XHRcdG9uQ2xpY2s6IG9wZW5FdmVudCxcblx0XHRcdFx0XHRjbGFzc05hbWU6IFwiaW1hZ2VcIlxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFwiZGl2XCIsXG5cdFx0XHRcdHsgY2xhc3NOYW1lOiBcImJ1dHRvbi1jb250YWluZXJcIiB9LFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0QnV0dG9uLFxuXHRcdFx0XHRcdHsgb25DbGljazogb3BlbkV2ZW50LCBjbGFzc05hbWU6IFwiYnV0dG9uIGJ1dHRvbi1sYXJnZVwiIH0sXG5cdFx0XHRcdFx0XCJQaWNrIGFuIGltYWdlXCJcblx0XHRcdFx0KVxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFwiZGl2XCIsXG5cdFx0XHR7IGNsYXNzTmFtZTogXCJjb250YWluZXJcIiB9LFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KE1lZGlhVXBsb2FkLCB7XG5cdFx0XHRcdG9uU2VsZWN0OiBmdW5jdGlvbiBvblNlbGVjdChtZWRpYSkge1xuXHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoeyBpbWFnZUFsdDogbWVkaWEuYWx0LCBpbWFnZVVybDogbWVkaWEudXJsIH0pO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHR0eXBlOiBcImltYWdlXCIsXG5cdFx0XHRcdHZhbHVlOiBhdHRyaWJ1dGVzLmltYWdlSUQsXG5cdFx0XHRcdHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKF9yZWYyKSB7XG5cdFx0XHRcdFx0dmFyIG9wZW4gPSBfcmVmMi5vcGVuO1xuXHRcdFx0XHRcdHJldHVybiBnZXRJbWFnZUJ1dHRvbihvcGVuKTtcblx0XHRcdFx0fVxuXHRcdFx0fSksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoUGxhaW5UZXh0LCB7XG5cdFx0XHRcdG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShjb250ZW50KSB7XG5cdFx0XHRcdFx0cmV0dXJuIHNldEF0dHJpYnV0ZXMoeyB0aXRsZTogY29udGVudCB9KTtcblx0XHRcdFx0fSxcblx0XHRcdFx0dmFsdWU6IGF0dHJpYnV0ZXMudGl0bGUsXG5cdFx0XHRcdHBsYWNlaG9sZGVyOiBcIllvdXIgY2FyZCB0aXRsZVwiLFxuXHRcdFx0XHRjbGFzc05hbWU6IFwiaGVhZGluZ1wiXG5cdFx0XHR9KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChSaWNoVGV4dCwge1xuXHRcdFx0XHRvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoY29udGVudCkge1xuXHRcdFx0XHRcdHJldHVybiBzZXRBdHRyaWJ1dGVzKHsgYm9keTogY29udGVudCB9KTtcblx0XHRcdFx0fSxcblx0XHRcdFx0dmFsdWU6IGF0dHJpYnV0ZXMuYm9keSxcblx0XHRcdFx0bXVsdGlsaW5lOiBcInBcIixcblx0XHRcdFx0cGxhY2Vob2xkZXI6IFwiWW91ciBjYXJkIHRleHRcIixcblx0XHRcdFx0YWxsb3dlZEZvcm1hdHM6IFtcImJvbGRcIiwgXCJpdGFsaWNcIiwgXCJ1bmRlcmxpbmVcIl0sXG5cdFx0XHRcdGlzU2VsZWN0ZWQ6IGF0dHJpYnV0ZXMuaXNTZWxlY3RlZFxuXHRcdFx0fSlcblx0XHQpO1xuXHR9LFxuXHRzYXZlOiBmdW5jdGlvbiBzYXZlKF9yZWYzKSB7XG5cdFx0dmFyIGF0dHJpYnV0ZXMgPSBfcmVmMy5hdHRyaWJ1dGVzO1xuXG5cdFx0dmFyIGNhcmRJbWFnZSA9IGZ1bmN0aW9uIGNhcmRJbWFnZShzcmMsIGFsdCkge1xuXHRcdFx0aWYgKCFzcmMpIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChhbHQpIHtcblx0XHRcdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IGNsYXNzTmFtZTogXCJjYXJkX19pbWFnZVwiLCBzcmM6IHNyYywgYWx0OiBhbHQgfSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIE5vIGFsdCBzZXQsIHNvIGxldCdzIGhpZGUgaXQgZnJvbSBzY3JlZW4gcmVhZGVyc1xuXHRcdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IGNsYXNzTmFtZTogXCJjYXJkX19pbWFnZVwiLCBzcmM6IHNyYywgYWx0OiBcIlwiLCBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0pO1xuXHRcdH07XG5cblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XCJkaXZcIixcblx0XHRcdHsgY2xhc3NOYW1lOiBcImNhcmRcIiB9LFxuXHRcdFx0Y2FyZEltYWdlKGF0dHJpYnV0ZXMuaW1hZ2VVcmwsIGF0dHJpYnV0ZXMuaW1hZ2VBbHQpLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcImRpdlwiLFxuXHRcdFx0XHR7IGNsYXNzTmFtZTogXCJjYXJkX19jb250ZW50XCIgfSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFwiaDNcIixcblx0XHRcdFx0XHR7IGNsYXNzTmFtZTogXCJjYXJkX190aXRsZVwiIH0sXG5cdFx0XHRcdFx0YXR0cmlidXRlcy50aXRsZVxuXHRcdFx0XHQpLFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XCJkaXZcIixcblx0XHRcdFx0XHR7IGNsYXNzTmFtZTogXCJjYXJkX19ib2R5XCIgfSxcblx0XHRcdFx0XHRhdHRyaWJ1dGVzLmJvZHlcblx0XHRcdFx0KVxuXHRcdFx0KVxuXHRcdCk7XG5cdH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2NrL2Jsb2NrLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0b3Iuc2Nzcz80OWQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zdHlsZS5zY3NzPzgwZjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);
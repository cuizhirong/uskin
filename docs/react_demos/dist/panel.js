/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	var Panel = uskin.Panel;

	var c1 = 'Meanwhile in Russia, an outpouring of grief gripped the historic city of St. Petersburg, home of many of the victims. President Vladimir Putin declared a nationwide day of mourning, and flags flew at half-staff.';
	var c2 = 'viation experts joined the searchers in a remote part of the Sinai, seeking any clues to what caused the Metrojet Airbus A321-200 to plummet abruptly from 31,000 feet just 23 minutes after it departed from the Red Sea resort of Sharm el-Sheikh bound for St. Petersburg.';
	var c3 = 'ot quite ready to introduce your infant to Taylor Swift? Then ease them into Swiftie-hood with these lullaby versions of her greatest hits, brought you to by Rockabye Baby! The album (which is available for purchase on iTunes) offers gentle, twinkly, super-soothing versions of recent hits like “Bad Blood” and “Blank Space” along with old classics like “Love Story” and “You Belong With Me.”';
	var c4 = 'You’ll hear the melodies you know and love reimagined with xylophones, bells and wood blocks. If you don’t have an infant you need to lure to sleep, we recommend just listening on your own. The songs will make great background music to keep you calm while you work or try to figure out how your health insurance works.';

	var text = [{
	  title: React.createElement(
	    'div',
	    null,
	    'Crashed Russian Plane Broke Up in the Air'
	  ),
	  content: React.createElement(
	    'div',
	    null,
	    React.createElement(
	      'p',
	      null,
	      c1
	    ),
	    React.createElement(
	      'p',
	      null,
	      c2
	    )
	  )
	}, {
	  title: React.createElement(
	    'div',
	    null,
	    'Taylor Swift Songs Sound Incredibly Soothing as Lullabies'
	  ),
	  content: React.createElement(
	    'div',
	    null,
	    c3,
	    React.createElement('br', null),
	    c4
	  )
	}];

	ReactDOM.render(React.createElement(Panel, { title: text[0].title, content: text[0].content }), document.getElementById('example'));

	ReactDOM.render(React.createElement(Panel, { title: text[1].title, content: text[1].content, width: '600' }), document.getElementById('example2'));

/***/ }
/******/ ]);
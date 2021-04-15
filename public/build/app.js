(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var _components_Comment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Comment */ "./assets/js/components/Comment/index.js");




react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Comment__WEBPACK_IMPORTED_MODULE_3__.default, null), document.getElementById('root'));

/***/ }),

/***/ "./assets/js/components/Comment/index.js":
/*!***********************************************!*\
  !*** ./assets/js/components/Comment/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");















function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function Comment() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      comments = _useState2[0],
      setComments = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      isLoading = _useState4[0],
      setIsLoading = _useState4[1];

  var getComments = (0,react__WEBPACK_IMPORTED_MODULE_14__.useCallback)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var response, json;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            setIsLoading(true);
            _context.next = 3;
            return fetch('https://localhost:8000/api/comments');

          case 3:
            response = _context.sent;
            _context.next = 6;
            return response.json();

          case 6:
            json = _context.sent;
            setComments(json);
            setIsLoading(false);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), []);
  (0,react__WEBPACK_IMPORTED_MODULE_14__.useEffect)(function () {
    getComments();
  }, []);
  console.log(comments);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement("section", {
    id: "comments-section",
    className: "comments-box"
  }, isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement("p", null, "Loading..."), comments ? comments.map(function (comment, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement("div", {
      key: index,
      className: "comment-box"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement("img", {
      className: "user-img",
      src: "pics/anonymous.jpg"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement("div", {
      className: "comment-content"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement("div", {
      className: "name-index-box"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement("p", {
      className: "comment-name"
    }, comment.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement("p", {
      className: "comment-index-id"
    }, "Comment #", comment.id)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement("p", {
      className: "comment-text"
    }, comment.comment), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement("div", {
      className: "time-edit-delete-box"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement("p", {
      className: "comment-timestamp"
    }, comment.timestamp), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement("div", {
      className: "edit-delete-box"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement("a", {
      href: "#",
      className: "delete-comment-button",
      "data-id": comment.id
    }, "Delete"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement("a", {
      href: "/comments/edit/{comment.id}",
      className: "edit-comment-button"
    }, "Edit")))));
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement("p", {
    className: "no-comments-text"
  }, "No comments to show."));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Comment);

/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_from_js-node_modules_core-js_modules_es_array_i-32ab3e"], () => (__webpack_exec__("./assets/js/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0NvbW1lbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzIl0sIm5hbWVzIjpbIlJlYWN0RE9NIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIkNvbW1lbnQiLCJ1c2VTdGF0ZSIsImNvbW1lbnRzIiwic2V0Q29tbWVudHMiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJnZXRDb21tZW50cyIsInVzZUNhbGxiYWNrIiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwibWFwIiwiY29tbWVudCIsImluZGV4IiwibmFtZSIsImlkIiwidGltZXN0YW1wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLDZDQUFBLGVBQWdCLGlEQUFDLHdEQUFELE9BQWhCLEVBQTZCQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBN0IsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7O0FBR0EsU0FBU0MsT0FBVCxHQUFtQjtBQUFBLGtCQUVpQkMsZ0RBQVEsQ0FBQyxFQUFELENBRnpCO0FBQUE7QUFBQSxNQUVSQyxRQUZRO0FBQUEsTUFFRUMsV0FGRjs7QUFBQSxtQkFHbUJGLGdEQUFRLENBQUMsSUFBRCxDQUgzQjtBQUFBO0FBQUEsTUFHUkcsU0FIUTtBQUFBLE1BR0dDLFlBSEg7O0FBS2YsTUFBTUMsV0FBVyxHQUFHQyxtREFBVyx1RUFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDNUJGLHdCQUFZLENBQUMsSUFBRCxDQUFaO0FBRDRCO0FBQUEsbUJBRUxHLEtBQUssQ0FBQyxxQ0FBRCxDQUZBOztBQUFBO0FBRXRCQyxvQkFGc0I7QUFBQTtBQUFBLG1CQUdUQSxRQUFRLENBQUNDLElBQVQsRUFIUzs7QUFBQTtBQUd0QkEsZ0JBSHNCO0FBSTVCUCx1QkFBVyxDQUFDTyxJQUFELENBQVg7QUFDQUwsd0JBQVksQ0FBQyxLQUFELENBQVo7O0FBTDRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQsSUFNNUIsRUFONEIsQ0FBL0I7QUFRQU0sbURBQVMsQ0FBQyxZQUFNO0FBQ1pMLGVBQVc7QUFDZCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUFNLFNBQU8sQ0FBQ0MsR0FBUixDQUFZWCxRQUFaO0FBRUEsc0JBQ0k7QUFBUyxNQUFFLEVBQUMsa0JBQVo7QUFBK0IsYUFBUyxFQUFDO0FBQXpDLEtBQ0tFLFNBQVMsaUJBQUksMEVBRGxCLEVBRUtGLFFBQVEsR0FDTEEsUUFBUSxDQUFDWSxHQUFULENBQWEsVUFBQ0MsT0FBRCxFQUFVQyxLQUFWO0FBQUEsd0JBQ1Q7QUFBSyxTQUFHLEVBQUVBLEtBQVY7QUFBaUIsZUFBUyxFQUFDO0FBQTNCLG9CQUNJO0FBQUssZUFBUyxFQUFDLFVBQWY7QUFBMEIsU0FBRyxFQUFDO0FBQTlCLE1BREosZUFFSTtBQUFLLGVBQVMsRUFBQztBQUFmLG9CQUVJO0FBQUssZUFBUyxFQUFDO0FBQWYsb0JBQ0k7QUFBRyxlQUFTLEVBQUM7QUFBYixPQUE2QkQsT0FBTyxDQUFDRSxJQUFyQyxDQURKLGVBRUk7QUFBRyxlQUFTLEVBQUM7QUFBYixvQkFBMENGLE9BQU8sQ0FBQ0csRUFBbEQsQ0FGSixDQUZKLGVBT0k7QUFBRyxlQUFTLEVBQUM7QUFBYixPQUE2QkgsT0FBTyxDQUFDQSxPQUFyQyxDQVBKLGVBUUk7QUFBSyxlQUFTLEVBQUM7QUFBZixvQkFDSTtBQUFHLGVBQVMsRUFBQztBQUFiLE9BQWtDQSxPQUFPLENBQUNJLFNBQTFDLENBREosZUFFSTtBQUFLLGVBQVMsRUFBQztBQUFmLG9CQUNJO0FBQUcsVUFBSSxFQUFDLEdBQVI7QUFBWSxlQUFTLEVBQUMsdUJBQXRCO0FBQThDLGlCQUFTSixPQUFPLENBQUNHO0FBQS9ELGdCQURKLGVBRUk7QUFBRyxVQUFJLEVBQUMsNkJBQVI7QUFBc0MsZUFBUyxFQUFDO0FBQWhELGNBRkosQ0FGSixDQVJKLENBRkosQ0FEUztBQUFBLEdBQWIsQ0FESyxnQkF3Qkw7QUFBRyxhQUFTLEVBQUM7QUFBYiw0QkExQlIsQ0FESjtBQStCSDs7QUFFRCxpRUFBZWxCLE9BQWYsRTs7Ozs7Ozs7Ozs7O0FDdkRBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9hcHAuY3NzJztcclxuaW1wb3J0IENvbW1lbnQgZnJvbSAnLi9jb21wb25lbnRzL0NvbW1lbnQnO1xyXG4gICAgXHJcblJlYWN0RE9NLnJlbmRlcig8Q29tbWVudCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmZ1bmN0aW9uIENvbW1lbnQoKSB7XHJcblxyXG4gICAgY29uc3QgW2NvbW1lbnRzLCBzZXRDb21tZW50c10gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShudWxsKVxyXG5cclxuICAgIGNvbnN0IGdldENvbW1lbnRzID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHNldElzTG9hZGluZyh0cnVlKVxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vbG9jYWxob3N0OjgwMDAvYXBpL2NvbW1lbnRzJyk7XHJcbiAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBzZXRDb21tZW50cyhqc29uKVxyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSlcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0Q29tbWVudHMoKVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgY29uc29sZS5sb2coY29tbWVudHMpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbiBpZD1cImNvbW1lbnRzLXNlY3Rpb25cIiBjbGFzc05hbWU9XCJjb21tZW50cy1ib3hcIj5cclxuICAgICAgICAgICAge2lzTG9hZGluZyAmJiA8cD5Mb2FkaW5nLi4uPC9wPn1cclxuICAgICAgICAgICAge2NvbW1lbnRzID9cclxuICAgICAgICAgICAgICAgIGNvbW1lbnRzLm1hcCgoY29tbWVudCwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJjb21tZW50LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInVzZXItaW1nXCIgc3JjPVwicGljcy9hbm9ueW1vdXMuanBnXCI+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudC1jb250ZW50XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYW1lLWluZGV4LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbW1lbnQtbmFtZVwiPntjb21tZW50Lm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbW1lbnQtaW5kZXgtaWRcIj5Db21tZW50ICN7Y29tbWVudC5pZH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb21tZW50LXRleHRcIj57Y29tbWVudC5jb21tZW50fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZS1lZGl0LWRlbGV0ZS1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb21tZW50LXRpbWVzdGFtcFwiPntjb21tZW50LnRpbWVzdGFtcH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0LWRlbGV0ZS1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJkZWxldGUtY29tbWVudC1idXR0b25cIiBkYXRhLWlkPXtjb21tZW50LmlkfT5EZWxldGU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvY29tbWVudHMvZWRpdC97Y29tbWVudC5pZH1cIiBjbGFzc05hbWU9XCJlZGl0LWNvbW1lbnQtYnV0dG9uXCI+RWRpdDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICApXHJcbjpcclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm5vLWNvbW1lbnRzLXRleHRcIj5ObyBjb21tZW50cyB0byBzaG93LjwvcD5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1lbnQ7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==
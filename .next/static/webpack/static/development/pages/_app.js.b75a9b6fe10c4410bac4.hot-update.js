webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/navBar.js":
/*!*************************!*\
  !*** ./pages/navBar.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/sebastiang/Desktop/code/Work/deco-design-react/react-deco-design/pages/navBar.js";




class NavBar extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  componentDidMount() {
    window.addEventListener("scroll", this.resizeHeaderOnScroll);
  }

  resizeHeaderOnScroll() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
          shrinkOn = 80,
          header = document.getElementById("navbar"),
          logo = document.getElementById("logo-mercedes-grossmann"); //   orbisLogoShrunk = document.getElementById("orbis-logo-shrunk")

    if (distanceY > shrinkOn) {
      header.classList.add("navbar-smaller");
      header.classList.remove("navbar");
      logo.classList.add("logo-small");
      logo.classList.remove("logo-big"); //   orbisLogoShrunk.style.visibility = "visible"
    } else {
      header.classList.add("navbar");
      header.classList.remove("navbar-smaller");
      logo.classList.add("logo-big");
      logo.classList.remove("logo-small"); //   orbisLogoShrunk.style.visibility = "hidden"
    }
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "nav",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      id: "navbar",
      className: "jsx-1137546468" + " " + "navbar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "/index",
      id: "nav-links",
      className: "jsx-1137546468",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, "Services"), "|", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "/index",
      id: "nav-links",
      className: "jsx-1137546468",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, "Projects"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      id: "logo-mercedes-grossmann",
      src: "https://i.dlpng.com/static/png/173886_preview.png",
      alt: "logo",
      className: "jsx-1137546468" + " " + "logo-big",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "/index",
      id: "nav-links",
      className: "jsx-1137546468",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, "Work"), "|", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "/portfolio",
      id: "nav-links",
      className: "jsx-1137546468",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, "PORTFOLIO"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1137546468",
      __self: this
    }, "@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');.navbar.jsx-1137546468{height:18vh;background-color:#333333;box-sizing:border-box;position:fixed;border-bottom:solid 5px #D4145A;width:100%;top:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-text-decoration:none;text-decoration:none;font-size:50%;font-color:red;}.navbar-smaller.jsx-1137546468{height:12vh;background-color:#333333;box-sizing:border-box;position:fixed;border-bottom:solid 5px #D4145A;width:100%;top:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0px;}#nav-links.jsx-1137546468{color:white;padding:10px;font-family:'Montserrat bold',sans-serif;font-size:4vh;-webkit-text-decoration:none;text-decoration:none;}#nav-links.jsx-1137546468: hover.jsx-1137546468{-webkit-text-decoration:underline;text-decoration:underline;font-color:red;}.logo-small.jsx-1137546468{height:10vh;}.logo-big.jsx-1137546468{height:18vh;}@media (max-width:600px){div.jsx-1137546468{background:blue;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NlYmFzdGlhbmcvRGVza3RvcC9jb2RlL1dvcmsvZGVjby1kZXNpZ24tcmVhY3QvcmVhY3QtZGVjby1kZXNpZ24vcGFnZXMvbmF2QmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlEYyxBQUVpRixBQUcvRCxBQWdCRCxBQWVDLEFBUWEsQUFLYixBQUlELEFBS0ssWUFwRFUsQUFnQkQsQUFlWixBQWFmLEFBSUEsSUFLQSxTQXJCNEMsWUEvQnBCLEFBZ0JELHNCQWZOLEFBZ0JELENBcUJBLE1BTkEsUUE5QmtCLEFBZ0JELENBcUJqQyxLQU51QiwwQkE5QlYsQUFnQkQsV0FmSixBQWdCRCxNQWZRLEFBZ0JELE9BY2QsbUVBN0IrQixBQWdCRCwySEFmVCxBQWdCRCw2RkFmRyxBQWdCWCxXQUVaLHVDQWpCZ0IsY0FDQyxlQUVqQiIsImZpbGUiOiIvaG9tZS9zZWJhc3RpYW5nL0Rlc2t0b3AvY29kZS9Xb3JrL2RlY28tZGVzaWduLXJlYWN0L3JlYWN0LWRlY28tZGVzaWduL3BhZ2VzL25hdkJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICBMaW5rICBmcm9tICduZXh0L2xpbmsnO1xuXG5jbGFzcyBOYXZCYXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMucmVzaXplSGVhZGVyT25TY3JvbGwpO1xuXHR9XG5cblx0cmVzaXplSGVhZGVyT25TY3JvbGwoKSB7XG5cdFx0Y29uc3QgZGlzdGFuY2VZID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AsXG5cdFx0XHRzaHJpbmtPbiA9IDgwXHQsXG5cdFx0XHRoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdmJhclwiKSxcblx0XHRcdGxvZ28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ28tbWVyY2VkZXMtZ3Jvc3NtYW5uXCIpXG5cdFx0Ly8gICBvcmJpc0xvZ29TaHJ1bmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9yYmlzLWxvZ28tc2hydW5rXCIpXG5cblxuXHRcdGlmIChkaXN0YW5jZVkgPiBzaHJpbmtPbikge1xuXHRcdFx0aGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJuYXZiYXItc21hbGxlclwiKTtcblx0XHRcdGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKFwibmF2YmFyXCIpO1xuXHRcdFx0bG9nby5jbGFzc0xpc3QuYWRkKFwibG9nby1zbWFsbFwiKTtcblx0XHRcdGxvZ28uY2xhc3NMaXN0LnJlbW92ZShcImxvZ28tYmlnXCIpO1xuXG5cdFx0Ly8gICBvcmJpc0xvZ29TaHJ1bmsuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiXG5cdFx0fSBlbHNlIHtcblx0XHRcdGhlYWRlci5jbGFzc0xpc3QuYWRkKFwibmF2YmFyXCIpO1xuXHRcdFx0aGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJuYXZiYXItc21hbGxlclwiKTtcblx0XHRcdGxvZ28uY2xhc3NMaXN0LmFkZChcImxvZ28tYmlnXCIpO1xuXHRcdFx0bG9nby5jbGFzc0xpc3QucmVtb3ZlKFwibG9nby1zbWFsbFwiKTtcblxuXHRcdC8vICAgb3JiaXNMb2dvU2hydW5rLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiXG5cblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKXtcblxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuYXZcIj5cblxuXHRcdFx0XHQ8ZGl2IGlkPVwibmF2YmFyXCIgY2xhc3NOYW1lPVwibmF2YmFyXCI+XG5cdFx0XHRcdDxhIGhyZWY9XCIvaW5kZXhcIiBpZD1cIm5hdi1saW5rc1wiPlNlcnZpY2VzPC9hPlxuXHRcdFx0XHR7XCJ8XCJ9XG5cdFx0XHRcdDxhIGhyZWY9XCIvaW5kZXhcIiBpZD1cIm5hdi1saW5rc1wiPlByb2plY3RzPC9hPlxuXHRcdFx0XHQ8aW1nIGlkPVwibG9nby1tZXJjZWRlcy1ncm9zc21hbm5cIiBjbGFzc05hbWU9XCJsb2dvLWJpZ1wiIHNyYz1cImh0dHBzOi8vaS5kbHBuZy5jb20vc3RhdGljL3BuZy8xNzM4ODZfcHJldmlldy5wbmdcIiBhbHQ9XCJsb2dvXCI+PC9pbWc+XG5cdFx0XHRcdDxhIGhyZWY9XCIvaW5kZXhcIiBpZD1cIm5hdi1saW5rc1wiID5Xb3JrPC9hPlxuXHRcdFx0XHR7XCJ8XCJ9XG5cdFx0XHRcdDxhIGhyZWY9XCIvcG9ydGZvbGlvXCIgaWQ9XCJuYXYtbGlua3NcIiA+UE9SVEZPTElPPC9hPlxuXG5cdFx0PHN0eWxlIGpzeD57YFxuXHRcdEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdCZkaXNwbGF5PXN3YXAnKTtcblxuXHRcdFx0Lm5hdmJhciB7XG5cdFx0XHRcdFx0aGVpZ2h0OiAxOHZoO1xuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzMgO1xuXHRcdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0XHRcdFx0cG9zaXRpb246IGZpeGVkO1xuXHRcdFx0XHRcdGJvcmRlci1ib3R0b206IHNvbGlkIDVweCAjRDQxNDVBO1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdHRvcDogMDtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogNTAlO1xuXHRcdFx0XHRcdGZvbnQtY29sb3I6IHJlZDtcblx0XHRcdFx0XHRcblx0XHRcdH07XG5cdFx0XHQubmF2YmFyLXNtYWxsZXIge1xuXHRcdFx0XHRoZWlnaHQ6IDEydmg7XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzMgO1xuXHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0XHRwb3NpdGlvbjogZml4ZWQ7XG5cdFx0XHRcdGJvcmRlci1ib3R0b206IHNvbGlkIDVweCAjRDQxNDVBO1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0dG9wOiAwO1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0bWFyZ2luOiAwcHg7XG5cblx0XHRcdH07XG5cblx0XHRcdCNuYXYtbGlua3Mge1xuXHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XHRwYWRkaW5nOiAxMHB4O1xuXHRcdFx0XHRcdGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCBib2xkJywgc2Fucy1zZXJpZjtcblx0XHRcdFx0XHRmb250LXNpemU6IDR2aDtcblx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cblx0XHRcdH07XG5cdFx0XHQjbmF2LWxpbmtzOiBob3ZlciB7XG5cdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuXHRcdFx0XHRmb250LWNvbG9yOiByZWQ7XG5cdFx0XHR9XG5cblx0XHRcdC5sb2dvLXNtYWxsIHtcblx0XHRcdFx0XHRoZWlnaHQ6IDEwdmg7XG5cdFx0XHR9O1xuXG5cdFx0XHQubG9nby1iaWcge1xuXHRcdFx0XHRoZWlnaHQ6IDE4dmg7XG5cdFx0XHR9O1xuXG5cdFx0XHRAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcblx0XHRcdGRpdiB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogYmx1ZTtcblx0XHRcdH1cblx0XHRcdH07XG5cdFx0YH08L3N0eWxlPlxuXG5cdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cbiAgICAgICAgKVxuICAgIH1cbiAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyIl19 */\n/*@ sourceURL=/home/sebastiang/Desktop/code/Work/deco-design-react/react-deco-design/pages/navBar.js */")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ })

})
//# sourceMappingURL=_app.js.b75a9b6fe10c4410bac4.hot-update.js.map
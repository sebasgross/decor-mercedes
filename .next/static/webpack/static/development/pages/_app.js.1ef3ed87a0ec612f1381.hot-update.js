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
      className: "jsx-1303894425" + " " + "navbar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "/index",
      id: "nav-links",
      className: "jsx-1303894425",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, "Services"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "/index",
      id: "nav-links",
      className: "jsx-1303894425",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, "Projects"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      id: "logo-mercedes-grossmann",
      src: "https://i.dlpng.com/static/png/173886_preview.png",
      alt: "logo",
      className: "jsx-1303894425" + " " + "logo-big",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "/index",
      id: "nav-links",
      className: "jsx-1303894425",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, "Work"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "/index",
      id: "nav-links",
      className: "jsx-1303894425",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, "Work"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1303894425",
      __self: this
    }, "@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');.nav.jsx-1303894425{margin:50px;}.navbar.jsx-1303894425{height:20vh;background-color:#333333;box-sizing:border-box;position:fixed;border-bottom:solid 5px #D4145A;width:100%;top:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-text-decoration:none;text-decoration:none;font-size:150%;font-color:red;}.navbar-smaller.jsx-1303894425{height:12vh;background-color:#333333;box-sizing:border-box;position:fixed;border-bottom:solid 5px #D4145A;width:100%;top:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0px;}#nav-links.jsx-1303894425{color:white;padding:10px;font-family:'Montserrat bold',sans-serif;font-size:4vh;-webkit-text-decoration:none;text-decoration:none;}#nav-links.jsx-1303894425: hover.jsx-1303894425{-webkit-text-decoration:underline;text-decoration:underline;font-color:red;}.logo-small.jsx-1303894425{height:10vh;}.logo-big.jsx-1303894425{height:20vh;}@media (max-width:600px){div.jsx-1303894425{background:blue;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NlYmFzdGlhbmcvRGVza3RvcC9jb2RlL1dvcmsvZGVjby1kZXNpZ24tcmVhY3QvcmVhY3QtZGVjby1kZXNpZ24vcGFnZXMvbmF2QmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStDYyxBQUVpRixBQUVoRSxBQUdDLEFBZ0JELEFBZUMsQUFRYSxBQUtiLEFBSUQsQUFLSyxZQXZEbEIsQUFHNEIsQUFnQkQsQUFlWixBQWFmLEFBSUEsSUFLQSxTQXJCNEMsWUEvQnBCLEFBZ0JELHNCQWZOLEFBZ0JELENBcUJBLE1BTkEsUUE5QmtCLEFBZ0JELENBcUJqQyxLQU51QiwwQkE5QlYsQUFnQkQsV0FmSixBQWdCRCxNQWZRLEFBZ0JELE9BY2QsbUVBN0IrQixBQWdCRCwySEFmVCxBQWdCRCw2RkFmRyxBQWdCWCxXQUVaLHVDQWpCaUIsZUFDQSxlQUVqQiIsImZpbGUiOiIvaG9tZS9zZWJhc3RpYW5nL0Rlc2t0b3AvY29kZS9Xb3JrL2RlY28tZGVzaWduLXJlYWN0L3JlYWN0LWRlY28tZGVzaWduL3BhZ2VzL25hdkJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICBMaW5rICBmcm9tICduZXh0L2xpbmsnO1xuXG5jbGFzcyBOYXZCYXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMucmVzaXplSGVhZGVyT25TY3JvbGwpO1xuXHR9XG5cblx0cmVzaXplSGVhZGVyT25TY3JvbGwoKSB7XG5cdFx0Y29uc3QgZGlzdGFuY2VZID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AsXG5cdFx0XHRzaHJpbmtPbiA9IDgwXHQsXG5cdFx0XHRoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdmJhclwiKSxcblx0XHRcdGxvZ28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ28tbWVyY2VkZXMtZ3Jvc3NtYW5uXCIpXG5cdFx0Ly8gICBvcmJpc0xvZ29TaHJ1bmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9yYmlzLWxvZ28tc2hydW5rXCIpXG5cblxuXHRcdGlmIChkaXN0YW5jZVkgPiBzaHJpbmtPbikge1xuXHRcdFx0aGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJuYXZiYXItc21hbGxlclwiKTtcblx0XHRcdGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKFwibmF2YmFyXCIpO1xuXHRcdFx0bG9nby5jbGFzc0xpc3QuYWRkKFwibG9nby1zbWFsbFwiKTtcblx0XHRcdGxvZ28uY2xhc3NMaXN0LnJlbW92ZShcImxvZ28tYmlnXCIpO1xuXG5cdFx0Ly8gICBvcmJpc0xvZ29TaHJ1bmsuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiXG5cdFx0fSBlbHNlIHtcblx0XHRcdGhlYWRlci5jbGFzc0xpc3QuYWRkKFwibmF2YmFyXCIpO1xuXHRcdFx0aGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJuYXZiYXItc21hbGxlclwiKTtcblx0XHRcdGxvZ28uY2xhc3NMaXN0LmFkZChcImxvZ28tYmlnXCIpO1xuXHRcdFx0bG9nby5jbGFzc0xpc3QucmVtb3ZlKFwibG9nby1zbWFsbFwiKTtcblxuXHRcdC8vICAgb3JiaXNMb2dvU2hydW5rLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiXG5cblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKXtcblxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuYXZcIj5cblxuXHRcdFx0XHQ8ZGl2IGlkPVwibmF2YmFyXCIgY2xhc3NOYW1lPVwibmF2YmFyXCI+XG5cdFx0XHRcdDxhIGhyZWY9XCIvaW5kZXhcIiBpZD1cIm5hdi1saW5rc1wiPlNlcnZpY2VzPC9hPlxuXHRcdFx0XHQ8YSBocmVmPVwiL2luZGV4XCIgaWQ9XCJuYXYtbGlua3NcIj5Qcm9qZWN0czwvYT5cblx0XHRcdFx0PGltZyBpZD1cImxvZ28tbWVyY2VkZXMtZ3Jvc3NtYW5uXCIgY2xhc3NOYW1lPVwibG9nby1iaWdcIiBzcmM9XCJodHRwczovL2kuZGxwbmcuY29tL3N0YXRpYy9wbmcvMTczODg2X3ByZXZpZXcucG5nXCIgYWx0PVwibG9nb1wiPjwvaW1nPlxuXHRcdFx0XHQ8YSBocmVmPVwiL2luZGV4XCIgaWQ9XCJuYXYtbGlua3NcIiA+V29yazwvYT5cblx0XHRcdFx0PGEgaHJlZj1cIi9pbmRleFwiIGlkPVwibmF2LWxpbmtzXCIgPldvcms8L2E+XG5cblx0XHQ8c3R5bGUganN4PntgXG5cdFx0QGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0JmRpc3BsYXk9c3dhcCcpO1xuXHRcdFx0Lm5hdiB7XG5cdFx0XHRcdG1hcmdpbjogNTBweDtcblx0XHRcdH1cblx0XHRcdC5uYXZiYXIge1xuXHRcdFx0XHRcdGhlaWdodDogMjB2aDtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzIDtcblx0XHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0XHRcdHBvc2l0aW9uOiBmaXhlZDtcblx0XHRcdFx0XHRib3JkZXItYm90dG9tOiBzb2xpZCA1cHggI0Q0MTQ1QTtcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRcdFx0XHRmb250LXNpemU6IDE1MCU7XG5cdFx0XHRcdFx0Zm9udC1jb2xvcjogcmVkO1xuXHRcdFx0XHRcdFxuXHRcdFx0fTtcblx0XHRcdC5uYXZiYXItc21hbGxlciB7XG5cdFx0XHRcdGhlaWdodDogMTJ2aDtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMyA7XG5cdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0XHRcdHBvc2l0aW9uOiBmaXhlZDtcblx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogc29saWQgNXB4ICNENDE0NUE7XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRtYXJnaW46IDBweDtcblxuXHRcdFx0fTtcblxuXHRcdFx0I25hdi1saW5rcyB7XG5cdFx0XHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDEwcHg7XG5cdFx0XHRcdFx0Zm9udC1mYW1pbHk6ICdNb250c2VycmF0IGJvbGQnLCBzYW5zLXNlcmlmO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogNHZoO1xuXHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuXHRcdFx0fTtcblx0XHRcdCNuYXYtbGlua3M6IGhvdmVyIHtcblx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG5cdFx0XHRcdGZvbnQtY29sb3I6IHJlZDtcblx0XHRcdH1cblxuXHRcdFx0LmxvZ28tc21hbGwge1xuXHRcdFx0XHRcdGhlaWdodDogMTB2aDtcblx0XHRcdH07XG5cblx0XHRcdC5sb2dvLWJpZyB7XG5cdFx0XHRcdGhlaWdodDogMjB2aDtcblx0XHRcdH07XG5cblx0XHRcdEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuXHRcdFx0ZGl2IHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBibHVlO1xuXHRcdFx0fVxuXHRcdFx0fTtcblx0XHRgfTwvc3R5bGU+XG5cblx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblxuICAgICAgICApXG4gICAgfVxuICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZCYXIiXX0= */\n/*@ sourceURL=/home/sebastiang/Desktop/code/Work/deco-design-react/react-deco-design/pages/navBar.js */")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ })

})
//# sourceMappingURL=_app.js.1ef3ed87a0ec612f1381.hot-update.js.map
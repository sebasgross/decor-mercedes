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
      id: "navbar",
      className: "jsx-2313970140" + " " + "navbar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/index",
      id: "nav-links",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, "Projects"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      id: "logo-mercedes-grossmann",
      src: "https://i.dlpng.com/static/png/173886_preview.png",
      alt: "logo",
      className: "jsx-2313970140" + " " + "logo-big",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/index",
      id: "nav-links",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, "Work"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/index",
      id: "nav-links",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, "Work"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2313970140",
      __self: this
    }, "@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');.navbar.jsx-2313970140{height:20vh;background-color:#333333;box-sizing:border-box;position:fixed;border-bottom:solid 5px #D4145A;width:100%;top:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:150%;}.navbar-smaller.jsx-2313970140{height:12vh;background-color:#333333;box-sizing:border-box;position:fixed;border-bottom:solid 5px #D4145A;width:100%;top:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0px;}#nav-links.jsx-2313970140{color:white;padding:10px;font-family:'Montserrat bold',sans-serif;font-size:4vh;}#nav-links.jsx-2313970140: hover.jsx-2313970140{-webkit-text-decoration:underline;text-decoration:underline;}.logo-small.jsx-2313970140{height:10vh;}.logo-big.jsx-2313970140{height:20vh;}@media (max-width:600px){div.jsx-2313970140{background:blue;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NlYmFzdGlhbmcvRGVza3RvcC9jb2RlL1dvcmsvZGVjby1kZXNpZ24tcmVhY3QvcmVhY3QtZGVjby1kZXNpZ24vcGFnZXMvbmF2QmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZDYyxBQUVpRixBQUUvRCxBQWFELEFBZUMsQUFNYSxBQUliLEFBSUQsQUFLSyxZQTlDVSxBQWFELEFBZVosQUFVZixBQUlBLElBS0EsU0FsQjRDLFlBNUJwQixBQWFELHNCQVpOLEFBYUQsQ0FtQmhCLE1BSmdCLFFBM0JrQixBQWFELE1BZWpDLDBCQTNCYSxBQWFELFdBWkosQUFhRCxNQVpRLEFBYUQsMEVBWmlCLEFBYUQsMkhBWlQsQUFhRCw2RkFaSCxBQWFMLFdBRVosSUFkQSIsImZpbGUiOiIvaG9tZS9zZWJhc3RpYW5nL0Rlc2t0b3AvY29kZS9Xb3JrL2RlY28tZGVzaWduLXJlYWN0L3JlYWN0LWRlY28tZGVzaWduL3BhZ2VzL25hdkJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICBMaW5rICBmcm9tICduZXh0L2xpbmsnO1xuXG5jbGFzcyBOYXZCYXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMucmVzaXplSGVhZGVyT25TY3JvbGwpO1xuXHR9XG5cblx0cmVzaXplSGVhZGVyT25TY3JvbGwoKSB7XG5cdFx0Y29uc3QgZGlzdGFuY2VZID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AsXG5cdFx0XHRzaHJpbmtPbiA9IDgwXHQsXG5cdFx0XHRoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdmJhclwiKSxcblx0XHRcdGxvZ28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ28tbWVyY2VkZXMtZ3Jvc3NtYW5uXCIpXG5cdFx0Ly8gICBvcmJpc0xvZ29TaHJ1bmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9yYmlzLWxvZ28tc2hydW5rXCIpXG5cblxuXHRcdGlmIChkaXN0YW5jZVkgPiBzaHJpbmtPbikge1xuXHRcdFx0aGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJuYXZiYXItc21hbGxlclwiKTtcblx0XHRcdGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKFwibmF2YmFyXCIpO1xuXHRcdFx0bG9nby5jbGFzc0xpc3QuYWRkKFwibG9nby1zbWFsbFwiKTtcblx0XHRcdGxvZ28uY2xhc3NMaXN0LnJlbW92ZShcImxvZ28tYmlnXCIpO1xuXG5cdFx0Ly8gICBvcmJpc0xvZ29TaHJ1bmsuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiXG5cdFx0fSBlbHNlIHtcblx0XHRcdGhlYWRlci5jbGFzc0xpc3QuYWRkKFwibmF2YmFyXCIpO1xuXHRcdFx0aGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJuYXZiYXItc21hbGxlclwiKTtcblx0XHRcdGxvZ28uY2xhc3NMaXN0LmFkZChcImxvZ28tYmlnXCIpO1xuXHRcdFx0bG9nby5jbGFzc0xpc3QucmVtb3ZlKFwibG9nby1zbWFsbFwiKTtcblxuXHRcdC8vICAgb3JiaXNMb2dvU2hydW5rLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiXG5cblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKXtcblxuXHRcdFx0cmV0dXJuKFxuXHRcdFx0XHQ8ZGl2IGlkPVwibmF2YmFyXCIgY2xhc3NOYW1lPVwibmF2YmFyXCI+XG5cdFx0XHRcdHsvKiA8TGluayBocmVmPVwiL2luZGV4XCIgaWQ9XCJuYXYtbGlua3NcIj48L0xpbms+ICovfVxuXHRcdFx0XHQ8TGluayBocmVmPVwiL2luZGV4XCIgaWQ9XCJuYXYtbGlua3NcIj5Qcm9qZWN0czwvTGluaz5cblx0XHRcdFx0PGltZyBpZD1cImxvZ28tbWVyY2VkZXMtZ3Jvc3NtYW5uXCIgY2xhc3NOYW1lPVwibG9nby1iaWdcIiBzcmM9XCJodHRwczovL2kuZGxwbmcuY29tL3N0YXRpYy9wbmcvMTczODg2X3ByZXZpZXcucG5nXCIgYWx0PVwibG9nb1wiPjwvaW1nPlxuXHRcdFx0XHQ8TGluayBocmVmPVwiL2luZGV4XCIgaWQ9XCJuYXYtbGlua3NcIiA+V29yazwvTGluaz5cblx0XHRcdFx0PExpbmsgaHJlZj1cIi9pbmRleFwiIGlkPVwibmF2LWxpbmtzXCIgPldvcms8L0xpbms+XG5cblx0XHQ8c3R5bGUganN4PntgXG5cdFx0QGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0JmRpc3BsYXk9c3dhcCcpO1xuXHRcdFx0Lm5hdmJhciB7XG5cdFx0XHRcdFx0aGVpZ2h0OiAyMHZoO1xuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzMgO1xuXHRcdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0XHRcdFx0cG9zaXRpb246IGZpeGVkO1xuXHRcdFx0XHRcdGJvcmRlci1ib3R0b206IHNvbGlkIDVweCAjRDQxNDVBO1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdHRvcDogMDtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxNTAlO1xuXHRcdFx0fTtcblx0XHRcdC5uYXZiYXItc21hbGxlciB7XG5cdFx0XHRcdGhlaWdodDogMTJ2aDtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMyA7XG5cdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0XHRcdHBvc2l0aW9uOiBmaXhlZDtcblx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogc29saWQgNXB4ICNENDE0NUE7XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRtYXJnaW46IDBweDtcblxuXHRcdFx0fTtcblxuXHRcdFx0I25hdi1saW5rcyB7XG5cdFx0XHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDEwcHg7XG5cdFx0XHRcdFx0Zm9udC1mYW1pbHk6ICdNb250c2VycmF0IGJvbGQnLCBzYW5zLXNlcmlmO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogNHZoO1xuXHRcdFx0fTtcblx0XHRcdCNuYXYtbGlua3M6IGhvdmVyIHtcblx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG5cdFx0XHR9XG5cblx0XHRcdC5sb2dvLXNtYWxsIHtcblx0XHRcdFx0XHRoZWlnaHQ6IDEwdmg7XG5cdFx0XHR9O1xuXG5cdFx0XHQubG9nby1iaWcge1xuXHRcdFx0XHRoZWlnaHQ6IDIwdmg7XG5cdFx0XHR9O1xuXG5cdFx0XHRAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcblx0XHRcdGRpdiB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogYmx1ZTtcblx0XHRcdH1cblx0XHRcdH07XG5cdFx0YH08L3N0eWxlPlxuXG5cdFx0PC9kaXY+XG4gICAgICAgIClcbiAgICB9XG4gICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkJhciJdfQ== */\n/*@ sourceURL=/home/sebastiang/Desktop/code/Work/deco-design-react/react-deco-design/pages/navBar.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ })

})
//# sourceMappingURL=_app.js.027f703a1a2a5460e94e.hot-update.js.map
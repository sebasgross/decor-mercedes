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
      className: "jsx-3727227268" + " " + "navbar",
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
        lineNumber: 40
      },
      __self: this
    }, "Services"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
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
      className: "jsx-3727227268" + " " + "logo-big",
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
      id: "3727227268",
      __self: this
    }, "@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');.navbar.jsx-3727227268{height:20vh;background-color:#333333;box-sizing:border-box;position:fixed;border-bottom:solid 5px #D4145A;width:100%;top:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:150%;}.navbar-smaller.jsx-3727227268{height:12vh;background-color:#333333;box-sizing:border-box;position:fixed;border-bottom:solid 5px #D4145A;width:100%;top:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0px;}#nav-links.jsx-3727227268{color:white;padding:10px;font-family:'Montserrat bold',sans-serif;font-size:4vh;-webkit-text-decoration:none;text-decoration:none;}#nav-links.jsx-3727227268: hover.jsx-3727227268{-webkit-text-decoration:underline;text-decoration:underline;}.logo-small.jsx-3727227268{height:10vh;}.logo-big.jsx-3727227268{height:20vh;}@media (max-width:600px){div.jsx-3727227268{background:blue;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NlYmFzdGlhbmcvRGVza3RvcC9jb2RlL1dvcmsvZGVjby1kZXNpZ24tcmVhY3QvcmVhY3QtZGVjby1kZXNpZ24vcGFnZXMvbmF2QmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZDYyxBQUVpRixBQUUvRCxBQWFELEFBZUMsQUFRYSxBQUliLEFBSUQsQUFLSyxZQWhEVSxBQWFELEFBZVosQUFZZixBQUlBLElBS0EsU0FwQjRDLFlBNUJwQixBQWFELHNCQVpOLEFBYUQsQ0FxQmhCLE1BTmdCLFFBM0JrQixBQWFELE1BZVYsMEJBM0JWLEFBYUQsV0FaSixBQWFELE1BWlEsQUFhRCxPQWNkLG1FQTFCK0IsQUFhRCwySEFaVCxBQWFELDZGQVpILEFBYUwsV0FFWixJQWRBIiwiZmlsZSI6Ii9ob21lL3NlYmFzdGlhbmcvRGVza3RvcC9jb2RlL1dvcmsvZGVjby1kZXNpZ24tcmVhY3QvcmVhY3QtZGVjby1kZXNpZ24vcGFnZXMvbmF2QmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgIExpbmsgIGZyb20gJ25leHQvbGluayc7XG5cbmNsYXNzIE5hdkJhciBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdGhpcy5yZXNpemVIZWFkZXJPblNjcm9sbCk7XG5cdH1cblxuXHRyZXNpemVIZWFkZXJPblNjcm9sbCgpIHtcblx0XHRjb25zdCBkaXN0YW5jZVkgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCxcblx0XHRcdHNocmlua09uID0gODBcdCxcblx0XHRcdGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2YmFyXCIpLFxuXHRcdFx0bG9nbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9nby1tZXJjZWRlcy1ncm9zc21hbm5cIilcblx0XHQvLyAgIG9yYmlzTG9nb1NocnVuayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3JiaXMtbG9nby1zaHJ1bmtcIilcblxuXG5cdFx0aWYgKGRpc3RhbmNlWSA+IHNocmlua09uKSB7XG5cdFx0XHRoZWFkZXIuY2xhc3NMaXN0LmFkZChcIm5hdmJhci1zbWFsbGVyXCIpO1xuXHRcdFx0aGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJuYXZiYXJcIik7XG5cdFx0XHRsb2dvLmNsYXNzTGlzdC5hZGQoXCJsb2dvLXNtYWxsXCIpO1xuXHRcdFx0bG9nby5jbGFzc0xpc3QucmVtb3ZlKFwibG9nby1iaWdcIik7XG5cblx0XHQvLyAgIG9yYmlzTG9nb1NocnVuay5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCJcblx0XHR9IGVsc2Uge1xuXHRcdFx0aGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJuYXZiYXJcIik7XG5cdFx0XHRoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShcIm5hdmJhci1zbWFsbGVyXCIpO1xuXHRcdFx0bG9nby5jbGFzc0xpc3QuYWRkKFwibG9nby1iaWdcIik7XG5cdFx0XHRsb2dvLmNsYXNzTGlzdC5yZW1vdmUoXCJsb2dvLXNtYWxsXCIpO1xuXG5cdFx0Ly8gICBvcmJpc0xvZ29TaHJ1bmsuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCJcblxuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpe1xuXG5cdFx0XHRyZXR1cm4oXG5cdFx0XHRcdDxkaXYgaWQ9XCJuYXZiYXJcIiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cblx0XHRcdFx0PExpbmsgaHJlZj1cIi9pbmRleFwiIGlkPVwibmF2LWxpbmtzXCI+U2VydmljZXM8L0xpbms+XG5cdFx0XHRcdDxMaW5rIGhyZWY9XCIvaW5kZXhcIiBpZD1cIm5hdi1saW5rc1wiPlByb2plY3RzPC9MaW5rPlxuXHRcdFx0XHQ8aW1nIGlkPVwibG9nby1tZXJjZWRlcy1ncm9zc21hbm5cIiBjbGFzc05hbWU9XCJsb2dvLWJpZ1wiIHNyYz1cImh0dHBzOi8vaS5kbHBuZy5jb20vc3RhdGljL3BuZy8xNzM4ODZfcHJldmlldy5wbmdcIiBhbHQ9XCJsb2dvXCI+PC9pbWc+XG5cdFx0XHRcdDxMaW5rIGhyZWY9XCIvaW5kZXhcIiBpZD1cIm5hdi1saW5rc1wiID5Xb3JrPC9MaW5rPlxuXHRcdFx0XHQ8TGluayBocmVmPVwiL2luZGV4XCIgaWQ9XCJuYXYtbGlua3NcIiA+V29yazwvTGluaz5cblxuXHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQmZGlzcGxheT1zd2FwJyk7XG5cdFx0XHQubmF2YmFyIHtcblx0XHRcdFx0XHRoZWlnaHQ6IDIwdmg7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMyA7XG5cdFx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdFx0XHRwb3NpdGlvbjogZml4ZWQ7XG5cdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogc29saWQgNXB4ICNENDE0NUE7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0dG9wOiAwO1xuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRmb250LXNpemU6IDE1MCU7XG5cdFx0XHR9O1xuXHRcdFx0Lm5hdmJhci1zbWFsbGVyIHtcblx0XHRcdFx0aGVpZ2h0OiAxMnZoO1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzIDtcblx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdFx0cG9zaXRpb246IGZpeGVkO1xuXHRcdFx0XHRib3JkZXItYm90dG9tOiBzb2xpZCA1cHggI0Q0MTQ1QTtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdHRvcDogMDtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdG1hcmdpbjogMHB4O1xuXG5cdFx0XHR9O1xuXG5cdFx0XHQjbmF2LWxpbmtzIHtcblx0XHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdFx0cGFkZGluZzogMTBweDtcblx0XHRcdFx0XHRmb250LWZhbWlseTogJ01vbnRzZXJyYXQgYm9sZCcsIHNhbnMtc2VyaWY7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiA0dmg7XG5cdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG5cdFx0XHR9O1xuXHRcdFx0I25hdi1saW5rczogaG92ZXIge1xuXHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcblx0XHRcdH1cblxuXHRcdFx0LmxvZ28tc21hbGwge1xuXHRcdFx0XHRcdGhlaWdodDogMTB2aDtcblx0XHRcdH07XG5cblx0XHRcdC5sb2dvLWJpZyB7XG5cdFx0XHRcdGhlaWdodDogMjB2aDtcblx0XHRcdH07XG5cblx0XHRcdEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuXHRcdFx0ZGl2IHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBibHVlO1xuXHRcdFx0fVxuXHRcdFx0fTtcblx0XHRgfTwvc3R5bGU+XG5cblx0XHQ8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbiAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyIl19 */\n/*@ sourceURL=/home/sebastiang/Desktop/code/Work/deco-design-react/react-deco-design/pages/navBar.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ })

})
//# sourceMappingURL=_app.js.312bf7fc802aa86116c7.hot-update.js.map
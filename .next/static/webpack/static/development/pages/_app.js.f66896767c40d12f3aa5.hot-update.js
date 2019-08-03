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
      className: "jsx-1951732002" + " " + "navbar",
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
      className: "jsx-1951732002" + " " + "logo-big",
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
      id: "1951732002",
      __self: this
    }, "@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');.navbar.jsx-1951732002{height:20vh;box-sizing:border-box;position:fixed;border-bottom:solid 5px #D4145A;width:100%;top:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-text-decoration:none;text-decoration:none;font-size:150%;font-color:red;}.navbar-smaller.jsx-1951732002{height:12vh;background-color:#333333;box-sizing:border-box;position:fixed;border-bottom:solid 5px #D4145A;width:100%;top:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0px;}#nav-links.jsx-1951732002{color:white;padding:10px;font-family:'Montserrat bold',sans-serif;font-size:4vh;-webkit-text-decoration:none;text-decoration:none;}#nav-links.jsx-1951732002: hover.jsx-1951732002{-webkit-text-decoration:underline;text-decoration:underline;}.logo-small.jsx-1951732002{height:10vh;}.logo-big.jsx-1951732002{height:20vh;}@media (max-width:600px){div.jsx-1951732002{background:blue;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NlYmFzdGlhbmcvRGVza3RvcC9jb2RlL1dvcmsvZGVjby1kZXNpZ24tcmVhY3QvcmVhY3QtZGVjby1kZXNpZ24vcGFnZXMvbmF2QmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZDYyxBQUVpRixBQUUvRCxBQWVELEFBZUMsQUFRYSxBQUliLEFBSUQsQUFLSyxZQWpETSxBQWNHLEFBZVosQUFZZixBQUlBLElBS0EsU0FwQjRDLFNBN0IzQixHQWNNLFlBYlcsVUFjbEIsQ0FxQmhCLE1BTmdCLFFBZGlCLE1BZVYsQ0E3QlYsV0FDTCxNQUNPLFFBYUgsV0FDTCxNQUNPLE9BY2QsMENBNUIrQix5QkFlRCxrR0FkVCx5QkFlRCxvRUFkRyx5QkFlWCxXQUVaLGNBaEJpQixlQUNBLGVBQ2pCIiwiZmlsZSI6Ii9ob21lL3NlYmFzdGlhbmcvRGVza3RvcC9jb2RlL1dvcmsvZGVjby1kZXNpZ24tcmVhY3QvcmVhY3QtZGVjby1kZXNpZ24vcGFnZXMvbmF2QmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgIExpbmsgIGZyb20gJ25leHQvbGluayc7XG5cbmNsYXNzIE5hdkJhciBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdGhpcy5yZXNpemVIZWFkZXJPblNjcm9sbCk7XG5cdH1cblxuXHRyZXNpemVIZWFkZXJPblNjcm9sbCgpIHtcblx0XHRjb25zdCBkaXN0YW5jZVkgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCxcblx0XHRcdHNocmlua09uID0gODBcdCxcblx0XHRcdGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2YmFyXCIpLFxuXHRcdFx0bG9nbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9nby1tZXJjZWRlcy1ncm9zc21hbm5cIilcblx0XHQvLyAgIG9yYmlzTG9nb1NocnVuayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3JiaXMtbG9nby1zaHJ1bmtcIilcblxuXG5cdFx0aWYgKGRpc3RhbmNlWSA+IHNocmlua09uKSB7XG5cdFx0XHRoZWFkZXIuY2xhc3NMaXN0LmFkZChcIm5hdmJhci1zbWFsbGVyXCIpO1xuXHRcdFx0aGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJuYXZiYXJcIik7XG5cdFx0XHRsb2dvLmNsYXNzTGlzdC5hZGQoXCJsb2dvLXNtYWxsXCIpO1xuXHRcdFx0bG9nby5jbGFzc0xpc3QucmVtb3ZlKFwibG9nby1iaWdcIik7XG5cblx0XHQvLyAgIG9yYmlzTG9nb1NocnVuay5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCJcblx0XHR9IGVsc2Uge1xuXHRcdFx0aGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJuYXZiYXJcIik7XG5cdFx0XHRoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShcIm5hdmJhci1zbWFsbGVyXCIpO1xuXHRcdFx0bG9nby5jbGFzc0xpc3QuYWRkKFwibG9nby1iaWdcIik7XG5cdFx0XHRsb2dvLmNsYXNzTGlzdC5yZW1vdmUoXCJsb2dvLXNtYWxsXCIpO1xuXG5cdFx0Ly8gICBvcmJpc0xvZ29TaHJ1bmsuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCJcblxuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpe1xuXG5cdFx0XHRyZXR1cm4oXG5cdFx0XHRcdDxkaXYgaWQ9XCJuYXZiYXJcIiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cblx0XHRcdFx0PExpbmsgaHJlZj1cIi9pbmRleFwiIGlkPVwibmF2LWxpbmtzXCI+U2VydmljZXM8L0xpbms+XG5cdFx0XHRcdDxMaW5rIGhyZWY9XCIvaW5kZXhcIiBpZD1cIm5hdi1saW5rc1wiPlByb2plY3RzPC9MaW5rPlxuXHRcdFx0XHQ8aW1nIGlkPVwibG9nby1tZXJjZWRlcy1ncm9zc21hbm5cIiBjbGFzc05hbWU9XCJsb2dvLWJpZ1wiIHNyYz1cImh0dHBzOi8vaS5kbHBuZy5jb20vc3RhdGljL3BuZy8xNzM4ODZfcHJldmlldy5wbmdcIiBhbHQ9XCJsb2dvXCI+PC9pbWc+XG5cdFx0XHRcdDxMaW5rIGhyZWY9XCIvaW5kZXhcIiBpZD1cIm5hdi1saW5rc1wiID5Xb3JrPC9MaW5rPlxuXHRcdFx0XHQ8TGluayBocmVmPVwiL2luZGV4XCIgaWQ9XCJuYXYtbGlua3NcIiA+V29yazwvTGluaz5cblxuXHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQmZGlzcGxheT1zd2FwJyk7XG5cdFx0XHQubmF2YmFyIHtcblx0XHRcdFx0XHRoZWlnaHQ6IDIwdmg7XG5cdFx0XHRcdFx0Ly8gYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMyA7XG5cdFx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdFx0XHRwb3NpdGlvbjogZml4ZWQ7XG5cdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogc29saWQgNXB4ICNENDE0NUE7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0dG9wOiAwO1xuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxNTAlO1xuXHRcdFx0XHRcdGZvbnQtY29sb3I6IHJlZDtcblx0XHRcdH07XG5cdFx0XHQubmF2YmFyLXNtYWxsZXIge1xuXHRcdFx0XHRoZWlnaHQ6IDEydmg7XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzMgO1xuXHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0XHRwb3NpdGlvbjogZml4ZWQ7XG5cdFx0XHRcdGJvcmRlci1ib3R0b206IHNvbGlkIDVweCAjRDQxNDVBO1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0dG9wOiAwO1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0bWFyZ2luOiAwcHg7XG5cblx0XHRcdH07XG5cblx0XHRcdCNuYXYtbGlua3Mge1xuXHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XHRwYWRkaW5nOiAxMHB4O1xuXHRcdFx0XHRcdGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCBib2xkJywgc2Fucy1zZXJpZjtcblx0XHRcdFx0XHRmb250LXNpemU6IDR2aDtcblx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cblx0XHRcdH07XG5cdFx0XHQjbmF2LWxpbmtzOiBob3ZlciB7XG5cdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuXHRcdFx0fVxuXG5cdFx0XHQubG9nby1zbWFsbCB7XG5cdFx0XHRcdFx0aGVpZ2h0OiAxMHZoO1xuXHRcdFx0fTtcblxuXHRcdFx0LmxvZ28tYmlnIHtcblx0XHRcdFx0aGVpZ2h0OiAyMHZoO1xuXHRcdFx0fTtcblxuXHRcdFx0QG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG5cdFx0XHRkaXYge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6IGJsdWU7XG5cdFx0XHR9XG5cdFx0XHR9O1xuXHRcdGB9PC9zdHlsZT5cblxuXHRcdDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZCYXIiXX0= */\n/*@ sourceURL=/home/sebastiang/Desktop/code/Work/deco-design-react/react-deco-design/pages/navBar.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ })

})
//# sourceMappingURL=_app.js.f66896767c40d12f3aa5.hot-update.js.map
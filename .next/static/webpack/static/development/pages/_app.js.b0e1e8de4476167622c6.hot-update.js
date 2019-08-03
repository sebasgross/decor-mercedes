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
      className: "jsx-4289457920" + " " + "navbar",
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
      className: "jsx-4289457920" + " " + "logo-big",
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
      id: "4289457920",
      __self: this
    }, "@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');.navbar.jsx-4289457920{height:20vh;background-color:#333333;box-sizing:border-box;position:fixed;border-bottom:solid 5px #D4145A;width:100%;top:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-text-decoration:none;text-decoration:none;font-size:150%;}.navbar-smaller.jsx-4289457920{height:12vh;background-color:#333333;box-sizing:border-box;position:fixed;border-bottom:solid 5px #D4145A;width:100%;top:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0px;}#nav-links.jsx-4289457920{color:white;padding:10px;font-family:'Montserrat bold',sans-serif;font-size:4vh;-webkit-text-decoration:none;text-decoration:none;}#nav-links.jsx-4289457920: hover.jsx-4289457920{-webkit-text-decoration:underline;text-decoration:underline;}.logo-small.jsx-4289457920{height:10vh;}.logo-big.jsx-4289457920{height:20vh;}@media (max-width:600px){div.jsx-4289457920{background:blue;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NlYmFzdGlhbmcvRGVza3RvcC9jb2RlL1dvcmsvZGVjby1kZXNpZ24tcmVhY3QvcmVhY3QtZGVjby1kZXNpZ24vcGFnZXMvbmF2QmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZDYyxBQUVpRixBQUUvRCxBQWVELEFBZUMsQUFRYSxBQUliLEFBSUQsQUFLSyxZQWxEVSxBQWVELEFBZVosQUFZZixBQUlBLElBS0EsU0FwQjRDLFlBOUJwQixBQWVELHNCQWROLEFBZUQsQ0FxQmhCLE1BTmdCLFFBN0JrQixBQWVELE1BZVYsMEJBN0JWLEFBZUQsV0FkSixBQWVELE1BZFEsQUFlRCxPQWNkLG1FQTVCK0IsQUFlRCwySEFkVCxBQWVELDZGQWRHLEFBZVgsV0FFWix1Q0FmaUIsZUFDakIiLCJmaWxlIjoiL2hvbWUvc2ViYXN0aWFuZy9EZXNrdG9wL2NvZGUvV29yay9kZWNvLWRlc2lnbi1yZWFjdC9yZWFjdC1kZWNvLWRlc2lnbi9wYWdlcy9uYXZCYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAgTGluayAgZnJvbSAnbmV4dC9saW5rJztcblxuY2xhc3MgTmF2QmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0aGlzLnJlc2l6ZUhlYWRlck9uU2Nyb2xsKTtcblx0fVxuXG5cdHJlc2l6ZUhlYWRlck9uU2Nyb2xsKCkge1xuXHRcdGNvbnN0IGRpc3RhbmNlWSA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wLFxuXHRcdFx0c2hyaW5rT24gPSA4MFx0LFxuXHRcdFx0aGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZiYXJcIiksXG5cdFx0XHRsb2dvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dvLW1lcmNlZGVzLWdyb3NzbWFublwiKVxuXHRcdC8vICAgb3JiaXNMb2dvU2hydW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcmJpcy1sb2dvLXNocnVua1wiKVxuXG5cblx0XHRpZiAoZGlzdGFuY2VZID4gc2hyaW5rT24pIHtcblx0XHRcdGhlYWRlci5jbGFzc0xpc3QuYWRkKFwibmF2YmFyLXNtYWxsZXJcIik7XG5cdFx0XHRoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShcIm5hdmJhclwiKTtcblx0XHRcdGxvZ28uY2xhc3NMaXN0LmFkZChcImxvZ28tc21hbGxcIik7XG5cdFx0XHRsb2dvLmNsYXNzTGlzdC5yZW1vdmUoXCJsb2dvLWJpZ1wiKTtcblxuXHRcdC8vICAgb3JiaXNMb2dvU2hydW5rLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIlxuXHRcdH0gZWxzZSB7XG5cdFx0XHRoZWFkZXIuY2xhc3NMaXN0LmFkZChcIm5hdmJhclwiKTtcblx0XHRcdGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKFwibmF2YmFyLXNtYWxsZXJcIik7XG5cdFx0XHRsb2dvLmNsYXNzTGlzdC5hZGQoXCJsb2dvLWJpZ1wiKTtcblx0XHRcdGxvZ28uY2xhc3NMaXN0LnJlbW92ZShcImxvZ28tc21hbGxcIik7XG5cblx0XHQvLyAgIG9yYmlzTG9nb1NocnVuay5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIlxuXG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCl7XG5cblx0XHRcdHJldHVybihcblx0XHRcdFx0PGRpdiBpZD1cIm5hdmJhclwiIGNsYXNzTmFtZT1cIm5hdmJhclwiPlxuXHRcdFx0XHQ8TGluayBocmVmPVwiL2luZGV4XCIgaWQ9XCJuYXYtbGlua3NcIj5TZXJ2aWNlczwvTGluaz5cblx0XHRcdFx0PExpbmsgaHJlZj1cIi9pbmRleFwiIGlkPVwibmF2LWxpbmtzXCI+UHJvamVjdHM8L0xpbms+XG5cdFx0XHRcdDxpbWcgaWQ9XCJsb2dvLW1lcmNlZGVzLWdyb3NzbWFublwiIGNsYXNzTmFtZT1cImxvZ28tYmlnXCIgc3JjPVwiaHR0cHM6Ly9pLmRscG5nLmNvbS9zdGF0aWMvcG5nLzE3Mzg4Nl9wcmV2aWV3LnBuZ1wiIGFsdD1cImxvZ29cIj48L2ltZz5cblx0XHRcdFx0PExpbmsgaHJlZj1cIi9pbmRleFwiIGlkPVwibmF2LWxpbmtzXCIgPldvcms8L0xpbms+XG5cdFx0XHRcdDxMaW5rIGhyZWY9XCIvaW5kZXhcIiBpZD1cIm5hdi1saW5rc1wiID5Xb3JrPC9MaW5rPlxuXG5cdFx0PHN0eWxlIGpzeD57YFxuXHRcdEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdCZkaXNwbGF5PXN3YXAnKTtcblx0XHRcdC5uYXZiYXIge1xuXHRcdFx0XHRcdGhlaWdodDogMjB2aDtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzIDtcblx0XHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0XHRcdHBvc2l0aW9uOiBmaXhlZDtcblx0XHRcdFx0XHRib3JkZXItYm90dG9tOiBzb2xpZCA1cHggI0Q0MTQ1QTtcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTUwJTtcblx0XHRcdH07XG5cdFx0XHQubmF2YmFyLXNtYWxsZXIge1xuXHRcdFx0XHRoZWlnaHQ6IDEydmg7XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzMgO1xuXHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0XHRwb3NpdGlvbjogZml4ZWQ7XG5cdFx0XHRcdGJvcmRlci1ib3R0b206IHNvbGlkIDVweCAjRDQxNDVBO1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0dG9wOiAwO1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0bWFyZ2luOiAwcHg7XG5cblx0XHRcdH07XG5cblx0XHRcdCNuYXYtbGlua3Mge1xuXHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XHRwYWRkaW5nOiAxMHB4O1xuXHRcdFx0XHRcdGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCBib2xkJywgc2Fucy1zZXJpZjtcblx0XHRcdFx0XHRmb250LXNpemU6IDR2aDtcblx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cblx0XHRcdH07XG5cdFx0XHQjbmF2LWxpbmtzOiBob3ZlciB7XG5cdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuXHRcdFx0fVxuXG5cdFx0XHQubG9nby1zbWFsbCB7XG5cdFx0XHRcdFx0aGVpZ2h0OiAxMHZoO1xuXHRcdFx0fTtcblxuXHRcdFx0LmxvZ28tYmlnIHtcblx0XHRcdFx0aGVpZ2h0OiAyMHZoO1xuXHRcdFx0fTtcblxuXHRcdFx0QG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG5cdFx0XHRkaXYge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6IGJsdWU7XG5cdFx0XHR9XG5cdFx0XHR9O1xuXHRcdGB9PC9zdHlsZT5cblxuXHRcdDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZCYXIiXX0= */\n/*@ sourceURL=/home/sebastiang/Desktop/code/Work/deco-design-react/react-deco-design/pages/navBar.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ })

})
//# sourceMappingURL=_app.js.b0e1e8de4476167622c6.hot-update.js.map
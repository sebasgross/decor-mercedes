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
      className: "jsx-1159922022" + " " + "navbar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "/index",
      id: "nav-links",
      className: "jsx-1159922022",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, "Services"), "|", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "/index",
      id: "nav-links",
      className: "jsx-1159922022",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, "Projects"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      id: "logo-mercedes-grossmann",
      src: "https://i.dlpng.com/static/png/173886_preview.png",
      alt: "logo",
      className: "jsx-1159922022" + " " + "logo-big",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "/index",
      id: "nav-links",
      className: "jsx-1159922022",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, "Work"), "|", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "/portfolio",
      id: "nav-links",
      className: "jsx-1159922022",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, "PORTFOLIO"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1159922022",
      __self: this
    }, "@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');.nav.jsx-1159922022{margin-bottom:50px;}.navbar.jsx-1159922022{height:18vh;background-color:#333333;box-sizing:border-box;position:fixed;border-bottom:solid 5px #D4145A;width:100%;top:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-text-decoration:none;text-decoration:none;font-size:150%;font-color:red;}.navbar-smaller.jsx-1159922022{height:12vh;background-color:#333333;box-sizing:border-box;position:fixed;border-bottom:solid 5px #D4145A;width:100%;top:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0px;}#nav-links.jsx-1159922022{color:white;padding:10px;font-family:'Montserrat bold',sans-serif;font-size:4vh;-webkit-text-decoration:none;text-decoration:none;}#nav-links.jsx-1159922022: hover.jsx-1159922022{-webkit-text-decoration:underline;text-decoration:underline;font-color:red;}.logo-small.jsx-1159922022{height:10vh;}.logo-big.jsx-1159922022{height:18vh;}@media (max-width:600px){div.jsx-1159922022{background:blue;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NlYmFzdGlhbmcvRGVza3RvcC9jb2RlL1dvcmsvZGVjby1kZXNpZ24tcmVhY3QvcmVhY3QtZGVjby1kZXNpZ24vcGFnZXMvbmF2QmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtEYyxBQUVpRixBQUV6RCxBQUdOLEFBZ0JELEFBZUMsQUFRYSxBQUtiLEFBSUQsQUFLSyxZQXBEVSxBQWdCRCxBQWVaLEFBYWYsQUFJQSxJQUtBLEdBeERBLE1BbUM0QyxZQS9CcEIsQUFnQkQsc0JBZk4sQUFnQkQsQ0FxQkEsTUFOQSxRQTlCa0IsQUFnQkQsQ0FxQmpDLEtBTnVCLDBCQTlCVixBQWdCRCxXQWZKLEFBZ0JELE1BZlEsQUFnQkQsT0FjZCxtRUE3QitCLEFBZ0JELDJIQWZULEFBZ0JELDZGQWZHLEFBZ0JYLFdBRVosdUNBakJpQixlQUNBLGVBRWpCIiwiZmlsZSI6Ii9ob21lL3NlYmFzdGlhbmcvRGVza3RvcC9jb2RlL1dvcmsvZGVjby1kZXNpZ24tcmVhY3QvcmVhY3QtZGVjby1kZXNpZ24vcGFnZXMvbmF2QmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgIExpbmsgIGZyb20gJ25leHQvbGluayc7XG5cbmNsYXNzIE5hdkJhciBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdGhpcy5yZXNpemVIZWFkZXJPblNjcm9sbCk7XG5cdH1cblxuXHRyZXNpemVIZWFkZXJPblNjcm9sbCgpIHtcblx0XHRjb25zdCBkaXN0YW5jZVkgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCxcblx0XHRcdHNocmlua09uID0gODBcdCxcblx0XHRcdGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2YmFyXCIpLFxuXHRcdFx0bG9nbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9nby1tZXJjZWRlcy1ncm9zc21hbm5cIilcblx0XHQvLyAgIG9yYmlzTG9nb1NocnVuayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3JiaXMtbG9nby1zaHJ1bmtcIilcblxuXG5cdFx0aWYgKGRpc3RhbmNlWSA+IHNocmlua09uKSB7XG5cdFx0XHRoZWFkZXIuY2xhc3NMaXN0LmFkZChcIm5hdmJhci1zbWFsbGVyXCIpO1xuXHRcdFx0aGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJuYXZiYXJcIik7XG5cdFx0XHRsb2dvLmNsYXNzTGlzdC5hZGQoXCJsb2dvLXNtYWxsXCIpO1xuXHRcdFx0bG9nby5jbGFzc0xpc3QucmVtb3ZlKFwibG9nby1iaWdcIik7XG5cblx0XHQvLyAgIG9yYmlzTG9nb1NocnVuay5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCJcblx0XHR9IGVsc2Uge1xuXHRcdFx0aGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJuYXZiYXJcIik7XG5cdFx0XHRoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShcIm5hdmJhci1zbWFsbGVyXCIpO1xuXHRcdFx0bG9nby5jbGFzc0xpc3QuYWRkKFwibG9nby1iaWdcIik7XG5cdFx0XHRsb2dvLmNsYXNzTGlzdC5yZW1vdmUoXCJsb2dvLXNtYWxsXCIpO1xuXG5cdFx0Ly8gICBvcmJpc0xvZ29TaHJ1bmsuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCJcblxuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpe1xuXG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5hdlwiPlxuXG5cdFx0XHRcdDxkaXYgaWQ9XCJuYXZiYXJcIiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cblx0XHRcdFx0PGEgaHJlZj1cIi9pbmRleFwiIGlkPVwibmF2LWxpbmtzXCI+U2VydmljZXM8L2E+XG5cdFx0XHRcdHtcInxcIn1cblx0XHRcdFx0PGEgaHJlZj1cIi9pbmRleFwiIGlkPVwibmF2LWxpbmtzXCI+UHJvamVjdHM8L2E+XG5cdFx0XHRcdHsvKiB7XCJ8XCJ9ICovfVxuXHRcdFx0XHQ8aW1nIGlkPVwibG9nby1tZXJjZWRlcy1ncm9zc21hbm5cIiBjbGFzc05hbWU9XCJsb2dvLWJpZ1wiIHNyYz1cImh0dHBzOi8vaS5kbHBuZy5jb20vc3RhdGljL3BuZy8xNzM4ODZfcHJldmlldy5wbmdcIiBhbHQ9XCJsb2dvXCI+PC9pbWc+XG5cdFx0XHRcdDxhIGhyZWY9XCIvaW5kZXhcIiBpZD1cIm5hdi1saW5rc1wiID5Xb3JrPC9hPlxuXHRcdFx0XHR7XCJ8XCJ9XG5cdFx0XHRcdDxhIGhyZWY9XCIvcG9ydGZvbGlvXCIgaWQ9XCJuYXYtbGlua3NcIiA+UE9SVEZPTElPPC9hPlxuXG5cdFx0PHN0eWxlIGpzeD57YFxuXHRcdEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdCZkaXNwbGF5PXN3YXAnKTtcblx0XHRcdC5uYXYge1xuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiA1MHB4O1xuXHRcdFx0fVxuXHRcdFx0Lm5hdmJhciB7XG5cdFx0XHRcdFx0aGVpZ2h0OiAxOHZoO1xuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzMgO1xuXHRcdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0XHRcdFx0cG9zaXRpb246IGZpeGVkO1xuXHRcdFx0XHRcdGJvcmRlci1ib3R0b206IHNvbGlkIDVweCAjRDQxNDVBO1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdHRvcDogMDtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTUwJTtcblx0XHRcdFx0XHRmb250LWNvbG9yOiByZWQ7XG5cdFx0XHRcdFx0XG5cdFx0XHR9O1xuXHRcdFx0Lm5hdmJhci1zbWFsbGVyIHtcblx0XHRcdFx0aGVpZ2h0OiAxMnZoO1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzIDtcblx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdFx0cG9zaXRpb246IGZpeGVkO1xuXHRcdFx0XHRib3JkZXItYm90dG9tOiBzb2xpZCA1cHggI0Q0MTQ1QTtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdHRvcDogMDtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdG1hcmdpbjogMHB4O1xuXG5cdFx0XHR9O1xuXG5cdFx0XHQjbmF2LWxpbmtzIHtcblx0XHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdFx0cGFkZGluZzogMTBweDtcblx0XHRcdFx0XHRmb250LWZhbWlseTogJ01vbnRzZXJyYXQgYm9sZCcsIHNhbnMtc2VyaWY7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiA0dmg7XG5cdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG5cdFx0XHR9O1xuXHRcdFx0I25hdi1saW5rczogaG92ZXIge1xuXHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcblx0XHRcdFx0Zm9udC1jb2xvcjogcmVkO1xuXHRcdFx0fVxuXG5cdFx0XHQubG9nby1zbWFsbCB7XG5cdFx0XHRcdFx0aGVpZ2h0OiAxMHZoO1xuXHRcdFx0fTtcblxuXHRcdFx0LmxvZ28tYmlnIHtcblx0XHRcdFx0aGVpZ2h0OiAxOHZoO1xuXHRcdFx0fTtcblxuXHRcdFx0QG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG5cdFx0XHRkaXYge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6IGJsdWU7XG5cdFx0XHR9XG5cdFx0XHR9O1xuXHRcdGB9PC9zdHlsZT5cblxuXHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXG4gICAgICAgIClcbiAgICB9XG4gICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkJhciJdfQ== */\n/*@ sourceURL=/home/sebastiang/Desktop/code/Work/deco-design-react/react-deco-design/pages/navBar.js */")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ })

})
//# sourceMappingURL=_app.js.ae2909fb95bdc3da0112.hot-update.js.map
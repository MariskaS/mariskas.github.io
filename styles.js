(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--13-1!./node_modules/postcss-loader/src??embedded!./node_modules/resolve-url-loader??ref--13-3!./node_modules/sass-loader/dist/cjs.js??ref--13-4!./src/styles.scss ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "@font-face {\n  font-family: \"Proxima Extra Bold\";\n  font-style: normal;\n  font-weight: normal;\n  src: url('ProximaNovaExtraCondensedBold.woff2') format(\"woff2\");\n}\n@font-face {\n  font-family: \"Proxima Bold\";\n  font-style: normal;\n  font-weight: normal;\n  src: url('ProximaNovaCondensedBold.woff2') format(\"woff2\");\n}\n@font-face {\n  font-family: \"Proxima Reg\";\n  font-style: normal;\n  font-weight: normal;\n  src: url('ProximaNovaCondensedRegular.woff2') format(\"woff2\");\n}\n[theme=light] {\n  --color-primary: #3864af;\n  --color-primary-dark: #0542a9;\n  --color-gray-light: #f2f2f2;\n  --color-gray: #dedede;\n  --color-gray-dark: #717171;\n  --color-gray-darker: #212121;\n  --color-white: #fff;\n  --body-color: var(--color-gray-darker);\n  --body-bg: var(--color-white);\n}\n[theme=dark] {\n  --color-primary: #c04dcd;\n  --color-primary-dark: #9c27b0;\n  --color-gray-light: #282828;\n  --color-gray: #515151;\n  --color-gray-dark: #212121;\n  --color-gray-darker: #121212;\n  --color-white: #f5f5f5;\n  --body-color: var(--color-white);\n  --body-bg: var(--color-gray-darker);\n}\n[theme=light],\n[theme=dark] {\n  --bg-zebra: var(--color-gray-light);\n  /*\n  * Scrollbar.\n  */\n  --scrollbar-bg: var(--color-primary-dark);\n  /*\n  * Buttons.\n  */\n  --btn-primary-color: var(--color-white);\n  --btn-primary-border: var(--color-primary);\n  --btn-primary-bg: var(--color-primary);\n  --btn-primary-color--action: var(--color-white);\n  --btn-primary-border--action: var(--color-primary-dark);\n  --btn-primary-bg--action: var(--color-primary-dark);\n  --btn-secondary-color: var(--color-primary);\n  --btn-secondary-border: var(--color-primary);\n  --btn-secondary-bg: transparent;\n  --btn-secondary-color--action: var(--color-white);\n  --btn-secondary-border--action: var(--color-primary);\n  --btn-secondary-bg--action: var(--color-primary);\n  /*\n  * Inputs.\n  */\n  --input-color: var(--body-color);\n  --input-border: var(--color-gray);\n  --input-bg: transparent;\n  --input-border--action: var(--color-primary);\n  /*\n  * CheckBox.\n  */\n  --checkbox-border: var(--color-gray);\n  --checkbox-bg: transparetnt;\n  --checkbox-icon-checked: var(--color-primary);\n  --checkbox-border-checked: var(--color-primary);\n  /*\n  * Dropdown.\n  */\n  --dropdown-border: var(--color-gray);\n  --dropdown-bg: var(--body-bg);\n  --dropdown-bg--action: var(--color-gray-light);\n  /*\n  * Card.\n  */\n  --card-border: var(--color-gray);\n  /*\n  * Tabs.\n  */\n  --tab-head-bg: var(--color-gray-light);\n  --tab-head-border: var(--color-gray);\n  --tab-head-border--active: var(--color-primary);\n  /*\n  * Sidebar.\n  */\n  --sidebar-bg: var(--body-bg);\n  --sidebar-border: var(--color-gray);\n  /*\n  * Navbar.\n  */\n  --navbar-border: var(--color-gray);\n  --navbar-link--active: var(--color-primary);\n  /*\n  * Custom Focus.\n  */\n  --focus-box: var(--color-primary-dark);\n}\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\nhtml, body {\n  height: 100%;\n}\nhtml {\n  -webkit-text-size-adjust: 100%;\n}\narticle, aside, figcaption, figure, footer, header, hgroup, main, nav, section {\n  display: block;\n}\nbody {\n  margin: 0;\n}\n[tabindex=\"-1\"]:focus:not(:focus-visible) {\n  outline: 0 !important;\n}\n/**\n* Typography.\n */\nh1, h2, h3, h4, h5, h6 {\n  margin: 0;\n}\np {\n  margin: 0;\n}\nol,\nul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n/**\n* Links.\n */\na {\n  color: currentColor;\n}\n[role=button] {\n  cursor: pointer;\n}\na:not([href]) {\n  color: inherit;\n  text-decoration: none;\n}\n/**\n* Images and content.\n */\nimg {\n  vertical-align: middle;\n  border-style: none;\n}\nsvg {\n  overflow: hidden;\n  vertical-align: middle;\n  width: 100%;\n  height: 100%;\n}\n/**\n* Forms.\n */\nbutton {\n  border-radius: 0;\n  text-transform: none;\n}\nbutton,\ninput {\n  overflow: visible;\n  margin: 0;\n  font-family: inherit;\n  line-height: inherit;\n}\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  padding: 0;\n  border-style: none;\n}\ninput[type=radio],\ninput[type=checkbox] {\n  box-sizing: border-box;\n  padding: 0;\n}\n/*\n* Font.\n*/\n/*\n* Body.\n*/\n/*\n* Screens.\n*/\n/*\n* Z-index.\n*/\n/*\n* Scrollbar.\n*/\n/*\n* Border Radius.\n*/\n/*\n* Spaces.\n*/\n/*\n* Controls (use for input || selector || buttons).\n*/\n/*\n* Animation.\n*/\n/*\n* Navbar.\n*/\n/*\n* Buttons.\n*/\n/*\n* Icons.\n*/\n/*\n* Search Input.\n*/\n/*\n* CheckBox.\n*/\n/*\n* Dropdown.\n*/\n/*\n* Card.\n*/\n/*\n* No Data.\n*/\n/*\n* Tabs.\n*/\n/*\n* Sidebar.\n*/\n/*\n* Form.\n*/\n::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n::-webkit-scrollbar-thumb {\n  background: var(--scrollbar-bg);\n}\n::-webkit-scrollbar-track {\n  background: transparent;\n}\nbody {\n  font-family: \"Proxima Reg\", Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.1;\n  overflow: hidden;\n}\n.ab-main {\n  overflow: auto;\n  padding: 0 16px;\n  display: flex;\n  flex: 1;\n}\n@media (min-width: 640px) {\n  .ab-main {\n    width: 100%;\n    max-width: 1200px;\n    margin: 0 auto;\n  }\n}\nstrong {\n  font-family: \"Proxima Bold\", Arial, sans-serif;\n}\nsvg {\n  fill: currentColor;\n  height: 24px;\n  width: 24px;\n}\n[disabled] {\n  opacity: 0.5;\n  cursor: default;\n  pointer-events: none;\n}", "",{"version":3,"sources":["styles.scss","styles/core/variables/variables-theme.scss","styles/core/reset.scss","styles/core/variables/variables.scss","styles/core/global.scss","styles/core/mixins/mixin-container.scss"],"names":[],"mappings":"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","file":"styles.scss","sourcesContent":["@font-face {\n  font-family: 'Proxima Extra Bold';\n  font-style: normal;\n  font-weight: normal;\n  src: url('~src/assets/fonts/ProximaNovaExtraCondensedBold.woff2') format('woff2');\n}\n\n@font-face {\n  font-family: 'Proxima Bold';\n  font-style: normal;\n  font-weight: normal;\n  src: url('~src/assets/fonts/ProximaNovaCondensedBold.woff2') format('woff2');\n}\n\n@font-face {\n  font-family: 'Proxima Reg';\n  font-style: normal;\n  font-weight: normal;\n  src: url('~src/assets/fonts/ProximaNovaCondensedRegular.woff2') format('woff2');\n}\n\n@import \"~src/styles/core/core\";\n","[theme='light'] {\r\n  --color-primary: #3864af;\r\n  --color-primary-dark: #0542a9;\r\n\r\n  --color-gray-light: #f2f2f2;\r\n  --color-gray: #dedede;\r\n  --color-gray-dark: #717171;\r\n  --color-gray-darker: #212121;\r\n\r\n  --color-white: #fff;\r\n\r\n  --body-color: var(--color-gray-darker);\r\n  --body-bg: var(--color-white);\r\n}\r\n\r\n[theme='dark'] {\r\n  --color-primary: #c04dcd;\r\n  --color-primary-dark: #9c27b0;\r\n\r\n  --color-gray-light: #282828;\r\n  --color-gray: #515151;\r\n  --color-gray-dark: #212121;\r\n  --color-gray-darker: #121212;\r\n\r\n  --color-white: #f5f5f5;\r\n\r\n  --body-color: var(--color-white);\r\n  --body-bg: var(--color-gray-darker);\r\n}\r\n\r\n[theme='light'],\r\n[theme='dark'] {\r\n\r\n  --bg-zebra: var(--color-gray-light);\r\n\r\n  /*\r\n  * Scrollbar.\r\n  */\r\n  --scrollbar-bg: var(--color-primary-dark);\r\n\r\n  /*\r\n  * Buttons.\r\n  */\r\n  // Primary.\r\n  --btn-primary-color: var(--color-white);\r\n  --btn-primary-border: var(--color-primary);\r\n  --btn-primary-bg: var(--color-primary);\r\n\r\n  --btn-primary-color--action: var(--color-white);\r\n  --btn-primary-border--action: var(--color-primary-dark);\r\n  --btn-primary-bg--action: var(--color-primary-dark);\r\n\r\n  // Secondary.\r\n  --btn-secondary-color: var(--color-primary);\r\n  --btn-secondary-border: var(--color-primary);\r\n  --btn-secondary-bg: transparent;\r\n\r\n  --btn-secondary-color--action: var(--color-white);\r\n  --btn-secondary-border--action: var(--color-primary);\r\n  --btn-secondary-bg--action: var(--color-primary);\r\n\r\n  /*\r\n  * Inputs.\r\n  */\r\n  --input-color: var(--body-color);\r\n  --input-border: var(--color-gray);\r\n  --input-bg: transparent;\r\n  --input-border--action: var(--color-primary);\r\n\r\n  /*\r\n  * CheckBox.\r\n  */\r\n  --checkbox-border: var(--color-gray);\r\n  --checkbox-bg: transparetnt;\r\n  --checkbox-icon-checked: var(--color-primary);\r\n  --checkbox-border-checked: var(--color-primary);\r\n\r\n  /*\r\n  * Dropdown.\r\n  */\r\n  --dropdown-border: var(--color-gray);\r\n  --dropdown-bg: var(--body-bg);\r\n  --dropdown-bg--action: var(--color-gray-light);\r\n\r\n  /*\r\n  * Card.\r\n  */\r\n  --card-border: var(--color-gray);\r\n\r\n  /*\r\n  * Tabs.\r\n  */\r\n  --tab-head-bg: var(--color-gray-light);\r\n  --tab-head-border: var(--color-gray);\r\n  --tab-head-border--active: var(--color-primary);\r\n\r\n  /*\r\n  * Sidebar.\r\n  */\r\n  --sidebar-bg: var(--body-bg);\r\n  --sidebar-border: var(--color-gray);\r\n\r\n  /*\r\n  * Navbar.\r\n  */\r\n  --navbar-border: var(--color-gray);\r\n  --navbar-link--active: var(--color-primary);\r\n\r\n  /*\r\n  * Custom Focus.\r\n  */\r\n  --focus-box: var(--color-primary-dark);\r\n}\r\n","*,\r\n*::before,\r\n*::after {\r\n  // Change from `box-sizing: content-box` so that `width` is not affected by `padding` or `border`.\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml, body {\r\n  height: 100%;\r\n}\r\n\r\nhtml {\r\n  // Prevent adjustments of font size after orientation changes in IE on Windows Phone and in iOS.\r\n  -webkit-text-size-adjust: 100%;\r\n}\r\n\r\narticle, aside, figcaption, figure, footer, header, hgroup, main, nav, section {\r\n  // Shim for \"new\" HTML5 structural elements to display correctly (IE10, older browsers)\r\n  display: block;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n}\r\n\r\n// Future-proof rule: in browsers that support :focus-visible, suppress the focus outline\r\n// on elements that programmatically receive focus but wouldn't normally show a visible\r\n// focus outline. In general, this would mean that the outline is only applied if the\r\n// interaction that led to the element receiving programmatic focus was a keyboard interaction,\r\n// or the browser has somehow determined that the user is primarily a keyboard user and/or\r\n// wants focus outlines to always be presented.\r\n//\r\n// See https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible\r\n// and https://developer.paciellogroup.com/blog/2018/03/focus-visible-and-backwards-compatibility/\r\n[tabindex=\"-1\"]:focus:not(:focus-visible) {\r\n  outline: 0 !important;\r\n}\r\n\r\n/**\r\n* Typography.\r\n */\r\nh1, h2, h3, h4, h5, h6 {\r\n  margin: 0;\r\n}\r\n\r\np {\r\n  margin: 0;\r\n}\r\n\r\nol,\r\nul {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n\r\n/**\r\n* Links.\r\n */\r\na {\r\n  color: currentColor;\r\n}\r\n\r\n[role=\"button\"] {\r\n  cursor: pointer;\r\n}\r\n\r\n// And undo these styles for placeholder links/named anchors (without href).\r\n// It would be more straightforward to just use a[href] in previous block, but that\r\n// causes specificity issues in many other styles that are too complex to fix.\r\n// See https://github.com/twbs/bootstrap/issues/19402\r\na:not([href]) {\r\n  color: inherit;\r\n  text-decoration: none;\r\n}\r\n\r\n\r\n/**\r\n* Images and content.\r\n */\r\nimg {\r\n  vertical-align: middle;\r\n  border-style: none; // Remove the border on images inside links in IE 10-.\r\n}\r\n\r\nsvg {\r\n  // Workaround for the SVG overflow bug in IE10/11 is still required.\r\n  // See https://github.com/twbs/bootstrap/issues/26878\r\n  overflow: hidden;\r\n  vertical-align: middle;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n\r\n/**\r\n* Forms.\r\n */\r\n// Remove the default `border-radius` that macOS Chrome adds.\r\n//\r\n// Details at https://github.com/twbs/bootstrap/issues/24093\r\nbutton {\r\n  border-radius: 0;\r\n  text-transform: none; // Remove the inheritance of text transform in Firefox\r\n}\r\n\r\nbutton,\r\ninput {\r\n  overflow: visible; // Show the overflow in Edge\r\n  margin: 0; // Remove the margin in Firefox and Safari\r\n  font-family: inherit;\r\n  line-height: inherit;\r\n}\r\n\r\n// 1. Prevent a WebKit bug where (2) destroys native `audio` and `video` controls in Android 4.\r\n// 2. Correct the inability to style clickable types in iOS and Safari.\r\nbutton,\r\n[type=\"button\"], // 1\r\n[type=\"reset\"],\r\n[type=\"submit\"] {\r\n  -webkit-appearance: button; // 2\r\n}\r\n\r\n// Remove inner border and padding from Firefox, but don't restore the outline like Normalize.\r\nbutton::-moz-focus-inner,\r\n[type=\"button\"]::-moz-focus-inner,\r\n[type=\"reset\"]::-moz-focus-inner,\r\n[type=\"submit\"]::-moz-focus-inner {\r\n  padding: 0;\r\n  border-style: none;\r\n}\r\n\r\ninput[type=\"radio\"],\r\ninput[type=\"checkbox\"] {\r\n  box-sizing: border-box; // Add the correct box sizing in IE 10-\r\n  padding: 0; // Remove the padding in IE 10-\r\n}\r\n\r\n","/*\r\n* Font.\r\n*/\r\n$font-family-extra-bold: 'Proxima Extra Bold', Arial, sans-serif;\r\n$font-family-bold: 'Proxima Bold', Arial, sans-serif;\r\n$font-family-regular: 'Proxima Reg', Arial, sans-serif;\r\n\r\n$font-size-lg: 24px;\r\n$font-size-md: 16px;\r\n$font-size-base: 14px;\r\n\r\n/*\r\n* Body.\r\n*/\r\n$body-font-size: $font-size-base;\r\n$body-font-family: $font-family-regular;\r\n\r\n/*\r\n* Screens.\r\n*/\r\n$screen-sx: 640px;\r\n$screen-md: 780px;\r\n$screen-lg: 1200px;\r\n\r\n/*\r\n* Z-index.\r\n*/\r\n$z-index-dropdown: 2;\r\n$z-index-sidebar: 3;\r\n\r\n/*\r\n* Scrollbar.\r\n*/\r\n$scrollbar-size: 8px;\r\n\r\n/*\r\n* Border Radius.\r\n*/\r\n$border-radius-base: 2px;\r\n\r\n/*\r\n* Spaces.\r\n*/\r\n$space-base: 16px;\r\n$space-base-double: $space-base*2;\r\n$space-base-half: $space-base/2;\r\n$space-small: $space-base/4;\r\n\r\n/*\r\n* Controls (use for input || selector || buttons).\r\n*/\r\n$control-height: 40px;\r\n$control-spaces: $space-small $space-base;\r\n\r\n/*\r\n* Animation.\r\n*/\r\n$transition-base: 270ms ease-in-out;\r\n\r\n/*\r\n* Navbar.\r\n*/\r\n$navbar-spaces: $space-base;\r\n$navbar-font-size: $font-size-lg;\r\n\r\n$navbar-link-height: $control-height;\r\n$navbar-link-spaces: $space-base 0;\r\n$navbar-link-font-family: $font-family-bold;\r\n$navbar-link-font-size: $font-size-md;\r\n\r\n/*\r\n* Buttons.\r\n*/\r\n$btn-height: $control-height - 10px;\r\n$btn-width: 150px;\r\n$btn-spaces: $control-spaces;\r\n$btn-font-family: $font-family-bold;\r\n$btn-icon-space: $space-small;\r\n\r\n/*\r\n* Icons.\r\n*/\r\n$ico-size-base: $font-size-lg;\r\n\r\n/*\r\n* Search Input.\r\n*/\r\n$search-height: $control-height;\r\n$search-spaces: $control-spaces;\r\n$search-icon-spaces: $space-base;\r\n\r\n/*\r\n* CheckBox.\r\n*/\r\n$checkbox-size: $font-size-lg;\r\n\r\n/*\r\n* Dropdown.\r\n*/\r\n$dropdown-height: $control-height;\r\n$dropdown-btn-spaces: $control-spaces;\r\n$dropdown-menu-height: 200px;\r\n$dropdown-menu-item-spaces: $space-base;\r\n\r\n/*\r\n* Card.\r\n*/\r\n$card-spaces: $space-base;\r\n$card-radius: $border-radius-base;\r\n$card-head-font-family: $font-family-extra-bold;\r\n\r\n/*\r\n* No Data.\r\n*/\r\n$no-data-font-family: $font-family-extra-bold;\r\n$no-data-font-size: $font-size-lg;\r\n$no-data-spaces: $space-base-double 0;\r\n\r\n/*\r\n* Tabs.\r\n*/\r\n$tab-spaces: $space-base;\r\n$tab-head-width: 150px;\r\n$tab-head-border: 3px;\r\n\r\n/*\r\n* Sidebar.\r\n*/\r\n$sidebar-spaces: $space-base;\r\n$sidebar-width: 300px;\r\n$sidebar-head-height: 60px;\r\n$sidebar-title-font-family: $font-family-extra-bold;\r\n$sidebar-title-font-size: $font-size-lg;\r\n\r\n/*\r\n* Form.\r\n*/\r\n$form-row-spaces: $space-base-half 0;\r\n","@import \"~src/styles/core/variables/variables\";\r\n@import \"~src/styles/core/mixins/mixin-focus-variant\";\r\n@import \"~src/styles/core/mixins/mixin-container\";\r\n\r\n::-webkit-scrollbar {\r\n  width: $scrollbar-size;\r\n  height: $scrollbar-size;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n  background: var(--scrollbar-bg);\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n  background: transparent;\r\n}\r\n\r\nbody {\r\n  font-family: $body-font-family;\r\n  font-size: $body-font-size;\r\n  line-height: 1.1;\r\n\r\n  // Stretch container full screen.\r\n  overflow: hidden;\r\n}\r\n\r\n.ab-main {\r\n  overflow: auto;\r\n  @include container(0 $space-base);\r\n\r\n  // Stretch container full screen.\r\n  display: flex;\r\n  flex: 1;\r\n}\r\n\r\nstrong {\r\n  font-family: $font-family-bold;\r\n}\r\n\r\nsvg {\r\n  fill: currentColor;\r\n  height: $ico-size-base;\r\n  width: $ico-size-base;\r\n}\r\n\r\n[disabled] {\r\n  opacity: .5;\r\n  cursor: default;\r\n  pointer-events: none;\r\n}\r\n","@mixin container($spaces) {\r\n  padding: $spaces;\r\n\r\n  // For Desktop & Tablet.\r\n  @media (min-width: $screen-sx) {\r\n    width: 100%;\r\n    max-width: 1200px;\r\n    margin: 0 auto;\r\n  }\r\n}\r\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--13-1!../node_modules/postcss-loader/src??embedded!../node_modules/resolve-url-loader??ref--13-3!../node_modules/sass-loader/dist/cjs.js??ref--13-4!./styles.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\marin\Desktop\HOME\ab-test\src\styles.scss */"./src/styles.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map
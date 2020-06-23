(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--15-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "@font-face {\n  font-family: \"Proxima Bold\";\n  font-style: normal;\n  font-weight: normal;\n  src: url('ProximaNovaCondensedBold.woff2') format(\"woff2\");\n}\n@font-face {\n  font-family: \"Proxima Reg\";\n  font-style: normal;\n  font-weight: normal;\n  src: url('ProximaNovaCondensedRegular.woff2') format(\"woff2\");\n}\n[theme=light] {\n  --color-primary: #3864af;\n  --color-primary-dark: #0542a9;\n  --color-gray-light: #f2f2f2;\n  --color-gray: #dedede;\n  --color-gray-dark: #717171;\n  --color-gray-darker: #212121;\n  --color-white: #fff;\n  --body-color: var(--color-gray-darker);\n  --body-bg: var(--color-white);\n}\n[theme=dark] {\n  --color-primary: #c04dcd;\n  --color-primary-dark: #9c27b0;\n  --color-gray-light: #282828;\n  --color-gray: #515151;\n  --color-gray-dark: #212121;\n  --color-gray-darker: #121212;\n  --color-white: #f5f5f5;\n  --body-color: var(--color-white);\n  --body-bg: var(--color-gray-darker);\n}\n[theme=light],\n[theme=dark] {\n  /*\n  * Scrollbar.\n  */\n  --scrollbar-bg: var(--color-primary-dark);\n  /*\n  * Buttons.\n  */\n  --btn-primary-color: var(--color-white);\n  --btn-primary-border: var(--color-primary);\n  --btn-primary-bg: var(--color-primary);\n  --btn-primary-color--action: var(--color-white);\n  --btn-primary-border--action: var(--color-primary-dark);\n  --btn-primary-bg--action: var(--color-primary-dark);\n  --btn-secondary-color: var(--color-primary);\n  --btn-secondary-border: var(--color-primary);\n  --btn-secondary-bg: transparent;\n  --btn-secondary-color--action: var(--color-white);\n  --btn-secondary-border--action: var(--color-primary);\n  --btn-secondary-bg--action: var(--color-primary);\n  --btn-toggle-bg: var(--color-gray);\n  /*\n  * Inputs.\n  */\n  --input-color: var(--body-color);\n  --input-border: var(--color-gray);\n  --input-bg: transparent;\n  --input-border--action: var(--color-primary);\n  /*\n  * CheckBox.\n  */\n  --checkbox-border: var(--color-gray);\n  --checkbox-bg: transparetnt;\n  --checkbox-icon-checked: var(--color-primary);\n  --checkbox-border-checked: var(--color-primary);\n  /*\n  * Dropdown.\n  */\n  --dropdown-border: var(--color-gray);\n  --dropdown-bg: var(--body-bg);\n  --dropdown-bg--action: var(--color-gray-light);\n  /*\n  * Table.\n  */\n  --table-head-bg: var(--color-gray-light);\n  --table-border: var(--color-gray);\n  --table-bg-zebra: var(--color-gray-light);\n  /*\n  * Toolbar.\n  */\n  --toolbar-head-bg: var(--color-gray-light);\n  --toolbar-head-border: var(--color-gray);\n  --toolbar-head-border--active: var(--color-primary);\n  --toolbar-border: var(--color-gray);\n  /*\n  * Pagination.\n  */\n  --pagination-item-bg--acton: var(--color-gray-light);\n  --pagination-item-bg--active: var(--color-primary);\n  --pagination-item-color--active: var(--color-white);\n  --pagination-spread: var(--color-gray-dark);\n  /*\n  * Custom Focus.\n  */\n  --focus-box: var(--color-primary-dark);\n}\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\nhtml, body {\n  height: 100%;\n}\nhtml {\n  -webkit-text-size-adjust: 100%;\n}\narticle, aside, figcaption, figure, footer, header, hgroup, main, nav, section {\n  display: block;\n}\nbody {\n  margin: 0;\n}\n[tabindex=\"-1\"]:focus:not(:focus-visible) {\n  outline: 0 !important;\n}\n/**\n* Typography.\n */\nh1, h2, h3, h4, h5, h6 {\n  margin: 0;\n}\np {\n  margin: 0;\n}\nol,\nul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n/**\n* Links.\n */\na {\n  color: currentColor;\n}\n[role=button] {\n  cursor: pointer;\n}\na:not([href]) {\n  color: inherit;\n  text-decoration: none;\n}\n/**\n* Images and content.\n */\nimg {\n  vertical-align: middle;\n  border-style: none;\n}\nsvg {\n  overflow: hidden;\n  vertical-align: middle;\n  width: 100%;\n  height: 100%;\n}\n/**\n* Forms.\n */\nbutton {\n  border-radius: 0;\n  text-transform: none;\n}\nbutton,\ninput {\n  overflow: visible;\n  margin: 0;\n  font-family: inherit;\n  line-height: inherit;\n}\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  padding: 0;\n  border-style: none;\n}\ninput[type=radio],\ninput[type=checkbox] {\n  box-sizing: border-box;\n  padding: 0;\n}\n/*\n* Font.\n*/\n/*\n* Screens.\n*/\n/*\n* Z-index.\n*/\n/*\n* Scrollbar.\n*/\n/*\n* Border Radius.\n*/\n/*\n* Spaces.\n*/\n/*\n* Controls (use for input || selector || buttons).\n*/\n/*\n* Animation.\n*/\n/*\n* Navbar.\n*/\n/*\n* Buttons.\n*/\n/*\n* Icons.\n*/\n/*\n* Search Input.\n*/\n/*\n* CheckBox.\n*/\n/*\n* Dropdown.\n*/\n/*\n* Table.\n*/\n/*\n* Toolbar.\n*/\n/*\n* Pagination.\n*/\n::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n::-webkit-scrollbar-thumb {\n  background: var(--scrollbar-bg);\n}\n::-webkit-scrollbar-track {\n  background: transparent;\n}\nbody {\n  font-family: \"Proxima Reg\", Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.1;\n}\n@media (min-width: 520px) {\n  body {\n    display: flex;\n  }\n}\n.ab-main {\n  padding: 16px;\n}\n@media (min-width: 520px) {\n  .ab-main {\n    display: flex;\n    flex: 1;\n    overflow: hidden;\n    max-width: 1200px;\n    margin: 0 auto;\n  }\n}\nstrong {\n  font-family: \"Proxima Bold\", Arial, sans-serif;\n}\nsvg {\n  fill: currentColor;\n  height: 24px;\n  width: 24px;\n}\n[disabled] {\n  opacity: 0.5;\n  cursor: default;\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9DOlxcVXNlcnNcXG1hcmluXFxEZXNrdG9wXFxERVZcXGFiLXRlc3Qvc3JjXFxzdHlsZXMuc2NzcyIsInNyYy9zdHlsZXMuc2NzcyIsInNyYy9DOlxcVXNlcnNcXG1hcmluXFxEZXNrdG9wXFxERVZcXGFiLXRlc3Qvc3JjXFxzdHlsZXNcXGNvcmVcXHZhcmlhYmxlc1xcdmFyaWFibGVzLXRoZW1lLnNjc3MiLCJzcmMvQzpcXFVzZXJzXFxtYXJpblxcRGVza3RvcFxcREVWXFxhYi10ZXN0L3NyY1xcc3R5bGVzXFxjb3JlXFxyZXNldC5zY3NzIiwic3JjL0M6XFxVc2Vyc1xcbWFyaW5cXERlc2t0b3BcXERFVlxcYWItdGVzdC9zcmNcXHN0eWxlc1xcY29yZVxcdmFyaWFibGVzXFx2YXJpYWJsZXMuc2NzcyIsInNyYy9DOlxcVXNlcnNcXG1hcmluXFxEZXNrdG9wXFxERVZcXGFiLXRlc3Qvc3JjXFxzdHlsZXNcXGNvcmVcXGdsb2JhbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMERBQUE7QUNDRjtBREVBO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkRBQUE7QUNBRjtBQ1hBO0VBQ0Usd0JBQUE7RUFDQSw2QkFBQTtFQUVBLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0VBRUEsbUJBQUE7RUFFQSxzQ0FBQTtFQUNBLDZCQUFBO0FEVUY7QUNQQTtFQUNFLHdCQUFBO0VBQ0EsNkJBQUE7RUFFQSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUVBLHNCQUFBO0VBRUEsZ0NBQUE7RUFDQSxtQ0FBQTtBRE9GO0FDSkE7O0VBR0U7O0dBQUE7RUFHQSx5Q0FBQTtFQUVBOztHQUFBO0VBSUEsdUNBQUE7RUFDQSwwQ0FBQTtFQUNBLHNDQUFBO0VBRUEsK0NBQUE7RUFDQSx1REFBQTtFQUNBLG1EQUFBO0VBR0EsMkNBQUE7RUFDQSw0Q0FBQTtFQUNBLCtCQUFBO0VBRUEsaURBQUE7RUFDQSxvREFBQTtFQUNBLGdEQUFBO0VBR0Esa0NBQUE7RUFFQTs7R0FBQTtFQUdBLGdDQUFBO0VBQ0EsaUNBQUE7RUFDQSx1QkFBQTtFQUNBLDRDQUFBO0VBRUE7O0dBQUE7RUFHQSxvQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsNkNBQUE7RUFDQSwrQ0FBQTtFQUVBOztHQUFBO0VBR0Esb0NBQUE7RUFDQSw2QkFBQTtFQUNBLDhDQUFBO0VBRUE7O0dBQUE7RUFHQSx3Q0FBQTtFQUNBLGlDQUFBO0VBQ0EseUNBQUE7RUFFQTs7R0FBQTtFQUdBLDBDQUFBO0VBQ0Esd0NBQUE7RUFDQSxtREFBQTtFQUNBLG1DQUFBO0VBRUE7O0dBQUE7RUFHQSxvREFBQTtFQUVBLGtEQUFBO0VBQ0EsbURBQUE7RUFFQSwyQ0FBQTtFQUVBOztHQUFBO0VBR0Esc0NBQUE7QURYRjtBRXRHQTs7O0VBSUUsc0JBQUE7QUZ3R0Y7QUVyR0E7RUFDRSxZQUFBO0FGd0dGO0FFckdBO0VBRUUsOEJBQUE7QUZ1R0Y7QUVwR0E7RUFFRSxjQUFBO0FGc0dGO0FFbkdBO0VBQ0UsU0FBQTtBRnNHRjtBRTFGQTtFQUNFLHFCQUFBO0FGNkZGO0FFMUZBOztFQUFBO0FBR0E7RUFDRSxTQUFBO0FGNkZGO0FFMUZBO0VBQ0UsU0FBQTtBRjZGRjtBRTFGQTs7RUFFRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FGNkZGO0FFMUZBOztFQUFBO0FBR0E7RUFDRSxtQkFBQTtBRjZGRjtBRTFGQTtFQUNFLGVBQUE7QUY2RkY7QUV0RkE7RUFDRSxjQUFBO0VBQ0EscUJBQUE7QUZ5RkY7QUVyRkE7O0VBQUE7QUFHQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7QUZ3RkY7QUVyRkE7RUFHRSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUZzRkY7QUVsRkE7O0VBQUE7QUFNQTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7QUZrRkY7QUUvRUE7O0VBRUUsaUJBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtBRmtGRjtBRTdFQTs7OztFQUlFLDBCQUFBO0FGZ0ZGO0FFNUVBOzs7O0VBSUUsVUFBQTtFQUNBLGtCQUFBO0FGK0VGO0FFNUVBOztFQUVFLHNCQUFBO0VBQ0EsVUFBQTtBRitFRjtBR3ROQTs7Q0FBQTtBQVNBOztDQUFBO0FBS0E7O0NBQUE7QUFLQTs7Q0FBQTtBQUtBOztDQUFBO0FBS0E7O0NBQUE7QUFRQTs7Q0FBQTtBQU1BOztDQUFBO0FBS0E7O0NBQUE7QUFPQTs7Q0FBQTtBQWFBOztDQUFBO0FBS0E7O0NBQUE7QUFRQTs7Q0FBQTtBQUtBOztDQUFBO0FBU0E7O0NBQUE7QUFXQTs7Q0FBQTtBQU9BOztDQUFBO0FDOUdBO0VBQ0UsVURrQmU7RUNqQmYsV0RpQmU7QUh3UGpCO0FJdFFBO0VBQ0UsK0JBQUE7QUp5UUY7QUl0UUE7RUFDRSx1QkFBQTtBSnlRRjtBSXRRQTtFQUNFLDZDRGJvQjtFQ2NwQixlRFplO0VDYWYsZ0JBQUE7QUp5UUY7QUlyUUU7RUFQRjtJQVFJLGFBQUE7RUp3UUY7QUFDRjtBSXJRQTtFQUNFLGFER1c7QUhxUWI7QUlwUUU7RUFMRjtJQU1JLGFBQUE7SUFDQSxPQUFBO0lBQ0EsZ0JBQUE7SUFHQSxpQkFBQTtJQUNBLGNBQUE7RUpxUUY7QUFDRjtBSWxRQTtFQUNFLDhDRDFDaUI7QUgrU25CO0FJbFFBO0VBQ0Usa0JBQUE7RUFDQSxZRHFCYztFQ3BCZCxXRG9CYztBSGlQaEI7QUlsUUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FKcVFGIiwiZmlsZSI6InNyYy9zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiAnUHJveGltYSBCb2xkJztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBzcmM6IHVybCgnfnNyYy9hc3NldHMvZm9udHMvUHJveGltYU5vdmFDb25kZW5zZWRCb2xkLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogJ1Byb3hpbWEgUmVnJztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBzcmM6IHVybCgnfnNyYy9hc3NldHMvZm9udHMvUHJveGltYU5vdmFDb25kZW5zZWRSZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xyXG59XHJcblxyXG5AaW1wb3J0IFwifnNyYy9zdHlsZXMvY29yZS9jb3JlXCI7XHJcbiIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJQcm94aW1hIEJvbGRcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBzcmM6IHVybChcIn5zcmMvYXNzZXRzL2ZvbnRzL1Byb3hpbWFOb3ZhQ29uZGVuc2VkQm9sZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJQcm94aW1hIFJlZ1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHNyYzogdXJsKFwifnNyYy9hc3NldHMvZm9udHMvUHJveGltYU5vdmFDb25kZW5zZWRSZWd1bGFyLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpO1xufVxuW3RoZW1lPWxpZ2h0XSB7XG4gIC0tY29sb3ItcHJpbWFyeTogIzM4NjRhZjtcbiAgLS1jb2xvci1wcmltYXJ5LWRhcms6ICMwNTQyYTk7XG4gIC0tY29sb3ItZ3JheS1saWdodDogI2YyZjJmMjtcbiAgLS1jb2xvci1ncmF5OiAjZGVkZWRlO1xuICAtLWNvbG9yLWdyYXktZGFyazogIzcxNzE3MTtcbiAgLS1jb2xvci1ncmF5LWRhcmtlcjogIzIxMjEyMTtcbiAgLS1jb2xvci13aGl0ZTogI2ZmZjtcbiAgLS1ib2R5LWNvbG9yOiB2YXIoLS1jb2xvci1ncmF5LWRhcmtlcik7XG4gIC0tYm9keS1iZzogdmFyKC0tY29sb3Itd2hpdGUpO1xufVxuXG5bdGhlbWU9ZGFya10ge1xuICAtLWNvbG9yLXByaW1hcnk6ICNjMDRkY2Q7XG4gIC0tY29sb3ItcHJpbWFyeS1kYXJrOiAjOWMyN2IwO1xuICAtLWNvbG9yLWdyYXktbGlnaHQ6ICMyODI4Mjg7XG4gIC0tY29sb3ItZ3JheTogIzUxNTE1MTtcbiAgLS1jb2xvci1ncmF5LWRhcms6ICMyMTIxMjE7XG4gIC0tY29sb3ItZ3JheS1kYXJrZXI6ICMxMjEyMTI7XG4gIC0tY29sb3Itd2hpdGU6ICNmNWY1ZjU7XG4gIC0tYm9keS1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xuICAtLWJvZHktYmc6IHZhcigtLWNvbG9yLWdyYXktZGFya2VyKTtcbn1cblxuW3RoZW1lPWxpZ2h0XSxcblt0aGVtZT1kYXJrXSB7XG4gIC8qXG4gICogU2Nyb2xsYmFyLlxuICAqL1xuICAtLXNjcm9sbGJhci1iZzogdmFyKC0tY29sb3ItcHJpbWFyeS1kYXJrKTtcbiAgLypcbiAgKiBCdXR0b25zLlxuICAqL1xuICAtLWJ0bi1wcmltYXJ5LWNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gIC0tYnRuLXByaW1hcnktYm9yZGVyOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgLS1idG4tcHJpbWFyeS1iZzogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIC0tYnRuLXByaW1hcnktY29sb3ItLWFjdGlvbjogdmFyKC0tY29sb3Itd2hpdGUpO1xuICAtLWJ0bi1wcmltYXJ5LWJvcmRlci0tYWN0aW9uOiB2YXIoLS1jb2xvci1wcmltYXJ5LWRhcmspO1xuICAtLWJ0bi1wcmltYXJ5LWJnLS1hY3Rpb246IHZhcigtLWNvbG9yLXByaW1hcnktZGFyayk7XG4gIC0tYnRuLXNlY29uZGFyeS1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIC0tYnRuLXNlY29uZGFyeS1ib3JkZXI6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICAtLWJ0bi1zZWNvbmRhcnktYmc6IHRyYW5zcGFyZW50O1xuICAtLWJ0bi1zZWNvbmRhcnktY29sb3ItLWFjdGlvbjogdmFyKC0tY29sb3Itd2hpdGUpO1xuICAtLWJ0bi1zZWNvbmRhcnktYm9yZGVyLS1hY3Rpb246IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICAtLWJ0bi1zZWNvbmRhcnktYmctLWFjdGlvbjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIC0tYnRuLXRvZ2dsZS1iZzogdmFyKC0tY29sb3ItZ3JheSk7XG4gIC8qXG4gICogSW5wdXRzLlxuICAqL1xuICAtLWlucHV0LWNvbG9yOiB2YXIoLS1ib2R5LWNvbG9yKTtcbiAgLS1pbnB1dC1ib3JkZXI6IHZhcigtLWNvbG9yLWdyYXkpO1xuICAtLWlucHV0LWJnOiB0cmFuc3BhcmVudDtcbiAgLS1pbnB1dC1ib3JkZXItLWFjdGlvbjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIC8qXG4gICogQ2hlY2tCb3guXG4gICovXG4gIC0tY2hlY2tib3gtYm9yZGVyOiB2YXIoLS1jb2xvci1ncmF5KTtcbiAgLS1jaGVja2JveC1iZzogdHJhbnNwYXJldG50O1xuICAtLWNoZWNrYm94LWljb24tY2hlY2tlZDogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIC0tY2hlY2tib3gtYm9yZGVyLWNoZWNrZWQ6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICAvKlxuICAqIERyb3Bkb3duLlxuICAqL1xuICAtLWRyb3Bkb3duLWJvcmRlcjogdmFyKC0tY29sb3ItZ3JheSk7XG4gIC0tZHJvcGRvd24tYmc6IHZhcigtLWJvZHktYmcpO1xuICAtLWRyb3Bkb3duLWJnLS1hY3Rpb246IHZhcigtLWNvbG9yLWdyYXktbGlnaHQpO1xuICAvKlxuICAqIFRhYmxlLlxuICAqL1xuICAtLXRhYmxlLWhlYWQtYmc6IHZhcigtLWNvbG9yLWdyYXktbGlnaHQpO1xuICAtLXRhYmxlLWJvcmRlcjogdmFyKC0tY29sb3ItZ3JheSk7XG4gIC0tdGFibGUtYmctemVicmE6IHZhcigtLWNvbG9yLWdyYXktbGlnaHQpO1xuICAvKlxuICAqIFRvb2xiYXIuXG4gICovXG4gIC0tdG9vbGJhci1oZWFkLWJnOiB2YXIoLS1jb2xvci1ncmF5LWxpZ2h0KTtcbiAgLS10b29sYmFyLWhlYWQtYm9yZGVyOiB2YXIoLS1jb2xvci1ncmF5KTtcbiAgLS10b29sYmFyLWhlYWQtYm9yZGVyLS1hY3RpdmU6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICAtLXRvb2xiYXItYm9yZGVyOiB2YXIoLS1jb2xvci1ncmF5KTtcbiAgLypcbiAgKiBQYWdpbmF0aW9uLlxuICAqL1xuICAtLXBhZ2luYXRpb24taXRlbS1iZy0tYWN0b246IHZhcigtLWNvbG9yLWdyYXktbGlnaHQpO1xuICAtLXBhZ2luYXRpb24taXRlbS1iZy0tYWN0aXZlOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgLS1wYWdpbmF0aW9uLWl0ZW0tY29sb3ItLWFjdGl2ZTogdmFyKC0tY29sb3Itd2hpdGUpO1xuICAtLXBhZ2luYXRpb24tc3ByZWFkOiB2YXIoLS1jb2xvci1ncmF5LWRhcmspO1xuICAvKlxuICAqIEN1c3RvbSBGb2N1cy5cbiAgKi9cbiAgLS1mb2N1cy1ib3g6IHZhcigtLWNvbG9yLXByaW1hcnktZGFyayk7XG59XG5cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwsIGJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmh0bWwge1xuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG59XG5cbmFydGljbGUsIGFzaWRlLCBmaWdjYXB0aW9uLCBmaWd1cmUsIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1haW4sIG5hdiwgc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xufVxuXG5bdGFiaW5kZXg9XCItMVwiXTpmb2N1czpub3QoOmZvY3VzLXZpc2libGUpIHtcbiAgb3V0bGluZTogMCAhaW1wb3J0YW50O1xufVxuXG4vKipcbiogVHlwb2dyYXBoeS5cbiAqL1xuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XG4gIG1hcmdpbjogMDtcbn1cblxucCB7XG4gIG1hcmdpbjogMDtcbn1cblxub2wsXG51bCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLyoqXG4qIExpbmtzLlxuICovXG5hIHtcbiAgY29sb3I6IGN1cnJlbnRDb2xvcjtcbn1cblxuW3JvbGU9YnV0dG9uXSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYTpub3QoW2hyZWZdKSB7XG4gIGNvbG9yOiBpbmhlcml0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi8qKlxuKiBJbWFnZXMgYW5kIGNvbnRlbnQuXG4gKi9cbmltZyB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJvcmRlci1zdHlsZTogbm9uZTtcbn1cblxuc3ZnIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLyoqXG4qIEZvcm1zLlxuICovXG5idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuYnV0dG9uLFxuaW5wdXQge1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG59XG5cbmJ1dHRvbixcblt0eXBlPWJ1dHRvbl0sXG5bdHlwZT1yZXNldF0sXG5bdHlwZT1zdWJtaXRdIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG59XG5cbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcblt0eXBlPWJ1dHRvbl06Oi1tb3otZm9jdXMtaW5uZXIsXG5bdHlwZT1yZXNldF06Oi1tb3otZm9jdXMtaW5uZXIsXG5bdHlwZT1zdWJtaXRdOjotbW96LWZvY3VzLWlubmVyIHtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xufVxuXG5pbnB1dFt0eXBlPXJhZGlvXSxcbmlucHV0W3R5cGU9Y2hlY2tib3hdIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMDtcbn1cblxuLypcbiogRm9udC5cbiovXG4vKlxuKiBTY3JlZW5zLlxuKi9cbi8qXG4qIFotaW5kZXguXG4qL1xuLypcbiogU2Nyb2xsYmFyLlxuKi9cbi8qXG4qIEJvcmRlciBSYWRpdXMuXG4qL1xuLypcbiogU3BhY2VzLlxuKi9cbi8qXG4qIENvbnRyb2xzICh1c2UgZm9yIGlucHV0IHx8IHNlbGVjdG9yIHx8IGJ1dHRvbnMpLlxuKi9cbi8qXG4qIEFuaW1hdGlvbi5cbiovXG4vKlxuKiBOYXZiYXIuXG4qL1xuLypcbiogQnV0dG9ucy5cbiovXG4vKlxuKiBJY29ucy5cbiovXG4vKlxuKiBTZWFyY2ggSW5wdXQuXG4qL1xuLypcbiogQ2hlY2tCb3guXG4qL1xuLypcbiogRHJvcGRvd24uXG4qL1xuLypcbiogVGFibGUuXG4qL1xuLypcbiogVG9vbGJhci5cbiovXG4vKlxuKiBQYWdpbmF0aW9uLlxuKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogOHB4O1xuICBoZWlnaHQ6IDhweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNjcm9sbGJhci1iZyk7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIlByb3hpbWEgUmVnXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjE7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTIwcHgpIHtcbiAgYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxufVxuXG4uYWItbWFpbiB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTIwcHgpIHtcbiAgLmFiLW1haW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogMTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1heC13aWR0aDogMTIwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG59XG5cbnN0cm9uZyB7XG4gIGZvbnQtZmFtaWx5OiBcIlByb3hpbWEgQm9sZFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cblxuc3ZnIHtcbiAgZmlsbDogY3VycmVudENvbG9yO1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAyNHB4O1xufVxuXG5bZGlzYWJsZWRdIHtcbiAgb3BhY2l0eTogMC41O1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufSIsIlt0aGVtZT0nbGlnaHQnXSB7XHJcbiAgLS1jb2xvci1wcmltYXJ5OiAjMzg2NGFmO1xyXG4gIC0tY29sb3ItcHJpbWFyeS1kYXJrOiAjMDU0MmE5O1xyXG5cclxuICAtLWNvbG9yLWdyYXktbGlnaHQ6ICNmMmYyZjI7XHJcbiAgLS1jb2xvci1ncmF5OiAjZGVkZWRlO1xyXG4gIC0tY29sb3ItZ3JheS1kYXJrOiAjNzE3MTcxO1xyXG4gIC0tY29sb3ItZ3JheS1kYXJrZXI6ICMyMTIxMjE7XHJcblxyXG4gIC0tY29sb3Itd2hpdGU6ICNmZmY7XHJcblxyXG4gIC0tYm9keS1jb2xvcjogdmFyKC0tY29sb3ItZ3JheS1kYXJrZXIpO1xyXG4gIC0tYm9keS1iZzogdmFyKC0tY29sb3Itd2hpdGUpO1xyXG59XHJcblxyXG5bdGhlbWU9J2RhcmsnXSB7XHJcbiAgLS1jb2xvci1wcmltYXJ5OiAjYzA0ZGNkO1xyXG4gIC0tY29sb3ItcHJpbWFyeS1kYXJrOiAjOWMyN2IwO1xyXG5cclxuICAtLWNvbG9yLWdyYXktbGlnaHQ6ICMyODI4Mjg7XHJcbiAgLS1jb2xvci1ncmF5OiAjNTE1MTUxO1xyXG4gIC0tY29sb3ItZ3JheS1kYXJrOiAjMjEyMTIxO1xyXG4gIC0tY29sb3ItZ3JheS1kYXJrZXI6ICMxMjEyMTI7XHJcblxyXG4gIC0tY29sb3Itd2hpdGU6ICNmNWY1ZjU7XHJcblxyXG4gIC0tYm9keS1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xyXG4gIC0tYm9keS1iZzogdmFyKC0tY29sb3ItZ3JheS1kYXJrZXIpO1xyXG59XHJcblxyXG5bdGhlbWU9J2xpZ2h0J10sXHJcblt0aGVtZT0nZGFyayddIHtcclxuXHJcbiAgLypcclxuICAqIFNjcm9sbGJhci5cclxuICAqL1xyXG4gIC0tc2Nyb2xsYmFyLWJnOiB2YXIoLS1jb2xvci1wcmltYXJ5LWRhcmspO1xyXG5cclxuICAvKlxyXG4gICogQnV0dG9ucy5cclxuICAqL1xyXG4gIC8vIFByaW1hcnkuXHJcbiAgLS1idG4tcHJpbWFyeS1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xyXG4gIC0tYnRuLXByaW1hcnktYm9yZGVyOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICAtLWJ0bi1wcmltYXJ5LWJnOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuXHJcbiAgLS1idG4tcHJpbWFyeS1jb2xvci0tYWN0aW9uOiB2YXIoLS1jb2xvci13aGl0ZSk7XHJcbiAgLS1idG4tcHJpbWFyeS1ib3JkZXItLWFjdGlvbjogdmFyKC0tY29sb3ItcHJpbWFyeS1kYXJrKTtcclxuICAtLWJ0bi1wcmltYXJ5LWJnLS1hY3Rpb246IHZhcigtLWNvbG9yLXByaW1hcnktZGFyayk7XHJcblxyXG4gIC8vIFNlY29uZGFyeS5cclxuICAtLWJ0bi1zZWNvbmRhcnktY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gIC0tYnRuLXNlY29uZGFyeS1ib3JkZXI6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gIC0tYnRuLXNlY29uZGFyeS1iZzogdHJhbnNwYXJlbnQ7XHJcblxyXG4gIC0tYnRuLXNlY29uZGFyeS1jb2xvci0tYWN0aW9uOiB2YXIoLS1jb2xvci13aGl0ZSk7XHJcbiAgLS1idG4tc2Vjb25kYXJ5LWJvcmRlci0tYWN0aW9uOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICAtLWJ0bi1zZWNvbmRhcnktYmctLWFjdGlvbjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcblxyXG4gIC8vIFRvZ2dsZS5cclxuICAtLWJ0bi10b2dnbGUtYmc6IHZhcigtLWNvbG9yLWdyYXkpO1xyXG5cclxuICAvKlxyXG4gICogSW5wdXRzLlxyXG4gICovXHJcbiAgLS1pbnB1dC1jb2xvcjogdmFyKC0tYm9keS1jb2xvcik7XHJcbiAgLS1pbnB1dC1ib3JkZXI6IHZhcigtLWNvbG9yLWdyYXkpO1xyXG4gIC0taW5wdXQtYmc6IHRyYW5zcGFyZW50O1xyXG4gIC0taW5wdXQtYm9yZGVyLS1hY3Rpb246IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG5cclxuICAvKlxyXG4gICogQ2hlY2tCb3guXHJcbiAgKi9cclxuICAtLWNoZWNrYm94LWJvcmRlcjogdmFyKC0tY29sb3ItZ3JheSk7XHJcbiAgLS1jaGVja2JveC1iZzogdHJhbnNwYXJldG50O1xyXG4gIC0tY2hlY2tib3gtaWNvbi1jaGVja2VkOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICAtLWNoZWNrYm94LWJvcmRlci1jaGVja2VkOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuXHJcbiAgLypcclxuICAqIERyb3Bkb3duLlxyXG4gICovXHJcbiAgLS1kcm9wZG93bi1ib3JkZXI6IHZhcigtLWNvbG9yLWdyYXkpO1xyXG4gIC0tZHJvcGRvd24tYmc6IHZhcigtLWJvZHktYmcpO1xyXG4gIC0tZHJvcGRvd24tYmctLWFjdGlvbjogdmFyKC0tY29sb3ItZ3JheS1saWdodCk7XHJcblxyXG4gIC8qXHJcbiAgKiBUYWJsZS5cclxuICAqL1xyXG4gIC0tdGFibGUtaGVhZC1iZzogdmFyKC0tY29sb3ItZ3JheS1saWdodCk7XHJcbiAgLS10YWJsZS1ib3JkZXI6IHZhcigtLWNvbG9yLWdyYXkpO1xyXG4gIC0tdGFibGUtYmctemVicmE6IHZhcigtLWNvbG9yLWdyYXktbGlnaHQpO1xyXG5cclxuICAvKlxyXG4gICogVG9vbGJhci5cclxuICAqL1xyXG4gIC0tdG9vbGJhci1oZWFkLWJnOiB2YXIoLS1jb2xvci1ncmF5LWxpZ2h0KTtcclxuICAtLXRvb2xiYXItaGVhZC1ib3JkZXI6IHZhcigtLWNvbG9yLWdyYXkpO1xyXG4gIC0tdG9vbGJhci1oZWFkLWJvcmRlci0tYWN0aXZlOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICAtLXRvb2xiYXItYm9yZGVyOiB2YXIoLS1jb2xvci1ncmF5KTtcclxuXHJcbiAgLypcclxuICAqIFBhZ2luYXRpb24uXHJcbiAgKi9cclxuICAtLXBhZ2luYXRpb24taXRlbS1iZy0tYWN0b246IHZhcigtLWNvbG9yLWdyYXktbGlnaHQpO1xyXG5cclxuICAtLXBhZ2luYXRpb24taXRlbS1iZy0tYWN0aXZlOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICAtLXBhZ2luYXRpb24taXRlbS1jb2xvci0tYWN0aXZlOiB2YXIoLS1jb2xvci13aGl0ZSk7XHJcblxyXG4gIC0tcGFnaW5hdGlvbi1zcHJlYWQ6IHZhcigtLWNvbG9yLWdyYXktZGFyayk7XHJcblxyXG4gIC8qXHJcbiAgKiBDdXN0b20gRm9jdXMuXHJcbiAgKi9cclxuICAtLWZvY3VzLWJveDogdmFyKC0tY29sb3ItcHJpbWFyeS1kYXJrKTtcclxufVxyXG4iLCIqLFxyXG4qOjpiZWZvcmUsXHJcbio6OmFmdGVyIHtcclxuICAvLyBDaGFuZ2UgZnJvbSBgYm94LXNpemluZzogY29udGVudC1ib3hgIHNvIHRoYXQgYHdpZHRoYCBpcyBub3QgYWZmZWN0ZWQgYnkgYHBhZGRpbmdgIG9yIGBib3JkZXJgLlxyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmh0bWwsIGJvZHkge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuaHRtbCB7XHJcbiAgLy8gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBJRSBvbiBXaW5kb3dzIFBob25lIGFuZCBpbiBpT1MuXHJcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xyXG59XHJcblxyXG5hcnRpY2xlLCBhc2lkZSwgZmlnY2FwdGlvbiwgZmlndXJlLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtYWluLCBuYXYsIHNlY3Rpb24ge1xyXG4gIC8vIFNoaW0gZm9yIFwibmV3XCIgSFRNTDUgc3RydWN0dXJhbCBlbGVtZW50cyB0byBkaXNwbGF5IGNvcnJlY3RseSAoSUUxMCwgb2xkZXIgYnJvd3NlcnMpXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLy8gRnV0dXJlLXByb29mIHJ1bGU6IGluIGJyb3dzZXJzIHRoYXQgc3VwcG9ydCA6Zm9jdXMtdmlzaWJsZSwgc3VwcHJlc3MgdGhlIGZvY3VzIG91dGxpbmVcclxuLy8gb24gZWxlbWVudHMgdGhhdCBwcm9ncmFtbWF0aWNhbGx5IHJlY2VpdmUgZm9jdXMgYnV0IHdvdWxkbid0IG5vcm1hbGx5IHNob3cgYSB2aXNpYmxlXHJcbi8vIGZvY3VzIG91dGxpbmUuIEluIGdlbmVyYWwsIHRoaXMgd291bGQgbWVhbiB0aGF0IHRoZSBvdXRsaW5lIGlzIG9ubHkgYXBwbGllZCBpZiB0aGVcclxuLy8gaW50ZXJhY3Rpb24gdGhhdCBsZWQgdG8gdGhlIGVsZW1lbnQgcmVjZWl2aW5nIHByb2dyYW1tYXRpYyBmb2N1cyB3YXMgYSBrZXlib2FyZCBpbnRlcmFjdGlvbixcclxuLy8gb3IgdGhlIGJyb3dzZXIgaGFzIHNvbWVob3cgZGV0ZXJtaW5lZCB0aGF0IHRoZSB1c2VyIGlzIHByaW1hcmlseSBhIGtleWJvYXJkIHVzZXIgYW5kL29yXHJcbi8vIHdhbnRzIGZvY3VzIG91dGxpbmVzIHRvIGFsd2F5cyBiZSBwcmVzZW50ZWQuXHJcbi8vXHJcbi8vIFNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvOmZvY3VzLXZpc2libGVcclxuLy8gYW5kIGh0dHBzOi8vZGV2ZWxvcGVyLnBhY2llbGxvZ3JvdXAuY29tL2Jsb2cvMjAxOC8wMy9mb2N1cy12aXNpYmxlLWFuZC1iYWNrd2FyZHMtY29tcGF0aWJpbGl0eS9cclxuW3RhYmluZGV4PVwiLTFcIl06Zm9jdXM6bm90KDpmb2N1cy12aXNpYmxlKSB7XHJcbiAgb3V0bGluZTogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKipcclxuKiBUeXBvZ3JhcGh5LlxyXG4gKi9cclxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5wIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbm9sLFxyXG51bCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLyoqXHJcbiogTGlua3MuXHJcbiAqL1xyXG5hIHtcclxuICBjb2xvcjogY3VycmVudENvbG9yO1xyXG59XHJcblxyXG5bcm9sZT1cImJ1dHRvblwiXSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vLyBBbmQgdW5kbyB0aGVzZSBzdHlsZXMgZm9yIHBsYWNlaG9sZGVyIGxpbmtzL25hbWVkIGFuY2hvcnMgKHdpdGhvdXQgaHJlZikuXHJcbi8vIEl0IHdvdWxkIGJlIG1vcmUgc3RyYWlnaHRmb3J3YXJkIHRvIGp1c3QgdXNlIGFbaHJlZl0gaW4gcHJldmlvdXMgYmxvY2ssIGJ1dCB0aGF0XHJcbi8vIGNhdXNlcyBzcGVjaWZpY2l0eSBpc3N1ZXMgaW4gbWFueSBvdGhlciBzdHlsZXMgdGhhdCBhcmUgdG9vIGNvbXBsZXggdG8gZml4LlxyXG4vLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8xOTQwMlxyXG5hOm5vdChbaHJlZl0pIHtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcblxyXG4vKipcclxuKiBJbWFnZXMgYW5kIGNvbnRlbnQuXHJcbiAqL1xyXG5pbWcge1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgYm9yZGVyLXN0eWxlOiBub25lOyAvLyBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLS5cclxufVxyXG5cclxuc3ZnIHtcclxuICAvLyBXb3JrYXJvdW5kIGZvciB0aGUgU1ZHIG92ZXJmbG93IGJ1ZyBpbiBJRTEwLzExIGlzIHN0aWxsIHJlcXVpcmVkLlxyXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvaXNzdWVzLzI2ODc4XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4qIEZvcm1zLlxyXG4gKi9cclxuLy8gUmVtb3ZlIHRoZSBkZWZhdWx0IGBib3JkZXItcmFkaXVzYCB0aGF0IG1hY09TIENocm9tZSBhZGRzLlxyXG4vL1xyXG4vLyBEZXRhaWxzIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9pc3N1ZXMvMjQwOTNcclxuYnV0dG9uIHtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lOyAvLyBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3hcclxufVxyXG5cclxuYnV0dG9uLFxyXG5pbnB1dCB7XHJcbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8vIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2VcclxuICBtYXJnaW46IDA7IC8vIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaVxyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG59XHJcblxyXG4vLyAxLiBQcmV2ZW50IGEgV2ViS2l0IGJ1ZyB3aGVyZSAoMikgZGVzdHJveXMgbmF0aXZlIGBhdWRpb2AgYW5kIGB2aWRlb2AgY29udHJvbHMgaW4gQW5kcm9pZCA0LlxyXG4vLyAyLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxyXG5idXR0b24sXHJcblt0eXBlPVwiYnV0dG9uXCJdLCAvLyAxXHJcblt0eXBlPVwicmVzZXRcIl0sXHJcblt0eXBlPVwic3VibWl0XCJdIHtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLy8gMlxyXG59XHJcblxyXG4vLyBSZW1vdmUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGZyb20gRmlyZWZveCwgYnV0IGRvbid0IHJlc3RvcmUgdGhlIG91dGxpbmUgbGlrZSBOb3JtYWxpemUuXHJcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcclxuW3R5cGU9XCJidXR0b25cIl06Oi1tb3otZm9jdXMtaW5uZXIsXHJcblt0eXBlPVwicmVzZXRcIl06Oi1tb3otZm9jdXMtaW5uZXIsXHJcblt0eXBlPVwic3VibWl0XCJdOjotbW96LWZvY3VzLWlubmVyIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInJhZGlvXCJdLFxyXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8vIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLVxyXG4gIHBhZGRpbmc6IDA7IC8vIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC1cclxufVxyXG5cclxuIiwiLypcclxuKiBGb250LlxyXG4qL1xyXG4kZm9udC1mYW1pbHktYm9sZDogJ1Byb3hpbWEgQm9sZCcsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4kZm9udC1mYW1pbHktcmVndWxhcjogJ1Byb3hpbWEgUmVnJywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcblxyXG4kYm9keS1mb250LXNpemU6IDE0cHg7XHJcbiRib2R5LWZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktcmVndWxhcjtcclxuXHJcbi8qXHJcbiogU2NyZWVucy5cclxuKi9cclxuJHNjcmVlbi1zeDogNTIwcHg7XHJcblxyXG4vKlxyXG4qIFotaW5kZXguXHJcbiovXHJcbiR6LWluZGV4LWRyb3Bkb3duOiAyO1xyXG5cclxuLypcclxuKiBTY3JvbGxiYXIuXHJcbiovXHJcbiRzY3JvbGxiYXItc2l6ZTogOHB4O1xyXG5cclxuLypcclxuKiBCb3JkZXIgUmFkaXVzLlxyXG4qL1xyXG4kYm9yZGVyLXJhZGl1cy1iYXNlOiAycHg7XHJcblxyXG4vKlxyXG4qIFNwYWNlcy5cclxuKi9cclxuJHNwYWNlLWJhc2U6IDE2cHg7XHJcbiRzcGFjZS1iYXNlLWRvdWJsZTogJHNwYWNlLWJhc2UqMjtcclxuJHNwYWNlLWJhc2UtaGFsZjogJHNwYWNlLWJhc2UvMjtcclxuJHNwYWNlLXNtYWxsOiAkc3BhY2UtYmFzZS80O1xyXG5cclxuLypcclxuKiBDb250cm9scyAodXNlIGZvciBpbnB1dCB8fCBzZWxlY3RvciB8fCBidXR0b25zKS5cclxuKi9cclxuJGNvbnRyb2wtaGVpZ2h0OiA0MHB4O1xyXG4kY29udHJvbC1zcGFjZXM6ICRzcGFjZS1zbWFsbCAkc3BhY2UtYmFzZTtcclxuXHJcbi8qXHJcbiogQW5pbWF0aW9uLlxyXG4qL1xyXG4kdHJhbnNpdGlvbi1iYXNlOiAyNzBtcyBlYXNlLWluLW91dDtcclxuXHJcbi8qXHJcbiogTmF2YmFyLlxyXG4qL1xyXG4kbmF2YmFyLXNwYWNlczogJHNwYWNlLWJhc2U7XHJcbiRuYXZiYXItZm9udC1zaXplOiAyNHB4O1xyXG5cclxuXHJcbi8qXHJcbiogQnV0dG9ucy5cclxuKi9cclxuJGJ0bi1oZWlnaHQ6ICRjb250cm9sLWhlaWdodCAtIDEwcHg7XHJcbiRidG4td2lkdGg6IDE1MHB4O1xyXG4kYnRuLXNwYWNlczogJGNvbnRyb2wtc3BhY2VzO1xyXG4kYnRuLWZvbnQ6ICRmb250LWZhbWlseS1ib2xkO1xyXG4kYnRuLWljb24tc3BhY2U6ICRzcGFjZS1zbWFsbDtcclxuXHJcbi8vIFRvZ2dsZS5cclxuJGJ0bi10b2dnbGUtc2l6ZTogMjhweDtcclxuJGJ0bi10b2dnbGUtcmFkaXVzOiA1MCU7XHJcblxyXG4vKlxyXG4qIEljb25zLlxyXG4qL1xyXG4kaWNvLXNpemUtYmFzZTogMjRweDtcclxuXHJcbi8qXHJcbiogU2VhcmNoIElucHV0LlxyXG4qL1xyXG4kc2VhcmNoLWhlaWdodDogJGNvbnRyb2wtaGVpZ2h0O1xyXG4kc2VhcmNoLXNwYWNlczogJGNvbnRyb2wtc3BhY2VzO1xyXG4kc2VhcmNoLXdpZHRoOiAzMDBweDtcclxuJHNlYXJjaC1pY29uLXNwYWNlczogJHNwYWNlLWJhc2U7XHJcblxyXG4vKlxyXG4qIENoZWNrQm94LlxyXG4qL1xyXG4kY2hlY2tib3gtc2l6ZTogMjRweDtcclxuXHJcbi8qXHJcbiogRHJvcGRvd24uXHJcbiovXHJcbiRkcm9wZG93bi13aWR0aDogMTUwcHg7XHJcbiRkcm9wZG93bi1oZWlnaHQ6ICRjb250cm9sLWhlaWdodDtcclxuJGRyb3Bkb3duLWJ0bi1zcGFjZXM6ICRjb250cm9sLXNwYWNlcztcclxuJGRyb3Bkb3duLW1lbnUtaGVpZ2h0OiAyMDBweDtcclxuJGRyb3Bkb3duLW1lbnUtaXRlbS1zcGFjZXM6ICRzcGFjZS1iYXNlO1xyXG5cclxuLypcclxuKiBUYWJsZS5cclxuKi9cclxuJHRhYmxlLWNvbC1zcGFjZXM6ICRzcGFjZS1iYXNlO1xyXG4kdGFibGUtY29sLXdpZHRoOiAxMjBweDtcclxuJHRhYmxlLWNvbC1zcGFjZXMtc206ICRzcGFjZS1zbWFsbDtcclxuJHRhYmxlLXRvb2xiYXItc3BhY2VzOiAkc3BhY2UtYmFzZSAkc3BhY2Utc21hbGw7XHJcblxyXG4vLyBGaXggLSBJZiB0Ym9keSBoYXMgc2Nyb2xsLlxyXG4kdGFibGUtaGVhZC1zcGFjZTogMTdweDtcclxuXHJcbi8qXHJcbiogVG9vbGJhci5cclxuKi9cclxuJHRvb2xiYXItc3BhY2VzOiAkc3BhY2UtYmFzZTtcclxuJHRvb2xiYXItaGVhZC13aWR0aDogMTUwcHg7XHJcbiR0b29sYmFyLWhlYWQtYm9yZGVyOiAzcHg7XHJcblxyXG4vKlxyXG4qIFBhZ2luYXRpb24uXHJcbiovXHJcbiRwYWdpbmF0aW9uLWl0ZW0tc2l6ZTogMjRweDtcclxuXHJcbiRwYWdpbmF0aW9uLWl0ZW0tYm9yZGVyOiAycHg7XHJcbiRwYWdpbmF0aW9uLWl0ZW0tc3BhY2VzOiAkc3BhY2Utc21hbGw7XHJcblxyXG4kcGFnaW5hdGlvbi1zcHJlYWQtc2l6ZTogMjBweDtcclxuJHBhZ2luYXRpb24tc3ByZWFkLXNwYWNlczogMCAkc3BhY2UtYmFzZS1oYWxmO1xyXG4iLCJAaW1wb3J0IFwifnNyYy9zdHlsZXMvY29yZS92YXJpYWJsZXMvdmFyaWFibGVzXCI7XHJcbkBpbXBvcnQgXCJ+c3JjL3N0eWxlcy9jb3JlL21peGlucy9taXhpbi1mb2N1cy12YXJpYW50XCI7XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogJHNjcm9sbGJhci1zaXplO1xyXG4gIGhlaWdodDogJHNjcm9sbGJhci1zaXplO1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zY3JvbGxiYXItYmcpO1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6ICRib2R5LWZvbnQtZmFtaWx5O1xyXG4gIGZvbnQtc2l6ZTogJGJvZHktZm9udC1zaXplO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjE7XHJcblxyXG4gIC8vIFN0cmV0Y2ggY29udGFpbmVyIGZ1bGwgc2NyZWVuLlxyXG4gIC8vIEZvciBEZXNrdG9wICYgVGFibGV0LlxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkc2NyZWVuLXN4KSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxufVxyXG5cclxuLmFiLW1haW4ge1xyXG4gIHBhZGRpbmc6ICRzcGFjZS1iYXNlO1xyXG5cclxuICAvLyBTdHJldGNoIGNvbnRhaW5lciBmdWxsIHNjcmVlbi5cclxuICAvLyBGb3IgRGVza3RvcCAmIFRhYmxldC5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1zeCkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgIC8vIFRPRE86IG9ubHkgZm9yIERFTU8uXHJcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxufVxyXG5cclxuc3Ryb25nIHtcclxuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LWJvbGQ7XHJcbn1cclxuXHJcbnN2ZyB7XHJcbiAgZmlsbDogY3VycmVudENvbG9yO1xyXG4gIGhlaWdodDogJGljby1zaXplLWJhc2U7XHJcbiAgd2lkdGg6ICRpY28tc2l6ZS1iYXNlO1xyXG59XHJcblxyXG5bZGlzYWJsZWRdIHtcclxuICBvcGFjaXR5OiAuNTtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuIl19 */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

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

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
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
  var css = remove ? '' : obj.css; // For old IE

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
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--15-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\marin\Desktop\DEV\ab-test\src\styles.scss */"./src/styles.scss");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--15-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "@font-face {\n  font-family: \"Proxima Bold\";\n  font-style: normal;\n  font-weight: normal;\n  src: url('ProximaNovaCondensedBold.woff2') format(\"woff2\");\n}\n@font-face {\n  font-family: \"Proxima Reg\";\n  font-style: normal;\n  font-weight: normal;\n  src: url('ProximaNovaCondensedRegular.woff2') format(\"woff2\");\n}\n:root {\n  --color-primary: #3864af;\n  --color-primary-dark: #0542a9;\n  --color-white: #fff;\n  --color-gray-light: #f2f2f2;\n  --color-gray: #dedede;\n  --color-gray-dark: #717171;\n  --color-gray-darker: #212121;\n  --color-red: #e03e52;\n  --body-color: var(--color-gray-darker);\n  --body-bg: var(--color-white);\n  /*\n  * Buttons.\n  */\n  --btn-primary-color: var(--color-white);\n  --btn-primary-border: var(--color-primary);\n  --btn-primary-bg: var(--color-primary);\n  --btn-primary-color--action: var(--color-white);\n  --btn-primary-border--action: var(--color-primary-dark);\n  --btn-primary-bg--action: var(--color-primary-dark);\n  --btn-secondary-color: var(--color-primary);\n  --btn-secondary-border: var(--color-primary);\n  --btn-secondary-bg: var(--color-white);\n  --btn-secondary-color--action: var(--color-white);\n  --btn-secondary-border--action: var(--color-primary);\n  --btn-secondary-bg--action: var(--color-primary);\n  --btn-toggle-bg: var(--color-gray);\n  /*\n  * Inputs.\n  */\n  --input-color: var(--body-color);\n  --input-border: var(--color-gray);\n  --input-bg: var(--color-gray-light);\n  --input-border--action: var(--color-primary);\n  /*\n  * CheckBox.\n  */\n  --checkbox-border: var(--color-gray);\n  --checkbox-bg: var(--color-white);\n  --checkbox-checked-icon: var(--color-primary);\n  /*\n  * Dropdown.\n  */\n  --dropdown-border: var(--color-gray);\n  --dropdown-bg: var(--color-white);\n  --dropdown-bg--action: var(--color-gray-light);\n  /*\n  * Table.\n  */\n  --table-bg-head: var(--color-gray-light);\n  --table-border: var(--color-gray);\n  --table-bg-zebra: var(--color-gray-light);\n  /*\n  * Toolbar.\n  */\n  --toolbar-head-bg: var(--color-gray-light);\n  --toolbar-head-border: var(--color-gray);\n  --toolbar-head-border--active: var(--color-primary);\n  --toolbar-border: var(--color-gray);\n  /*\n  * Pagination.\n  */\n  --pagination-item-color: var(--color-primary);\n  --pagination-item-bg--active: var(--color-gray);\n  --pagination-item-color--active: var(--body-color);\n  --pagination-item-color--disabled: var(--color-gray-dark);\n  --pagination-spread: var(--color-gray-dark);\n  /*\n  * Custom Focus.\n  */\n  --focus-box-shadow: var(--color-primary-dark);\n}\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\nhtml, body {\n  height: 100%;\n}\nhtml {\n  -webkit-text-size-adjust: 100%;\n}\narticle, aside, figcaption, figure, footer, header, hgroup, main, nav, section {\n  display: block;\n}\nbody {\n  margin: 0;\n}\n[tabindex=\"-1\"]:focus:not(:focus-visible) {\n  outline: 0 !important;\n}\n/**\n* Typography.\n */\nh1, h2, h3, h4, h5, h6 {\n  margin: 0;\n}\np {\n  margin: 0;\n}\nol,\nul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n/**\n* Links.\n */\na {\n  color: currentColor;\n}\n[role=button] {\n  cursor: pointer;\n}\na:not([href]) {\n  color: inherit;\n  text-decoration: none;\n}\n/**\n* Images and content.\n */\nimg {\n  vertical-align: middle;\n  border-style: none;\n}\nsvg {\n  overflow: hidden;\n  vertical-align: middle;\n  width: 100%;\n  height: 100%;\n}\n/**\n* Forms.\n */\nbutton {\n  border-radius: 0;\n  text-transform: none;\n}\nbutton,\ninput {\n  overflow: visible;\n  margin: 0;\n  font-family: inherit;\n  line-height: inherit;\n}\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  padding: 0;\n  border-style: none;\n}\ninput[type=radio],\ninput[type=checkbox] {\n  box-sizing: border-box;\n  padding: 0;\n}\n/*\n* Font.\n*/\n/*\n* Screens.\n*/\n/*\n* Z-index.\n*/\n/*\n* Spaces.\n*/\n/*\n* Controls (use for input || selector || buttons).\n*/\n/*\n* Animation.\n*/\n/*\n* Buttons.\n*/\n/*\n* Icons.\n*/\n/*\n* Search Input.\n*/\n/*\n* CheckBox.\n*/\n/*\n* Dropdown.\n*/\n/*\n* Table.\n*/\n/*\n* Toolbar.\n*/\n/*\n* Pagination.\n*/\nbody {\n  font-family: \"Proxima Reg\", Arial, sans-serif;\n  font-size: 14px;\n  color: var(--body-color);\n  line-height: 1.1;\n  background-color: var(--body-bg);\n}\n@media (min-width: 520px) {\n  body {\n    display: flex;\n  }\n}\n.ab-main {\n  padding: 16px;\n}\n@media (min-width: 520px) {\n  .ab-main {\n    display: flex;\n    flex: 1;\n    max-width: 1200px;\n    margin: 0 auto;\n  }\n}\nstrong {\n  font-family: \"Proxima Bold\", Arial, sans-serif;\n}\n.ab-ico {\n  display: block;\n  color: currentColor;\n  font-size: 14px;\n  /*\n  * Icons Size.\n  */\n  /*\n  * Icons Color.\n  */\n}\n.ab-ico__group {\n  margin: 4px;\n  display: flex;\n}\n.ab-ico__group .ab-ico {\n  padding: 4px;\n}\n.ab-ico--large {\n  font-size: 24px;\n}\n.ab-ico--primary {\n  color: var(--color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9DOlxcVXNlcnNcXG1hcmluXFxEZXNrdG9wXFxERVZcXGFiLXRlc3Qvc3JjXFxzdHlsZXMuc2NzcyIsInNyYy9zdHlsZXMuc2NzcyIsInNyYy9DOlxcVXNlcnNcXG1hcmluXFxEZXNrdG9wXFxERVZcXGFiLXRlc3Qvc3JjXFxzdHlsZXNcXGNvcmVcXHZhcmlhYmxlc1xcdmFyaWFibGVzLXRoZW1lLnNjc3MiLCJzcmMvQzpcXFVzZXJzXFxtYXJpblxcRGVza3RvcFxcREVWXFxhYi10ZXN0L3NyY1xcc3R5bGVzXFxjb3JlXFxyZXNldC5zY3NzIiwic3JjL0M6XFxVc2Vyc1xcbWFyaW5cXERlc2t0b3BcXERFVlxcYWItdGVzdC9zcmNcXHN0eWxlc1xcY29yZVxcdmFyaWFibGVzXFx2YXJpYWJsZXMuc2NzcyIsInNyYy9DOlxcVXNlcnNcXG1hcmluXFxEZXNrdG9wXFxERVZcXGFiLXRlc3Qvc3JjXFxzdHlsZXNcXGNvcmVcXGdsb2JhbC5zY3NzIiwic3JjL0M6XFxVc2Vyc1xcbWFyaW5cXERlc2t0b3BcXERFVlxcYWItdGVzdC9zcmNcXHN0eWxlc1xcY29tcG9uZW50c1xcaWNvbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBEQUFBO0FDQ0Y7QURFQTtFQUNFLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDZEQUFBO0FDQUY7QUNYQTtFQUNFLHdCQUFBO0VBQ0EsNkJBQUE7RUFFQSxtQkFBQTtFQUVBLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0VBRUEsb0JBQUE7RUFFQSxzQ0FBQTtFQUNBLDZCQUFBO0VBRUE7O0dBQUE7RUFJQSx1Q0FBQTtFQUNBLDBDQUFBO0VBQ0Esc0NBQUE7RUFFQSwrQ0FBQTtFQUNBLHVEQUFBO0VBQ0EsbURBQUE7RUFHQSwyQ0FBQTtFQUNBLDRDQUFBO0VBQ0Esc0NBQUE7RUFFQSxpREFBQTtFQUNBLG9EQUFBO0VBQ0EsZ0RBQUE7RUFHQSxrQ0FBQTtFQUVBOztHQUFBO0VBR0EsZ0NBQUE7RUFDQSxpQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsNENBQUE7RUFFQTs7R0FBQTtFQUdBLG9DQUFBO0VBQ0EsaUNBQUE7RUFDQSw2Q0FBQTtFQUVBOztHQUFBO0VBR0Esb0NBQUE7RUFDQSxpQ0FBQTtFQUNBLDhDQUFBO0VBRUE7O0dBQUE7RUFHQSx3Q0FBQTtFQUNBLGlDQUFBO0VBQ0EseUNBQUE7RUFFQTs7R0FBQTtFQUdBLDBDQUFBO0VBQ0Esd0NBQUE7RUFDQSxtREFBQTtFQUNBLG1DQUFBO0VBRUE7O0dBQUE7RUFHQSw2Q0FBQTtFQUVBLCtDQUFBO0VBQ0Esa0RBQUE7RUFFQSx5REFBQTtFQUVBLDJDQUFBO0VBRUE7O0dBQUE7RUFHQSw2Q0FBQTtBRFRGO0FFbkZBOzs7RUFJRSxzQkFBQTtBRnFGRjtBRWxGQTtFQUNFLFlBQUE7QUZxRkY7QUVsRkE7RUFFRSw4QkFBQTtBRm9GRjtBRWpGQTtFQUVFLGNBQUE7QUZtRkY7QUVoRkE7RUFDRSxTQUFBO0FGbUZGO0FFdkVBO0VBQ0UscUJBQUE7QUYwRUY7QUV2RUE7O0VBQUE7QUFHQTtFQUNFLFNBQUE7QUYwRUY7QUV2RUE7RUFDRSxTQUFBO0FGMEVGO0FFdkVBOztFQUVFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUYwRUY7QUV2RUE7O0VBQUE7QUFHQTtFQUNFLG1CQUFBO0FGMEVGO0FFdkVBO0VBQ0UsZUFBQTtBRjBFRjtBRW5FQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBRnNFRjtBRWxFQTs7RUFBQTtBQUdBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtBRnFFRjtBRWxFQTtFQUdFLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBRm1FRjtBRS9EQTs7RUFBQTtBQU1BO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtBRitERjtBRTVEQTs7RUFFRSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0FGK0RGO0FFMURBOzs7O0VBSUUsMEJBQUE7QUY2REY7QUV6REE7Ozs7RUFJRSxVQUFBO0VBQ0Esa0JBQUE7QUY0REY7QUV6REE7O0VBRUUsc0JBQUE7RUFDQSxVQUFBO0FGNERGO0FHbk1BOztDQUFBO0FBU0E7O0NBQUE7QUFLQTs7Q0FBQTtBQUtBOztDQUFBO0FBUUE7O0NBQUE7QUFPQTs7Q0FBQTtBQUtBOztDQUFBO0FBY0E7O0NBQUE7QUFNQTs7Q0FBQTtBQVFBOztDQUFBO0FBS0E7O0NBQUE7QUFTQTs7Q0FBQTtBQVdBOztDQUFBO0FBT0E7O0NBQUE7QUNoR0E7RUFDRSw2Q0FBQTtFQUNBLGVEQ2U7RUNBZix3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUo2T0Y7QUl6T0U7RUFURjtJQVVJLGFBQUE7RUo0T0Y7QUFDRjtBSXpPQTtFQUNFLGFESVc7QUh3T2I7QUl4T0U7RUFMRjtJQU1JLGFBQUE7SUFDQSxPQUFBO0lBR0EsaUJBQUE7SUFDQSxjQUFBO0VKeU9GO0FBQ0Y7QUl0T0E7RUFDRSw4Q0Q5QmlCO0FIdVFuQjtBSzFRQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVGcURjO0VFMUNkOztHQUFBO0VBT0E7O0dBQUE7QUxpUUY7QUtqUkU7RUFDRSxXRm1CVTtFRWxCVixhQUFBO0FMbVJKO0FLalJJO0VBQ0UsWUZlUTtBSG9RZDtBSzVRRTtFQUNFLGVGdUNhO0FIdU9qQjtBS3hRRTtFQUNFLDJCQUFBO0FMMFFKIiwiZmlsZSI6InNyYy9zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1Byb3hpbWEgQm9sZCc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgc3JjOiB1cmwoJ35zcmMvYXNzZXRzL2ZvbnRzL1Byb3hpbWFOb3ZhQ29uZGVuc2VkQm9sZC53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnUHJveGltYSBSZWcnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHNyYzogdXJsKCd+c3JjL2Fzc2V0cy9mb250cy9Qcm94aW1hTm92YUNvbmRlbnNlZFJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG59XG5cbkBpbXBvcnQgXCJ+c3JjL3N0eWxlcy9jb3JlL2NvcmVcIjtcbiIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJQcm94aW1hIEJvbGRcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBzcmM6IHVybChcIn5zcmMvYXNzZXRzL2ZvbnRzL1Byb3hpbWFOb3ZhQ29uZGVuc2VkQm9sZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJQcm94aW1hIFJlZ1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHNyYzogdXJsKFwifnNyYy9hc3NldHMvZm9udHMvUHJveGltYU5vdmFDb25kZW5zZWRSZWd1bGFyLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpO1xufVxuOnJvb3Qge1xuICAtLWNvbG9yLXByaW1hcnk6ICMzODY0YWY7XG4gIC0tY29sb3ItcHJpbWFyeS1kYXJrOiAjMDU0MmE5O1xuICAtLWNvbG9yLXdoaXRlOiAjZmZmO1xuICAtLWNvbG9yLWdyYXktbGlnaHQ6ICNmMmYyZjI7XG4gIC0tY29sb3ItZ3JheTogI2RlZGVkZTtcbiAgLS1jb2xvci1ncmF5LWRhcms6ICM3MTcxNzE7XG4gIC0tY29sb3ItZ3JheS1kYXJrZXI6ICMyMTIxMjE7XG4gIC0tY29sb3ItcmVkOiAjZTAzZTUyO1xuICAtLWJvZHktY29sb3I6IHZhcigtLWNvbG9yLWdyYXktZGFya2VyKTtcbiAgLS1ib2R5LWJnOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gIC8qXG4gICogQnV0dG9ucy5cbiAgKi9cbiAgLS1idG4tcHJpbWFyeS1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xuICAtLWJ0bi1wcmltYXJ5LWJvcmRlcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIC0tYnRuLXByaW1hcnktYmc6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICAtLWJ0bi1wcmltYXJ5LWNvbG9yLS1hY3Rpb246IHZhcigtLWNvbG9yLXdoaXRlKTtcbiAgLS1idG4tcHJpbWFyeS1ib3JkZXItLWFjdGlvbjogdmFyKC0tY29sb3ItcHJpbWFyeS1kYXJrKTtcbiAgLS1idG4tcHJpbWFyeS1iZy0tYWN0aW9uOiB2YXIoLS1jb2xvci1wcmltYXJ5LWRhcmspO1xuICAtLWJ0bi1zZWNvbmRhcnktY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICAtLWJ0bi1zZWNvbmRhcnktYm9yZGVyOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgLS1idG4tc2Vjb25kYXJ5LWJnOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gIC0tYnRuLXNlY29uZGFyeS1jb2xvci0tYWN0aW9uOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gIC0tYnRuLXNlY29uZGFyeS1ib3JkZXItLWFjdGlvbjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIC0tYnRuLXNlY29uZGFyeS1iZy0tYWN0aW9uOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgLS1idG4tdG9nZ2xlLWJnOiB2YXIoLS1jb2xvci1ncmF5KTtcbiAgLypcbiAgKiBJbnB1dHMuXG4gICovXG4gIC0taW5wdXQtY29sb3I6IHZhcigtLWJvZHktY29sb3IpO1xuICAtLWlucHV0LWJvcmRlcjogdmFyKC0tY29sb3ItZ3JheSk7XG4gIC0taW5wdXQtYmc6IHZhcigtLWNvbG9yLWdyYXktbGlnaHQpO1xuICAtLWlucHV0LWJvcmRlci0tYWN0aW9uOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgLypcbiAgKiBDaGVja0JveC5cbiAgKi9cbiAgLS1jaGVja2JveC1ib3JkZXI6IHZhcigtLWNvbG9yLWdyYXkpO1xuICAtLWNoZWNrYm94LWJnOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gIC0tY2hlY2tib3gtY2hlY2tlZC1pY29uOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgLypcbiAgKiBEcm9wZG93bi5cbiAgKi9cbiAgLS1kcm9wZG93bi1ib3JkZXI6IHZhcigtLWNvbG9yLWdyYXkpO1xuICAtLWRyb3Bkb3duLWJnOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gIC0tZHJvcGRvd24tYmctLWFjdGlvbjogdmFyKC0tY29sb3ItZ3JheS1saWdodCk7XG4gIC8qXG4gICogVGFibGUuXG4gICovXG4gIC0tdGFibGUtYmctaGVhZDogdmFyKC0tY29sb3ItZ3JheS1saWdodCk7XG4gIC0tdGFibGUtYm9yZGVyOiB2YXIoLS1jb2xvci1ncmF5KTtcbiAgLS10YWJsZS1iZy16ZWJyYTogdmFyKC0tY29sb3ItZ3JheS1saWdodCk7XG4gIC8qXG4gICogVG9vbGJhci5cbiAgKi9cbiAgLS10b29sYmFyLWhlYWQtYmc6IHZhcigtLWNvbG9yLWdyYXktbGlnaHQpO1xuICAtLXRvb2xiYXItaGVhZC1ib3JkZXI6IHZhcigtLWNvbG9yLWdyYXkpO1xuICAtLXRvb2xiYXItaGVhZC1ib3JkZXItLWFjdGl2ZTogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIC0tdG9vbGJhci1ib3JkZXI6IHZhcigtLWNvbG9yLWdyYXkpO1xuICAvKlxuICAqIFBhZ2luYXRpb24uXG4gICovXG4gIC0tcGFnaW5hdGlvbi1pdGVtLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgLS1wYWdpbmF0aW9uLWl0ZW0tYmctLWFjdGl2ZTogdmFyKC0tY29sb3ItZ3JheSk7XG4gIC0tcGFnaW5hdGlvbi1pdGVtLWNvbG9yLS1hY3RpdmU6IHZhcigtLWJvZHktY29sb3IpO1xuICAtLXBhZ2luYXRpb24taXRlbS1jb2xvci0tZGlzYWJsZWQ6IHZhcigtLWNvbG9yLWdyYXktZGFyayk7XG4gIC0tcGFnaW5hdGlvbi1zcHJlYWQ6IHZhcigtLWNvbG9yLWdyYXktZGFyayk7XG4gIC8qXG4gICogQ3VzdG9tIEZvY3VzLlxuICAqL1xuICAtLWZvY3VzLWJveC1zaGFkb3c6IHZhcigtLWNvbG9yLXByaW1hcnktZGFyayk7XG59XG5cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwsIGJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmh0bWwge1xuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG59XG5cbmFydGljbGUsIGFzaWRlLCBmaWdjYXB0aW9uLCBmaWd1cmUsIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1haW4sIG5hdiwgc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xufVxuXG5bdGFiaW5kZXg9XCItMVwiXTpmb2N1czpub3QoOmZvY3VzLXZpc2libGUpIHtcbiAgb3V0bGluZTogMCAhaW1wb3J0YW50O1xufVxuXG4vKipcbiogVHlwb2dyYXBoeS5cbiAqL1xuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XG4gIG1hcmdpbjogMDtcbn1cblxucCB7XG4gIG1hcmdpbjogMDtcbn1cblxub2wsXG51bCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLyoqXG4qIExpbmtzLlxuICovXG5hIHtcbiAgY29sb3I6IGN1cnJlbnRDb2xvcjtcbn1cblxuW3JvbGU9YnV0dG9uXSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYTpub3QoW2hyZWZdKSB7XG4gIGNvbG9yOiBpbmhlcml0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi8qKlxuKiBJbWFnZXMgYW5kIGNvbnRlbnQuXG4gKi9cbmltZyB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJvcmRlci1zdHlsZTogbm9uZTtcbn1cblxuc3ZnIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLyoqXG4qIEZvcm1zLlxuICovXG5idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuYnV0dG9uLFxuaW5wdXQge1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG59XG5cbmJ1dHRvbixcblt0eXBlPWJ1dHRvbl0sXG5bdHlwZT1yZXNldF0sXG5bdHlwZT1zdWJtaXRdIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG59XG5cbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcblt0eXBlPWJ1dHRvbl06Oi1tb3otZm9jdXMtaW5uZXIsXG5bdHlwZT1yZXNldF06Oi1tb3otZm9jdXMtaW5uZXIsXG5bdHlwZT1zdWJtaXRdOjotbW96LWZvY3VzLWlubmVyIHtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xufVxuXG5pbnB1dFt0eXBlPXJhZGlvXSxcbmlucHV0W3R5cGU9Y2hlY2tib3hdIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMDtcbn1cblxuLypcbiogRm9udC5cbiovXG4vKlxuKiBTY3JlZW5zLlxuKi9cbi8qXG4qIFotaW5kZXguXG4qL1xuLypcbiogU3BhY2VzLlxuKi9cbi8qXG4qIENvbnRyb2xzICh1c2UgZm9yIGlucHV0IHx8IHNlbGVjdG9yIHx8IGJ1dHRvbnMpLlxuKi9cbi8qXG4qIEFuaW1hdGlvbi5cbiovXG4vKlxuKiBCdXR0b25zLlxuKi9cbi8qXG4qIEljb25zLlxuKi9cbi8qXG4qIFNlYXJjaCBJbnB1dC5cbiovXG4vKlxuKiBDaGVja0JveC5cbiovXG4vKlxuKiBEcm9wZG93bi5cbiovXG4vKlxuKiBUYWJsZS5cbiovXG4vKlxuKiBUb29sYmFyLlxuKi9cbi8qXG4qIFBhZ2luYXRpb24uXG4qL1xuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIlByb3hpbWEgUmVnXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1ib2R5LWNvbG9yKTtcbiAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9keS1iZyk7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTIwcHgpIHtcbiAgYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxufVxuXG4uYWItbWFpbiB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTIwcHgpIHtcbiAgLmFiLW1haW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogMTtcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxufVxuXG5zdHJvbmcge1xuICBmb250LWZhbWlseTogXCJQcm94aW1hIEJvbGRcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG5cbi5hYi1pY28ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICAvKlxuICAqIEljb25zIFNpemUuXG4gICovXG4gIC8qXG4gICogSWNvbnMgQ29sb3IuXG4gICovXG59XG4uYWItaWNvX19ncm91cCB7XG4gIG1hcmdpbjogNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmFiLWljb19fZ3JvdXAgLmFiLWljbyB7XG4gIHBhZGRpbmc6IDRweDtcbn1cbi5hYi1pY28tLWxhcmdlIHtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuLmFiLWljby0tcHJpbWFyeSB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbn0iLCI6cm9vdCB7XHJcbiAgLS1jb2xvci1wcmltYXJ5OiAjMzg2NGFmO1xyXG4gIC0tY29sb3ItcHJpbWFyeS1kYXJrOiAjMDU0MmE5O1xyXG5cclxuICAtLWNvbG9yLXdoaXRlOiAjZmZmO1xyXG5cclxuICAtLWNvbG9yLWdyYXktbGlnaHQ6ICNmMmYyZjI7XHJcbiAgLS1jb2xvci1ncmF5OiAjZGVkZWRlO1xyXG4gIC0tY29sb3ItZ3JheS1kYXJrOiAjNzE3MTcxO1xyXG4gIC0tY29sb3ItZ3JheS1kYXJrZXI6ICMyMTIxMjE7XHJcblxyXG4gIC0tY29sb3ItcmVkOiAjZTAzZTUyO1xyXG5cclxuICAtLWJvZHktY29sb3I6IHZhcigtLWNvbG9yLWdyYXktZGFya2VyKTtcclxuICAtLWJvZHktYmc6IHZhcigtLWNvbG9yLXdoaXRlKTtcclxuXHJcbiAgLypcclxuICAqIEJ1dHRvbnMuXHJcbiAgKi9cclxuICAvLyBQcmltYXJ5LlxyXG4gIC0tYnRuLXByaW1hcnktY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcclxuICAtLWJ0bi1wcmltYXJ5LWJvcmRlcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgLS1idG4tcHJpbWFyeS1iZzogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcblxyXG4gIC0tYnRuLXByaW1hcnktY29sb3ItLWFjdGlvbjogdmFyKC0tY29sb3Itd2hpdGUpO1xyXG4gIC0tYnRuLXByaW1hcnktYm9yZGVyLS1hY3Rpb246IHZhcigtLWNvbG9yLXByaW1hcnktZGFyayk7XHJcbiAgLS1idG4tcHJpbWFyeS1iZy0tYWN0aW9uOiB2YXIoLS1jb2xvci1wcmltYXJ5LWRhcmspO1xyXG5cclxuICAvLyBTZWNvbmRhcnkuXHJcbiAgLS1idG4tc2Vjb25kYXJ5LWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICAtLWJ0bi1zZWNvbmRhcnktYm9yZGVyOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICAtLWJ0bi1zZWNvbmRhcnktYmc6IHZhcigtLWNvbG9yLXdoaXRlKTtcclxuXHJcbiAgLS1idG4tc2Vjb25kYXJ5LWNvbG9yLS1hY3Rpb246IHZhcigtLWNvbG9yLXdoaXRlKTtcclxuICAtLWJ0bi1zZWNvbmRhcnktYm9yZGVyLS1hY3Rpb246IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gIC0tYnRuLXNlY29uZGFyeS1iZy0tYWN0aW9uOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuXHJcbiAgLy8gVG9nZ2xlLlxyXG4gIC0tYnRuLXRvZ2dsZS1iZzogdmFyKC0tY29sb3ItZ3JheSk7XHJcblxyXG4gIC8qXHJcbiAgKiBJbnB1dHMuXHJcbiAgKi9cclxuICAtLWlucHV0LWNvbG9yOiB2YXIoLS1ib2R5LWNvbG9yKTtcclxuICAtLWlucHV0LWJvcmRlcjogdmFyKC0tY29sb3ItZ3JheSk7XHJcbiAgLS1pbnB1dC1iZzogdmFyKC0tY29sb3ItZ3JheS1saWdodCk7XHJcbiAgLS1pbnB1dC1ib3JkZXItLWFjdGlvbjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcblxyXG4gIC8qXHJcbiAgKiBDaGVja0JveC5cclxuICAqL1xyXG4gIC0tY2hlY2tib3gtYm9yZGVyOiB2YXIoLS1jb2xvci1ncmF5KTtcclxuICAtLWNoZWNrYm94LWJnOiB2YXIoLS1jb2xvci13aGl0ZSk7XHJcbiAgLS1jaGVja2JveC1jaGVja2VkLWljb246IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG5cclxuICAvKlxyXG4gICogRHJvcGRvd24uXHJcbiAgKi9cclxuICAtLWRyb3Bkb3duLWJvcmRlcjogdmFyKC0tY29sb3ItZ3JheSk7XHJcbiAgLS1kcm9wZG93bi1iZzogdmFyKC0tY29sb3Itd2hpdGUpO1xyXG4gIC0tZHJvcGRvd24tYmctLWFjdGlvbjogdmFyKC0tY29sb3ItZ3JheS1saWdodCk7XHJcblxyXG4gIC8qXHJcbiAgKiBUYWJsZS5cclxuICAqL1xyXG4gIC0tdGFibGUtYmctaGVhZDogdmFyKC0tY29sb3ItZ3JheS1saWdodCk7XHJcbiAgLS10YWJsZS1ib3JkZXI6IHZhcigtLWNvbG9yLWdyYXkpO1xyXG4gIC0tdGFibGUtYmctemVicmE6IHZhcigtLWNvbG9yLWdyYXktbGlnaHQpO1xyXG5cclxuICAvKlxyXG4gICogVG9vbGJhci5cclxuICAqL1xyXG4gIC0tdG9vbGJhci1oZWFkLWJnOiB2YXIoLS1jb2xvci1ncmF5LWxpZ2h0KTtcclxuICAtLXRvb2xiYXItaGVhZC1ib3JkZXI6IHZhcigtLWNvbG9yLWdyYXkpO1xyXG4gIC0tdG9vbGJhci1oZWFkLWJvcmRlci0tYWN0aXZlOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICAtLXRvb2xiYXItYm9yZGVyOiB2YXIoLS1jb2xvci1ncmF5KTtcclxuXHJcbiAgLypcclxuICAqIFBhZ2luYXRpb24uXHJcbiAgKi9cclxuICAtLXBhZ2luYXRpb24taXRlbS1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcblxyXG4gIC0tcGFnaW5hdGlvbi1pdGVtLWJnLS1hY3RpdmU6IHZhcigtLWNvbG9yLWdyYXkpO1xyXG4gIC0tcGFnaW5hdGlvbi1pdGVtLWNvbG9yLS1hY3RpdmU6IHZhcigtLWJvZHktY29sb3IpO1xyXG5cclxuICAtLXBhZ2luYXRpb24taXRlbS1jb2xvci0tZGlzYWJsZWQ6IHZhcigtLWNvbG9yLWdyYXktZGFyayk7XHJcblxyXG4gIC0tcGFnaW5hdGlvbi1zcHJlYWQ6IHZhcigtLWNvbG9yLWdyYXktZGFyayk7XHJcblxyXG4gIC8qXHJcbiAgKiBDdXN0b20gRm9jdXMuXHJcbiAgKi9cclxuICAtLWZvY3VzLWJveC1zaGFkb3c6IHZhcigtLWNvbG9yLXByaW1hcnktZGFyayk7XHJcbn1cclxuIiwiKixcclxuKjo6YmVmb3JlLFxyXG4qOjphZnRlciB7XHJcbiAgLy8gQ2hhbmdlIGZyb20gYGJveC1zaXppbmc6IGNvbnRlbnQtYm94YCBzbyB0aGF0IGB3aWR0aGAgaXMgbm90IGFmZmVjdGVkIGJ5IGBwYWRkaW5nYCBvciBgYm9yZGVyYC5cclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5odG1sLCBib2R5IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmh0bWwge1xyXG4gIC8vIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gSUUgb24gV2luZG93cyBQaG9uZSBhbmQgaW4gaU9TLlxyXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcclxufVxyXG5cclxuYXJ0aWNsZSwgYXNpZGUsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWFpbiwgbmF2LCBzZWN0aW9uIHtcclxuICAvLyBTaGltIGZvciBcIm5ld1wiIEhUTUw1IHN0cnVjdHVyYWwgZWxlbWVudHMgdG8gZGlzcGxheSBjb3JyZWN0bHkgKElFMTAsIG9sZGVyIGJyb3dzZXJzKVxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi8vIEZ1dHVyZS1wcm9vZiBydWxlOiBpbiBicm93c2VycyB0aGF0IHN1cHBvcnQgOmZvY3VzLXZpc2libGUsIHN1cHByZXNzIHRoZSBmb2N1cyBvdXRsaW5lXHJcbi8vIG9uIGVsZW1lbnRzIHRoYXQgcHJvZ3JhbW1hdGljYWxseSByZWNlaXZlIGZvY3VzIGJ1dCB3b3VsZG4ndCBub3JtYWxseSBzaG93IGEgdmlzaWJsZVxyXG4vLyBmb2N1cyBvdXRsaW5lLiBJbiBnZW5lcmFsLCB0aGlzIHdvdWxkIG1lYW4gdGhhdCB0aGUgb3V0bGluZSBpcyBvbmx5IGFwcGxpZWQgaWYgdGhlXHJcbi8vIGludGVyYWN0aW9uIHRoYXQgbGVkIHRvIHRoZSBlbGVtZW50IHJlY2VpdmluZyBwcm9ncmFtbWF0aWMgZm9jdXMgd2FzIGEga2V5Ym9hcmQgaW50ZXJhY3Rpb24sXHJcbi8vIG9yIHRoZSBicm93c2VyIGhhcyBzb21laG93IGRldGVybWluZWQgdGhhdCB0aGUgdXNlciBpcyBwcmltYXJpbHkgYSBrZXlib2FyZCB1c2VyIGFuZC9vclxyXG4vLyB3YW50cyBmb2N1cyBvdXRsaW5lcyB0byBhbHdheXMgYmUgcHJlc2VudGVkLlxyXG4vL1xyXG4vLyBTZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTLzpmb2N1cy12aXNpYmxlXHJcbi8vIGFuZCBodHRwczovL2RldmVsb3Blci5wYWNpZWxsb2dyb3VwLmNvbS9ibG9nLzIwMTgvMDMvZm9jdXMtdmlzaWJsZS1hbmQtYmFja3dhcmRzLWNvbXBhdGliaWxpdHkvXHJcblt0YWJpbmRleD1cIi0xXCJdOmZvY3VzOm5vdCg6Zm9jdXMtdmlzaWJsZSkge1xyXG4gIG91dGxpbmU6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyoqXHJcbiogVHlwb2dyYXBoeS5cclxuICovXHJcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxucCB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5vbCxcclxudWwge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi8qKlxyXG4qIExpbmtzLlxyXG4gKi9cclxuYSB7XHJcbiAgY29sb3I6IGN1cnJlbnRDb2xvcjtcclxufVxyXG5cclxuW3JvbGU9XCJidXR0b25cIl0ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLy8gQW5kIHVuZG8gdGhlc2Ugc3R5bGVzIGZvciBwbGFjZWhvbGRlciBsaW5rcy9uYW1lZCBhbmNob3JzICh3aXRob3V0IGhyZWYpLlxyXG4vLyBJdCB3b3VsZCBiZSBtb3JlIHN0cmFpZ2h0Zm9yd2FyZCB0byBqdXN0IHVzZSBhW2hyZWZdIGluIHByZXZpb3VzIGJsb2NrLCBidXQgdGhhdFxyXG4vLyBjYXVzZXMgc3BlY2lmaWNpdHkgaXNzdWVzIGluIG1hbnkgb3RoZXIgc3R5bGVzIHRoYXQgYXJlIHRvbyBjb21wbGV4IHRvIGZpeC5cclxuLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9pc3N1ZXMvMTk0MDJcclxuYTpub3QoW2hyZWZdKSB7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiogSW1hZ2VzIGFuZCBjb250ZW50LlxyXG4gKi9cclxuaW1nIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGJvcmRlci1zdHlsZTogbm9uZTsgLy8gUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC0uXHJcbn1cclxuXHJcbnN2ZyB7XHJcbiAgLy8gV29ya2Fyb3VuZCBmb3IgdGhlIFNWRyBvdmVyZmxvdyBidWcgaW4gSUUxMC8xMSBpcyBzdGlsbCByZXF1aXJlZC5cclxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8yNjg3OFxyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4vKipcclxuKiBGb3Jtcy5cclxuICovXHJcbi8vIFJlbW92ZSB0aGUgZGVmYXVsdCBgYm9yZGVyLXJhZGl1c2AgdGhhdCBtYWNPUyBDaHJvbWUgYWRkcy5cclxuLy9cclxuLy8gRGV0YWlscyBhdCBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvaXNzdWVzLzI0MDkzXHJcbmJ1dHRvbiB7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTsgLy8gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94XHJcbn1cclxuXHJcbmJ1dHRvbixcclxuaW5wdXQge1xyXG4gIG92ZXJmbG93OiB2aXNpYmxlOyAvLyBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlXHJcbiAgbWFyZ2luOiAwOyAvLyBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmlcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxufVxyXG5cclxuLy8gMS4gUHJldmVudCBhIFdlYktpdCBidWcgd2hlcmUgKDIpIGRlc3Ryb3lzIG5hdGl2ZSBgYXVkaW9gIGFuZCBgdmlkZW9gIGNvbnRyb2xzIGluIEFuZHJvaWQgNC5cclxuLy8gMi4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cclxuYnV0dG9uLFxyXG5bdHlwZT1cImJ1dHRvblwiXSwgLy8gMVxyXG5bdHlwZT1cInJlc2V0XCJdLFxyXG5bdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8vIDJcclxufVxyXG5cclxuLy8gUmVtb3ZlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBmcm9tIEZpcmVmb3gsIGJ1dCBkb24ndCByZXN0b3JlIHRoZSBvdXRsaW5lIGxpa2UgTm9ybWFsaXplLlxyXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXHJcblt0eXBlPVwiYnV0dG9uXCJdOjotbW96LWZvY3VzLWlubmVyLFxyXG5bdHlwZT1cInJlc2V0XCJdOjotbW96LWZvY3VzLWlubmVyLFxyXG5bdHlwZT1cInN1Ym1pdFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXSxcclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvLyBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC1cclxuICBwYWRkaW5nOiAwOyAvLyBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAtXHJcbn1cclxuXHJcbiIsIi8qXHJcbiogRm9udC5cclxuKi9cclxuJGZvbnQtZmFtaWx5LWJvbGQ6ICdQcm94aW1hIEJvbGQnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuJGZvbnQtZmFtaWx5LXJlZ3VsYXI6ICdQcm94aW1hIFJlZycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG5cclxuJGJvZHktZm9udC1zaXplOiAxNHB4O1xyXG4kYm9keS1mb250LWZhbWlseTogJGZvbnQtZmFtaWx5LXJlZ3VsYXI7XHJcblxyXG4vKlxyXG4qIFNjcmVlbnMuXHJcbiovXHJcbiRzY3JlZW4tc3g6IDUyMHB4O1xyXG5cclxuLypcclxuKiBaLWluZGV4LlxyXG4qL1xyXG4kei1pbmRleC1kcm9wZG93bjogMjtcclxuXHJcbi8qXHJcbiogU3BhY2VzLlxyXG4qL1xyXG4kc3BhY2UtYmFzZTogMTZweDtcclxuJHNwYWNlLWJhc2UtZG91YmxlOiAkc3BhY2UtYmFzZSoyO1xyXG4kc3BhY2UtYmFzZS1oYWxmOiAkc3BhY2UtYmFzZS8yO1xyXG4kc3BhY2Utc21hbGw6ICRzcGFjZS1iYXNlLzQ7XHJcblxyXG4vKlxyXG4qIENvbnRyb2xzICh1c2UgZm9yIGlucHV0IHx8IHNlbGVjdG9yIHx8IGJ1dHRvbnMpLlxyXG4qL1xyXG4kY29udHJvbC1oZWlnaHQ6IDQwcHg7XHJcbiRjb250cm9sLXJhZGl1czogJGNvbnRyb2wtaGVpZ2h0LzI7XHJcbiRjb250cm9sLXNwYWNlczogJHNwYWNlLXNtYWxsICRzcGFjZS1iYXNlO1xyXG5cclxuLypcclxuKiBBbmltYXRpb24uXHJcbiovXHJcbiR0cmFuc2l0aW9uLWJhc2U6IDI3MG1zIGVhc2UtaW4tb3V0O1xyXG5cclxuLypcclxuKiBCdXR0b25zLlxyXG4qL1xyXG4kYnRuLWhlaWdodDogJGNvbnRyb2wtaGVpZ2h0IC0gMTBweDtcclxuJGJ0bi13aWR0aDogMTUwcHg7XHJcbiRidG4tc3BhY2VzOiAkY29udHJvbC1zcGFjZXM7XHJcbiRidG4tcmFkaXVzOiAkYnRuLWhlaWdodCAvIDI7XHJcbiRidG4tZm9udDogJGZvbnQtZmFtaWx5LWJvbGQ7XHJcbiRidG4taWNvbi1zcGFjZTogJHNwYWNlLXNtYWxsO1xyXG5cclxuLy8gVG9nZ2xlLlxyXG4kYnRuLXRvZ2dsZS1zaXplOiAyNHB4O1xyXG4kYnRuLXRvZ2dsZS1yYWRpdXM6IDUwJTtcclxuXHJcbi8qXHJcbiogSWNvbnMuXHJcbiovXHJcbiRpY28tc2l6ZS1iYXNlOiAxNHB4O1xyXG4kaWNvLXNpemUtbGFyZ2U6IDI0cHg7XHJcblxyXG4vKlxyXG4qIFNlYXJjaCBJbnB1dC5cclxuKi9cclxuJHNlYXJjaC1oZWlnaHQ6ICRjb250cm9sLWhlaWdodDtcclxuJHNlYXJjaC1zcGFjZXM6ICRjb250cm9sLXNwYWNlcztcclxuJHNlYXJjaC13aWR0aDogMzAwcHg7XHJcbiRzZWFyY2gtaWNvbi1zcGFjZXM6ICRzcGFjZS1iYXNlO1xyXG5cclxuLypcclxuKiBDaGVja0JveC5cclxuKi9cclxuJGNoZWNrYm94LXNpemU6IDI0cHg7XHJcblxyXG4vKlxyXG4qIERyb3Bkb3duLlxyXG4qL1xyXG4kZHJvcGRvd24tcmFkaXVzOiA0cHg7XHJcbiRkcm9wZG93bi13aWR0aDogMTUwcHg7XHJcbiRkcm9wZG93bi1oZWlnaHQ6ICRjb250cm9sLWhlaWdodDtcclxuJGRyb3Bkb3duLWJ0bi1zcGFjZXM6ICRjb250cm9sLXNwYWNlcztcclxuJGRyb3Bkb3duLW1lbnUtaXRlbS1zcGFjZXM6ICRzcGFjZS1iYXNlO1xyXG5cclxuLypcclxuKiBUYWJsZS5cclxuKi9cclxuJHRhYmxlLWNvbC1zcGFjZXM6ICRzcGFjZS1iYXNlO1xyXG4kdGFibGUtY29sLXdpZHRoOiAxMjBweDtcclxuJHRhYmxlLWNvbC1zcGFjZXMtc206ICRzcGFjZS1zbWFsbDtcclxuJHRhYmxlLXRvb2xiYXItc3BhY2U6ICRzcGFjZS1iYXNlO1xyXG5cclxuLy8gRml4IC0gSWYgdGJvZHkgaGFzIHNjcm9sbC5cclxuJHRhYmxlLWhlYWQtc3BhY2U6IDE3cHg7XHJcblxyXG4vKlxyXG4qIFRvb2xiYXIuXHJcbiovXHJcbiR0b29sYmFyLXNwYWNlczogJHNwYWNlLWJhc2U7XHJcbiR0b29sYmFyLWhlYWQtd2lkdGg6IDMwMHB4O1xyXG4kdG9vbGJhci1oZWFkLWJvcmRlcjogM3B4O1xyXG5cclxuLypcclxuKiBQYWdpbmF0aW9uLlxyXG4qL1xyXG4kcGFnaW5hdGlvbi1pdGVtLXNpemU6IDI0cHg7XHJcbiRwYWdpbmF0aW9uLWl0ZW0tcmFkaXVzOiA1MCU7XHJcblxyXG4kcGFnaW5hdGlvbi1pdGVtLWJvcmRlcjogMnB4O1xyXG4kcGFnaW5hdGlvbi1pdGVtLXNwYWNlczogJHNwYWNlLXNtYWxsO1xyXG5cclxuJHBhZ2luYXRpb24tc3ByZWFkLXNpemU6IDIwcHg7XHJcbiRwYWdpbmF0aW9uLXNwcmVhZC1zcGFjZXM6IDAgJHNwYWNlLWJhc2UtaGFsZjtcclxuIiwiQGltcG9ydCBcIn5zcmMvc3R5bGVzL2NvcmUvdmFyaWFibGVzL3ZhcmlhYmxlc1wiO1xyXG5AaW1wb3J0IFwifnNyYy9zdHlsZXMvY29yZS9taXhpbnMvbWl4aW4tZm9jdXMtdmFyaWFudFwiO1xyXG5cclxuYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6ICRib2R5LWZvbnQtZmFtaWx5O1xyXG4gIGZvbnQtc2l6ZTogJGJvZHktZm9udC1zaXplO1xyXG4gIGNvbG9yOiB2YXIoLS1ib2R5LWNvbG9yKTtcclxuICBsaW5lLWhlaWdodDogMS4xO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktYmcpO1xyXG5cclxuICAvLyBTdHJldGNoIGNvbnRhaW5lciBmdWxsIHNjcmVlbi5cclxuICAvLyBGb3IgRGVza3RvcCAmIFRhYmxldC5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1zeCkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbn1cclxuXHJcbi5hYi1tYWluIHtcclxuICBwYWRkaW5nOiAkc3BhY2UtYmFzZTtcclxuXHJcbiAgLy8gU3RyZXRjaCBjb250YWluZXIgZnVsbCBzY3JlZW4uXHJcbiAgLy8gRm9yIERlc2t0b3AgJiBUYWJsZXQuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRzY3JlZW4tc3gpIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4OiAxO1xyXG5cclxuICAgIC8vIFRPRE86IG9ubHkgZm9yIERFTU8uXHJcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxufVxyXG5cclxuc3Ryb25nIHtcclxuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LWJvbGQ7XHJcbn1cclxuIiwiLmFiLWljbyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY29sb3I6IGN1cnJlbnRDb2xvcjtcclxuICBmb250LXNpemU6ICRpY28tc2l6ZS1iYXNlO1xyXG5cclxuICAmX19ncm91cCB7XHJcbiAgICBtYXJnaW46ICRzcGFjZS1zbWFsbDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgLmFiLWljbyB7XHJcbiAgICAgIHBhZGRpbmc6ICRzcGFjZS1zbWFsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qXHJcbiAgKiBJY29ucyBTaXplLlxyXG4gICovXHJcbiAgJi0tbGFyZ2Uge1xyXG4gICAgZm9udC1zaXplOiAkaWNvLXNpemUtbGFyZ2U7XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICogSWNvbnMgQ29sb3IuXHJcbiAgKi9cclxuICAmLS1wcmltYXJ5IHtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICB9XHJcbn1cclxuIl19 */", '', '']]

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
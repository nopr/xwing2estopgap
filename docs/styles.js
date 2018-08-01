(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/* ---------- Reset */\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend, input, textarea, button,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\n* {\n  box-sizing: border-box; }\n/* ---------- Lists */\nol, ul, li {\n  list-style: none; }\nstrong {\n  font-weight: bold; }\n/* ---------- HTML */\nhtml {\n  font-family: \"Noto Sans\", sans-serif;\n  color: #1D1D1D; }\n.container {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0 12px; }\n[hidden] {\n  display: none; }\n/* ---------- Icons */\n/*\r\n * Icons\r\n */\n@font-face {\n  font-family: XWing;\n  src: url(\"/xwing2estopgap/assets/fonts/xwing-miniatures.ttf\"); }\ni.xwing-miniatures-font {\n  font-family: XWing;\n  font-style: normal;\n  font-size: 1.5em;\n  vertical-align: middle; }\ni.xwing-miniatures-font-agility:before {\n  content: \"^\"; }\ni.xwing-miniatures-font-astromech:before {\n  content: \"A\"; }\ni.xwing-miniatures-font-attack:before {\n  content: \"%\"; }\ni.xwing-miniatures-font-bankleft:before {\n  content: \"7\"; }\ni.xwing-miniatures-font-bankright:before {\n  content: \"9\"; }\ni.xwing-miniatures-font-barrelroll:before {\n  content: \"r\"; }\ni.xwing-miniatures-font-boost:before {\n  content: \"b\"; }\ni.xwing-miniatures-font-bullseyearc:before {\n  content: \"}\"; }\ni.xwing-miniatures-font-calculate:before {\n  content: \"a\"; }\ni.xwing-miniatures-font-cannon:before {\n  content: \"C\"; }\ni.xwing-miniatures-font-cargo:before {\n  content: \"G\"; }\ni.xwing-miniatures-font-charge:before {\n  content: \"g\"; }\ni.xwing-miniatures-font-cloak:before {\n  content: \"k\"; }\ni.xwing-miniatures-font-condition-outline:before {\n  content: \"Æ\"; }\ni.xwing-miniatures-font-condition:before {\n  content: \"°\"; }\ni.xwing-miniatures-font-config:before {\n  content: \"n\"; }\ni.xwing-miniatures-font-coordinate:before {\n  content: \"o\"; }\ni.xwing-miniatures-font-crew:before {\n  content: \"W\"; }\ni.xwing-miniatures-font-crit:before {\n  content: \"c\"; }\ni.xwing-miniatures-font-dalan-bankleft:before {\n  content: \"[\"; }\ni.xwing-miniatures-font-dalan-bankright:before {\n  content: \"]\"; }\ni.xwing-miniatures-font-device:before {\n  content: \"B\"; }\ni.xwing-miniatures-font-doubleturretarc:before {\n  content: \"q\"; }\ni.xwing-miniatures-font-empire:before {\n  content: \"@\"; }\ni.xwing-miniatures-font-energy:before {\n  content: \"(\"; }\ni.xwing-miniatures-font-epic:before {\n  content: \")\"; }\ni.xwing-miniatures-font-evade:before {\n  content: \"e\"; }\ni.xwing-miniatures-font-firstorder:before {\n  content: \"+\"; }\ni.xwing-miniatures-font-focus:before {\n  content: \"f\"; }\ni.xwing-miniatures-font-forcecharge:before {\n  content: \"h\"; }\ni.xwing-miniatures-font-forcepower:before {\n  content: \"F\"; }\ni.xwing-miniatures-font-frontarc:before {\n  content: \"{\"; }\ni.xwing-miniatures-font-fullfrontarc:before {\n  content: \"~\"; }\ni.xwing-miniatures-font-fullreararc:before {\n  content: \"¡\"; }\ni.xwing-miniatures-font-gunner:before {\n  content: \"Y\"; }\ni.xwing-miniatures-font-hardpoint:before {\n  content: \"H\"; }\ni.xwing-miniatures-font-helmet-imperial:before {\n  content: \"y\"; }\ni.xwing-miniatures-font-helmet-rebel:before {\n  content: \"x\"; }\ni.xwing-miniatures-font-helmet-scum:before {\n  content: \"z\"; }\ni.xwing-miniatures-font-hit:before {\n  content: \"d\"; }\ni.xwing-miniatures-font-hull:before {\n  content: \"&\"; }\ni.xwing-miniatures-font-ig88d-sloopleft:before {\n  content: '\"'; }\ni.xwing-miniatures-font-ig88d-sloopright:before {\n  content: \"'\"; }\ni.xwing-miniatures-font-illicit:before {\n  content: \"I\"; }\ni.xwing-miniatures-font-jam:before {\n  content: \"j\"; }\ni.xwing-miniatures-font-kturn:before {\n  content: \"2\"; }\ni.xwing-miniatures-font-leftarc:before {\n  content: \"£\"; }\ni.xwing-miniatures-font-linked:before {\n  content: \">\"; }\ni.xwing-miniatures-font-missile:before {\n  content: \"M\"; }\ni.xwing-miniatures-font-modification:before {\n  content: \"m\"; }\ni.xwing-miniatures-font-obstacle-core2asteroid0-outline:before {\n  content: \"ĉ\"; }\ni.xwing-miniatures-font-obstacle-core2asteroid0:before {\n  content: \"ĥ\"; }\ni.xwing-miniatures-font-obstacle-core2asteroid1-outline:before {\n  content: \"Č\"; }\ni.xwing-miniatures-font-obstacle-core2asteroid1:before {\n  content: \"Ĩ\"; }\ni.xwing-miniatures-font-obstacle-core2asteroid2-outline:before {\n  content: \"Ċ\"; }\ni.xwing-miniatures-font-obstacle-core2asteroid2:before {\n  content: \"Ħ\"; }\ni.xwing-miniatures-font-obstacle-core2asteroid3-outline:before {\n  content: \"ċ\"; }\ni.xwing-miniatures-font-obstacle-core2asteroid3:before {\n  content: \"ħ\"; }\ni.xwing-miniatures-font-obstacle-core2asteroid4-outline:before {\n  content: \"č\"; }\ni.xwing-miniatures-font-obstacle-core2asteroid4:before {\n  content: \"ĩ\"; }\ni.xwing-miniatures-font-obstacle-core2asteroid5-outline:before {\n  content: \"Ď\"; }\ni.xwing-miniatures-font-obstacle-core2asteroid5:before {\n  content: \"Ī\"; }\ni.xwing-miniatures-font-obstacle-coreasteroid0-outline:before {\n  content: \"Ă\"; }\ni.xwing-miniatures-font-obstacle-coreasteroid0:before {\n  content: \"Ğ\"; }\ni.xwing-miniatures-font-obstacle-coreasteroid1-outline:before {\n  content: \"ă\"; }\ni.xwing-miniatures-font-obstacle-coreasteroid1:before {\n  content: \"ğ\"; }\ni.xwing-miniatures-font-obstacle-coreasteroid2-outline:before {\n  content: \"ā\"; }\ni.xwing-miniatures-font-obstacle-coreasteroid2:before {\n  content: \"ĝ\"; }\ni.xwing-miniatures-font-obstacle-coreasteroid3-outline:before {\n  content: \"ą\"; }\ni.xwing-miniatures-font-obstacle-coreasteroid3:before {\n  content: \"ġ\"; }\ni.xwing-miniatures-font-obstacle-coreasteroid4-outline:before {\n  content: \"Ą\"; }\ni.xwing-miniatures-font-obstacle-coreasteroid4:before {\n  content: \"Ġ\"; }\ni.xwing-miniatures-font-obstacle-coreasteroid5-outline:before {\n  content: \"Ā\"; }\ni.xwing-miniatures-font-obstacle-coreasteroid5:before {\n  content: \"Ĝ\"; }\ni.xwing-miniatures-font-obstacle-vt49decimatordebris0-outline:before {\n  content: \"Đ\"; }\ni.xwing-miniatures-font-obstacle-vt49decimatordebris0:before {\n  content: \"Ĭ\"; }\ni.xwing-miniatures-font-obstacle-vt49decimatordebris1-outline:before {\n  content: \"đ\"; }\ni.xwing-miniatures-font-obstacle-vt49decimatordebris1:before {\n  content: \"ĭ\"; }\ni.xwing-miniatures-font-obstacle-vt49decimatordebris2-outline:before {\n  content: \"ć\"; }\ni.xwing-miniatures-font-obstacle-vt49decimatordebris2:before {\n  content: \"ģ\"; }\ni.xwing-miniatures-font-obstacle-yt2400debris0-outline:before {\n  content: \"ď\"; }\ni.xwing-miniatures-font-obstacle-yt2400debris0:before {\n  content: \"ī\"; }\ni.xwing-miniatures-font-obstacle-yt2400debris1-outline:before {\n  content: \"Ĉ\"; }\ni.xwing-miniatures-font-obstacle-yt2400debris1:before {\n  content: \"Ĥ\"; }\ni.xwing-miniatures-font-obstacle-yt2400debris2-outline:before {\n  content: \"Ć\"; }\ni.xwing-miniatures-font-obstacle-yt2400debris2:before {\n  content: \"Ģ\"; }\ni.xwing-miniatures-font-rangebonusindicator:before {\n  content: \"?\"; }\ni.xwing-miniatures-font-reararc:before {\n  content: \"|\"; }\ni.xwing-miniatures-font-rebel-outline:before {\n  content: \"-\"; }\ni.xwing-miniatures-font-rebel:before {\n  content: \"!\"; }\ni.xwing-miniatures-font-recover:before {\n  content: \"v\"; }\ni.xwing-miniatures-font-recurring:before {\n  content: \"`\"; }\ni.xwing-miniatures-font-reinforce:before {\n  content: \"i\"; }\ni.xwing-miniatures-font-reload:before {\n  content: \"=\"; }\ni.xwing-miniatures-font-reversebankleft:before {\n  content: \"J\"; }\ni.xwing-miniatures-font-reversebankright:before {\n  content: \"L\"; }\ni.xwing-miniatures-font-reversestraight:before {\n  content: \"K\"; }\ni.xwing-miniatures-font-rightarc:before {\n  content: \"¢\"; }\ni.xwing-miniatures-font-rotatearc:before {\n  content: \"R\"; }\ni.xwing-miniatures-font-scum:before {\n  content: \"#\"; }\ni.xwing-miniatures-font-shield:before {\n  content: \"*\"; }\ni.xwing-miniatures-font-singleturretarc:before {\n  content: \"p\"; }\ni.xwing-miniatures-font-slam:before {\n  content: \"s\"; }\ni.xwing-miniatures-font-sloopleft:before {\n  content: \"1\"; }\ni.xwing-miniatures-font-sloopright:before {\n  content: \"3\"; }\ni.xwing-miniatures-font-squad-point-cost:before {\n  content: \"0\"; }\ni.xwing-miniatures-font-stop:before {\n  content: \"5\"; }\ni.xwing-miniatures-font-straight:before {\n  content: \"8\"; }\ni.xwing-miniatures-font-system:before {\n  content: \"S\"; }\ni.xwing-miniatures-font-talent:before {\n  content: \"E\"; }\ni.xwing-miniatures-font-targetlock:before {\n  content: \"l\"; }\ni.xwing-miniatures-font-team:before {\n  content: \"T\"; }\ni.xwing-miniatures-font-tech:before {\n  content: \"X\"; }\ni.xwing-miniatures-font-title:before {\n  content: \"t\"; }\ni.xwing-miniatures-font-token-cannotattack-outline:before {\n  content: \"í\"; }\ni.xwing-miniatures-font-token-cannotattack:before {\n  content: \"Ö\"; }\ni.xwing-miniatures-font-token-crit-outline:before {\n  content: \"è\"; }\ni.xwing-miniatures-font-token-crit:before {\n  content: \"Ç\"; }\ni.xwing-miniatures-font-token-evade-outline:before {\n  content: \"é\"; }\ni.xwing-miniatures-font-token-evade:before {\n  content: \"Å\"; }\ni.xwing-miniatures-font-token-focus-outline:before {\n  content: \"ç\"; }\ni.xwing-miniatures-font-token-focus:before {\n  content: \"Ä\"; }\ni.xwing-miniatures-font-torpedo:before {\n  content: \"P\"; }\ni.xwing-miniatures-font-trollleft:before {\n  content: \":\"; }\ni.xwing-miniatures-font-trollright:before {\n  content: \";\"; }\ni.xwing-miniatures-font-turnleft:before {\n  content: \"4\"; }\ni.xwing-miniatures-font-turnright:before {\n  content: \"6\"; }\ni.xwing-miniatures-font-turret:before {\n  content: \"U\"; }\ni.xwing-miniatures-font-unique-outline:before {\n  content: \"•\"; }\ni.xwing-miniatures-font-unique:before {\n  content: \"u\"; }\n/*\r\n * Ships\r\n */\n@font-face {\n  font-family: XWingShip;\n  src: url(\"/xwing2estopgap/assets/fonts/xwing-miniatures-ships.ttf\"); }\ni.xwing-miniatures-ship {\n  font-family: XWingShip;\n  font-style: normal;\n  font-size: 1.5em; }\ni.xwing-miniatures-ship-aggressor:before {\n  content: \"i\"; }\ni.xwing-miniatures-ship-alphaclassstarwing:before {\n  content: \"&\"; }\ni.xwing-miniatures-ship-arc170:before {\n  content: \"c\"; }\ni.xwing-miniatures-ship-attackshuttle:before {\n  content: \"g\"; }\ni.xwing-miniatures-ship-auzituckgunship:before {\n  content: \"@\"; }\ni.xwing-miniatures-ship-awing:before {\n  content: \"a\"; }\ni.xwing-miniatures-ship-bwing:before {\n  content: \"b\"; }\ni.xwing-miniatures-ship-bsf17bomber:before {\n  content: \"Z\"; }\ni.xwing-miniatures-ship-cr90corvette:before {\n  content: \"2\"; }\ni.xwing-miniatures-ship-croccruiser:before {\n  content: \"5\"; }\ni.xwing-miniatures-ship-ewing:before {\n  content: \"e\"; }\ni.xwing-miniatures-ship-firespray31:before {\n  content: \"f\"; }\ni.xwing-miniatures-ship-g1astarfighter:before {\n  content: \"n\"; }\ni.xwing-miniatures-ship-gozanticlasscruiser:before {\n  content: \"4\"; }\ni.xwing-miniatures-ship-gr75mediumtransport:before {\n  content: \"1\"; }\ni.xwing-miniatures-ship-hwk290:before {\n  content: \"h\"; }\ni.xwing-miniatures-ship-ig2000:before {\n  content: \"i\"; }\ni.xwing-miniatures-ship-jumpmaster5000:before {\n  content: \"p\"; }\ni.xwing-miniatures-ship-kihraxzfighter:before {\n  content: \"r\"; }\ni.xwing-miniatures-ship-kwing:before {\n  content: \"k\"; }\ni.xwing-miniatures-ship-m12lkimogilafighter:before {\n  content: \"K\"; }\ni.xwing-miniatures-ship-lambdaclassshuttle:before {\n  content: \"l\"; }\ni.xwing-miniatures-ship-lancerclasspursuitcraft:before {\n  content: \"L\"; }\ni.xwing-miniatures-ship-m3ainterceptor:before {\n  content: \"s\"; }\ni.xwing-miniatures-ship-protectoratestarfighter:before {\n  content: \"M\"; }\ni.xwing-miniatures-ship-quadjumper:before {\n  content: \"q\"; }\ni.xwing-miniatures-ship-raiderclasscorvette:before {\n  content: \"3\"; }\ni.xwing-miniatures-ship-scurrgh6bomber:before {\n  content: \"H\"; }\ni.xwing-miniatures-ship-sheathipedeclassshuttle:before {\n  content: \"%\"; }\ni.xwing-miniatures-ship-starviper:before {\n  content: \"v\"; }\ni.xwing-miniatures-ship-t70xwing:before {\n  content: \"w\"; }\ni.xwing-miniatures-ship-tieadvanced:before {\n  content: \"A\"; }\ni.xwing-miniatures-ship-tieadvancedprototype:before {\n  content: \"R\"; }\ni.xwing-miniatures-ship-tieadvprototype:before {\n  content: \"R\"; }\ni.xwing-miniatures-ship-tieaggressor:before {\n  content: \"`\"; }\ni.xwing-miniatures-ship-tiebomber:before {\n  content: \"B\"; }\ni.xwing-miniatures-ship-tiedefender:before {\n  content: \"D\"; }\ni.xwing-miniatures-ship-tiefighter:before {\n  content: \"F\"; }\ni.xwing-miniatures-ship-tiefofighter:before {\n  content: \"O\"; }\ni.xwing-miniatures-ship-tieinterceptor:before {\n  content: \"I\"; }\ni.xwing-miniatures-ship-tiephantom:before {\n  content: \"P\"; }\ni.xwing-miniatures-ship-tiepunisher:before {\n  content: \"N\"; }\ni.xwing-miniatures-ship-tiereaper:before {\n  content: \"V\"; }\ni.xwing-miniatures-ship-tiesffighter:before {\n  content: \"S\"; }\ni.xwing-miniatures-ship-tiesilencer:before {\n  content: \"$\"; }\ni.xwing-miniatures-ship-tiestriker:before {\n  content: \"T\"; }\ni.xwing-miniatures-ship-upsilonclassshuttle:before {\n  content: \"U\"; }\ni.xwing-miniatures-ship-uwing:before {\n  content: \"u\"; }\ni.xwing-miniatures-ship-vcx100:before {\n  content: \"G\"; }\ni.xwing-miniatures-ship-vt49decimator:before {\n  content: \"d\"; }\ni.xwing-miniatures-ship-xwing:before {\n  content: \"x\"; }\ni.xwing-miniatures-ship-yt1300:before {\n  content: \"m\"; }\ni.xwing-miniatures-ship-yt2400:before {\n  content: \"o\"; }\ni.xwing-miniatures-ship-yt2400freighter:before {\n  content: \"o\"; }\ni.xwing-miniatures-ship-yv666:before {\n  content: \"t\"; }\ni.xwing-miniatures-ship-ywing:before {\n  content: \"y\"; }\ni.xwing-miniatures-ship-z95headhunter:before {\n  content: \"z\"; }\n/* ---------- Global Components */\n/*\r\n\r\nButtons\r\n\r\n*/\n/* ---------- Component */\nbutton {\n  position: relative; }\nbutton:focus {\n    z-index: 10; }\n.button {\n  cursor: pointer;\n  font-family: inherit;\n  font-weight: bold;\n  height: 48px;\n  border: 1px solid #CCCCCC;\n  background-color: white;\n  line-height: 46px;\n  padding: 0 12px;\n  white-space: pre; }\n.button:hover {\n    background-color: rgba(0, 0, 0, 0.1); }\n.button.is-active {\n    background-color: rgba(0, 0, 0, 0.1); }\n.button, .button:hover, .button.is-active {\n    transition: background 0.15s; }\n/* ---------- Modifiers */\n.button--danger {\n  background-color: #FF5050;\n  border-color: #AA3232;\n  color: white; }\n.button--danger:hover {\n    background-color: #AA3232; }\n/*\r\n\r\nForms\r\n\r\n*/\n/* ---------- Component: Input */\ninput[type=\"text\"] {\n  height: 48px;\n  line-height: 48px;\n  padding: 0 12px;\n  width: 100%;\n  border: 1px solid #CCCCCC;\n  font-size: 16px; }\ninput[type=\"text\"]:hover {\n    border-color: #AAAAAA; }\ninput[type=\"text\"], input[type=\"text\"]:hover {\n    transition: border 0.15s; }\n/* ---------- Component: Select */\nselect {\n  width: 100%;\n  height: 48px;\n  line-height: 48px;\n  background-color: transparent;\n  font-family: inherit;\n  font-size: 16px;\n  padding: 0 48px 0 12px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  border-radius: 0;\n  border: 1px solid #CCCCCC;\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzlweCIgaGVpZ2h0PSIyNnB4IiB2aWV3Qm94PSIwIDAgMzkgMjYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ0LjEgKDQxNDU1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Hcm91cDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUuMDAwMDAwLCAtMTEuMDAwMDAwKSI+CiAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIHg9IjAiIHk9IjAiIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCI+PC9yZWN0PgogICAgICAgICAgICA8cGF0aCBkPSJNMzYuOTMxNzA3MSwxMSBMNDMuNjIxMTM4MSwxNy42ODk0MzEgTDI0LjMxMDU2OSwzNyBMNSwxNy42ODk0MzEgTDExLjY4OTQzMSwxMSBMMjQuMzEwNTY5LDIzLjYyMTEzODEgTDM2LjkzMTcwNzEsMTEgWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIiBmaWxsPSIjMUQxRDFEIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=);\n  background-repeat: no-repeat;\n  background-size: 16px 16px;\n  background-position: right 16px top 16px; }\nselect:hover {\n    border-color: #AAAAAA; }\nselect, select:hover {\n    transition: border 0.15s; }\nselect.ng-pristine {\n    color: #AAAAAA; }\n"

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/raw-loader!../node_modules/postcss-loader/lib??embedded!../node_modules/sass-loader/lib/loader.js??ref--14-3!./styles.scss */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\code\xwing\src\styles.scss */"./src/styles.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{279:function(module,exports,__webpack_require__){__webpack_require__(280),__webpack_require__(423),module.exports=__webpack_require__(424)},341:function(module,exports){},424:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(278);__webpack_require__(606);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(__webpack_require__(607),module)}.call(this,__webpack_require__(425)(module))},606:function(module,exports,__webpack_require__){},607:function(module,exports,__webpack_require__){var map={"./Card.stories.js":634};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=607},632:function(module,exports,__webpack_require__){},634:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(4),react_default=__webpack_require__.n(react),addon_knobs_react=(__webpack_require__(608),__webpack_require__(14));__webpack_require__(632);function Card_Card(card){function Display_or_not(input){return input?"":" off"}var bar_percentage=card.metrics.bar_percentage;return react_default.a.createElement("div",{className:"wrap_div"},react_default.a.createElement("div",{className:"card-holder"},react_default.a.createElement("div",{className:"molecule"+Display_or_not(card.metrics.bar_status),id:"indicator"},react_default.a.createElement("div",{className:"indicator bg"}),react_default.a.createElement("div",{className:"indicator-cover",id:"ibar",style:{width:bar_percentage+"%","background-color":function Indicator_color(percentage){return percentage<=40?"#228630":percentage<=55?"#FB8839":percentage<=85?"#E2532F":"#D82225"}(bar_percentage)}}," ")),react_default.a.createElement("div",{className:"molecule",id:"head"},react_default.a.createElement("div",{className:"text-holder horizontal"},react_default.a.createElement("div",{className:"text headline"+function header_margin(input){return input?" left":""}(card.metrics.status),id:"title"},card.header.text),react_default.a.createElement("div",{className:"text metric"+Display_or_not(card.metrics.status),id:"metric_v"},card.metrics.value)),react_default.a.createElement("div",{className:"text secondary head"+Display_or_not(card.subheader.status),id:"2head"},card.subheader.text)),react_default.a.createElement("div",{className:"molecule",id:"textbody"},react_default.a.createElement("div",{className:"text body"+Display_or_not(card.body.status)},card.body.text)),react_default.a.createElement("div",{className:"molecule",id:"footer"},react_default.a.createElement("div",{className:"text secondary"+Display_or_not(card.footer.status)},card.footer.text)),react_default.a.createElement("div",{classNamfe:"molecule horizontal",id:"actions"},react_default.a.createElement("div",{className:"t-button"+function button1_status(input){return"None"===input?" off":""}(card.actions.status)},card.actions.text1),react_default.a.createElement("div",{className:"t-button"+function button2_status(input){return"2"===input?"":" off"}(card.actions.status),id:"actions2"},card.actions.text2))))}Card_Card.__docgenInfo={description:"",methods:[],displayName:"Card"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Card.js"]={name:"Card",docgenInfo:Card_Card.__docgenInfo,path:"src/components/Card.js"}),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Card_stories_Default}));__webpack_exports__.default={component:Card_Card,title:"Card",decorators:[addon_knobs_react.withKnobs],excludeStories:/.*Data$/};var Card_stories_Default=function Default(){var default_props={header:{text:Object(addon_knobs_react.text)("Title Text","Sample Header","Basics")},subheader:{status:Object(addon_knobs_react.boolean)("Secondary Header",!0,"Basics"),text:Object(addon_knobs_react.text)("Secondary Header Text","Sample Header","Basics")},body:{status:Object(addon_knobs_react.boolean)("Body Content",!0,"Basics"),text:Object(addon_knobs_react.text)("Body Content Text","This is for description text. It can be use to provide additional information up to three lines.","Basics")},footer:{status:Object(addon_knobs_react.boolean)("Footer",!0,"Basics"),text:Object(addon_knobs_react.text)("Footer Text","Sample Footer","Basics")},metrics:{status:Object(addon_knobs_react.boolean)("Metrics",!0,"Metrics"),value:Object(addon_knobs_react.number)("Metrics Value",99,{},"Metrics"),bar_status:Object(addon_knobs_react.boolean)("Indication Bar",!0,"Metrics"),bar_percentage:Object(addon_knobs_react.number)("Percentage",50,{range:!0,min:0,max:100,step:1},"Metrics")},actions:{status:Object(addon_knobs_react.select)("Number of Actions",{none:"None",one:"1",two:"2"},"1","Actions"),text1:Object(addon_knobs_react.text)("Action 1 Content","Action1","Actions"),text2:Object(addon_knobs_react.text)("Action 2 Content","Action2","Actions")}};return react_default.a.createElement(Card_Card,default_props)};Card_stories_Default.__docgenInfo={description:"",methods:[],displayName:"Default"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Card.stories.js"]={name:"Default",docgenInfo:Card_stories_Default.__docgenInfo,path:"src/components/Card.stories.js"})}},[[279,1,2]]]);
//# sourceMappingURL=main.bb1c21a9aaacfe743f5f.bundle.js.map
webpackJsonp([1],{

/***/ "/s9i":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// Implementation
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'VStep',
  props: {
    index: {
      type: Number,
      default: 0
    },
    name: {
      type: String,
      default: ''
    },
    active: {
      type: Boolean,
      default: false
    },
    visited: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    withDivider: {
      type: Boolean,
      default: false
    },
    debug: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      namespace: 'v-step'
    };
  },
  computed: {
    id: function id() {
      return this.namespace + '-' + this._uid + '-' + this.index;
    },
    displayIndex: function displayIndex() {
      return this.index + 1;
    },
    classes: function classes() {
      return {
        'is-active': this.active,
        'is-visited': this.visited,
        'is-disabled': this.disabled
      };
    },
    computedName: function computedName() {
      return this.name || this.id;
    },
    defaultSlot: function defaultSlot() {
      return this.$slots.default || this.$scopedSlots.default;
    },
    api: function api() {
      var displayIndex = this.displayIndex,
          defaultSlot = this.defaultSlot;

      return { displayIndex: displayIndex, defaultSlot: defaultSlot };
    }
  },
  inheritAttrs: false
});

/***/ }),

/***/ "0ZYP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root_package__ = __webpack_require__("7YgM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root_package___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__root_package__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prismjs__ = __webpack_require__("OEdS");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prismjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prismjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_truncate__ = __webpack_require__("tYtk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_truncate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_truncate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_images_octocat_png__ = __webpack_require__("8sfF");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_images_octocat_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__assets_images_octocat_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_javascript_VhChromeFix__ = __webpack_require__("4fNK");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue_breakpoint_component__ = __webpack_require__("X157");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Stepper__ = __webpack_require__("d09n");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_internal_Anchor__ = __webpack_require__("fERz");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//













/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'VDocs',
  components: {
    VA: __WEBPACK_IMPORTED_MODULE_7__components_internal_Anchor__["a" /* default */],
    VShowAt: __WEBPACK_IMPORTED_MODULE_5_vue_breakpoint_component__["VShowAt"],
    VHideAt: __WEBPACK_IMPORTED_MODULE_5_vue_breakpoint_component__["VHideAt"],
    VStepper: __WEBPACK_IMPORTED_MODULE_6__components_Stepper__["a" /* default */],
    VBreakpoint: __WEBPACK_IMPORTED_MODULE_5_vue_breakpoint_component__["VBreakpoint"]
  },
  data: function data() {
    return {

      pkg: __WEBPACK_IMPORTED_MODULE_0__root_package___default.a,

      assets: {
        octocat: __WEBPACK_IMPORTED_MODULE_3__assets_images_octocat_png___default.a
      },

      markdowns: {
        props: __webpack_require__("BAuv"),
        install: __webpack_require__("yypm"),
        examples: {
          default: {
            script: __webpack_require__("LDf2"),
            template: __webpack_require__("yP6i")
          },
          programmatic: {
            template: __webpack_require__("3wBu")
          },
          vuex: {
            meta: __webpack_require__("xC3h"),
            component: {
              script: __webpack_require__("eVP5"),
              template: __webpack_require__("BVlo")
            }
          }
        }
      },

      model: {
        steps: 3,
        step: undefined,
        breakpoint: new __WEBPACK_IMPORTED_MODULE_5_vue_breakpoint_component__["Model"]()
      },

      flags: {
        debug: false,
        random: false,
        persist: true,
        production: "production" !== 'development'
      }
    };
  },
  created: function created() {
    this.vhChromeFix = undefined;
  },
  mounted: function mounted() {
    window.setTimeout(__WEBPACK_IMPORTED_MODULE_1_prismjs___default.a.highlightAll);

    this.vhChromeFix = new __WEBPACK_IMPORTED_MODULE_4__assets_javascript_VhChromeFix__["a" /* VhChromeFix */]([{ selector: '.js-vh-fix', vh: 100 }]);
  },
  destroyed: function destroyed() {
    this.vhChromeFix.destroy();
  },

  computed: {
    einyLorem: function einyLorem() {
      var lorem = '\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n      In euismod elementum ante ac volutpat. Suspendisse euismod est enim,\n      sit amet vehicula neque feugiat id. Nunc imperdiet convallis placerat.\n      Sed accumsan mauris et magna facilisis gravida. Suspendisse et justo volutpat,\n      congue libero id, vehicula sem. Maecenas nec ex imperdiet, bibendum justo vel,\n      feugiat velit. Vivamus eu maximus mi. Fusce ac metus magna.\n      ';
      if (this.model.breakpoint.noMatch) {
        return __WEBPACK_IMPORTED_MODULE_2_lodash_truncate___default()(lorem, { length: 200 });
      }
      return lorem;
    },
    minyLorem: function minyLorem() {
      var lorem = '\n      Nunc a nunc at sapien posuere consequat. Vestibulum sed maximus felis.\n      Nulla a diam sit amet nulla malesuada commodo.\n      Fusce ullamcorper tortor sed ipsum ornare suscipit eget at nulla.\n      Donec facilisis elit purus, eu tempus nunc feugiat sollicitudin.\n      Mauris ipsum ligula, faucibus sed libero vel, dignissim posuere mauris.\n      Quisque ipsum tellus, sodales ac ante sed, consequat efficitur metus.\n      Pellentesque euismod viverra orci.\n      ';
      if (this.model.breakpoint.noMatch) {
        return __WEBPACK_IMPORTED_MODULE_2_lodash_truncate___default()(lorem, { length: 190 });
      }
      return lorem;
    },
    moeLorem: function moeLorem() {
      var lorem = '\n      Aenean vel arcu mollis, feugiat ipsum vitae, sollicitudin nibh. Integer fermentum,\n      dui ut laoreet faucibus, nibh elit ultricies ipsum, sit amet placerat libero nisl id enim.\n      Quisque quis arcu nisi. Etiam interdum luctus neque, non tincidunt metus mollis vel.\n      In nec tellus non nisl commodo aliquet a a ligula. Donec semper massa nisl,\n      a tristique lectus ultrices ut. Donec ac ultricies lectus, a semper nibh. Integer tempor,\n      purus ac convallis semper.\n      ';
      if (this.model.breakpoint.noMatch) {
        return __WEBPACK_IMPORTED_MODULE_2_lodash_truncate___default()(lorem, { length: 210 });
      }
      return lorem;
    }
  }
});

/***/ }),

/***/ "3wBu":
/***/ (function(module, exports) {

module.exports = "<pre><code class=\"lang-html\">&lt;v-stepper ref=&quot;stepper&quot; :steps=&quot;steps&quot; v-model=&quot;step&quot;&gt;&lt;/v-stepper&gt;\n\n&lt;!-- Stepper Controls --&gt;\n&lt;button type=&quot;button&quot; @click=&quot;$refs.stepper.previous()&quot;&gt;Previous&lt;/button&gt;\n&lt;button type=&quot;button&quot; @click=&quot;$refs.stepper.next()&quot;&gt;Next&lt;/button&gt;\n&lt;button type=&quot;button&quot; @click=&quot;$refs.stepper.reset()&quot;&gt;Reset&lt;/button&gt;\n</code></pre>\n";

/***/ }),

/***/ "4fNK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VhChromeFix; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__("Zrlr");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__("wxAW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);


// https://stanko.github.io/mobile-chrome-vh-units-fix/

var VhChromeFix = function () {
  function VhChromeFix(selectors) {
    var _this = this;

    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, VhChromeFix);

    this.selectors = selectors;

    var userAgent = navigator.userAgent.toLowerCase();
    var isAndroidChrome = /chrome/.test(userAgent) && /android/.test(userAgent);
    var isIosChrome = /crios/.test(userAgent);

    if (isAndroidChrome || isIosChrome) {
      // If we detected Chrome on Android or iOS
      // Cache elements and trigger fix on init
      this.getElements(this.selectors);
      this.fixAll();

      // Cache window dimensions
      this.windowWidth = window.innerWidth;
      this.windowHeight = window.innerHeight;

      this.onResize = function () {
        // Both width and height changed (orientation change)
        // This is a hack, as Android when keyboard pops up
        // Triggers orientation change
        _this.windowWidth = window.innerWidth;
        _this.windowHeight = window.innerHeight;
        _this.fixAll();
      };

      window.addEventListener('resize', this.onResize, false);
    }
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(VhChromeFix, [{
    key: 'getElements',
    value: function getElements() {
      var selectors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];


      this.elements = [];

      selectors = [].concat(selectors);

      for (var i = 0; i < selectors.length; i++) {
        // Get all elements for selector
        var selector = selectors[i].selector;
        var elements = document.querySelectorAll(selector);

        // Go through all elements for one selector to filter them
        for (var j = 0; j < elements.length; j++) {
          var offset = selectors[i].offset || 0;
          this.elements.push({
            domElement: elements[j],
            vh: selectors[i].vh,
            offset: offset
          });
        }
      }
    }
  }, {
    key: 'fixAll',
    value: function fixAll() {
      for (var i = 0; i < this.elements.length; i++) {
        var element = this.elements[i];
        var offset = element.offset;
        element.domElement.style.height = window.innerHeight * (element.vh / 100) - offset + 'px';
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      window.removeEventListener('resize', this.onResize);
    }
  }]);

  return VhChromeFix;
}();

/***/ }),

/***/ "7YgM":
/***/ (function(module, exports) {

module.exports = {"name":"vue-stepper-component","version":"1.0.0","description":"A Vue.js Stepper component","author":"Adi Sahar","main":"dist","private":true,"scripts":{"dev":"node build/dev-server.js","start":"npm run dev","build":"node build/build.js","unit":"cross-env BABEL_ENV=test karma start test/unit/karma.conf.js --single-run","e2e":"node test/e2e/runner.js","test":"npm run unit && npm run e2e","lint":"eslint --ext .js,.vue src test/unit/specs test/e2e/specs","predeploy":"npm run build","deploy":"node build/deploy.js"},"repository":{"type":"git","url":"https://github.com/adi518/vue-stepper-component"},"bugs":{"url":"https://github.com/adi518/vue-stepper-component/issues"},"license":"MIT","peerDependencies":{"vue":"^2.5.2"},"dependencies":{"bootstrap":"^4.1.2","lodash.truncate":"^4.4.2","octicons":"^6.0.1","prismjs":"^1.15.0","vue":"^2.5.16","vue-breakpoint-component":"^1.0.0","vue-router":"^2.7.0","vue-switch":"^1.3.0"},"devDependencies":{"autoprefixer":"^7.1.2","babel-core":"^6.22.1","babel-eslint":"^7.1.1","babel-loader":"^7.1.1","babel-plugin-istanbul":"^4.1.1","babel-plugin-transform-runtime":"^6.22.0","babel-preset-env":"^1.3.2","babel-preset-es2015":"^6.24.1","babel-preset-stage-2":"^6.22.0","babel-register":"^6.22.0","chai":"^3.5.0","chalk":"^2.0.1","chromedriver":"^2.27.2","connect-history-api-fallback":"^1.3.0","copy-webpack-plugin":"^4.0.1","cross-env":"^5.0.1","cross-spawn":"^5.0.1","css-loader":"^0.28.0","cssnano":"^3.10.0","ejs":"^2.5.7","eslint":"^3.19.0","eslint-config-standard":"^6.2.1","eslint-friendly-formatter":"^3.0.0","eslint-loader":"^1.7.1","eslint-plugin-html":"^3.0.0","eslint-plugin-promise":"^3.4.0","eslint-plugin-standard":"^2.0.1","eventsource-polyfill":"^0.9.6","express":"^4.14.1","extract-text-webpack-plugin":"^2.0.0","file-loader":"^0.11.1","friendly-errors-webpack-plugin":"^1.1.3","gh-pages":"^1.2.0","html-loader":"^0.5.1","html-webpack-plugin":"^2.28.0","http-proxy-middleware":"^0.17.3","inject-loader":"^3.0.0","karma":"^1.4.1","karma-coverage":"^1.1.1","karma-mocha":"^1.3.0","karma-phantomjs-launcher":"^1.0.2","karma-phantomjs-shim":"^1.4.0","karma-sinon-chai":"^1.3.1","karma-sourcemap-loader":"^0.3.7","karma-spec-reporter":"0.0.31","karma-webpack":"^2.0.2","markdown-loader":"^2.0.2","marked":"^0.4.0","mocha":"^3.2.0","nightwatch":"^0.9.12","node-sass":"^4.9.0","opn":"^5.1.0","optimize-css-assets-webpack-plugin":"^2.0.0","ora":"^1.2.0","phantomjs-prebuilt":"^2.1.14","rimraf":"^2.6.0","sass-loader":"^6.0.7","selenium-server":"^3.0.1","semver":"^5.3.0","shelljs":"^0.7.6","sinon":"^2.1.0","sinon-chai":"^2.8.0","url-loader":"^0.5.8","vue-loader":"^13.0.4","vue-style-loader":"^3.0.1","vue-template-compiler":"^2.5.16","webpack":"^2.6.1","webpack-bundle-analyzer":"^2.2.1","webpack-dev-middleware":"^1.10.0","webpack-hot-middleware":"^2.18.0","webpack-merge":"^4.1.0"},"engines":{"node":">= 4.0.0","npm":">= 3.0.0"},"browserslist":["> 1%","last 2 versions","not ie <= 8"]}

/***/ }),

/***/ "8LG0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__("mvHQ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_array_from__ = __webpack_require__("c/Tr");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_array_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_array_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Step__ = __webpack_require__("nopX");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__StepperRoot__ = __webpack_require__("JuER");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// https://www.webpackbin.com/bins/-KvHS7KEmrTLJOYWS9k2
// https://material.angular.io/components/stepper/overview
// https://cristijora.github.io/vue-form-wizard/#/?id=demos
// https://stackoverflow.com/questions/4852017/how-to-initialize-an-arrays-length-in-javascript

// Components



// Implementation
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'VStepper',
  inheritAttrs: false,
  components: {
    VStep: __WEBPACK_IMPORTED_MODULE_2__Step__["a" /* default */]
  },
  props: {
    value: {
      type: Number,
      default: 1
    },
    steps: {
      type: Number,
      default: 0
    },
    linear: {
      type: Boolean,
      default: true
    },
    persist: {
      type: Boolean,
      default: false
    },
    storekeeper: {
      type: String,
      default: 'localStorage',
      validator: function validator(value) {
        return ['localStorage', 'sessionStorage'].includes(value);
      }
    },
    withDivider: {
      type: Boolean,
      default: true
    },
    rootComponent: {
      type: Object,
      default: function _default() {
        return __WEBPACK_IMPORTED_MODULE_3__StepperRoot__["a" /* default */];
      }
    },
    debug: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      namespace: 'v-stepper',
      stepsArr: this.getMap(),
      index: this.toIndex(this.value)
    };
  },

  watch: {
    value: function value(_value) {
      this.index = this.toIndex(_value);
      if (this.persist) {
        this.setStorage();
      }
    },

    index: {
      handler: function handler(index) {
        this.$emit('input', this.toValue(index));
      },

      immediate: true
    }
  },
  created: function created() {
    if (this.persist) {
      var storage = this.getStorage();
      if (storage) {
        this.stepsArr = storage.stepsArr;
        this.index = storage.index;
      } else {
        this.setStorage();
      }
    }
  },
  destroyed: function destroyed() {
    window[this.storekeeper].removeItem(this.id);
  },

  computed: {
    id: function id() {
      return this.namespace + '-' + this._uid;
    },
    lastIndex: function lastIndex() {
      return this.stepsArr.length - 1;
    }
  },
  methods: {
    toValue: function toValue(index) {
      return index + 1;
    },
    toIndex: function toIndex(value) {
      return value - 1;
    },
    doesStepExist: function doesStepExist(index) {
      return !!this.stepsArr[index];
    },
    isIntermediateIndex: function isIntermediateIndex(index) {
      return index > 0 && index < this.lastIndex;
    },
    onChange: function onChange(index) {
      var _this = this;

      var isNext = index === this.index + 1;
      var isPrevious = index === this.index - 1;
      var oldIndex = this.toIndex(this.value);
      if (this.linear) {
        if (isNext || isPrevious) {
          this.setStep(index, 'active', true);
          this.setStep(index, 'visited', false);
          this.setStep(index, 'disabled', false);
          this.setStep(oldIndex, 'active', false);
          this.setStep(oldIndex, 'visited', true);
          this.stepsArr.forEach(function (step) {
            if (step.index > index) {
              _this.setStep(step.index, 'disabled', true);
            }
          });
          this.$emit('input', this.toValue(index));
        }
      } else {
        this.setStep(oldIndex, 'visited', true);
        this.$emit('input', this.toValue(index));
      }
    },
    getMap: function getMap() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_array_from___default()(Array(this.steps), function (step, index) {
        var isFirst = index === 0;
        var isNext = index - 1 === 0;
        var disabled = false;
        if (_this2.linear) {
          if (isFirst || isNext) {
            // Keep it enabled.
          } else {
            disabled = true;
          }
        }
        var visited = false;
        var value = _this2.toValue(index);
        return { index: index, value: value, visited: visited, disabled: disabled };
      });
    },
    offset: function offset(_offset) {
      var index = this.index + _offset;
      if (this.doesStepExist(index)) {
        this.onChange(index);
      }
    },
    next: function next() {
      this.offset(1);
    },
    previous: function previous() {
      this.offset(-1);
    },
    reset: function reset() {
      this.stepsArr = this.getMap();
      this.index = 0;
      this.$emit('reset');
    },
    setStep: function setStep(index, prop, value) {
      this.$set(this.stepsArr[index], prop, value);
    },
    setStorage: function setStorage() {
      var index = this.index,
          stepsArr = this.stepsArr;

      window[this.storekeeper].setItem(this.id, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()({ index: index, stepsArr: stepsArr }));
    },
    getStorage: function getStorage() {
      return JSON.parse(window[this.storekeeper].getItem(this.id));
    }
  }
});

/***/ }),

/***/ "8sfF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/octocat.38fdb74.png";

/***/ }),

/***/ "A3ZW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:['v-step', _vm.classes]},[_c('input',{directives:[{name:"show",rawName:"v-show",value:(_vm.debug),expression:"debug"}],staticClass:"input",attrs:{"type":"radio","id":_vm.id,"name":_vm.computedName},domProps:{"checked":_vm.active},on:{"change":function($event){_vm.$emit('change', _vm.index)}}}),_vm._v(" "),_c('label',{staticClass:"label",attrs:{"for":_vm.id}},[_c('span',{staticClass:"index"},[_vm._t("index",[_vm._v("\n        "+_vm._s(_vm.api.displayIndex)+"\n      ")],null,_vm.api)],2),_vm._v(" "),(_vm.defaultSlot)?_c('span',{staticClass:"title"},[_vm._t("default",null,null,_vm.api)],2):_vm._e(),_vm._v(" "),(_vm.withDivider)?_c('span',{staticClass:"divider"}):_vm._e()])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "ABHI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"v-a",attrs:{"href":_vm.href,"target":_vm.computedTarget,"tabindex":_vm.tabindex},on:{"click":_vm.handleClick}},[_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "BAuv":
/***/ (function(module, exports) {

module.exports = "<pre><code class=\"lang-js\">/**\n * Contains the current step value. Very similar to a\n * `value` attribute on an input. In most cases, you&#39;ll want\n * to set this as a two-way binding, using the `v-model` directive.\n * @type {Number||undefined||null}\n */\nvalue: {\n  type: Number,\n  default: 1\n},\n\n/**\n * Contains the steps count.\n * @type {Number}\n */\nsteps: {\n  type: Number,\n  default: 0\n},\n\n/**\n * Sets up the Stepper in either\n * linear or random mode.\n * @type {Boolean}\n */\nlinear: {\n  type: Boolean,\n  default: true\n},\n\n/**\n * Sync state with storage?\n * @type {Boolean}\n */\npersist: {\n  type: Boolean,\n  default: false\n},\n\n/**\n * Which Storage API to use.\n * Should be used with `persist` prop.\n * @type {String}\n */\nstorekeeper: {\n  type: String,\n  default: &#39;localStorage&#39;,\n  validator(value) {\n    return [&#39;localStorage&#39;, &#39;sessionStorage&#39;].includes(value)\n  }\n},\n\n/**\n * Add/Remove a divider to/from each Step component.\n * @type {Boolean}\n */\nwithDivider: {\n  type: Boolean,\n  default: true\n},\n\n/**\n * Steps wrapper component.\n * @type {Object}\n */\nrootComponent: {\n  type: Object,\n  default: () =&gt; VStepperRoot\n},\n\n/**\n * Sets up debug mode, which reveals\n * the actual radio-button behind each step.\n * @type {Boolean}\n */\ndebug: {\n  type: Boolean,\n  default: false\n}\n</code></pre>\n";

/***/ }),

/***/ "BVWu":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "BVlo":
/***/ (function(module, exports) {

module.exports = "<pre><code class=\"lang-html\">&lt;v-stepper :steps=&quot;steps&quot; v-model=&quot;step&quot;&gt;&lt;/v-stepper&gt;\n\n&lt;!-- Change routes by step --&gt;\n&lt;router-view&gt;&lt;/router-view&gt;\n</code></pre>\n";

/***/ }),

/***/ "Bwir":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"docs"},[_c('v-breakpoint',{model:{value:(_vm.model.breakpoint),callback:function ($$v) {_vm.$set(_vm.model, "breakpoint", $$v)},expression:"model.breakpoint"}}),_vm._v(" "),_c('div',{staticClass:"docs-container docs-container--has-jumbotron docs-100vh js-vh-fix"},[_c('div',{staticClass:"container docs-jumbotron"},[_c('h1',{staticClass:"docs-h1 mb-3"},[_vm._v("\n        Vue-Stepper "),_c('sup',{staticClass:"docs-version"},[_vm._v(_vm._s(_vm.pkg.version))])]),_vm._v(" "),_c('p',{staticClass:"docs-tagline mb-5"},[_vm._v("\n        Fully customizable\n        Stepper component "),_c('br',{directives:[{name:"show",rawName:"v-show",value:(_vm.model.breakpoint.noMatch),expression:"model.breakpoint.noMatch"}]}),_vm._v(" with Vuex\n        support and Zero dependencies.\n      ")]),_vm._v(" "),_c('v-stepper',{ref:"stepper",staticClass:"docs-stepper mb-3",attrs:{"steps":_vm.model.steps,"debug":_vm.flags.debug,"linear":_vm.flags.linear,"persist":_vm.flags.persist},model:{value:(_vm.model.step),callback:function ($$v) {_vm.$set(_vm.model, "step", $$v)},expression:"model.step"}},[_c('template',{slot:"step-1"},[_vm._v(" Eeny ")]),_vm._v(" "),_c('template',{slot:"step-2"},[_vm._v(" Miny ")]),_vm._v(" "),_c('template',{slot:"step-3"},[_vm._v(" Moe ")])],2),_vm._v(" "),(_vm.model.step === 1)?[_c('p',{staticClass:"docs-lorem"},[_vm._v("\n          "+_vm._s(_vm.einyLorem)+"\n        ")])]:_vm._e(),_vm._v(" "),(_vm.model.step === 2)?[_c('p',{staticClass:"docs-lorem"},[_vm._v("\n          "+_vm._s(_vm.minyLorem)+"\n        ")])]:_vm._e(),_vm._v(" "),(_vm.model.step === 3)?[_c('p',{staticClass:"docs-lorem"},[_vm._v("\n          "+_vm._s(_vm.moeLorem)+"\n        ")])]:_vm._e(),_vm._v(" "),_c('v-hide-at',{attrs:{"no-match":""}},[_c('div',{staticClass:"docs-button-group mt-3"},[_c('button',{staticClass:"btn docs-button",on:{"click":function($event){_vm.$refs.stepper.previous()}}},[_vm._v("Previous")]),_vm._v(" "),_c('button',{staticClass:"btn docs-button",on:{"click":function($event){_vm.$refs.stepper.next()}}},[_vm._v("Next")]),_vm._v(" "),_c('button',{staticClass:"btn docs-button",on:{"click":function($event){_vm.$refs.stepper.reset()}}},[_vm._v("Reset")])])]),_vm._v(" "),_c('v-a',{staticClass:"docs-fixed-anchor docs-c-pointer",attrs:{"scroll-to":_vm.$refs.docs}},[_vm._v("\n        Install, Examples & Documentation\n      ")]),_vm._v(" "),_c('div',{staticClass:"docs-github-star"},[_c('a',{staticClass:"github-button",attrs:{"href":_vm.flags.production && _vm.pkg.repository.url,"data-icon":"octicon-star","data-show-count":"true","aria-label":"Star adi518/vue-stepper-component on GitHub"}},[_vm._v("\n          Star\n        ")])])],2)]),_vm._v(" "),_c('div',{ref:"docs",staticClass:"docs-container docs-min-100vh"},[_c('div',{staticClass:"container docs-clearfix"},[_c('h4',{ref:"install",staticClass:"mt-4"},[_c('v-a',{attrs:{"scroll-to":_vm.$refs.install}},[_vm._v("Install")])],1),_vm._v(" "),_c('div',{staticClass:"docs-markdown",domProps:{"innerHTML":_vm._s(_vm.markdowns.install)}}),_vm._v(" "),_c('h4',{ref:"usage"},[_c('v-a',{attrs:{"scroll-to":_vm.$refs.usage}},[_vm._v("Usage")])],1),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('h5',[_vm._v("Template")]),_vm._v(" "),_c('div',{staticClass:"docs-markdown",domProps:{"innerHTML":_vm._s(_vm.markdowns.examples.default.template)}}),_vm._v(" "),_c('h5',[_vm._v("Script")]),_vm._v(" "),_c('div',{staticClass:"docs-markdown",domProps:{"innerHTML":_vm._s(_vm.markdowns.examples.default.script)}}),_vm._v(" "),_c('h4',{ref:"vuex"},[_c('v-a',{attrs:{"scroll-to":_vm.$refs.vuex}},[_vm._v("Vuex")])],1),_vm._v(" "),_c('p',[_vm._v("A common practice for managing your Stepper state, is through a Store.")]),_vm._v(" "),_c('h5',[_vm._v("Store")]),_vm._v(" "),_c('div',{staticClass:"docs-markdown",domProps:{"innerHTML":_vm._s(_vm.markdowns.examples.vuex.meta)}}),_vm._v(" "),_c('h5',[_vm._v("Template")]),_vm._v(" "),_c('div',{staticClass:"docs-markdown",domProps:{"innerHTML":_vm._s(_vm.markdowns.examples.vuex.component.template)}}),_vm._v(" "),_c('h5',[_vm._v("Script")]),_vm._v(" "),_c('div',{staticClass:"docs-markdown",domProps:{"innerHTML":_vm._s(_vm.markdowns.examples.vuex.component.script)}}),_vm._v(" "),_c('h4',{ref:"programmatic"},[_c('v-a',{attrs:{"scroll-to":_vm.$refs.programmatic}},[_vm._v("Programmatic")])],1),_vm._v(" "),_c('p',[_vm._v("\n        Start off by assigning special\n        "),_c('code',[_vm._v("Vue")]),_vm._v(" property\n        "),_c('code',[_c('v-a',{attrs:{"href":"https://vuejs.org/v2/api/#ref"}},[_vm._v("ref")])],1),_vm._v(" to the\n        "),_c('code',[_vm._v("v-stepper")]),_vm._v(" component. Then, assign an API method to an Event handler\n        of your choice. The following example is similar to the Demo above, where we assign\n        "),_c('code',[_vm._v("previous")]),_vm._v(", "),_c('code',[_vm._v("next")]),_vm._v(" and "),_c('code',[_vm._v("reset")]),_vm._v(" to the\n        "),_c('code',[_vm._v("click")]),_vm._v(" event of a button element.\n      ")]),_vm._v(" "),_c('div',{staticClass:"docs-markdown",domProps:{"innerHTML":_vm._s(_vm.markdowns.examples.programmatic.template)}}),_vm._v(" "),_c('h4',{ref:"api-props"},[_c('v-a',{attrs:{"scroll-to":_vm.$refs['api-props']}},[_vm._v("API Props")])],1),_vm._v(" "),_c('div',{staticClass:"docs-markdown",domProps:{"innerHTML":_vm._s(_vm.markdowns.props)}}),_vm._v(" "),_c('h4',{ref:"support"},[_c('v-a',{attrs:{"scroll-to":_vm.$refs.support}},[_vm._v("Support")])],1),_vm._v(" "),_c('p',[_vm._v("\n        Please open an\n        "),_c('v-a',{attrs:{"href":_vm.pkg.bugs.url}},[_vm._v("issue")]),_vm._v(" for support.\n      ")],1),_vm._v(" "),_c('h4',{ref:"license",staticClass:"mt-5"},[_c('v-a',{attrs:{"scroll-to":_vm.$refs.license}},[_vm._v("License")])],1),_vm._v(" "),_c('p',[_vm._v("\n        Copyright (c) 2018\n        "),_c('v-a',{attrs:{"href":"https://github.com/adi518"}},[_vm._v("\n          "+_vm._s(_vm.pkg.author)+"\n        ")]),_vm._v("\n        by\n        "),_c('v-a',{attrs:{"href":"https://opensource.org/licenses/MIT"}},[_vm._v("\n          "+_vm._s(_vm.pkg.license)+"\n        ")])],1)])]),_vm._v(" "),_c('footer',{staticClass:"docs-footer docs-clearfix"},[_c('p',{staticClass:"docs-credit mt-2 mb-2"},[_vm._v("\n      Made with ❤️ by\n      "),_c('v-a',{attrs:{"href":"https://github.com/adi518"}},[_vm._v("\n        Adi Sahar\n      ")])],1)]),_vm._v(" "),_c('img',{staticClass:"docs-github",attrs:{"src":_vm.assets.octocat,"alt":"Octicon"}})],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("\n        To use the component in your templates, simply import and register with your component.\n        To control the Stepper state, we use the "),_c('code',[_vm._v("v-model")]),_vm._v(" directive, just like on any\n        other input element with two-way binding. The Stepper acts as a group of radio-buttons.\n      ")])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "FXnE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("Dd8w");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);

//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'VA',
  props: {
    name: {
      type: String,
      default: ''
    },
    href: {
      type: String,
      default: ''
    },
    tabindex: {
      type: String,
      default: ''
    },
    refs: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    scrollTo: {
      type: [String, Element],
      default: ''
    },
    target: {
      type: String,
      default: '_blank'
    },
    prevent: {
      type: Boolean,
      default: false
    },
    static: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    computedTarget: function computedTarget() {
      if (this.scrollTo) {
        return undefined;
      }
      return this.target;
    }
  },
  methods: {
    handleClick: function handleClick(event) {
      if (this.prevent || this.scrollTo || this.static) {
        event.preventDefault();
      }

      if (this.scrollTo) {
        this.$scrollTo(this.scrollTo);
      }

      this.$emit('click', { href: this.href });
    },
    getElementByRef: function getElementByRef(ref, refs) {
      refs = refs || this.$refs;

      var noRefs = !refs;

      if (noRefs) {
        console.error('[getElementByRef warn]: No refs found.');
        return;
      }

      var element = refs[ref];

      // Is from element?
      if (element instanceof Element) {
        return element;
      }

      // Is from component?
      if (refs[ref]) {
        element = refs[ref].el;
        if (element instanceof Element) {
          return element;
        }
      }

      // Ref doesn't exist
      console.error('[getElementByRef warn]: No such ref as "' + ref + '".');

      return null;
    },
    $scrollTo: function $scrollTo(ref) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var element = void 0;

      if (ref instanceof Element) {
        element = ref;
      } else {
        element = this.getElementByRef(ref, this.refs);
      }

      if (element) {
        element.scrollIntoView(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
          behavior: 'smooth',
          block: 'start'
        }, options));
      }
    }
  }
});

/***/ }),

/***/ "JuER":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_StepperRoot_vue__ = __webpack_require__("YQGQ");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_19672f70_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_StepperRoot_vue__ = __webpack_require__("VHkf");
function injectStyle (ssrContext) {
  __webpack_require__("UH5I")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-19672f70"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_StepperRoot_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_19672f70_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_StepperRoot_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "LDf2":
/***/ (function(module, exports) {

module.exports = "<pre><code class=\"lang-js\">import { VStepper } from &#39;vue-stepper-component&#39;\n\nexport default {\n  components: {\n    VStepper\n  },\n  data: () =&gt; ({ steps: 3, step: undefined })\n}\n</code></pre>\n";

/***/ }),

/***/ "M93x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__("xJD8");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_25055e59_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__("PwEp");
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_25055e59_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__("M93x");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__("YaEn");
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.




__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */] }
});

/***/ }),

/***/ "O1BI":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "PVon":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Docs_vue__ = __webpack_require__("0ZYP");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_30b09edc_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Docs_vue__ = __webpack_require__("Bwir");
function injectStyle (ssrContext) {
  __webpack_require__("BVWu")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Docs_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_30b09edc_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Docs_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "PwEp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('router-view')],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "UH5I":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "VHkf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"v-stepper-root"},[_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "YQGQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'VStepperRoot'
});

/***/ }),

/***/ "YaEn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__("/ocq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__containers_Docs__ = __webpack_require__("PVon");




__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{
    path: '/',
    name: 'Docs',
    component: __WEBPACK_IMPORTED_MODULE_2__containers_Docs__["a" /* default */]
  }]
}));

/***/ }),

/***/ "d09n":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Stepper_vue__ = __webpack_require__("8LG0");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e7801c3a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Stepper_vue__ = __webpack_require__("tDgt");
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Stepper_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e7801c3a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Stepper_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "eVP5":
/***/ (function(module, exports) {

module.exports = "<pre><code class=\"lang-js\">import path from &#39;path&#39;\nimport router from &#39;./router&#39;\n\nimport { VStepper } from &#39;vue-stepper-component&#39;\n\nexport default {\n  components: {\n    VStepper\n  },\n  watch: {\n    $route: { \n      handler(route) {\n        this.changeRoute(route)\n      },\n      immediate: true\n    }\n  },\n  computed: {\n    ...mapGetters({\n      steps: types.STEPS,\n      step: types.STEP\n    }),\n    step: {\n      get() {\n        return this.step\n      },\n      set(step: route) {\n        this.changeRoute({ name: route })\n      }\n    }\n  },\n  methods: {\n    changeRoute(route) {\n      const basename = route.name || path.basename(route.fullPath)\n\n      router.push(basename)\n    }\n  }\n}\n</code></pre>\n";

/***/ }),

/***/ "fERz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Anchor_vue__ = __webpack_require__("FXnE");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_668f51b6_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Anchor_vue__ = __webpack_require__("ABHI");
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Anchor_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_668f51b6_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Anchor_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "nopX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Step_vue__ = __webpack_require__("/s9i");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_51a1deee_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Step_vue__ = __webpack_require__("A3ZW");
function injectStyle (ssrContext) {
  __webpack_require__("O1BI")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-51a1deee"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Step_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_51a1deee_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Step_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "tDgt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"v-stepper"},[_c(_vm.rootComponent,{tag:"component"},_vm._l((_vm.stepsArr),function(step,$index){return _c('v-step',{key:$index,attrs:{"name":_vm.id,"debug":_vm.debug,"index":$index,"visited":step.visited,"disabled":step.disabled,"with-divider":_vm.withDivider,"active":step.index === _vm.toIndex(_vm.value)},on:{"change":_vm.onChange},scopedSlots:_vm._u([{key:"index",fn:function(api){return [_vm._t(("step-" + (api.displayIndex) + "-index"),[_vm._v("\n          "+_vm._s(api.displayIndex)+"\n        ")],null,api)]}},{key:"default",fn:function(api){return [_vm._t(("step-" + (api.displayIndex)),null,null,api)]}}])})}))],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "xC3h":
/***/ (function(module, exports) {

module.exports = "<pre><code class=\"lang-js\">// State\nconst state = { steps: 3, step: undefined }\n\n// Getters...\n// Mutations...\n\n// Export\n</code></pre>\n";

/***/ }),

/***/ "xJD8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'app'
});

/***/ }),

/***/ "yP6i":
/***/ (function(module, exports) {

module.exports = "<pre><code class=\"lang-html\">&lt;v-stepper :steps=&quot;steps&quot; v-model=&quot;step&quot;&gt;&lt;/v-stepper&gt;\n\n&lt;template v-if=&quot;step === 1&quot;&gt;&lt;!-- Step 1 Content --&gt;&lt;/template&gt;\n&lt;template v-if=&quot;step === 2&quot;&gt;&lt;!-- Step 2 Content --&gt;&lt;/template&gt;\n&lt;template v-if=&quot;step === 3&quot;&gt;&lt;!-- Step 3 Content --&gt;&lt;/template&gt;\n\n&lt;!-- etc&#39; --&gt;\n</code></pre>\n";

/***/ }),

/***/ "yypm":
/***/ (function(module, exports) {

module.exports = "<pre><code class=\"lang-bash\">$ npm install vue-stepper-component --save\n</code></pre>\n";

/***/ })

},["NHnr"]);
//# sourceMappingURL=app.99b07a134893bac5c09b.js.map
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

import axios from 'axios';
import humps from 'humps';
import qs from 'qs';
import URI from 'urijs';
import { object, number, string, boolean as _boolean } from 'yup';

var RestError = /*#__PURE__*/function (_Error) {
  _inherits(RestError, _Error);

  var _super = _createSuper(RestError);

  /**
   * Set default values of CustomError class
   * @param {object|Error} error - Either pass an built-un Error or Error Object from API
   */
  function RestError(error) {
    var _this;

    _classCallCheck(this, RestError);

    var errorMessage = '';

    if (error instanceof Error) {
      errorMessage = error.message;
    } else {
      errorMessage = error.error;
    }

    _this = _super.call(this, errorMessage);

    if (!(error instanceof Error)) {
      _this.name = error.name || 'RestError';
      _this.code = error.code;
    }

    _this.error = errorMessage;
    _this.message = errorMessage;

    var errorType = _this.getErrorType(_this.code);

    _this.errorType = errorType;

    if (error.params) {
      _this.params = error.params;
    }

    return _this;
  }

  _createClass(RestError, [{
    key: "getErrorType",
    value: function getErrorType(code) {
      switch (code) {
        case 0:
          return 'AUTH_DECLINED';

        case 1:
          return 'MISSING_INPUT_PARAM';

        case 2:
          return 'INVALID_INPUT_PARAM';

        case 404:
          return 'NOT_FOUND';

        default:
          return 'INTERNAL_SERVER_ERROR';
      }
    }
  }]);

  return RestError;
}( /*#__PURE__*/_wrapNativeSuper(Error)); //#region  General


var URL_PROTOCOL = 'https';
var BASE_URL = 'api3.greensms.ru';
var VERSIONS = {
  v1: 'v1'
};
var RES_STATUS_ACCEPTED = 'Accepted';
var RES_STATUS_DELAYED = 'Delayed'; //#endregion

var RestClient = /*#__PURE__*/function () {
  /**
   * Create an instance of RestClient
   * @param {object} opts - Options
   * @param {string} opts.token - Default token for the request
   * @param {object} opts.params - Default params for the request
   * @param {object} opts.data - Default data for the request
   * @param {boolean} opts.useCamelCase - Convert all response keys to camelCase
   */
  function RestClient(opts) {
    _classCallCheck(this, RestClient);

    opts = opts || {};
    var service = axios.create({});
    service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    this.service = service;
    this.token = opts.token;
    this.defaultData = opts.data || {};
    this.defaultParams = opts.params || {};
    this.useCamelCase = typeof opts.useCamelCase === 'boolean' ? opts.useCamelCase : false;

    this._addInterceptors();
  }
  /**
   * Generic function to send requests to Axios
   *
   * @param {object} opts - Options argument
   * @param {string} opts.method - HTTP method
   * @param {string} opts.uri - Request URI
   * @param {object} [opts.headers] - The request headers
   * @param {object} [opts.params] - Request Params
   * @param {object} [opts.data] - Request Data
   * @param {int} [opts.timeout=30000] - Request timeout in milliseconds
   * @param {boolean} [opts.allowRedirects] - Should the client follow redirects
   * @param {boolean} [opts.forever] - Set to true to use the forever-agent
   * @param {string} [opts.logLevel] - Show debug logs
   */


  _createClass(RestClient, [{
    key: "request",
    value: function request(opts, callback) {
      var _this2 = this;

      opts = opts || {};

      if (!opts.method) {
        throw new Error('Http method is required');
      }

      if (!opts.uri) {
        throw new Error('URI is required');
      }

      var headers = opts.headers || {};

      if (!headers.Connection && !headers.connection) {
        headers.Connection = 'close';
      }

      var options = {
        timeout: opts.timeout || 30000,
        maxRedirects: opts.allowRedirects ? 10 : 0,
        url: opts.uri,
        method: opts.method,
        validateStatus: function validateStatus(status) {
          return status >= 100 && status < 600;
        }
      };
      opts.headers = opts.headers || {};

      if (opts.data !== null && opts.data !== undefined) {
        options.data = qs.stringify(opts.data, {
          arrayFormat: 'repeat'
        });
      }

      if (opts.params !== null && opts.params !== undefined) {
        options.params = opts.params;

        options.paramsSerializer = function (params) {
          return qs.stringify(params, {
            arrayFormat: 'repeat'
          });
        };
      }

      var promise = new Promise(function (resolve, reject) {
        _this2.service(options).then(function (response) {
          var data = response.data;

          if (data.error) {
            return Promise.reject(data);
          }

          return resolve(data);
        })["catch"](function (err) {
          var result = new RestError(err);
          return reject(result);
        });
      });

      if (callback !== null && typeof callback === 'function') {
        promise.then(function (data) {
          return callback(null, data);
        })["catch"](function (err) {
          return callback(err);
        });
      } else {
        return promise;
      }
    }
  }, {
    key: "_addInterceptors",
    value: function _addInterceptors() {
      var _this3 = this;

      this.service.interceptors.request.use(function (config) {
        if (_this3.token) {
          config.headers.Authorization = "Bearer ".concat(_this3.token);
        }

        if (_this3.defaultParams) {
          config.params = _objectSpread(_objectSpread({}, config.params), _this3.defaultParams);
        }

        if (_this3.defaultData) {
          config.data = _objectSpread(_objectSpread({}, config.data), _this3.defaultData);
        }

        return config;
      });
      this.service.interceptors.response.use(function (response) {
        if (response.request.method === 'POST') {
          if (response.status === 200) {
            response.data['request_status'] = RES_STATUS_ACCEPTED; // jshint ignore:line
          } else {
            response.data['request_status'] = RES_STATUS_DELAYED; // jshint ignore:line
          }
        }

        if (_this3.useCamelCase) {
          response.data = humps.camelizeKeys(response.data);
        }

        return response;
      }, function (err) {
        return Promise.reject(err);
      });
    }
  }]);

  return RestClient;
}();
/**
* Get base url of the API
* @returns {string}
*/


var baseUrl = function baseUrl() {
  var uri = URI();
  uri.protocol(URL_PROTOCOL);
  uri.hostname(BASE_URL);
  uri = uri.toString();
  return uri;
};
/**
 * Join to create an absolute URL from Paths
 * @param {string} baseUrl - Base URL with protocol
 * @param  {string[]} args - Array of paths to join. Can also include query strings
 * @returns {string} - Joined URL String
 */


var buildUrl = function buildUrl(baseUrl) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  if (!baseUrl) {
    throw new Error('Base URL cannot be empty!');
  }

  if (!args) {
    args = [];
  }

  var uri = URI.joinPaths.apply(URI, _toConsumableArray(args));
  uri = uri.absoluteTo(baseUrl).preventInvalidHostname(true);

  if (!uri.hostname() || !uri.protocol()) {
    throw new Error('Invalid URL');
  }

  uri = uri.toString();
  return uri;
};
/**
* Returns Version from VersionMap
* @param {string} version - Input Version as V1, V2, etc.
*/


var getVersion = function getVersion(version) {
  if (!version) {
    return VERSIONS.v1;
  }

  version = version.toLowerCase();

  if (!VERSIONS[version]) {
    throw new Error('Invalid Version');
  }

  return VERSIONS[version];
};

var ValidationSchema = {
  account: {
    v1: {
      token: object().shape({
        expire: number().positive().integer()
      })
    }
  },
  call: {
    v1: {
      send: object().shape({
        to: string().required().min(11).max(14).matches(/^\d+$/, 'Invalid Phone Number')
      }),
      status: object().shape({
        id: string().required().length(36),
        extended: _boolean()
      })
    }
  },
  whois: {
    v1: {
      lookup: object().shape({
        to: string().required().min(11).max(14).matches(/^\d+$/, 'Invalid Phone Number')
      })
    }
  },
  hlr: {
    v1: {
      send: object().shape({
        to: string().required().min(11).max(14).matches(/^\d+$/, 'Invalid Phone Number')
      }),
      status: object().shape({
        id: string().required().length(36),
        extended: _boolean()
      })
    }
  },
  voice: {
    v1: {
      send: object().shape({
        to: string().required().min(11).max(14).matches(/^\d+$/, 'Invalid Phone Number'),
        txt: string().required().min(1).max(5).matches(/^\d+$/, 'Invalid Code'),
        lang: string().oneOf(['ru', 'en'])
      }),
      status: object().shape({
        id: string().required().length(36),
        extended: _boolean()
      })
    }
  },
  pay: {
    v1: {
      send: object().shape({
        to: string().required().min(11).max(14).matches(/^\d+$/, 'Invalid Phone Number'),
        amount: number().required().min(1).positive()
      }),
      status: object().shape({
        id: string().required().length(36),
        extended: _boolean()
      })
    }
  },
  sms: {
    v1: {
      send: object().shape({
        to: string().required().min(11).max(14).matches(/^\d+$/, 'Invalid Phone Number'),
        txt: string().required().min(1),
        from: string().min(1),
        tag: string().min(1),
        hidden: string().min(1)
      }),
      status: object().shape({
        id: string().required().length(36),
        extended: _boolean()
      })
    }
  },
  viber: {
    v1: {
      send: object().shape({
        to: string().required().min(11).max(14).matches(/^\d+$/, 'Invalid Phone Number'),
        txt: string().required().min(1),
        from: string().min(1),
        cascade: string().oneOf(['sms', 'voice'])
      }),
      status: object().shape({
        id: string().required().length(36),
        extended: _boolean()
      })
    }
  }
};
var Modules = {
  account: {
    schema: ValidationSchema.account,
    versions: {
      v1: {
        balance: {
          args: null,
          method: 'GET'
        },
        token: {
          args: ['params'],
          method: 'POST'
        },
        tariff: {
          args: null,
          method: 'GET'
        }
      }
    }
  },
  call: {
    schema: ValidationSchema.call,
    versions: {
      v1: {
        send: {
          args: ['params'],
          method: 'POST'
        },
        status: {
          args: ['params'],
          method: 'GET'
        }
      }
    }
  },
  hlr: {
    schema: ValidationSchema.hlr,
    versions: {
      v1: {
        send: {
          args: ['params'],
          method: 'POST'
        },
        status: {
          args: ['params'],
          method: 'GET'
        }
      }
    }
  },
  pay: {
    schema: ValidationSchema.pay,
    versions: {
      v1: {
        send: {
          args: ['params'],
          method: 'POST'
        },
        status: {
          args: ['params'],
          method: 'GET'
        }
      }
    }
  },
  sms: {
    schema: ValidationSchema.sms,
    versions: {
      v1: {
        send: {
          args: ['params'],
          method: 'POST'
        },
        status: {
          args: ['params'],
          method: 'GET'
        }
      }
    }
  },
  viber: {
    schema: ValidationSchema.viber,
    versions: {
      v1: {
        send: {
          args: ['params'],
          method: 'POST'
        },
        status: {
          args: ['params'],
          method: 'GET'
        }
      }
    }
  },
  voice: {
    schema: ValidationSchema.voice,
    versions: {
      v1: {
        send: {
          args: ['params'],
          method: 'POST'
        },
        status: {
          args: ['params'],
          method: 'GET'
        }
      }
    }
  },
  whois: {
    schema: ValidationSchema.whois,
    versions: {
      v1: {
        lookup: {
          args: ['params'],
          method: 'GET'
        }
      }
    }
  },
  general: {
    schema: ValidationSchema.general,
    "static": true,
    versions: {
      v1: {
        status: {
          args: null,
          method: 'GET'
        }
      }
    }
  }
};

function getError(err) {
  return Object.assign({}, err.params, {
    message: err.message
  });
}
/**
 * Returns an Error object validating data against a schema
 * @param {Yup} yupSchema - Yup schema with rules
 * @param {object} objData - Data object to validate
 */


var validate = function validate(yupSchema, objData) {
  var errorResult = null;

  try {
    yupSchema.validateSync(objData, {
      strict: false,
      stripUnknown: true,
      abortEarly: false
    });
  } catch (err) {
    var errors = [];

    if (err.inner && err.inner.length > 0) {
      err.inner.forEach(function (error) {
        errors.push(error);
      });
    } else {
      errors.push(getError(err));
    }

    errorResult = {
      code: 1,
      error: 'Validation Error',
      params: errors
    };
  }

  return errorResult;
};

var ModuleLoader = /*#__PURE__*/function () {
  function ModuleLoader() {
    _classCallCheck(this, ModuleLoader);

    this.moduleMap = {};
  }

  _createClass(ModuleLoader, [{
    key: "registerModules",
    value: function registerModules(sharedOptions, filters) {
      var _this4 = this;

      if (!filters) {
        filters = {};
      }

      var currentVersion = sharedOptions.version; // Layered approach for Module > Version > Function

      var _loop = function _loop(moduleName) {
        if (!_this4.moduleMap[moduleName]) {
          _this4.moduleMap[moduleName] = {};
        }

        var moduleInfo = Modules[moduleName];
        var moduleVersions = moduleInfo.versions;
        var moduleSchema = moduleInfo.schema;

        if (filters.loadStatic === true && moduleInfo["static"] !== true) {
          return "continue";
        }

        var _loop2 = function _loop2(version) {
          if (!_this4.moduleMap[moduleName][version]) {
            _this4.moduleMap[moduleName][version] = {};
          }

          var versionFunctions = moduleVersions[version];

          var _loop3 = function _loop3(func) {
            if (_this4.moduleMap[moduleName][version][func]) {
              return "continue";
            }

            var funcDefinition = versionFunctions[func];
            var functionArgs = [];

            if (funcDefinition.args && funcDefinition.args.length > 0) {
              functionArgs = _toConsumableArray(funcDefinition.args);
            } // Define dynamic functions for each API


            _this4.moduleMap[moduleName][version][func] = function () {
              for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
              }

              var callback = null;
              var params = {};

              if (!args) {
                args = [];
              }

              var _args$slice = args.slice(-1),
                  _args$slice2 = _slicedToArray(_args$slice, 1),
                  lastItem = _args$slice2[0];

              if (lastItem && typeof lastItem === 'function') {
                callback = lastItem;
                args.pop();
              }

              if (args[0]) {
                // Assumption is to have params, callback as the parameters
                params = args[0];
              } // Build dynamic URL


              var urlArgs = [sharedOptions.baseUrl];

              if (moduleInfo["static"] !== true) {
                urlArgs.push(moduleName);
              }

              urlArgs.push(func);
              var apiUrl = buildUrl.apply(void 0, urlArgs);
              var promise = new Promise(function (resolve, reject) {
                var requestObj = {
                  uri: apiUrl,
                  method: funcDefinition.method
                }; // If API has params, then we validate and append to request object

                if (params) {
                  if (moduleSchema && moduleSchema[version] && moduleSchema[version][func]) {
                    var errors = validate(moduleSchema[version][func], params);

                    if (errors) {
                      return reject(errors);
                    }
                  }

                  requestObj.params = _objectSpread({}, params);
                }

                sharedOptions.restClient.request(requestObj).then(resolve)["catch"](reject);
              });

              if (callback !== null && typeof callback === 'function') {
                promise.then(function (data) {
                  return callback(null, data);
                })["catch"](function (err) {
                  return callback(err);
                });
              } else {
                return promise;
              }
            };

            if (version === currentVersion) {
              _this4.moduleMap[moduleName][func] = _this4.moduleMap[moduleName][version][func];
            }
          };

          for (var func in versionFunctions) {
            var _ret2 = _loop3(func);

            if (_ret2 === "continue") continue;
          }
        };

        for (var version in moduleVersions) {
          _loop2(version);
        }
      };

      for (var moduleName in Modules) {
        var _ret = _loop(moduleName);

        if (_ret === "continue") continue;
      }

      return this.moduleMap;
    }
  }]);

  return ModuleLoader;
}();

var instance = new ModuleLoader();
Object.freeze(instance); // Create a Singleton Instance

var GreenSMS = /*#__PURE__*/function () {
  /**
   * Initialize GreenSMS Client
   * @param {object} opts - Options
   * @param {string|null} opts.username - Username. Required when AuthToken is not passed
   * @param {string|null} opts.password - Password. Request when AuthToken is not passed
   * @param {string|null} opts.token - AuthToken. Required when Username/Password not passed
   * @param {boolean} opts.useTokenForRequests - Create Auth Token after login and use for subsequent requests
   * @param {String} opts.version - API Version to be used
   * @param {boolean} opts.camelCaseResponse - Convert all response keys to camelCase
   */
  function GreenSMS(opts) {
    _classCallCheck(this, GreenSMS);

    opts = opts || {};
    var _opts = opts,
        username = _opts.username,
        password = _opts.password,
        token = _opts.token,
        useTokenForRequests = _opts.useTokenForRequests,
        camelCaseResponse = _opts.camelCaseResponse,
        version = _opts.version;
    this.token = null;

    if (token) {
      this.token = token;
    }

    if (!token) {
      this.token = process.env.GREENSMS_TOKEN;
    }

    if (!token && !username) {
      username = process.env.GREENSMS_USER;
    }

    if (!token && !password) {
      password = process.env.GREENSMS_PASS;
    }

    if (!this.token && (!username || !password)) {
      throw new Error('Either User/Pass or Auth Token is required!');
    } else if (username) {
      this.username = username;
      this.password = password;
    }

    var sharedOptions = {
      useTokenForRequests: useTokenForRequests,
      version: getVersion(version),
      baseUrl: baseUrl(),
      restClient: this._getHttpClient({
        useCamelCase: camelCaseResponse
      })
    };
    this.addModules(sharedOptions);
  }

  _createClass(GreenSMS, [{
    key: "addModules",
    value: function addModules(sharedOptions) {
      var modules = instance.registerModules(sharedOptions);

      for (var moduleKey in modules) {
        var currentModule = modules[moduleKey];
        this[moduleKey] = currentModule;
      }
    }
  }, {
    key: "_getHttpClient",
    value: function _getHttpClient(httpParams) {
      httpParams = httpParams || {};
      var params = {};

      if (!this.token && this.username) {
        params.user = this.username;
        params.pass = this.password;
      }

      var httpClientOptions = _objectSpread(_objectSpread({}, httpParams), {
        token: this.token,
        params: params
      });

      var restClient = new RestClient(httpClientOptions);
      return restClient;
    }
  }]);

  return GreenSMS;
}();

export default GreenSMS;
(function () {
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequired7c6"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequired7c6"] = parcelRequire;
}

var $1jxie = parcelRequire("1jxie");

var $byLkN = parcelRequire("byLkN");
function $17d7162282a98195$var$getRandomHexColor() {
    return "#".concat(Math.floor(Math.random() * 16777215).toString(16));
}
var $17d7162282a98195$var$intervalId;
function $17d7162282a98195$var$startChangingColor() {
    return $17d7162282a98195$var$_startChangingColor.apply(this, arguments);
}
function $17d7162282a98195$var$_startChangingColor() {
    $17d7162282a98195$var$_startChangingColor = (0, (/*@__PURE__*/$parcel$interopDefault($1jxie)))((0, (/*@__PURE__*/$parcel$interopDefault($byLkN))).mark(function _callee1() {
        return (0, (/*@__PURE__*/$parcel$interopDefault($byLkN))).wrap(function _callee$(_ctx1) {
            while(1)switch(_ctx1.prev = _ctx1.next){
                case 0:
                    if (!$17d7162282a98195$var$intervalId) {
                        document.getElementById("start").disabled = true;
                        document.getElementById("stop").disabled = false;
                        $17d7162282a98195$var$intervalId = setInterval((0, (/*@__PURE__*/$parcel$interopDefault($1jxie)))((0, (/*@__PURE__*/$parcel$interopDefault($byLkN))).mark(function _callee() {
                            return (0, (/*@__PURE__*/$parcel$interopDefault($byLkN))).wrap(function _callee$(_ctx) {
                                while(1)switch(_ctx.prev = _ctx.next){
                                    case 0:
                                        document.body.style.backgroundColor = $17d7162282a98195$var$getRandomHexColor();
                                    case 1:
                                    case "end":
                                        return _ctx.stop();
                                }
                            }, _callee);
                        })), 1000);
                    }
                case 1:
                case "end":
                    return _ctx1.stop();
            }
        }, _callee1);
    }));
    return $17d7162282a98195$var$_startChangingColor.apply(this, arguments);
}
function $17d7162282a98195$var$stopChangingColor() {
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
    clearInterval($17d7162282a98195$var$intervalId);
    $17d7162282a98195$var$intervalId = null;
}

})();
//# sourceMappingURL=01-color-switcher.e73e66a2.js.map

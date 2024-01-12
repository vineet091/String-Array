// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"iZQ9B":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "16df5292ac9dc4ba";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"aR1JP":[function(require,module,exports) {
var _stylesCss = require("./styles.css");
// Input: s = "101023"
// Output: ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
var outputIpArray = [];
function findValidIPs(str, currentIP, index = 0) {
    if (str) {
        if (index === 1 && str.length > 9 || index === 2 && str.length > 6 || index === 3 && str.length > 3 || index === 3 && str.length > 1 && parseInt(str[0]) === 0 || index === 3 && parseInt(str, 10) > 255) return;
        var validIPDigits = index === 3 ? [
            str
        ] : [
            str[0]
        ];
        if (index !== 3) {
            let lastValidIPDigit = str[0];
            for(var i = 1; i < 3; i++){
                var currentValidIP = lastValidIPDigit;
                if (parseInt(str[0]) !== 0 && str[i]) {
                    currentValidIP += str[i];
                    if (parseInt(currentValidIP, 10) <= 255) {
                        validIPDigits.push(currentValidIP);
                        lastValidIPDigit = currentValidIP;
                    }
                }
            }
        }
        for(var j = 0; j < validIPDigits.length; j++){
            var ip = validIPDigits[j];
            if (index === 3) outputIpArray.push(currentIP + ip);
            else {
                var remStr = str.slice(ip.length, str.length);
                const nextIndex = index + 1;
                findValidIPs(remStr, currentIP + ip + ".", nextIndex);
            }
        }
    }
}
findValidIPs("101023", "", 0);
console.log("outputArray", outputIpArray);
// Max Sum in Array
// var a = [-2, -3, 4, -1, -2, 1, 5, -3];
// var max_sum = a[0];
// var max_range = a[0];
// for (var i = 0; i < a.length; i++) {
//   max_range = a[i] > max_range + a[i] ? a[i] : max_range + a[i];
//   max_sum = max_sum > max_range ? max_sum : max_range;
// }
// console.log(max_sum);
// Max Product in an array
// var a = [-2, -3, 4, 1, -2, 5, 1, 7, -3];
// var max_product = a[0];
// var max_range = a[0];
// for (var i = 0; i < a.length; i++) {
//   max_range = a[i] > max_range * a[i] ? a[i] : max_range * a[i];
//   max_product = max_product > max_range ? max_product : max_range;
// }
// console.log(max_product);
// Max substring with unique characters
var str = "gksforeegkd";
var substrLn = 1;
var substr = "";
for(var i = 0; i < str.length; i++){
    var obj = {};
    for(var j = i; j < str.length; j++){
        if (obj[str[j]]) break;
        else {
            obj[str[j]] = true;
            substrLn = Math.max(substrLn, j - i + 1);
            substr = substrLn > j - i + 1 ? substr : str.slice(i, i + substrLn);
        }
    }
}
console.log(substrLn, substr);
// Max substring with unique characters in O(n)
// var str = "gksforeegkd";
// var substrLn = 0;
// var substr = "";
// var lastIndex = {};
// var i = 0;
// for (var j = i; j < str.length; j++) {
//   i = Math.max(i, lastIndex[str[j]] ? lastIndex[str[j]] + 1 : 0);
//   substrLn = Math.max(substrLn, j - i + 1);
//   substr = substrLn > j - i + 1 ? substr : str.slice(i, i + substrLn);
//   lastIndex[str[j]] = j;
// }
// console.log(substr, lastIndex);
// Max pallindrome substring
// var str = "geviniveraard";
// var substrLn = 1;
// var start = 0;
// var substr = "";
// for (var i = 0; i < str.length; i++) {
//   for (var j = i; j < str.length; j++) {
//     var flag = 1;
//     for (var k = 0; k < (j - i + 1) / 2; k++) {
//       if (str[k + i] !== str[j - k]) {
//         flag = 0;
//       }
//     }
//     if (flag && j - i + 1 > substrLn) {
//       substrLn = j - i + 1;
//       start = i;
//     }
//   }
// }
// substr = str.slice(start, start + substrLn);
// console.log(substrLn, substr);
// check pallindrome
// var str = "geviniveg";
// var flag = true;
// for (var i = 0; i < str.length / 2; i++) {
//   if (str[i] !== str[str.length - 1 - i]) {
//     flag = false;
//   }
// }
// console.log(flag);
// revere a string
// var str = "hello";
// var rev = [];
// for (var k = 0; k < str.length / 2; k++) {
//   rev[k] = str[str.length - k];
//   rev[str.length - k] = str[k];
// }
// console.log(rev.join(""));
// reverse a words in a string
// var str = "hello how are you";
// var strArray = str.split(" ");
// var revArray = [];
// for (var i = 0; i < strArray.length; i++) {
//   var subStr = strArray[i];
//   var rev = [];
//   for (var k = 0; k < subStr.length / 2; k++) {
//     rev[k] = subStr[subStr.length - k];
//     rev[subStr.length - k] = subStr[k];
//   }
//   revArray.push(rev.join(""));
// }
// console.log(revArray.join(" "));
// Check anagram
// var str1 = "listenn";
// var str2 = "silnnt";
// var objCount = {};
// for (var i = 0; i < str1.length; i++) {
//   if (objCount[str1[i]]) {
//     objCount[str1[i]]++;
//   } else {
//     objCount[str1[i]] = 1;
//   }
// }
// for (var j = 0; j < str2.length; j++) {
//   var count = objCount[str2[j]] || 0;
//   objCount[str2[j]] = count - 1;
// }
// var flag = true;
// for (var item in objCount) {
//   if (objCount[item] !== 0) {
//     flag = false;
//   }
// }
// console.log(flag);
// sort an array
// var ar1 = [1, 5, 7, 9, 2, 6, 5, 3];
// console.log(ar1.sort());
// ar1.sort((a, b) => {
//   return a > b ? 1 : -1;
// });
// console.log(ar1);
// for (var i = 0; i < ar1.length; i++) {
//   for (var k = i + 1; k < ar1.length; k++) {
//     if (ar1[i] > ar1[k]) {
//       var swap = ar1[i];
//       ar1[i] = ar1[k];
//       ar1[k] = swap;
//     }
//   }
// }
// console.log(ar1);
// Sort an array with negative index not changed
// var ar1 = [1, -5, 7, 9, -2, 6, 5, -3];
// for (var i = 0; i < ar1.length; i++) {
//   for (var k = i + 1; k < ar1.length; k++) {
//     if (ar1[i] > 0 && ar1[k] > 0 && ar1[i] > ar1[k]) {
//       var swap = ar1[i];
//       ar1[i] = ar1[k];
//       ar1[k] = swap;
//     }
//   }
// }
// console.log(ar1);
// Merge 2 sorted array
// var ar1 = [1, 4, 7, 8];
// var ar2 = [1, 2, 3, 5, 6];
// var ar = [];
// var maxLen = ar1.length + ar2.length;
// var k = 0;
// var j = 0;
// for (var i = 0; i < maxLen; i++) {
//   if (ar1[j] && ar2[k]) {
//     if (ar1[j] < ar2[k]) {
//       ar[i] = ar1[j];
//       j++;
//     } else {
//       ar[i] = ar2[k];
//       k++;
//     }
//   } else if (ar1[j]) {
//     ar[i] = ar1[j];
//     j++;
//   } else if (ar2[k]) {
//     ar[i] = ar2[k];
//     k++;
//   }
// }
// console.log(ar);
// Merge 2 sorted array with unique value
// var ar1 = [2, 4, 5, 7, 9, 9];
// var ar2 = [1, 2, 3, 5, 6];
// var ar = [];
// var j = 0; //ar1
// var k = 0; //ar2
// var i = 0; //ar
// let loop = true;
// var objExist = new Map();
// while (loop) {
//   if (ar1[j] && ar2[k]) {
//     if (objExist[ar1[j]]) {
//       j++;
//     } else if (objExist[ar2[k]]) {
//       k++;
//     } else if (ar1[j] < ar2[k]) {
//       ar[i] = ar1[j];
//       objExist[ar1[j]] = true;
//       j++;
//       i++;
//     } else {
//       ar[i] = ar2[k];
//       objExist[ar2[k]] = true;
//       k++;
//       i++;
//     }
//   } else if (ar1[j]) {
//     if (objExist[ar1[j]]) {
//       j++;
//     } else {
//       ar[i] = ar1[j];
//       objExist[ar1[j]] = true;
//       j++;
//       i++;
//     }
//   } else if (ar2[k]) {
//     if (objExist[ar2[k]]) {
//       k++;
//     } else {
//       ar[i] = ar2[k];
//       objExist[ar2[k]] = true;
//       k++;
//       i++;
//     }
//   }
//   if (!ar1[j] && !ar2[k]) {
//     loop = false;
//   }
// }
// console.log(ar);
//sort a string
// var str = "sajhaseiowi";
// console.log(
//   str
//     .split("")
//     .sort((a, b) => {
//       return a.charCodeAt(0) > b.charCodeAt(0) ? 1 : -1;
//     })
//     .join("")
// );
// Traverse a 2d array
// var arr = [
//   [1, 2, 3, 4, 5, 21],
//   [6, 7, 8, 9, 10, 22],
//   [11, 12, 13, 14, 15, 23],
//   [16, 17, 18, 19, 20, 24]
// ];
// var result = [];
// var count = 0;
// var loop = true;
// var i = 0;
// var j = 0;
// var iMax = arr.length - 1;
// var iMin = 0;
// var jMax = arr[0].length - 1;
// var jMin = 0;
// var direction = 1;
// while (loop && count < 30) {
//   result.push(arr[i][j]);
//   if (direction === 1 && i === iMax && j === jMin && jMax > jMin) {
//     jMin = jMin + 1;
//     direction = 2;
//   } else if (direction === 2 && i === iMax && j === jMax) {
//     if (iMax > iMin) {
//       iMax = iMax - 1;
//     } else if (jMax > jMin) {
//       jMin = jMin + 1;
//     }
//     direction = 3;
//   } else if (direction === 3 && i === iMin && j === jMax && jMax > jMin) {
//     direction = 4;
//     jMax = jMax - 1;
//   } else if (direction === 4 && j === jMin && i === iMin) {
//     if (iMax > iMin) {
//       iMin = iMin + 1;
//     } else if (jMax > jMin) {
//       jMax = jMax - 1;
//     }
//     direction = 1;
//   }
//   if (direction === 1) {
//     if (i < iMax) i = i + 1;
//   } else if (direction === 2) {
//     if (j < jMax) j = j + 1;
//   } else if (direction === 3) {
//     if (i > iMin) i = i - 1;
//   } else if (direction === 4) {
//     if (j > jMin) j = j - 1;
//   }
//   if (iMin === iMax && jMin === jMax) {
//     loop = false;
//   }
//   count++;
// }
// console.log(result);
// console.log(performance.now());
// Traverse a 2d array
// var arr = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10],
//   [11, 12, 13, 14, 15],
//   [16, 17, 18, 19, 20]
// ];
// var count = 0;
// var loop = true;
// var i = 0;
// var j = 0;
// var iMax = arr.length - 1;
// var iMin = 0;
// var jMax = arr[0].length - 1;
// var jMin = 0;
// var direction = 1;
// while (loop && count < 30) {
//   console.log(arr[i][j], iMin, iMax, jMin, jMax, direction);
//   if (direction === 1 && i === iMin && j === jMax) {
//     if (iMax > iMin) {
//       iMin = iMin + 1;
//     } else if (jMin > jMax) {
//       jMax = jMax - 1;
//     }
//     direction = 2;
//   } else if (direction === 2 && i === iMax && j === jMax) {
//     if (jMax > jMin) {
//       jMax = jMax - 1;
//     } else if (iMax > iMin) {
//       iMax = iMax - 1;
//     }
//     direction = 3;
//   } else if (direction === 3 && i === iMax && j === jMin) {
//     if (iMax > iMin) {
//       iMax = iMax - 1;
//     } else if (jMin < jMax) {
//       jMin = jMin + 1;
//     }
//     direction = 4;
//   } else if (direction === 4 && j === jMin && i === iMin) {
//     if (jMax > jMin) {
//       jMin = jMin + 1;
//     } else if (iMax > iMin) {
//       iMin = iMin + 1;
//     }
//     direction = 1;
//   }
//   if (direction === 1) {
//     if (j < jMax) j = j + 1;
//   } else if (direction === 2) {
//     if (i < iMax) i = i + 1;
//   } else if (direction === 3) {
//     if (j > jMin) j = j - 1;
//   } else if (direction === 4) {
//     if (i > iMin) i = i - 1;
//   }
//   if (iMin === iMax && jMin === jMax) {
//     loop = false;
//   }
//   count++;
// }
// var arr = [
//   [1, 2, 3, 4, 5, 21],
//   [6, 7, 8, 9, 10, 22],
//   [11, 12, 13, 14, 15, 23],
//   [16, 17, 18, 19, 20, 24]
// ];
// /* SAMPLE OUTPUT
// [1, 6, 11, 16, 17, 18, 19, 20, 15, 10, 5, 4, 3, 2, 7, 12, 13, 14, 9, 8]
// */
// var minr = 0,
//   minc = 0,
//   maxr = arr.length,
//   maxc = arr[0].length,
//   n = maxr * maxc,
//   counter = 0,
//   result = [];
// while (counter < n) {
//   //left wall
//   for (let i = minr; i < maxr; i++) {
//     result.push(arr[i][minc]);
//     counter++;
//   }
//   minc = minc + 1;
//   //bottom wall
//   for (let j = minc; j < maxc; j++) {
//     result.push(arr[maxr - 1][j]);
//     counter++;
//   }
//   maxr = maxr - 1;
//   //right wall
//   for (let i = maxr - 1; i >= minr; i--) {
//     result.push(arr[i][maxc - 1]);
//     counter++;
//   }
//   maxc = maxc - 1;
//   //top wall
//   for (let j = maxc - 1; j >= minc; j--) {
//     result.push(arr[minr][j]);
//     counter++;
//   }
//   minr = minr + 1;
// }
// console.log(result.join(" "));
// console.log(performance.now());
// Find 2nd smallest number
// var arr = [5, 5, 76, 3, 4, 2198];
// var smallest = Math.min(arr[0], arr[1]);
// var smallest2 = Math.max(arr[0], arr[1]);
// for (var i = 2; i < arr.length; i++) {
//   if (arr[i] < smallest && arr[i] < smallest2) {
//     smallest2 = smallest;
//     smallest = arr[i];
//   } else if (arr[i] < smallest2) {
//     smallest2 = arr[i];
//   }
// }
// console.log(smallest2);
// Max number of anagram substring
// var str = "geeg";
// var anagramPairCount = 0;
// var obj = {};
// for (var i = 0; i < str.length; i++) {
//   for (var j = i; j < str.length; j++) {
//     var substr = str.slice(i, j + 1);
//     substr = substr
//       .split("")
//       .sort((a, b) => {
//         return a.charCodeAt(0) > b.charCodeAt(0) ? 1 : -1;
//       })
//       .join("");
//     if (obj[substr]) {
//       obj[substr]++;
//     } else {
//       obj[substr] = 1;
//     }
//   }
// }
// for (var item in obj) {
//   var n = obj[item];
//   anagramPairCount += (n * (n - 1)) / 2;
// }
// console.log(anagramPairCount);
// Max Substring with left hand sum = right hand sum
// var str = "1336129";
// var maxSubstring = str[0];
// for (var i = 0; i < str.length; i++) {
//   for (var j = i; j < str.length; j++) {
//     var subStr = str.slice(i, j + 1);
//     var subStrLn = subStr.length;
//     var lhs = 0;
//     var rhs = 0;
//     if (subStrLn % 2 === 0) {
//       for (var k = 0; k < subStrLn / 2; k++) {
//         lhs += parseInt(subStr[k]);
//         rhs += parseInt(subStr[subStrLn - 1 - k]);
//         if (lhs === rhs && maxSubstring.length < subStrLn) {
//           maxSubstring = subStr;
//         }
//       }
//     }
//   }
// }
// console.log(maxSubstring);
// Number of distinct pair having differnece = k
// var numbers = [1, 1, 2, 2];
// var k = 1;
// // Write your code here
// var count = 0; // Initialize count
// // Initialize empty hashmap.
// var hashmap = new Map();
// // Insert array elements to hashmap
// for (var i = 0; i < numbers.length; i++) hashmap[numbers[i]] = true;
// for (var j = 0; j < numbers.length; j++) {
//   var x = numbers[j];
//   if (hashmap[x + k]) count++;
//   hashmap[x + k] = false;
// }
// console.log("counts", count, hashmap);
// max subsequent substring between 2 strings
// function compare(str1, str2) {
//   var maxSubsLn = 0;
//   var subString = "";
//   for (var i = 0; i < str2.length; i++) {
//     var count = 0;
//     var newChars = "";
//     var k = 0;
//     var l = i;
//     while (k < str1.length && l < str2.length) {
//       if (str1[k] === str2[l]) {
//         count++;
//         newChars += str2[l];
//         k++;
//         l++;
//       } else {
//         k++;
//       }
//     }
//     if (maxSubsLn < count) {
//       subString = newChars;
//     }
//     maxSubsLn = Math.max(maxSubsLn, count);
//   }
//   console.log(subString, maxSubsLn);
//   return maxSubsLn;
// }
// var count = compare("actgattag", "gtgtgatcg");
// console.log(count);
// 2nd method Max count of subsequential substring between two string
// var str1 = "actgattag";
// var str2 = "gtgtgatcg";
// var maxSubsLn = 0;
// var MAX = 10;
// var dp = Array.from(Array(MAX), () => Array(MAX));
// // Initialize the dp[][] to 0.
// for (var i = 0; i <= str1.length; i++) {
//   for (var j = 0; j <= str2.length; j++) {
//     dp[i][j] = 0;
//   }
// }
// Calculating value for each element.
// for (var i = 1; i <= str1.length; i++) {
//   for (var j = 1; j <= str2.length; j++) {
//     // If alphabet of string X and Y are
//     // equal make dp[i][j] = 1 + dp[i-1][j-1]
//     if (str1[j - 1] === str2[i - 1]) {
//       dp[i][j] = 1 + dp[i - 1][j - 1];
//     }
//     // Else copy the previous value in the
//     // row i.e dp[i-1][j-1]
//     else dp[i][j] = dp[i][j - 1];
//   }
// }
// // Finding the maximum length.
// for (var k = 1; k <= str1.length; k++) {
//   maxSubsLn = Math.max(maxSubsLn, dp[k][str2.length]);
// }
// console.log(maxSubsLn, dp);
// rearange array such that
// a < b > c < d > e < f > g;
// function reaarange(arr) {
//   var ar = arr.sort();
//   for (var j = 1; j < arr.length - 1; j += 2) {
//     var sw = ar[j];
//     ar[j] = ar[j + 1];
//     ar[j + 1] = sw;
//   }
//   console.log(ar);
// }
// reaarange([4, 3, 7, 8, 6, 2, 1]);
// Priorty Queue
function myPriortyQueue() {
    var list = [];
    this.enque = function(obj) {
        var listLn = list.length;
        if (!listLn) {
            list.push(obj);
            return;
        }
        for(var i = 0; i < listLn; i++)if (list[i].priorty < obj.priority) {
            list.splice(i, 0, obj);
            return;
        }
    };
    this.deque = function() {
        if (!list.length) return;
        list.shift();
    };
}
// Check for valid Parenthesis
// var parenthesisMap = {
//   "]": "[",
//   ")": "(",
//   "}": "{"
// };
// var parenthesisSet = ["[", "]", "{", "}", "(", ")"];
// function checkParenthesis(str) {
//   var parenthesisArray = [];
//   for (var i = 0; i < str.length; i++) {
//     if (parenthesisSet.indexOf(str[i]) > -1) {
//       if (
//         parenthesisMap[str[i]] &&
//         parenthesisMap[str[i]] === parenthesisArray[parenthesisArray.length - 1]
//       ) {
//         parenthesisArray.pop();
//       } else {
//         parenthesisArray.push(str[i]);
//         console.log(parenthesisArray);
//       }
//     }
//   }
//   return parenthesisArray.length ? false : true;
// }
// console.log(checkParenthesis("[A+(C*D)]"));
// Consider the following series:
// A := 1
// B := A*2 + 2
// C := B*2 + 3
// D := C*2 +4and so on...
// "ABC"  1+4+11 == 16
//1, 4, 11, 16
//Write a program that:
// outputs the number corresponding to a given letter and sum of count
// ex: "GREP"
// function memorize() {
//   var res = {};
//   var ab = function (chr) {
//     if (res[chr]) {
//       return res[chr];
//     }
//     var prevCharCode = chr.charCodeAt(0) - 1;
//     if (prevCharCode >= 65) {
//       var prevChar = String.fromCharCode(prevCharCode);
//       if (res[prevChar]) {
//         res[chr] = 2 * res[prevChar] + chr.charCodeAt(0) - 64;
//         return res[chr];
//       }
//       var prevRes = ab(prevChar);
//       var result = 2 * prevRes + chr.charCodeAt(0) - 64;
//       res[prevChar] = prevRes;
//       return result;
//     } else {
//       return 1;
//     }
//   };
//   return {
//     ab: ab
//   };
// }
// var memoObj = new memorize();
// function getValue(str) {
//   var sum = 0;
//   for (var i = 0; i < str.length; i++) {
//     sum += memoObj.ab(str[i]);
//   }
//   console.log(sum);
// }
// getValue("GREP");
function calculateSum(x, y) {
    var carry = 0;
    var res = "";
    var partialSum = 0;
    var maxLn = Math.max(x.length, y.length);
    for(var l = 0; l < maxLn; l++){
        if (x.length - 1 - l >= 0 && y.length - 1 - l >= 0) partialSum = parseInt(x[x.length - 1 - l]) + parseInt(y[y.length - 1 - l]);
        else if (x.length - 1 - l >= 0) partialSum = parseInt(x[x.length - 1 - l]);
        else if (y.length - 1 - l >= 0) partialSum = parseInt(y[y.length - 1 - l]);
        if (carry) partialSum += carry;
        if (partialSum > 9) {
            carry = parseInt(partialSum / 10, 10);
            partialSum = partialSum % 10;
        } else carry = 0;
        res = partialSum.toString() + res;
    }
    if (carry) res = carry + res;
    return res;
}
console.log(calculateSum("0", "0"));
console.log(calculateSum("25", "19"));
console.log(calculateSum("84", "17"));
console.log(calculateSum("649", "54"));
console.log(calculateSum("649555", "45"));
// Get Mean of array
const arr = [
    2,
    3,
    4,
    6,
    8,
    10
]; // [2.5, 3.5, 5, 7, 9]
const size = 5;
function getAverages(arr, size) {
    var res = [];
    var counter = 0;
    var sum = 0;
    var i = -1;
    while(i < arr.length){
        if (counter === size) {
            res.push(sum / size);
            counter = 0;
            sum = 0;
            i = res.length;
        } else i++;
        sum += arr[i];
        counter++;
    }
    return res;
}
console.log(getAverages(arr, size));
// https://learnersbucket.com/examples/algorithms/trapping-rain-water-in-javascript/
// 10010 -> one thousand and ten
var height1 = [
    0,
    1,
    0,
    2,
    1,
    0,
    1,
    3,
    2,
    1,
    2,
    1
];
function waterTrap(height) {
    var water = 0;
    var leftMax = -1;
    var rightMax = -1;
    var left = 0;
    var right = height.length - 1;
    while(left < right){
        leftMax = Math.max(height[left], leftMax);
        rightMax = Math.max(height[right], rightMax);
        if (leftMax > rightMax) {
            water += rightMax - height[right];
            right--;
        } else {
            water += leftMax - height[left];
            left++;
        }
    }
    return water;
}
console.log(waterTrap(height1));
//traversing obj
const obj1 = {
    one: 1,
    two: {
        three: 3
    },
    four: {
        five: 5,
        six: {
            seven: 7
        },
        eight: 8
    },
    nine: 9
};
function traveseObj(parent, obj, newKey) {
    // {three: 3}
    if (obj) for(var key in obj){
        var nkey = newKey ? `${newKey}.${key}` : key;
        var value;
        if (typeof obj[key] === "object") traveseObj(parent, obj[key], nkey);
        else {
            value = obj[key];
            parent[nkey] = value;
        }
    }
    return parent;
}
console.log("traverse", traveseObj({}, obj1, ""));
// const output = {
//   one: 1,
//   "two.three": 3,
//   "four.five": 5,
//   "four.six.seven": 7,
//   "four.eight": 8,
//   nine: 9,
// };
//No. of permutation and combination
function getPermutation(str1, obj = {}) {
    var res = [];
    for(var j = 0; j < str1.length; j++){
        var currChar = str1[j];
        if (!obj[currChar]) {
            obj[currChar] = true;
            res.push(currChar);
        }
        var substr = currChar;
        var substr1 = currChar;
        for(var k = 0; k < str1.length; k++){
            if (k !== j) substr += str1[k];
            if (str1.length - 1 - k !== j) substr1 += str1[str1.length - 1 - k];
            if (!obj[substr]) {
                obj[substr] = true;
                res.push(substr);
            }
            if (!obj[substr1]) {
                obj[substr1] = true;
                res.push(substr1);
            }
        }
        const remainder = str1.slice(0, j) + str1.slice(j + 1, str1.length);
        res = res.concat(getPermutation(remainder, obj));
    }
    return res;
}
console.log("permutaion1", getPermutation("abcd"));
const stringPermutations = (str)=>{
    if (str.length <= 2) return str.length === 2 ? [
        str,
        str[1] + str[0]
    ] : [
        str
    ];
    return str.split("").reduce((acc, letter, i)=>acc.concat(stringPermutations(str.slice(0, i) + str.slice(i + 1)).map((val)=>letter + val)), []);
};
console.log("strprmutation1", stringPermutations("abc"));
function fibnacciSeries(num) {
    if (num <= 1) return [
        0,
        1
    ];
    else {
        var s = fibnacciSeries(num - 1);
        s.push(s[s.length - 1] + s[s.length - 2]);
    }
    return s;
}
console.log("fibnacciSeries", fibnacciSeries(5));
// const arr = [1,2,3,4,5, 3,3,3,3, 2,4, 6,0, -1,7]
// const sum = 6;
// var map1 = {
//     1: 1,
//     5: 1,
//     3: 5,
// }
// function getpair1(){
//       var map1 = {}
//     for(var i=0;i< arr.length;i++) {
//           if(map1[arr[i]]) {
//               map1[arr[i]]++;
//           } else {
//               map1[arr[i]] = 1;
//           }
//     }
// }
// // [[1,5],[2,4],[3,3],[3,3]]
// // function getPairs(arr1, sum1) {
// //     var result = [];
// //     var indexCovered = {};
// //         for(var i=0;i< arr1.length -1;i++) {
// //         var initValue = arr1[i];
// //         for(var j=i+1;j< arr1.length/2;j++) {
// //             if(arr1[j] + initValue === sum1 && !indexCovered[i]  && !indexCovered[j]) {
// //                 var pair = [initValue, arr1[j]];
// //                 result.push(pair);
// //                 indexCovered[i] = true;
// //                 indexCovered[j] = true;
// //             }
// //              if(arr1[arr1.length -1 - j] + initValue === sum1 && !indexCovered[i]  && !indexCovered[arr1.length -1 - j]) {
// //                 var pair = [initValue, arr1[arr1.length -1 - j]];
// //                 result.push(pair);
// //                 indexCovered[i] = true;
// //                 indexCovered[arr1.length -1 - j] = true;
// //             }
// //         }
// //     }
// //     return result;
// // }
// console.log(getPairs(arr, sum));
// const arr1 = ["aab", "aba", "abc", "cb", "cba"];
// [false,true, false, false, true]
// function getAnagram(arr) {
//   var result = [];
//   result.push(false);
//   for (var i = 1; i < arr.length; i++) {
//     var currStr = arr[i];
//     var sortStr = currStr
//       .split("")
//       .sort((a, b) => {
//         return a.charCodeAt(0) > b.charCodeAt(0) ? 1 : -1;
//       })
//       .join("");
//     for (var j = 0; j < i; j++) {
//       var ismatched = false;
//       var compareTo = arr[j];
//       var sortStr2 = compareTo
//         .split("")
//         .sort((a, b) => {
//           return a.charCodeAt(0) > b.charCodeAt(0) ? 1 : -1;
//         })
//         .join("");
//       if (sortStr === sortStr2) {
//         ismatched = true;
//         break;
//       }
//     }
//     result.push(ismatched);
//   }
//   return result;
// }
// console.log(getAnagram(arr1));
// const obj1 = {
//   a: {
//     b: {
//       b1: "test",
//       b2: "test2"
//     },
//     c: {
//       ac: {
//         acc: 42
//       }
//     }
//   }
// };
// const res = { a_b_b1: "test", a_b_b2: "test2", a_b_c_ac_acc: 42 };
// function convert(obj, key = "", res = {}) {
//   for (var key1 in obj) {
//     //a
//     var prop1 = key ? key + `_${key1}` : key1;
//     if (typeof obj[key1] === "object") {
//       convert(obj[key1], prop1, res);
//     } else {
//       res[prop1] = obj[key1];
//     }
//   }
//   return res;
// }
let numbers = [
    [
        1,
        "x",
        "x"
    ],
    [
        "x",
        "x",
        "x"
    ],
    [
        3,
        "s",
        "x"
    ],
    [
        4,
        "x",
        "x"
    ]
];
// Rows: [1] Cols:[2]
function checkX(arr) {
    var Rows = [];
    var Cols = [];
    var lastCol = {};
    for(var i = 0; i < arr.length; i++){
        var isRow = true;
        var arr2 = arr[i];
        for(var j = 0; j < arr2.length; j++)if (arr2[j] === "x" && (i === 0 || lastCol[j])) lastCol[j] = true;
        else {
            if (arr2[j] !== "x") isRow = false;
            lastCol[j] = false;
        }
        if (isRow) Rows.push(i);
    }
    for(var k in lastCol)if (lastCol[k]) Cols.push(k);
    return {
        Rows: Rows,
        Cols: Cols
    };
}
console.log(checkX(numbers));
// mergeSort
// function merge_Arrays(left_sub_array, right_sub_array) {
//   let array = [];
//   while (left_sub_array.length && right_sub_array.length) {
//     if (left_sub_array[0] < right_sub_array[0]) {
//       array.push(left_sub_array.shift());
//     } else {
//       array.push(right_sub_array.shift());
//     }
//   }
//   return [...array, ...left_sub_array, ...right_sub_array];
// }
// function merge_sort(unsorted_Array) {
//   const middle_index = unsorted_Array.length / 2;
//   if (unsorted_Array.length < 2) {
//     return unsorted_Array;
//   }
//   const left_sub_array = unsorted_Array.splice(0, middle_index);
//   return merge_Arrays(merge_sort(left_sub_array), merge_sort(unsorted_Array));
// }
function swap(arr, i, j) {
    var curr = arr[i];
    arr[i] = arr[j];
    arr[j] = curr;
}
function partition(arr, left, right) {
    let i = left - 1;
    var pivot = arr[right];
    for(var j = left; j < right; j++)if (arr[j] < pivot) {
        i++;
        swap(arr, i, j);
    }
    arr[right] = arr[i + 1];
    arr[i + 1] = pivot;
    return i + 1;
}
function quicksort(arr, left, right) {
    var pivot = partition(arr, left, right);
    if (left < pivot - 1) quicksort(arr, left, pivot - 1);
    if (right > pivot + 1) quicksort(arr, pivot + 1, right);
    return arr;
}
// O(n log n) for best case and average case, O(n^2) for the worst case.
var arr1 = [
    5,
    7,
    28,
    6,
    9,
    2,
    12
];
console.log(quicksort(arr1, 0, 6));
function findPermutation(str) {
    if (str.length < 2) return [
        str
    ];
    let permutaionArray = [];
    for(let i = 0; i < str.length; i++){
        let char = str[i];
        let remainingStr = str.slice(0, i) + str.slice(i + 1, str.length);
        for (let str1 of findPermutation(remainingStr))permutaionArray.push(char + str1);
    }
    return permutaionArray;
}
console.log("permu", findPermutation("aabc"));
// Find ways to reach matrix m*n last index
// Can traverse only right and down
// Ex = [[1, 2, 3]
//       [4, 5, 6]]; total ways = 3
// for value 1 = ways of 2 + ways of 3 to reach 6
// for value 2 = 1(via 5) + 1(via 3)
//for value 4 = 1(via 5)
function findWays(matrix, currRow, currCol) {
    if (matrix.length - 1 === currRow && matrix[0].length - 1 === currCol) return 1;
    else {
        let ways = 0;
        if (currRow + 1 <= matrix.length - 1) ways += findWays(matrix, currRow + 1, currCol);
        if (currCol + 1 <= matrix[0].length - 1) ways += findWays(matrix, currRow, currCol + 1);
        return ways;
    }
}
const matrix = Array.from(Array(3), (row, index)=>Array.from(Array(5), (col, j)=>index * 5 + j + 1));
console.log(findWays(matrix, 0, 0));

},{"./styles.css":"lW6qc"}],"lW6qc":[function() {},{}]},["iZQ9B","aR1JP"], "aR1JP", "parcelRequirebaba")

//# sourceMappingURL=index.ac9dc4ba.js.map

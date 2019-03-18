"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
const FILE = __importStar(require("./types/file"));
const JS = __importStar(require("./types/js"));
const TS = __importStar(require("./types/ts"));
const HTML = __importStar(require("./types/html"));
const Css = __importStar(require("./types/css"));
const JSON = __importStar(require("./types/json"));
var readScript;
(function (readScript) {
    readScript.file = FILE.file;
    readScript.js = JS.js;
    readScript.ts = TS.ts;
    readScript.html = HTML.html;
    readScript.css = Css.css;
    readScript.json = JSON.json;
})(readScript || (readScript = {}));
module.exports = readScript;

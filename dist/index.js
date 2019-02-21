"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var JS = __importStar(require("./types/js"));
var TS = __importStar(require("./types/ts"));
var readScript;
(function (readScript) {
    readScript.js = JS.js;
    readScript.ts = TS.ts;
})(readScript || (readScript = {}));
module.exports = readScript;

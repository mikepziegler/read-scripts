"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util/util");
const file_1 = require("./file");
const util = new util_1.Utilities();
class js extends file_1.file {
    getOneLineC(file) {
        this.output = util.getCode(file);
        this.comments = util.cutRegex(this.output, /\/{2}(.*)/g);
        return this.comments;
    }
    getComments(file) {
        let output = util.getCode(file);
        this.comments = util.cutRegex(output, /\/\*\n(.*?\n)*( )?\*\//g);
        return this.comments;
    }
    getJsDoc(file) {
        let result = [];
        this.output = util.getCode(file);
        this.comments = util.cutRegex(this.output, /\/\*\*\n( \*(.*?)*\n?)*( )*\*\//g);
        let JsDoc = util.pickJSDoc(this.comments);
        JsDoc.forEach((e) => {
            result = [...result, util.joinParts(e)];
        });
        return result;
    }
    getClassname(file) {
        this.output = util.getCode(file);
        /* Maybe same as funcions */
        util.extractSBrackets(this.output);
        return this.output;
    }
    getFunctions(file) {
        this.output = util.getCode(file);
        util.extractSBrackets(this.output);
        return this.output;
    }
    getRequires(file) {
        this.output = util.getCode(file);
        return this.output;
    }
    getExports(file) {
        this.output = util.getCode(file);
        return this.output;
    }
}
exports.js = js;

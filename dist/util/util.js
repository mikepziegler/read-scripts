"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_extra_1 = __importDefault(require("fs-extra"));
class Utilities {
    getCode(file) {
        return fs_extra_1.default.readFileSync(file, 'utf8');
    }
    cutRegex(text, regexp) {
        return text.match(regexp);
    }
    cutEnter(text) {
        return text.split('\n');
    }
    pickJSDoc(text) {
        let arr = [];
        if (text === null) {
            return [];
        }
        text.forEach((value) => {
            let v = value.replace(/(\/\*\*\n| \*(\n|\s+(\*\/)*))/g, '');
            let tags = v.split('\n');
            tags.pop();
            if (tags.length !== 0) {
                arr = [...arr, tags];
            }
        });
        return arr;
    }
    joinParts(arr) {
        let res = [];
        let index = this.everyIndexOf(arr, '@');
        let parts = [...index];
        if (index[index.length - 1] !== arr.length - 1)
            parts = [...parts, arr.length - 1];
        parts.forEach((v, i, a) => {
            res = [...res, arr.slice(a[i - 1], v).join(' ')];
        });
        return res;
    }
    extractSBrackets(text) {
        let arr = this.cutEnter(text);
        let indexBO = this.everyIndexOf(arr, '{');
        let indexBC = this.everyIndexOf(arr, '}');
        let BO = [];
        indexBO.forEach((value) => {
            BO = [...BO, [value, this.countChar(arr[value], '{')]];
        });
        let BC = [];
        indexBC.forEach((value) => {
            BC = [...BC, [value, this.countChar(arr[value], '}')]];
        });
        console.log(BO);
        console.log(BC);
    }
    filterout(arr, out) {
    }
    toRegex(pattern) {
        return pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
    everyIndexOf(arr, arg) {
        let pos = [], pattern = new RegExp(this.toRegex(arg));
        for (let i = 0; i < arr.length; i++) {
            if (pattern.test(arr[i])) {
                pos = [...pos, i];
            }
        }
        return pos;
    }
    countChar(text, arg) {
        let hit = 0;
        text.split('').forEach((value) => {
            if (value === arg)
                hit += 1;
        });
        return hit;
    }
}
exports.Utilities = Utilities;

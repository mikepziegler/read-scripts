"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_extra_1 = __importDefault(require("fs-extra"));
/*
var _ = require('lodash');
var _ = require('lodash/core');
var fp = require('lodash/fp');

var array = require('lodash/array');
var object = require('lodash/fp/object');

var at = require('lodash/at');
var curryN = require('lodash/fp/curryN');
*/
class Utilities {
    getCode(file) {
        return fs_extra_1.default.readFileSync(file, 'utf8');
    }
    cutRegex(text, regexp) {
        return text.match(regexp);
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
    everyIndexOf(arr, arg) {
        let pos = [], pattern = new RegExp(this.toRegex(arg));
        for (let i = 0; i < arr.length; i++) {
            if (pattern.test(arr[i])) {
                pos = [...pos, i];
            }
        }
        return pos;
    }
    toRegex(pattern) {
        return pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
}
exports.Utilities = Utilities;

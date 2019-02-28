"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_extra_1 = __importDefault(require("fs-extra"));
var _ = require('lodash');
var _ = require('lodash/core');
var fp = require('lodash/fp');
var array = require('lodash/array');
var object = require('lodash/fp/object');
var at = require('lodash/at');
var curryN = require('lodash/fp/curryN');
class Utilities {
    getCode(file) {
        return fs_extra_1.default.readFileSync(file, 'utf8');
    }
    cutRegex(text, regexp) {
        return text.match(regexp);
    }
    pickJSDoc(text) {
        if (this.isNull(text)) {
            throw new Error('Script does not include those parts');
            return [];
        }
        return [];
    }
    isNull(x) {
        return typeof x === null;
    }
    isString(x) {
        return typeof x === 'string';
    }
    parse() {
    }
    everyIndexOf(arr, args) {
        let list = [];
        args.forEach((d) => {
            let obj = {}, pos = [], pattern = new RegExp(this.toRegex(d));
            for (let i = 0; i < arr.length; i++) {
                if (pattern.test(arr[i])) {
                    pos = [...pos, i];
                }
            }
            obj['value'] = d;
            obj['pos'] = pos;
            list = [...list, obj];
        });
        return list;
    }
    toRegex(pattern) {
        return pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
    handleError() {
    }
}
exports.Utilities = Utilities;

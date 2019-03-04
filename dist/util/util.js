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
        let arr = [];
        if (this.isNull(text)) {
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
        let index = this.everyIndexOf(arr, ['@']);
        console.log(arr.length);
        for (let i = 0; i < index.length; i++) {
        }
        console.log(res);
        index.forEach((e) => {
        });
        return [];
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
    isNull(x) {
        return typeof x === null;
    }
    isString(x) {
        return typeof x === 'string';
    }
    handleError(error) {
        console.error(`Script does not include any ${error}`);
    }
}
exports.Utilities = Utilities;

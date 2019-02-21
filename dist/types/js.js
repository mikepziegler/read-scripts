"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_extra_1 = __importDefault(require("fs-extra"));
var _ = require('lodash');
var _ = require('lodash/core');
var fp = require('lodash/fp');
var array = require('lodash/array');
var object = require('lodash/fp/object');
var at = require('lodash/at');
var curryN = require('lodash/fp/curryN');
var js = /** @class */ (function () {
    function js() {
    }
    js.prototype.getOLComments = function (file) {
        var output = this.getCode(file);
    };
    js.prototype.getComments = function (file) {
        var output = this.getCode(file);
    };
    js.prototype.getJsDocComments = function (file) {
        var output = this.getCode(file);
        var filtered = this.filter(output);
        var parsed = this.parse(filtered);
        console.log(filtered);
        return filtered;
    };
    js.prototype.getCode = function (file) {
        return fs_extra_1.default.readFileSync(file, 'utf8');
    };
    js.prototype.getInterface = function (file) {
        var output = this.getCode(file);
    };
    js.prototype.getClassname = function (file) {
        var output = this.getCode(file);
    };
    js.prototype.getFunctions = function (file) {
        var output = this.getCode(file);
    };
    js.prototype.getImports = function (file) {
        var output = this.getCode(file);
    };
    js.prototype.getExports = function (file) {
        var output = this.getCode(file);
    };
    js.prototype.filter = function (text) {
        var raw = text.split('\n');
        var comments = [];
        var positions = this.everyIndexOf(raw, ['/**', ' */']);
        var coords = this.toPairs(positions[0].pos, positions[1].pos);
        coords.forEach(function (d) {
            comments = comments.concat([
                raw.slice(d[0], d[1] + 1)
            ]);
        });
        return comments;
    };
    js.prototype.parse = function (comments) {
        var tags = [];
        var list = [];
        comments.forEach(function (comment) {
            console.log(comment);
        });
        return list;
    };
    js.prototype.everyIndexOf = function (arr, args) {
        var _this = this;
        var list = [];
        args.forEach(function (d) {
            var obj = {}, pos = [], pattern = new RegExp(_this.toRegex(d));
            for (var i = 0; i < arr.length; i++) {
                if (pattern.test(arr[i]))
                    pos = pos.concat([i]);
            }
            obj['value'] = d;
            obj['pos'] = pos;
            list = list.concat([obj]);
        });
        return list;
    };
    js.prototype.toPairs = function (arr1, arr2) {
        var arr = [];
        var l = _.min([arr1.length, arr2.length]);
        for (var i = 0; i < l; i++) {
            arr = arr.concat([[arr1[i], arr2[i]]]);
        }
        return arr;
    };
    js.prototype.toRegex = function (pattern) {
        return pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    };
    return js;
}());
exports.js = js;

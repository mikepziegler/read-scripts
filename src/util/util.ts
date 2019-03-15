import fs from "fs-extra";

/*
var _ = require('lodash');
var _ = require('lodash/core');
var fp = require('lodash/fp');

var array = require('lodash/array');
var object = require('lodash/fp/object');

var at = require('lodash/at');
var curryN = require('lodash/fp/curryN');
*/

export class Utilities {

    public getCode(file: string): string {
        return fs.readFileSync(file, 'utf8');
    }

    public cutRegex(text: string, regexp: any) {
        return text.match(regexp);
    }

    public pickJSDoc(text: any): any[] {
        let arr: any[] = [];

        if (text === null) {
            return [];
        }

        text.forEach((value: any) => {
            let v = value.replace(/(\/\*\*\n| \*(\n|\s+(\*\/)*))/g, '');
            let tags = v.split('\n');
            tags.pop();

            if (tags.length !== 0) {
                arr = [...arr, tags]
            }
        });

        return arr;
    }

    public joinParts(arr: any[]): any[] {
        let res: any[] = [];
        let index: number[] = this.everyIndexOf(arr, '@');
        let parts: number[] = [...index];

        if (index[index.length - 1] !== arr.length - 1) parts = [...parts, arr.length - 1];

        parts.forEach((v, i, a) => {
            res = [...res, arr.slice(a[i - 1], v).join(' ')]
        });

        return res;
    }

    private everyIndexOf(arr: string[], arg: string): any[] {

        let pos: number[] = [],
            pattern = new RegExp(this.toRegex(arg));

        for (let i = 0; i < arr.length; i++) {
            if (pattern.test(arr[i])) {
                pos = [...pos, i];
            }
        }


        return pos;
    }

    private toRegex(pattern: string): string {
        return pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

}
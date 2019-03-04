import fs from "fs-extra";

var _ = require('lodash');
var _ = require('lodash/core');
var fp = require('lodash/fp');

var array = require('lodash/array');
var object = require('lodash/fp/object');

var at = require('lodash/at');
var curryN = require('lodash/fp/curryN');

export class Utilities {

    getCode(file: string): string {
        return fs.readFileSync(file, 'utf8');
    }

    cutRegex(text: string, regexp: any) {
        return text.match(regexp);
    }

    pickJSDoc(text: any): any[] {
        let arr: any[] = [];

        if (this.isNull(text)) {
            return [];
        }

        text.forEach((value: any) => {
            let v = value.replace(/(\/\*\*\n| \*(\n|\s+(\*\/)*))/g, '');
            let tags = v.split('\n');
            tags.pop();

            if (tags.length !== 0) {
                arr = [...arr, tags]
            }
        })

        return arr;
    }

    joinParts(arr: any[]): any[] {

        let res: any[] = [];
        let index = this.everyIndexOf(arr, ['@']);

        console.log(arr.length)

        for (let i = 0; i < index.length; i++) {

        }

        console.log(res);
        index.forEach((e) => {

        })

        return []
    }

    everyIndexOf(arr: string[], args: string[]): any[] {
        let list: any[] = [];
        args.forEach((d) => {
            let obj: any = {},
                pos: number[] = [],
                pattern = new RegExp(this.toRegex(d));

            for (let i = 0; i < arr.length; i++) {
                if (pattern.test(arr[i])) {
                    pos = [...pos, i];
                }
            }

            obj['value'] = d;
            obj['pos'] = pos;
            list = [...list, obj];
        })

        return list;
    }

    toRegex(pattern: string): string {
        return pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    isNull(x: any): x is null {
        return typeof x === null;
    }

    isString(x: any): x is string {
        return typeof x === 'string';
    }

    handleError(error: string) {
        console.error(`Script does not include any ${error}`)
    }
}
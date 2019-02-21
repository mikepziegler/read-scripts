import fs from "fs-extra";

var _ = require('lodash');
var _ = require('lodash/core');
var fp = require('lodash/fp');

var array = require('lodash/array');
var object = require('lodash/fp/object');

var at = require('lodash/at');
var curryN = require('lodash/fp/curryN');

interface Tag {
    type: string;
    text: string;
}

interface Comment {
    id: number;
    name: string;
    tags: [
        Tag
        ];
}

export class js {

    public getOLComments(file: string) {
        let output = this.getCode(file);
    }

    public getComments(file: string) {
        let output = this.getCode(file);
    }

    public getJsDocComments(file: string) {
        let output = this.getCode(file);
        let filtered = this.filter(output);
        let parsed = this.parse(filtered);

        console.log(filtered);

        return filtered;
    }

    public getCode(file: string): string {
        return fs.readFileSync(file, 'utf8');
    }

    public getInterface(file: string) {
        let output = this.getCode(file);
    }

    public getClassname(file: string) {
        let output = this.getCode(file);
    }

    public getFunctions(file: string) {
        let output = this.getCode(file);
    }

    public getImports(file: string) {
        let output = this.getCode(file);
    }

    public getExports(file: string) {
        let output = this.getCode(file);
    }

    private filter(text: string): any[] {

        let raw = text.split('\n')
        let comments: any[] = [];

        let positions = this.everyIndexOf(raw,['/**', ' */']);

        let coords = this.toPairs(positions[0].pos, positions[1].pos);

        coords.forEach((d) => {
            comments = [
                ...comments,
                raw.slice(d[0], d[1] + 1)
            ]
        });

        return comments;
    }

    private parse(comments: any[]): any[] {
        let tags: Tag[] = [];
        let list: Comment[] = [];

        comments.forEach((comment) => {

            console.log(comment);

        })

        return list;
    }

    private everyIndexOf(arr: string[], args: string[]): any[] {
        let list: any[] = [];

        args.forEach((d) => {
            let obj: any = {},
                pos: number[] = [],
                pattern = new RegExp(this.toRegex(d));

            for (let i = 0; i < arr.length; i++) {
                if (pattern.test(arr[i])) pos = [...pos, i];
            }

            obj['value'] = d;
            obj['pos'] = pos;

            list = [...list, obj];
        })

        return list;
    }

    private toPairs(arr1: any[], arr2: any[]): any[] {
        let arr : any[] = [];
        let l = _.min([arr1.length, arr2.length]);

        for (let i = 0; i < l; i++) {
            arr = [...arr, [arr1[i], arr2[i]]]
        }

        return arr;
    }

    private toRegex(pattern: string): string {
        return pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
}
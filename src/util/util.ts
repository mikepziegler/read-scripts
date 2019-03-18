import fs from "fs-extra";

export class Utilities {

    public getCode(file: string): string {
        return fs.readFileSync(file, 'utf8');
    }

    public cutRegex(text: string, regexp: any): any {
        return text.match(regexp);
    }

    public cutEnter(text: string) {
        return text.split('\n');
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

    public extractSBrackets(text: string) {

        let arr = this.cutEnter(text);

        let indexBO = this.everyIndexOf(arr, '{');
        let indexBC = this.everyIndexOf(arr, '}');

        let BO: any[] = [];
        indexBO.forEach((value) => {
            BO = [...BO, [value, this.countChar(arr[value], '{')]]
        });

        let BC: any = [];
        indexBC.forEach((value) => {
            BC = [...BC, [value, this.countChar(arr[value], '}')]]
        });

        console.log(BO);
        console.log(BC);

    }

    public filterout(arr: string[], out: string) {

    }

    private toRegex(pattern: string): string {
        return pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
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

    private countChar(text: string, arg: string) {
        let hit: number = 0;

        text.split('').forEach((value) => {
            if (value === arg) hit += 1;
        });

        return hit;
    }

}
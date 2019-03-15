import { Utilities } from "../util/util";

const util = new Utilities();

export class js {

    output: any;
    comments: any;

    public getOneLineC(file: string) {
        this.output = util.getCode(file);
        this.comments = util.cutRegex(this.output, /\/{2}(.*)/g);
        return this.comments;
    }

    public getComments(file: string) {
        let output = util.getCode(file);
        this.comments = util.cutRegex(output, /\/\*\n(.*?\n)*( )?\*\/\n/g);
        return this.comments;
    }

    public getJsDoc(file: string) {
        let result: any[] = [];

        this.output = util.getCode(file);
        this.comments = util.cutRegex(this.output, /\/\*\*\n( \*(.*?)*\n?)*( )*\*\//g);

        let JsDoc = util.pickJSDoc(this.comments);

        JsDoc.forEach((e) => {
            result = [...result, util.joinParts(e)];
        });

        return result;
    }

    public getClassname(file: string) {
        this.output = util.getCode(file);
        return this.output;
    }

    public getFunctions(file: string) {
        this.output = util.getCode(file);
        return this.output;
    }

    public getRequire(file: string) {
        this.output = util.getCode(file);
        return this.output;
    }

    public getExports(file: string) {
        this.output = util.getCode(file);
        return this.output;
    }
}
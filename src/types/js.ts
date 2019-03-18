import { Utilities } from "../util/util";
import { file } from "./file";

const util = new Utilities();

export class js extends file {

    comments: any;

    public getOneLineC(file: string) {
        this.output = util.getCode(file);
        this.comments = util.cutRegex(this.output, /\/{2}(.*)/g);
        return this.comments;
    }

    public getComments(file: string) {
        let output = util.getCode(file);
        this.comments = util.cutRegex(output, /\/\*\n(.*?\n)*( )?\*\//g);
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

    public getClassname(file: string) { //if you are using es6 or later
        this.output = util.getCode(file);

        /* Maybe same as funcions */
        util.extractSBrackets(this.output);

        return this.output;
    }

    public getFunctions(file: string) {
        this.output = util.getCode(file);

        util.extractSBrackets(this.output);

        return this.output;
    }

    public getRequires(file: string) {
        this.output = util.getCode(file);
        return this.output;
    }

    public getExports(file: string) {
        this.output = util.getCode(file);
        return this.output;
    }
}
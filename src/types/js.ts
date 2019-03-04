import { Utilities } from "../util/util";

const util = new Utilities();

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

    public getOneLineC(file: string) {
        let output = util.getCode(file);
        let comments = util.cutRegex(output, /\/{2}(.*)/g);
        return comments;
    }

    public getComments(file: string) {
        let output = util.getCode(file);
        let comments = util.cutRegex(output, /\/\*\n(.*?\n)*( )?\*\/\n/g);
    }

    public getJsDoc(file: string) {
        let result: any[] = [];

        let output = util.getCode(file);
        let comments = util.cutRegex(output, /\/\*\*\n( \*(.*?)*\n?)*( )*\*\//g);

        let JsDoc = util.pickJSDoc(comments);

        JsDoc.forEach((e) => {
            util.joinParts(e);
        })


        return JsDoc;
    }

    public getClassname(file: string) {
        let output = util.getCode(file);
    }

    public getFunctions(file: string) {
        let output = util.getCode(file);
    }

    public getRequire(file: string) {
        let output = util.getCode(file);
    }

    public getExports(file: string) {
        let output = util.getCode(file);
    }
}
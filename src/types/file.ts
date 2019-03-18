import { Utilities } from "../util/util";

const util = new Utilities();

export class file {

    output: string = "";

    getFile(file: string) {
        this.output = util.getCode(file);
        return util.cutEnter(this.output);
    }

}
import { Utilities } from "../util/util";
import { file } from "./file";

const util = new Utilities();

export class css extends file {

    getIds(file: string) {
        this.output = util.getCode(file);
    }

    getClasses(file: string) {
        this.output = util.getCode(file);
    }

    getElements(file: string) {

        this.output = util.getCode(file);
    }


}
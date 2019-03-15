import { js } from "./js";

import { Utilities } from "../util/util";

const util = new Utilities();

export class ts extends js {

    getInterfaces(file: string) {
        this.output = util.getCode(file);

        return this.output;
    }

    getImports(file: string) {
        this.output = util.getCode(file);

        return this.output;
    }
}
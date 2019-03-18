import * as FILE from './types/file';

import * as JS from './types/js';
import * as TS from './types/ts';
import * as HTML from './types/html';
import * as Css from './types/css';
import * as JSON from './types/json';

namespace readScript {

    export import file = FILE.file;

    export import js = JS.js;
    export import ts = TS.ts;

    export import html = HTML.html;

    export import css = Css.css;

    export import json = JSON.json;
}

export = readScript;


"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DmsFiles = void 0;
class DmsFiles {
    constructor(root) {
        this.DmsRoot = root;
    }
    setRoot(root) {
        this.DmsRoot = root;
    }
    DmsDocs() {
        return this.DmsRoot + "\\webs\\docs";
    }
}
exports.DmsFiles = DmsFiles;

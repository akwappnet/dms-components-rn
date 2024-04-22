export class DmsFiles {
  DmsRoot;
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

export class DmsFiles {
  DmsRoot;
  constructor(root: any) {
    this.DmsRoot = root;
  }

  setRoot(root: any) {
    this.DmsRoot = root;
  }
  DmsDocs() {
    return this.DmsRoot + "\\webs\\docs";
  }
}

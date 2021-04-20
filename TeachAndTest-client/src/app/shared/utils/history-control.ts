class HistoryVertexModel {
  parent: HistoryVertexModel = null;
  history: any;
  child: HistoryVertexModel = null;
}

export class HistoryControl {
  private historyRoot = new HistoryVertexModel();

  private current: HistoryVertexModel;

  public get isBackAvailable(): boolean {
    return this.current.parent !== null;
  }
  public get isForwardAvailable(): boolean {
    return this.current.child !== null;
  }
  public get history(): any {
    return this.current.history;
  }

  constructor(historyStartPoint: any) {
    this.historyRoot.history = historyStartPoint;
    this.current = this.historyRoot;
  }

  public goBack() {
    if (!this.isBackAvailable) {
      throw "back option isn't available";
    }

    this.current = this.current.parent;
  }
  public goForward() {
    if (!this.isForwardAvailable) {
      throw "forward option isn't available";
    }
    this.current = this.current.child;
  }
}

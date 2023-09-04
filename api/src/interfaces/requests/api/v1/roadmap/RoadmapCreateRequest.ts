export class RoadmapCreateRequest {
  constructor(private _title: string, private _overview: string) {
    this.validateRequest();
  }

  get title(): string {
    return this._title;
  }
  get overview(): string {
    return this._overview;
  }

  private validateRequest() {
    // リクエストのバリデーション処理
  }
}

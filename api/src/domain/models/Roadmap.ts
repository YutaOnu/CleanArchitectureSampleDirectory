export class Roadmap {
  constructor(
    private _title: string,
    private _overview: string,
    private _id: number | null = null
  ) {
    this.validate();
  }

  // TODO: getter/setterを用意
  validate() {
    // TODO: ドメインモデルに関わるバリデーションを定義
  }
  // TODO: その他のビジネスロジックを実装するメソッドを用意（必要に応じて）
}

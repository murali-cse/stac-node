export class EdgeInsets {
  left: number;
  top: number;
  right: number;
  bottom: number;

  constructor(left: number, top: number, right: number, bottom: number) {
    this.left = left;
    this.top = top;
    this.right = right;
    this.bottom = bottom;
  }

  // EdgeInsets.all(value)
  static all(value: number): EdgeInsets {
    return new EdgeInsets(value, value, value, value);
  }

  // EdgeInsets.only({left, top, right, bottom})
  static only({
    left = 0,
    top = 0,
    right = 0,
    bottom = 0,
  }: {
    left?: number;
    top?: number;
    right?: number;
    bottom?: number;
  }): EdgeInsets {
    return new EdgeInsets(left, top, right, bottom);
  }

  // EdgeInsets.symmetric({vertical, horizontal})
  static symmetric({
    vertical = 0,
    horizontal = 0,
  }: {
    vertical?: number;
    horizontal?: number;
  }): EdgeInsets {
    return new EdgeInsets(horizontal, vertical, horizontal, vertical);
  }

  // EdgeInsets.fromLTRB(left, top, right, bottom)
  static fromLTRB(
    left: number,
    top: number,
    right: number,
    bottom: number
  ): EdgeInsets {
    return new EdgeInsets(left, top, right, bottom);
  }

  // EdgeInsets.zero
  static get zero(): EdgeInsets {
    return new EdgeInsets(0, 0, 0, 0);
  }

  toJson(): string {
    return JSON.stringify({
      left: this.left,
      top: this.top,
      right: this.right,
      bottom: this.bottom,
    });
  }
}

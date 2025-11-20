abstract class Widget {
  abstract get type(): string;

  constructor(protected props: Record<string, unknown> = {}) {}

  toJson() {
    return {
      type: this.type,
      ...this.serializeProps(),
    };
  }

  protected serializeProps(): Record<string, unknown> {
    const output: Record<string, unknown> = {};

    for (const key in this.props) {
      const value: unknown = this.props[key];

      if (value instanceof Widget) {
        output[key] = value.toJson();
      } else if (Array.isArray(value)) {
        output[key] = value.map((v) => (v instanceof Widget ? v.toJson() : v));
      } else {
        output[key] = value;
      }
    }

    return output;
  }
}

export { Widget };

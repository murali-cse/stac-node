abstract class StacElement {
  abstract toJson(): string;
}

abstract class Widget {
  abstract get type(): string;

  constructor(protected props: Record<string, unknown> = {}) {}

  toJson() {
    const out: Record<string, unknown> = {
      type: this.type,
      ...this.serializeProps(),
    };

    return out;
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

export { Widget, StacElement };

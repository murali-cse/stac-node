// src/core/widget.ts
var StacElement = class {
};
var Widget = class _Widget {
  constructor(props = {}) {
    this.props = props;
  }
  toJson() {
    const out = {
      type: this.type,
      ...this.serializeProps()
    };
    return out;
  }
  serializeProps() {
    const output = {};
    for (const key in this.props) {
      const value = this.props[key];
      if (value instanceof _Widget) {
        output[key] = value.toJson();
      } else if (Array.isArray(value)) {
        output[key] = value.map((v) => v instanceof _Widget ? v.toJson() : v);
      } else {
        output[key] = value;
      }
    }
    return output;
  }
};

// src/widget/row.ts
var Row = class extends Widget {
  get type() {
    return "row";
  }
  constructor(props) {
    super(props);
  }
};

// src/widget/column.ts
var MainAxisAlignment = /* @__PURE__ */ ((MainAxisAlignment2) => {
  MainAxisAlignment2["start"] = "start";
  MainAxisAlignment2["end"] = "end";
  MainAxisAlignment2["center"] = "center";
  MainAxisAlignment2["spaceBetween"] = "spaceBetween";
  MainAxisAlignment2["spaceAround"] = "spaceAround";
  MainAxisAlignment2["spaceEvenly"] = "spaceEvenly";
  return MainAxisAlignment2;
})(MainAxisAlignment || {});
var CrossAxisAlignment = /* @__PURE__ */ ((CrossAxisAlignment2) => {
  CrossAxisAlignment2["start"] = "start";
  CrossAxisAlignment2["end"] = "end";
  CrossAxisAlignment2["center"] = "center";
  CrossAxisAlignment2["stretch"] = "stretch";
  CrossAxisAlignment2["baseline"] = "baseline";
  return CrossAxisAlignment2;
})(CrossAxisAlignment || {});
var Column = class extends Widget {
  get type() {
    return "column";
  }
  constructor(props) {
    super(props);
  }
};

// src/widget/text.ts
var Text = class extends Widget {
  get type() {
    return "text";
  }
  constructor(props) {
    super(props);
  }
};

// src/widget/scaffold.ts
var Scaffold = class extends Widget {
  get type() {
    return "scaffold";
  }
  constructor(props) {
    super(props);
  }
};

// src/widget/center.ts
var Center = class extends Widget {
  get type() {
    return "center";
  }
  constructor(props) {
    super(props);
  }
};

// src/widget/elevated_button.ts
var ElevatedButton = class extends Widget {
  get type() {
    return "elevatedButton";
  }
  constructor(props) {
    super(props);
  }
};

// src/widget/container.ts
var Container = class extends Widget {
  get type() {
    return "container";
  }
  constructor(props) {
    super(props);
  }
};

// src/core/button_style.ts
var ButtonStyle = class extends StacElement {
  constructor(props) {
    super();
    this.forgroundColor = props?.forgroundColor;
    this.backgroundColor = props?.backgroundColor;
    this.disabledForegroundColor = props?.disabledForegroundColor;
    this.disabledBackgroundColor = props?.disabledBackgroundColor;
    this.shadowColor = props?.shadowColor;
    this.surfaceTintColor = props?.surfaceTintColor;
  }
  toJson() {
    return JSON.stringify({
      forgroundColor: this.forgroundColor,
      backgroundColor: this.backgroundColor,
      disabledForegroundColor: this.disabledForegroundColor,
      disabledBackgroundColor: this.disabledBackgroundColor,
      shadowColor: this.shadowColor,
      surfaceTintColor: this.surfaceTintColor
    });
  }
};

// src/core/edge_insets.ts
var EdgeInsets = class {
};
export {
  ButtonStyle,
  Center,
  Column,
  Container,
  CrossAxisAlignment,
  EdgeInsets,
  ElevatedButton,
  MainAxisAlignment,
  Row,
  Scaffold,
  Text,
  Widget
};

import { Widget } from "../core/widget.ts";

enum MainAxisAlignment {
  start = "start",
  end = "end",
  center = "center",
  spaceBetween = "spaceBetween",
  spaceAround = "spaceAround",
  spaceEvenly = "spaceEvenly",
}

enum CrossAxisAlignment {
  start = "start",
  end = "end",
  center = "center",
  stretch = "stretch",
  baseline = "baseline",
}

type ColumnProps = {
  mainAxisAlignment?: MainAxisAlignment;
  crossAxisAlignment?: CrossAxisAlignment;
  children?: Widget[];
};

class Column extends Widget {
  get type(): string {
    return "column";
  }

  constructor(props: ColumnProps) {
    super(props);
  }
}

export { Column, MainAxisAlignment, CrossAxisAlignment };

import { Widget } from "../core/widget.ts";

type RowProps = {
  children?: Widget[];
};

class Row extends Widget {
  get type(): string {
    return "row";
  }

  constructor(props: RowProps) {
    super(props);
  }
}

export { Row };

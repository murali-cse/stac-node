import { EdgeInsets } from "../core/edge_insets.ts";
import { Widget } from "../core/widget.ts";

type ContainerProps = {
  width?: number;
  height?: number;
  color?: string;
  child?: Widget;
  padding?: EdgeInsets;
};

class Container extends Widget {
  get type(): string {
    return "container";
  }
  constructor(props: ContainerProps) {
    super(props);
  }
}

export { Container };

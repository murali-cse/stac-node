import { Widget } from "../core/widget.ts";

type CenterProps = {
  child?: Widget;
};

class Center extends Widget {
  get type(): string {
    return "center";
  }

  constructor(props: CenterProps) {
    super(props);
  }
}

export { Center };

import { Widget } from "../core/widget.ts";

type ScaffoldProps = {
  appBar?: Widget;
  body?: Widget;
  backgroundColor?: string;
};

class Scaffold extends Widget {
  get type(): string {
    return "scaffold";
  }

  constructor(props: ScaffoldProps) {
    super(props);
  }
}

export { Scaffold };

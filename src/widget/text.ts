import { Widget } from "../core/widget.ts";

type TextProps = {
  data: string;
};

class Text extends Widget {
  get type(): string {
    return "text";
  }

  constructor(props: TextProps) {
    super(props);
  }
}

export { Text };

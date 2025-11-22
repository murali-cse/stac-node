import { ButtonStyle } from "../core/foundation/theme/button_style.ts";
import { Widget } from "../core/widget.ts";

type ElevatedButtonProps = {
  onPressed?: object;
  child?: Widget;
  onLongPress?: object;
  style?: ButtonStyle;
};

class ElevatedButton extends Widget {
  get type(): string {
    return "elevatedButton";
  }

  constructor(props: ElevatedButtonProps) {
    super(props);
  }
}

export { ElevatedButton };

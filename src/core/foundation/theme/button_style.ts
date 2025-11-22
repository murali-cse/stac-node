import { EdgeInsets } from "../../edge_insets.ts";
import { StacElement } from "../../widget.ts";

type ButtonStyleProps = {
  forgroundColor?: string;
  backgroundColor?: string;
  disabledForegroundColor?: string;
  disabledBackgroundColor?: string;
  shadowColor?: string;
  surfaceTintColor?: string;
  iconColor?: string;
  iconSize?: number;
  padding?: EdgeInsets;
};

export class ButtonStyle extends StacElement {
  forgroundColor: string | undefined;
  backgroundColor: string | undefined;
  disabledForegroundColor: string | undefined;
  disabledBackgroundColor: string | undefined;
  shadowColor: string | undefined;
  surfaceTintColor: string | undefined;
  iconColor: string | undefined;
  iconSize: number | undefined;
  padding: EdgeInsets | undefined;

  constructor(props?: ButtonStyleProps) {
    super();
    this.forgroundColor = props?.forgroundColor;
    this.backgroundColor = props?.backgroundColor;
    this.disabledForegroundColor = props?.disabledForegroundColor;
    this.disabledBackgroundColor = props?.disabledBackgroundColor;
    this.shadowColor = props?.shadowColor;
    this.surfaceTintColor = props?.surfaceTintColor;
    this.iconColor = props?.iconColor;
    this.iconSize = props?.iconSize;
    this.padding = props?.padding;
  }

  toJson(): string {
    return JSON.stringify({
      forgroundColor: this.forgroundColor,
      backgroundColor: this.backgroundColor,
      disabledForegroundColor: this.disabledForegroundColor,
      disabledBackgroundColor: this.disabledBackgroundColor,
      shadowColor: this.shadowColor,
      surfaceTintColor: this.surfaceTintColor,
      iconColor: this.iconColor,
      iconSize: this.iconSize,
      padding: this.padding,
    });
  }
}

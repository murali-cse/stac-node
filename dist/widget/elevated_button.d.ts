import { ButtonStyle } from "../core/button_style.ts";
import { Widget } from "../core/widget.ts";
type ElevatedButtonProps = {
    onPressed?: object;
    child?: Widget;
    onLongPress?: object;
    style?: ButtonStyle;
};
declare class ElevatedButton extends Widget {
    get type(): string;
    constructor(props: ElevatedButtonProps);
}
export { ElevatedButton };

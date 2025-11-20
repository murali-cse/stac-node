import { Widget } from "../core/widget.ts";
type TextProps = {
    data: string;
};
declare class Text extends Widget {
    get type(): string;
    constructor(props: TextProps);
}
export { Text };

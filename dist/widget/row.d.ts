import { Widget } from "../core/widget.ts";
type RowProps = {
    children?: Widget[];
};
declare class Row extends Widget {
    get type(): string;
    constructor(props: RowProps);
}
export { Row };

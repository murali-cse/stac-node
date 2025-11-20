import { Widget } from "../core/widget.ts";
declare enum MainAxisAlignment {
    start = "start",
    end = "end",
    center = "center",
    spaceBetween = "spaceBetween",
    spaceAround = "spaceAround",
    spaceEvenly = "spaceEvenly"
}
declare enum CrossAxisAlignment {
    start = "start",
    end = "end",
    center = "center",
    stretch = "stretch",
    baseline = "baseline"
}
type ColumnProps = {
    mainAxisAlignment?: MainAxisAlignment;
    crossAxisAlignment?: CrossAxisAlignment;
    children?: Widget[];
};
declare class Column extends Widget {
    get type(): string;
    constructor(props: ColumnProps);
}
export { Column, MainAxisAlignment, CrossAxisAlignment };

import { Widget } from "../core/widget.ts";
type ScaffoldProps = {
    appBar?: Widget;
    body?: Widget;
    backgroundColor?: string;
};
declare class Scaffold extends Widget {
    get type(): string;
    constructor(props: ScaffoldProps);
}
export { Scaffold };

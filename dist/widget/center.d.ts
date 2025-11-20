import { Widget } from "../core/widget.ts";
type CenterProps = {
    child?: Widget;
};
declare class Center extends Widget {
    get type(): string;
    constructor(props: CenterProps);
}
export { Center };

import { EdgeInsets } from "../core/edge_insets.ts";
import { Widget } from "../core/widget.ts";
type ContainerProps = {
    width?: number;
    height?: number;
    color?: string;
    child?: Widget;
    padding?: EdgeInsets;
};
declare class Container extends Widget {
    get type(): string;
    constructor(props: ContainerProps);
}
export { Container };

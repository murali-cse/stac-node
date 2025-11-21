import { StacElement } from "./widget.ts";
type ButtonStyleProps = {
    forgroundColor?: string;
    backgroundColor?: string;
    disabledForegroundColor?: string;
    disabledBackgroundColor?: string;
    shadowColor?: string;
    surfaceTintColor?: string;
};
export declare class ButtonStyle extends StacElement {
    forgroundColor: string | undefined;
    backgroundColor: string | undefined;
    disabledForegroundColor: string | undefined;
    disabledBackgroundColor: string | undefined;
    shadowColor: string | undefined;
    surfaceTintColor: string | undefined;
    constructor(props?: ButtonStyleProps);
    toJson(): string;
}
export {};

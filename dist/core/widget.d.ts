declare abstract class StacElement {
    abstract toJson(): string;
}
declare abstract class Widget {
    protected props: Record<string, unknown>;
    abstract get type(): string;
    constructor(props?: Record<string, unknown>);
    toJson(): Record<string, unknown>;
    protected serializeProps(): Record<string, unknown>;
}
export { Widget, StacElement };

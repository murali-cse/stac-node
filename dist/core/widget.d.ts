declare abstract class Widget {
    protected props: Record<string, unknown>;
    abstract get type(): string;
    constructor(props?: Record<string, unknown>);
    toJson(): {
        type: string;
    };
    protected serializeProps(): Record<string, unknown>;
}
export { Widget };

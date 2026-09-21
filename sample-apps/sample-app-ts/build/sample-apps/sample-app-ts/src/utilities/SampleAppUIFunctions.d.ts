export declare class SampleAppUIFunctions {
    private currentElements;
    constructor(elementString: string);
    private saveDisplayForElement;
    private setDisplayForElement;
    private _fadeIn;
    private _fadeOut;
    fadeOut: (duration?: any, callback?: any) => void;
    fadeIn: (duration?: any, callback?: any) => void;
    show: () => void;
    hide: () => void;
    scrollTop: (value: number) => void;
    css: (styleProperTies: any) => void;
}

interface Theme {
    DmsButtonColour: string;
    DmsLabelColour: string;
    DmsTextColour: string;
    DmsTextBackgroundColour: string;
    DmsTextPlaceHolderTextColour: string;
    NavigationTheme: string;
}
declare class DmsTheme {
    DmsButtonColour: string;
    DmsLabelColour: string;
    DmsTextColour: string;
    DmsTextBackgroundColour: string;
    DmsTextPlaceHolderTextColour: string;
    NavigationTheme: string;
    getThemes(): Promise<void>;
    constructor();
    defualt(): void;
    buildThemes(theme: Theme): void;
}
declare const _default: DmsTheme;
export default _default;

import React from "react";
interface DmsWebViewProps {
    Routine: string;
    Data: any;
    HandleEvent: (data: string) => void;
}
declare const DmsWebView: React.FC<DmsWebViewProps>;
export default DmsWebView;

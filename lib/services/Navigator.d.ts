export declare class NavigatorService {
    static callProg(routineName: string, jsonObject: any): Promise<any>;
    static getNavigatorReportold(reportName: string, paramsList: string[]): Promise<any>;
    static getNavigatorReport(reportName: string, paramsList: string[]): Promise<any>;
    static writeFile(File: string, Record: string, AM: string, VM: string, SVM: string, Value: any): Promise<void>;
    static WriteFileBase64(filePath: string, base64: string): Promise<void>;
    static ReadFile(filePath: string): Promise<string | undefined>;
    static popualteRadio(file: string, recordname: string): Promise<any>;
    static popualteDropDown(file: string, recordname: string): Promise<any>;
    static hasFlag(recordname: string): Promise<boolean>;
}

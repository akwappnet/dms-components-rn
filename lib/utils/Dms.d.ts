export declare class Dms {
    static GetAPIKey(): Promise<string>;
    static DmsFiles(): void;
    static DocsFile(): Promise<string>;
    static Token(): Promise<string>;
    static GetAPIKeyBasic(): Promise<string>;
    static ConvertStringToHex(str: string): string;
    static getServerAddress(): Promise<string>;
    static storeData: (key: string, value: string) => Promise<void>;
    static getData: (key: string) => Promise<string>;
    static getBranch(): Promise<string>;
    static DMSROOT(): Promise<string>;
    static setBranch: (branch: string) => Promise<boolean>;
    static getDeviceInfo(): Promise<{
        ipAddress: string;
        pcId: string;
        deviceName: string;
    }>;
    static user(): Promise<string>;
    static checkPriv(user: {
        privileges: string;
    }, priv: string): boolean;
    static HasLicence(licence: string): Promise<boolean>;
    static getDate(method?: "YYYY_MM" | "QM"): string;
    static getTime(): string;
}

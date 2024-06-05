import { Alert } from "react-native";
import { Dms } from "../utils/Dms";
import VersionUtils from "../utils/VersionUtils";

export class NavigatorService {
  static async callProg(routineName: string, jsonObject: any): Promise<any> {
    try {
      const apikey: string = await Dms.GetAPIKeyBasic();
      const serverAddress: string = (await Dms.getServerAddress()) ?? "";
      const sessionID: string = (await Dms.getData("sessionID")) ?? "";
      const userID: string = (await Dms.getData("userID")) ?? "";
      jsonObject.versionNumber = VersionUtils.getVersionNumber();

      let data: string = `aloadofjunk_${apikey}~${sessionID}~${routineName}:${userID}:${serverAddress}~${JSON.stringify(
        jsonObject
      )}`;

      let response: Response = await fetch(
        "https://services-pool.dmservices.co.uk/DmsNavigator.NavigatorWebService.svc/CallProg",
        {
          method: "POST",
          body: data,
          headers: {
            "Content-Type": "text/text",
          },
        }
      );
      if (response.ok) {
        const jsonValuetxt: string = await response.text();
        return JSON.parse(jsonValuetxt);
      } else {
        await Alert.alert("Error 2", "Conection Error", [{ text: "Ok" }], {
          cancelable: true,
        });
      }

      return "ok";
    } catch (error) {}
  }

  static async getNavigatorReportold(
    reportName: string,
    paramsList: string[]
  ): Promise<any> {
    let ii: number = paramsList.length;
    let paramString: string = "";
    paramsList.forEach((param: string) => {
      paramString += param + ",";
    });
    paramString = paramString.substring(0, paramString.length - 1);

    let apikey: string = await Dms.GetAPIKey();
    let url: string = `https://services.dmservices.co.uk/DmsNavigator.NavigatorWebService.svc/GetNavigatorReport/${apikey},1,${reportName},JSON,${paramString}`;

    const response: any = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "text/text",
      },
    }).catch(() => {});
    if (response.ok) {
      const jsonValuetxt: string = await response.text();
      return JSON.parse(jsonValuetxt)["x:reports"];
    } else {
      //("notok");
    }

    return "ok";
  }

  static async getNavigatorReport(
    reportName: string,
    paramsList: string[]
  ): Promise<any> {
    try {
      let paramString: string = "";
      paramsList.forEach((param: string) => {
        paramString += param + ",";
      });
      paramString = paramString.substring(0, paramString.length - 1);
      let data: any = {
        routineName: reportName,
        params: paramString,
      };
      return await this.callProg("GET.REPORT.JSON.MOBILE", data);
    } catch (error) {}
  }

  static async writeFile(
    File: string,
    Record: string,
    AM: string,
    VM: string,
    SVM: string,
    Value: any
  ): Promise<void> {
    try {
      let data: any = {
        File: File,
        Record: Record,
        AM: AM,
        VM: VM,
        SVM: SVM,
        Value: Value,
      };
      await this.callProg("PATCH.RECORD.MOBILE", data);
    } catch (error) {}
  }

  static async WriteFileBase64(
    filePath: string,
    base64: string
  ): Promise<void> {
    const apikey: string = await Dms.GetAPIKeyBasic();
    const serverAddress: string = (await Dms.getServerAddress()) ?? "";
    const sessionID: string = (await Dms.getData("sessionID")) ?? "";

    const data: string = `aloadofjunk_${apikey}~${sessionID}~${filePath}~${base64}`;

    const response: Response = await fetch(
      "https://services-pool.dmservices.co.uk/DmsNavigator.NavigatorWebService.svc/WriteFileBase64",
      {
        method: "POST",
        body: data,
        headers: {
          "Content-Type": "text/text",
        },
      }
    );
  }

  static async ReadFile(filePath: string) {
    const apikey: string = await Dms.GetAPIKeyBasic();
    const sessionID: string = (await Dms.getData("sessionID")) ?? "";

    const data: string = `aloadofjunk_${apikey}~${sessionID}~${filePath}`;

    const response: Response = await fetch(
      "https://services-pool.dmservices.co.uk/DmsNavigator.NavigatorWebService.svc/ReadFile",
      {
        method: "POST",
        body: data,
        headers: {
          "Content-Type": "text/text",
        },
      }
    );
    if (response.ok) {
      const jsonValuetxt: string = await response.text();
      return jsonValuetxt;
    } else {
    }
  }

  static async popualteRadio(file: string, recordname: string): Promise<any> {
    try {
      let radio: any = { file: file, recordname: recordname };
      return await this.callProg("MOBILE.POPULATE.RADIO", radio);
    } catch (error) {}
  }

  static async popualteDropDown(
    file: string,
    recordname: string
  ): Promise<any> {
    try {
      let radio: any = { file: file, recordname: recordname };
      return await this.callProg("MOBILE.POPULATE.DROPDOWN", radio);
    } catch (error) {}
  }

  static async hasFlag(recordname: string): Promise<boolean> {
    try {
      let data: any = {
        Record: recordname,
        branch: await Dms.getBranch(),
      };
      const res: any = await this.callProg("CHECK.PARAMTERS.MOBILE", data);
      if (res.res == "1") {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  }
}

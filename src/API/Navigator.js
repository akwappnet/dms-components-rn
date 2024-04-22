import { Dms } from "../Utils/Dms";
import VersionUtils from "../Utils/VersionUtils";

export class NavigatorService {
  static async callProg(routineName, jsonObject) {
    try {
      let apikey = await Dms.GetAPIKeyBasic();
      let serverAddress = await Dms.getServerAddress();
      let sessionID = await Dms.getData("sessionID");
      let userID = await Dms.getData("userID");
      jsonObject.versionNumber = VersionUtils.getVersionNumber();
      if (!sessionID) {
        sessionID = "";
      }
      let data = `aloadofjunk_${apikey}~${sessionID}~${routineName}:${userID}:${serverAddress}~${JSON.stringify(
        jsonObject
      )}`;
      // console.log(data);

      let response = await fetch(
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
        const jsonValuetxt = await response.text();
        return JSON.parse(jsonValuetxt);
      } else {
        await Alert.alert("Error 2", "Conection Error", [{ text: "Ok" }], {
          cancelable: true,
        });
      }

      return "ok";
    } catch (error) {}
  }

  static async getNavigatorReportold(reportName, paramsList) {
    let ii = paramsList.length;
    let paramString = "";
    paramsList.forEach((param) => {
      paramString += param + ",";
    });
    paramString = paramString.substring(0, paramString.length - 1);

    let apikey = await Dms.GetAPIKey();
    let url = `https://services.dmservices.co.uk/DmsNavigator.NavigatorWebService.svc/GetNavigatorReport/${apikey},1,${reportName},JSON,${paramString}`;

    let response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "text/text",
      },
    }).catch(() => {});
    if (response.ok) {
      const jsonValuetxt = await response.text();
      return JSON.parse(jsonValuetxt)["x:reports"];
    } else {
      //("notok");
    }

    return "ok";
  }

  static async getNavigatorReport(reportName, paramsList) {
    try {
      let paramString = "";
      paramsList.forEach((param) => {
        paramString += param + ",";
      });
      paramString = paramString.substring(0, paramString.length - 1);
      let data = {
        routineName: reportName,
        params: paramString,
      };
      return await this.callProg("GET.REPORT.JSON.MOBILE", data);
    } catch (error) {}
  }

  static async writeFile(File, Record, AM, VM, SVM, Value) {
    try {
      data = {
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

  static async WriteFileBase64(filePath, base64) {
    let apikey = await Dms.GetAPIKeyBasic();
    let serverAddress = await Dms.getServerAddress();
    let sessionID = await Dms.getData("sessionID");

    let data = `aloadofjunk_${apikey}~${sessionID}~${filePath}~${base64}`;

    let response = await fetch(
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

  static async ReadFile(filePath) {
    let apikey = await Dms.GetAPIKeyBasic();
    let sessionID = await Dms.getData("sessionID");

    let data = `aloadofjunk_${apikey}~${sessionID}~${filePath}`;

    let response = await fetch(
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
      const jsonValuetxt = await response.text();
      return jsonValuetxt;
    } else {
    }
  }

  static async popualteRadio(file, recordname) {
    try {
      let radio = { file: file, recordname: recordname };
      return await this.callProg("MOBILE.POPULATE.RADIO", radio);
    } catch (error) {}
  }

  static async popualteDropDown(file, recordname) {
    try {
      let radio = { file: file, recordname: recordname };
      return await this.callProg("MOBILE.POPULATE.DROPDOWN", radio);
    } catch (error) {}
  }

  static async hasFlag(recordname) {
    try {
      data = {
        Record: recordname,
        branch: await Dms.getBranch(),
      };
      const res = await this.callProg("CHECK.PARAMTERS.MOBILE", data);
      if (res.res == "1") {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
    return false;
  }
}

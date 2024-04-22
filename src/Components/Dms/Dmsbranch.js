import { View } from "react-native";
import { useEffect, useState } from "react";
import { Dms } from "../../Utils/Dms";
import { DmsLookup } from "./DmsLookup";

export function Dmsbranch() {
  const [userID, setUserID] = useState("");
  const [branch, setBranch] = useState("");

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    setUserID(await Dms.user());
    setBranch(await Dms.getBranch());
  };

  const setSelectedBranch = (branchdata) => {
    if (branchdata != null) {
      Dms.setBranch(branchdata.branch);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {userID != "" && branch != "" && (
        <DmsLookup
          {...{
            file: userID,
            recordID: "BRANCHES.ALL",
            getValue: setSelectedBranch,
            currentValue: branch,
          }}
        ></DmsLookup>
      )}
    </View>
  );
}

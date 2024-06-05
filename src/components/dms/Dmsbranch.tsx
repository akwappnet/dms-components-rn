import { View } from "react-native";
import { useEffect, useState } from "react";
import { Dms } from "../../utils/Dms";
import DmsLookup from "./DmsLookup";

const Dmsbranch: React.FC = () => {
  const [userID, setUserID] = useState<string>("");
  const [branch, setBranch] = useState<string>("");

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    setUserID((await Dms.user()) ?? "");
    setBranch((await Dms.getBranch()) ?? "1");
  };

  const setSelectedBranch = (branchdata: { branch: string } | null) => {
    if (branchdata !== null) {
      Dms.setBranch(branchdata.branch);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {userID !== "" && branch !== "" && (
        <DmsLookup
          file={userID}
          recordID="BRANCHES.ALL"
          getValue={setSelectedBranch}
          currentValue={parseInt(branch)}
        ></DmsLookup>
      )}
    </View>
  );
};

export default Dmsbranch;

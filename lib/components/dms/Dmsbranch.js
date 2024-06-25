var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { View } from 'react-native';
import { useEffect, useState } from 'react';
import { Dms } from '../../utils/Dms';
import DmsLookup from './DmsLookup';
const Dmsbranch = () => {
    const [userID, setUserID] = useState('');
    const [branch, setBranch] = useState('');
    useEffect(() => {
        getUser();
    }, []);
    const getUser = () => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b;
        setUserID((_a = (yield Dms.user())) !== null && _a !== void 0 ? _a : '');
        setBranch((_b = (yield Dms.getBranch())) !== null && _b !== void 0 ? _b : '1');
    });
    const setSelectedBranch = (branchdata) => {
        if (branchdata !== null) {
            Dms.setBranch(branchdata.branch);
        }
    };
    return (<View style={{ flex: 1 }}>
      {userID !== '' && branch !== '' && (<DmsLookup file={userID} recordID="BRANCHES.ALL" getValue={setSelectedBranch} currentValue={parseInt(branch)}></DmsLookup>)}
    </View>);
};
export default Dmsbranch;
//# sourceMappingURL=Dmsbranch.js.map
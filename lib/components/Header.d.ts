import React from "react";
interface User {
    ID: string;
    name: string;
}
interface HeaderProps {
    user?: User;
}
declare const Header: React.FC<HeaderProps>;
export default Header;

import React from "react";
interface User {
    ID: string;
    name: string;
}
interface JobLineProps {
    user: User | null;
}
export declare function JobLine({ user }: JobLineProps): React.JSX.Element;
export {};

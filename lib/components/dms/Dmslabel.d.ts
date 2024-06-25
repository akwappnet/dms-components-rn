/// <reference types="react" />
/// <reference types="react" />
interface DmslabelProps {
    Textstr: string;
    fontWeight?: "normal" | "bold" | "light" | "medium";
    fontSize?: number;
    color?: string;
    marginBottom?: number;
}
declare const Dmslabel: ({ Textstr, fontWeight, fontSize, color, marginBottom, }: DmslabelProps) => JSX.Element;
export default Dmslabel;

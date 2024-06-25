/// <reference types="react" />
interface DmsButtonProps {
    props: {
        image?: string;
        name?: string;
        backgroundColor?: string;
        onPress?: () => void;
    };
}
declare const DmsButton: React.FC<DmsButtonProps>;
export default DmsButton;

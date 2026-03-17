import styles from "./ButtonGroup.module.scss"
import classNames from "classnames";

interface Props {
    children: React.ReactNode;
}

function ButtonGroup({ children }: Props) {
    return (
        < div
            className={classNames(styles.container)}
        >
            {children}
        </div >
    );
}

export default ButtonGroup;
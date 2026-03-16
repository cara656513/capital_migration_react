import styles from "./ButtonGroup.module.scss"

interface Props {
    children: React.ReactNode;
}

function ButtonGroup({ children }: Props) {
    return (
        < div
            className={styles.container}
        >
            {children}
        </div >
    );
}

export default ButtonGroup;
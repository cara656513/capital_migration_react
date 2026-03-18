import classNames from "classnames";

interface IconProps {
    children: React.ReactNode;
    className?: string; // 외부에서 스타일을 주입받을 수 있도록 추가
}

function Icon({ children, className }: IconProps) {
    return (
        <span className={classNames("icon-base", className)}>
            {children}
        </span>
    );
}

export default Icon;

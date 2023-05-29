import React from "react";
import styles from "./button.module.scss";
import classNames from "classnames";

interface IButtonProps {
	children: React.ReactNode;
	onClick: () => void;
	isActive: boolean;
}

export function Button({ children, onClick, isActive }: IButtonProps) {
	const classes = classNames(styles.item, { [styles.active]: isActive });

	return (
		<>
			<button className={classes} onClick={onClick}>
				{children}
			</button>
		</>
	);
}

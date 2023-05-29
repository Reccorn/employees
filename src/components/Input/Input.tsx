import React from "react";
import styles from "./input.module.scss";
import { EIcons, Icon } from "../Icon";

interface IINputProps {
	value: string;
	placeholder: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	icon?: EIcons;
}

export function Input({ value, placeholder, onChange, icon }: IINputProps) {
	return (
		<div className={styles.item}>
			<input
				value={value}
				placeholder={placeholder}
				onChange={onChange}
				type="text"
			/>
			{icon && <Icon name={icon} />}
		</div>
	);
}

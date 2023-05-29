import styles from "./user.module.scss";

import Avatar from "../../assets/images/avatar.png";
import { EIcons, Icon } from "../Icon";
import { useEffect, useRef, useState } from "react";
import classNames from "classnames";

export function User() {
	const [isActive, setActive] = useState(false);
	const blockRef = useRef<HTMLDivElement>(null);

	const classes = classNames(styles.block, { [styles.active]: isActive });

	useEffect(() => {
		const handleClick = (e: MouseEvent) => {
			if (
				e.target instanceof Node &&
				!blockRef.current?.contains(e.target)
			)
				setActive(false);
		};

		document.addEventListener("click", handleClick);

		return () => {
			document.removeEventListener("click", handleClick);
		};
	}, []);

	return (
		<div
			className={classes}
			ref={blockRef}
			onClick={() => setActive(!isActive)}
		>
			<div className={styles.avatar}>
				<img src={Avatar} alt="Kristina" />
			</div>
			<div className={styles.info}>
				<span className={styles.name}>Kristina 🐰</span>
				<p className={styles.position}>менеджер продаж</p>
			</div>
			<div className={styles.icon}>
				<Icon name={EIcons.drop} />
			</div>
			<div className={styles.dropdown}>
				<ul>
					<li>Option</li>
					<li>Option</li>
					<li>Option</li>
				</ul>
			</div>
		</div>
	);
}

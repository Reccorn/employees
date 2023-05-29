import styles from "./navitem.module.scss";
import { Link, useLocation } from "react-router-dom";
import { EIcons, Icon } from "../../Icon";
import classNames from "classnames";

interface INavItemProps {
	icon: EIcons;
	href: string;
}

export function NavItem({ icon, href }: INavItemProps) {
	const location = useLocation();

	const classes = classNames(styles.block, {
		[styles.active]: location.pathname === href,
	});

	return (
		<li className={classes}>
			<Link to={href}>
				<Icon name={icon} />
			</Link>
		</li>
	);
}

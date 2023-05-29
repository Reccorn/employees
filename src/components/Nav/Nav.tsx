import { Link } from "react-router-dom";
import { EIcons, Icon } from "../Icon";
import { NavItem } from "./NavItem";
import styles from "./nav.module.scss";

const navItems = [
	{
		icon: EIcons.calendar,
		href: "/schedule",
	},
	{
		icon: EIcons.menu,
		href: "/menu",
	},
	{
		icon: EIcons.employees,
		href: "/",
	},
	{
		icon: EIcons.settings,
		href: "/settings",
	},
];

export function Nav() {
	return (
		<nav className={styles.wrapper}>
			<Link className={styles.logo} to={"/"}>
				<Icon name={EIcons.logo} />
			</Link>
			<ul>
				{navItems.map((item, index) => {
					return (
						<NavItem
							key={index}
							icon={item.icon}
							href={item.href}
						/>
					);
				})}
			</ul>
		</nav>
	);
}

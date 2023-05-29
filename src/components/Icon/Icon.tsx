import { CalendarIcon } from "../Icons/CalendarIcon";
import MenuIcon from "../Icons/MenuIcon";
import EmployeesIcon from "../Icons/EmployeesIcon";
import SettingsIcon from "../Icons/SettingsIcon";
import LogoIcon from "../Icons/LogoIcon";
import NavIcon from "../Icons/NavIcon";
import SearchIcon from "../Icons/SearchIcon";
import DropIcon from "../Icons/DropIcon";

export enum EIcons {
	calendar = "CalendarIcon",
	menu = "MenuIcon",
	employees = "EmployeesIcon",
	settings = "SettingsIcon",
	logo = "LogoIcon",
	nav = "NavIcon",
	search = "SearchIcon",
	drop = "DropIcon",
}

interface IIconProps {
	name: EIcons;
}

function getComponent(name: EIcons) {
	switch (name) {
		case EIcons.calendar:
			return <CalendarIcon />;
		case EIcons.menu:
			return <MenuIcon />;
		case EIcons.employees:
			return <EmployeesIcon />;
		case EIcons.settings:
			return <SettingsIcon />;
		case EIcons.logo:
			return <LogoIcon />;
		case EIcons.nav:
			return <NavIcon />;
		case EIcons.search:
			return <SearchIcon />;
		case EIcons.drop:
			return <DropIcon />;
	}
}

export function Icon({ name }: IIconProps) {
	return <span>{getComponent(name)}</span>;
}

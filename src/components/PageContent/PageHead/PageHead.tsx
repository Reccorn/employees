import styles from "./pagehead.module.scss";
import { User } from "../../User";
import { useLocation } from "react-router-dom";
import { TabSwiper } from "../../TabSwiper";

export function PageHead() {
	const location = useLocation();

	return (
		<div className={styles.wrapper}>
			{(location.pathname === "/" || location.pathname.includes("#")) && (
				<TabSwiper />
			)}
			<User />
		</div>
	);
}

import React from "react";
import styles from "./pagetitle.module.scss";

interface IPageTitleProps {
	children: React.ReactNode;
}

export function PageTitle({ children }: IPageTitleProps) {
	return <h1 className={styles.block}>{children}</h1>;
}

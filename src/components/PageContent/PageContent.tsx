import React from "react";
import styles from "./pagecontent.module.scss";

interface IPageContentProps {
	children: React.ReactNode;
}

export function PageContent({ children }: IPageContentProps) {
	return <div className={styles.wrapper}>{children}</div>;
}

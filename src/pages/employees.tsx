import { useLocation } from "react-router-dom";
import { PageTitle } from "../components/PageContent/PageTitle";
import { Table } from "../components/Table";

export function Employees() {
	const location = useLocation();

	function setTitle(hash: string) {
		switch (hash) {
			case "":
				return "Общая база сотрудников";
			case "#forms":
				return "База анкет сотрудников";
			case "#database":
				return "База сотрудников";
			case "#calendar":
				return "Календарь сотрудников";
			case "#more":
				return "Что-то ещё";
		}
	}

	return (
		<>
			<PageTitle>{setTitle(location.hash)}</PageTitle>
			<Table />
		</>
	);
}

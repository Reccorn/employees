import { useMemo, useState } from "react";
import styles from "./table.module.scss";
import MaterialReactTable, {
	type MaterialReactTableProps,
	type MRT_ColumnDef,
	MRT_GlobalFilterTextField,
} from "material-react-table";
import { Person } from "../../utils/getData";
import { useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store";
import { MRT_Localization_RU } from "material-react-table/locales/ru";
import { editItem } from "../../store/slices/dataSlice";
import { Button } from "../Button";

const sessionEditing = sessionStorage.getItem("mrt_editingIsEnabled");

export function Table() {
	const location = useLocation();
	const dispatch = useAppDispatch();
	const data = useAppSelector((state) => state.data);
	const type =
		location.hash.length > 0 ? location.hash.replace("#", "") : "main";

	const [editingIsEnabled, setEditingIsEnabled] = useState(
		sessionEditing !== null ? JSON.parse(sessionEditing) : false
	);

	const columns = useMemo<MRT_ColumnDef<Person>[]>(
		() => [
			{
				header: "Основная информация",
				columns: [
					{
						accessorKey: "fullname",
						header: "Имя сотрудника",
					},
					{
						accessorKey: "_id",
						header: "ID номер",
						enableEditing: false,
					},
					{
						accessorKey: "sex",
						header: "Пол",
					},
				],
			},
			{
				header: "Информация от HR",
				columns: [
					{
						accessorKey: "jobArea",
						header: "Место работы",
					},
					{
						accessorKey: "jobTitle",
						header: "Должность",
					},
					{
						accessorKey: "jobDescriptor",
						header: "Обязанности",
					},
				],
			},
			{
				header: "Дополнительная информация",
				columns: [
					{
						accessorKey: "phoneNumber",
						header: "Номер телефона",
					},
					{
						accessorKey: "zodiacSign",
						header: "Знак зодиака",
					},
				],
			},
		],
		[]
	);

	const handleSaveRow: MaterialReactTableProps<Person>["onEditingRowSave"] =
		async ({ exitEditingMode, values }) => {
			dispatch(
				editItem({
					id: values._id,
					name: values.fullname,
					sex: values.sex,
					number: values.phoneNumber,
					area: values.jobArea,
					descriptor: values.jobDescriptor,
					title: values.jobTitle,
					sign: values.zodiacSign,
				})
			);
			exitEditingMode();
		};

	function resetEditing() {
		setEditingIsEnabled(!editingIsEnabled);
		sessionStorage.setItem(
			"mrt_editingIsEnabled",
			JSON.stringify(!editingIsEnabled)
		);
		window.location.reload();
	}

	return (
		<MaterialReactTable
			columns={columns}
			data={data[type]}
			enableEditing={editingIsEnabled}
			editingMode={"row"}
			localization={MRT_Localization_RU}
			onEditingRowSave={handleSaveRow}
			enableGlobalFilterModes
			initialState={{
				showGlobalFilter: true,
			}}
			positionGlobalFilter="left"
			muiTableContainerProps={{
				sx: {
					"&::-webkit-scrollbar": {
						height: 8,
					},
					"&::-webkit-scrollbar-track": {
						backgroundColor: "#F8F8F8",
						borderRadius: 4,
					},
					"&::-webkit-scrollbar-thumb": {
						backgroundColor: "#B6BCC3",
						borderRadius: 4,
					},
				},
			}}
			muiSearchTextFieldProps={{
				placeholder: "Поиск",
				sx: {
					minWidth: "360px",
				},
				variant: "filled",
			}}
			renderTopToolbar={({ table }) => (
				<div className={styles.item}>
					<div className={styles.contacts}>
						<span>{data[type].length}</span> Контактов
					</div>
					<MRT_GlobalFilterTextField table={table} />
					<div className={styles.actions}>
						<Button
							onClick={resetEditing}
							isActive={editingIsEnabled}
						>
							Режим редактирования
						</Button>
					</div>
				</div>
			)}
			muiTablePaginationProps={{
				rowsPerPageOptions: [5, 10, 15],
				showFirstButton: false,
				showLastButton: false,
				labelRowsPerPage: "отображать на странице",
				labelDisplayedRows: ({ from, to, count }) => {
					return `показано ${from}–${to} из ${
						count !== -1 ? count : `${to}`
					} результатов`;
				},
			}}
		/>
	);
}

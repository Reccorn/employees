import { createSlice } from "@reduxjs/toolkit";
import { Person, getData } from "../../utils/getData";

const localData = localStorage.getItem("employees");
const initialState =
	localData !== null
		? JSON.parse(localData)
		: {
				forms: getData(Math.floor(Math.random() * (40 - 15) + 15)),
				main: getData(Math.floor(Math.random() * (40 - 15) + 15)),
				database: getData(Math.floor(Math.random() * (40 - 15) + 15)),
				calendar: getData(Math.floor(Math.random() * (40 - 15) + 15)),
				more: getData(Math.floor(Math.random() * (40 - 15) + 15)),
		  };

const dataSlice = createSlice({
	name: "data",
	initialState,
	reducers: {
		editItem: (state, action) => {
			for (const key in state) {
				state[key].forEach((item: Person) => {
					if (item._id === action.payload.id) {
						item.fullname = action.payload.name;
						item.sex = action.payload.sex;
						item.phoneNumber = action.payload.number;
						item.jobArea = action.payload.area;
						item.jobDescriptor = action.payload.descriptor;
						item.jobTitle = action.payload.title;
						item.zodiacSign = action.payload.sign;

						localStorage.setItem(
							"employees",
							JSON.stringify(state)
						);
					}
				});
			}
		},
	},
});

export const { editItem } = dataSlice.actions;
export default dataSlice.reducer;

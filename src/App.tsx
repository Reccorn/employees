import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Nav } from "./components/Nav";
import { Employees } from "./pages/employees";
import { PageContent } from "./components/PageContent";
import { PageHead } from "./components/PageContent/PageHead";
import { Schedule } from "./pages/schedule";
import { Menu } from "./pages/menu";
import { Settings } from "./pages/settings";
import { Provider } from "react-redux";
import store from "./store";

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<main>
					<Layout>
						<Nav />
						<PageContent>
							<PageHead />
							<div className="page__body">
								<Routes>
									<Route path="/">
										<Route index element={<Employees />} />
										<Route
											path="schedule"
											element={<Schedule />}
										/>
										<Route path="menu" element={<Menu />} />
										<Route
											path="settings"
											element={<Settings />}
										/>
									</Route>
								</Routes>
							</div>
						</PageContent>
					</Layout>
				</main>
			</BrowserRouter>
		</Provider>
	);
}

export default App;

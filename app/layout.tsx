import "./styles/globals.css";
import Header from "./components/navigation/Header";
import CartDrawer from "./components/overlays/CartDrawer";
// Redux store
import store from "./redux/store";
import { Provider } from "react-redux";

export const metadata = {
	title: "Elegant Telework",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				{/* <Provider store={store}> */}
				<Header />
				{children}
				<CartDrawer />
				{/* </Provider> */}
			</body>
		</html>
	);
}

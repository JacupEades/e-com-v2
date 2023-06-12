import "./styles/globals.css";
import { Providers } from "@/redux/provider";
import Header from "./components/navigation/Header";
import CartDrawer from "./components/overlays/CartDrawer";
import Footer from "./components/navigation/Footer";

export const metadata = {
	title: "Natural Nooks",
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
				<Providers>
					<Header />
					{children}
					<CartDrawer />
					<Footer />
				</Providers>
			</body>
		</html>
	);
}

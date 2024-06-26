import { Inter } from "next/font/google";
import "./globals.scss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Divider from "./components/Divider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Horus Heresy API | By Rasmus Bremholm",
	description:
		"Welcome to the Horus Heresy API. A restful API for everything Horus Heresy!",
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Navbar />
				{children}
				<Divider />
				<Footer />
			</body>
		</html>
	);
}

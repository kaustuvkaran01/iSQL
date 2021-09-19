import React from "react";
import logo from "../logo.svg";
import { FaPlus } from "react-icons/fa";
import tailwindlogo from "../images/tailwind.svg";

function Home() {
	return (
		<div className="justify-center items-center bg-gray-900 text-teal-200 h-screen flex flex-col text-2xl space-y-5">
			<p className="text-2xl">
				If you want more colors for tailwind, use this :{" "}
			</p>
			<br />
			<p className="text-2xl underline">
				https://tailwindcss.com/docs/customizing-colors#color-palette-reference
			</p>
			<a href="https://github.com/kaustuvkaran01/tailwind-starter">
				{" "}
				<p>Or simply clone this website and repo.....</p>{" "}
			</a>
			<a
				className="underline"
				href="https://github.com/kaustuvkaran01/tailwind-starter"
			>
				{" "}
				https://github.com/kaustuvkaran01/tailwind-starter
			</a>
			<div className="flex flex-row h-240">
				<img src={logo} className="App-logo-mini" alt="logo" />
				<FaPlus className="self-center ml-10" size={90} />
				{/* <SiTailwindcss className="self-center text-blue-400" size={100}/> */}
				<img
					src={tailwindlogo}
					className="h-24 self-center ml-24"
					alt="tailwindlogo"
				/>
			</div>
		</div>
	);
}

export default Home;

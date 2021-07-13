import "./App.css";
import Header from "./components/header/header.component";
import Card from "./components/cards/cards.component";
import { useState, useEffect } from "react";
import myJSON from "./quotes";

function App() {
	const [quote, setquote] = useState("");
	const [data, setdata] = useState([]);
	const [score, setscore] = useState(0);
	const [hscore, sethscore] = useState(2);
	const [clicked, setclicked] = useState([]);

	useEffect(() => {
		let response = async () => fetch(fetchRandM(14));
		response();
	}, []);

	const fetchRandM = async (amount) => {
		const rickandmorty = [];

		for (let i = 1; i <= amount; i++) {
			const data = await fetch(
				`https://rickandmortyapi.com/api/character/${i}`
			);
			const info = await data.json();
			rickandmorty.push([info.name, info.image, info.id]);
		}
		// await console.log(rickandmorty);
		setdata(rickandmorty);
	};

	const HeaderQuote = async () => {
		const data = await myJSON[Math.floor(Math.random() * myJSON.length)];

		const ans = data;
		setquote(ans);
	};

	useEffect(() => {
		let resp = async () => fetch(HeaderQuote());
		resp();
	}, []);

	const shuffleArray = (array) => {
		return [...array].sort(() => Math.random() - 0.5);
	};
	// let f = 0;

	const handleClick = (name) => {
		// console.log(typeof name);
		const f = clicked.includes(name);

		if (!f) {
			let x = score + 1;
			if (x > hscore) {
				sethscore(x);
				console.log(hscore);
			}
			setscore(x);
			setclicked((cliked) => [...clicked, name]);
		} else {
			setscore(0);
			setclicked([]);
		}
		setdata(shuffleArray(data));
	};

	return (
		<div className="App">
			<Header quote={quote} score={score} highestscore={hscore} />
			<div className="main">
				{data.map((card_detals) => {
					return (
						<Card
							key={card_detals[2]}
							name={card_detals[0]}
							image={card_detals[1]}
							handleclick={handleClick}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default App;

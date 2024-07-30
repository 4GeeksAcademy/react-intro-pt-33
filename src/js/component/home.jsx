import React, { useState } from "react";
// parte logica
const pickRandomItem = (list) => {
	let numRandom = Math.floor(Math.random() * list.length);
	return list[numRandom];
}

let symbols = ["♦", "♥", "♠", "♣"];
let values = [
	"A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"
];

const cardStyles = {
	width: "18rem",
	margin: "auto",
	height: '400px',
	fontSize: '86px',
}

const generateRandomCard = () => {

	const selectedSymbol = pickRandomItem(symbols);
	return {
		symbol: selectedSymbol,
		value: pickRandomItem(values),
		color: (selectedSymbol === "♦" || selectedSymbol === "♥") ? "red" : "black"
	};
}

const Card = () => {

	// parte logica
	const [card, setCard] = useState(generateRandomCard()); // <------ estado

	// parte visual	
	return (
		<div className="d-flex flex-column">
		<div className="card" style={cardStyles}>
			<div className="card-body d-flex flex-column justify-content-between">
				
				<h5 className="card-title text-start" style={{ fontSize: '76px', color: card.color }}>
					{card.symbol}
				</h5>

				<p className="card-text text-center">{card.value}</p>

				<h5 className="card-title text-start"
					style={{ fontSize: '76px', transform: 'rotate(180deg)', color: card.color }}
					>
					{card.symbol}
				</h5>
			</div>
			</div>
			<button className="btn btn-primary my-2"
				onClick={() => setCard(generateRandomCard())}
			>
				Generate
			</button>
		</div>
	)
};

//create your first component
const Home = () => {

	const cards = [ <Card />, <Card />, <Card />, <Card /> ];

	return (
		<>
			<h1 className="mx-auto">Random Card Generator</h1>
			<div className="d-flex flex-wrap gap-2 justify-content-center
				align-items-center" style={{ height: '100%' }}>
				{cards}
			</div>
		</>
	);
};

export default Home;

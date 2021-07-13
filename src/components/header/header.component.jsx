import "./score.styles.css";

const Header = ({ quote, score, highestscore }) => {
	// const [quote, setquote] = useS;
	return (
		<div className="header">
			{/* {console.log(quote)} */}
			<h1>{quote}</h1>
			<div className="score glow">
				<h3>Score: {score} </h3>
				<h3>Highest Score:{highestscore}</h3>
			</div>
		</div>
	);
};

export default Header;

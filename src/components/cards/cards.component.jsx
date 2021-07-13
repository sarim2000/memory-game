import "./cards.styles.css";

const Card = ({ name, image, handleclick }) => {
	return (
		// {console.log(name)}
		<div className="card">
			<img src={image} alt={name} onClick={() => handleclick(name)} />
			<div className="name">
				<h4 className="glow">{name}</h4>
			</div>
		</div>
	);
};

export default Card;

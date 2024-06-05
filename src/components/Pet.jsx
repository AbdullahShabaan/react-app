import { Link } from "react-router-dom";

const Pet = (props) => {
  return (
    <Link to={`/Details/${props.id}`} className="pet">
      <div className="image-container">
        <img src={props.images[0]} alt="Animal"></img>
      </div>
      <div className="info">
        <h1>{props.name}</h1>
        <h2>{`${props.animal} — ${props.breed} — ${props.location}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;

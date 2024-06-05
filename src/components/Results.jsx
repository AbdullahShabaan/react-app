import Loader from "./Loader";
import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length && (
        <div style={{ textAlign: "center" }}>
          <Loader />
        </div>
      )}
      {pets &&
        pets.map((e) => {
          return (
            <Pet
              name={e.name}
              animal={e.animal}
              key={e.id}
              breed={e.breed}
              images={e.images}
              location={e.city}
              id={e.id}
            />
          );
        })}
    </div>
  );
};

export default Results;

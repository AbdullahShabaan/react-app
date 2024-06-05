import { useContext, useState } from "react";
import useBreeds from "../hooks/useBreeds";
import Results from "../components/Results";
import useSearch from "../hooks/useSearch";
import ErrorBoundary from "../components/ErrorBoundary";
import AdoptPet from "../Contexts/AdoptPet";

const ANIMAL = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [searchParams, setSearchParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });
  const breedsQuery = useBreeds(searchParams.animal);
  const breeds = breedsQuery?.data?.breeds || [];

  const searchQuery = useSearch(searchParams);
  const pets = searchQuery?.data?.pets;

  const [contextValue] = useContext(AdoptPet);
  return (
    <div>
      <div className="search-params">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSearchParams({
              location: e.target.location.value,
              animal: e.target.animal.value,
              breed: e.target.breed.value,
            });
          }}
        >
          {contextValue && (
            <div className="pet image-container">
              <img src={contextValue.images[0]} alt={contextValue.name} />
            </div>
          )}

          <label htmlFor="location">
            Location:
            <input
              type="text"
              name="location"
              id="location"
              placeholder="Location"
              onChange={(e) => {
                // setLocation(e.target.value);
                // setSearchParams({
                //   ...searchParams,
                //   location: e.target.value,
                // });
              }}
            />
          </label>
          <label htmlFor="animal">
            Animal:
            <select
              name="animal"
              id="animal"
              onChange={(e) => {
                // setAnimal(e.target.value);
                setSearchParams({
                  ...searchParams,
                  animal: e.target.value,
                });
              }}
            >
              {ANIMAL.map((e) => {
                return (
                  <option key={e} value={e}>
                    {e}
                  </option>
                );
              })}
            </select>
          </label>
          <label htmlFor="breed">
            Breed:
            <select
              name="breed"
              id="breed"
              disabled={!breeds.length}
              onChange={(e) => {
                // setBreed(e.target.value);
                // setSearchParams({
                //   ...searchParams,
                //   breed: e.target.value,
                // });
              }}
            >
              {breeds.map((e) => {
                return (
                  <option key={e} value={e}>
                    {e}
                  </option>
                );
              })}
            </select>
          </label>
          <button>Search</button>
        </form>
      </div>
      {searchQuery.isError && <span>{searchQuery.error}</span>}
      {searchQuery.data && (
        <ErrorBoundary>
          <Results pets={pets} />
        </ErrorBoundary>
      )}
    </div>
  );
};

export default SearchParams;

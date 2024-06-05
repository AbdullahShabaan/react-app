import { useQuery } from "@tanstack/react-query";

const fetchPets = async ({ queryKey }) => {
  const [, { animal, location, breed }] = queryKey;
  const req = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  );
  return req.json();
};
const useSearch = (searchParams) => {
  return useQuery({
    queryKey: ["pet", searchParams],
    queryFn: fetchPets,
  });
};

export default useSearch;

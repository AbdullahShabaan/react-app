import { useQuery } from "@tanstack/react-query";

const fetchPet = async ({ queryKey }) => {
  const [, id] = queryKey;
  const req = await fetch(`https://pets-v2.dev-apis.com/pets?id=${id}`);
  return req.json();
};
const usePet = (petId) => {
  return useQuery({
    queryKey: ["pet", petId],
    queryFn: fetchPet,
  });
};

export default usePet;

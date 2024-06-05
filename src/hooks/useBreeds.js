import { useQuery } from "@tanstack/react-query";

const fetchBreed = async ({ queryKey }) => {
  const [, animal] = queryKey;
  if (!animal) {
    return [];
  }
  const req = await fetch(
    `https://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );
  return req.json();
};
const breedList = (animal) => {
  return useQuery({
    queryKey: ["breed", animal],
    queryFn: fetchBreed,
  });
};

export default breedList;

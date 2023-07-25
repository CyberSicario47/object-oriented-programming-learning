import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const ReactQuery = () => {
  const fetchData = async () => {
      const pokemon = await axios.get("https://pokeapi.co/api/v2/pokemon");
    //   throw new Error("teest")
      return pokemon.data?.results;
    
  };
  const { data, isLoading, isError, error } = useQuery("pokemon", fetchData);
  return (
    <div style={{ color: "#fff" }}>
      ReactQuery
      <div>
        {isLoading ? (
          <h2>isLoading...</h2>
        ) : isError ? (
          <h2>Error...{error.message}</h2>
        ) : (
          data.map((result, index) => {
            return <div key={index}>{result.name}</div>;
          })
        )}
      </div>
    </div>
  );
};

export default ReactQuery;

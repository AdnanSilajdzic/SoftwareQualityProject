import axios from "axios";

export const fetchSearchResults = async (category: string, searchString: string) => {
  const apiCategory = category === "movies" ? "movie" : "tv";
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/search/${apiCategory}?query=${searchString}&include_adult=false&language=en-US&page=1`,
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYWVmMWE3MDM5NTAwN2VlN2JjMjk3NDQzM2QxNzI0NSIsInN1YiI6IjY2M2E3OThmOTNlN2I2ODFmZDI3YTQ3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._9XkOfJi3BLQNE7vYvP5vFGcngpFgO2hbpi7Q8wXVs4",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data.results;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch search results");
  }
};

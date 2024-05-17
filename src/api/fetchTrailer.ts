import axios from "axios";

export const fetchTrailer = async (id: string, category: string) => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/${category}/${id}/videos?language=en-US`,
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYWVmMWE3MDM5NTAwN2VlN2JjMjk3NDQzM2QxNzI0NSIsInN1YiI6IjY2M2E3OThmOTNlN2I2ODFmZDI3YTQ3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._9XkOfJi3BLQNE7vYvP5vFGcngpFgO2hbpi7Q8wXVs4",
    },
  };

  try {
    const response = await axios.request(options);
    const trailer = response.data.results.find((element: any) => {
      return element.type === "Trailer" && element.site === "YouTube";
    });
    if (trailer) {
      return trailer.key;
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch details");
  }
};

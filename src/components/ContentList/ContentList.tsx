import { useEffect, useState, useRef } from "react";
import ContentCard from "../ContentCard/ContentCard";
import styles from "./ContentList.module.css";
import { fetchTopRatedContent } from "../../api/fetchTopRatedContent";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { fetchSearchResults } from "../../api/fetchSearchResults";
import { BarLoader } from "react-spinners";

interface MovieData {
  id: number;
  title: string; // for movies
  name: string; // for tv shows
  poster_path: string;
  first_air_date: string; // for tv shows
  release_date: string; // for movies
}

const ContentList = () => {
  const searchCategory = useSelector((state: RootState) => state.search.searchCategory);
  const searchString = useSelector((state: RootState) => state.search.searchString);
  const searchResults = useSelector((state: RootState) => state.search.searchResults);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const searchStringRef = useRef<string | null>(null);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        setLoading(true);
        const data =
          searchString.length > 2
            ? await fetchSearchResults(searchCategory, searchString)
            : await fetchTopRatedContent(searchCategory);
        dispatch({ type: "search/setSearchResults", payload: data });
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    if (searchStringRef.current !== null) {
      searchStringRef.current = searchString;
      setTimeout(() => {
        if (searchStringRef.current === searchString) {
          fetchResults();
        }
      }, 1000);
    } else {
      searchStringRef.current = searchString;
      fetchResults();
    }
  }, [searchCategory, searchString, dispatch]);

  useEffect(() => {
    setLoading(true);
  }, [searchCategory]);

  return (
    <div className={styles.movielist}>
      {loading ? (
        <div className="spinner-border" role="status">
          <BarLoader color="white" />
        </div>
      ) : (
        <>
          {/*lists only the top ten movies */}
          {searchResults.slice(0, 10).map((movie, index) => (
            <ContentCard
              key={index}
              id={movie.id}
              title={searchCategory === "movies" ? movie.title : movie.name}
              posterUrl={
                movie.poster_path != null
                  ? `http://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : null
              }
              release_date={
                searchCategory === "movies" ? movie.release_date : movie.first_air_date
              }
            />
          ))}
        </>
      )}
    </div>
  );
};

export default ContentList;

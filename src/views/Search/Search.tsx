import styles from "./Search.module.css";
import "../../index.css";

import CategorySwitch from "../../components/CategorySwitch/CategorySwitch";
import Searchbar from "../../components/Searchbar/Searchbar";
import ContentList from "../../components/ContentList/ContentList";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

const Search = () => {
  const currentCategory = useSelector((state: RootState) => state.search.searchCategory);
  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <h1>Disover your next favourite</h1>
        <h1>{currentCategory === "movies" ? "Movie" : "TV Show"}</h1>
      </div>

      <div className={styles.switchContainer}>
        <CategorySwitch />
      </div>

      <div className={styles.searchbarContainer}>
        <Searchbar />
      </div>

      <div className={styles.movielist}>
        <ContentList />
      </div>
    </div>
  );
};

export default Search;

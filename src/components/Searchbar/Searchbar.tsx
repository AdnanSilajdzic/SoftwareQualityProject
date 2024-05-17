import styles from "./Searchbar.module.css";
import SearchIcon from "../../assets/icons/search.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/store";

const Searchbar = () => {
  const searchString = useSelector((state: RootState) => state.search.searchString);
  const currentCategory = useSelector((state: RootState) => state.search.searchCategory);
  const dispatch = useDispatch();

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.searchbar}
        placeholder={`Search ${currentCategory === "movies" ? "movies" : "TV Shows"}`}
        value={searchString}
        onChange={(e) => {
          dispatch({ type: "search/setSearchString", payload: e.target.value });
        }}
      />
      <img src={SearchIcon} className={styles.searchIcon}></img>
    </div>
  );
};

export default Searchbar;

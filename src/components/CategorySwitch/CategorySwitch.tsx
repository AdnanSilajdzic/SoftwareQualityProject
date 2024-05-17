import styles from "./CategorySwitch.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/store";

const CategorySwitch = () => {
  const searchCategory = useSelector((state: RootState) => state.search.searchCategory);
  const dispatch = useDispatch();

  return (
    <div className={styles.switch}>
      <a
        className={searchCategory === "movies" ? styles.active : styles.inactive}
        onClick={() => dispatch({ type: "search/setSearchCategory", payload: "movies" })}
      >
        Movies
      </a>
      <a
        className={searchCategory === "tv" ? styles.active : styles.inactive}
        onClick={() => dispatch({ type: "search/setSearchCategory", payload: "tv" })}
      >
        TV
      </a>
    </div>
  );
};

export default CategorySwitch;

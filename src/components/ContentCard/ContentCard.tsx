import styles from "./ContentCard.module.css";
import calendarIcon from "../../assets/icons/calendar.svg";
import noPoster from "../../assets/images/no-poster-available.jpg";
import arrow from "../../assets/icons/arrow.svg";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { useNavigate } from "react-router-dom";

type props = {
  id: number;
  title: string;
  posterUrl: string | null;
  release_date: string;
};
const ContentCard = ({ id, title, posterUrl, release_date }: props) => {
  const navigate = useNavigate();
  const searchCategory = useSelector((state: RootState) => state.search.searchCategory);
  return (
    <div
      className={styles.card}
      onClick={() => {
        navigate(`/${searchCategory === "movies" ? "movie" : "tv"}/${id}`);
      }}
    >
      <a className={styles.hiddenText}>
        Click for more <img src={arrow}></img>
      </a>
      <img src={posterUrl != null ? posterUrl : noPoster} className={styles.poster}></img>
      <h3 className={styles.movieName}>{title}</h3>
      <div className={styles.info}>
        <img src={calendarIcon} className={styles.icon}></img>
        <p className={styles.year}>
          {release_date && release_date != "" ? release_date.split("-")[0] : "unknown"}
        </p>
      </div>
    </div>
  );
};

export default ContentCard;

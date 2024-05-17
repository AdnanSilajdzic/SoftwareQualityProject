import styles from "./DetailsTrailer.module.css";

type Props = {
  trailer: string | null;
  coverImage: string | null;
};

const DetailsTrailer = ({ trailer, coverImage }: Props) => {
  return (
    <div className={styles.trailerContainer}>
      {trailer ? (
        <iframe
          className={styles.trailer}
          frameBorder="0"
          src={`https://www.youtube.com/embed/${trailer}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <img
          className={styles.backdrop}
          src={`http://image.tmdb.org/t/p/original${coverImage}`}
          alt="cover"
        />
      )}
    </div>
  );
};

export default DetailsTrailer;

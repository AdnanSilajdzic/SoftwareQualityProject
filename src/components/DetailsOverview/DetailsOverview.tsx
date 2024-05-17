import styles from "./DetailsOverview.module.css";
type props = {
  contentDetails: any;
};

const DetailsOverview = ({ contentDetails }: props) => {
  return (
    <div className={styles.container}>
      <div className={styles.overviewContainer}>
        <h1>{contentDetails?.title || contentDetails?.name}</h1>
        <div className={styles.splitDetails}>
          <div className={styles.content}>
            <p>
              <b>Rating: </b>
              {contentDetails?.vote_average} / 10
            </p>
            <p>
              <b>Release Date: </b>{" "}
              {contentDetails?.release_date || contentDetails.first_air_date}
            </p>
            {contentDetails?.runtime ? (
              <p>
                <b>Runtime: </b> {contentDetails?.runtime} minutes
              </p>
            ) : (
              <p>
                <b>Number of Seasons: </b> {contentDetails?.number_of_seasons}
              </p>
            )}
          </div>
          <div className={styles.content}>
            <p>{contentDetails?.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsOverview;

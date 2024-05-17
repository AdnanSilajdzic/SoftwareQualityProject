import styles from "./Details.module.css";
import "../../index.css";
import { useEffect, useState } from "react";
import { fetchContentDetails } from "../../api/fetchContentDetails";
import { fetchTrailer } from "../../api/fetchTrailer";
import arrowIcon from "../../assets/icons/arrow.svg";
import DetailsTrailer from "../../components/DetailsTrailer/DetailsTrailer";
import DetailsOverview from "../../components/DetailsOverview/DetailsOverview";
import BarLoader from "react-spinners/BarLoader";

const Details = () => {
  const [contentDetails, setContentDetails] = useState<any>(null);
  const [trailer, setTrailer] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData(id: string, type: string) {
      try {
        const data = await fetchContentDetails(id, type);
        const trailerData = await fetchTrailer(id, type);
        setContentDetails(data);
        setTrailer(trailerData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    // Get id from url
    const id = window.location.pathname.split("/")[2];
    const type = window.location.pathname.split("/")[1];

    // Fetch data from api
    fetchData(id, type);
  }, []);

  return (
    <div className={styles.main}>
      <div
        className={styles.arrowContainer}
        onClick={() => {
          window.history.back();
        }}
      >
        <img src={arrowIcon} className={styles.arrowIcon} alt="Arrow Icon" />
        <p>back</p>
      </div>

      {/* Display loading indicator */}
      {loading && (
        <div className={styles.center}>
          <BarLoader color="white" />
        </div>
      )}

      {/* Render DetailsTrailer component once data is loaded */}
      {!loading && (
        <>
          <DetailsTrailer trailer={trailer} coverImage={contentDetails?.backdrop_path} />
          <DetailsOverview contentDetails={contentDetails} />
        </>
      )}
    </div>
  );
};

export default Details;

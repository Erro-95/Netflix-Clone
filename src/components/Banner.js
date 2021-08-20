import React, { useState, useEffect } from "react";
import styles from "../styles/modules/Banner.module.css";
import axios from "../api/axios";
import requests from "../api/Requests";

export default function Banner() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const {
          data: { results },
        } = await axios(requests.fetchTrending);

        setMovie(results[Math.floor(Math.random() * results.length - 1)]);
      } catch (err) {
        console.error(err.message);
      }
    }
    fetchData();
  }, []);

  const truncate = (string, n) => {
    return string?.length > n ? string.substring(0, n - 1) + "..." : string;
  };

  return (
    <header
      className={styles.banner}
      style={{
        backgroundSize: "max(100vw, 900px)",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "center top",
      }}
    >
      <div className={styles.banner_contents}>
        <h1 className={styles.banner_title}>
          {movie?.title || movie?.original_title}
        </h1>
        <h1 className={styles.banner_description}>
          {truncate(movie?.overview, 200)}
        </h1>
        <div className={styles.banner_buttons}>
          <button
            className={`${styles.banner_button} ${styles.banner_play_button}`}
          >
            Play
          </button>
          <button
            className={`${styles.banner_button} ${styles.banner_info_button}`}
          >
            More Info
          </button>
        </div>
      </div>

      <div className={styles.fade_bottom} />
    </header>
  );
}

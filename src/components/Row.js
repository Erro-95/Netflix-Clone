import React, { useState, useEffect } from "react";
import { Card } from "./";
import styles from "../styles/modules/Row.module.css";
import { axios } from "../api";

export default function Row({ title, fetchUrl }) {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const {
          data: { results },
        } = await axios(fetchUrl);

        setmovies(results);
      } catch (err) {
        console.error(err.message);
      }
    }

    fetchMovies();
  }, []);

  return (
    <section className={styles.row}>
      <h1 className={styles.row_title}>{title}</h1>
      {movies.map((movie) => {
        return <Card poster={movie.poster_path} />;
      })}
    </section>
  );
}

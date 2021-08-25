import { useState, useEffect, Suspense } from "react";
import SwiperCore, { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../styles/modules/Row.module.css";
import { axios } from "../api";
import "swiper/swiper-bundle.css";

SwiperCore.use([Pagination, Navigation]);

export default function Row({ title, fetchUrl, isLargeRow = false }) {
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
  }, [fetchUrl]);

  const url = "https://image.tmdb.org/t/p/original";

  const config = {
    loop: true,
    navigation: true,
    wrapperTag: "ul",
    spaceBetween: 5,
    slidesPerGroup: 6,
    slidesPerView: 6,
  };

  return (
    <section className={styles.row}>
      <h3 className={styles.row_title}>{title}</h3>
      <Swiper {...config}>
        {!movies.length ? (
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
        ) : (
          movies.map((movie) => {
            return (
              <SwiperSlide key={movie.id} tag="li">
                <img
                  className={styles.row_poster}
                  src={`${url}${
                    isLargeRow ? movie?.poster_path : movie?.backdrop_path
                  }`}
                  alt={movie?.title || movie?.oriiginal_title}
                />
              </SwiperSlide>
            );
          })
        )}
      </Swiper>
    </section>
  );
}

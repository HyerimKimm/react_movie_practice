import React, { useEffect, useState } from 'react';
import Movie from '../component/Movie';
import styles from './Movies.module.css'

const Movies = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(()=>{
    getMovies();
  },[]);
//movie API 데이터를 가져오는 메소드
  const getMovies = async ()=>{
    const response = await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year');
    const jsonMovies = await response.json();
    setMovies(jsonMovies.data.movies);
    setLoading(false);
  }
  return (
    <div className={styles.moviesPage}>
        {loading?
           <h1 className={styles.loading}>Loading . . . 🏃🏻‍♀️</h1>
        :(
          <main className={styles.movie_back}>
            <h1 className={styles.headTitle}>Movies!</h1>
            <ul className={styles.movies}>
              {movies.map((ele)=>{
                return <Movie key={ele.id} movie={ele}/>
              })}
            </ul>
            <footer>
              <h2 className={styles.footerTItle}> ✻ made by HYERIM KIM</h2>
              <div>📞 010-2648-2610</div>
              <div>✉️ helim01033@naver.com</div>
            </footer>
          </main>
        )}
    </div>
  );
};

export default Movies;
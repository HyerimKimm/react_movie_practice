import React from 'react';
import styles from './movie.module.css'

//무비목록 item 컴포넌트
const Movie = ({movie}) => {
    const genres = movie.genres;
    return (
        <li className={styles.movieItem}>
            <button className={styles.movieItemButton}>
            <h3 className={styles.movieItemTitle}>{movie.title}</h3>
            <section className={styles.movieItemInfo}>
                <img className={styles.movieItemInfoPoster} src={movie.medium_cover_image}/>
                <section className={styles.movieItemInfoMain}>
                    <div className={styles.mmovieItemInfoMainGenre}>genres: {genres.map((e,idx,arr)=>{
                        return (arr.length-1===idx)?
                        <>{e}</> :<>{`${e}, `}</>
                    })}</div>
                    <div className={styles.movieItemInfoMainDescription}>{movie.description_full}</div>
                </section>
            </section>
            </button>
        </li>
    );
};

export default Movie;
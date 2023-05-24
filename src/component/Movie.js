import React from 'react';
import styles from './movie.module.css'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

//무비목록 item 컴포넌트
const Movie = ({movie}) => {
    const genres = movie.genres;

    return (
        <li className={styles.movieItem}>
            <Link to={`/detail/${movie.id}`} className={styles.movieItemButton}>
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
            </Link>
        </li>
    );
};

Movie.propTypes = {
    movie:PropTypes.object.isRequired,
}

export default Movie;
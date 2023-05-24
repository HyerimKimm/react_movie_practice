import React from 'react';
import styles from '../component/MovieProfile.module.css'

const MovieProfile = ({movie}) => {
    return (
        <section className={styles.detailSection}>
            <h2 className={styles.title}>{movie.title}</h2>
            <section className={styles.detailWithoutTitle}>
                <img className={styles.detailImg} src={movie.medium_cover_image}/>
            </section>
        </section>
    );
};

export default MovieProfile;
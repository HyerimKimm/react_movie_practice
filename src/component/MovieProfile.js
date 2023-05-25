import React from 'react';
import styles from '../component/MovieProfile.module.css'

const MovieProfile = ({movie}) => {
    let genres = movie.genres;
    let strGenres = '';

    for(let i in genres){
        strGenres += genres[i];
        if(i==(genres.length-1)) break;
        strGenres+=', '
    }

    return (
        <section className={styles.detailSection}>
            <h2 className={styles.title}>{movie.title}</h2>
            <section className={styles.detailWithoutTitle}>
                <section className={styles.detailImgSection}>
                <img className={styles.detailImg} src={movie.medium_cover_image}/>
                </section>
                <section className={styles.detailInfoSection}>
                    <section className={styles.detailSmallInfos}>
                        <section>genre : {strGenres}</section>
                        <section className={styles.smallPatition}></section>
                        <section> rating : {movie.rating}</section>
                        <section className={styles.smallPatition}></section>
                        <section >runtime : {movie.runtime}</section>
                    </section>
                    <section className={styles.detailInfoDescription}>
                        {movie.description_intro}
                    </section>
                </section>
            </section>
        </section>
    );
};

export default MovieProfile;
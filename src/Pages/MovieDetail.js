import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import styles from '../Pages/MovieDetail.module.css'
import MovieProfile from '../component/MovieProfile';

const MovieDetail = () => {
const { id } = useParams();
let [movieDetailData,setmovieDetailData] = useState({});

const fetchMovieDetail = async () => {
    const fetchUrl = `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`;
    const 데이터원본 = await fetch(fetchUrl);
    const json데이터 = await 데이터원본.json();
    setmovieDetailData(json데이터.data.movie);
}

useEffect(()=>{
    fetchMovieDetail();
},[]);

    return (
        <body className={styles.detailBody}>
            <main className={styles.detailMain}>
                <MovieProfile movie={movieDetailData}/>
            </main>
        </body>
        
    );
};

export default MovieDetail;
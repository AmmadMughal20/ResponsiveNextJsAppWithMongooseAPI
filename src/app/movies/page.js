import Link from 'next/link';
import React from 'react';
import MovieCard from '../components/MovieCard';
import styles from '@/app/styles/common.module.css';

export default async function Page() {
    await new Promise(resolve => setTimeout(resolve, 2000));
    const url = process.env.RAPID_KEY
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a64d44594cmsh9ec4279ce78b484p1780aajsn93f7073fa1f8',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };
    const res = await fetch(url, options)
    const data = await res.json()
    const main_data = data.titles
    console.log(data.titles[1].jawSummary.backgroundImage.url, 'Movies')
    return (
        <>
            <section className={`${styles.movieSection}`}>
                <div className={styles.container}>
                    <h1>
                        Movies & Series
                    </h1>
                    <div className={styles.card_section}>
                        {
                            main_data.map((currElem) => {
                                return <MovieCard key={currElem.id} {...currElem} />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

import heroStyles from '@/app/styles/herosection.module.css';
import styles from '@/app/styles/common.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Herosection({ title, imageUrl, description }) {
    return (
        <main className={heroStyles.main_section}>
            <div className={styles.container}>
                <div className={styles.grid_two_section}>
                    <div className={heroStyles.hero_content}>
                        <h1>
                            {title}
                        </h1>
                        <p>
                            {description}
                        </p>
                        <Link href="/movies">
                            <button>
                                Explore Movies
                            </button>
                        </Link>
                    </div>
                    <div className={heroStyles.hero_image}>
                        <Image src={imageUrl} alt="watching netflix" width={500} height={500} />
                    </div>
                </div>
            </div>
        </main>
    )
}

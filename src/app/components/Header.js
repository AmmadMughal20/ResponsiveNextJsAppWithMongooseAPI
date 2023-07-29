import styles from '@/app/styles/navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Nav from './Nav';
export default function Header() {
    return (
        <>
            <header className={styles.main_header}>
                <div className={styles.navbar_brand}>
                    <Link href='/' >
                        <Image src='/logo.png' alt='my logo' width={150} height={40}/>
                    </Link>
                </div>
                <Nav />
            </header>
        </>
    )
}

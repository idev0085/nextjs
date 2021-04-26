import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Debanjan Sarkar'
export const siteTitle = 'Welcome'

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <meta name="og:title" content={siteTitle} />
            </Head>
            <header className={styles.header}>
                {
                    !home &&
                    <div className='childwithlist'>
                        <Link href="/">
                            <a>Back to Home</a>
                        </Link>
                    </div>
                }
                <h1 className={utilStyles.heading2Xl}>{siteTitle}</h1>

            </header>
            <main>{children}</main>
        </div>
    )
}
import Head from 'next/head'
import Layout, { siteTitle } from '@components/layout'
import { SocialFacebook, SocialGoogle } from "@components/index";
export default function Login() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className='center'>
                <div className='child'>
                    <SocialFacebook />
                    <SocialGoogle />
                </div>
            </div>
        </Layout>
    )
}
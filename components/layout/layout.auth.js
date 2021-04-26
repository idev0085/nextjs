import Head from "next/head";
export default function LayoutAuth(props) {
    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Clubbie Web</title>
            </Head>
            <div id="main">{props.children}</div>
        </div>
    );
}
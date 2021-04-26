// import '../styles/global.css'

// export default function App({ Component, pageProps }) {
//     return <Component {...pageProps} />
// }


// import App from 'next/app';
// import { Provider } from 'react-redux';
// import React from 'react';
// import withRedux from "next-redux-wrapper";
// import store from '../redux/store';
// import '../styles/global.css'




// class MyApp extends App {

//     static async getInitialProps({ Component, ctx }) {
//         const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

//         //Anything returned here can be accessed by the client
//         return { pageProps: pageProps };
//     }

//     render() {
//         //pageProps that were returned  from 'getInitialProps' are stored in the props i.e. pageprops
//         const { Component, pageProps, store } = this.props;

//         return (
//             <Provider store={store}>
//                 <Component {...pageProps} />
//             </Provider>
//         );
//     }
// }

// //makeStore function that returns a new store for every request
// const makeStore = () => store;

// //withRedux wrapper that passes the store to the App Component
// export default withRedux(makeStore)(MyApp);




import { Provider } from 'react-redux';
import App from 'next/app';
import withRedux from 'next-redux-wrapper';
//import { initStore } from '../redux';
import store from '../redux/store';
import '../styles/global.css'
export default withRedux(store, { debug: true })(
    class MyApp extends App {

        static async getInitialProps({ Component, ctx }) {
            return {
                pageProps: {
                    ...(Component.getInitialProps
                        ? await Component.getInitialProps(ctx)
                        : {})
                }
            };
        }

        render() {
            const { Component, pageProps, store } = this.props;
            return (
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            );
        }
    }
);



import React from 'react';
import Head from 'next/head'
import Layout, { siteTitle } from '@components/layout'
import { connect } from 'react-redux';
import { decrementCounter, incrementCounter } from '@redux/actions/counterActions';
import Button from '@material-ui/core/Button';
import Link from 'next/link'

class Home extends React.Component {

  static getInitialProps({ store }) { }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <div className='childwithlist'>
          <Link href="/auth/login">
            <a>1. Check Social Login</a>
          </Link>
        </div>
        <div className='childwithlist'>
          <Link href="/forms/basic">
            <a>2. Form (Formik) basic</a>
          </Link>
        </div>
        <div className='childwithlist'>
          <Link href="/forms/advance">
            <a>3. Form (Formik) advance</a>
          </Link>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  counter: state.counter.value
});

const mapDispatchToProps = {
  incrementCounter: incrementCounter,
  decrementCounter: decrementCounter,
};

export default connect(mapStateToProps, null)(Home);
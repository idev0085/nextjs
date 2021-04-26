import Head from 'next/head'
import Layout from '@components/layout'

import { useFormik } from 'formik';



const siteTitle = 'Formik'
export default function BasicForm() {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: ''
        },
        onSubmit: values => {
            console.log('Form Values', values)
        },
        validate: values => {
            let errors = {};

            if (!values.name) {
                errors.name = 'Reqired!'
            }

            if (!values.email) {
                errors.email = 'Reqired!'
            }


            return errors
        }
    })

    console.log('Form vistted', formik.touched)


    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className='center'>

                <form onSubmit={formik.handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}

                    />

                    {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}

                    <br />
                    <label htmlFor="name">Email</label>
                    <input id="email" name="email" type="text" onChange={formik.handleChange} value={formik.values.email} />
                    <br />

                    <br />
                    <button type="submit">Register</button>
                </form>

            </div>
        </Layout>
    )
}
import Head from 'next/head'
import Navbar from './Navbar'

const Layout = (props) => (
    <div>
        <Head>
            <title>BitzPrice-IK</title>
            <meta name="google-site-verification" content="2rEb2Fi3D2UcWy8buxLnvPVecn8m0ZiO0k3ilNf4oM4" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta
            name="description"
            content="IK next second app to analyze analytics of spa application in cybage"
            />
            <link  rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css"></link>
        </Head>
        <Navbar/>
        <div className="container">
            {props.children}
        </div>
    </div>
);

export default Layout
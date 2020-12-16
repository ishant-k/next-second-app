import Head from 'next/head'
import Navbar from './Navbar'

const Layout = (props) => (
    <div>
        <Head>
            <title>BitzPrice-IK</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta
            name="description"
            content="IK next first app to analyze analytics of spa application in cybage"
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
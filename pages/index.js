import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import Prices from '../components/Prices'

function Index(props) {
    return <Layout>
            <div>
                <h1>Welcome to BitzPrice</h1>
                <Prices bpi={props.bpi}/>
            </div>
            <br></br>
            <p>This is your awesome HomePage subtitle1</p>
            <br></br>
            <div class="w3-display-container w3-container">
                <img src="https://www.w3schools.com/w3images/jeans.jpg" title="cybage jeans" alt="Jeans"></img>
                <div class="w3-display-topleft w3-text-white">
                    <h1 class="w3-jumbo w3-hide-small">New arrivals</h1>
                    <h1 class="w3-hide-small">COLLECTION 2016</h1>
                    <p><a href="/contact" class="w3-button w3-black w3-padding-large w3-large">SHOP NOW</a></p>
                </div>
            </div>
        </Layout>
}

Index.getInitialProps = async function(){
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await res.json();

    return {
        bpi: data.bpi
    };
}

export default Index
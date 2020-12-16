import Layout from '../components/Layout'

function About() {
    return <Layout>
            <div>
                <h1>About to BitzPrice</h1>
            </div>
            <br></br>
            <p>This is your awesome about us subtitle</p>


            <p>The Cafe was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>In addition to our full espresso and brew bar menu, we serve fresh made-to-order breakfast and lunch sandwiches, as well as a selection of sides and salads and other good stuff.</p>
            <div class="w3-panel w3-leftbar w3-light-grey">
                <p><i>"Use products from nature for what it's worth - but never too early, nor too late." Fresh is the new sweet.</i></p>
                <p>Chef, Coffeeist and Owner: Liam Brown</p>
            </div>
            <img src="https://www.w3schools.com/w3images/coffeeshop.jpg" class="w3-margin-top" title="cybage coffeeshop" alt="coffeeshop"></img>
            <p><strong>Opening hours:</strong> everyday from 6am to 5pm.</p>
        </Layout>  
}

export default About
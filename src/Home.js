import React from 'react'
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""></img>
            <div className="home__row">
                <Product id="12345" 
                    title="The Da Vinci Code" 
                    price={5000}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/41efGoaRcRL._AC_SY445_.jpg">
                </Product>
                <Product id="12345" 
                    title="The Da Vinci Code" 
                    price={5000}
                    rating={4}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq8aONuxpjFZ4YkPBGL8WTMAONGgwMH6AgI0TUU7T1ClnRicN9PLhSmbjVkA&usqp=CAc">
                </Product>   
            </div>
            <div className="home__row">
                <Product id="12345" 
                    title="The Da Vinci Code" 
                    price={5000}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/8161WbbP0PL._SL1500_.jpg">
                </Product>
                <Product id="12345" 
                    title="The Da Vinci Code" 
                    price={5000.789}
                    rating={4}
                    image="https://i.gadgets360cdn.com/products/large/1549462346_635_ps4_slim_db.jpg">
                </Product>
                <Product id="12345" 
                    title="The Da Vinci Code" 
                    price={5000}
                    rating={4}
                    image="https://images.samsung.com/is/image/samsung/in-uhd-tv-tu8570-ua65tu8570uxxl-frontblack-226347499?$720_576_PNG$">
                </Product>    
            </div>
            <div className="home__row">
                <Product id="12345" 
                    title="The Da Vinci Code" 
                    price={5000}
                    rating={4}
                    image="https://cdn.mos.cms.futurecdn.net/vEcELHdn998wRTcCzqV5m9.jpg">
                </Product>   
            </div>
        </div>
    )
}

export default Home

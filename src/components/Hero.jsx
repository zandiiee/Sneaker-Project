import "../css/hero.css"
import heroImg from "../assets/image-product-1.jpg"
import firstImg from "../assets/image-product-1-thumbnail.jpg"
import secondImg from "../assets/image-product-2-thumbnail.jpg"
import thirdImg from "../assets/image-product-3-thumbnail.jpg"
import fourthImg from "../assets/image-product-4-thumbnail.jpg"
import minus from "../assets/icon-minus.svg"
import plus from "../assets/icon-plus.svg"
import cart from "../assets/icon-cart.svg"


function Hero(){
    return(
                <div className="hero">
            {/* Left Section*/}
            
            <div className="hero-main">
                <div className="hero-image">
                <img src={heroImg} alt="Main Image"/>
                </div>

                <div className="hero-images">

                    <div className="firstImg">
                        <img src={firstImg} alt="First Image" />
                    </div>

                     
                    <div className="secondImg">
                        <img src={secondImg} alt="Second Image" />
                    </div>

                     
                    <div className="thirdImg">
                        <img src={thirdImg} alt= "Third Image" />
                    </div>

                     
                    <div className="fourthImg">
                        <img src={fourthImg} alt="Fourth Image" />
                    </div>


                </div>
            </div>
        

            {/* Right Section*/}
            <div className="right-side">

            <div className = "right-header">
                <h3>Sneaker Company</h3>
                <h2> Fall Limited Edition Sneakers</h2>
            </div>

            <div className="right-content">
                <p> These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>

                <div className="prices">
                    <h2>$125.00</h2>
                    <div className="discount">
                        <button>50%</button>
                    </div>
                </div>

                <div className="cross-out">
                    <h4>$250.00</h4>
                </div>

                <div className="checkout">

                    <div className="add-items">
                        <img src={minus} alt="Minus" className="minus"/>0<img src={plus} alt="Plus" className="plus"/>
                    </div>

                    <div className="checkout-button">
                        <button><img src={cart} alt="Cart"/>Add to Cart</button>
                    </div>


                </div>


            </div>

            </div>
            
        </div>
    )
}


export default Hero
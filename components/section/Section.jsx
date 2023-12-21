import './style.css'
const Section = ()=>{
    return(
        <div className="container">
            <div className="first-section">
                <div className="header">
                    <div className="heading">
                        Your Feet Deserve The Best
                    </div>
                    <div className="heading-para">
                     YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                    </div>
                </div>
                <div className="button">
                    <button className="btn btn-red">Shop Now</button>
                    <button className="btn btn-white">Category</button>
                </div>
                <div className="footer-text">
                    <p>Also Available On</p>
                    <div className="foo-img">
                    <img src="/images/amazon.png" alt="amazon" />
                    <img src = "/images/flipkart.png" alt="flipkart"/>
                    </div>
                    
                </div>
            </div>
            <div className="second-section">
                <img src="/images/shoe_image.png" alt="shoe_img" />
            </div>
        </div>
    )
}

export default Section;
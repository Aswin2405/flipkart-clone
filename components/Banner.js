import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
function Banner() {
    return (
            <div className="cursor-pointer pt-1">
            <Carousel autoPlay infiniteLoop showStatus={false} showIndicators={false} showThumbs={false} interval={3000}>
            <div>
                    <img loading="lazy" src="https://androidjunglee.com/wp-content/uploads/2015/06/big-app-shoppings-android-phones.jpg" />
                </div>
                <div>
                    <img loading="lazy" src="https://storiesflistgv2.blob.core.windows.net/stories/2020/10/FKSfooterbanner.jpg" />
                </div>
                <div>
                    <img loading="lazy" src="https://i.gadgets360cdn.com/large/Moto_Razr_Banner_1584083158113.PNG" />
                </div>
            </Carousel>
            </div>           
    )
}

export default Banner

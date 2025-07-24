import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const Bannerslider = () => {

    let bannerSliderSettings = {
        dots: false,
        autoplay: true,
        arrows: true,
        infinite: false,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 575,
                settings: {
                    arrows: false,
                }
            }
        ]
    };

    const bannerContent = [
        {
            bannerbg: "/images/banner_bg1.jpg",
            bannerwatch: "/images/titan_watch.png",
            bannerheading: "Timeless Elegance<br> for Every Moment",
            bannerdescription: "Designed for those who appreciate craftsmanship, elegance, and the power of time.",
        },
        {
            bannerbg: "/images/banner_bg2.jpg",
            bannerwatch: "/images/tissot_watch.png",
            bannerheading: "Where Precision<br> Meets Prestige",
            bannerdescription: "Discover exquisite timepieces that blend heritage craftsmanship with modern sophistication.",
        },
        {
            bannerbg: "/images/banner_bg3.jpg",
            bannerwatch: "/images/tissot_watch_women.png",
            bannerheading: "Classic Watches,<br> Eternal Style.",

            bannerdescription: "Featuring sleek dials and premium materials, each timepiece is a tribute to enduring style.",
        },
    ];

    return <>
        {/* Banner*/}
        <section className="banner_sec">
            <Slider {...bannerSliderSettings} className="banner_slider">
                {bannerContent.map((bannerItem, index) => (
                    <div className={`item ${index === 1 ? 'for_watch_width' : ''}`} key={index}>
                        <div className="each_item position-relative">
                            <img src={bannerItem.bannerbg} alt="Banner Background" className="banner_bg_img" />
                            <img src={bannerItem.bannerwatch} alt="Banner Watch" className="banner_watch" />
                            <div className="content_sec position-absolute d-flex justify-content-center align-items-center">
                                <div className="banner_text position-relative z-1">
                                    <h2 className="cmn_head text_blue mb-0" dangerouslySetInnerHTML={{ __html: bannerItem.bannerheading }} />
                                    <p className="cmn_para cmn_para_sm text_grey mt-3 mb-4">{bannerItem.bannerdescription}</p>
                                    <Link to="/collection" className="cta_btn">Shop Now+</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    </>
};
export default Bannerslider;
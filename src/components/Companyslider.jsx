import "slick-carousel/slick/slick.css"
import Slider from "react-slick";

const CompanySlider = () => {

    let companySliderSettings = {
        speed: 5000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        dots: false,
        arrows: false,
        infinite: true,
        // initialSlide: 1,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };

    const companySliderContent = [
        {
            logoimg: "/images/company_logo1.svg",
        },
        {
            logoimg: "/images/company_logo2.svg",
        },
        {
            logoimg: "/images/company_logo3.svg",
        },
        {
            logoimg: "/images/company_logo4.svg",
        },
        {
            logoimg: "/images/company_logo5.svg",
        }
    ];

    return <section className="company_logo border-start-0 border-end-0">
        <div className="container">
            <Slider {...companySliderSettings} className="logo_slider">
                {companySliderContent.map((logoItem, index) => (
                    <div className="item" key={index}>
                        <div className="each_item mx-auto">
                            <img src={logoItem.logoimg} alt="Company Logo" />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    </section>

};

export default CompanySlider;
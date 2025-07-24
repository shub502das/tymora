import "slick-carousel/slick/slick.css"
import Slider from "react-slick";

const ReviewSlider = () => {

    let reviewSliderSettings = {
        dots: true,
        autoplay: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 840,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    let reviewSliderContent = [
        {
            userimg: "/images/user_img1.jpg",
            userreview: "The craftsmanship is outstanding. Every detail, from the polished bezel to the weight of the strap, speaks of precision and care. You can feel the quality the moment you put it on—it’s clear this watch was built to last and impress.",
            username: "Sophia M",
        },
        {
            userimg: "/images/user_img2.jpg",
            userreview: "I've owned watches from big-name brands, but this one stands out. The attention to detail and build quality are outstanding—especially for the price. It's become my everyday go-to piece, and I constantly get compliments.",
            username: "Naveen K",
        },
        {
            userimg: "/images/user_img3.jpg",
            userreview: "I bought a watch for my husband’s birthday, and he was blown away. The packaging was elegant, and the timepiece itself is stunning. It's rare to find something this luxurious and affordable. Highly recommend!",
            username: "Elena R",
        },
        {
            userimg: "/images/user_img4.jpg",
            userreview: "This watch exceeded all my expectations. From the moment I unboxed it, I could tell it was something special. The design is modern yet classNameic, and it feels solid on the wrist. I’ve already recommended this site to a few friends!",
            username: "James L",
        },
    ];

    return <section className="review_sec text-center" id="reviews">
        <div className="container">
            <h2 className="cmn_head blue_bar text_blue pb-2">What People Says</h2>
            <p className="cmn_para text_grey mt-3">Feedback That Speaks Volumes</p>
            <Slider {...reviewSliderSettings} className="review_slider">
                {reviewSliderContent.map((reviewItem, index) => (
                    <div className="item" key={index}>
                        <div className="each_item rounded-3 p-4 position-relative mx-auto">
                            <img src={reviewItem.userimg} alt="User Image" className="user_img rounded-circle mb-2 mx-auto" />
                            <blockquote className="cmn_para cmn_para_sm text_grey">{reviewItem.userreview} <span className="text_blue">~ {reviewItem.username}</span>
                            </blockquote>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    </section>
};

export default ReviewSlider;
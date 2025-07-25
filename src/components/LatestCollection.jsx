import { Link } from "react-router-dom";
import { allProducts } from "../data/product-data.jsx";
import { useCart } from "../context/CartContext.jsx";

const LatestCollection = () => {

    const latestCollectionProducts = allProducts.slice(4);

    const { addToCart } = useCart();

    return <>

        <section className="bestseller_sec latest_collection sec_margin text-center">
            <div className="container">
                <h2 className="cmn_head blue_bar text_blue pb-2">Latest Collection</h2>
                <p className="cmn_para text_grey mt-3">Upgrade Your Wrist with Our New Collection</p>
                <div className="row">
                    {latestCollectionProducts.map((productItem, index) => (
                        <div className="col-md-3 mt-3" key={index}>
                            <div className="each_product mx-auto position-relative overflow-hidden">
                                <img src={productItem.prodImg} alt="Product" className="w-auto mx-auto prod_img" />
                                <h3 className="cmn_head text_blue text-uppercase my-3">{productItem.prodTitle}</h3>
                                <div className="price_sec">
                                    <p className="cmn_para text_grey mb-3">{productItem.prodsubtitle}</p>
                                    <p className="current_price text_gold d-flex align-items-center justify-content-center fw-bold mb-0">
                                        <span className="original_price text_grey text-decoration-line-through fw-normal me-2">
                                            ₹{(productItem.price.originalPrice).toLocaleString('en-IN')}
                                        </span>
                                        ₹{(productItem.price.currentPrice).toLocaleString('en-IN')}
                                    </p>
                                </div>
                                <Link to={`/Product-details/${productItem.slug}`} className="cta_btn mt-3">Shop Now+</Link>
                                <Link onClick={() => addToCart(productItem)} className="product_cart position-absolute bg_blue d-flex justify-content-center align-items-center">
                                    <img src="/images/cart_icon.svg" alt="Cart Icon" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </>;
};

export default LatestCollection;
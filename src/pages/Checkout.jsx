import Innerbanner from "../components/Innerbanner";

const Checkoutpage = () => {
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 10 }, (_, i) => currentYear + i);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        const orderId = generateOrderId();

        localStorage.setItem("checkoutData", JSON.stringify(data));
        localStorage.setItem("orderId", orderId);

        window.location.href = "/thank-you";
    };

    const generateOrderId = () => {
        const prefix = "#OD";
        const random = Math.random().toString(36).substring(2, 8).toUpperCase();
        return `${prefix}-${random}`;
    };


    return (
        <>
            <Innerbanner
                bgimage="/images/checkout_banner.jpg"
                bannertitle="Complete Your Purchase"
            />
            <section className="checkout_sec sec_margin text-center">
                <div className="container">
                    <h2 className="cmn_head blue_bar text_blue pb-2">Confirm and Pay Now</h2>
                    <p className="cmn_para text_grey mt-3">Almost there! Complete your checkout to enjoy the deal.</p>

                    <form onSubmit={handleSubmit} id="checkout_form" className="text-start mx-auto">
                        <div className="shipping_info">
                            <h2 className="fw-semibold text_blue">Shipping Information</h2>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="each_field mb-3">
                                        <input type="text" name="fname" placeholder="First Name" required className="w-100 rounded-2" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="each_field mb-3">
                                        <input type="text" name="lname" placeholder="Last Name" required className="w-100 rounded-2" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="each_field mb-3">
                                        <input type="email" name="emailaddress" placeholder="Email Address" required className="w-100 rounded-2" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="each_field mb-3">
                                        <input type="tel" name="phnumber" placeholder="Phone Number" pattern="\d{10}" maxLength={10} onInput={(e) => e.target.value = e.target.value.replace(/\D/g, "")} required className="w-100 rounded-2" />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="each_field mb-3">
                                        <input type="text" name="address" placeholder="Address" required className="w-100 rounded-2" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="each_field mb-3">
                                        <select name="country" required className="w-100 rounded-2">
                                            <option value="">Country</option>
                                            <option value="India">India</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="each_field mb-3">
                                        <input type="text" name="city" placeholder="City" required className="w-100 rounded-2" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="each_field mb-3">
                                        <select name="state" required className="w-100 rounded-2">
                                            <option value="">State</option>
                                            <option value="West Bengal">West Bengal</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="each_field mb-3">
                                        <input type="tel" name="zipcode" placeholder="ZIP Code" pattern="\d{5}" maxLength={5} onInput={(e) => e.target.value = e.target.value.replace(/\D/g, "")} required className="w-100 rounded-2" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="payment_info">
                            <h2 className="fw-semibold text_blue">Payment Information</h2>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="each_field mb-3">
                                        <input type="tel" name="ccnumber" placeholder="Card Number" pattern="\d{16}" maxLength={16} onInput={(e) => e.target.value = e.target.value.replace(/\D/g, "")} required className="w-100 rounded-2" />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="each_field mb-3">
                                        <select name="expiryMonth" required className="w-100 rounded-2">
                                            <option value="">Month</option>
                                            {[
                                                "January", "February", "March", "April", "May", "June",
                                                "July", "August", "September", "October", "November", "December"
                                            ].map((month, idx) => (
                                                <option key={idx} value={month}>{month}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="each_field mb-3">
                                        <select name="expiryYear" required className="w-100 rounded-2">
                                            <option value="">Year</option>
                                            {years.map((year, idx) => (
                                                <option key={idx} value={year}>{year}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="each_field mb-3">
                                        <input type="tel" name="cvv" placeholder="CVV" pattern="\d{3}" maxLength={3} onInput={(e) => e.target.value = e.target.value.replace(/\D/g, "")} required className="w-100 rounded-2" />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="each_field">
                                        <button type="submit" className="checkout_submit cta_btn w-100 text-center" id="checkout_submit">
                                            PROCEED TO CHECKOUT+
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Checkoutpage;

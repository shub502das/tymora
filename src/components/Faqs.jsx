import { Collapse } from "react-collapse";
import { useReducer } from "react";



const Faqs = () => {

    let initialstate = null;

    let reducer = (state, action) => {
        switch (action.type) {
            case "TOGGLE_FAQ":
                return state === action.index ? null : action.index;               
       
            default:
                return state;
        }
    };

    let [state, dispatch] = useReducer(reducer, initialstate);

    const allFaqs = [
        {
            "question": "1. What types of watches do you sell?",
            "answer": "We offer a wide selection of watches, including automatic, quartz, mechanical, and smartwatches. Our collections range from everyday essentials to luxury timepieces."
        },
        {
            "question": "2. Do you offer a warranty?",
            "answer": "Yes, you can purchase a domain name without hosting. However, to make your website live, you’ll need to connect it to a hosting service."
        },
        {
            "question": "3. Can I return or exchange my watch?",
            "answer": "Not at all. Our platform is user-friendly, with one-click installations, a control panel, and 24/7 support to assist you every step of the way."
        },
        {
            "question": "4. How long will it take to receive my order?",
            "answer": "Yes, you can easily transfer your domain to us. Our support team will guide you through the process for a smooth transition."
        },
        {
            "question": "5. What if my watch stops working?",
            "answer": "We offer a variety of hosting solutions, including Shared Hosting, VPS Hosting, Dedicated Servers, and Cloud Hosting, tailored to different needs and budgets."
        },
        {
            "question": "6. Do you offer gift wrapping?",
            "answer": "Absolutely. Our hosting plans come with SSL certificates, firewall protection, malware scanning, and regular backups to ensure your website stays safe."
        }
    ];

    return <>
        <section className="faq_sec text-center">
            <div className="container">
                <h2 className="cmn_head blue_bar text_blue pb-2">Some Common Queries</h2>
                <p className="cmn_para text_grey mt-3">Got Questions? We’ve Got Answers</p>
                <div className="accordian_sec mx-auto text-start">
                    {allFaqs.map((faqItem, index) => (
                        <div className="each_accordian bg-white shadow" key={index}>
                            <h2
                                className={`accordian_title text_blue position-relative mb-0 `}
                                onClick={() => dispatch({type: "TOGGLE_FAQ", index})}>{faqItem.question}</h2>
                                <Collapse isOpened={state === index}>
                                    <p className="cmn_para text_grey mt-3">{faqItem.answer}</p>
                                </Collapse>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </>
};

export default Faqs;
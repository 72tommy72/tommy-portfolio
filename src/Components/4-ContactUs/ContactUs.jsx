import "./ContactUs.css";
import Lottie from "lottie-react";
import contactUsAnimation from "../../../public/animation/Animation - 1727176888490.json";
import messageGmailAnimation from "../../../public/animation/Animation - 1727176266593.json";
import { useForm, ValidationError } from "@formspree/react";
import AOS from "aos" ;
import { useEffect } from "react";
export default function ContactUs() {
  const [state, handleSubmit] = useForm("xdknrjol");
  useEffect(() => {
    AOS.init({ duration: 1250 });  // Initialize AOS and set duration if needed
}, []);
  return (
    <>
      <section className="contact-us">

        <h2 className=" mt-3">
          <span className="icon-envelope-o  me-3 title"></span>
          Contact Us
        </h2>
        <p className="subtitle mt-3">
          Contact us for more information and Get notified when I publish
          something new.
        </p>
        <div className="row">
          <div className="col-md-7">
            <div data-aos="fade-down-right">
              <div className="d-flex">
                <form onSubmit={handleSubmit} className=" mt-3">
                  <div className="d-flex ">
                    <label htmlFor="email">Email Address :</label>
                    <input
                      id="email"
                      name="email"
                      type="text"
                      className="form-control"
                      placeholder="Email"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors}/>
                  </div>
                  <div className="d-flex mt-3">
                    <label htmlFor="message"> Your message :</label>
                    <textarea
                      name="message"
                      className="form-control "
                      id="message"
                    ></textarea>
                    <ValidationError prefix="Message" field="message" errors={state.errors}/>
                  </div>
                  <button type="submit" disabled={state.submitting} className="submit btn text-white d-block ">
                    submit
                  </button>
                  {/* https://formspree.io/forms */}
                  {state.succeeded === true ? (
                    <p className="messageGmail d-flex align-items-center ">
                      <Lottie loop={false} className="left-us-animation" animationData={messageGmailAnimation} />
                      Your message has been sent successfully
                    </p>) : null}
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-4 right-us-animation">
            <div data-aos="fade-up-left">
                <div className="">
                  <Lottie animationData={contactUsAnimation} />
                </div>
              </div>
          </div>
        </div>
      </section>
    </>
  );
}

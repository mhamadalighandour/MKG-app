import "./Contact.css";
import { Title } from "../../components/index";
import { Col, Container, Row } from "react-bootstrap";
import bg2 from "../../assets/images/Path.png";
import Phone from "../../assets/images/Icon awesome-phone-alt.png";
import Location from "../../assets/images/Icon material-location-on.png";
import Email from "../../assets/images/Icon zocial-email.png";
import { BsInstagram, BsTwitter, BsWhatsapp, BsFacebook } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import axios from "axios";

const Contact = () => {
  const [isName, setIsName] = useState("");
  const [isEmail, setIsEmail] = useState("");
  const [isMessage, setIsMessage] = useState("");
  const [response, setResponse] = useState("");

  const sendRes = () => {
    axios
      .post("https://mkg.icrcompany.net/api/contact_us", {
        name: isName,
        email: isEmail,
        message: isMessage,
      })
      .then((res) => {
        setResponse(res.data.data);
        setIsName("");
        setIsEmail("");
        setIsMessage("");
      })
      .catch((e) => {
        setResponse("خطأ في الارسال تأكد من بريد الإلكتروني");
      });
  };

  return (
    <section className="py-3 contact direction-ltr">
      <Container>
        <Title h1="Contact Us" />
        <div className="py-5 position-relative">
          <div className="icons mb-3 position-absolute d-flex">
            <a href="">
              <BsFacebook color="#1778F2" className="w-100 h-100" />
            </a>
            <a href="">
              <BsInstagram color="#fff" />
            </a>
            <a href="">
              <BsTwitter color="#fff" />
            </a>
            <a href="">
              <BsWhatsapp color="#fff" />
            </a>
          </div>
          <div className="img1"></div>
          <div className="img2">
            <img src={bg2} alt="images" className="h-75 bgImgBlue" />
            <Swiper
              className="myswiper"
              spaceBetween={20}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                1200: {
                  slidesPerView: "4",
                },
                992: {
                  slidesPerView: "3.3",
                },
                768: {
                  slidesPerView: 2.9,
                },
                280: {
                  slidesPerView: 2.1,
                },
                0: {
                  slidesPerView: 1.1,
                },
              }}
            >
              <SwiperSlide className="radius-border">
                <div className="sliderItemC radius-border ">
                  <img src={Phone} alt="images" />
                  <h5>099257960</h5>
                </div>
              </SwiperSlide>
              <SwiperSlide className="radius-border">
                <div className="sliderItemC radius-border ">
                  <img src={Phone} alt="images" />
                  <h5>0958665630</h5>
                </div>
              </SwiperSlide>
              <SwiperSlide className="radius-border">
                <div className="sliderItemC radius-border ">
                  <img src={Location} alt="images" />
                  <h5>Baghdad Al-Arasat</h5>
                </div>
              </SwiperSlide>
              <SwiperSlide className="radius-border">
                <div className="sliderItemC radius-border ">
                  <img src={Email} alt="images" />
                  <h5>aahhha@hhhhhhh.com</h5>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <Title
          h1="Get In Touch"
          p="real estate development. In Dyari, we strive to contribute to the vision of our beloved kingdom 2030, by raising standards "
        />
        <Row>
          <h4 className="color-b text-center">{response}</h4>
          <div
            className={`forms ${
              window.localStorage.getItem("language") === "ar"
                ? "direction-rtl"
                : ""
            }`}
          >
            <input
              type="text"
              value={isName}
              placeholder="Your Name"
              onChange={(e) => setIsName(e.target.value)}
            />
            <input
              type="email"
              value={isEmail}
              placeholder="Your Email"
              onChange={(e) => setIsEmail(e.target.value)}
            />
            <textarea
              value={isMessage}
              placeholder="Your Message"
              onChange={(e) => setIsMessage(e.target.value)}
            />
          </div>
          <button className="btn btn-primary" onClick={sendRes}>
            Send
          </button>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;

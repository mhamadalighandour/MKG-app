import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CgChevronDoubleRight, CgChevronDoubleLeft } from "react-icons/cg";
import BgSlider from "../../../assets/images/Path 53.png";
import Photo1 from "../../../assets/images/1-removebg-preview.png";
import Photo2 from "../../../assets/images/4-removebg-preview.png";
import Photo3 from "../../../assets/images/5-removebg-preview.png";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
const SectionsThree = () => {
  return (
    <section className="py-3 home">
      <Container>
        <Row>
          <Col lg={6} sm={12}>
            <h1 className="title">Features</h1>
            <p className="text-center text-lg-start fs-5 ">
              MKG Future is an alliance of two long-standing companies with over
              50 years of experience in real estate development. In Dyari, we
              strive to contribute to the vision of our beloved kingdom 2030, by
              raising standards of quality and creativity in MKG Future is an
              alliance of two long-standing companies with over 50 years of
              experience
            </p>
          </Col>
          <Col lg={6} sm={12}>
            <div className=" pp">
              <img src={BgSlider} alt="images" />
              <Swiper
                reverseDirection={true}
                className=" myswiper direction-ltr"
                slidesPerView={2}
                spaceBetween={10}
                breakpoints={{
                  1020: {
                    slidesPerView: 2.1,
                  },
                  560: {
                    slidesPerView: 1.4,
                  },
                  0: {
                    slidesPerView: 1.1,
                  },
                }}
              >
                <SwiperSlide className="radius-border">
                  <div className="sliderItem radius-border m-1">
                    <img src={Photo1} alt="images" />
                    <h5>Fashionable design</h5>
                    <p>
                      Diary projects are designed by the largest and most famous
                      engineering design offices, and we take into account in
                      every design the smallest details, to meet your
                      aspirations and meet all your needs.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="radius-border">
                  <div className="sliderItem radius-border m-1">
                    <img src={Photo2} alt="images" />
                    <h5>Fashionable design</h5>
                    <p>
                      Diary projects are designed by the largest and most famous
                      engineering design offices, and we take into account in
                      every design the smallest details, to meet your
                      aspirations and meet all your needs.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="radius-border">
                  <div className="sliderItem radius-border m-1">
                    <img src={Photo3} alt="images" />
                    <h5>Fashionable design</h5>
                    <p>
                      Diary projects are designed by the largest and most famous
                      engineering design offices, and we take into account in
                      every design the smallest details, to meet your
                      aspirations and meet all your needs.
                    </p>
                  </div>
                </SwiperSlide>
                <SlideNextButton />
              </Swiper>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SectionsThree;
const SlideNextButton = () => {
  const swiper = useSwiper();

  return (
    <div className="icons ">
      <span
        className="radius-border mx-3 bg-b text-light p-1"
        onClick={() => swiper.slidePrev()}
      >
        <CgChevronDoubleLeft />
      </span>
      <span
        className="radius-border bg-b text-light p-1"
        onClick={() => swiper.slideNext()}
      >
        <CgChevronDoubleRight />
      </span>
    </div>
  );
};

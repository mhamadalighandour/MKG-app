import { Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import Photo from "../../../assets/images/patrick-tomasso-SVVTZtTGyaU-unsplash.png";
import Ph1 from "../../../assets/images/slider.png";

import "swiper/css";

const SectionTwo = () => {
  return (
    <section className="py-2">
      <Container>
        <Row>
          <Col lg={6} sm={12} className="order-2 order-lg-1 ">
            <div className="d-flex">
              <Col lg={6} className="d-none d-lg-block">
                <Swiper
                  className="direction-ltr"
                  loopFillGroupWithBlank={true}
                  slidesPerView={1}
                  spaceBetween={5}
                  slidesPerGroup={1}
                >
                  <SwiperSlide className="radius-border">
                    <div className="slider-lg">
                      <img src={Ph1} className="" alt="images" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="radius-border">
                    <div className="slider-lg">
                      <img src={Ph1} className="" alt="images" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="radius-border">
                    <div className="slider-lg">
                      <img src={Ph1} className="" alt="images" />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </Col>
              <Col lg={6} sm={12}>
                <Swiper
                  className="d-none d-lg-block direction-ltr"
                  slidesPerView={1}
                  spaceBetween={5}
                  pagination={{
                    clickable: true,
                  }}
                  breakpoints={{
                    992: {
                      slidesPerView: 1,
                    },
                    0: {
                      slidesPerView: 1.5,
                    },
                  }}
                >
                  <SwiperSlide className="radius-border">
                    <div className="slider-sm">
                      <img src={Ph1} className="" alt="images" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="radius-border">
                    <div className="slider-sm">
                      <img src={Ph1} className="" alt="images" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="radius-border">
                    <div className="slider-sm">
                      <img src={Ph1} className="" alt="images" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="radius-border">
                    <div className="slider-sm">
                      <img src={Ph1} className="" alt="images" />
                    </div>
                  </SwiperSlide>
                </Swiper>
                <Swiper
                  className="d-none d-lg-block direction-ltr"
                  slidesPerView={1}
                  spaceBetween={5}
                  pagination={{
                    clickable: true,
                  }}
                >
                  <SwiperSlide className="radius-border">
                    <div className="slider-sm">
                      <img src={Ph1} className="" alt="images" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="radius-border">
                    <div className="slider-sm">
                      <img src={Ph1} className="" alt="images" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="radius-border">
                    <div className="slider-sm">
                      <img src={Ph1} className="" alt="images" />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </Col>
            </div>
          </Col>
          <Col lg={6} sm={12} className="order-1 order-lg-2">
            <div className="w-100 " style={{ height: "480px", width: "480px" }}>
              <img src={Photo} className="w-100 h-100 radius-border" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SectionTwo;

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Ph1 from "../../../assets/images/slider.png";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const SectionOne = () => {
  return (
    <section className="sec-one py-3">
      <Container>
        <Row>
          <Col lg={6} className="d-none d-lg-block">
            <Swiper
              className="ncswiper direction-ltr"
              loopFillGroupWithBlank={true}
              slidesPerView={2}
              spaceBetween={5}
              slidesPerGroup={1}
              pagination={{
                clickable: true,
              }}
            >
              <SwiperSlide className="radius-border" width={250}>
                <img src={Ph1} className="w-100" alt="images" height={400} />
              </SwiperSlide>
              <SwiperSlide className="radius-border" width={250}>
                <img src={Ph1} className="w-100" alt="images" height={400} />
              </SwiperSlide>
              <SwiperSlide className="radius-border" width={250}>
                <img src={Ph1} className="w-100" alt="images" height={400} />
              </SwiperSlide>
              <SwiperSlide className="radius-border" width={250}>
                <img src={Ph1} className="w-100" alt="images" height={400} />
              </SwiperSlide>
              <SwiperSlide className="radius-border" width={250}>
                <img src={Ph1} className="w-100" alt="images" height={400} />
              </SwiperSlide>
            </Swiper>
          </Col>
          <Col lg={6} sm={12}>
            <h1 className="title ms-1">About Us</h1>
            <p className="text-center text-lg-start fs-6 mb-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              impedit dolorum fuga eveniet a, vero quasi? Rerum porro distinctio
              neque dolore ea, asperiores impedit vero eum, suscipit,
              consequuntur eligendi praesentium. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Omnis impedit dolorum fuga eveniet
              a, vero quasi? Rerum porro distinctio neque dolore ea, asperiores
              impedit vero eum, suscipit, consequuntur eligendi praesentium.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              impedit dolorum fuga eveniet a, vero quasi distinctio{" "}
              <Link to="about" className="color-b fw-bold fs-5">
                Read More...
              </Link>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SectionOne;

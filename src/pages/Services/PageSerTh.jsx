import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { ImagesSection, Title } from "../../components/index";
import Image from "../../assets/images/patrick-tomasso-SVVTZtTGyaU-unsplash.png";
import { useParams } from "react-router-dom";
import axios from "axios";
import { SwiperSlide } from "swiper/react";

const PageSerTh = () => {
  const { idT } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://mkg.icrcompany.net/api/products/${idT}?local=${localStorage.getItem(
          "language"
        )}
        `
      )
      .then((res) => {
        setLoading(false);
        setData(res.data.data);
        setError("");
      })
      .catch((e) => {
        setLoading(false);
        setError(e.message);
      });
  }, []);
  return (
    <section className="py-3">
      <ImagesSection>
        {data.images?.map((e, i) => (
          <SwiperSlide key={i}>
            <img
              src={`https://mkg.icrcompany.net/storage/${e}`}
              alt="images"
              className="radius-border"
            />
          </SwiperSlide>
        ))}
      </ImagesSection>
      <Container>
        <Row className="slider-img py-5">
          <Title h1={data.name} p={data.description} />
        </Row>
      </Container>
    </section>
  );
};

export default PageSerTh;

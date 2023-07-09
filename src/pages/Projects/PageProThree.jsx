import React from "react";
import { ImagesSection, Title } from "../../components/index";
import { Container, Row } from "react-bootstrap";
import Image from "../../assets/images/patrick-tomasso-SVVTZtTGyaU-unsplash.png";
import { SwiperSlide } from "swiper/react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const PageProThree = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://mkg.icrcompany.net/api/projects/${id}?local=${localStorage.getItem(
          "language"
        )}
        `
      )
      .then((res) => {
        setLoading(false);
        setData(res.data.data);
        console.log(res.data.data);
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
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          data.images?.map((e, i) => (
            <SwiperSlide key={i}>
              <img
                src={`https://mkg.icrcompany.net/storage/${e}`}
                alt="images"
                className="radius-border"
              />
            </SwiperSlide>
          ))
        )}
      </ImagesSection>
      <Container>
        <Row className="slider-img py-5">
          <Title h1={data.name} p={data.long_description} />
        </Row>
      </Container>
    </section>
  );
};

export default PageProThree;

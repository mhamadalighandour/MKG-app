import { Col, Container, Row } from "react-bootstrap";
import { Title } from "../../components/index";
import "./Services.css";
import Photo from "../../assets/images/patrick-tomasso-SVVTZtTGyaU-unsplash.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Services = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  console.log(test);
  useEffect(() => {
    axios
      .get(
        `https://mkg.icrcompany.net/api/product-sections?local=${localStorage.getItem(
          "language"
        )}`
      )
      .then((res) => {
        setData(res.data.data);
        setLoading(false);
        setError("");
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
        setError(e.message);
      });
  }, []);

  return (
    <section className="py-3 services">
      <Container>
        <Title
          h1="Our Services "
          p="MKG Future is an alliance of two long-standing companies with over 50 years of experience in"
        />
        <Row className="py-4">
          {loading ? (
            <h1 className="text-center">Loading...</h1>
          ) : (
            data?.map((e) => (
              <Col lg={6} sm={12} className="p-3" key={e.id}>
                <div className="w-75 position-relative card-services mx-auto my-4 radius-border">
                  <Link to={`/services/${e.id}`}>
                    <img
                      src={`https://mkg.icrcompany.net/storage/${e.section_image}`}
                      alt="images"
                      className="radius-border m-auto d-flex"
                    />
                    <div className="text-center bg-light">
                      <h2 color="">{e.section_name}</h2>
                      <p className="text-black">{e.section_description}</p>
                    </div>
                  </Link>
                </div>
              </Col>
            ))
          )}
        </Row>
      </Container>
    </section>
  );
};

export default Services;

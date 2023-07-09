import { Container, Row } from "react-bootstrap";
import CardServices from "./CardServices";
import Photo from "../../assets/images/patrick-tomasso-SVVTZtTGyaU-unsplash.png";
import { Title } from "../../components/index";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const PageSections = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://mkg.icrcompany.net/api/product-sections/${id}/products?local=${localStorage.getItem(
          "language"
        )}`
      )
      .then((res) => {
        setLoading(false);
        setData(res.data.data.data);
        setError("");
      })
      .catch((e) => {
        setLoading(false);
        setError(e.message);
      });
  }, []);

  return (
    <div>
      <section className="py-3">
        <Container>
          <Title
            h1="Services Sections"
            p={`MKG Future is an alliance of two long-standing companies 
              with over 50 years of experience in`}
          />
          <Row className="py-4 d-flex align-items-center justify-content-center">
            {loading ? (
              <h1>Loading...</h1>
            ) : (
              data?.map((e) => (
                <CardServices
                  to={`/services/sections/${e.id}`}
                  img={`https://mkg.icrcompany.net/storage/${e.image}`}
                  title={e.name}
                  par={e.description}
                />
              ))
            )}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default PageSections;

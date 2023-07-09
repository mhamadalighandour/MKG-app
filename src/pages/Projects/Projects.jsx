import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import CardProjects from "./CardProjects";
import { Title } from "../../components/index";
import "./Projects.css";
import axios from "axios";

const Projects = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(
        `  https://mkg.icrcompany.net/api/project-sections?local=${localStorage.getItem(
          "language"
        )}`
      )
      .then((res) => {
        setData(res.data.data);
        console.log(res.data.data);
        setLoading(false);
 
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
  
      });
  }, []);

  return (
    <section
      className={`"py-3" ${
        window.localStorage.getItem("direction") ? "direction" : ""
      }`}
    >
      <Container>
        <Title
          h1="Our projects"
          p="MKG Future is an alliance of two long-standing companies with over 50 years of experience in"
        />
        <Row>
          {loading ? (
            <h1 className="text-center">Loading...</h1>
          ) : (
            data?.map((e) => (
              <CardProjects
                col="4"
                col_lg="8"
                link={`/projects/${e.id}`}
                img={`https://mkg.icrcompany.net/storage/${e.image}`}
                h1={e.name}
                p={e.short_description}
              />
            ))
          )}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;

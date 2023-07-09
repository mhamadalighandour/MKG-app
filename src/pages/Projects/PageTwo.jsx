import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Title } from "../../components/index";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import ReactPaginate from "react-paginate";

const PageTwo = () => {
  
  const { id } = useParams();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [pageCount, setPageCount] = useState(1);
  useEffect(() => {
    axios
      .get(
        `https://mkg.icrcompany.net/api/project-sections/${id}/projects?local=${localStorage.getItem(
          "language"
        )}`
      )
      .then((res) => {
        setLoading(false);
        setData(res.data.data.data);
        setError("");
        setPageCount(Math.ceil(res.data.data.total / res.data.data.per_page));
      })
      .catch((e) => {
        setLoading(false);
        setError(e.message);
      });
  }, []);

  const handlePageClick = (event) => {
    axios
      .get(
        `https://mkg.icrcompany.net/api/project-sections/${id}/projects?page=${
          event.selected + 1
        }`
      )
      .then((res) => {
        setData(res.data.data.data);
        return res.data;
      });
  };

  return (
    <section className="py-3 text-center">
      <Container className="">
        <Title
          h1="Project Section"
          p="MKG Future is an alliance of two long-standing companies with over 50 years of experience in"
        />
        <Row>
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            data?.map((e) => (
              <CardSectinon
                link={`/projects/sections/${e.id}`}
                col="0"
                col_lg="6"
                img={`https://mkg.icrcompany.net/storage/${e.image}`}
                h1={e.name}
                p={e.short_description}
                icon={<BsFillArrowRightCircleFill />}
              />
            ))
          )}
        </Row>
        <div className="d-flex justify-content-center">
          <ReactPaginate
            className="pagination"
            previousLabel=""
            nextLabel=""
            breakLabel="..."
            pageCount={pageCount}
            marginPagesDisplayed={1}
            pageRangeDisplayed={2}
            onPageChange={handlePageClick}
            pageClassName="page-item"
            pageLinkClassName="page-link"
          />
        </div>
      </Container>
    </section>
  );
};

export default PageTwo;

const CardSectinon = (props) => {
  return (
    <Col sm={12} lg={props.col_lg} className="">
      <Link to={props.link}>
        <div className="d-flex radius-border card-pro my-3 mx-auto">
          <img src={props.img} />
          <div className="p-3 text-center">
            <h2 className="text-black">{props.h1.substring(0, 20)}..</h2>
            <p className="color-b">{props.p.substring(0, 120)}...</p>
            <span className="icon-pro">{props.icon}</span>
          </div>
        </div>
      </Link>
    </Col>
  );
};

import React, { Component } from "react";

import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";

//Add your code here for Function Component SearchCourse
function SearchCourse(props) {
  const submitSearchString = (event) => {
    props.searchStringUpdated(event.target.value);
  };

  return (
    <Container>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
        }}
        className="mt-2 mb-4"
      >
        <Row>
          <Col xs={11}>
            <Form.Control
              type="text"
              placeholder="Course or University name"
              onChange={submitSearchString}
            />
          </Col>
          <Col xs={1}>
            <Button variant="primary" type="submit">
              <BsSearch />
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default SearchCourse;

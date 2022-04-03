import React from "react";
import { Container } from "react-bootstrap";
import Course from "./Course";

//Add your code here for Function Component Courses
function Courses(props) {
  let courses = props.courses_data;
  let loaded = props.loaded_from_db;

  let coursesElements;
  let courses_found = 0;
  if (courses.length > 0) {
    coursesElements = courses.map((course) => {
      if (
        course.title
          .toLowerCase()
          .includes(props.search_string.toLowerCase()) ||
        course.author.toLowerCase().includes(props.search_string.toLowerCase())
      ) {
        courses_found++;
        return (
          <div className="border border-light mt-1">
            <Course data={course}></Course>
          </div>
        );
      }
    });
  } else
    return loaded ? (
      <div>No courses found!</div>
    ) : (
      <div>Loading courses....</div>
    );

  return courses_found > 0 ? (
    <Container>{coursesElements}</Container>
  ) : (
    <div>No Courses Found against your Search</div>
  );
}

export default Courses;

import React from "react";
import { Container } from "react-bootstrap";
import SearchCourse from "./Search";
import api from "./Data/api";
import Courses from "./Courses";
import data from "./Data/courses.json";
import { useState, useEffect } from "react";


// Add your code here for BaseComponent
function BaseComponent() {
  const [state, setState] = useState({
    courses: [],
    search_string: "",
    loaded: false,
  });

  useEffect(() => {
    api
      .getData()
      .then((res) => {
        if (res.data.length > 0) {
          console.log(res.data);
          setState((prevState) => {
            return { ...prevState, courses: res.data, loaded: true };
          });
        } else
          setState((prevState) => {
            return { ...prevState, loaded: true };
          });
      })
      .catch((err) => {
        console.log("Error : " + err);
        setState((prevState) => {
          return { ...prevState, loaded: true };
        });
      });
  }, []);


  const handleSearchStringUpdate = (searchString) => {
    
    setState((prevState) => {
      return { ...prevState, search_string: searchString };
    });
  };

  return (
    <Container>
      <SearchCourse
        search_string={state.search_string}
        searchStringUpdated={handleSearchStringUpdate}
      />
      <Courses
        courses_data={state.courses}
        loaded_from_db={state.loaded}
        search_string={state.search_string}
      ></Courses>
    </Container>
  );
}


export default BaseComponent;
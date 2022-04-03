import axios from "axios";

/*Set Base_URL to the URL of the browser in the right pane ==>
 Note: Sample value has been set for your reference only. 
 Replace "1dod9q9ermmmm.educative.run/" with the copied URL */

// Note the "/" at the end of the URL. Dont remove it yourself.
var Base_URL = "5l451kojro8xx.educative.run/";
Base_URL = Base_URL.replace(/\/$/, "");

//Use the Final_URL when you need to set URL for axios GET request
const Final_URL= "https://"+Base_URL+":3000/findAllCourses";


export default {
  // Add your code here to write getData() method
    getData: () =>
        axios({
        method: "GET",
        url: Final_URL,
    }),
};



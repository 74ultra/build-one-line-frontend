import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
//import { Form, Header, Button } from "semantic-ui-react";

// import Users from "./Users";

const OnboardingForm = ({ values, errors, touched, status, history }) => {
  const [users, setUsers] = useState([]);

  const forward = () => history.push("/my-account");
  console.log(status);
  useEffect(() => {
    if (status) {
      forward();
    }
  }, [status]);

  return (
    <div>
      <Form>
        <div className="flex-container">
          {touched.name && errors.name && <p>{errors.name}</p>}
          <label htmlFor="Post">Post:</label>
          <Field as="textarea" name="message" id="name" />
        </div>

        <button type="submit">Submit</button>
      </Form>
      {/* <Users users={users} /> */}
    </div>
  );
};

const PostForm = withFormik({
  mapPropsToValues: () => {
    return {
      message: ""
    };
  },

  // validationSchema: Yup.object().shape({
  //   name: Yup.string().required("Enter your name"),
  //   email: Yup.string()
  //     .email("Eenter a valid email please")
  //     .required("Enter a valid email please"),
  //   password: Yup.string()
  //     .required("Please enter a correct password")
  //     .min(8, "Password must be between 8 and 10 characters")
  //     .max(20, "Password must be between 8 and 10 characters"),
  //   tos: Yup.boolean().oneOf([true], "Please accept the Terms of Service")
  // }),

  handleSubmit: (values, { setValues, setStatus }) => {
    const newPost = { ...values, date: Date.now() };
    setValues(newPost);
    axios
      .post("https://build-oneline.herokuapp.com/api/messages", values)
      .then(response => {
        console.log(values);
        setStatus(response.data);
      })
      .catch(error => {
        console.log("Error: ", error);
      });
  }
})(OnboardingForm);
export default PostForm;

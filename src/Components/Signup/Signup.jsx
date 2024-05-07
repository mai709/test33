import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
function Signup() {
  let validition = yup.object({
    firstName: yup.string().required("First Name Required").min(3).max(10),
    email: yup.string().required("First Name Required").email(),
  });
  function doneForm(values) {
    console.log(values);
  }
  let formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      rePassword: "",
      phoneNumber: "",
    },
    validationSchema: validition,
    onSubmit: doneForm,
  });
  return (
    <>
      <div className="container mt-5">
        <form onSubmit={formik.handleSubmit}>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              class="form-control"
              id="firstName"
              placeholder="Enter First Name"
            />
            {formik.errors.firstName ? (
              <p className="text-danger fs-6 my-2">{formik.errors.firstName}</p>
            ) : (
              ""
            )}
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              class="form-control"
              id="lastName"
              placeholder="Enter LAst Name"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              id="email"
              placeholder="name@example.com"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              PassWord
            </label>
            <input
              type="password"
              class="form-control"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              id="password"
              placeholder="Enter Password "
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              RePassword
            </label>
            <input
              type="password"
              class="form-control"
              name="rePassword"
              value={formik.values.rePassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              id="rePassword"
              placeholder="confirm Password"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Phone Number
            </label>
            <input
              type="text"
              class="form-control"
              name="phoneNumber"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              id="phoneNumber"
              placeholder="Phone number"
            />
          </div>
          <div className="text-end py-5">
            <button
              disabled={!formik.isValid && formik.dirty}
              type="submit"
              className="btn btn-primary text-capitalize"
            >
              register
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Signup;

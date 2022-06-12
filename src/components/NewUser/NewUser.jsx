import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import styles from "./NewUser.module.scss";

const NewUSer = () => {
  return (
    <>
      <h2 className={styles.title}>Working with POST request</h2>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
        }}
        validateOnBlur
        // validationSchema={SignupSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid,
          handleSubmit,
          dirty,
        }) => (
          <Form className={styles.form}>
            <h1 className={styles.title}>Yor name</h1>
            <div className={styles.group}>
              <Field
                type="name"
                name="name"
                values="name"
                placeholder=" "
                autoComplete="off"
                className={styles.input}
              />
              <label className={styles.label} htmlFor="name">
                Your name
              </label>
              {errors.name && touched.name ? <div>{errors.name}</div> : null}
            </div>
            <div className={styles.group}>
              <Field
                type="email"
                name="email"
                values="email"
                placeholder=" "
                autoComplete="off"
                className={styles.input}
              />
              <label className={styles.label} htmlFor="email">
                Email
              </label>
              {errors.name && touched.email ? <div>{errors.email}</div> : null}
            </div>
            <div className={styles.group}>
              <Field
                type="phone"
                name="phone"
                values="phone"
                placeholder=" "
                autoComplete="off"
                className={styles.input}
              />
              <label className={styles.label} htmlFor="phone">
                Phone
              </label>
              {errors.name && touched.phone ? <div>{errors.phone}</div> : null}
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default NewUSer;

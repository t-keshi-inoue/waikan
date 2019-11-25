import React, { useState } from "react";
import Layout from "../layout/Layout";
import { Button, FormField, TextInput, Select, Box, Text } from "grommet";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Home = () => {
  return (
    <Layout>
      <Formik
        validate={values => {
          const errors = {};
          if (!values.people) {
            errors.people = "required";
          }
          if (!values.fraction) {
            errors.fraction = "required";
          } else if (!values.bill.match(/^[0-9]+$/)) {
            errors.bill = "numeric only";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}>
        {({ values, errors, handleChange, handleSubmit, setFieldValue }) => (
          <form onSubmit={handleSubmit}>
            <Box margin={{ vertical: "small" }}>
              <FormField label="people">
                <TextInput
                  name="people"
                  placeholder="ex.) 20"
                  onChange={handleChange}
                  errors={errors.people}
                />
              </FormField>
              <Text textAlign="end" margin={{ top: "-40px" }}>
                人
              </Text>
            </Box>
            <Box margin={{ vertical: "small" }}>
              <FormField label="お会計">
                <TextInput
                  name="bill"
                  placeholder="ex.) 20000"
                  onChange={handleChange}
                  error={errors.bill}
                />
              </FormField>
              <Text textAlign="end" margin={{ top: "-40px" }}>
                円
              </Text>
            </Box>
            <Box margin={{ vertical: "small" }}>
              <FormField
                label="塩梅"
                onChange={handleChange}
                error={errors.fraction}>
                <Select
                  options={["セコ勘", "ダサ勘", "神勘"]}
                  message="eee"
                  placeholder="端数はあなたの匙加減..."
                />
              </FormField>
            </Box>

            <Form>
              <Box margin={{ top: "medium", bottom: "small" }}>
                <ErrorMessage name="email" component="div" />
                <ErrorMessage name="password" component="div" />
                <Button
                  primary
                  label={<Box align="center">計算する</Box>}
                  type="submit"
                  href="./result"
                />
              </Box>
            </Form>
          </form>
        )}
      </Formik>
    </Layout>
  );
};

export default Home;

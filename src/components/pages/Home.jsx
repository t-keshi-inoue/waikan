import React from "react";
import Layout from "../layout/Layout";
import { Button, FormField, TextInput, Select, Box, Text } from "grommet";
import { Formik } from "formik";
import * as Yup from "yup";
import Error from "../layout/Error";

const ValidationSchema = Yup.object().shape({
  bill: Yup.number()
    .min(2, "金額が少なすぎます!")
    .required("金額を入力してください"),
  numOfPeople: Yup.number()
    .min(2, "人数が少なすぎます!")
    .max(1000, "人数が多すぎます!")
    .required("人数を入力してください"),
  calcOption: Yup.string().required("塩梅を選択してください"),
});

const Home = () => {
  return (
    <Layout>
      <Formik
        initialValues={{ bill: "", numOfPeople: "", calcOption: "" }}
        validationSchema={ValidationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            resetForm();
            setSubmitting(false);
          }, 400);
        }}>
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          handleBlur,
          isSubmitting,
          setFieldValue,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box margin={{ vertical: "small" }}>
              <FormField label="お会計">
                <TextInput
                  type="number"
                  name="bill"
                  placeholder="ex.) 20000"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.bill}
                  className={touched.bill && errors.bill ? "has-error" : null}
                />
              </FormField>
              <Text textAlign="end" margin={{ top: "-40px" }}>
                円
              </Text>
              <Error touched={touched.bill} message={errors.bill} />
            </Box>
            <Box margin={{ vertical: "small" }}>
              <FormField label="人数">
                <TextInput
                  type="number"
                  name="numOfPeople"
                  placeholder="ex.) 20"
                  onBlur={handleBlur}
                  value={values.numOfPeople}
                  onChange={handleChange}
                  className={
                    touched.numOfPeople && errors.numOfPeople
                      ? "has-error"
                      : null
                  }
                />
              </FormField>
              <Text textAlign="end" margin={{ top: "-40px" }}>
                人
              </Text>
              <Error
                touched={touched.numOfPeople}
                message={errors.numOfPeople}
              />
            </Box>
            <Box margin={{ vertical: "small" }}>
              <FormField label="塩梅">
                <Select
                  type="string"
                  name="calcOption"
                  onChange={event => setFieldValue("calcOption", event.value)}
                  options={["セコ勘", "ダサ勘", "神勘"]}
                  value={values.calcOption}
                  className={
                    touched.calcOption && errors.calcOption ? "has-error" : null
                  }
                />
              </FormField>
              <Error touched={touched.calcOption} message={errors.calcOption} />
            </Box>

            <Box margin={{ top: "medium", bottom: "small" }}>
              <Button
                primary
                label={<Box align="center">計算する</Box>}
                type="submit"
                // href="./result"
                disabled={isSubmitting}
              />
            </Box>
          </form>
        )}
      </Formik>
    </Layout>
  );
};

export default Home;

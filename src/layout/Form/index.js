import React from "react";
import { Formik, Form as FromWrapper } from "formik";

const Form = ({
   initialValues,
   validationSchema,
   handleSubmit,
   children,
   validateOnChange = false,
   validateOnBlur = false,
}) => (
   <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      enableReinitialize={true}
      validateOnChange={validateOnChange}
      validateOnBlur={validateOnBlur}
      onSubmit={(values, { setSubmitting, resetForm }) => {
         handleSubmit(values, resetForm);
         setSubmitting(true);
      }}>
      {formik => <FromWrapper>{children(formik)}</FromWrapper>}
   </Formik>
);
export default Form;

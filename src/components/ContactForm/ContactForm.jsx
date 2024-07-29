import { useId } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import  css from ''

const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  telNumber: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

function ContactForm({updateContctList}) {
  const handleSubmit = (values, actions) => {
   updateContctList(values.username,values.telNumber);
    actions.resetForm();
  };
  const usernameFieldId = useId();
  const telNumberFieldId = useId();
  return (
    <Formik
      initialValues={{ username: "", telNumber: "" }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form>
        <div>
        <label htmlFor={usernameFieldId}>Name</label>
        <Field type="text" name="username" id={usernameFieldId} />
        <ErrorMessage name="username" component="span" />
        </div>
        <div>
        <label htmlFor={telNumberFieldId}>Number</label>
        <Field type="tel" name="telNumber" id={telNumberFieldId} />
        <ErrorMessage name="telNumber" component="span" />
        </div>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
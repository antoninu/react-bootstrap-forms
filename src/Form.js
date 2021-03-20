import FormField from "./FormField";
import useSignupForm from "./useSignUpForm";
import * as Joi from "joi";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

const JoiType = (validationType, required) => {
  let joiObj = Joi;

  if (validationType === "string") {
    joiObj = joiObj.string();
  } else if (validationType === "number") {
    joiObj = joiObj.number();
  }

  if (required) {
    joiObj = joiObj.required();
  }

  return joiObj;
};

const createSchema = (formFields) => {
  let result = {};
  let isRepeatPassword = false;

  formFields.forEach(
    ({ label, name, validationType, type, min, max, required }) => {
      name = name ? name : label;
      result[name] = JoiType(validationType, required);

      if (validationType === "repeat_password") {
        result[name] = result[name]
          .string()
          .valid(Joi.ref("password"))
          .required();

        isRepeatPassword = true;
      } else {
        if (type === "email") {
          result[name] = result[name].email({ tlds: { allow: false } });
        }

        if (typeof min === "number") {
          result[name] = result[name].min(min);
        }

        if (typeof max === "number") {
          result[name] = result[name].max(max);
        }
      }
    }
  );

  let joiObject = Joi.object(result);

  if (isRepeatPassword) {
    return joiObject.with("password", "repeat_password");
  } else return joiObject;
};

export default function CustomForm({ formFields }) {
  const schema = createSchema(formFields);

  const { handleSubmit, handleInputChange, errors, submitted } = useSignupForm(
    schema
  );

  return (
    <Form onSubmit={handleSubmit}>
      {formFields.map((field, i) => (
        <FormField {...field} onChange={handleInputChange} key={`field-${i}`} />
      ))}
      {submitted && <Alert variant="success">{"Registro exitoso!"}</Alert>}
      {errors && <Alert variant="danger">{errors.toString()}</Alert>}
      <div>
        <Button
          variant="primary"
          as="input"
          type="submit"
          value="Registrarme"
        />
      </div>
    </Form>
  );
}

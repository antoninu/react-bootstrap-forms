import Form from "./Form";
import formFields from "./formFields";

export default function Signup() {
  return (
    <div className="signup">
      <h1>Registro</h1>
      <Form formFields={formFields} />
    </div>
  );
}

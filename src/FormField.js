import React from "react";
import Form from "react-bootstrap/Form";

export default function FormField({
  label,
  type,
  placeholder,
  name,
  onChange,
}) {
  return (
    <Form.Group>
      <Form.Label htmlFor={label}>{label}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        id={name ? name : label}
        name={name ? name : label}
        onChange={onChange}
      />
    </Form.Group>
  );
}

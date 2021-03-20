const formFields = [
  {
    label: "Nombres",
    type: "text",
    validationType: "string",
    placeholder: "escribe tus nombres...",
    required: true,
  },
  {
    label: "Email",
    type: "email",
    validationType: "string",
    placeholder: "escribe tu email...",
    required: true,
  },
  {
    label: "Edad",
    type: "number",
    validationType: "number",
    placeholder: "escribe tu edad...",
    min: 18,
    max: 120,
  },
  {
    label: "Contraseña",
    type: "password",
    name: "password",
    validationType: "string",
    placeholder: "escribe tu contraseña...",
    min: 8,
    required: true,
  },
  {
    label: "Repite la Contraseña",
    type: "password",
    name: "repeat_password",
    validationType: "repeat_password",
    placeholder: "repite tu contraseña...",
  },
];

export default formFields;

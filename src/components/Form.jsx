import { useState } from "react";
import axios from "axios";

/* Componente de formulario para enviar datos al backend */
const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    age: "",
    phone: "",
    email: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/form",
        formData
      );
      console.log("Form submitted successfully:", response.data);
      setMessage(response.data.message); //Actualiza el estado del mensaje con la respuesta del servidor
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage("Error submitting form"); //Muestra un mensaje de error si ocurre un problema
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-group">
        <label>
          Nombre:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <div className="form-group">
          <label>
            Apellido:
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Edad:
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </label>
        </div>
      </div>
      <div className="form-group">
        <label>
          Telefono:
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="form-group">
        <label>
          Correo:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">Submit</button>
      {message && <p>{message}</p>} {/*Mestra el mensaje del servidor*/}
    </form>
  );
};

export default Form;

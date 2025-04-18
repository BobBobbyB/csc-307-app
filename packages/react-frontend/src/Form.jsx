// src/Form.jsx
import React, { useState } from "react";

function Form(props) {
  const [person, setPerson] = useState({
    name: "",
    job: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setPerson((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  // ✅ Add this new function:
  function submitForm() {
    props.handleSubmit(person);
    setPerson({ name: "", job: "" });
  }

  return (
    <form>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={person.name}
        onChange={handleChange}
      />

      <label htmlFor="job">Job</label>
      <input
        type="text"
        name="job"
        id="job"
        value={person.job}
        onChange={handleChange}
      />

      {/* ✅ Add submit button */}
      <input type="button" value="Submit" onClick={submitForm} />
    </form>
  );
}

export default Form;


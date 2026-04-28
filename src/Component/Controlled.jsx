import { useState } from "react";

export const Controlled = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <h1>Controlled Form</h1>

      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="fname"
          value={formData.fname}
          onChange={handleChange}
        />

        <input
          type="text"
          name="lname"
          value={formData.lname}
          onChange={handleChange}
        />

        <button type="submit">Click</button>
      </form>
    </>
  );
};
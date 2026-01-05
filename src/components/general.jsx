import { useState } from "react";

export default function General({ initialData, onSubmit }) {
  const [formData, setFormData] = useState(() => ({
    fullName: initialData?.fullName || "",
    email: initialData?.email || "",
    phoneNum: initialData?.phoneNum || "",
  }));

  function handleChange(field, value) {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(formData);
  }

  return (
    <section>
      <h2>General Information</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Full name:</label>
          <input
            onChange={(e) => handleChange("fullName", e.target.value)}
            value={formData.fullName}
            type="text"
            id="name"
            name="full_name"
            placeholder="full name..."
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            onChange={(e) => handleChange("email", e.target.value)}
            value={formData.email}
            type="email"
            id="email"
            name="email"
            placeholder="email..."
          />
        </div>

        <div>
          <label htmlFor="phone">Phone Number:</label>
          <input
            onChange={(e) => handleChange("phoneNum", e.target.value)}
            value={formData.phoneNum}
            type="text"
            id="phone"
            name="phone"
            placeholder="phone number..."
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

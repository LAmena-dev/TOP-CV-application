import { useState } from "react";

export default function Work({ initialData, onSubmit, isEdit = false }) {
  const [formData, setFormData] = useState(() => ({
    company: initialData?.company || "",
    position: initialData?.position || "",
    tenure: initialData?.tenure || "",
    duties: initialData?.duties || "",
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

    if (!isEdit) {
      setFormData({
        company: "",
        position: "",
        tenure: "",
        duties: "",
      });
    }
  }

  return (
    <section>
      <h2>Work Experience</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="company">Company name:</label>
          <input
            onChange={(e) => handleChange("company", e.target.value)}
            value={formData.company}
            type="text"
            id="company"
            name="company"
            placeholder="name of company..."
          />
          <label htmlFor="position">Position name:</label>
          <input
            onChange={(e) => handleChange("position", e.target.value)}
            value={formData.position}
            type="text"
            id="position"
            name="position"
            placeholder="Position name..."
          />
        </div>
        <div>
          <label htmlFor="dateStart">Work tenure:</label>
          <input
            onChange={(e) => handleChange("tenure", e.target.value)}
            value={formData.tenure}
            type="text"
            id="workTenure"
            name="work_tenure"
            placeholder="Work tenure..."
          />
        </div>
        <div>
          <label htmlFor="duties">Duties conducted:</label>
          <input
            onChange={(e) => handleChange("duties", e.target.value)}
            value={formData.duties}
            type="text"
            id="duties"
            name="duties"
            placeholder="Duties conducted..."
          />
        </div>

        <button type="submit">
          {isEdit ? "Save Changes" : "Add Experience"}
        </button>
      </form>
    </section>
  );
}


import { useState } from "react";

export default function Education({ initialData, onSubmit }) {
  const [formData, setFormData] = useState(() => ({
    school: initialData?.school || "",
    course: initialData?.course || "",
    gradYear: initialData?.gradYear || "",
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
      <h2>Educational Attainment</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="school">School name:</label>
          <input
            onChange={(e) => handleChange("school", e.target.value)}
            value={formData.school}
            type="text"
            id="school"
            name="school"
            placeholder="name of school..."
          />
          <label htmlFor="course">Course name:</label>
          <input
            onChange={(e) => handleChange("course", e.target.value)}
            value={formData.course}
            type="text"
            id="course"
            name="course"
            placeholder="course name..."
          />
        </div>
        <div>
          <label htmlFor="gradYear">Date graduated:</label>
          <input
            onChange={(e) => handleChange("gradYear", e.target.value)}
            value={formData.gradYear}
            type="date"
            id="gradYear"
            name="grad_year"
            placeholder="date graduated..."
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

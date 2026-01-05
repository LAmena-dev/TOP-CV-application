import { useState } from "react";

export default function Education() {
  const [school, setSchool] = useState("");
  const [course, setCourse] = useState("");
  const [date, setDate] = useState("");

  function handleSchool(e) {
    setSchool(e.target.value);
  }

  function handleCourse(e) {
    setCourse(e.target.value);
  }

  function handleDate(e) {
    setDate(e.target.value);
  }

  return (
    <section>
      <h1>Educational Information</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label for="name">School name:</label>
          <input
            onChange={handleSchool}
            value={school}
            type="text"
            id="school"
            name="school"
            placeholder="name of school..."
          />
          <label for="name">Course name:</label>
          <input
            onChange={handleCourse}
            value={course}
            type="text"
            id="course"
            name="course"
            placeholder="course name..."
          />
        </div>
        <div>
          <label for="Date">Date graduated:</label>
          <input
            onChange={handleDate}
            value={date}
            type="date"
            id="date"
            name="date"
            placeholder="date graduated..."
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </section>
  );
}

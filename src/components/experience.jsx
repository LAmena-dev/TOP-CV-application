import { useState } from "react";

export default function Work() {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [duties, setDuties] = useState([]);

  function handleCompany(e) {
    setCompany(e.target.value);
  }

  function handlePosition(e) {
    setPosition(e.target.value);
  }

  function handleDuties(e) {
    setDuties(e.target.value);
  }

  function handleDateStart(e) {
    setStartDate(e.target.value);
  }

  function handleDateEnd(e) {
    setEndDate(e.target.value);
  }

  return (
    <section>
      <h1>Work Experience Information</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label for="name">Company name:</label>
          <input
            onChange={handleCompany}
            value={company}
            type="text"
            id="company"
            name="company"
            placeholder="name of company..."
          />
          <label for="name">Position name:</label>
          <input
            onChange={handlePosition}
            value={position}
            type="text"
            id="position"
            name="position"
            placeholder="Position name..."
          />
        </div>
        <div>
          <label>Duties conducted:</label>
          <input
            onChange={handleDuties}
            value={duties}
            type="text"
            id="duties"
            name="duties"
            placeholder="Duties conducted..."
          />
        </div>
        <div>
          <label for="dateStart">Date started:</label>
          <input
            onChange={handleDateStart}
            value={startDate}
            type="date"
            id="dateStart"
            name="date_start"
            placeholder="date started..."
          />
          <label for="dateEnd">Date started:</label>
          <input
            onChange={handleDateEnd}
            value={endDate}
            type="date"
            id="dateEnd"
            name="date_end"
            placeholder="date ended..."
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </section>
  );
}

import { useState } from "react";

export default function General() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  function handleFirstName(e) {
    setFirstName(e.target.value);
  }

  function handleLastName(e) {
    setLastName(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }
  
  function handlePhone(e) {
    setPhone(e.target.value);
  }

  return (
    <section>
      <h1>General Information</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label for="name">First name:</label>
          <input
            onChange={handleFirstName}
            value={firstName}
            type="text"
            id="firstName"
            name="first_name"
            placeholder="first name..."
          />
          <label for="name">Last name:</label>
          <input
            onChange={handleLastName}
            value={lastName}
            type="text"
            id="lastName"
            name="last_name"
            placeholder="last name..."
          />
        </div>
        <div>
          <label for="email">Email:</label>
          <input
            onChange={handleEmail}
            value={email}
            type="email"
            id="email"
            name="email"
            placeholder="email..."
          />
        </div>
        <div>
          <label for="phone">Phone Number:</label>
          <input
            onChange={handlePhone}
            value={phone}
            type="text"
            id="phone"
            name="phone"
            placeholder="phone number..."
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </section>
  );
}

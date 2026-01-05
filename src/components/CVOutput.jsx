export default function CVOutput({ data }) {
  const { fullName, email, phoneNum } = data.General;
  const { school, course, gradYear } = data.Education;
  const { company, position, tenure, duties } = data.Work.companies;

  function hasValue(value) {
    return value !== null && value !== undefined && value !== "";
  }

  return (
    <div>
      <section>
        <h1>{fullName || "Your Name"}</h1>

        {hasValue(email) && <p>Email: {email}</p>}
        {hasValue(phoneNum) && <p>Phone Number: {phoneNum}</p>}

        {!hasValue(email) && !hasValue(phoneNum) && (
          <p>
            <i>No general information provided.</i>
          </p>
        )}
      </section>

      <section>
        <h2>{data.Education.title}</h2>

        {hasValue(school) || hasValue(course) || hasValue(gradYear) ? (
          <div>
            {hasValue(school) && (
              <b>
                <p>{school}</p>
              </b>
            )}
            {hasValue(course) && <p>{course}</p>}
            {hasValue(gradYear) && <p>{gradYear}</p>}
          </div>
        ) : (
          <p>
            <i>No education data provided.</i>
          </p>
        )}
      </section>

      <section>
        <h2>{data.Work.title}</h2>

        {data.Work.companies.length === 0 ? (
          <p>
            <i>No work experience added.</i>
          </p>
        ) : (
          data.Work.companies.map((job, index) => {
            <div key={index}>
              <b>
                <p>{job.company}</p>
              </b>
              <p>{job.position}</p>
              <p>{job.tenure}</p>
              <p>{job.duties}</p>
            </div>;
          })
        )}
      </section>
    </div>
  );
}

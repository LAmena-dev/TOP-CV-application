import { useState } from "react";
import Education from "./components/education";
import Work from "./components/experience";
import General from "./components/general";
import CVOutput from "./components/CVOutput";

function App() {
  const [cvData, setCvData] = useState({
    General: {
      title: "General Information",
      fullName: "",
      email: "",
      phoneNum: "",
    },
    Education: {
      title: "Educational Attainment",
      school: "",
      course: "",
      gradYear: "",
    },
    Work: {
      title: "Work Experience",
      companies: [],
    },
  });

  function updateSection(sectionName, newData) {
    setCvData((prop) => ({
      ...prop,
      [sectionName]: newData,
    }));
  }

  function addWorkExperience(newExperience) {
    setCvData((prop) => ({
      ...prop,
      Work: [...prop.Work.companies, newExperience],
    }));
  }

  return (
    <div>
      <div>
        <General
          data={cvData}
          onSubmit={(data) => updateSection("General", data)}
        />
        <Education
          data={cvData}
          onSubmit={(data) => updateSection("Education", data)}
        />
        <Work data={cvData} onSubmit={addWorkExperience} />
      </div>

      <div>
        <CVOutput data={cvData} />
      </div>
    </div>
  );
}

export default App;

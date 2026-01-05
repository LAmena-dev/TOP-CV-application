import { useState } from "react";
import Education from "./components/education";
import Work from "./components/experience";
import General from "./components/general";
import CVOutput from "./components/CVOutput";

function App() {
  const [editingIndex, setEditingIndex] = useState(null);
  const [cvData, setCvData] = useState({
    General: {
      fullName: "",
      email: "",
      phoneNum: "",
    },
    Education: {
      school: "",
      course: "",
      gradYear: "",
    },
    Work: [],
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
      Work: [...prop.Work, newExperience],
    }));
  }

  function deleteWork(index) {
    setCvData((prop) => ({
      ...prop,
      Work: prop.Work.filter((_, i) => i !== index),
    }));
  }

  function startEditing(index) {
    setEditingIndex(index);
  }

  function saveEditedWork(updatedJob) {
    setCvData((prop) => ({
      ...prop,
      Work: prop.Work.map((job, i) => (i === editingIndex ? updatedJob : job)),
    }));

    setEditingIndex(null);
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
        <CVOutput
          data={cvData}
          onDeleteWork={deleteWork}
          onEditWork={startEditing}
        />
      </div>
      {editingIndex !== null && (
        <dialog open>
          <Work
            key={editingIndex}
            initialData={cvData.Work[editingIndex]}
            onSubmit={saveEditedWork}
            isEdit
          />

          <button onClick={() => setEditingIndex(null)}>Cancel</button>
        </dialog>
      )}
    </div>
  );
}

export default App;

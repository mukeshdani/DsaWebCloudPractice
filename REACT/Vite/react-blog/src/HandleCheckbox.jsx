import { useState } from "react";

function HandleCheckBox() {
  const [skills, setSkills] = useState([]);

  const handleSkills = (event) => {
      if(event.target.checked){
        setSkills([...skills, event.target.value])
      }else {
        setSkills([...skills.filter((item)=>item != event.target.value)])
      }
  };

  return (
    <div>
      <h1>Hi Handle Check Box Handler</h1>

      <input onChange={handleSkills} type="checkbox" id="php" value="php" />
      <label htmlFor="php">PHP</label>
      <br /><br />

      <input onChange={handleSkills} type="checkbox" id="js" value="js" />
      <label htmlFor="js">JS</label>
      <br /><br />

      <input onChange={handleSkills} type="checkbox" id="css" value="css" />
      <label htmlFor="css">CSS</label>
      <br /><br />

      <input onChange={handleSkills} type="checkbox" id="node" value="node" />
      <label htmlFor="node">Node</label>
      <br />

      <h3>{skills.join(", ")}</h3>
    </div>
  );
}

export default HandleCheckBox;

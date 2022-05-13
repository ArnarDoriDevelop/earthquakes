import React, {useState} from 'react';

const EarthquakeMine = () => {
  const [experienceArr, setExperienceArr] = useState([]);
  const [experience, setExperience] = useState('');


  const handleExperience = (event) => {
    event.preventDefault();
    setExperience(event.target.value);
    setExperienceArr([...experienceArr, experience]);
    setExperience('');
  }
  return(
    <div>
      <div style={{padding: "30px"}}>
        <div style={{padding: "10px"}}>
        <strong>
          Have you experienced an earthquake? 
          Tell us more!
        </strong>
        </div>
        <div>
          <form onSubmit={handleExperience}>
            <div style={{width:"100%", justifyContent:"center", display: "flex"}}>
              <textarea
                className='form-control'
                rows="5"
                style={{width: "50%"}}              
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              />
            </div>
            <input 
              type='submit'
            />
          </form>
        </div>
      </div>
      <div> {experienceArr.map((exp, index) => {
          return <div key={index}><p style={{fontStyle:"italic"}}>"{exp}"</p></div>
        })} 
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default EarthquakeMine;
import React, {useState, useEffect} from 'react';
import '../styles/style.scss';

const ThemeDetector = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches);
  
  const listen = (e) => {
    setIsDarkTheme(e);
  }
  
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener('change', (e) => listen(e.matches));

    return () => mediaQuery.removeEventListener('change',listen());

  }, []);
  return isDarkTheme;
}


const buttonStyle = {
  color: 'white',
  backgroundColor: "lightblue",
  padding: '10px'
}

const EarthquakeMine = () => {
  const mode = ThemeDetector();
  const [experienceArr, setExperienceArr] = useState([]);
  const [experience, setExperience] = useState('');


  const handleExperience = (event) => {
    event.preventDefault();
    setExperience(event.target.value);
    setExperienceArr([...experienceArr, experience]);
    setExperience('');
  }
  return(
    <div className={mode ? 'dark-mode' : 'light-mode'}>
      <div style={{padding: "30px"}}>
        <div style={{padding: "10px"}}>
        <strong>
          Have you experienced an earthquake? 
          Tell us more!
        </strong>
        </div>
        <div>
          <form onSubmit={handleExperience}>
            <div style={{width:'100%', padding:'0px 0px 20px', justifyContent:'center', display: 'flex'}}>
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
              style={buttonStyle}
            />
          </form>
        </div>
      </div>
      <div> {experienceArr.map((exp, index) => {
          return <div key={index}><p style={{fontStyle:"italic"}}>"{exp}"</p></div>
        })} 
      </div>
    </div>
  );
};

export default EarthquakeMine;
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const AboutComp = () => {
    const [displayText, setDisplayText] = useState("");
  const textToType = "Let me tell you something more about myself!";
  const speed: number = 50;

  useEffect(() => {
    let interval: NodeJS.Timer | number;
    let index: number = 0;

    interval = setInterval(() => {
      if (index <= textToType.length) {
        setDisplayText(textToType.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [textToType, speed]);
  return (
    <div className="row py-5">
    <div className="container">
      <div className="row pb-3">
        <div className="col-10 offset-1">
        <h3><span style={{color: `rgb(217, 142, 2)`}}>Hi</span> again!</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-10 offset-1">
        <p>{displayText}</p>
        <p style={{lineHeight:`1.6`,fontSize:`16px`}} >"I recently completed my studies as a front-end developer at Brainster, where I acquired a comprehensive understanding of web development technologies, including HTML, CSS, and JavaScript. With a passion for creating visually appealing and user-friendly interfaces, I am driven by ambition and a continuous quest for learning. My educational journey at Brainster has equipped me with the skills to craft engaging and responsive web applications. I am excited to apply my knowledge and creativity to contribute meaningfully to the ever-evolving field of front-end development."</p>

        <p>You can check out my work <Link to={`/projectsPage`} style={{color:`rgb(217, 142, 2)`}}>here</Link> or by going to the Projects page from the navbar!</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AboutComp

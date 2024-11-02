import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function About() {
    return (
        <div>
        <h2>About</h2>

        <div className="App-body-left">
            <h3>Repositories</h3>
            <Link to="https://github.com/robert-kuropkat/">My GitHub Profile Page</Link>
            
            <h3>Unity Self Training</h3>
            <Link to="https://github.com/robert-kuropkat/GDHQ-StarShooterPro">GameDevHQ 2D Game Development Training</Link>
            <br></br><Link to="https://github.com/robert-kuropkat/GDHQ-CSharpSurvivalGuide">GameDevHQ Unity C# Survival Guide</Link>
            <br></br><Link to="https://github.com/robert-kuropkat/UnityPathways">Learn Unity Pathways</Link>

        </div>

        </div>
    )
  }  

export default About;

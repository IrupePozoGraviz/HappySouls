//här ska sen bild och text in
import React from 'react';
import bild2 from '../../images/AdobeStock_161672108_Preview.jpeg'
import '../../css/tjanster.css';

const SectionTwo = () => {
    return (
        <main className="tjanster-main">
        <img src={bild2} alt="Tjänster" className="tjansterImage" />
        <h1> Tjänster</h1>
<div className="tjanster">
        <div className="tjanst1">
              <h2>
                 Tjänst 1
              </h2>
              <p>Hos Happier Soul finner du vägen till ett inre lugn och äkta livsglädje.</p>
              <p>Pris</p>
            </div>
            <div className="tjanst2">
            <h2>
                Tjänst 2
              </h2>
              <p>Hos Happier Soul finner du vägen till ett inre lugn och äkta livsglädje.</p>
              <p>Pris</p>
            </div>
            <div className="tjanst3">
            <h2>
                Tjänst 3
              </h2>
              <p>Hos Happier Soul finner du vägen till ett inre lugn och äkta livsglädje.</p>
              <p>Pris</p>
            </div>
        </div>
        </main>
    );
    };


export default SectionTwo;
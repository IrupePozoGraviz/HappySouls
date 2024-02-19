//här ska sen bild och text in
import React from 'react';
import bild2 from '../../images/AdobeStock_161672108_Preview.jpeg'
import '../../css/tjanster.css';

const SectionTwo = () => {
    return (
        <div className="tjanster">
        <img src={bild2} alt="Tjänster" className="tjansterImage" />
        <h1> Tjänster</h1>

        <div className="tjanst1">
              <p>
                tjänst1
              </p>
            </div>
            <div className="tjanst2">
              <p>
                tjänst2
              </p>
            </div>
            <div className="tjanst3">
              <p>
                tjänst3
              </p>
            </div>
        </div>
    );
    };


export default SectionTwo;
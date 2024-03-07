//här ska sen bild och text in
import React from 'react';
import { BookingButton } from '../bokningsknapp'
import bild2 from '../../images/AdobeStock_161672108_Preview.jpeg'
import '../../css/tjanster.css';

const SectionTwo = () => {
    return (
        <main className="tjanster-main">
        <img src={bild2} alt="bild på" className="tjansterImage" />
        <h1> Tjänster</h1>
<div className="tjanster">
        <div className="tjanst1">
              <h2>
                Happier Soul
              </h2>
              <p>En gång i veckan liveföreläsningar med gruppcoaching för att lära dig lyssna på kroppen och dig själv.<br></br> 
              Mellan tillfällena är det övningar och meditationer.</p>
              <p><strong>Kursens längd</strong>: 3 månader </p>
              <p><strong>Plats</strong>: Alla träffar sker digitalt</p>
              <p><strong>Pris</strong>:</p>
              <div className="bokningsknapp"><BookingButton /></div>
            </div>
            <div className="tjanst2">
            <h2>
                Individuell coaching
              </h2>
              <p>3 månaders individuell coaching för att lära dig förstå dig själv,
                hitta vad du behöver mer och mindre av för att må bra och tycka om dig själv.
                Du får hjälp hur du kan hantera tankar, känslor och situationer i ditt liv.</p>
              <p><strong>Plats</strong>: Alla träffar sker digitalt</p>
              <p><strong>Pris</strong>:</p>
              <div className="bokningsknapp"><BookingButton /></div>
            </div>
        </div>
        </main>
    );
    };


export default SectionTwo;
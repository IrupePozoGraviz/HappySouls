import React from 'react';
import Linn from '../../images/Linn.png'
import '../../css/ommmig.css';

const SectionFour = () => {
    return (
        <section className="OmMig">
            <img src={Linn} alt="Linn Sundlöf" className="LinnImage" />
            <h1>Om mig</h1>
            <article className="Soul-text-body">
                <p>Jag är Linn Sundlöf, din personliga guide på vägen mot självkännedom och äkta lycka. På Happier Soul brinner jag för att hjälpa dig att upptäcka och omfamna ditt sanna jag. Tillsammans utforskar vi din inre röst och lär oss att lyssna på den – det är nyckeln till ett liv fyllt av frihet och glädje. När du känner din innersta kärna och vad som verkligen ger dig välmående, kan du börja leva det liv du alltid drömt om.</p>
                <p>Med över ett decenniums erfarenhet av att vägleda människor till självkärlek och livsglädje, är jag här för att stödja dig på din resa. Min dröm är att inspirera så många som möjligt att leva autentiskt – att lyssna inåt och leva ett liv som speglar vem de verkligen är.</p>
                <p>Är du redo att ta steget? Kontakta mig för en förändring som börjar inifrån och strålar ut i varje aspekt av ditt liv.</p>
            </article>
        </section>
    );
}

export default SectionFour;


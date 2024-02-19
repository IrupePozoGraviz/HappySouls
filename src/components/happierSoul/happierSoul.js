import React from 'react';
import bild1 from '/Users/irupepozograviz/Desktop/Linn/src/images/AdobeStock_64819783_Preview.jpeg'
import '../../css/HappierSoul.css';

const SectionOne = () => {
  return (
    <div className="HappierSoulMain">
      <img src={bild1} alt="Happier Soul" className="HappierSoulImage" />
      <h1>Happier soul</h1>
      <div className="Soul-text-body">
        {/* Use lowercase for standard HTML tags */}
        <p>
        Hos Happier Soul finner du vägen till ett inre lugn och äkta livsglädje.
        Jag erbjuder personlig coaching för att hjälpa dig hitta och vårda din innersta essens (eller natur?). </p>
        <p>
        Genom att omfamna naturens kraft och lyssna till din egen röst,
        guidar jag dig till ett självständigt och uppfyllande liv.</p>

 <p> Tjänsterna är skräddarsydda för dig som söker mening bortom yttre framgångar och vill leva sann mot dig själv. 
 Ta kontroll över din lycka – bli en Happier Soul.
        </p>
      </div>
    </div>
  );
}

// Using default export for the component
export default SectionOne;
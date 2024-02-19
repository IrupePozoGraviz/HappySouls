import React from 'react';
import SectionOne from '../components/happierSoul/happierSoul';
import SectionThree from '../components/webbinarier/webbinarier';
import SectionFour from '../components/Ommig/ommig';
import SectionTwo from '../components/tjänster/tjanster';
import '../css/landningssida.css';

const Landningssida = () => {
    return (
        <div className="landningssida">
            <SectionOne/>
            <SectionTwo/>
            <SectionThree/>
            <SectionFour/>

        </div>
    );
}

export default Landningssida;
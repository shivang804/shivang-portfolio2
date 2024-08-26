import React from 'react';
import '../styles/Education.css'

const Education = () => {
    return (
        <section id="education" className="education">
            <h2>Education</h2>
            <div className="degree">
                <h3>Bachelor of Technology</h3>
                <p>Poornima College of Engineering , Jaipur</p>
            </div>
            <div className="degree">
                <h3>Senior Secondary</h3>
                <p>All Saints Sr. Sec. School , Ajmer</p>
            </div>
            <div className="degree">
                <h3>Secondary</h3>
                <p>Saint Paul's Sr. Sec. School , Beawar</p>
            </div>
        </section>
    );
};

export default Education;

import React, { Component } from 'react';

import Header from './Header';
import Summary from './Summary';
import ContactInfo from './ContactInfo';
import SkillsList from './SkillsList';
import EducationHistory from './EducationHistory';
import Footer from './Footer';
import Copyrigth from './Copyrigth';

class PortfolioContent extends Component {
    render() {
        const { skills, eduList } = this.props
        return (
            <div className="portfolio-content">
                
                <Header/>

                <Summary/>

                <section>
                    <ContactInfo/>
                </section>
                
                <SkillsList skills={skills}/>
                
                <EducationHistory eduList={eduList}/>

                <Footer/>

                <Copyrigth />
                
            </div>
        )  
    }
}

export default PortfolioContent
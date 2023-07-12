import React from 'react';
import './Methodology.css';


function Methodology() {
  return (
    <div className='methodology'>
      <h2>Methodology</h2>
      <div className='survey-container'>
      <div className='survey-links'>
        <br></br>
        <h3>LOP/MLO Survey</h3>
      <br></br>
      <a href="https://forms.office.com/Pages/DesignPageV2.aspx?subpage=design&id=OX9aur7js0q0UGf6gPrsrYsr_kqE6MBEjWNLC-YocW9UQk44WVBWVlI3WEw1MElFTk1FT0MyUThPTyQlQCN0PWcu" >LOP Alumni Suvery</a>
      <br></br>
      <br></br>
      <a href="https://forms.office.com/Pages/DesignPageV2.aspx?subpage=design&id=OX9aur7js0q0UGf6gPrsrYsr_kqE6MBEjWNLC-YocW9URDBWODA4TE5GTk0yVUVNOFlSMTdaNjFGVyQlQCN0PWcu&analysis=true" >LOP Graduating Student Suvery</a>
      <br></br>
      <br></br>
      <a href="https://forms.office.com/Pages/DesignPageV2.aspx?subpage=design&id=OX9aur7js0q0UGf6gPrsrYsr_kqE6MBEjWNLC-YocW9UNkFQWTQwU1lMSE0wV1lUUzdOOE5SOThKOSQlQCN0PWcu&analysis=true" >LOP Current Student Suvery</a>
      <br></br>
      <br></br>
      <a href="https://forms.office.com/Pages/DesignPageV2.aspx?subpage=design&id=OX9aur7js0q0UGf6gPrsrS51YCzhKJtJsbfx3NYXkkBUMUdESktCNlJYVzZQV0NGWEpaRVpLNEQwSS4u" >MLO Graduating Student Suvery</a>
      <br></br>
      <br></br>
      </div>
      <div className='literature'>
        <br></br>
        <h3>LOP Literature Review</h3>
        <a href='https://drive.google.com/file/d/1tPAKjEo2QLOpS9G2Bw39lzet5sKS5WlI/view?usp=drive_link'> 2023 LOP Alumni Survery Literature Review</a>
        <br></br>
        <br></br>
        <a href='https://docs.google.com/document/d/13x1qz1Xd6qSeuT3dl83goOFtzkdNW8H4/edit?usp=sharing&ouid=110580296038753455992&rtpof=true&sd=true'>Research on Comparable Programs</a>
        <br></br>

      </div>

      </div>
      <br></br>
      <h3>LOP Logic Model</h3>
      <img className="big-graph" src={`${process.env.PUBLIC_URL}/LogicModel_LOP.png`} alt="Graph 2" />
    </div>
  );
}

export default Methodology;

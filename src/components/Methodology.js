import React from 'react';
import './Methodology.css';
import { useNavigate } from 'react-router-dom';



function Methodology() {
  const navigate = useNavigate();
  return (
    <div className='methodology'>
      <h2>Methodology</h2>
      <div className='survey-container'>
      <div className='survey-links'>
        
        <h3>LOP/MLO Survey</h3>
      
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
      <a href='https://drive.google.com/file/d/1tPAKjEo2QLOpS9G2Bw39lzet5sKS5WlI/view?usp=drive_link'> 2023 LOP Alumni Survery Literature Review</a>
        <br></br>
        <br></br>
        <div className='go'>
                    <button onClick={() => navigate('/raw-data')}>Check All the Raw Data </button>
                </div>
        
      <h4><i>2012 proposed program evaluation methodology</i></h4>
      <a href='https://drive.google.com/file/d/1Jnhs-zcnNwnSppjfVFm1PQ9Mn5fHY4Tx/view?usp=drive_link'>2012 Evaluation Report</a>
      <br></br><br></br>
      <a href='https://drive.google.com/file/d/1EM9C31r08cb-eMwkI0dtsJGt1Opkoifg/view?usp=drive_link'>2012 Logic Model</a>
      </div>
      <div className='literature'>
        
        <h3>Competitive Analysis</h3>
        <a href='https://docs.google.com/document/d/13x1qz1Xd6qSeuT3dl83goOFtzkdNW8H4/edit?usp=sharing&ouid=110580296038753455992&rtpof=true&sd=true'>Research on Comparable Programs</a>
        <br></br>
        <br></br>
        <a href='https://docs.google.com/spreadsheets/d/1pbSfvdi989SFKpSqV2WEuzeyhn4Ymksl/edit?usp=sharing&ouid=110580296038753455992&rtpof=true&sd=true'>Competitors and Requirement</a>


      </div>
<div className='focus-group'>
      <h3>Focus Group</h3>
      </div>
      </div>
      <br></br>
    
    </div>
  );
}

export default Methodology;

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import slide1 from './lop_slide/Slide1.png'; // adjust paths to your images
import slide2 from './lop_slide/Slide2.png';
import slide3 from './lop_slide/Slide3.png';
import slide4 from './lop_slide/Slide4.png';
import "./background.css"

function Background() {

 

  
  return (
    <div className='background'>
      <br></br>
      <h2>Background & Key Milestones</h2>
      
      <br></br>
      <div className='slides'>
        <h3>LOP/MLO Project Revision</h3>
        <a href='https://docs.google.com/presentation/d/1Q_FozjdBeWT4hWSyCcrijL6AebfGYPhj/edit?usp=sharing&ouid=110580296038753455992&rtpof=true&sd=true'>Key Decision - 
link side: Guidance from Dean Camilla Benbow, April 2023, April 2023
</a>
<br></br>
<br></br>
      <Carousel autoPlay interval={5000} infiniteLoop useKeyboardArrows dynamicHeight>
                <div style={{border: "2px solid black"}}>
                    <img src={slide1} alt="Slide 1"/>
                </div>
                <div style={{border: "2px solid black"}}>
                    <img src={slide2} alt="Slide 2"/>
                </div>
                <div style={{border: "2px solid black"}}>
                    <img src={slide3} alt="Slide 3"/>
                </div>
                <div style={{border: "2px solid black"}}>
                    <img src={slide4} alt="Slide 4"/>
                </div>
            </Carousel>

      </div>
      <br></br>
      <br></br>
      <h3>Project Plan</h3>
      <h4>(Project Plan Last Updated Feb, 2023)</h4>
      <a href='https://docs.google.com/document/d/1Ys1iMCdxHbbHs8bLGQ68wPxxiw2UZ_mz/edit?usp=sharing&ouid=110580296038753455992&rtpof=true&sd=true'>Project Plan Spring Semester, 2023</a>
      <br></br><br></br>
      <div className='title'>

      <p><strong>Project Plan - Strategic Direction</strong></p>
<p><strong>Leadership and Organizational Performance (LOP) and Leading Organizations (MLO)</strong></p>
<p><br></br></p>
      </div>
      
<p><strong>Executive Summary</strong></p>
<p>The goal of the LOP and MLO strategic direction project is to gain clarity about Vanderbilt&rsquo;s unique value proposition in the leadership development and organizational performance space.&nbsp;The project will include assessing both programs&apos; successes, strengths and weaknesses, and determine their value and competitive advantages compared to similar programs. The program evaluation project will also explore the external marketplace to understand the competitive landscape.&nbsp;The findings will be used to identify LOP/MLO synergies and develop plans for the future direction of both programs.</p>
<p><br></br></p>
<p><strong>Timeline</strong></p>
<img className="big-graph" src={`${process.env.PUBLIC_URL}/backgroundtimeline.png`} alt="Graph bg img" />
<p><strong>&nbsp;</strong></p>
<p><br></br></p>
<p><strong>Overall Resources</strong></p>
<ul>
    <li>LOP Program Director and Interim MLO Program Director: Kim Davenport</li>
    <li>LOP Faculty: Susan Douglas, Mark Cannon, Corbette Doyle and Chris Quinn Trank</li>
    <li>MLO Faculty: Carrie Grimes, Eve, Rifkin, Cynthia Osborne and Mary Kay Vona</li>
    <li>LPO Leadership Guidance: Will Doyle and Marisa Cannata</li>
    <li>LLO Doctoral Candidates: Jeremy Speikes and Gregg DiNardo&nbsp;</li>
    <li>LOP &amp; MLO Students: Nathan Buttrey and TBD</li>
    <li>Grad Assistants: Peyton Kelly (MLO) and Lauren Boswell (LOP)</li>
    <li>Educational Consulting Firm (TBD)</li>
</ul>
<p><br></br></p>
<p><br></br></p>
<p><br></br></p>
<p><br></br></p>
<p><strong>Project Plan</strong></p>
<ol>
    <li>External Needs Analysis &ndash; Determine the focus areas of peer institutions and how other organizations are meeting the market needs by developing the leadership and organizational performance competencies students and working professionals&nbsp;need to succeed.&nbsp;The evaluation will address both online and on-campus programs while keeping certain objectives in mind, such as: the target population of both programs: LOP --&nbsp;&nbsp;those with limited work experience, often coming straight from undergrad; early career professionals, generally with limited contiguous work experience. MLO -- working professionals, typically with 5+ years of experience; full-time leaders, managers, and individual contributors.&nbsp;</li>
</ol>
<p><br></br></p>
<ol>
    <ol>
        <li><strong>Identify market demands, value gaps within program niches, and key competitors.&nbsp;</strong>~<em>Start Jan. 15, 2023;&nbsp;</em><em>Complete March 15,&nbsp;</em><em>2023</em>
            <ol>
                <li>This first workstream will focus on:<ol>
                        <li>Identifying the&nbsp;current and future unfulfilled market needs the LOP and MLO programs might be able to meet. Update the value proposition for each program relative to market needs and competition. &nbsp;</li>
                        <li>Identifying the programs&rsquo; competitors.<ol>
                                <li>Determine the scope - are there five major competitors or 100? Are they traditional universities? External leadership development organization, e.g., Center for Creative Leadership that offer certificate programs?&nbsp;</li>
                            </ol>
                        </li>
                        <li>Conducting an analysis of competitors identified by Peyton Kelly.</li>
                        <li>Creating an analysis protocol/methodology.&nbsp;For example,&nbsp;<ol>
                                <li>How do our strategies and competencies compare?&nbsp;</li>
                                <li>Are LOP and MLO considered effective programs within their respective niches? &nbsp;</li>
                            </ol>
                        </li>
                    </ol>
                </li>
                <li>Determine resources necessary to complete the external analysis.&nbsp;<ol>
                        <li>Can we rely on internal resources or do we need the assistance of an education consulting firm?&nbsp;<ol>
                                <li>If additional resources are needed, the guidance is to keep the cost of this evaluation between $1&ndash;$5k.</li>
                            </ol>
                        </li>
                    </ol>
                </li>
            </ol>
        </li>
    </ol>
</ol>
<p>Resources:&nbsp;</p>
<ul>
    <ul>
        <ul>
            <ul>
                <li>Lead: Doctoral Candidates: Jeremy Speikes and Gregg DiNardo&nbsp;</li>
                <li>Support:&nbsp;LOP Year-Two Student: Nathan Buttrey (Independent Study) and Grad Assistant: Peyton Kelly (MLO)&nbsp;</li>
            </ul>
        </ul>
    </ul>
</ul>
<p><br></br></p>
<p><br></br></p>
<ol>
    <ol>
        <li><strong>Create Communications Plan.&nbsp;</strong>~<em>Start Feb 1, 2023; Complete March 1, 2023</em>
            <ol>
                <li>Inform current students, alumni, and key Peabody stakeholders of the assessment (e.g., who, what, where, how, when). The goal is to ensure stakeholders understand the need for the project (case for change) and set the stage for getting their input. &nbsp;</li>
                <li>Follow change management principles to build support of the evaluations and potential changes in future. Build support early to understand concerns and overcome any potential resistance.&nbsp;</li>
            </ol>
        </li>
    </ol>
</ol>
<p>Resources:&nbsp;</p>
<ul>
    <li>Doctoral Candidates: Lead: Jeremy Speikes and Gregg DiNardo&nbsp;</li>
    <li>Support: Kim Davenport, LOP and MLO (interim) Program Director; Grad Assistant: Peyton Kelly (MLO)&nbsp;</li>
</ul>
<p><br></br></p>
<ol>
    <li>Internal Effectiveness Assessment &mdash; Appraise what is and is not working within each program. ~<em>Start March 15, 2023; Complete May 1, 2023</em>
        <ol>
            <li><strong>Develop Survey:</strong> Create survey for recent LOP alumni to determine which courses, skills, and competencies are most needed in today&apos;s business environment.&nbsp;<ol>
                    <li>Send the survey to ~100 LOP alumni who have graduated within the last ~10 years.<ol>
                            <li>If the survey receives even a 50% response rate, that will provide 50 graduates from which the graduate assistants can pool approximately 25 for more detailed interviews.</li>
                        </ol>
                    </li>
                    <li>Although we do not yet have MLO alumni to draw experiences from, LOP alumni can serve as a good benchmark for MLO.</li>
                    <li>We will also use the survey to determine the value gap in the Ed market.<ol>
                            <li>E.g., What, if any, additional education/degrees have alumni pursued post-graduation? Why? What component did LOP/MLO fail to offer students that they felt they needed to gain competitive advantage in the job market?</li>
                        </ol>
                    </li>
                </ol>
            </li>
            <li><strong>Alumni Interviews:</strong> Begin by conducting an analysis of LOP graduates, identifying their top 3&ndash;4 career paths pursued in the last ~five- seven years.<ol>
                    <li>Focus on subsequent mid-term career trajectories, not just first jobs</li>
                    <li>The survey and subsequent interviews will address items such as:&nbsp;<ol>
                            <li>The courses they found most useful relative to their career paths;</li>
                            <li>Specific valuable content and activities (if they remember it);&nbsp;</li>
                            <li>The ideal order in which to take electives;&nbsp;</li>
                            <li>The competencies they believe LOP or MLO enhanced that have been most beneficial to their careers.</li>
                            <li>Any gaps alumni think they need/needed that the program did not provide.&nbsp;</li>
                        </ol>
                    </li>
                    <li><strong>Employer Interviews</strong>: Gather data from firms that have hired multiple LOP graduates and HR leaders struggling to fill talent gaps.&nbsp;<ol>
                            <li>Potentially survey firms who have hired alum or HR leaders struggling to fill talent gaps.</li>
                        </ol>
                    </li>
                </ol>
            </li>
        </ol>
    </li>
</ol>
<p>Resources:</p>
<ul>
    <li>Lead: Doctoral Candidates: Jeremy Speikes and Gregg DiNardo&nbsp;</li>
    <li>Support: Kim Davenport, LOP and MLO (interim) Program Director; Grad Assistants: Peyton Kelly (MLO) and Lauren Boswell (LOP)</li>
</ul>
<p><br></br></p>
<ol>
    <li>Recommendations &ndash; Use data from the external analyses to develop recommendations for the LOP and MLO programs. ~<em>Start May 15, 2023; Complete August 1, 2023</em>
        <ol>
            <li><strong>Competency Model:</strong> Utilizing evidence-based practice, what are the competencies students in each program need to be effective leaders?<ol>
                    <li>Combine knowledge gathered in the external analysis and internal needs assessment to develop a new competency model for the LOP and MLO programs.<ol>
                            <li>Use the external analysis to determine what the market demands before re-designing courses and curricula.&nbsp;</li>
                            <li>Use the needs assessment to determine what we can learn from our alumni to decide what parts of the program should stay and which parts need tweaking.&nbsp;</li>
                        </ol>
                    </li>
                    <li>Identify a methodology for creating our competency model.<ol>
                            <li>Begin with a literature review of competency models and their development.</li>
                            <li>Develop a scaffolding of competency levels.</li>
                        </ol>
                    </li>
                </ol>
            </li>
            <li><strong>Curriculum Changes:</strong> Assembling information from the needs assessment will allow us to determine what changes are necessary for the programs&apos; curriculums, such as:<ol>
                    <li>Address questions/create proposal to transition LOP to a 30-hour versus 36-hour program.</li>
                    <li>Determine specific courses that may not be necessary or desired courses currently missing from the curriculum.</li>
                    <li>Find better ways of integrating the two programs, i.e., determine which courses could/should be in person, online, or a hybrid.</li>
                </ol>
            </li>
            <li><strong>Faculty Skills and Experience:</strong> Some curriculum or course changes might influence what faculty we recruit, although we do not anticipate those changes.</li>
        </ol>
    </li>
</ol>
<p>Resources:</p>
<ul>
    <li>Lead: Doctoral Candidates: Jeremy Speikes and Gregg DiNardo&nbsp;</li>
    <li>Support: Kim Davenport, LOP and MLO (interim) Program Director</li>
</ul>
<p><br></br></p>
<ol>
    <li>Department Chair Approval &ndash; Present proposed changes to Will Doyle and Marisa Cannata for approval. <em>~August 1 - 15, 2023</em>
        <ol>
            <li>We hope to begin phasing in LOP and MLO program changes as early as the spring semester of 2024.</li>
        </ol>
    </li>
</ol>
<p>Resources:</p>
<ul>
    <li>Lead: Doctoral Candidates: Jeremy Speikes and Gregg DiNardo&nbsp;</li>
    <li>Support: Kim Davenport, LOP and MLO (interim) Program Director</li>
</ul>
    </div>
  );
}

export default Background;

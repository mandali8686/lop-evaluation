import React from 'react';
import './ExecutiveSummary.css';
import myImage from './oppo.png'; // replace with the actual path to your image
import participant from './participant.png';
import swot from './swot.png';
import comp from './comp.png';
import no_comp from './no_comp.png';
import threat from './competitor_course.png';
import new_rec from './new_rec.png';

function ExecutiveSummary() {
  return (
    <section>
        <div className='executive-summary'>
        <h2>Executive Summary</h2>
        <h3>Introduction and Background</h3>
      <p>Peabody College offers two master’s level programs designed for students who intend to lead organizations: Leadership and Organizational Performance (LOP), a 36-hour in-person program highlighted by an internship, and Leading Organizations (MLO), a 30-hour online program. LOP was designed to help students acquire an understanding of organizational development, leadership theory, talent management, evidence-based practice and program evaluation. MLO was designed to help working professionals move forward in their careers as leaders by elevating their capacity to manage, lead and strengthen organizations. </p>
      <p>Both programs highlight experiential learning, offer flexible design to allow students to maintain employment, and were designed around sets of competencies and principles that were relevant at the time. In many ways, that time now feels like long ago.
</p>
      <p>Post-pandemic changes in the workplace have led organizations to shift toward a “new normal” and qualified applicants in both programs has declined. To remain competitive and ensure Peabody College students are best prepared to lead these hybrid organizations, in January 2023, we began an assessment to determine:
</p>
      <ul>
        <li>What competencies/curriculum might need to be updated</li>
        <br></br>
        <li>How LOP and MLO are differentiated from competitive programs</li>
        <br></br>
        <li>If there is a need to change or merge the programs.</li>
      </ul>
      
      <div className='container'>
        <div className='text-container'>
        <p>The evaluation included both internal and external analyses. Internally, surveys were sent to recent graduates of both programs (Cohort 2023), current LOP students (Cohort 2024) and graduates (Cohorts 2022-2012). Respondents included:</p>
      
        <ul>
        <li>11/22 (50%) LOP recent graduates </li>
        <br></br>
        <li>10/20 (50%) LOP current students </li>
        <br></br>
        <li>8/9 (89%) MLO graduates </li>
        <br></br>
        <li>49/140 (35%) LOP alumni</li>
      </ul>
      
        <p>Externally, focus group interviews were conducted with 16 thought leaders from industry and government sectors. They included HR and talent acquisition executives, executive coaches and management consultants. And an evaluation of 27 comparable programs at 18 universities provided insights into the focus of competitive programs, courses offered, and number of hours required for graduation. 
 </p>
      
        </div>
        
      <img className='half' src={participant} alt="Survey Participants" />
      
      </div>
      <p>Based on parameters provided by the Dean in April 2023, the feedback we received from students, alumni and thought leaders, our analysis of the other university programs, and the greater brand awareness of LOP, we recommend merging MLO into LOP, updating the LOP curriculum to better reflect competencies today’s students need, and offering LOP in two formats: on campus and online. Following is a summary of the data collected that helped us to arrive at this recommendation. </p>
      
      <h3>Data Analyzed</h3>
      <div className='container'>
      <p>We utilized the SWOT methodology to summarize results of data collected. Input from current students, recent graduates and LOP alumni provided the basis of the internal analysis that highlights strengths and weaknesses of the LOP and MLO programs. The external analysis drew on input from the survey participants, thought leaders and a competitive/landscape analysis that helped identify opportunities and threats. </p>
      <img className='half' src={swot} alt="SWOT Framework" />
      
      </div>
      <h4>Strength</h4>
      <p>Combined input from LOP and MLO survey participants highlighted competencies we need to continue providing. The top three are: dealing with ambiguity; (25%) building effective teams (15.62%) and strategic agility (12.50%). Lower rated competencies, particularly those with 3% ratings, also appear in the weaknesses section that follows. Strengths participants identified vary slightly by program.</p>
      <p>LOP: Top competencies identified: dealing with ambiguity, building effective teams, and strategic agility. Alumni highlighted the rigorous curriculum and practical skills development, valuing the program's focus on real-world projects and experiential training. Graduates also emphasized improved time management, problem-solving, collaboration skills, and increased confidence in having difficult conversations, signifying the program's substantial impact on their professional growth.</p>
      <p>MLO: Top competencies identified: building effective teams, process management, and decision quality. Graduates commended the program's focus on diversity, equity, inclusion (DEI), its flexible and relevant structure, and the lifelong impact it has on their skill development.  </p>
      <br></br>
      <p className='title'> Figure 1. All: What competencies did you aquire in LOP/MLO program?</p>
      <img src={comp} alt="Competencies provided" />
      <h4>Weaknesses</h4>
      <p>While numerous strengths fortify the LOP and MLO programs, combined input from survey participants point to two key areas for improvement: innovation management and decision quality.</p>
      <p>LOP: Alumni identified gaps in the development of competencies like innovation management, process management, and strategic agility, with graduates pointing to decision quality, written communication, and creativity as areas needing enhancement. The desire for a balanced curriculum, more practical experience, in-depth feedback, and enriched career support emerged as common threads.</p>
      <p>MLO: Graduates identified a gap in the competency of dealing with ambiguity and noted an in-class disparity in the level of students' work experience, suggesting the need for course prerequisites. Feedback also highlighted the necessity for faculty to better engage with experienced students and a desire for a balanced curriculum, focusing more on leadership, organizational development, and conflict management, all strengths of the LOP program.
</p>
      <p>Across both programs, respondents cited the need for more rigorous academic standards, internship support, enhanced networking opportunities, innovation and DEI-focus. </p>
      <br></br>
      <p className='title'> Figure 2. All: What competencies did not provided that you are lacking in LOP/MLO program?</p>
      
      <img src={no_comp} alt="Competencies not provide" />
    <h4>Opportunities</h4>
    <p>Shifts in the professional landscape and the introduction of new workforce trends present ample opportunities for growth and refinement of both programs. Key areas include: automation, AI, hybrid work modes, data-driven decision-making, digital literacy, and an elevated focus on diversity, equity, and inclusion (DEI). These trends necessitate a revisit of existing competencies along with an exploration of competencies to be added.
</p>
    <p>Internal respondents noted the following competencies were identified to prepare graduates for the modern workforce:  </p>
    <ol>
        <li><u>Leadership:</u> An increased emphasis on strategic thinking, innovation practices, change management, empathy, and leadership of hybrid/remote teams.</li>
        <br></br>
        <li><u>Data Literacy and Analytical Skills:</u> Promoting data-based decision making, HR analytics, and proficiency in business analytics tools like Tableau and Power BI.</li>
        <br></br>
        <li><u>Technology and Digital Skills:</u> Encouraging familiarity with human capital management solutions like Workday and leveraging AI technologies, alongside understanding data security.</li>
        <p>External respondents cited additional competencies that align with these trends, including:</p>
        <li><u>Innovation, Creativity, and Strategy:</u> Skills like strategic perspective, understanding interconnectedness within an organization, human-centered design, storytelling, initiative, creativity, strategic decision-making, and bias for action need to be honed.</li>
        <br></br>
        <li><u>Communication and Decision Making:</u> Effective written communication in hybrid workplaces, high-quality data-driven decision-making, active listening, and synthesis of information are valuable competencies for modern professionals.</li>
        <br></br>
        <li><u>Agile Leadership and Self-Management:</u> Skills in leadership agility, agile approach, self-management, self-awareness, and resilience are crucial in the face of rapid changes in work environments.</li>
        <br></br>
        <li><u>Executive Coaching and Organizational Performance:</u> Developing competencies in connecting with people, executive coaching skills, dealing with constructive feedback, acquiring ICF credentials, and fostering organizational learning.</li>
        <br></br>
        <li><u>Emotional Intelligence and Mental Health:</u> Understanding emotional intelligence, leading with empathy, mental health awareness, and fostering accountability are integral in today's work culture.</li>
        <br></br>
        <li><u>Problem Solving, Financial Acumen, and Adaptability:</u> Problem-solving, analytical skills, financial acumen, adaptability, and a strategic agility mindset are valuable in the face of increasing work complexity.</li>
        <br></br>
        <li><u>Collaboration and Influence:</u> Competencies in relationship building, influencing skills, selling ideas, facilitation skills, and working in a matrix environment are required for effective teamwork.</li>
    </ol>
      <img src={myImage} alt="Workforce Trends" />
      <p>Further insights from LOP alumni suggest that the changing workforce landscape offers several critical areas for exploration. They include addressing the impact of high turnover and elevated salary expectations resulting in less experienced individuals taking on more complex roles, impacting team dynamics and experience levels. The demand for policy updates to replace those outdated by COVID-19 is clear, as is the need to understand and adapt to Generation Z's unique work styles and expectations as they enter the workforce. Moreover, the ability to adapt to external events has become crucial, emphasizing the need for professional adaptability and resilience in navigating societal shifts and unrest.
</p>
      <h4>Threats</h4>
      <p>Based on a landscape analysis of competitor programs around the country, there were a few key trends that were found. Of the 27 competitor programs evaluated, 18.52% mandate internships, and 40.74% incorporate Capstone projects. The number of core courses among competitors ranges from 4 to 16. Although only 7.41% offer hybrid formats (online courses with required on campus courses), a substantial 44.44% provide fully online options. Based on the data available, the median program is 30 credit hours and takes at minimum 18 months to complete. Only 33% (3 of 9) of 30+ credit hour programs could be completed in under 24 months.</p>
      <p>The core courses of competitor programs often include management (69%), leadership (62%), organizational behavior/development (62%), data-driven decision-making (46%), DEI/ethics/culture (46%), strategic decision-making (42%), and more. Our task lies in differentiating ourselves while addressing these industry standards. We must ensure our program is both cutting edge and differentiated from the competition.  </p>
      <img src={threat} alt="Workforce Trends" />
      <h3>What the new, integrated program might look like</h3>
      <p>As noted in the introduction, we recommend the creation of one well branded LOP graduate program that provides both on-campus and online degree options (perhaps LOP and LOPO – LOP Online). The goal will be to provide students with flexible enrollment options to suit their skills, career goals and locations. Students with <strong>five</strong> years or more of work experience will be able to complete the program in 30 hours. Early in career professionals with less than five years of experience would be required to complete an internship equivalent to 3 credit hours, i.e., 33 hours for degree award. </p>
      <p>We also recommend that students are given the flexibility to complete their degrees at a faster pace when that meets their personal and professional needs. For example, if desired, students could earn their degrees in <strong>12</strong> months. This scenario would require students to take three classes in the summer (9 credit hours), nine hours in both the fall (18) and spring semesters (27) and participate in an in-person gathering at the beginning of the program worth three credit hours (30). </p>
      <p>It is clear from the feedback we received that we have a good foundation to build upon, and we have opportunities. As highlighted in the table on the following page, we recommend keeping/enhancing seven existing capabilities:
</p>
      <ul>
        <li>Leadership </li>
        <br></br>
        <li>Strategic Planning</li>
        <br></br>
        <li>Team Management</li>
        <br></br>
        <li>Data Literacy & Analytical Skills</li>
        <br></br>
        <li>Executive Coaching and Organizational Performance</li>
        <br></br>
        <li>Diversity, Equity & Inclusion</li>
        <br></br>
        <li>Human Capital Management</li>
        <br></br>
      </ul>
      <p>and adding two new competencies: </p>
      <ul>
        <li>Technology and Digital skills</li>
        <br></br>
        <li>Innovation Practices and Process Design.</li>
        <br></br>
      </ul>
      <p>In collaboration with the Wondry, Tim Satterthwaite will facilitate several design sprint meetings with LOP and MLO faculty and stakeholders to finalize recommendations and determine next steps. </p>
        <h3>Limitation</h3>
        <p>While the survey provided valuable insights, it's crucial to acknowledge its limitations. The most significant limitation is the non-response bias. Despite our efforts, the survey did not capture the perspectives of 65% of alumni, 50% of current students, 50% of LOP graduates, and 11% of MLO graduates. This limitation arises from the fact that the survey was conducted in May, coinciding with the time students were graduating from the program. This non-response rate could potentially skew the results, as the views of these non-respondents might differ significantly from those who participated in the survey. Their opinions on the current LOP/MLO project and future workforce trends were not considered, which might have led to an incomplete understanding of the overall sentiment towards these programs.</p>
        <p>Another limitation is the potential for response bias among those who did participate. The respondents who chose to complete the survey might have stronger opinions or experiences that motivated them to respond, which could overrepresent certain views.</p>
        <p>Additionally, the survey's reliance on self-reported data could also introduce bias. Participants' responses might be influenced by their memory, understanding of the questions, or even their desire to present themselves in a certain way.</p>
        <h3>Conclusions</h3>
        <p>In conclusion, we must keep our programs pertinent in the ever-evolving work landscape by updating our curriculum to reflect workforce trends, alumni insights, and focus group competencies. Addressing the competitive challenges and capitalizing on our unique strengths is crucial. Exploring hybrid options (online and on campus) and, and ensuring a comprehensive, current curriculum are key. By leveraging the future workforce trends, monitoring threats, and refining our programs, we can continue to be on the forefront of developing current and future leaders with relevant workforce preparedness. </p>
        <img className='recommendation' src={new_rec} alt="Workforce Trends" />
        </div>
      </section>
  );
}

export default ExecutiveSummary;

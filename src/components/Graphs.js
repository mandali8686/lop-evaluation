import React from 'react';
import './Graphs.css';

function Graphs() {
    return (
        <div className="graphs-container">
            <div className='description'>
            <h2>Appendix: Graphs</h2>
            <h3>Strength</h3>
            <p>The following graphs presents the statistical results from three distinct surveys. The LOP Alumni Survey asked, "Which LOP competencies listed below best prepared you to succeed in your role? Please select up to 3." The LOP Graduate Survey asked, "What competencies did you acquire during your time in LOP that you think will/are helping you most professionally? Please select up to 3." Similarly, the MLO Graduate Survey asked, "What competencies did you acquire during your time in MLO that you think will/are helping you most professionally? Please select up to 3."</p>
            <p>The graph below represents the percentage of responses for each competency in each survey, facilitating a comparison of perceptions of competency importance across the different groups of respondents.</p>
            
            </div>
            <img className="graph" src={`${process.env.PUBLIC_URL}/comp1.png`} alt="Graph 1" />
            <div className='description'>
            <p>The graph displayed below represents a cumulative view of the responses from all three datasets. It illustrates the count of responses for each competency and their respective percentages in relation to the total response count.
            </p>
            </div>
            <img className="big-graph" src={`${process.env.PUBLIC_URL}/comp2.png`} alt="Graph 2" />
            <div className='description'>
                <p>The following graph illustrates the average percentage representation of each competency, derived from the amalgamation of responses across the three datasets. This visualization provides an understanding of the average prevalence of each competency, highlighting their relative importance as perceived by the respondents.</p>
            </div>
            <img className="big-graph" src={`${process.env.PUBLIC_URL}/comp3.png`} alt="Graph 3" />
            <div className='description'>
            <h3>Weakness</h3>
            <p>The following graphs presents the statistical results from three distinct surveys. The LOP Alumni Survey asked, "What skills/competencies would have been helpful to you that LOP did not provide? Please select any number of competencies." The LOP Graduate Survey asked, "What competencies did LOP not provide that you feel you are lacking as you enter the workforce? Please select any number of competencies." Similarly, the MLO Graduate Survey asked, "What competencies did MLO not provide that you feel you are lacking as you enter the workforce? Please select any number of competencies."</p>
            <p>The graph below represents the percentage of responses for each lacking competency in each survey, facilitating a comparison of perceptions of competency importance across the different groups of respondents.</p>
            </div>
            
            <img className="graph" src={`${process.env.PUBLIC_URL}/nocomp1.png`} alt="Graph 4" />
            <div className='description'>
            <p>The graph displayed below represents a cumulative view of the responses from all three datasets. It illustrates the count of responses for each lacking competency and their respective percentages in relation to the total response count.
            </p>
            </div>
            
            <img className="big-graph" src={`${process.env.PUBLIC_URL}/nocomp2.png`} alt="Graph 5" />
            <div className='description'>
                <p>The following graph illustrates the average percentage representation of each competency, derived from the amalgamation of responses across the three datasets. This visualization provides an understanding of the average prevalence of each lacking competency, highlighting their relative importance as perceived by the respondents.</p>
            </div>
            
            <img className="big-graph" src={`${process.env.PUBLIC_URL}/nocomp3.png`} alt="Graph 6" />

            <div className='description'>
            <h3>Opportunity</h3>
            <p>The subsequent graphics present the TF-IDF scores extracted from the responses to the question, "What are 1–3 workforce trends you think might impact the skills necessary to succeed in your field within the next 5 years?" This question was asked across all three surveys. In order to delve into and examine the workforce trends and corresponding competencies mentioned in the responses, we employed methods from Natural Language Processing (NLP), a subset of Artificial Intelligence, to facilitate topic discovery. Our approach involved two key techniques: word stemming and TF-IDF vectorization.</p>
            <p>Word stemming is a method that trims the endings of words, allowing us to group together words sharing the same root.</p>
            <p>TF-IDF, short for Term Frequency-Inverse Document Frequency, is a numerical statistic used to reflect how important a word is to a document in a collection or corpus. It is one of the most popular techniques used in Natural Language Processing (NLP) and information retrieval.</p>
            <p>TF-IDF works on two main concepts:

Term Frequency (TF): This measures how frequently a term occurs in a document. If a word appears frequently in a document, it's important. But sometimes, certain words like 'is', 'the', 'and', etc., also appear a lot but are not really important. That's where the second part of TF-IDF comes in.

Inverse Document Frequency (IDF): This measures the importance of a term in the entire corpus of documents. Words that are common in every document, such as 'is' or 'the', are not unique to the document and therefore, are often not relevant when understanding the content of a specific document. By multiplying Term Frequency (TF) by Inverse Document Frequency (IDF), words that are common in every document have their value reduced.</p>
<p>In simple words, TF-IDF helps to highlight words that are more interesting, i.e., frequent in a document but not across documents. This helps in identifying the key topics being discussed in a document or a set of documents. In the LOP case, each answer was treated as a document and the set of answers is the set of documents.</p>
            </div>
            
            <img className="graph" src={`${process.env.PUBLIC_URL}/oppo1.png`} alt="Graph 7" />
            <div className='description'>
                <p>The next method we employed in our Natural Language Processing (NLP) toolkit is known as N-grams. An N-gram is a contiguous sequence of 'n' items from a given sample of text or speech. Essentially, N-grams break down the text into combinations of words that appear next to each other. The 'n' stands for the number of words included in the chunks or 'grams'. For example, in the sentence "I love to play soccer," the 2-grams (or bigrams) would be "I love", "love to", "to play", and "play soccer".</p>
                <p>In our analysis, we set the range of N-grams from 3 to 6. This range was chosen as it often includes phrases that are long enough to convey a complete idea but are not too long to the point of being redundant or too specific. We also implemented a "remove substring" technique to avoid duplications, ensuring that each N-gram is distinct and contributes unique information to our analysis.</p>
                <p>N-grams are useful in understanding the context in which words appear, which can't be achieved with single words or 'unigrams'. They help capture language structures such as phrases or commonly used expressions that carry more information than individual words. For example, the unigrams 'New' and 'York' individually don't carry the same weight as the bigram 'New York'.</p>
                <p>After applying N-grams to our analysis, we could better understand the relationships between words in our corpus and were able to find phrases that might be particularly important in the context of the given answers. It allows us to capture even more nuanced information from the text and provides a more detailed view of the trends and competencies highlighted by the participants.</p>

            </div>
            <img className="graph" src={`${process.env.PUBLIC_URL}/oppo2.png`} alt="Graph 8" />
            <div className='description'>
                <p>The following chart showcases the top terms as determined by their TF-IDF scores. These terms were extracted from responses to the question, "Based on those trends, please list 1–3 competencies you think LOP should help students develop."</p>

            </div>
            <img className="graph" src={`${process.env.PUBLIC_URL}/oppo3.png`} alt="Graph 9" />
            <div className='description'>
                <p>Drawing from the TF-IDF term scores within their respective contexts, we identified the ten most significant competencies as suggested by our survey data analysis. These competencies were ranked by aggregating their TF-IDF scores, providing a basis for their prioritization. Subsequently, the insights shared by our Focus Group thought leaders were integrated. An equal weight was assigned to the competencies they highlighted, ensuring their contributions were factored into the final ranking. The resultant prioritized list of competencies, calculated through this combined approach, is depicted in the graph below.</p>
            </div>
            <img className="big-graph" src={`${process.env.PUBLIC_URL}/oppo4.png`} alt="Graph 10" />
            <div className='description'>
                <h3>Threat</h3>
                <p>The graph below showcases the core courses most frequently included in the curriculums of our competitor programs, arranged in order of frequency. The depicted percentages indicate the proportion of programs that consider each course as a central part of their curriculum. In other words, if a course has a percentage of n%, it signifies that this course is found in n% of the competitor programs.</p>
            </div>
            <img className="big-graph" src={`${process.env.PUBLIC_URL}/competitor_course.png`} alt="Graph 11" />
            <div className='description'>
                <p>The graph below provides a detailed overview of the core courses incorporated into each of our competitor's programs, along with the frequency of each course.</p>
                <br></br>
                <br></br>
            </div>
            <img className="graph" src={`${process.env.PUBLIC_URL}/competitor_detail.png`} alt="Graph 12" />
            <div className='img-collection'>
                <p className='summary'>The above illustrations represent the fundamental aspects of our data analysis process. We have also performed extensive data visualization relating to the responses to other questions and feedback, details of which are available upon request. We have undertaken an in-depth analysis of various elements including the satisfaction levels of current LOP/MLO programs, the competencies required across various industries, and the specific areas where LOP is successfully preparing its students, among other factors.</p>

                <h4>For more detailed images:</h4>
                
            <a href='https://docs.google.com/presentation/d/1AWe6RmaGTg5CPxnOkQMLaOwGqeKpgIJAoTRcCeqbbdU/edit?usp=sharing'>Full Collection of Data Visualization</a>
            <br></br>
            <br></br>
            <br></br>
            </div>
            {/* Add as many images as you need */}
        </div>
    );
}

export default Graphs;

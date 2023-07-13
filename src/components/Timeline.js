import React from 'react';
import './Timeline.css';
import { useNavigate } from 'react-router-dom';

function Timeline() {

const navigate = useNavigate();
  return (
    <div className='timeline-container'>
    <div className="timeline">

      <div className="timeline-item">
        <h3>Executive Summary</h3>
        <br></br>
        <br></br>
        <div className='square'>
                    <button onClick={() => navigate('/executive-summary')}>Go to Executive Summary</button>
                </div>
      </div>
      <div className="timeline-item">
        <h3>Background & Key Milestones</h3>
        <br></br>
        <br></br>
        <div className='square'>
        <button onClick={() => navigate('/background')}>Go to Background & Key Milestones</button>

        </div>
        
      </div>
      <div className="timeline-item">
        <h3>Preliminary Recommendations</h3>
        <br></br>
        <br></br>
        <div className='square'>
        <button onClick={() => navigate('/preliminary')}>Go to Preliminary Recommendations</button>

        </div>
        
      </div>
      
      <div className="timeline-item">
        <h3>Methodology</h3>
        <br></br>
        <br></br>
        <div className='square'>
        <button onClick={() => navigate('/methodology')}>Go to Methodology</button>

        </div>
        
      </div>
      <div className="timeline-item">
        <h3>Raw Data</h3>
        <br></br>
        <br></br>
        <div className='square'>
                    <button onClick={() => navigate('/raw-data')}>Go to Raw Data</button>
                </div>
      </div>
      <div className="timeline-item">
        <h3>Data Visualization</h3>
        <br></br>
        <br></br>
        <div className='square'>
                    <button onClick={() => navigate('/graphs')}>Go to Data Visualization</button>
                </div>
      </div>
      <div className="timeline-item">
        <h3>SWOT</h3>
        <br></br>
        <br></br>
        <div className='square'>
        <a href='https://app.mural.co/t/vuinnovation0386/m/vuinnovation0386/1686002157036/39173a1fa4d59a357bcdec55bfee4f37be064bd9?sender=u2eb8a68413c5a92ff9d98793'>Go to SWOT</a>
        </div>
        
      </div>

      <div className="timeline-item">
        <h3>Workshop</h3>
        <br></br>
        <br></br>
        <div className='square'>
        <a href='https://app.mural.co/t/vanderbiltuniversity5353/m/vanderbiltuniversity5353/1688573617103/fcedec5315ce711cdbeef228a81d5d484acb5f39?sender=u2eb8a68413c5a92ff9d98793'>Go to Workshop Mural</a>
      
        </div>
        </div>
    </div>
    </div>
  );
}

export default Timeline;

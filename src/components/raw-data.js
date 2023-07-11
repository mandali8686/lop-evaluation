import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import './raw-data.css';

// Import CSV files
import LOP_alumini from './LOP_alumini.csv';
import LOP_grad from './LOP_grad.csv';
import MLO from './MLO.csv';
import LOP_Current from './LOP_Current.csv';

function RawData() {
    const [data, setData] = useState([]);

    useEffect(() => {
        Promise.all([
            fetch(LOP_alumini).then(response => ({ name: response.url.split('/').pop(), data: response.text() })),
            fetch(LOP_grad).then(response => ({ name: response.url.split('/').pop(), data: response.text() })),
            fetch(MLO).then(response => ({ name: response.url.split('/').pop(), data: response.text() })),
            fetch(LOP_Current).then(response => ({ name: response.url.split('/').pop(), data: response.text() })),
        ])
        .then((results) => {
            return results.map(result => {
                return result.data.then(data => ({ name: result.name.substring(0, result.name.indexOf(".")), data: Papa.parse(data, { header: true }).data }));
            });
        })
        .then(all => Promise.all(all)) // waiting for all promises to resolve
        .then(data => setData(data))
        .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <h2 className='datalink'>Raw Data Links</h2>
            <div className='data-container'>
            <div className='data-links'>
                
                <h3>Survey Raw Data</h3>
                <a href='https://docs.google.com/spreadsheets/d/1bzNVk7ca-5c8XrjDX4s-gHAaLcso_sAma-f5dhkKJzc/edit?usp=sharing'>LOP Alumni Raw Data</a>
                <br></br>
                <a href='https://docs.google.com/spreadsheets/d/1FpOZy0e4WUqMQYkzcwQPBK3lAmzDhV0CMzBimO0hZgs/edit?usp=sharing'>LOP Graduating Student Raw Data</a>
                <br></br>
                <a href='https://docs.google.com/spreadsheets/d/1vizcGpq9W6Dy98_tHkkdx5InQi_OQ9i6ZuzocX40rOE/edit?usp=sharing'>MLO Graduating Student Raw Data</a>
                <br></br>
                <a href='https://docs.google.com/spreadsheets/d/1fMxO5-mj9dSpZOOcBN7fGI07Zmzdk5SKtEZXbjUQljI/edit?usp=sharing'>LOP Current Student Raw Data</a>
            </div>
            <div className='focus-group'>
                <h3>Focus Group Data Links</h3>
                <a href='https://docs.google.com/document/d/1FXZnWE9Mkp0biGb0mJ7VSfRYp6OXgIjW/edit?usp=sharing&ouid=110580296038753455992&rtpof=true&sd=true'>Focus Group 1 Raw Data</a>
                <br></br>
                <a href='https://docs.google.com/document/d/1EnX8nrFYpMF6p3Fn7vZ3HASwLbR3IyPM/edit?usp=sharing&ouid=110580296038753455992&rtpof=true&sd=true'> Focus Group 2 Raw Data</a>
                <br></br>
                <a href='https://docs.google.com/document/d/11t_pRNz7QAixc80piGGSM5iRrkyT_Gam/edit?usp=sharing&ouid=110580296038753455992&rtpof=true&sd=true'> Focus Group 3 Raw Data</a>
                <br></br>
                <a href='https://docs.google.com/document/d/1GHxfLEQWcE6xpGHFbPyY1hnHWT7V_Jb-/edit?usp=sharing&ouid=110580296038753455992&rtpof=true&sd=true'>Focus Group 4 Raw Data</a>
                <br></br>
                <a href='https://docs.google.com/document/d/10Dm5NrqbJ7Zwn02cHWB5oFuMYm37m3zf/edit?usp=sharing&ouid=110580296038753455992&rtpof=true&sd=true'>Focus Group 5 Raw Data</a>

            </div>
            </div>
            
            {data.map((csvData, index) => (
                <div key={index}>
                    <h2>{csvData.name}</h2>
                    <table className="data-table">
                        <thead>
                            <tr>
                                {csvData.data[0] && Object.keys(csvData.data[0]).map((heading, index) => <th key={index}>{heading}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {csvData.data.map((row, index) => (
                                <tr key={index}>
                                    {Object.values(row).map((cell, index) => <td key={index}>{cell}</td>)}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
}

export default RawData;

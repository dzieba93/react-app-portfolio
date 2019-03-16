import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';

class Resume extends Component {
    render() {
        return(
            <div>
                <Grid style={{ padding: 0 }}>
                    <Cell col={12} className="resume-grid" style={{ width: '100%', margin: 0}}>
                        <div style={{textAlign: 'center', paddingTop: '20px'}}>
                            <img
                                src="./avatar.gif"
                                alt="avatar"
                                style={{height: '200px'}}
                            />
                        </div>
                        <div style={{textAlign: 'center', color: 'rgb(162, 162, 162)'}}>
                            <h2 style={{paddingTop: '2em'}}>Marcin Dziębowski</h2>
                            <hr style={{borderTop: '3px solid rgb(68, 90, 132)', width: '50%', marginLeft: 'auto', marginRight: 'auto'}}/>
                            <h5>Address</h5>
                            <p>Jaksonów ul Wrocławska 28, 55-020</p>
                            <h5>Phone</h5>
                            <p>(+48) xxx-xxx-xxx</p>
                            <h5>Email</h5>
                            <p>marcin.dziebowski@gmail.com</p>
                            <hr style={{borderTop: '3px solid rgb(68, 90, 132)', width: '50%', marginLeft: 'auto', marginRight: 'auto'}}/>
                        </div>
                    </Cell>
                    <Cell className="resume-right-col" col={12}>
                        <h2>Education</h2>
                        <Education
                            startYear={2018}
                            endYear={'now'}
                            schoolName="Higher School of Applied Computer Science in Wrocław"
                            schoolDescription="master’s degree studies, specialization - programming"
                        />
                        <Education
                            startYear={2013}
                            endYear={2018}
                            schoolName="Higher School of Applied Computer Science in Wrocław"
                            schoolDescription="first degree engineering, specialization - programming"
                        />
                        <Education
                            startYear={2009}
                            endYear={2013}
                            schoolName="Technical High School for Computer Science in Wrocław"
                            schoolDescription="IT specialist"
                        />
                        <hr style={{borderTop: '3px solid rgb(68, 90, 132)'}} />
                        <h2>Experience</h2>
                        <Experience
                            startYear={2018}
                            endYear={'now'}
                            jobName="Software Developer in lufed IT GmbH"
                        />
                        <Experience
                            startYear={2018}
                            endYear={2016}
                            jobName="Junior Software Developer in Netins Software Sp z o.o."
                        />
                        <hr style={{borderTop: '3px solid rgb(68, 90, 132)'}} />
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Resume;
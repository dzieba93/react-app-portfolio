import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Home extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src="./avatar.gif"
                            alt="avatar"
                            className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Software Developer</h1>

                            <hr/>

                            <p>HTML/CSS | Bootstrap | jQuery | MySQL | PHP | REST | Symfony | Laravel | React </p>

                            <div className="social-links">
                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/marcin-dzi%C4%99bowski-135493158/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/* Github */}
                                <a href="https://github.com/dzieba93" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Home;
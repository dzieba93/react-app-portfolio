import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="content">
                <Layout>
                    <Header className="header" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Portfolio</Link>} scroll>
                        <Navigation>
                            <Link to="/resume">Resume</Link>
                            <Link to="/aboutme">About Me</Link>
                            <Link to="/projects">Projects</Link>
                            <Link to="/contact">Contact</Link>
                        </Navigation>
                    </Header>
                    <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Portfolio</Link>}>
                        <Navigation>
                            <Link to="/resume">Resume</Link>
                            <Link to="/aboutme">About Me</Link>
                            <Link to="/projects">Projects</Link>
                            <Link to="/contact">Contact</Link>
                        </Navigation>
                    </Drawer>
                    <Content>
                        <div className="page-content" />
                    </Content>
                </Layout>
            </div>
        );
    }
}

export default App;
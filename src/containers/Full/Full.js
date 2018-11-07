import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Aside from '../../components/Aside/';
import Companies from '../../views/Theme/ChartsPage/Companies';

class Full extends Component {
  render() {
    return (
      <div className="app">
            <Header/>
        <div className="app-body" style={{marginTop:55, fontFamily: 'purisa'}}>
          <Sidebar {...this.props}/>
          <main className="main">
            <Container fluid>
              <Switch>
                <Route path="/dashboard" id='other' name="Dashboard" component={Companies}/>
                <Redirect from="/" id='other' to="/dashboard"/>
              </Switch>
            </Container>
          </main>
          <Aside/>
        </div>
      </div>
    );
  }
}

export default Full;

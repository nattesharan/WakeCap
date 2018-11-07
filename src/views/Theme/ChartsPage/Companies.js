import React, {Component} from 'react';
import {Bar, Doughnut, Line, Pie, Polar, Radar} from 'react-chartjs-2';
import SearchBar from 'material-ui-search-bar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardHeader, CardBody} from 'reactstrap';
import './style.css'

const bar = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
  datasets: [
    {
      label: 'Assigned Helmets',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 120, 81, 56, 10, 30, 20, 65, 70]
    }
  ]
};


class Companies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [
        {
          name: 'John',
          designation: 'Designation',
          image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
          id: '12113132'
        },
        {
          name: 'John',
          designation: 'Designation',
          image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
          id: '12113132'
        },
        {
          name: 'John',
          designation: 'Designation',
          image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
          id: '12113132'
        },
        {
          name: 'John',
          designation: 'Designation',
          image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
          id: '12113132'
        },
        {
          name: 'John',
          designation: 'Designation',
          image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
          id: '12113132'
        }
      ]
    }
  }
  renderListItem(employee) {
    return (
      <li>
        <div className="row" style={{ marginBottom: 10, marginTop: 10 }}>
          <div className="col-md-3">
            <img src={ employee.image } style={{ width:50 }}/>
          </div>
          <div className="col-md-5">
            <span>{ employee.name }</span><br/>
            <span> {employee.designation} </span>
          </div>
          <div className="col-md-4">
            <span> { employee.id } </span>
          </div>
        </div>
      </li>
    )
  }
  render() {
      const doughnut = {
    datasets: [{
      data: [300, 50, 100],
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
      ],
      hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
      ]
    }]
  };
    return (
  <div>
    <br></br>
      <div className="row">
        <div className="col-md-4">
          <Card>
            <CardHeader>
              <MuiThemeProvider>
                <SearchBar
                  onChange={() => console.log('onChange')}
                  onRequestSearch={() => console.log('onRequestSearch')}
                  style={{
                    margin: '0 auto',
                    maxWidth: 320,
                    marginLeft: 10
                  }}
                />
              </MuiThemeProvider>
            </CardHeader>
            <CardBody>
            <div>
                <ul>
                  { this.state.employees.map((employee) => this.renderListItem(employee))}
                </ul>
              </div>
            </CardBody>
          </Card>
        </div>
      <div className="col-md-8">
          <Card>
            <CardHeader>
              <div className="row">
                  <div className="col-md-10">
                  </div>
                  <div className="col-md-2">
                    <i className="icon-login"></i> Edit
                  </div>
              </div>
            </CardHeader>
            <CardBody>
              <div className="row" style={{ borderBottomColor: 'black', borderBottom: 10}}>
                <div className="col-md-1">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" style={{ width:70 }}/>
                </div>
                <div className="col-md-3" style={{ marginLeft: 15 }}>
                  <span> Worker name </span><br/><br/>
                  <span> Designation </span>
                </div>
                <div className="col-md-3">
                  <span> Assert ID: #1234 </span><br/><br/>
                  <span> Tag Id: 5235283 </span>
                </div>
                <div className="col-md-3">
                    <span> Supervisor Name </span><br/><br/>
                    <span> Designation </span>
                </div>
                <div className="col-md-1">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" style={{ width:70 }}/>                  
                </div>
              </div>
              <hr/>
              <div className="row">
                  <div className="col-md-4">
                      <div className="row" style={{ marginTop:20 }}>
                        <div className="col-md-3">
                          <i className="icon-speedometer" style={{ fontSize:65 }}></i>
                        </div>
                        <div className="col-md-9">
                          <span> Total Hours Worked </span><br/><br/>
                          <span style={{ fontSize: 20 }}><b> 2158 </b></span>
                        </div>
                      </div>
                      <div className="row" style={{ marginTop:20 }}>
                        <div className="col-md-3">
                          <i className="icon-cursor" style={{ fontSize:65 }}></i>
                        </div>
                        <div className="col-md-9">
                          <span> Last Active Zone </span><br/><br/>
                          <span style={{ fontSize: 20 }}><b> Zone 2 </b></span>
                        </div>
                      </div>
                      <div className="row" style={{ marginTop: 20 }}>
                        <div className="col-md-4">
                        </div>
                        <div className="col-md-5">
                          <button>History</button>
                        </div>
                      </div>
                  </div>
                      <div className="col-md-8">
                      <br />
                          <div className="chart-wrapper">
                          <Bar data={bar}
                                options={{
                            maintainAspectRatio: false
                            }}
                            />
                          </div><br/>
                  </div>
          </div>
          <hr/>
          <div>
            <div className="row">
              <div className="col-md-10">
                <span><b>Assigned Helmets</b></span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                  <Card>
                    <CardHeader>
                    <div className="row">
                    <div style={{ paddingLeft: 130 }}>
                    <div style={{ height: 10, width: 10, borderRadius: 5, backgroundColor: 'green'}}></div>
                    </div>
                    </div>
                    </CardHeader>
                    <CardBody>
                      <div className="row">
                        <div className="col-md-4">
                        <i className="icon-puzzle"></i>
                        </div>
                        <div className="col-md-8">
                        1212132
                        </div>
                      </div>
                      <div className="row">
                      <div className="col-md-4">
                        <i className="icon-exclamation"></i>
                        </div>
                        <div className="col-md-8">
                        IN-0006
                        </div>
                      </div>
                      <div className="row">
                      <div className="col-md-4">
                        <i className="icon-speedometer"></i>
                        </div>
                        <div className="col-md-8">
                        7 mins ago
                        </div>
                      </div>
                    </CardBody>
                  </Card>
              </div>
              <div className="col-md-3">
                  <Card>
                    <CardHeader>
                    <div className="row">
                    <div style={{ paddingLeft: 130 }}>
                    <div style={{ height: 10, width: 10, borderRadius: 5, backgroundColor: 'red'}}></div>
                    </div>
                    </div>
                    </CardHeader>
                    <CardBody>
                    <div className="row">
                        <div className="col-md-4">
                        <i className="icon-puzzle"></i>
                        </div>
                        <div className="col-md-8">
                        4361666
                        </div>
                      </div>
                      <div className="row">
                      <div className="col-md-4">
                        <i className="icon-exclamation"></i>
                        </div>
                        <div className="col-md-8">
                        IN-0008
                        </div>
                      </div>
                      <div className="row">
                      <div className="col-md-4">
                        <i className="icon-speedometer"></i>
                        </div>
                        <div className="col-md-8">
                        2 days ago
                        </div>
                        </div>
                    </CardBody>
                  </Card>
              </div>
            </div>
          </div>
            </CardBody>
          </Card>
      </div>
      </div>
    </div>
    )
  }
}

export default Companies;

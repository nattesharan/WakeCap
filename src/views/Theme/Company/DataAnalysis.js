import React, {Component} from 'react';
import {Bar, Doughnut, Line, Pie, Polar, Radar} from 'react-chartjs-2';
import {
  Badge,
  Row,
  Col,
  Progress,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,CardColumns,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Button,
  ButtonToolbar,
  ButtonGroup,
  ButtonDropdown,
  Label,
  Input,
  Table
} from 'reactstrap';

    let doughnut = {
        // labels: [
        //   'Red',
        //   'Green',
        //   'Yellow'
        // ],
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
class DataAndAnalysis extends Component {
    constructor(props) {
        super(props);
        this.state = {value: 1};
      }

      handleChange(event, index, value){ this.setState({value})};

    render() {
    return (
        <div className="animated fadeIn">
        <div className="row" style={{marginTop:5,marginBottom:10}}>
        <div className="col-md-5"style={{padding:5,}}>
        <h4 style={{ marginTop:15}}>Additive Type
            <select  style={{ marginLeft:20}} name="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
        </select> Segmentd by</h4>
        </div>
        <div className="col-md-7" style={{border:'1px solid black',padding:10}}>
        <h4 style={{ marginTop:15}}>
                <label style={{ marginLeft:20}} className="radio-inline"><input type="radio" name="optradio"/>Option 1
                    <select  style={{ marginLeft:20}} name="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="fiat">Fiat</option>
                    <option value="audi">Audi</option>
                </select>
              </label>
                <label style={{ marginLeft:20}} className="radio-inline"><input type="radio" name="optradio"/>Option 2
                <select  style={{ marginLeft:20}} name="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="fiat">Fiat</option>
                    <option value="audi">Audi</option>
                    </select>
                </label>
                <label style={{ marginLeft:20}} className="radio-inline"><input type="radio" name="optradio"/>Option 3
                    <select  style={{ marginLeft:20}} name="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="fiat">Fiat</option>
                    <option value="audi">Audi</option>
                    </select>
                    </label>
                    </h4>
            </div>
        </div>
          <div>
              <Card style={{borderRadius: 20 ,maxHeight: 600,overflowY: 'scroll' }}>
                <CardHeader>
                  Card title
                </CardHeader>
                <CardBody>
                    <div className="row">
                          <div className="col-md-6">
                              <h5>Lorem ipsum dolor sit amet,</h5><br />
                              consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.<br /><br />
                              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.<br /><br />
                              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.<br/><br />
                              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                          </div>
                          <div className="col-md-6">
                              <h5>Flg 1 : Lorem ipsum dolor sit amet,</h5><br />
                              <br />
                                  <div className="chart-wrapper">
                                      <Doughnut data={doughnut}/>
                                  </div>
                          </div>
                  </div>
                  <br />
                  <div className="row">
                          <div className="col-md-6">
                              <h5>Lorem ipsum dolor sit amet,</h5><br />
                              consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.<br /><br />
                              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.<br /><br />
                              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.<br/><br />
                              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                          </div>
                          <div className="col-md-6">
                              <h5>Flg 2 : Lorem ipsum dolor sit amet,</h5><br />
                              <br />
                                  <div className="chart-wrapper">
                                      <Doughnut data={doughnut}/>
                                  </div>
                          </div>
                  </div>
                </CardBody>
              </Card>
            </div>
        </div>
    )
  }
}

export default DataAndAnalysis;

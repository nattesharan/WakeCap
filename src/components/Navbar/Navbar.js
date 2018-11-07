import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Nav,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Badge
} from 'reactstrap';
import changeOptions from '../../actions/NavAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
class NavBar extends Component {

  constructor(props) {
    super(props);
  }

  mobileSidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-mobile-show');
  }
  render() {
    return (
      <header className="app-header navbar" style={{ marginTop: 55 }}>
        <ul className="nav">
          <li style={{ paddingLeft: 45 }}><a data-toggle="tab" href="/"><i className="icon-home"></i></a></li>
          <li style={{ paddingLeft: 45 }} className="active"><a data-toggle="tab" href="/">Explore</a></li>
          <li style={{ paddingLeft: 45 }}><a data-toggle="tab" href="#/dataAnalysis" onClick={() => this.props.changeOptions('data')} >Data & Analysis</a></li>
          <li style={{ paddingLeft: 45 }}><a data-toggle="tab" href="#/companies" onClick={() => this.props.changeOptions('companies')} >Companies</a></li>
          <li style={{ paddingLeft: 45 }}><a data-toggle="tab" href="#/dataAnalysis">Regulations</a></li>
          <li style={{ paddingLeft: 45 }}><a data-toggle="tab" href="#/dataAnalysis">Animal Head Count</a></li>
          <li style={{ paddingLeft: 45 }}><a data-toggle="tab" href="#/dataAnalysis">Parent Market Analysis</a></li>
          <li style={{ paddingLeft: 45 }}><a data-toggle="tab" href="#/dataAnalysis">News</a></li>
          <li style={{ paddingLeft: 45 }}><a data-toggle="tab" href="#/dataAnalysis">Appendix</a></li>
        </ul>

      </header>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeOptions: changeOptions }, dispatch);
}
export default connect(null, mapDispatchToProps)(NavBar);

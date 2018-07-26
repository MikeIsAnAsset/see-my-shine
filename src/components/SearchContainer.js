import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
import { React_Bootstrap_Carousel } from "react-bootstrap-carousel";
import "react-bootstrap-carousel/dist/bootstrap.min.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import { Panel, FormGroup, Checkbox } from 'react-bootstrap';
import '../_css/center.css';
import Tabs from '../components/SearchResults'
import CheckboxGroup from "./CheckboxGroup";

const styles = { height: 400, width: "100%" };

class SearchContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      checkboxLabelsAndValues: [],
      selectedCheckboxes: [],
      jobsMatchingSkillSearch: []
    };
    this.handleSelectedSkillCheckboxes = this.handleSelectedSkillCheckboxes.bind(this);
  }

    


  fetchAllSkills() {
    axios.get('http://localhost:8080/fetchAllSkills')
      .then(response => {
        const allSkillsFromBackend = response.data;
        this.setState({
          checkboxLabelsAndValues: allSkillsFromBackend
        })
        console.log("search successful")
      }).catch(error => {
        // add logic for displaying no search
        console.log("this was an error");
      })
  }

  fetchJobsMatchingSkillSearch() {
    axios.get('http://localhost:8080/search', this.state.selectedCheckboxes)
      .then(response => {
        const jobsMatchingSkillSearch = response.data;
        this.setState({
          jobsMatchingSkillSearch: jobsMatchingSkillSearch
        })
      })
  }

  handleSelectedSkillCheckboxes(e) {
    const selection = e.target.value;  // if this is a boolean value, how will the below if statement work using selection as parameter?
    let newSelectionArray;

    if (this.state.selectedCheckboxes.indexOf(selection) > -1) {
      newSelectionArray = this.state.selectedCheckboxes.filter(s => s !== selection)
    } else {
      newSelectionArray = [...this.state.selectedCheckboxes, selection];
    }

    this.setState({ checkboxLabelsAndValues: newSelectionArray });
  }

  // handleFormSubmit()






  render() {

    console.log(this.state.checkboxLabelsAndValues) 
    // console.log(JSON.stringify(this.state.test, null, 2))

    return (

      <div style={{ marginTop: 90 }} className='jumbotron'>
        <h2>Search jobs and companies</h2>
        <form action="/action_page.php" className="container" onSubmit={this.handleFormSubmit}>
          <Panel className="centering" id="collapsible-panel-example-2" defaultCollapsed style={{ width: "80%" }} bsStyle="primary">
            <Panel.Heading >
              <Panel.Title toggle >
                Data and Analytics
            </Panel.Title>
            </Panel.Heading>
            <Panel.Collapse>
              <Panel.Body>
                {/* <CheckboxGroup>
                  title={'Data Analytics'}
                  setName={'Skills'}
                  controlFunc={this.handleSelectedSkillCheckboxes}
                  type={'checkbox'}
                  checkboxLabelsAndValues={this.state.checkboxLabelsAndValues}
                  selectedCheckboxes={this.state.selectedCheckboxes} </CheckboxGroup> */}
                  
                <input type='checkbox' name='anotherTest' /><label for='anotherTest'>   Another Test</label>


                <FormGroup>

                  <Checkbox inline name='biz' value='biz' id='55' checkked>Business Intelligence</Checkbox> <Checkbox inline>Data Mining</Checkbox>{' '}
                  <Checkbox inline>Data Science</Checkbox>

                  <Checkbox inputRef={ref => { this.input = ref; }} inline >.NET </Checkbox>

                  {/* onChange={this.handleSelectedSkillCheckboxes.bind(this)} */}

                </FormGroup>


              </Panel.Body>
            </Panel.Collapse>
          </Panel>



          <Panel id="collapsible-panel-example-2" className="centering" defaultCollapsed bsStyle="success" style={{ width: "80%" }}>
            <Panel.Heading>
              <Panel.Title toggle>
                Data and Analytics
            </Panel.Title>
            </Panel.Heading>
            <Panel.Collapse>
              <Panel.Body>


                <input type='checkbox' name='anotherTest' /><label for='anotherTest'>   Another Test</label>


                <FormGroup>

                  <Checkbox inline name='biz' value='bix' id='55' checkked>Business Intelligence</Checkbox> <Checkbox inline>Data Mining</Checkbox>{' '}
                  <Checkbox inline>Data Science</Checkbox>

                  <Checkbox inputRef={ref => { this.input = ref; }} inline>Test </Checkbox>

                  <Checkbox value='true' inline >Test </Checkbox>

                </FormGroup>


              </Panel.Body>
            </Panel.Collapse>
          </Panel>


        </form>
        <Tabs />

      </div>
    );
  }
}

export default SearchContainer;
// ReactDOM.render(<SearchContainer />, document.getElementById("SearchContainer"));
import React from "react";
import ReactDOM from "react-dom";

import { React_Bootstrap_Carousel } from "react-bootstrap-carousel";
import "react-bootstrap-carousel/dist/bootstrap.min.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import { Panel, FormGroup, Checkbox } from 'react-bootstrap';

const styles = { height: 400, width: "100%" };
class Demo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      autoplay: true
    };
  }
  onSelect = (active, direction) => {
    console.log(`active=${active} && direction=${direction}`);
  };
  slideNext = () => {
    this.slider.slideNext();
  };
  slidePrev = () => {
    this.slider.slidePrev();
  };
  goToSlide = () => {
    this.slider.goToSlide(4);
  };
  autoplay = () => {
    this.setState({ autoplay: !this.state.autoplay });
  };
  _changeIcon = () => {
    let { leftIcon, rightIcon } = this.state;
    if (leftIcon && rightIcon) {
      this.setState({
        leftIcon: undefined,
        rightIcon: undefined
      });
    } else {
      this.setState({
        leftIcon: <span className="glyphicon glyphicon-glass" />,
        rightIcon: <span className="glyphicon glyphicon-music" />
      });
    }
  };
  render() {
    let { leftIcon, rightIcon } = this.state;
    return (
      <div className="container-fluid">
        <div className="row">
          {/* <div className="col-md-12" style={{ paddingTop: "20px" }}>
            <div className="btn-group">
              <button type="button" className="btn btn-primary" onClick={this._changeIcon}>
                Change Icon
              </button>
              <button type="button" className="btn btn-primary" onClick={this.slidePrev}>
                Slider prev
              </button>
              <button type="button" className="btn btn-primary" onClick={this.slideNext}>
                Slider next
              </button>
              <button type="button" className="btn btn-primary" onClick={this.goToSlide}>
                Go to slide 4
              </button>
              <button type="button" className="btn btn-primary" onClick={this.autoplay}>
                {this.state.autoplay ? "Stop Autoplay" : "Start Autoplay"}
              </button>
            </div>
          </div> */}
          <div className="col-md-6" style={{ marginTop: 20, padding: 0 }}>
            <React_Bootstrap_Carousel
              animation={true}
              autoplay={this.state.autoplay}
              slideshowSpeed={7000}
              defaultActiveIndex={0}
              leftIcon={leftIcon}
              rightIcon={rightIcon}
              onSelect={this.onSelect}
              ref={r => (this.slider = r)}
            >
              <div style={{ height: 400 }}>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src="https://www.w3schools.com/bootstrap/ny.jpg"
                />
                <div className="carousel-caption">Image</div>
              </div>
              <div style={{ ...styles, backgroundColor: "aqua" }}>
                <video className="carousel-center" controls style={{ width: "75%" }} height="250">
                  <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                </video>
                <div className="carousel-caption">Video</div>
              </div>
              <div
                style={{
                  height: 400,
                  width: "100%",
                  backgroundColor: "lightpink"
                }}
              >
                <div className="carousel-center">center Text</div>
                <div className="carousel-caption">Text</div>
              </div>
              <div style={{ ...styles, backgroundColor: "lightblue" }}>
                <span>text</span>
                <div className="carousel-caption">Text</div>
              </div>
              <div style={{ ...styles, backgroundColor: "lightblue" }}>
                <div className="carousel-center">
                  <iframe
                    style={{ width: 500 }}
                    height="250"
                    src="https://www.youtube.com/embed/MhkGQAoc7bc?showinfo=0"
                    frameBorder="0"
                    allowFullScreen
                  />
                </div>
                <div className="carousel-caption">Youtube</div>
              </div>
            </React_Bootstrap_Carousel>
          </div>
          <div className="col-md-6" style={{ marginTop: 20, padding: 0 }}>
            <React_Bootstrap_Carousel className="carousel-fade">
              <div style={{ ...styles, backgroundColor: "darkcyan" }}>
                <div className="carousel-center">This carsouel transition is fade</div>
                <div className="carousel-caption">Text</div>
              </div>
              <div style={{ ...styles, backgroundColor: "yellowgreen" }}>
                <span className="carousel-center">This carsouel transition is fade</span>
                <div className="carousel-caption">Text</div>
              </div>
              <div style={{ ...styles, backgroundColor: "aqua" }}>
                <video className="carousel-center" controls style={{ width: "75%" }} height="250">
                  <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                </video>
                <div className="carousel-caption">Video</div>
              </div>
            </React_Bootstrap_Carousel>
          </div>
          
        </div>


        <form action="/action_page.php">
        <Panel id="collapsible-panel-example-2" defaultCollapsed>
          <Panel.Heading>
            <Panel.Title toggle>
              Data and Analytics
            </Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
              

<input type='checkbox' name='anotherTest'/><label for='anotherTest'>   Another Test</label>


            <FormGroup>
              
      <Checkbox inline name='biz' value='bix' id='55' checkked>Business Intelligence</Checkbox> <Checkbox inline>Data Mining</Checkbox>{' '}
      <Checkbox inline>Data Science</Checkbox>

<Checkbox inputRef={ref => { this.input = ref; }} inline>Test </Checkbox>


          </FormGroup>


            </Panel.Body>
          </Panel.Collapse>
        </Panel>



<Panel id="collapsible-panel-example-2" defaultCollapsed>
          <Panel.Heading>
            <Panel.Title toggle>
              Data and Analytics
            </Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
              

<input type='checkbox' name='anotherTest'/><label for='anotherTest'>   Another Test</label>


            <FormGroup>
              
      <Checkbox inline name='biz' value='bix' id='55' checkked>Business Intelligence</Checkbox> <Checkbox inline>Data Mining</Checkbox>{' '}
      <Checkbox inline>Data Science</Checkbox>

<Checkbox inputRef={ref => { this.input = ref; }} inline>Test </Checkbox>


          </FormGroup>


            </Panel.Body>
          </Panel.Collapse>
        </Panel>


</form>


      </div>
    );
  }
}

export default Demo;
// ReactDOM.render(<Demo />, document.getElementById("Demo"));
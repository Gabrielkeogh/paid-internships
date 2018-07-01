import React, { Component } from 'react';

class Popup extends Component {
  constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }

  togglePopup() {//this just inverts the state
    this.setState({showPopup: !this.state.showPopup});
  }

  render() {
    return (
      <div className='app'>

        <div id='questions' onClick={this.togglePopup.bind(this)}>
          <div>
            {this.state.showPopup ? 'X' : '?'}
          </div>
        </div>

        {this.state.showPopup ?
          <div>
            <div className='popup' onClick={this.togglePopup.bind(this)}>
            </div>
            <div className='popup_inner'>
              <ul>
                <li>
                  <label>Who made this, and why?</label>
                  <p> We're <a href="mailto:mail@gabrielkeogh.co"> Gabriel </a> and <a href="http://barronwebster.com"> Barron </a>. We made this to help anyone find an internship that they can afford to take in London. Barron originally came up with the idea to build <a href="http://payinterns.nyc"> payinterns.nyc </a> on which this website is based. Internships are arguably the best way to get a foot in the door in the creative industry, but living in the Big Smoke ain't cheap .</p>
                </li>
                <li>
                  <label>How was this data gathered?</label>
                  <p>All the places are on this list were submitted by people who claim to work there or have worked there. It's not scientific or perfect, but it's worked so far. If any of the places are listed incorrectly, contact me!</p>
                </li>
                <li>
                  <label>Why £10.20?</label>
                  <p>£10.20 is the current living wage for London, according to <a href="https://www.livingwage.org.uk/calculation"> the London Living Wage Foundation. This number is ajdusted yearly — it rose to £10.20 recently.</a></p>
                </li>
                <li>
                  <label>I know/am an employer who fits this description. <br/>Can you include them/me?</label>
                  <p>Yes! Use <a href="https://goo.gl/forms/lsFeerKQxjRvwQMt1">this form</a> to submit.</p>
                </li>
              </ul>
            </div>
          </div>
          : null
        }
      </div>
    );
  }
};

export default Popup;

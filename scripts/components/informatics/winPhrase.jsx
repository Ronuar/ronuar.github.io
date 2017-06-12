import React, { Component } from 'react';
import { saveToLocalStorage } from '../../services/localStorageService';
import { SUBJECTS_INFO } from '../../constants/commonConstants';

const DELAY = 100;
const PHRASE = 'ENJOY! BECOME HARDER BETTER FASTER STRONGER CLEVERER';

class InformaticsWinPhrase extends Component {
  constructor(props) {
    super(props);

    this.state = { text: '' };

    this.componentWillUnmount = () => clearInterval(this.intervalId);
    this.printLetter = () => this.setState(state => ({ text: PHRASE.substring(0, state.text.length + 1) }));

    this.intervalId = setInterval(this.printLetter, DELAY);
  }

  render() {
    return (
      <div className="phrase">
        <div>{this.state.text}</div>
      </div>
    );
  }
}

export default saveToLocalStorage(InformaticsWinPhrase, SUBJECTS_INFO.informatics);

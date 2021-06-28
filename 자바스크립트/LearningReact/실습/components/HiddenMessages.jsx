import React, { Component } from 'react';
import HiddenMessage from './HiddenMessage';
// import HiddenMessage from './ShowHideMessage';

class HiddenMessages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        'The crow crows after midnight',
        'Jericho Jericho Go',
        '엄마가 섬그늘에 굴 따러 가면',
      ],
      showing: -1,
    };
  }

  componentDidMount() {
    console.log('this: ', this);
    this.interval = setInterval(() => {
      this.setState(prevState => {
        let { showing, messages } = prevState;
        showing = ++showing >= messages.length ? -1 : showing;
        console.log('showing: ', showing);
        return { showing };
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { messages, showing } = this.state;
    return (
      <div>
        {messages.map((message, i) => (
          <HiddenMessage key={i} hide={i !== showing}>
            {message}
          </HiddenMessage>
        ))}
      </div>
    );
  }
}

export default HiddenMessages;

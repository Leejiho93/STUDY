import * as React from "react";
import { Component } from "react";

interface State {
  word: string;
  value: string;
  result: string;
}

class WordRelay extends Component<{}, State> {
  state = {
    word: "제로초",
    value: "",
    result: "",
  };

  input: HTMLInputElement | null = null;

  onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = this.input;
    if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
      this.setState({
        result: "정답",
        word: this.state.value,
        value: "",
      });
      if (input) {
        input.focus();
      }
    } else {
      this.setState({
        result: "땡",
        value: "",
      });
      if (input) {
        input.focus();
      }
    }
  };

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: e.target.value });
  };

  onRef = (c: HTMLInputElement) => {
    this.input = c;
  };

  render() {
    return (
      <>
        <div>{this.state.word}</div>
        <form onSubmit={this.onSubmitForm}>
          <input
            ref={this.onRef}
            value={this.state.value}
            onChange={this.onChange}
          />
          <button>입력!</button>
        </form>
        <div>{this.state.result}</div>
      </>
    );
  }
}

export default WordRelay;

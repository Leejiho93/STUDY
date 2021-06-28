import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

const DataComponent = (ComposedComponent, url) =>
  class DataComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
        loading: false,
        loaded: false,
      };
    }

    componentDidMount() {
      this.setState({ loading: true });
      fetch(url)
        .then(response => response.json())
        .then(data =>
          this.setState({
            loaded: true,
            loading: false,
            data,
          }),
        );
    }

    render() {
      return (
        <div>
          {this.state.loading ? (
            <div>데이터 로딩 중...</div>
          ) : (
            <ComposedComponent {...this.state} {...this.props} />
          )}
        </div>
      );
    }
  };

export default DataComponent;

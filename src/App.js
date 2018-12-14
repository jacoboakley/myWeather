import React, { Component } from 'react';
import styled from 'styled-components';

import Search from './components/Search';
import Card from './components/Card';

const View = styled.div`
  align-items: center;
  background-color: #282c34;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 100vh;
`;

const Content = styled.div`
  text-align: center;
  height: 50vh;
`;

const APIKEY = 'c4cbd4d928238a82334f991524427b68';


export default class App extends Component {
  state = {
    zipcode: '',
    content: (<p>Enter Your Zipcode Above</p>),
  }

  handleChange = (event) => {
    this.setState({
      zipcode: event.target.value,
    });
  }

  handleSubmit = () => {
    const { zipcode } = this.state;
    this.setState({
      content: <p>Loading...</p>,
    });

    if (zipcode.length !== 5) {
      this.setState({
        content: (
          <p style={{ textAlign: 'center' }}>
              There was an error processing the data.
              Make sure the zipcode is correct and try again.
          </p>
        ),
      });
    } else {
      fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&APPID=${APIKEY}&units=imperial`)
        .then(response => response.json())
        .then((data) => {
          this.setState({
            content: (
              <Card data={data} />
            ),
          });
        })
        .catch(() => {
          console.log('wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww');
          this.setState({
            content: (
              <p style={{ textAlign: 'center' }}>
                There was an error processing the data.
                Make sure the zipcode is correct and try again.
              </p>
            ),
          });
        });
    }
  }

  render() {
    const { content } = this.state;
    return (
      <View>
        <Search submit={this.handleSubmit} change={this.handleChange} />
        <Content>
          { content }
        </Content>
      </View>
    );
  }
}

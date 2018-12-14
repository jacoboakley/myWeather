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
          <p>
            Zipcode must contain 5 digits.
          </p>
        ),
      });
    } else {
      fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&APPID=${APIKEY}&units=imperial`)
        .then(response => response.json())
        .then((data) => {
          if (data.cod === '404') {
            throw Error(data.message);
          }
          this.setState({
            content: (
              <Card data={data} />
            ),
          });
        })
        .catch(() => {
          this.setState({
            content: (
              <p>
                City Not Found
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

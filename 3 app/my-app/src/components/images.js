import React, { Component } from 'react'

export default class Images extends Component {

  constructor(props) {
    super(props);
    this.state = {interval: null};
  }

componentDidMount() {
  console.log("Images component Mounted");
  this.setState({
    interval:setInterval(()=> {
      console.log('Hello')
    }, 1000)
  })
}

  componentWillUnmount() {
    console.log("Images component Unmounted");
    clearInterval(this.state.interval) 
  }

  render() {
    return (
      <img src="https://images.unsplash.com/photo-1595704667942-4f09b8181d9d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" />
    )
  }
}

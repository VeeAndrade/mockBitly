import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUrls, addUrls } from '../../actions';
import { getUrls, postUrl } from '../../apiCalls';

class UrlForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      urlToShorten: ''
    };
  }

  handleNameChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.addUrl(this.state)
    this.clearInputs();
  }

  addUrl = (state) => {
    postUrl(state)
    .then(url => this.props.addUrls(url))
    .catch(error => console.log(error))
  }

  clearInputs = () => {
    this.setState({title: '', urlToShorten: ''});
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Title...'
          name='title'
          value={this.state.title}
          onChange={e => this.handleNameChange(e)}
        />

        <input
          type='text'
          placeholder='URL to Shorten...'
          name = 'urlToShorten'
          value={this.state.urlToShorten}
          onChange={e => this.handleNameChange(e)}
        />

        <button onClick={e => this.handleSubmit(e)}>
          Shorten Please!
        </button>
      </form>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  setUrls: url => dispatch(setUrls(url)),
  addUrls: url => dispatch(addUrls(url))
})

export default connect(null, mapDispatchToProps)(UrlForm);
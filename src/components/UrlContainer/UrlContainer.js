import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUrls } from '../../actions';
import { getUrls } from '../../apiCalls';
import './UrlContainer.css';

export class UrlContainer extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    getUrls()
      .then(data => this.props.setUrls(data.urls))
      .catch(err => console.error('Error fetching:', err));
  }
  
  render() {
    const urlEls = this.props.urls.map(url => {
      return url.map(u => {
        return (
          <div key={u.id} className="url">
            <h3>{u.title}</h3>
            <a href={u.short_url} target="blank">{u.short_url}</a>
            <p>{u.long_url}</p>
          </div>
        )
      })
    })
    return (
      <section>
        { urlEls.length ? urlEls : <p>No urls yet! Find some to shorten!</p> }
      </section>
  )}
}

export const mapStateToProps = state =>( {
  urls: state.urls
})

export const mapDispatchToProps = dispatch => {
  return {
    setUrls: urls => dispatch(setUrls(urls))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UrlContainer);

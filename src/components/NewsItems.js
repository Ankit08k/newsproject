import React, { Component } from 'react'

export default class NewsItems extends Component {
  
  render() {
    return (
      
        <div className="card ms-5"  style={{width: "18rem",border: "2px solid red"}}>
        <img src={this.props.imgurl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">{this.props.description}...</p>
          <div className='text-center'>
          <a href={this.props.newsurl} target="_blank" rel="noreferrer" className="btn btn-primary" style={{position :"relative"}}>Read More</a>
         &nbsp; &nbsp;  <span className='badge bg-danger text-dark'>New</span>
  
          </div>
        </div>
      </div>
    )
  }
}

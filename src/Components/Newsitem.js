import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
      let {title , description , imageUrl , newsUrl} = this.props;
    return (
  
    <>
    <div className="card" style={{width: "18rem"}}>
  <img src={imageUrl?imageUrl:"https://png.pngtree.com/png-vector/20190820/ourmid/pngtree-no-image-vector-illustration-isolated-png-image_1694547.jpg"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={newsUrl} target= "_blank" className="btn btn-primary">Read more..</a>
  </div>
</div>
    </>
    )
  }
}

export default Newsitem
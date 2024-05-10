import React, { Component } from 'react'
import "./NewsItems.css";

export default class NewsItems extends Component {
  render() {
    let {title ,description ,imageurl ,time ,author ,url} = this.props;
    return (
      <>
      <div className='cnt'>
            <div className="card"><img src={imageurl === null ? "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg" : imageurl} alt="no" className='immg'/>
            <div className="txxt"><div className="mtxt">{title}</div> <br />
            {description}<br/>Author  : {author}  at  {time}  
            <div class="d-grid gap-2 col-6 mx-auto">
              <button className="btn btn-primary my-3 btn-sm" type="button" ><a href={url} style={{color : "white" ,textDecoration : 'none'}}>More Information about the News</a></button>
            </div>
            </div></div>
      </div>
      </>
    )
  }
}

// {/* <div className="card my-3" style={{width: "18rem"}}>
// <img src={imageurl} className="card-img-top" alt="..."/>
// <div className="card-body">
//   <h5 className="card-title">{title}</h5>
//   <p className="card-text">{description}</p>
//   <a href="/newsdetail/" className="btn btn-primary btn-sm">More Info!</a>
// </div>
// </div> */}
import React, { Component } from 'react'
import NewsItems from './NewsItems';
import "./News.css";

export class News extends Component {
  constructor(){
    super();
    this.state = {
      articles : [],
      page : 1,
    }
  }
  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=d969d5638f974887838ca865aa17be60&page=1&pagesize=5";
    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(parseddata);
    this.setState({articles : parseddata.articles});
  }

  handleprevclick=async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=d969d5638f974887838ca865aa17be60&page=${this.state.page-1}&pagesize=5`;
    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(parseddata);
    this.setState({page : this.state.page- 1,
      articles : parseddata.articles
    })
  }

  handlenextclick=async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=d969d5638f974887838ca865aa17be60&page=${this.state.page+1}&pagesize=5`;
    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(parseddata);
    this.setState({page : this.state.page + 1,
      articles : parseddata.articles
    })
  }

  render() {
    return (
    <>
      <div className='container'>
            <div className='row'>
            {this.state.articles.map((element)=>{
                return  <div className="col">
                        <NewsItems key = {element.url} title={!element.title? "" : element.title.slice(0,70)} description={!element.description? "" : element.description.slice(0,150)} imageurl={element.urlToImage}
                         time={element.publishedAt} author={!element.author? "" : element.author} url={element.url}/>
                        </div>
            })}
            </div>     
      </div>
      <div className='head'>
      <div className='container my-5 mx-3 box'>
            <button disabled={this.state.page <= 1} type="button" class="btn btn-warning mx-3" onClick={this.handleprevclick}>&larr; Prev</button>
            <button type="button" class="btn btn-success mx-3" onClick={this.handlenextclick}>Next &rarr;</button>
            </div></div>
      </>
    )
  }
}

export default News

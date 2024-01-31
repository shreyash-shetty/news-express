import React, { Component } from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
    static defaultProps  = {
        pageSize : 6,
        country : "in"
    }
    static propTypes  = {
        pageSize : PropTypes.number,
        country : PropTypes.string
    }


    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            // page: 1,
            category : 'general',
        }
    }
    
    async componentDidMount() {
        let url= `https://saurav.tech/NewsAPI/top-headlines/category/${this.state.category}/in.json`
        // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.state.category}&apiKey=870d6cb40b1d4f1883a6eccdecd21a48&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading : true});
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({ articles: parseData.articles,
                        // totalArticles: parseData.totalResults,
                         loading : false
                         })

    }

    // previous = async () => {
    //     let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.state.category}&apiKey=870d6cb40b1d4f1883a6eccdecd21a48&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    //     this.setState({loading : true});
    //     let data = await fetch(url);
    //     let parseData = await data.json();
    //     console.log(parseData);
    //     this.setState({
    //         page: this.state.page - 1,
    //         articles: parseData.articles,
    //         loading : false
    //     });

    // }
    // next = async () => {
    //     if (this.state.page + 1 > Math.ceil(this.state.totalArticles / this.props.pageSize)) {

    //     }
    //     else {
    //         let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.state.category}&apiKey=870d6cb40b1d4f1883a6eccdecd21a48&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    //         this.setState({loading : true});
    //         let data = await fetch(url);
    //         let parseData = await data.json();
    //         this.setState({
    //             page: this.state.page + 1,
    //             articles: parseData.articles,
    //             loading : false
    //         });

    //     }
    // }

 
general = async() =>{
    this.setState({category : "general"});
    let url= `https://saurav.tech/NewsAPI/top-headlines/category/${this.state.category}/in.json`   
    // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.state.category}&apiKey=870d6cb40b1d4f1883a6eccdecd21a48&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading : true});
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({ articles: parseData.articles,
                    // totalArticles: parseData.totalResults,
                     loading : false
                     });
    this.setState({category : "general"});                 
    this.updateCategory();
    
}



    business = async () =>{
        
        this.setState({category : 'business'} )
        let url= `https://saurav.tech/NewsAPI/top-headlines/category/${this.state.category}/in.json`
        // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.state.category}&apiKey=870d6cb40b1d4f1883a6eccdecd21a48&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading : true});
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({ articles: parseData.articles,
                        // totalArticles: parseData.totalResults,
                         loading : false
                         });
     this.setState({category : 'business'} );
     this.updateCategory();
    }
  

    sports = async () =>{
        this.setState({category : 'sports' } );
        let url= `https://saurav.tech/NewsAPI/top-headlines/category/${this.state.category}/in.json`
        // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.state.category}&apiKey=870d6cb40b1d4f1883a6eccdecd21a48&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading : true});
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({ articles: parseData.articles,
                        // totalArticles: parseData.totalResults,
                         loading : false
                         });
        this.setState({category : 'sports' } );
        this.updateCategory();
    }
    // let url= `https://saurav.tech/NewsAPI/top-headlines/category/${this.state.category}/in.json`
    science= async () =>{
        this.setState({category : 'science'});
        let url= `https://saurav.tech/NewsAPI/top-headlines/category/${this.state.category}/in.json`;
        // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.state.category}&apiKey=870d6cb40b1d4f1883a6eccdecd21a48&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading : true});
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({ articles: parseData.articles,
                        // totalArticles: parseData.totalResults,
                         loading : false
                         });
        this.setState({category : 'science'});
        this.updateCategory();
    }

    technology = async () =>{
        this.setState({category : 'technology'});
        let url= `https://saurav.tech/NewsAPI/top-headlines/category/${this.state.category}/in.json`
        // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.state.category}&apiKey=870d6cb40b1d4f1883a6eccdecd21a48&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading : true});
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({ articles: parseData.articles,
                        // totalArticles: parseData.totalResults,
                         loading : false
                         });
         this.setState({category : 'technology'});
         this.updateCategory();
    }
       
updateCategory = async() =>{
    
    let url= `https://saurav.tech/NewsAPI/top-headlines/category/${this.state.category}/in.json`  
    // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.state.category}&apiKey=870d6cb40b1d4f1883a6eccdecd21a48&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading : true});
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({ articles: parseData.articles,
                    totalArticles: parseData.totalResults,
                     loading : false
                     });
}


    render() {
        
        return (
            
            <div className='container my-4'>
              <div className="text-center">
                <button type="button" className="btn btn-info mx-2" onClick={ this.general} >General</button>
                <button type="button" className="btn btn-info mx-2" onClick={this.business} >Business</button>
                <button type="button" className="btn btn-info mx-2" onClick={this.sports}>Sports</button>
                <button type="button" className="btn btn-info mx-2" onClick={this.science}>Science</button>
                <button type="button" className="btn btn-info mx-2" onClick={this.technology}>Technology</button>
                </div>
                <h1 className="text-center my-5">News Express - Top Headlines</h1>
                <h1 className="text-center my-5"><u>{this.state.category.toUpperCase()}</u></h1>
               {this.state.loading && <Spinner/>}
                <div className='row'>
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className='col-md-4' key={element.url}>
                            <Newsitem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imgUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}

                </div>
                {/* <div className='container d-flex justify-content-between' >
                    <button disabled={this.state.page === 1} type="button" className="btn btn-dark " onClick={this.previous}>&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalArticles / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.next}>Next &rarr;</button>
                </div> */}
            </div >

        )
    }
}

export default News
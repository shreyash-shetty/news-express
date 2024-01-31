import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        let {title, description,imgUrl,newsUrl} = this.props;
        return (
            <div>
                <div className="card  mx-5 my-3" style={{width: '18rem'}}>
                    <img src={imgUrl?imgUrl:"news.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsitem
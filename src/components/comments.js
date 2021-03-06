import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";




export default class UserComments extends Component {
    state = {
        comments: [],

    }
    componentDidMount = () => {
        this.getAllComments();
    };

    getAllComments = () => {
        axios.get(`https://jsonplaceholder.typicode.com/comments/?postId=${this.props.location.id}`)
        .then(res => (this.setState({ comments: res.data})))
    };

    render() {
        return (
            <div>
                <Link to='/'><button type="button" className="btn btn-light">Back to Users</button></Link>

                <div className="list-comments">
                    <div className="card comments" style={{ width: "18 rem" }}>
                        <div className="card-body">
                            <h1 className="card-title">{this.state.comments.length} Comments : </h1>
                        </div>

                        {this.state.comments.map(el => (
                            <div className="card comment" style={{ width: "18 rem" }}>
                                <div className="card-body">
                                    <h5 className="card-title">{el.name}</h5>
                                    <p className="card-text">{el.body}</p>
                                </div>
                            </div>
                        )
                        )}

                    </div>


                </div>
            </div>
        )
    }
}
import React, { Component } from "react";
import axios from "axios";
class Post extends Component {
  state = {
    post: [],
  };

  componentDidMount() {
    let id = this.props.match.params.post_id;

    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res.data);
        this.setState({ post: res.data });
      });
  }
  render() {
    const post = this.state.post ? (
      <div className="container">
        <div className="card" key={this.state.post.id}>
          <div className="card-content">
            <span className="card-title center">{this.state.post.title}</span>
            <p>{this.state.post.body}</p>
          </div>
        </div>
      </div>
    ) : (
      <div className="center">Post Bulunamadı</div>
    );
    return <div className="center">{post}</div>;
  }
}

export default Post;

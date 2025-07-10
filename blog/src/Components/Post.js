import React, { Component } from "react";
import { connect } from "react-redux";
import { deletePost } from "../actions/deleteAction";

class Post extends Component {
  handleClick = () => {
    this.props.deletePost(this.props.post.id);
    this.props.history.push('/');
  };
  render() {
    const post = this.props.post ? (
      <div className="container">
        <div className="card" key={this.props.post.id}>
          <div className="card-content">
            <span className="card-title center">{this.props.post.title}</span>
            <p>{this.props.post.body}</p>
            <div className="center">
              <button onClick={this.handleClick} className="btn grey">
                Delete Post
              </button>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="center">Post Bulunamadı</div>
    );
    return <div className="center">{post}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    post: state.posts.find((post) => post.id === id),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => dispatch(deletePost(id))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Post);

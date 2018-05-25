import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchPostUsers, fetchComment, deletePost } from '../actions/index';

class Comments extends Component {
  static contextTypes = {
    router: PropTypes.object
  }
  componentWillMount() {
    this.props.fetchPostUsers(this.props.params.id);
    this.props.fetchComment(this.props.params.id);
  }
  onDeleteClick() {
    this.props.deletePost(this.props.params.id)
      .then(() => { this.context.router.push('/'); });
  }
  renderUsers() {
    const postsUser = this.props.users.postsUser;

    if (!postsUser)
      return <div></div>;
    return (
      <li key={postsUser.id}>
        <div className="row">
          <h1 className="col-xs-12 col-sm-9 col-lg-10 title-post-item">{postsUser.title}</h1>
          <div className="col-xs-12 col-sm-3 col-lg-2">
            <button className="btn btn-danger btn-delete" onClick={this.onDeleteClick.bind(this)}>Delete</button>
            <button className="btn btn-primary btn-edit">Edit</button>
          </div>
        </div>
        <p className="content">{postsUser.body}</p>
      </li>
    )
  }

  renderComment() {
    const comments = this.props.users.comments;

    if (!comments)
      return <div>Loading...</div>;

    return comments.map((comment) => {
      return (
        <div className="comments-item" key={comment.id}>
          <p><strong>{comment.email}: </strong>{comment.body}</p>
          <button className="btn btn-primary btn-edit">Edit</button>
          <button className="btn btn-danger btn-delete">Delete</button>
        </div>
      )
    })
  }
  render() {
    return (
      <div>
        {this.renderUsers()}
        <div>
          <h3 className="title-comments">Comments</h3>
          {this.renderComment()}
        </div>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return { users: state.users }
}
export default connect(mapStateToProps, { fetchPostUsers, fetchComment, deletePost })(Comments);
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchPosts } from '../actions/index';

class PostsShow extends Component {
  static contextTypes = {
    router: PropTypes.object
  }
  componentWillMount() {
    this.props.fetchPosts(this.props.params.id);
  }
  renderUsers() {
    const posts = this.props.users.posts;

    if (!posts)
      return <div>Loading...</div>;

    return posts.map((post) => {
      return (
        <li className="posts-item" key={post.id}>
          <Link to={"/posts/postdetail/"+post.id} >
            <strong className="link">{post.title}</strong>
          </Link>
          <p>{post.body}</p>
        </li>
      )
    })
  }
  render() {
    return (
      <div>
        <Link to="/">Back To Index</Link>
        {this.renderUsers()}
      </div>
    )
  }
}
function mapStateToProps(state) {
  return { users: state.users }
}
export default connect(mapStateToProps, { fetchPosts })(PostsShow);
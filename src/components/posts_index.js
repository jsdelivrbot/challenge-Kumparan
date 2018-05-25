import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchUsers();
  }
  renderUsers() {
    return this.props.users.map((user) => {
      return (
        <li className="list-group-item row" key={user.id}>
          <div className="col-xs-12 col-sm-8">
            <span>{user.id}. </span>
            <strong>{user.username} </strong>
            <span>{user.name}</span>
          </div>
          <div className="col-xs-12 col-sm-4">
            <Link to={"posts/" + user.id} >
              <strong className="link pull-sm-right posts">Posts</strong>
            </Link>
            <Link to={"photos/" + user.id} >
              <strong className="link pull-sm-right album">Albums</strong>
            </Link>
          </div>
        </li>
      )
    })
  }
  render() {
    return (
      <div>
        <div className="row header">
          <img className="col-xs-2 col-sm-1" src="../images/57.png" alt="uchiha_clan" />
          <h1 className="title col-xs-10 col-sm-9">list of users</h1>
        </div>
        <ul className="list-group">
          {this.renderUsers()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { users: state.users.all };
}

export default connect(mapStateToProps, { fetchUsers })(PostsIndex);
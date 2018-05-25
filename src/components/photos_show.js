import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPhotos } from '../actions/index';
import { Link } from 'react-router';
import ModalImage from 'react-modal-image';
class PhotosShow extends Component {
  static contextTypes = {
    router: PropTypes.object
  }
  componentWillMount() {
    this.props.fetchPhotos(this.props.params.id)
  }
  closeLightbox = () => {
    this.state.open = true;
  };
  renderUsers() {
    const photos = this.props.users.photos;

    if (!photos)
      return <div>Loading...</div>;

    return photos.map((photo) => {
      return (
        <li key={photo.id} className="col-xs-4 col-sm-2 photo-item">
          <ModalImage
            small={photo.url}
            large={photo.url}
            alt={photo.title}
          />
        </li>
      )
    })
  }
  render() {
    return (
      <div>
        <Link to="/">Back To Index</Link>
        <div className="row center">
          {this.renderUsers()}
        </div>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return { users: state.users }
}
export default connect(mapStateToProps, { fetchPhotos })(PhotosShow);
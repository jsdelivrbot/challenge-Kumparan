import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';
import PhotosShow from './components/photos_show';
import Comments from './components/comments_show';
import PostsShow from './components/posts_show';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostsIndex} />
    <Route path="posts/:id" component={PostsShow}/>
    <Route path="posts/postdetail/:id" component={Comments} />
    <Route path="photos/:id" component={PhotosShow} />
  </Route>
);
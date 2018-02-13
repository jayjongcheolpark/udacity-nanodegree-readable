import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import AllPosts from './AllPosts';
import PostsByCategory from './PostsByCategory';
import NewPost from './NewPost';
import PostDetailPage from './PostDetailPage';
import EditPost from './EditPost';
import NotFound from './NotFound';
import './App.css';

const App = () => (
  <BrowserRouter>
    <div>
      <Header title="Readable" />
      <Switch>
        <Route exact path="/" component={AllPosts} />
        <Route exact path="/new" component={NewPost} />
        <Route exact path="/error/:errMsg" component={NotFound} />
        <Route exact path="/:category" component={PostsByCategory} />
        <Route exact path="/:category/:postId" component={PostDetailPage} />
        <Route exact path="/:category/:postId/edit" component={EditPost} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import AllPosts from './AllPosts';
import PostsByCategory from './PostsByCategory';
import NewPost from './NewPost';
import EditPost from './EditPost';
import NotFound from './NotFound';
import './App.css';

const App = () => (
  <BrowserRouter>
    <div className="h-100">
      <Header title="Readable" />
      <Switch>
        <Route exact path="/" component={AllPosts} />
        <Route exact path="/new" component={NewPost} />
        <Route exact path="/:category" component={PostsByCategory} />
        <Route exact path="/:category/:postId/edit" component={EditPost} />
        <Route component={NotFound} />
        {/*
            <Route exact path="/" component={Main} />
            <Route exact path="/:category" component={Main} />
            <Route exact path="/post/new" component={FormView} />
            <Route exact path="/post/:id" component={PostDetailView} />
            <Route exact path="/post/edit/:id" component={FormView} />
            <Route component={NotFound} />
            */}
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;

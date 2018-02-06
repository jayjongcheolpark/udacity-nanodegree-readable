import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from '../components/Header'
import AllPosts from './AllPosts'
import PostsByCategory from './PostsByCategory'
import './App.css'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Header title="Readable" />
          <Switch>
            <Route exact path="/" component={AllPosts} />
            <Route exact path="/:category" component={PostsByCategory} />
            {
            /*
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
    )
  }
}

export default App
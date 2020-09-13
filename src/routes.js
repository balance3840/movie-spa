import React from "react"
import { Route, Redirect, Switch } from "react-router-dom"
import HomeContainer from "./containers/HomeContainer"
import MovieContainer from "./containers/MovieContainer"

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route exact path="/movies" component={HomeContainer} />
      <Route exact path="/movies/:id" component={MovieContainer} />
      <Redirect to="/" />
    </Switch>
  )
}

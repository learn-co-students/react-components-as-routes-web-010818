import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

export default class Login extends React.Component {
  render(){
  return (
      <div>
        <form>
          <div>
            <label htmlFor="username">Username</label><br/><br/>
            <input type="text" name="username" placeholder="Username" /><br/><br/>

          </div>
          <div>
            <label htmlFor="password">Password</label><br/><br/>
            <input type="password" name="password" placeholder="Password" /><br/><br/>

          </div>
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

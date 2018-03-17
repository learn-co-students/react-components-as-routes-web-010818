import React, { Component } from 'react';

export default class Login extends Component {

  render() {
    return (
      <form><h1>Log In</h1>
        <div>
          <input type="text" name="username" placeholder="Username" />
          <label htmlFor="username">Username</label>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
          <label htmlFor="password">Password</label>
        </div>
        <input type="submit" value="Log In" />
      </form>
    );
  }
};

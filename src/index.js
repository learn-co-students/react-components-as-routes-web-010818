import React from 'react';
import ReactDOM from 'react-dom';
import About from './about'
import Login from './login'
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';


const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

/* add the navbar component */
const Navbar = () =>
  <div>
    <NavLink
      to="/"
      /* set exact so it knows to only set activeStyle when route is deeply equal to link */
      exact
      /* add styling to Navlink */
      style={link}
      /* add prop for activeStyle */
      activeStyle={{
        background: 'darkblue'
      }}
    >Home</NavLink>
    <NavLink
      to="/about"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >About</NavLink>
    <NavLink
      to="/login"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Login</NavLink>
  </div>;


export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home! I need to get a job asap!</h1>
      </div>
    );
  }
}


// const About = () => {
//   return (
//     <div>
//       <h1>This is my about component!</h1>
//     </div>
//   );
// };
//
// const Login = () => {
//   return (
//     <div>
//       <form>
//         <div>
//           <label htmlFor="username">Username</label><br/><br/>
//           <input type="text" name="username" placeholder="Username" /><br/><br/>
//
//         </div>
//         <div>
//           <label htmlFor="password">Password</label><br/><br/>
//           <input type="password" name="password" placeholder="Password" /><br/><br/>
//
//         </div>
//         <input type="submit" value="Login" />
//       </form>
//     </div>
//   );
// };

ReactDOM.render(
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </div>
  </Router>,
  document.getElementById('root')
);

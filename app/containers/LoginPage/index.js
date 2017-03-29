import React from 'react';
import style from './index.scss';
import {connect, dispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import NavBar from 'Bitmatica/components/NavBar';
import {login, logout, fetchToDos} from 'Bitmatica/containers/Frontpage/actions';
import {SignupPage} from 'Bitmatica/containers/SignupPage';

class LoginPage extends React.Component {

  render() {
    let email;
    let password;
    return (
      <div>
        <NavBar backButton={true} />
        {this.props.user.email} {this.props.user.password}
        <p></p>
        <div className="container">
          <div className="form-group row">
            <label className="col-2 col-form-label">Email</label>
            <div className="col-10">
              <input className="form-control" type="email" id="email" ref={node => {
                email = node;
              }}/>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-2 col-form-label">Password</label>
            <div className="col-10">
              <input className="form-control" type="password" id="password" ref={node => {
                password = node;
              }}/>
            </div>
          </div>
          <button type="submit" className="btn btn-primary" onClick={(e) => {this.props.login(email.value, password.value)}}>Login</button>

          <button className="btn btn-primary" onClick={(e) => {this.props.fetchTodos()}}>Fetch Tasks</button>
          <button className="btn btn-primary" onClick={(e) => {this.props.logout()}}>Logout</button>
          <Link to="/signup">Signup</Link>
        </div>
      </div>
    )
  }
}

LoginPage.propTypes = {
}

LoginPage.defaultProps = {
}

const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.cms.todos,
    loggedTodos: state.cms.loggedTodos,
    user: state.cms.user,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: (email, password) => {
      dispatch(login(email, password));
    },
    fetchTodos: () => {
      dispatch(fetchToDos());
    },
    logout: () => {
      dispatch(logout());
    },
    signup: () => {
      dispatch(signup());
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);

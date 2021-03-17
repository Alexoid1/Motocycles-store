import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { fetchUsers, createUsers } from '../actions/userActions';
import './LoginForm.css';

const LoginForm = ({ fetchUsers, createUsers, users }) => {
  const [displays, setDisplays] = useState('inline-block');
  const [displays2, setDisplays2] = useState('none');
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);
  const [login, setLogin] = useState('Login');
  const [comp, setComp] = useState('');
  const history = useHistory();

  if (users.login) {
    history.push('/motorcycles');
  }

  const handleChangeDisplay = e => {
    e.preventDefault();
    setDisplays('none');
    setDisplays2('inline-block');
  };
  const handleSearchUserKeyDown = e => {
    if (e.keyCode === 13) {
      const reg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
      if (reg.test(email)) {
        fetchUsers(email);
        if (users.error) {
          setComp(users.error);
          setTimeout(() => {
            setComp('');
          }, 10000);
        }
      } else {
        setComp('Write a email!');

        setTimeout(() => {
          setComp('');
        }, 10000);
      }
    }
  };

  const handleSearchUser = e => {
    e.preventDefault();
    const reg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (reg.test(email)) {
      fetchUsers(email, password);
      if (users.error) {
        setComp(users.error);
        setTimeout(() => {
          setComp('');
        }, 10000);
      }
    } else {
      setComp('Write a email!');

      setTimeout(() => {
        setComp('');
      }, 10000);
    }
  };

  const handleCreateUser = () => {
    const reg2 = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (reg2.test(email)) {
      createUsers(name, email, password);
      if (users.error) {
        setComp(users.error);
        setTimeout(() => {
          setComp('');
        }, 10000);
      }
    } else {
      setComp('Invalid Data');
    }
  };

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };
  const handleNameChange = e => {
    setName(e.target.value);
  };
  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handleChangeFormType = e => {
    e.preventDefault();
    setEmail('');
    setName('');
    if (login === 'Login') {
      setLogin('Sign up');
    } else {
      setLogin('Login');
    }
  };

  const handleChangeFormTypeKey = e => {
    if (e.keyCode === 38) {
      setEmail('');
      setName('');
      if (login === 'Login') {
        setLogin('Sign up');
      } else {
        setLogin('Login');
      }
    }
  };

  let formLog;
  if (login === 'Login') {
    formLog = (
      <div>
        <form style={{ display: displays2 }}>
          <input className="inputEmail" type="email" placeholder="Write Your Email" onChange={handleEmailChange} required />
          <br />
          <input className="inputEmail" type="password" placeholder="Write Your Password" onChange={handlePasswordChange} required />
          <br />
          <button className="startBoton" type="submit" onClick={handleSearchUser} onKeyDown={handleSearchUserKeyDown}>Login</button>
          <button className="messagelink" type="button" onClick={handleChangeFormType} onKeyDown={handleChangeFormTypeKey}>Sing Up</button>
        </form>

        <p className="messageAlert">{comp}</p>
      </div>
    );
  } else {
    formLog = (
      <div>
        <form style={{ display: displays2 }}>
          <input className="inputEmail mail" name="name" type="text" placeholder="Write Your Name" onChange={handleNameChange} value={name} />
          <br />
          <input className="inputEmail mail" name="email" type="email" placeholder="Write Your Email" onChange={handleEmailChange} value={email} required />
          <br />
          <input className="inputEmail mail" type="password" placeholder="Write Your Password" onChange={handlePasswordChange} required />
          <br />
          <button className="startBoton mail" type="submit" onClick={handleCreateUser}>Create</button>
          <button type="button" className="messagelink" onClick={handleChangeFormType}>Sing In</button>
        </form>
        <p className="messageAlert">{comp}</p>
      </div>
    );
  }
  return (
    <div>
      <h1 className="loginTitle">TRY A MOTORCYCLE</h1>
      <button className="butonLogin" type="button" onClick={handleChangeDisplay} style={{ display: displays }}>
        |
        {login}
        |
      </button>
      <button className="butonChangeForm" type="button" onClick={handleChangeFormType} style={{ display: displays }}>
        <i className="fa fa-chevron-circle-right" aria-hidden="true" />
        .
      </button>
      {formLog}

    </div>
  );
};

LoginForm.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  createUsers: PropTypes.func.isRequired,
  users: PropTypes.shape({
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
    loading: PropTypes.bool.isRequired,
    called: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    login: PropTypes.bool.isRequired,
  }),
};

LoginForm.defaultProps = {
  users: {},
};

const mapDispatchToProps = dispatch => ({
  fetchUsers: (email, password) => dispatch(fetchUsers(email, password)),
  createUsers: (name, email, password) => dispatch(createUsers(name, email, password)),
});

const mapStateToProps = state => ({
  users: state.users,
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

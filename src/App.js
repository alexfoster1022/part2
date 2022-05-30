import { React, useState } from 'react';
import './App.css';


const App = () => {

  const database = [
    {
      username: 'user1',
      password: 'pass1'
    },
    {
      username: 'user2',
      password: 'pass2'
    },
    {
      username: 'user3',
      password: 'pass3'
    }
  ];

  const errors = {
    user: 'Invalid username',
    pass: 'Invalid password'
  };

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const renderErrorMessage = (name) => {
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    )
  };

const handleSubmit = (event) => {
  event.preventDefault();

  var { user, pass } = document.forms[0];

  const userData = database.find((user) => user.username === user.value);
  if(userData) {
    if(userData.password !== pass.value) {
      setErrorMessages({ name: 'pass', message: errors.pass});
    } else {
      setIsSubmitted(true);
    }
  } else {
    setErrorMessages({ name: 'user', message: errors.user});
  }
};

const renderForm = (
  <div className="form">
    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <label>Username</label>
        <input type="text" name="user" required />
        {renderErrorMessage('user')}
      </div>
      <div className="input-container">
        <label>Password</label>
        <input type="password" name="pass" required />
        {renderErrorMessage('pass')}
      </div>
     <div className="button-container">
       <button type="submit" className="button">Login</button>
       </div> 
    </form>
  </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>Succesfully logged in</div> : renderForm}
      </div>
    </div>
  )
}

export default App;
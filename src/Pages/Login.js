import { ContactSupport } from '@material-ui/icons';
import React, { useState, useEffect  } from 'react';
import Dashboard from './Dashboard';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [session, setSession] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Email format validation using regular expression
    const emailRegex = new RegExp("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$");

    if(email.length != " "){
      if (!emailRegex.test(email)) {
        setErrorMessage('Invalid email format');
        return;
      }
    }else{
      setErrorMessage('Email is empty');
    }
    

    // Password length validation
    if (password.length < 5) {
      setErrorMessage('Password must be at least 5 characters');
      return;
    }

    
      e.preventDefault();
  
    const response = await fetch('http://localhost/php/task-management/app/controllers/loginController.php', {
      method: 'POST',
      headers: { "Accept" : "application/json",'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    if (response.ok) {
      let data = await response.json();
      console.log(data.status);
      console.log(data.user_id);
      setSession(data);
      if(data.status == "success") {
        setLoggedIn(true);
        // fetchSessions();
        navigate(`/dashboard/${data.user_id}`);
      }
      else{
        setErrorMessage('Email or password incorrect');
      }
      // Handle successful login, e.g., redirect to dashboard
    } else {
      const errorData = await response.json();
      setErrorMessage(errorData.message || 'Login failed');
    }


    // if(loggedIn){
    //   <Redirect to="/dashboard" />
    // }

    // window.location.href = '/dashboard';
    // All validations passed, perform login logic here
  };

  

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        {loggedIn && <Dashboard />}
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="text"
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {errorMessage && <div className="text-red-500">{errorMessage}</div>}

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline 2 focus-visible:outline-indigo-600"
              >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
      Not a member?
      <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
        Start a 14 day free trial
      </a>
    </p>
  </div>
</div>

);
}

export default Login;
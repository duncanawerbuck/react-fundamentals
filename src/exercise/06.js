// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react';

function UsernameForm({onSubmitUsername}) {
  const inputRef = React.useRef(null);
  const [username, setUsername] = React.useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onSubmitUsername(username);
  };

  const handleChange = event => {
    setUsername(event.target.value?.toLowerCase() || '');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          type="text"
          id="usernameInput"
          value={username}
          ref={inputRef}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

function App() {
  const onSubmitUsername = username => {
    const alertMessage = username
      ? `You entered: ${username}`
      : 'You did not enter a username';
    alert(alertMessage);
  };
  return <UsernameForm onSubmitUsername={onSubmitUsername} />;
}

export default App;

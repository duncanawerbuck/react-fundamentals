// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react';

function UsernameForm({onSubmitUsername}) {
  const inputRef = React.useRef(null);
  const [error, setError] = React.useState('');
  const username = inputRef.current.value;

  const handleSubmit = event => {
    event.preventDefault();
    onSubmitUsername(username);
  };

  const handleChange = event => {
    const username = event.target.value;
    const hasError =
      typeof username !== 'string' ||
      !username.length ||
      username !== username.toLowerCase();

    if (hasError) {
      setError('Username must be lowercase alphanumeric');
      alert(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          type="text"
          id="usernameInput"
          ref={inputRef}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`);
  return <UsernameForm onSubmitUsername={onSubmitUsername} />;
}

export default App;

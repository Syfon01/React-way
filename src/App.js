import React from 'react';

function App() {
  return (
    <div className="App ui container comments">
      <div className="comment">
        <div className="avatar">
          <img src=" " alt="avatar" /></div>
        <div className="content">
          <a className="author" href="/">Matt</a>
          <div className="metadata"><div>Today at 5:42PM</div></div>
          <div className="text">How artistic!</div>
          <div className="actions"><a className="" href="/">Reply</a></div>
        </div>
      </div>
    </div>
  );
}

export default App;

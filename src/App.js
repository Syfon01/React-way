import React from 'react';
import faker from 'faker'
function App() {
  return (
    <div className="App ui container comments">
      <div className="comment">
        <div className="avatar">
          <img src={faker.image.avatar()} alt="avatar" /></div>
        <div className="content">
          <a className="author">Matt</a>
          <div className="metadata"><div>Today at 5:42PM</div></div>
          <div className="text">How artistic!</div>
        </div>
      </div>
    </div>
  );
}

export default App;

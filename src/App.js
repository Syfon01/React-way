import React from 'react';
import CommentDetail from './components/CommentDetail'
function App() {
  return (
    <div className="App ui container comments">
      <CommentDetail author="Sam" post="post one for today"/>
      <CommentDetail author="Vee" post="Suuny day for learning react"/>
      < CommentDetail author = "Merci"
      post = "I can do better" />

    </div>
  );
}

export default App;

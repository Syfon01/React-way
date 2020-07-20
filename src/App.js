import React from 'react';
import CommentDetail from './components/CommentDetail'
import faker from 'faker'

function App() {
  return (
    <div className="App ui container comments">
      <CommentDetail author="Sam"
        post="post one for today"
        time="Today at 13:12pm"
        imageUrl = {faker.image.avatar()}
      />
      <CommentDetail author="Vee"
        post="Suuny day for learning react"
        time="Today at 9:00am"
        imageUrl = {faker.image.avatar()}
      />
      < CommentDetail author = "Merci"
        post="I can do better"
        time="Yesterday at 8:5pm"
        imageUrl = {faker.image.avatar()}
      />

    </div>
  );
}

export default App;

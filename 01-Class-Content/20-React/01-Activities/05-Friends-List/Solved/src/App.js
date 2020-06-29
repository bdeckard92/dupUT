import React, { useState } from 'react';
import FriendCard from './components/FriendCard';
import Wrapper from './components/Wrapper';
import friends from './friends.json';
import './App.css';

function App() {
  const [friendsList, setFriendsList] = useState(friends);

  const removeFriend = id => {
    const newList = friendsList.filter(friend => friend.id !== id);
    setFriendsList(newList);
  };

  return (
    <Wrapper>
      <h1 className="title">Friends List</h1>
      {friendsList.map(friend => (
        <FriendCard
          removeFriend={removeFriend}
          id={friend.id}
          key={friend.id}
          name={friend.name}
          image={friend.image}
          occupation={friend.occupation}
          location={friend.location}
        />
      ))}
    </Wrapper>
  );
}

export default App;

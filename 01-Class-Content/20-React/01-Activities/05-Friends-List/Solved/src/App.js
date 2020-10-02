// We import useState from React
import React, { useState } from 'react';
import FriendCard from './components/FriendCard';
import Wrapper from './components/Wrapper';
import friends from './friends.json';
import './App.css';

function App() {

  // We declare our state variable friendsList
  // We declare our state setters setFriendsList
  // We set the default state to the friends array, using useState
  const [friendsList, setFriendsList] = useState(friends);

  // We write the removeFriend method, which will use the id of the friend
  // To return a new array that excludes the friend with the matching id.
  const removeFriend = id => {
    const newList = friendsList.filter(friend => friend.id !== id);
    setFriendsList(newList);
  };

  return (
    <Wrapper>
      <h1 className="title">Friends List</h1>
      {/* We map through our friendsList, passing the removeFriend method as props */}
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

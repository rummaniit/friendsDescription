// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import FetchFriends from './components/FetchFriends/FetchFriends';
import Header from './components/Header/Header';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <FetchFriends></FetchFriends>

    </div>
  );
}

export default App;

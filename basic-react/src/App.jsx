import UserGreeting from './UserGreeting.jsx';

function App() {
  return (
    <>
      <UserGreeting isLoggedIn={true} username="JeongBeen" />
      <UserGreeting isLoggedIn={false} username="JeongBeen" />
      <UserGreeting />
    </>
  );
}

export default App;

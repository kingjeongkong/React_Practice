import Student from './Student';

function App() {
  return (
    <>
      <Student name="Spongebob" age="30" isStudent={false} />
      <Student name="Patrick" age={42} isStudent={true} />
      <Student name="Squidward" age={50} isStudent={false} />
      <Student />
    </>
  );
}

export default App;

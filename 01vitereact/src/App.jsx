import Chai from "./chai";

function App() {
  const appId = "myuser123";
  return (
    // This is call fragement
    // {appId} is evaluated expression
    // Here we can't write if else etx end of the day it is converting into object
    // The variable is considered as a key and the value is come from the key where it is converting into html
    <>
      <h1>This is Main App {appId}</h1>
      <Chai />
    </>
  );
}

export default App;

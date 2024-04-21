import './App.css'
import config from './config/config';
function App() {
  // For accessing the env variable in vite application
  console.log(config.appwriteUrl);
  return (
    <> 
      <h2>Blog app with appwrite</h2>
    </>
  )
}

export default App

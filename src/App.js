import './App.css';
import Questions from './components/questions';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

function App() {
  return (
    <><h1 className='header'>Important survey for the purpose of science
    </h1><Questions></Questions></>
  );
}

export default App;

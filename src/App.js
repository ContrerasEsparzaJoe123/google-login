import logo from './logo.svg';
import './App.css';
import GoogleLogin from 'react-google-login';

function App() {
  const respuesta_google=(respuesta)=>{
    console.log(respuesta);
  }
  return (
    <div className="App">
     <GoogleLogin
    clientId="69419251981-01ase98llsa4kls1r18kmmut93kkg68f.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={respuesta_google}
    onFailure={respuesta_google}
    cookiePolicy={'single_host_origin'}
      />
      

    </div>
  );
}

export default App;

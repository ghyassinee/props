import logo from './logo.svg';
import './App.css';
import Profile from './profile/profile';
import react from 'react';
import Logo from './logo.svg'; 


function App() {
  const FullName="GHOUL Yassine";
  const bio ="23 yo";
  const profession ="Battal";
  function Alert(){
    alert(FullName);
  }
  return (
    <div className="App">
<Profile Name={FullName} Bio={bio} Profession={profession} alert={Alert}>
<img src={Logo} alt="Logo" />;
 </Profile>
    </div>
  );
}

export default App;

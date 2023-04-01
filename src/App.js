import React, {useState} from 'react';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
function App() {
  const [myStyle, setMyStyle]=useState({color:'#042743',
    backgroundColor: 'white',border:'1px solid white'})
    const [btnText, setBtnText]=useState("Enable Dark Mode")
    const toggleStyle = () =>{
        if(myStyle.color === "white"){
            setMyStyle({
                color:'#042743',
                backgroundColor: 'white',
                border:'1px solid white'
            })
            setBtnText("Enable Dark Mode")
        }
        else{
            setMyStyle({
                color:'white',
                backgroundColor: '#042743',
                border:'1px solid white'
            })
            setBtnText("Enable Light Mode")
        }
    }
  const [mode, setMode]=useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) =>{
    setAlert({
      msg:message,type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }
  const toggleMode = (cls) =>{
    removeBgclasses()
    if(cls == null){
    if(mode === "dark"){
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Dark mode has been enabled", "success");
      // document.title='TextUtils-Light';
      // setInterval(()=>{
      //   document.title='TextUtils is Amazing';
      // },2000);
      // setInterval(()=>{
      //   document.title='Install TextUtils now';
      // },1500);
    }
    else{
      setMode("dark");
      document.body.style.backgroundColor = '#042743';
      showAlert("Light mode has been enabled", "success");
      // document.title='TextUtils-Dark';
      // setInterval(()=>{
      //   document.title='TextUtils is Amazing';
      // },2000);
      // setInterval(()=>{
      //   document.title='Install TextUtils now';
      // },1500);
    }
  }
  else{
    document.body.classList.add('bg-'+cls);
    // setMode(cls);
    showAlert(`${cls} mode has been enabled`, "success");
  }
  if(myStyle.color === "white"){
    setMyStyle({
        color:'#042743',
        backgroundColor: 'white',
        border:'1px solid white'
    })
    setBtnText("Enable Dark Mode")
}
else{
    setMyStyle({
        color:'white',
        backgroundColor: '#042743',
        border:'1px solid white'
    })
    setBtnText("Enable Light Mode")
}
  }
  const removeBgclasses= ()=>{
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-secondary');
    document.body.classList.remove('bg-info');
  }
  return (
    <>
    <Router>
<Navbar title="TextUtils" aboutText="About us" homeText="Home" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>
<div className="container my-3">
{/* <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/> */}
  <Routes>
    <Route exact path="/about" element={<About myStyle={myStyle}/>} />
    <Route exact path="/TextUtils" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>} />
  </Routes>
</div>
</Router>
    </>
  );
}

export default App;

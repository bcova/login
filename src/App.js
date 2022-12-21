import './app.css'
function App() {
  return (

    <div id='login-container'>
      <div id='login-element'>
        <label htmlFor='user'>Username :</label>
        <input id='user' className='login-input rnd' autoFocus/>
        <label htmlFor='password'>password :</label>
        <input id='password' className='login-input rnd'/>
        <button id='login-btn' className='rnd'>LOGIN</button>
      </div>
    </div>
  )

}

export default App;

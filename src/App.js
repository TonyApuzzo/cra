import logo from './logo.svg'
import './App.css'
import CssBaseline from '@material-ui/core/CssBaseline'
import Main from './components/Main'

function App() {
  return (
    <>
      <CssBaseline />
      <div className='App'>
        {/* <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            I edited <code>src/App.js</code> and saved to reload.
          </p>
          <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
            Learn React
          </a>
        </header> */}
        <Main />
      </div>
    </>
  )
}

export default App

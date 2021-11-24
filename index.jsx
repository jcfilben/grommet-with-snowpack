import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
// import { Add } from 'grommet-icons';
 ReactDOM.render(
   <React.StrictMode>
     <App/>
     {/* <Add /> */}
     {/* <Facebook/> */}
   </React.StrictMode>,
   document.getElementById('root'),
 );

// import React from 'react';
//  import ReactDOM from 'react-dom';

// const Demo = () => (
//   <Add />
// );

//  ReactDOM.render(<Demo />, document.getElementById('root'));
if (import.meta.hot) {
  import.meta.hot.accept();
}

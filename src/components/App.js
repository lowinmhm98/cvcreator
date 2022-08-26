
import '../App.css';
import React, { Component } from 'react';
import {GiveGenDescr} from './GiveGenDescr.js'
import {Education} from './Education.js'
import {Experience} from './Experience.js'
import {AdditionalInfo} from  './AdditionalInfo'

class App extends Component {
 
  constructor(props) {
    super(props);
    
  }

  
 
 
  render( ) {
    
  return (
    
  <div className='App'>
     
  <div className="content">
   <AdditionalInfo/>
  
  <div className='cvInfo'>
   <GiveGenDescr/>
  <div className='cvDynamic'>
   <Education/>
   <Experience/>
   </div>
   </div>
   </div>
   
  </div>
  
  
  
  );

 }
  
}

export default App;

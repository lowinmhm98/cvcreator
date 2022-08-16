import React, { Component } from 'react';


class GiveGenDescr extends Component {
    constructor(props) {
        super(props);
        this.state = {
          addGiveGenDescrEnable: false,
           name: "Your Name",
            Title:"Your title",
            Des:"Description",
                  
          GenDesButtonClicked : false
      };
       this.manageHover= this.manageHover.bind(this)
       this.manageHoverout= this.manageHoverout.bind(this)
       this.manageClickGendes = this.manageClickGendes.bind(this);
       this.handleTitlePress = this.handleTitlePress.bind(this)
       this.handleDesPress = this.handleDesPress.bind(this)
       this.handleNamePress = this.handleNamePress.bind(this)
       this.manageClickExit = this.manageClickExit.bind(this)

      }


      manageHover (e) {
        this.setState(() =>({
            addGiveGenDescrEnable :true
        }
        )
        )
     }

     manageHoverout (e) {
      this.setState(() =>({
          addGiveGenDescrEnable :false
      }
      )
      )
     
  }

     handleNamePress (e) {
           console.log(e.target.value)
           if(e.target.value!== "") {
          this.setState((previousState)=> ({
          
          name: e.target.value,
          Title: previousState.Title ,
          Des:previousState.Des 
        })) }else {
          this.setState((previousState)=> ({
        
            name:"Your Name",
            Title:previousState.Title,
            Des:previousState.Des}
            ))
        }
     
        return
      }


      handleTitlePress (e) {
        if (e.target.value!== "") {
        this.setState((previousState)=> ({
        
        name:previousState.name,
        Title:e.target.value,
        Des:previousState.Des}
        ))
        } else {
          this.setState((previousState)=> ({
        
            name:previousState.name,
            Title:"Your title",
            Des:previousState.Des}
            ))
        }
   
      return
    }

    handleDesPress (e) {
      if( e.target.value!== "") {
      this.setState((previousState)=> ({
      name:previousState.name ,
      Title:previousState.Title,
      Des:e.target.value}
      ))} else {
        this.setState((previousState)=> ({
      
          name:previousState.name,
          Title:previousState.Title,
          Des:"Description"}
          ))
      }
 
    return
  }



      manageClickGendes () {
        this.setState(( )=> ({
          GenDesButtonClicked : true
        } ))
      }


      manageClickExit  () {
        this.setState(( )=> ({
          GenDesButtonClicked : false
        } ))
      }


      render () {
        let firstButton ;
       if (this.state.addGiveGenDescrEnable) {
        firstButton= <button  onClick={this.manageClickGendes}>Edit</button>

       } else {
         firstButton= null;
       }
        
    if (this.state.GenDesButtonClicked) {
    
      firstButton = (<fieldset>
        <label htmlFor="name">Name</label>
        <input type="text" id= "name" onChange={this.handleNamePress} />
        <label htmlFor="title" >Title</label>
        <input type="text" id= "title" onChange={this.handleTitlePress}/>
        <label htmlFor="description">Description</label>
        <input type="textfield" id= "description" onChange={this.handleDesPress}/>
        <button onClick={this.manageClickExit}>Exit</button>
        </fieldset>)
    }
        return( 
          <div className='generalDescription'  onMouseEnter={this.manageHover} onMouseLeave={this.manageHoverout}>
          <div className='Tocreate'>
          <h1>{this.state.name}</h1>
          <h2>{this.state.Title}</h2>
          <p>{this.state.Des}</p>
          </div>
          {firstButton}
          </div> 
        
        
        
              

        )
    }




}



export {GiveGenDescr}
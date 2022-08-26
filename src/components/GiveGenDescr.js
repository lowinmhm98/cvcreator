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
       this.handleInputPress = this.handleInputPress.bind(this)
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

     handleInputPress (e) {
           console.log(e.target.value)
           if(e.target.value!== "") {
          this.setState((previousState)=> ({
          
          name:(e.target.getAttribute("id")==="name"?e.target.value:previousState.name),
          Title: (e.target.getAttribute("id")==="title"?e.target.value:previousState.Title) ,
          Des:(e.target.getAttribute("id")==="description"?e.target.value:previousState.Des) 
        })) }else {
          this.setState((previousState)=> ({
        
            name:(e.target.getAttribute("id")==="name"?"Your Name":previousState.name),
            Title:(e.target.getAttribute("id")==="title"? "Your title":previousState.Title),
            Des:(e.target.getAttribute("id")==="description"?"Description":previousState.Des) }
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
        <input type="text" id= "name" onChange={this.handleInputPress} />
        <label htmlFor="title" >Title</label>
        <input type="text" id= "title" onChange={this.handleInputPress}/>
        <label htmlFor="description">Description</label>
        <input type="textfield" id= "description" onChange={this.handleInputPress}/>
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
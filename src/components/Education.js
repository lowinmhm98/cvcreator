import React, { Component } from 'react';


class Education extends Component {
    constructor(prop) {
        super(prop)
        this.state= {degrees :[],
         
        addDegreePressed : false,
        addDegreeEnable : false,
        EducationHovered : false,
        EdItem : {school: "",
                  degree : "", 
                  startdate:"",    
                  enddate:"",  
                  location:"",
                  gpa:""     },
        
        
        }
        this.manageHover= this.manageHover.bind(this)
        this.manageHoverout= this.manageHoverout.bind(this)
        this.handleAddPress=this.handleAddPress.bind(this)
        this.manageClickExit=this.manageClickExit.bind(this);
        this.manageClickAddExam=this.manageClickAddExam.bind(this)
        this.handleSchoolPress= this.handleSchoolPress.bind(this)
        this.handleDegreePress= this.handleDegreePress.bind(this);
        this.handleStartPress= this.handleStartPress.bind(this);
        this.handleEndPress= this.handleEndPress.bind(this);
        this.handleGpaPress= this.handleGpaPress.bind(this);
        this.handleLocationPress= this.handleLocationPress.bind(this);
        this.deleteItem=this.deleteItem.bind(this)

    
    }
     manageHover (e) {
        this.setState(() =>({
            addDegreeEnable :true
        }
        )
        )
     }

     manageHoverout (e) {
        this.setState(() =>({
            addDegreeEnable :false
        }
        )
        )
       
    }

    handleAddPress (e) {
        this.setState(() =>({
            addDegreePressed :true
        }
        )
        )
    }

    manageClickExit  () {
      
      
      
        this.setState(( )=> ({
          addDegreePressed : false,
          addDegreeEnable :false
        } ))
      }


      handleSchoolPress (e) {
        this.setState((previousState )=> ({
            EdItem : {degree: previousState.EdItem.degree,
            school: e.target.value,
            startdate: previousState.EdItem.startdate, 
            enddate: previousState.EdItem.enddate, 
            location: previousState.EdItem.location,
            gpa: previousState.EdItem.gpa }
          } ))
      }

      handleStartPress (e) {
        this.setState((previousState )=> ({
            EdItem : {degree: previousState.EdItem.degree,
            school: previousState.EdItem.school,
            startdate: e.target.value, 
            enddate: previousState.EdItem.enddate, 
            location: previousState.EdItem.location,
            gpa: previousState.EdItem.gpa }
          } ))
      }
      handleEndPress (e) {
        this.setState((previousState )=> ({
            EdItem : {degree: previousState.EdItem.degree,
            school: previousState.EdItem.school,
            startdate: previousState.EdItem.startdate, 
            enddate: e.target.value, 
            location: previousState.EdItem.location,
            gpa: previousState.EdItem.gpa }
          } ))
      }


      handleLocationPress (e) {
        this.setState((previousState )=> ({
            EdItem : {degree: previousState.EdItem.degree,
            school: previousState.EdItem.school,
            startdate: previousState.EdItem.startdate, 
            enddate: previousState.EdItem.enddate, 
            location: e.target.value,
            gpa: previousState.EdItem.gpa }
          } ))
      }


      handleGpaPress (e) {
        this.setState((previousState )=> ({
            EdItem : {degree: previousState.EdItem.degree,
            school: previousState.EdItem.school,
            startdate: previousState.EdItem.startdate, 
            enddate: previousState.EdItem.enddate, 
            location: previousState.EdItem.location,
            gpa: e.target.value }
          } ))
      }


      handleDegreePress (e) {
        this.setState((previousState )=> ({
            EdItem : {degree: e.target.value,
            school: previousState.EdItem.school,
            startdate: previousState.EdItem.startdate, 
            enddate: previousState.EdItem.enddate, 
            location: previousState.EdItem.location,
            gpa: previousState.EdItem.gpa }
          } ))
      }


    manageClickAddExam () {
        this.setState((previousState)=> ({
           degrees: previousState.degrees.concat(previousState.EdItem),
           count : previousState.count+1,
           EdItem : {school: "",
                  degree : "", 
                  startdate:"",    
                  enddate:"",  
                  location:"",
                  gpa:""     }
          } ))
        }



    deleteItem (e) {
        
        console.log(e.target.getAttribute('data-key'))

        this.setState({
            degrees: this.state.degrees.filter(function(degree,index) {
              console.log(e.target.getAttribute("data-key"))
              console.log(index)
              console.log(e.target.getAttribute("data-key")===index)
              console.log(e.target.getAttribute("data-key")!==index)
              
                if( (+e.target.getAttribute("data-key")) ===(index)) {
                return false
              } 
                 return true;;
            })
          });
    }
  
    





    render() {
       let addDegreeButton ;
        if (this.state.addDegreeEnable) {
            addDegreeButton= <button onClick={this.handleAddPress}> Add</button>
        } else {
            addDegreeButton =null;
        }

        if (this.state.addDegreePressed) 
            
            {
              
              
              addDegreeButton = (<fieldset>
                <div>
                <label htmlFor="school">School</label>
                <input type="text" id= "school" onChange={this.handleSchoolPress}/>
                </div>
                <div>
                <label htmlFor="degree" >Degree</label>
                <input type="text" id= "degree" onChange={this.handleDegreePress}/>
                </div>
                <div>
                <label htmlFor="stardate">Start Date</label>
                <input type="textfield" id= "startdate" onChange={this.handleStartPress}/>
                </div>
                <div>
                <label htmlFor="enddate">End date</label>
                <input type="text" id= "enddate" onChange={this.handleEndPress}/>
                </div>
                <div>
                <label htmlFor="location" >Location</label>
                <input type="text" id= "location" onChange={this.handleLocationPress}/>
                </div>
                <div>
                <label htmlFor="gpa">Gpa</label>
                <input type="textfield" id= "gpa" onChange={this.handleGpaPress}/>
                </div>
                <div className='buttons'>
                <button onClick={this.manageClickAddExam}>Add</button>
                <button onClick={this.manageClickExit}>Exit</button>
                </div>
                </fieldset>)
            }
        
        return (
            <div  className= "education" onMouseEnter={this.manageHover} onMouseLeave={this.manageHoverout}>
            <div className='section'>
            <label htmlFor="Education"  >Education</label>
            {addDegreeButton}
            </div>
            <div id="Education">{this.state.degrees.map((degree,index)=>{
                
                return(<div className ="item" key={index++} data-key={index} onClick={this.deleteItem}> <div><p>{degree.startdate}-{degree.enddate}</p> <p>{degree.degree}</p> </div><div><p>{degree.school}</p><p>{degree.location}</p><p>{degree.gpa}</p></div></div>)
            })} </div>
            </div>
            
        )
    }
}


export {Education}
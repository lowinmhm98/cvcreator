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
        this.handleInputPress= this.handleInputPress.bind(this)
        this.deleteItem=this.deleteItem.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);

    
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


      handleInputPress (e) {
        this.setState((previousState )=> ({
            EdItem : {
              
            degree: ( e.target.getAttribute("id")==="degree"? e.target.value: previousState.EdItem.degree),
            school:( e.target.getAttribute("id")==="school"? e.target.value: previousState.EdItem.school),
            startdate: ( e.target.getAttribute("id")==="startdate"? e.target.value: previousState.EdItem.startdate), 
            enddate: ( e.target.getAttribute("id")==="enddate"? e.target.value: previousState.EdItem.enddate), 
            location: ( e.target.getAttribute("id")==="location"? e.target.value: previousState.EdItem.location),
            gpa: ( e.target.getAttribute("id")==="gpa"? e.target.value: previousState.EdItem.gpa) }
          } ))
      }

      handleSubmit (e) {
        e.preventDefault();
        e.target.reset()
      }



    manageClickAddExam (e) {
      let inputs= (e.target.parentElement.parentElement).getElementsByTagName("input")
        
      
       
       for (const input of inputs) {
        console.log(input)
        if (input.value === "") return;
      }
        
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
              
              
              addDegreeButton = (<form onSubmit={this.handleSubmit}>
                <fieldset>
                <div>
                <label htmlFor="school">School</label>
                <input type="text" id= "school" required onChange={this.handleInputPress}/>
                </div>
                <div>
                <label htmlFor="degree" >Degree</label>
                <input type="text" id= "degree" required onChange={this.handleInputPress}/>
                </div>
                <div>
                <label htmlFor="stardate">Start Date</label>
                <input type="textfield" id= "startdate" required onChange={this.handleInputPress}/>
                </div>
                <div>
                <label htmlFor="enddate">End date</label>
                <input type="text" id= "enddate" required onChange={this.handleInputPress}/>
                </div>
                <div>
                <label htmlFor="location" >Location</label>
                <input type="text" id= "location" required onChange={this.handleInputPress}/>
                </div>
                <div>
                <label htmlFor="gpa">Gpa</label>
                <input type="textfield" id= "gpa" required onChange={this.handleInputPress}/>
                </div>
                <div className='buttons'>
                <button  onClick={this.manageClickAddExam}>Add</button>
                <button onClick={this.manageClickExit}>Exit</button>
                </div>
                </fieldset>
                </form>)
            }
        
        return (
            <div  className= "education" onMouseEnter={this.manageHover} onMouseLeave={this.manageHoverout}>
            <div className='section'>
            <label htmlFor="Education"  >Education</label>
            {addDegreeButton}
            </div>
            <div id="Education">{this.state.degrees.map((degree,index)=>{
                
                return(<div className ="item" key={index++} data-key={index} onClick={this.deleteItem}> <div><p id="jdate">{degree.startdate} - {degree.enddate}</p> <p id="jdegree">{degree.degree}</p> </div><div><p id="jschool">{degree.school}</p><p id= "jlocation">{degree.location}</p><p id="jgpa">{degree.gpa}</p></div></div>)
            })} </div>
            </div>
            
        )
    }
}


export {Education}
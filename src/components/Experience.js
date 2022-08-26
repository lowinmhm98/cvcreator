import React, { Component } from 'react';


class Experience extends Component {
    constructor(prop) {
        super(prop)
        this.state= {titles :[],

        addJobPressed : false,
        addJobEnable : false,
        ExperienceHovered : false,
        Jobs : {company: "",
                  title : "", 
                  startdate:"",    
                  enddate:"",  
                  location:"",
                  description:""     },
        
        
        }
        this.manageHover= this.manageHover.bind(this)
        this.manageHoverout= this.manageHoverout.bind(this)
        this.handleAddPress=this.handleAddPress.bind(this)
        this.manageClickExit=this.manageClickExit.bind(this);
        this.manageClickAddJob=this.manageClickAddJob.bind(this)
        this.handleInputPress= this.handleInputPress.bind(this)
        this.deleteItem=this.deleteItem.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)

    
    }
     manageHover (e) {
    
        this.setState(() =>({
            addJobEnable :true
        }
        )
        )
    
     }

     manageHoverout (e) {
        this.setState(() =>({
            addJobEnable :false
        }
        )
        )
       
    }

    handleAddPress (e) {
        this.setState(() =>({
            addJobPressed :true
        }
        )
        )
    }

    manageClickExit  () {
        this.setState(( )=> ({
          addJobPressed : false,
          addJobEnable :false
        } ))
      }

      handleSubmit (e) {
        e.preventDefault();
        e.target.reset()
      }


      handleInputPress (e) {
       

        this.setState((previousState )=> ({
            Jobs : 
            {title:(e.target.getAttribute("id")=== "title"?e.target.value:previousState.Jobs.title) ,
            company: (e.target.getAttribute("id")=== "company"?e.target.value:previousState.Jobs.company),
            startdate: (e.target.getAttribute("id")=== "startdate"?e.target.value:previousState.Jobs.startdate), 
            enddate: (e.target.getAttribute("id")=== "enddate"?e.target.value:previousState.Jobs.enddate), 
            location: (e.target.getAttribute("id")=== "location"?e.target.value:previousState.Jobs.location),
            description: (e.target.getAttribute("id")=== "description"?e.target.value:previousState.Jobs.description) }
          } ))
      }

      


    manageClickAddJob (e) {
        
        let inputs= (e.target.parentElement.parentElement).getElementsByTagName("input")
        
      
       
       for (const input of inputs) {
        console.log(input)
        if (input.value === "") return;
      }
        
        this.setState((previousState)=> ({
           
           titles: previousState.titles.concat(previousState.Jobs),
           Jobs: {company: "",
           title : "", 
           startdate:"",    
           enddate:"",  
           location:"",
           description:"" }
          } ))
        }



    deleteItem (e) {
        
        console.log(e.target.getAttribute('data-key'))

        this.setState({
            titles: this.state.titles.filter(function(title,index) {
              
              
                if( (+e.target.getAttribute("data-key")) ===(index)) {
                return false
              } 
                 return true;;
            })
          });
    }
  
    





    render() {
       let addJobButton ;
        if (this.state.addJobEnable ) {
            addJobButton= <button onClick={this.handleAddPress}> Add</button>
        } else {
            addJobButton =null;
        }

        if (this.state.addJobPressed) 
            
            {
              addJobButton = (<form  onSubmit={this.handleSubmit}>
                <fieldset id="firstfieldset">
                <div>
                <label htmlFor="company">Company</label>
                <input type="text" id= "company" required  onChange={this.handleInputPress}/>
                </div>
                <div>
                <label htmlFor="title" >Title</label>
                <input type="text" id= "title" required  onChange={this.handleInputPress}/>
                </div>
                <div>
                <label htmlFor="stardate">Start Date</label>
                <input type="textfield" id= "startdate" required onChange={this.handleInputPress}/>
                </div>
                <div>
                <label htmlFor="enddate">End date</label>
                <input type="text" id= "enddate" required  onChange={this.handleInputPress}/>
                </div>
                <div>
                <label htmlFor="location" >Location</label>
                <input type="text" id= "location"  required  onChange={this.handleInputPress} />
                </div>
                <div>
                <label htmlFor="description">Description</label>
                <input type="textfield" id= "description" required onChange={this.handleInputPress}/>
                </div>
                <div className='buttons'>
                <button    onClick={this.manageClickAddJob}>Add</button>
                <button onClick={this.manageClickExit}>Exit</button>
                
                </div>
                </fieldset>
                </form>)
            }
        
        return (
            <div  className='experience'  onMouseEnter={this.manageHover} onMouseLeave={this.manageHoverout}>
            <div className='section' >
            <label htmlFor="Experience"  >Experience</label>
            
            {addJobButton}
            </div>
            <div id="Experience">{this.state.titles.map((job,index)=>{
                
                return(<div className ="item" key={index++} data-key={index} onClick={this.deleteItem}><div><p id="jdate">{job.startdate} - {job.enddate}</p> <p id="jtitle">{job.title}</p> </div><div><p id="jcompany">{job.company}</p><p id="jlocation">{job.location}</p><p id="jdescription">{job.description}</p></div>  </div>)
            })} </div>
            </div>
            
        )
    }
}


export {Experience}
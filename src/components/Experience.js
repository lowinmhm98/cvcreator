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
        this.handleCompanyPress= this.handleCompanyPress.bind(this)
        this.handleTitlePress= this.handleTitlePress.bind(this);
        this.handleStartPress= this.handleStartPress.bind(this);
        this.handleEndPress= this.handleEndPress.bind(this);
        this.handleDescrptionPress= this.handleDescrptionPress.bind(this);
        this.handleLocationPress= this.handleLocationPress.bind(this);
        this.deleteItem=this.deleteItem.bind(this)

    
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


      handleCompanyPress (e) {
        this.setState((previousState )=> ({
            Jobs : {title: previousState.Jobs.title,
            company: e.target.value,
            startdate: previousState.Jobs.startdate, 
            enddate: previousState.Jobs.enddate, 
            location: previousState.Jobs.location,
            description: previousState.Jobs.description }
          } ))
      }

      handleStartPress (e) {
        this.setState((previousState )=> ({
            Jobs : {title: previousState.Jobs.title,
            company: previousState.Jobs.company,
            startdate: e.target.value, 
            enddate: previousState.Jobs.enddate, 
            location: previousState.Jobs.location,
            description: previousState.Jobs.description }
          } ))
      }
      handleEndPress (e) {
        this.setState((previousState )=> ({
            Jobs : {title: previousState.Jobs.title,
            company: previousState.Jobs.company,
            startdate: previousState.Jobs.startdate, 
            enddate: e.target.value, 
            location: previousState.Jobs.location,
            description: previousState.Jobs.description }
          } ))
      }


      handleLocationPress (e) {
        this.setState((previousState )=> ({
            Jobs : {title: previousState.Jobs.title,
            company: previousState.Jobs.company,
            startdate: previousState.Jobs.startdate, 
            enddate: previousState.Jobs.enddate, 
            location: e.target.value,
            description: previousState.Jobs.description }
          } ))
      }


      handleDescrptionPress (e) {
        this.setState((previousState )=> ({
            Jobs : {title: previousState.Jobs.title,
            company: previousState.Jobs.company,
            startdate: previousState.Jobs.startdate, 
            enddate: previousState.Jobs.enddate, 
            location: previousState.Jobs.location,
            description: e.target.value }
          } ))
      }


      handleTitlePress (e) {
        this.setState((previousState )=> ({
            Jobs : {title: e.target.value,
            company: previousState.Jobs.company,
            startdate: previousState.Jobs.startdate, 
            enddate: previousState.Jobs.enddate, 
            location: previousState.Jobs.location,
            description: previousState.Jobs.description }
          } ))
      }


    manageClickAddJob () {
        this.setState((previousState)=> ({
           titles: previousState.titles.concat(previousState.Jobs),
           count : previousState.count+1,
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
              addJobButton = (<fieldset>
                <div>
                <label htmlFor="company">Company</label>
                <input type="text" id= "company" onChange={this.handleCompanyPress}/>
                </div>
                <div>
                <label htmlFor="title" >Title</label>
                <input type="text" id= "title" onChange={this.handleTitlePress}/>
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
                <label htmlFor="description">Description</label>
                <input type="textfield" id= "description" onChange={this.handleDescrptionPress}/>
                </div>
                <div className='buttons'>
                <button onClick={this.manageClickAddJob}>Add</button>
                <button onClick={this.manageClickExit}>Exit</button>
                </div>
                </fieldset>)
            }
        
        return (
            <div  className='experience' >
            <div className='section' onMouseEnter={this.manageHover} onMouseLeave={this.manageHoverout}>
            <label htmlFor="Experience"  >Experience</label>
            
            {addJobButton}
            </div>
            <div id="Experience">{this.state.titles.map((job,index)=>{
                
                return(<div className ="item" key={index++} data-key={index} onClick={this.deleteItem}><div><p>{job.startdate}-{job.enddate}</p> <p>{job.title}</p> </div><div><p>{job.company}</p><p>{job.location}</p><p>{job.description}</p></div>  </div>)
            })} </div>
            </div>
            
        )
    }
}


export {Experience}
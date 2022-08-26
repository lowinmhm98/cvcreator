import React, { Component } from 'react';


class Personalskills extends Component {
    constructor(prop) {
        super(prop)
        this.state= {Skills :[],
         
        addSkillPressed : false,
        addSkillEnable : false,
        EducationHovered : false,
        Skill : ""
        
        
        }
        this.manageHover= this.manageHover.bind(this)
        this.manageHoverout= this.manageHoverout.bind(this)
        this.handleAddPress=this.handleAddPress.bind(this)
        this.manageClickExit=this.manageClickExit.bind(this);
        this.manageClickAddSkill=this.manageClickAddSkill.bind(this)
        this.handleInputPress= this.handleInputPress.bind(this)
        this.deleteItem=this.deleteItem.bind(this)

    
    }
     manageHover (e) {
        this.setState(() =>({
            addSkillEnable :true
        }
        )
        )
     }

     manageHoverout (e) {
        this.setState(() =>({
            addSkillEnable :false
        }
        )
        )
       
    }

    handleAddPress (e) {
        this.setState(() =>({
            addSkillPressed :true
        }
        )
        )
    }

    manageClickExit  () {
      
      
      
        this.setState(( )=> ({
          addSkillPressed : false,
          addSkillEnable :false
        } ))
      }


      handleInputPress (e) {
        this.setState((previousState )=> ({
            Skill :  e.target.value
          } ))
      }

    


    manageClickAddSkill () {
        this.setState((previousState)=> ({
           Skills: previousState.Skills.concat(previousState.Skill),
           
           
          } ))
        }



    deleteItem (e) {
        
        console.log(e.target.getAttribute('data-key'))

        this.setState({
            Skills: this.state.Skills.filter(function(Skill,index) {
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
       let addSkillButton ;
        if (this.state.addSkillEnable) {
            addSkillButton= <button onClick={this.handleAddPress}> Add</button>
        } else {
            addSkillButton =null;
        }
        let result 
        if (this.state.Skills.length){
          result=(  <div id="Item">{this.state.Skills.map((Skill,index)=>{
                
                return(<div className ="item" key={index++} data-key={index} onClick={this.deleteItem}> <div><p>{Skill}</p></div></div>)
            })} </div>)
        } else {
            result =( <div>
                <p>Creative thinking</p>
                <p>Comunication</p>
                <p>Detailed</p>
                <p>Time Management</p>
                <p>Problem solving</p>
            </div>)
        }

        if (this.state.addSkillPressed) 
            
            {
              
              
              addSkillButton = (<fieldset>
                <div>
                <label htmlFor="skill">Skill</label>
                <input type="text" id= "skill" onChange={this.handleInputPress}/>
                </div>
                <div className='buttons'>
                <button onClick={this.manageClickAddSkill}>Add</button>
                <button onClick={this.manageClickExit}>Exit</button>
                </div>
                </fieldset>)
            }
        
        return (
            <div  className= "skill" onMouseEnter={this.manageHover} onMouseLeave={this.manageHoverout}>
            <div className='section'>
            <label htmlFor="skill"  >Skill</label>
            {addSkillButton}
            </div>
            {result}
            
            </div>
            
        )
    }
}


export {Personalskills}
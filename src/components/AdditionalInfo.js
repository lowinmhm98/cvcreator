import React, { Component } from 'react';
import { Personalskills } from './Personalskills';


class AdditionalInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: require( "../img/anonymous.webp"),
      
      addAdditionalInfoEnable: false,
      addImageEnable: false,
      address: "123 Address St",
      city: "City, ST 55555",
      phone: "555-555-5555",
      email: "info@website.com",
      online: "website.com",
      linkedin: "user-name",

      addInfoButtonClicked: false
    };
    this.manageHover = this.manageHover.bind(this)
    this.manageHoverout = this.manageHoverout.bind(this)
    this.manageHoverImage = this.manageHoverImage.bind(this)
    this.manageHoveroutImage = this.manageHoveroutImage.bind(this)
    this.manageClickaddInfo = this.manageClickaddInfo.bind(this);
    this.handleInputPress = this.handleInputPress.bind(this)
    this.manageClickExit = this.manageClickExit.bind(this)
    this.manageClickaddImage=this.manageClickaddImage.bind(this)
    this.manageHiddenInput= this.manageHiddenInput.bind(this)
    

  }


  manageHover(e) {
    this.setState(() => ({
      addAdditionalInfoEnable: true,

    }
    )
    )
  }

  manageHoverout(e) {
    this.setState(() => ({
      addAdditionalInfoEnable: false,

    }
    )
    )

  }
  manageHoverImage(e) {
    this.setState(() => ({

      addImageEnable: true
    }
    )
    )
  }

  manageHoveroutImage(e) {
    this.setState(() => ({

      addImageEnable: false
    }
    )
    )

  }

  handleInputPress(e) {
    console.log(e.target.getAttribute("id"))
    let id = e.target.getAttribute("id")
    if (e.target.value !== "") {
      this.setState((previousState) => ({

        address: (id=== "address"? e.target.value: previousState.address),
        phone:(id=== "phone"? e.target.value: previousState.phone) ,
        email: (id=== "email"? e.target.value: previousState.email),
        city: (id=== "city"? e.target.value: previousState.city),
        online: (id=== "online"? e.target.value: previousState.online),
        linkedin: (id=== "linkedin"? e.target.value: previousState.linkedin)
      }))
    } else {
      this.setState((previousState) => ({

        address:(id=== "address"? "123 Address St": previousState.address) ,
        phone: (id=== "phone"? "555-555-5555": previousState.phone),
        email: (id=== "email"? "info@website.com": previousState.email),
        city: (id=== "city"? "City, ST 55555": previousState.city),
        online: (id=== "online"? "website.com": previousState.online),
        linkedin:  (id=== "linkedin"? "user-name": previousState.linkedin)
      }
      ))
    }

    return
  }


  
      manageClickaddImage(event) {

    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      console.log(img)
      console.log(URL.createObjectURL(img))
      this.setState({
        image: URL.createObjectURL(img)
      });
    }
  }


  manageHiddenInput() {
     let input = document.getElementById("hidden");
    input.click();
  }





  manageClickaddInfo() {
    this.setState(() => ({
      addInfoButtonClicked: true
    }))
  }


  manageClickExit() {
    this.setState(() => ({
      addInfoButtonClicked: false
    }))
  }


  render() {
    let firstButton;
    let secondButton;
    

    if (this.state.addAdditionalInfoEnable) {
      firstButton = <button onClick={this.manageClickaddInfo}>Edit</button>
    } else {
      firstButton = null;
    }
    if (this.state.addImageEnable) {
      secondButton = <button onClick={this.manageHiddenInput}>Add Profile</button>
    } else {
      secondButton = null;
    }
    if (this.state.addInfoButtonClicked) {


      firstButton = (<fieldset >
        <label htmlFor="address">Address</label>
        <input type="text" id="address" onChange={this.handleInputPress} />
        <label htmlFor="phone" >Phone</label>
        <input type="text" id="phone" onChange={this.handleInputPress} />
        <label htmlFor="email">Email</label>
        <input type="textfield" id="email" onChange={this.handleInputPress} />
        <label htmlFor="city">City</label>
        <input type="textfield" id="city" onChange={this.handleInputPress} />
        <label htmlFor="online">Online</label>
        <input type="textfield" id="online" onChange={this.handleInputPress} />
        <label htmlFor="linkedin">Linkedin</label>
        <input type="textfield" id="linkedin" onChange={this.handleInputPress} />
        <button onClick={this.manageClickExit}>Exit</button>
      </fieldset>)
    }
    return (
      <div className='AdditionalInfo'>
        <div className='image' onMouseEnter={this.manageHoverImage} onMouseLeave={this.manageHoveroutImage}>
          <img alt="" src={this.state.image} />
          {secondButton}
          <input type="file" id='hidden'  onChange={this.manageClickaddImage}  />
        </div>
        
        <div className='Tomodify' onMouseEnter={this.manageHover} onMouseLeave={this.manageHoverout}>
          <div>
            <p>Address</p>
            {this.state.address}
          </div>
          <div>
            <p>City</p>
            {this.state.city}
          </div>
          <div>
            <p>Phone</p>
            {this.state.phone}
          </div>
          <div>
            <p>Email</p>
            {this.state.email}
          </div>
          <div>
            <p>Online</p>
            <p>{this.state.online}</p>
            <p>{this.state.linkedin}linkedin.com</p>
          </div>
          {firstButton}
        </div>
        <Personalskills/>


      </div>





    )
  }




}



export { AdditionalInfo }
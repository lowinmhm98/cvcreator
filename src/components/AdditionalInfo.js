import React, { Component } from 'react';


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
    this.handlePhonePress = this.handlePhonePress.bind(this)
    this.handleCityPress = this.handleCityPress.bind(this)
    this.handleEmailPress = this.handleEmailPress.bind(this)
    this.handleAddressPress = this.handleAddressPress.bind(this)
    this.handleCityPress = this.handleCityPress.bind(this)
    this.handleOnlinePress = this.handleOnlinePress.bind(this)
    this.handleLinkedinPress = this.handleLinkedinPress.bind(this)
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

  handleAddressPress(e) {
    console.log(e.target.value)
    if (e.target.value !== "") {
      this.setState((previousState) => ({

        address: e.target.value,
        phone: previousState.phone,
        email: previousState.email,
        city: previousState.city,
        online: previousState.online,
        linkedin: previousState.linkedin
      }))
    } else {
      this.setState((previousState) => ({

        address: "123 Address St",
        phone: previousState.phone,
        email: previousState.email,
        city: previousState.city,
        online: previousState.online,
        linkedin: previousState.linkedin
      }
      ))
    }

    return
  }


  handlePhonePress(e) {
    if (e.target.value !== "") {
      this.setState((previousState) => ({

        address: previousState.address,
        phone: e.target.value,
        email: previousState.email,
        city: previousState.city,
        online: previousState.online,
        linkedin: previousState.linkedin
      }
      ))
    } else {
      this.setState((previousState) => ({

        address: previousState.address,
        phone: "555-555-5555",
        email: previousState.email,
        city: previousState.city,
        online: previousState.online,
        linkedin: previousState.linkedin
      }
      ))
    }

    return
  }

  handleEmailPress(e) {
    if (e.target.value !== "") {
      this.setState((previousState) => ({
        address: previousState.address,
        phone: previousState.phone,
        email: e.target.value,
        city: previousState.city,
        online: previousState.online,
        linkedin: previousState.linkedin
      }
      ))
    } else {
      this.setState((previousState) => ({

        address: previousState.address,
        phone: previousState.phone,
        email: "info@website.com",
        city: previousState.city,
        online: previousState.online,
        linkedin: previousState.linkedin
      }
      ))
    }

    return
  }


  handleCityPress(e) {
    if (e.target.value !== "") {
      this.setState((previousState) => ({
        address: previousState.address,
        phone: previousState.phone,
        email: previousState.email,
        city: e.target.value,
        online: previousState.online,
        linkedin: previousState.linkedin
      }
      ))
    } else {
      this.setState((previousState) => ({

        address: previousState.address,
        phone: previousState.phone,
        email: previousState.email,
        city: "City, ST 55555",
        online: previousState.online,
        linkedin: previousState.linkedin
      }
      ))
    }

    return
  }


  handleOnlinePress(e) {
    if (e.target.value !== "") {
      this.setState((previousState) => ({
        address: previousState.address,
        phone: previousState.phone,
        email: previousState.email,
        city: previousState.city,
        online: e.target.value,
        linkedin: previousState.linkedin
      }
      ))
    } else {
      this.setState((previousState) => ({

        address: previousState.address,
        phone: previousState.phone,
        email: previousState.email,
        city: previousState.city,
        online: "website.com",
        linkedin: previousState.linkedin
      }
      ))
    }

    return
  }



  handleLinkedinPress(e) {
    if (e.target.value !== "") {
      this.setState((previousState) => ({
        address: previousState.address,
        phone: previousState.phone,
        email: previousState.email,
        city: previousState.city,
        online: previousState.online,
        linkedin: e.target.value
      }
      ))
    } else {
      this.setState((previousState) => ({

        address: previousState.address,
        phone: previousState.phone,
        email: previousState.email,
        city: previousState.city,
        online: previousState.online,
        linkedin: "user-name"
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
        <label htmlFor="address">address</label>
        <input type="text" id="address" onChange={this.handleAddressPress} />
        <label htmlFor="phone" >phone</label>
        <input type="text" id="phone" onChange={this.handlePhonePress} />
        <label htmlFor="email">Email</label>
        <input type="textfield" id="email" onChange={this.handleEmailPress} />
        <label htmlFor="city">City</label>
        <input type="textfield" id="city" onChange={this.handleCityPress} />
        <label htmlFor="online">Online</label>
        <input type="textfield" id="online" onChange={this.handleOnlinePress} />
        <label htmlFor="linkedin">Linkedin</label>
        <input type="textfield" id="linkedin" onChange={this.handleLinkedinPress} />
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
            {this.state.online}
            {this.state.linkedin}
          </div>
          {firstButton}
        </div>


      </div>





    )
  }




}



export { AdditionalInfo }
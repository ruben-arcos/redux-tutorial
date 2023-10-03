import React, { Component } from "react";

class ProfileComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newCar: "",
      newFavCountries: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      newCar: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // function to do something
    this.props.addCar(this.state.newCar);

    this.setState({
      newCar: "",
    });
  };

//   fav countries handles
handleCountryChange = (e) => {
    this.setState({
      newFavCountries: e.target.value,
    });
  };

  handleCountrySubmit = (e) => {
    e.preventDefault();

    // function to do something
    this.props.addFavCountries(this.state.newFavCountries);

    this.setState({
        // Clear the newFavCountries state
      newFavCountries: "",
    });
  };

  render() {
    return (
      <div>
        <h1>Add a new car</h1>

        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            type="text"
            value={this.state.newCar}
            onChange={(e) => this.handleChange(e)}
          />
          <input type="submit" />
        </form>
        {this.props.cars.map((car, index) => {
          return <h2 key={index}>{car}</h2>;
        })}
    
        <h1>Add a new country</h1>
        <form onSubmit={(e) => this.handleCountrySubmit(e)}>
          <input
            type="text"
            value={this.state.newFavCountries}
            onChange={(e) => this.handleCountryChange(e)}
          />
          <input type="submit" />
        </form>
        {this.props.favCountries.map((favCountries, index) => {
          return <h2 key={index}>{favCountries}</h2>;
        })}
      </div>
    );
  }
}

// props short for properties or keys
// const ProfileComponent = (props) => {
//     return (
//         <div>
//             <h1>yay! our profile dumb component 😜</h1>
//             {/* helloTwo must match with profile container */}
//             <h2>{props.helloTwo}</h2>
//             <h2>{props.fName}</h2>
//             <h2>{props.user || "Not defined"}</h2>
//             {props.cars.map((car, index) => {
//                 return (
//                     <h2 key={index}>{car}</h2>
//                 )
//             }) }
//              <h2>{props.cars.join(', ') }</h2>
//              <h2>{props.cats.join(', ') }</h2>
//              <h2>My fav animals: {props.animals.join(', ') }</h2>
//              <h2>My fav countries: {props.favCountries.join(', ') }</h2>
//         </div>
//     )
// }

export default ProfileComponent;

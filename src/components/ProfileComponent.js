import React from "react";

// props short for properties or keys
const ProfileComponent = (props) => {
    return (
        <div>
            <h1>yay! our profile dumb component 😜</h1>
            {/* helloTwo must match with profile container */}
            <h2>{props.helloTwo}</h2>
            <h2>{props.fName}</h2>
            <h2>{props.user || "Not defined"}</h2>
            {props.cars.map((car, index) => {
                return (
                    <h2 key={index}>{car}</h2>
                )
            }) }
             <h2>{props.cars.join(', ') }</h2>
             <h2>{props.cats.join(', ') }</h2>
             <h2>My fav animals: {props.animals.join(', ') }</h2>
             <h2>My fav countries: {props.favCountries.join(', ') }</h2>
        </div>
    )
}

export default ProfileComponent
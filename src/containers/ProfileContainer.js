import { connect } from "react-redux";
import ProfileComponent from "../components/ProfileComponent";
import { removeCar, addCar } from "../redux/actions";

const mapStateToProps = (state) => {
    // key must match with profile component see helloTwo as example
    return {
        helloTwo : state.hello,
        fName : state.fName,
        user : state.user,
        cars : state.cars,
        cats : state.cats,
        animals : state.animals,
        favCountries : state.favCountries
    }
}

// create function to map actions to component
const mapDispatchToProps = (dispatch) => {
    return {
        addCar: (car) => dispatch(addCar(car)),
        removeCar: (index) => dispatch(removeCar(index))
        // keep adding more methods if you have more below this line
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileComponent)
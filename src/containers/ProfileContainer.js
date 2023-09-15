import { connect } from "react-redux";
import ProfileComponent from "../components/ProfileComponent";

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

export default connect(mapStateToProps)(ProfileComponent)
import { connect } from 'react-redux';
import { Landing } from "./component";

const mapDispatchToProps = {};

const mapStateToProps = (state: any) => ({});
//
const LandingPage = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Landing);

export { LandingPage }

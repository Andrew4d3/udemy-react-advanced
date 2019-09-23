import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (ChildComponent) => {
    class ComposedComponent extends Component {

        // (2) To here.
        // Our component just got rendered
        componentDidMount() {
            this.shouldNavigateAway();
        }

        // Our component just got updated
        componentDidUpdate() {
            this.shouldNavigateAway();
        }

        shouldNavigateAway() {
            if (!this.props.auth) {
                // (1) When we use react-router we gain acces to its "history" method when we can programmatically change routes by pusing them in
                this.props.history.push("/");
            }
        }

        render() {
            return <ChildComponent />;
        }
    }

    // (4) Now the mapStateToProps function will be located in our HOC
    function mapStateToProps(state) {
        return { auth: state.auth };
    }

    // (5) We also need to connect our HOC to Redux
    return connect(mapStateToProps)(ComposedComponent);
} 
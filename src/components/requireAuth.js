// (1) Let's define our High Order Component (HOC)
import React, { Component } from 'react';

// (2) A HOC is simply a function that wraps any child component
export default (ChildComponent) => {
    class ComposedComponent extends Component {
        render() {
            // (3) Here we're returning our original child component
            return <ChildComponent />;
        }
    }

    return ComposedComponent;
} 
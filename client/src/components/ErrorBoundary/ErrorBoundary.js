import React, { Component } from 'react';
import { ErrorImageContainer, ErrorImageOverlay, ErrorImageText } from "./ErrorBoundaryStyles";
class ErrorBoundary extends Component {
  state = { hasErrored: false };
  // its react lifeCycle method
  // its allow us to catch error ahead of time
  static getDerivedStateFromError = (error) => {
    // process error to return obj of state
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if(this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl={`https://sfds.com`}/>
          <ErrorImageText>Sorry this page is broken.</ErrorImageText>
        </ErrorImageOverlay>
      );
    }        
    return this.props.children;
  }
}

export default ErrorBoundary;
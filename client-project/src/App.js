import React, {Component} from "react";
import { useSelector } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

const App = () => {
  const user= useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const token = localStorage.getItem("access");

  console.log(`user info: ${user}`);
  console.log(`user autenticado: ${isAuthenticated}`);
  console.log(`token: ${token}`);

  class ErrorBoundary extends Component{
    constructor(props){
      super(props);
      this.state = { hasError: false};
    }

    static getDerivedStateFromError(error){
      return { hasError: true};
    }

    componentDidCatch(error, errorInfo){
      console.log(error, errorInfo);
    }

    render(){
      if(this.state.hasError){
        return <h1>Something went wrong.</h1>;
      }

      return this.props.children;
    }
  }

  return (
    <ErrorBoundary>
      <BrowserRouter> 
        {isAuthenticated ?(
          <div>
            <h1>Autenticado</h1>
            <h4>Dev by: Abel Gomez</h4>
          </div>
        ) : (
          <div>
            <h1>No autenticado</h1>
            <h4>Dev by: Abel Gomez</h4>
          </div>
        )}
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
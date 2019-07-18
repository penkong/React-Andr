import React, {  useEffect, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// now after firebase work in console we want to let app know
// to store user to state of app
// import { auth, createUserProfileDocument, addCollectionAndDocs } from "./firebase/firebase.utils";
// import { setCurrentUser } from "./redux/user/userAction";
import { selectCurrentUser } from "./redux/user/userSelector";
import { selectCollectionsForPreview } from "./redux/shop/shopSelector";
import { checkUserSession } from "./redux/user/userAction";
// make lazy loading 
import "./App.css";
import Header from "./components/Header/Header";
import Spinner from "./components/Spinner/Spinner";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const Shop = lazy(() => import('./pages/ShopPage/Shop'));
const CheckoutPage = lazy(() => import('./pages/CheckoutPage/CheckoutPage'));
const SignPage = lazy(() => import('./pages/SignPage/SignPage'));
// on suspense use error handling if we lose connection ==> error boundary work like suspense

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession])
  return (
    <div>
      <Header/>
      <Switch>
        <ErrorBoundary>
          {/* suspense for async loading comp with lazy */}
          <Suspense fallback={Spinner}>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/shop" component={Shop} />
            
            <Route exact path="/checkout" component={CheckoutPage} />
            
            {/* by render we decide what comp to render and show */}
            <Route exact path="/signin" 
              render={()=>
                currentUser 
                ? (<Redirect to='/'/>) 
                : (<SignPage/>)
              } 
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
}
// current user fetch
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArr: selectCollectionsForPreview
})


// action creator
const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps,mapDispatchToProps)(App);


// class App extends Component {
//   // subscribe for stream listener
//   unsubscribeFromAuth = null;

//   // its always listen until unMount ist observable but we use promise pattern on refactor
//   componentDidMount() {
//     // const { setCurrentUser } = this.props;
//     // console.log(userAuth);
//     // this is open subscription this connection is always open
//     // but we must close it on unmounted
//     // auth == stream of events, onAuth is observable, async is next() observer
//     // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
//     //   if (userAuth) {
//     //     // pass uid of user to create blew
//     //     const userRef = await createUserProfileDocument(userAuth);
//     //     // let us get data and snapShot from db
//     //     userRef.onSnapshot(snapShot => {
//     //       // action creator
//     //       setCurrentUser({
//     //         currentUser: {
//     //           id: snapShot.id,
//     //           ...snapShot.data()
//     //         }
//     //       });
//     //     });
//     //   } 
//     //   setCurrentUser(userAuth);
//       // give us hat, jackets and ... to save in fire as new name collection that named collections
//       // addCollectionAndDocs('collections', collectionsArr.map(
//       //     ({title, items}) => ({title, items})
//       //   )
//       // );
//       // observer pattern observer(next(), err(), complete());
//     // }, error => console.log(error));
//     const { checkUserSession } = this.props;
//     checkUserSession();
//   }

//   componentWillUnmount() {
//     this.unsubscribeFromAuth();
//   }

//   render() {
//     const { currentUser } = this.props;

//     return (
//       <div>
//         <Header/>
//         <Switch>
//           <Route exact path="/" component={HomePage} />
//           <Route exact path="/shop" component={Shop} />
//           <Route exact path="/checkout" component={CheckoutPage} />
          
//           {/* by render we decide what comp to render and show */}
//           <Route exact path="/signin" 
//             render={()=>
//               currentUser 
//               ? (<Redirect to='/'/>) 
//               : (<SignPage/>)
//             } 
//           />
          
//         </Switch>
//       </div>
//     );
//   }
// }


// comp => dispatch action => saga middle => do stuff => saga middle => reducer

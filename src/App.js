import { useSelector, useDispatch } from "react-redux";
import { Fragment, useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { uiActions } from "./store/ui-slice";
import Notification from "./components/UI/Notification";
import { sendCartData } from "./store/cart-slice";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.ui.showCart);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  // useEffect(() => {
  //   const sendCartData = async () => {
  //     dispatch(
  //       uiActions.showNotification({
  //         status: "pending",
  //         title: "Sending...",
  //         message: "Sending cart data!",
  //       })
  //     );
  //     const response = await fetch(
  //       "https://redux-practice-f018a-default-rtdb.firebaseio.com/cart.json",
  //       {
  //         method: "PUT",
  //         body: JSON.stringify(cart),
  //       }
  //     );
  //     if (!response.ok) {
  //       throw new Error("Sending cart data failed.");
  //     }
  //     dispatch(
  //       uiActions.showNotification({
  //         status: "success",
  //         title: "Success!",
  //         message: "Sent cart data successfully!",
  //       })
  //     );
  //   };
  //   if (isInitial) {
  //     isInitial = false;
  //     return;
  //   }
  //   sendCartData().catch((error) => {
  //     dispatch(
  //       uiActions.showNotification({
  //         status: "error",
  //         title: "Error!",
  //         message: "Sending cart data failed!",
  //       })
  //     );
  //   });
  // }, [cart, dispatch]);

  useEffect(() => {
    if(isInitial) {
      isInitial = false;
      return;
    }
    dispatch(sendCartData(cart))

  }, [cart, dispatch]);
  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {show && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;

// npm install firebase
/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANOyYuGm3nPIXfxrIPu0WAv0J639ZX_k8",
  authDomain: "redux-practice-f018a.firebaseapp.com",
  projectId: "redux-practice-f018a",
  storageBucket: "redux-practice-f018a.appspot.com",
  messagingSenderId: "875616514184",
  appId: "1:875616514184:web:dad19000a70ed24213af3d",
  measurementId: "G-5MXY237F5J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 
*/

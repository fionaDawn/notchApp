import {
    Routes as Switch,
    Route
} from "react-router-dom";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import ProductGallery from "../pages/ProductGallery";
import PrivateRoute from "./Layout";

// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.
const Router = () => {
    //   A <Switch> looks through all its children <Route>
    //   elements and renders the first one whose path
    //   matches the current URL. Use a <Switch> any time
    //   you have multiple routes, but you want only one
    //   of them to render at a time

    return (
        <Switch>
            <Route path="/"
                element={<PrivateRoute><ProductGallery /></PrivateRoute>} />
            <Route path="/login"
                element={<Login />} />
            <Route path="/cart"
                element={<PrivateRoute><Cart /></PrivateRoute>} />
            <Route path="/checkout"
                element={<PrivateRoute><Checkout /></PrivateRoute>} />
        </Switch>
    );
}

export default Router;
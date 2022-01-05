import { Button, Chip } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { selectProduct } from "../reducerSlices/productReducer";

const useStyles = makeStyles(() => ({
    // Styling material components
    root: {
        width: "100%",
        minHeight: "100vh",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
}));

const PrivateRoute = ({ children, ...rest }) => {
    const classes = useStyles();
    const location = useLocation();
    const navigate = useNavigate();
    const product = useSelector(selectProduct)

    if (!localStorage.getItem('notchToken')) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return <div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>

            <Chip label={`Cart Items: ${product.cartItems}`} />
            <Button onClick={() => navigate("/login")}>Logout</Button>
        </div>


        <div className={classes.root}>{children}</div>
    </div>;
}

export default PrivateRoute;
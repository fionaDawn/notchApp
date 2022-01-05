import { Button, Paper, Typography } from "@mui/material";
import CartIcon from '@mui/icons-material/AddShoppingCart';
import { makeStyles } from '@mui/styles';
import { useDispatch } from "react-redux";
import { addToCart } from "../reducerSlices/productReducer";

const useStyles = makeStyles(() => ({
    item: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: '1rem'
    }
}));

const ProductItem = ({ product }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const addCart = () => {
        dispatch(addToCart(product))
    }
    return <Paper className={classes.item}>
        <Typography variant="h6" gutterBottom component="div">
            {product.name}
        </Typography>
        <Typography variant="subtitle1" gutterBottom component="div">
            {product.description}
        </Typography>
        <Button data-testid={`btn-${product.name}`} variant="contained" startIcon={<CartIcon />} onClick={addCart}>
            Add to Cart
        </Button>
    </Paper>
}

export default ProductItem;
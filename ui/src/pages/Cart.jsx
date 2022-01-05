import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectProduct, updateCartQuantity } from "../reducerSlices/productReducer";

const Cart = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const product = useSelector(selectProduct);

    const updateQty = (e) => {
        dispatch(updateCartQuantity(e.target.name, e.target.value))
    }

    const generateRow = (item) => {
        const { name, SKU } = item.product;
        const { quantity } = item;
        return { name, SKU, quantity };
    }

    const rows = Object.values(product.cart).map(item => generateRow(item))


    return Object.keys(product.cart).length > 0 ? <div>
        <div style={{ display: "flex", flexDirection: "column", padding: "3rem", alignItems: "center" }}>
            <TableContainer component={Paper} >
                <Table aria-label="spanning table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" colSpan={3}>
                                <Typography variant="h5">Cart</Typography>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Qty.</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell>{row.name}</TableCell>
                                <TableCell align="right">
                                    <TextField
                                        name={row.SKU.toString()}
                                        label="Number"
                                        type="number"
                                        defaultValue={row.quantity}
                                        onChange={updateQty}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        InputProps={{ inputProps: { min: 0 } }}
                                    /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Button variant="contained" onClick={() => navigate("/checkout")}>
                Checkout
            </Button>
        </div>
    </div> : <Typography variant="h1">Cart is Empty!</Typography>
}

export default Cart;
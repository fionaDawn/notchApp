import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart, selectProduct } from "../reducerSlices/productReducer";

const Checkout = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const placeOrder = () => {
        alert("Order Placed!")
        dispatch(clearCart())
    }
    const product = useSelector(selectProduct);

    const TAX_RATE = 0.07;

    const formatCurrency = (num) => `${num.toFixed(2)}`;

    const generateRow = (item) => {
        const { price: productPrice, name } = item.product;
        const { quantity } = item;
        const price = quantity * productPrice;
        return { name, quantity, productPrice, price };
    }

    const subtotal = (rows) => rows.map(({ price }) => price).reduce((sum, i) => sum + i, 0);

    const rows = Object.values(product.cart).map(item => generateRow(item))

    const invoiceSubtotal = subtotal(rows);
    const invoiceTaxes = TAX_RATE * invoiceSubtotal;
    const invoiceTotal = invoiceTaxes + invoiceSubtotal;



    return Object.keys(product.cart).length > 0 ? <div>
        <div style={{ display: "flex", flexDirection: "column", padding: "3rem", alignItems: "center" }}>
            <Typography variant="h5">Checkout</Typography>
            <TableContainer component={Paper} >
                <Table style={{ minWidth: 350 }} aria-label="spanning table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" colSpan={3}>
                                Details
                            </TableCell>
                            <TableCell align="right">Price</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Qty.</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Sum</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell>{row.name}</TableCell>
                                <TableCell align="right">{row.quantity}</TableCell>
                                <TableCell align="right">{row.productPrice}</TableCell>
                                <TableCell align="right">{formatCurrency(row.price)}</TableCell>
                            </TableRow>
                        ))}

                        <TableRow>
                            <TableCell rowSpan={3} />
                            <TableCell colSpan={2}>Subtotal</TableCell>
                            <TableCell align="right">{formatCurrency(invoiceSubtotal)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Tax</TableCell>
                            <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
                            <TableCell align="right">{formatCurrency(invoiceTaxes)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}>Total</TableCell>
                            <TableCell data-testid="total-label" align="right">{formatCurrency(invoiceTotal)}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Button variant="contained" onClick={placeOrder}>
                Place Order
            </Button>
        </div>
    </div> : <div>
        <Typography variant="h1">Cart is Empty!</Typography>
        <Button onClick={() => navigate("/")}>View Products</Button>
    </div>
}

export default Checkout;
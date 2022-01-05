import { Grid } from '@mui/material';
import ProductItem from './ProductItem';
const ProductGrid = ({ list }) => {
    return <div style={{ margin: '4rem' }}>
        <Grid container spacing={2} style={{ width: "100%" }}>
            {list.map(product => <Grid key={`grid_${product.name}`} item xs={6}>
                <ProductItem product={product} />
            </Grid>)}
        </Grid>
    </div >
}

export default ProductGrid;
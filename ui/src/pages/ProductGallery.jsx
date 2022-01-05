import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductGrid from '../components/ProductGrid';
import SearchBar from '../components/SearchBar';
import { getAllProductsAsync, selectProduct } from "../reducerSlices/productReducer";
import { Typography } from '@mui/material';

const ProductGallery = () => {
    const dispatch = useDispatch();
    const [productList, setProductList] = useState([]);

    const product = useSelector(selectProduct);

    const getProducts = () => {
        dispatch(getAllProductsAsync())
    }

    useEffect(() => {
        getProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        setProductList(product.products)
    }, [product.products])

    return <>
        <Typography variant="h4" gutterBottom>Product Gallery</Typography>
        <SearchBar />
        <ProductGrid list={productList} />
    </>
}

export default ProductGallery;
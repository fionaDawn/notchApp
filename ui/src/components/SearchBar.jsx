import { Button, IconButton, InputBase, Paper } from '@mui/material';
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { getAllProductsAsync } from '../reducerSlices/productReducer';
import { useDispatch } from 'react-redux';
import CartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ defaultText }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [searchText, setSearchText] = useState(defaultText || "");

    const handleChange = () => (event) => {
        setSearchText(event.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault()
        dispatch(getAllProductsAsync(searchText))
    }
    return <div style={{ display: "flex", justifyContent: "space-between", width: "90%" }}>
        <Paper
            component="form"
            onSubmit={handleSearch}
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        >
            <InputBase
                data-testid="search-input"
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search product names"
                inputProps={{
                    'aria-label': 'search product names',
                    value: searchText,
                    onChange: handleChange()
                }}
            />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>

        <Button variant="contained" startIcon={<CartIcon />} onClick={() => navigate("/cart")}>
            View Cart
        </Button>
    </div>
}

export default SearchBar;

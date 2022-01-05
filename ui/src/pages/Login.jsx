import { Box, Button, Container, CssBaseline, Grid, Link, TextField, Typography } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate();
    const login = () => {
        localStorage.setItem("notchToken", "hi")
        navigate("/")
    }

    const notSupported = () => {
        alert("Feature not supported yet!")
    }

    useEffect(() => {
        if (localStorage.getItem("notchToken")) localStorage.removeItem("notchToken")
    }, [])

    return <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            <Box component="form" onSubmit={login} noValidate sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                <Button
                    data-testid="login-btn"
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Sign In
                </Button>
                <Grid container>
                    <Grid item xs>
                        <Link href="#" variant="body2" onClick={notSupported}>
                            Forgot password?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="#" variant="body2" onClick={notSupported}>
                            {"Don't have an account? Sign Up"}
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    </Container>
}

export default Login;
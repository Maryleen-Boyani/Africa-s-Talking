import { Grid, Paper, Typography, TextField, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function SimpleContainer() {
  const paperStyle = {
    padding: "30px 20px",
    width: "300px",
    margin: "100px auto",
  };

  const navigate = useNavigate();

  function handleClick() {
    navigate("/volunteer");
  }

  return (
    <Grid container sx={{ gap: 2 }} id="registration">
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Typography variant="h4">Sign Up</Typography>
          <Typography variant="body2">
            Fill in the form below to create an account
          </Typography>
        </Grid>

        <TextField
          id="standard-basic"
          label="Name"
          fullWidth
          variant="standard"
          placeholder="Enter your name"
        />
        <TextField
          id="standard-basic"
          label="Email Address"
          fullWidth
          variant="standard"
          placeholder="Enter your email address"
        />
        <TextField
          id="standard-basic"
          label="Password"
          fullWidth
          variant="standard"
          type="password"
          autoComplete="current-password"
        />
        <TextField
          id="standard-basic"
          label="Confirm Password"
          fullWidth
          type="password"
          variant="standard"
        />
        <Box
          sx={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Button
            id="btn"
            variant="contained"
            fullWidth
            sx={{ m: 2 }}
            onClick={handleClick}
          >
            Sign Up
          </Button>
        </Box>
      </Paper>

      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Typography variant="h4">Log in</Typography>
          <Typography variant="body2">Log in to your account</Typography>
        </Grid>

        <TextField
          id="standard-basic"
          label="Email Address"
          fullWidth
          variant="standard"
          placeholder="Enter your email address"
        />
        <TextField
          id="standard-basic"
          label="Password"
          fullWidth
          variant="standard"
          type="password"
          autoComplete="current-password"
        />
        <Box
          sx={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Button
            variant="contained"
            fullWidth
            sx={{ m: 2 }}
            onClick={handleClick}
          >
            Log in
          </Button>
        </Box>
      </Paper>
    </Grid>
  );
}

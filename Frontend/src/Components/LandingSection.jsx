import {
  Typography,
  Grid,
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

// Desc: Landing section of the website

export default function LandingSection() {
  return (
    <>
      <section id="home">
        <Box sx={{ height: "80vh", bgcolor: "black" }}>
          <Grid align="center" sx={{ margin: "20px" }}>
            <Typography variant="h2" sx={{ color: "#fff", padding: "60px" }}>
              Welcome to Activated <br /> Operations
            </Typography>
            <Typography variant="h5" sx={{ color: "white" }}>
              Where you find help easily
            </Typography>
          </Grid>
        </Box>
      </section>
      <Box
        sx={{
          padding: "5px",
          marginTop: "-130px",
          marginLeft: "30px",
          marginRight: "30px",
          display: "flex",
          gap: 4,
          justifyContent: "center",
          zIndex: 2500,
        }}
      >
        {/*-----------------Card 1--------------------*/}
        <Card sx={{ minWidth: 275, margin: "30px" }}>
          <CardContent>
            <Typography variant="caption" sx={{ fontSize: 18 }} gutterBottom>
              Emergency Calls
            </Typography>
            <Typography sx={{ mb: 1.5 }}>Dial</Typography>
            <Typography variant="body2">0000000000</Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>

        {/*-----------------Card 2--------------------*/}
        <Card sx={{ minWidth: 275, height: "50%", margin: "30px" }}>
          <CardContent >
            <Typography sx={{ fontSize: 18 }} gutterBottom>
              Volunteers
            </Typography>
            <Typography sx={{ mb: 1.5 }}>Register to be one</Typography>
            <Typography variant="body2">Click to register</Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>

        {/*-----------------Card 3--------------------*/}
        <Card sx={{ minWidth: 275, height: "50%", margin: "30px" }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} gutterBottom>
              Word of the Day
            </Typography>
            <Typography sx={{ mb: 1.5 }}>adjective</Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}

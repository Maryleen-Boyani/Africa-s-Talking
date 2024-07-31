import {
  Typography,
  Grid,
  Box,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import ChatBot from "react-simple-chatbot";

export default function LandingSection() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/registration");
  }

  const steps = [
    {
      id: "Greet",
      message: "Hello, Welcome to our website.Please enter your name",
      trigger: "waiting1",
    },
    {
      id: "waiting1",
      user: true,
      trigger: "Name",
    },
    {
      id: "Name",
      message: "Hi {previousValue}, what can I help you with today?",
      trigger: "waiting2",
    },
    {
      id: "waiting2",
      user: true,
      trigger: "Question",
    },
    {
      id: "Question",
      message: "Good Question! Let me get back to you in a while",
      trigger: "End",
    },
    {
      id: "End",
      message: "Thanks for visiting our website today.Have a lovely day.",
      end: true,
    },
  ];
  return (
    <>
      <section id="home">
        <Box
          sx={{
            height: "80vh",
            backgroundImage: 'url("/assets/medical.jpg")',
            backgroundSize: "cover",
          }}
        >
          <Grid align="center" sx={{ margin: "0 20px" }}>
            <Typography variant="h2" sx={{ color: "#1d79d3", padding: "60px" }}>
              Welcome to Activated <br /> Operations
            </Typography>
            <Typography variant="h5" sx={{ color: "#1d79d3" }}>
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
        <Card
          sx={{
            minWidth: 275,
            margin: "30px",
            bgcolor: "#2490eb",
            color: "white",
          }}
        >
          <CardContent>
            <CardMedia></CardMedia>
            <Typography variant="caption" sx={{ fontSize: 18 }} gutterBottom>
              For emergency calls
            </Typography>
            <br />
            <Typography sx={{ fontSize: 18 }} variant="caption">
              Dial:
            </Typography>
            <br />
            <Typography sx={{ fontSize: 18, marginLeft: 6 }} variant="caption">
              07-123-456-78
            </Typography>{" "}
            <br />
            <Typography sx={{ fontSize: 18, marginLeft: 6 }} variant="caption">
              USSD: *384*93150#
            </Typography>
          </CardContent>
        </Card>

        {/*-----------------Card 2--------------------*/}
        <Card
          sx={{
            minWidth: 275,
            height: "50%",
            margin: "30px",
            bgcolor: "#14467b",
            color: "white",
          }}
        >
          <CardContent>
            <Typography sx={{ fontSize: 18 }} gutterBottom>
              Volunteers
            </Typography>
            <Typography sx={{ fontSize: 18 }}>Register to be one</Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              sx={{ color: "white", border: 1, fontSize: 18, margin: "0 auto" }}
              onClick={handleClick}
            >
              REGISTER
            </Button>
          </CardActions>
        </Card>

        <ChatBot steps={steps} floating={true} />
      </Box>
    </>
  );
}

import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function AppBar() {
  const handleItemClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navigate = useNavigate();

  function handleRegistration() {
    navigate("/registration");
  }
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        margin: "0",
        padding: "0px",
      }}
    >
      <Box>
        <Typography variant="h4" sx={{ marginLeft: 2, color: "#1d79d3" }}>
          ActivatedOps
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button onClick={() => handleItemClick("home")}>
          <Typography variant="h6">Home</Typography>
        </Button>
        <Button onClick={() => handleItemClick("about")}>
          <Typography variant="h6">About</Typography>
        </Button>
        <Button onClick={handleRegistration}>
          <Typography variant="h6">Register</Typography>
        </Button>
      </Box>
    </Box>
  );
}

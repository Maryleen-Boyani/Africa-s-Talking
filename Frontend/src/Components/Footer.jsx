import { Box, Typography, Button } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        
        display: "flex",
        justifyContent: "space-between",
        margin: "10px",
        padding: "20px",
      }}
    >
      <Box>
        <Typography variant="h6">Your Logo</Typography>
      </Box>
      <Box
        sx={{
          bgcolor: "white",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button>
          <Typography variant="h6">Home</Typography>
        </Button>
        <Button>
          <Typography variant="h6">About</Typography>
        </Button>
        <Button>
          <Typography variant="h6">Help</Typography>
        </Button>
        <Button>
          <Typography variant="h6">Registration</Typography>
        </Button>
      </Box>
    </Box>
  );
}

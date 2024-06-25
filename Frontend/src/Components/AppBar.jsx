import { Box, Button, Typography } from "@mui/material";

export default function AppBar() {
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
        <Typography variant="h6">Your Logo</Typography>
      </Box>
      <Box
        sx={{
          
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

import { Box, Grid, Typography } from "@mui/material";

export default function About() {
  return (
    <section id="about">
      <Box sx={{ bgcolor: "#2490eb" }}>
        <Grid align="center">
          <Typography variant="h3" sx={{ color: "white" }}>
            About us
          </Typography>
        </Grid>
        <Box sx={{ display: "flex", padding: "30px", color: "white" }}>
          <Box
            component="img"
            src="/assets/medic.jpg"
            alt="Loading..."
            sx={{
              margin: "20px",
              display: "flex",
              borderRadius: 3,
              justifyContent: "left",
              minWidth: "40%",
            }}
          />

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              minWidth: "20%",
              margin: "20px",
            }}
          >
            <Typography variant="subtitle1">
              Our service is dedicated to bridging the healthcare gap in rural
              areas by providing quick and reliable access to medical services.
              We leverage innovative technology and a network of healthcare
              professionals to ensure that even the most remote communities
              receive timely medical attention. Whether through telemedicine
              consultations, mobile health units, or connecting patients with
              nearby healthcare facilities, our mission is to make quality
              healthcare accessible to everyone, no matter where they live.
            </Typography>
          </Box>
        </Box>
      </Box>
    </section>
  );
}

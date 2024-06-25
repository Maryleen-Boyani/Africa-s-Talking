import { Box, Grid, Typography } from "@mui/material";

export default function About() {


  return (
    <section id="about">
         <Box sx={{ bgcolor: "gray"}} >
            <Grid align="center">
              <Typography variant="h3" sx={{ color: "white" }}>
                About us
              </Typography>
            </Grid>
            <Box sx={{ display: "flex", padding: "30px" }}>
              <Box
                component="img"
                src="/assets/Code.jpg"
                alt="Loading..."
                sx={{
                  margin: "20px",
                  display: "flex",
                  border: 2,
                  borderRadius: 3,
                  justifyContent: "left",
                  minWidth: "40%",
                }}
              />

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  minWidth: "30%",
                  margin: "20px",
                }}
              >
                <Typography>
                  Pillars of Hope Children&apos;s Home is non-profit organization
                  registered under the society&apos;s act of Kenya 1963.It started on
                  2013 and was registered with Registrar of Societies on 26th August,
                  2016 with Reg No.SOC/73449.The organization&apos;s main mandate is
                  to ensure that the vulnerable group access basic needs.POHCH
                  achieves this objective through projects such as education, food,
                  shelter and medical care.POHCH has a population of seventy five
                  children aging between one month to twenty five years old.Thirty
                  five girls and forty boys.POHCH operates on donations
                </Typography>
              </Box>
              
            </Box>
          </Box>
    </section>
    
  );
}

import React from "react";
import { Box, Container, Typography, Grid, Link, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#222",
        color: "white",
        py: 4,
        mt: 5,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Y K Freight Ways Inc
            </Typography>
            <Typography variant="body2">
              Reliable logistics solutions tailored to your needs.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Quick Links
            </Typography>
            <Link href="/" color="inherit" underline="none" display="block" sx={{ mb: 1 }}>
              Home
            </Link>
            <Link href="/services" color="inherit" underline="none" display="block" sx={{ mb: 1 }}>
              Services
            </Link>
            <Link href="/about" color="inherit" underline="none" display="block" sx={{ mb: 1 }}>
              {/* About Us */}
            </Link>
            <Link href="/contact" color="inherit" underline="none" display="block">
              {/* Contact Us */}
            </Link>
          </Grid>

          {/* Social Media & Contact */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Connect With Us
            </Typography>
            <Box>
              <IconButton href="https://www.facebook.com/people/YK-Freight-Ways/100080332847213/" target="_blank" sx={{ color: "white" }}>
                <FacebookIcon />
              </IconButton>
              <IconButton href="https://twitter.com" target="_blank" sx={{ color: "white" }}>
                <TwitterIcon />
              </IconButton>
              <IconButton href="https://linkedin.com" target="_blank" sx={{ color: "white" }}>
                <LinkedInIcon />
              </IconButton>
              <IconButton href="https://instagram.com" target="_blank" sx={{ color: "white" }}>
                <InstagramIcon />
              </IconButton>
            </Box>
            <Typography variant="body2" sx={{  }}>
              {/*  123 Logistics Street, City, Country */}
            </Typography>
            <Typography variant="body2"> 
                {/* support@ykfreight.com */}
                </Typography>
            <Typography variant="body2">
                 {/* +1 234 567 890 */}
                 </Typography>
          </Grid>
        </Grid>

        {/* Copyright Section */}
        <Box sx={{ textAlign: "center", my: 3, mb:3, borderTop: "1px solid gray", pt: 2 }}>
          <Typography variant="body2">© {new Date().getFullYear()} Y K Freight Ways Inc. All Rights Reserved.</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

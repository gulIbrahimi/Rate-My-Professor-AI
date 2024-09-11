"use client";

import "@fontsource/oswald/200.css";
import "@fontsource/oswald/400.css";
import "@fontsource/oswald/700.css";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/system";
import { Github, Linkedin, Mail, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Navbar = styled(AppBar)({
  backgroundColor: "#2C3E50",
  width: "100%",
  margin: 0,
  padding: 0,
  fontFamily: "'Oswald', sans-serif",
});

const HeroSection = styled(Box)({
  width: "100%",
  height: "100vh",
  backgroundColor: "#34495E",
  color: "#FFFFFF",
  textAlign: "center",
  margin: 0,
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "'Oswald', sans-serif",
});

const AboutSection = styled(Box)({
  padding: "50px",
  boxSizing: "border-box",
});

const AboutContent = styled(Box)({
  textAlign: "left",
});

const AboutImage = styled("img")({
  width: "100%",
  height: "auto",
});

const HowItWorksSection = styled(Box)({
  backgroundColor: "#ECF0F1",
  padding: "50px 0",
  textAlign: "center",
  width: "100%",
  margin: 0,
  boxSizing: "border-box",
});

const CardContainer = styled(Box)({
  perspective: "1000px",
  margin: "20px",
  cursor: "pointer",
  width: "300px",
  height: "200px",
  position: "relative",
});

const Card = styled(Box)({
  width: "100%",
  height: "100%",
  position: "relative",
  transformStyle: "preserve-3d",
  transition: "transform 0.6s",
  "&:hover": {
    transform: "rotateY(180deg)",
  },
});

const CardSide = styled(Box)({
  position: "absolute",
  width: "100%",
  height: "100%",
  backfaceVisibility: "hidden",
  borderRadius: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
});

const CardFront = styled(CardSide)({
  backgroundColor: "#2C3E50",
  color: "white",
});

const CardBack = styled(CardSide)({
  backgroundColor: "#DEA204",
  color: "white",
  transform: "rotateY(180deg)",
});

const NumberCircle = styled(Box)({
  width: "40px",
  height: "40px",
  backgroundColor: "white",
  color: "#2C3E50",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold",
  marginBottom: "10px",
});

const Footer = styled(Box)({
  backgroundColor: "#2C3E50",
  color: "white",
  padding: "24px 30px",
  textAlign: "center",
  width: "100%",
  boxSizing: "border-box",
});

const FooterLink = styled("a")({
  color: "#2C3E50",
  backgroundColor: "white",
  padding: "8px",
  borderRadius: "50%",
  display: "inline-block",
  transition: "background-color 0.3s",
  "&:hover": {
    backgroundColor: "#DEA204",
  },
});

export default function Home() {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <Navbar position="fixed" sx={{ width: "100%" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: isMobile ? "0 6px" : "0 40px",
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontFamily: "'Oswald', sans-serif",
              fontWeight: "500",
              color: "#F1B22A",
            }}
          >
            ProfGuide AI
          </Typography>

          {isMobile ? (
            <>
              <IconButton
                edge="end"
                color="inherit"
                onClick={toggleMenu}
                sx={{
                  padding: "20px",
                }}
              >
                <Menu />
              </IconButton>
              <Drawer
                anchor="right"
                open={menuOpen}
                onClose={closeMenu}
                sx={{
                  "& .MuiDrawer-paper": {
                    backgroundColor: "#2C3E50",
                    color: "white",
                  },
                }}
              >
                <List>
                  <ListItem
                    button
                    onClick={closeMenu}
                    component={Link}
                    href="#home"
                  >
                    <ListItemText primary="Home" />
                  </ListItem>
                  <ListItem
                    button
                    onClick={closeMenu}
                    component={Link}
                    href="#about"
                  >
                    <ListItemText primary="About" />
                  </ListItem>
                  <ListItem
                    button
                    onClick={closeMenu}
                    component={Link}
                    href="#working"
                  >
                    <ListItemText primary="Working" />
                  </ListItem>
                  <ListItem
                    button
                    onClick={closeMenu}
                    component={Link}
                    href="/chat"
                  >
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#DEA204",
                        "&:hover": { backgroundColor: "#A57801" },
                        color: "#ffffff",
                        fontFamily: "'Oswald', sans-serif",
                        fontWeight: "500",
                        width: "100%",
                      }}
                    >
                      Let&apos;s Start
                    </Button>
                  </ListItem>
                </List>
              </Drawer>
            </>
          ) : (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Link href="#home" passHref>
                <Button
                  sx={{
                    color: "#ffffff",
                    fontFamily: "'Oswald', sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    marginRight: "20px",
                  }}
                >
                  Home
                </Button>
              </Link>
              <Link href="#about" passHref>
                <Button
                  sx={{
                    color: "#ffffff",
                    fontFamily: "'Oswald', sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    marginRight: "20px",
                  }}
                >
                  About
                </Button>
              </Link>
              <Link href="#working" passHref>
                <Button
                  sx={{
                    color: "#ffffff",
                    fontFamily: "'Oswald', sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    marginRight: "20px",
                  }}
                >
                  Working
                </Button>
              </Link>
              <Link href="/chat" passHref>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#DEA204",
                    "&:hover": { backgroundColor: "#A57801" },
                    color: "#ffffff",
                    fontFamily: "'Oswald', sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    marginLeft: "auto",
                  }}
                >
                  Let&apos;s Start
                </Button>
              </Link>
            </Box>
          )}
        </Toolbar>
      </Navbar>

      {/* Hero Section */}

      <HeroSection id="home">
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: "700",
            fontSize: { xs: "2.5rem", md: "3.75rem" },
          }}
        >
          Find Your Ideal <span style={{ color: "#DEA204" }}>Professor</span>{" "}
          with AI
        </Typography>
        <Typography
          variant="h5"
          component="p"
          gutterBottom
          sx={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: "400",
            fontSize: { xs: "1.25rem", md: "1.5rem" },
          }}
        >
          Get personalized professor recommendations tailored to your needs.
        </Typography>
        <Link href="/chat">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#DEA204",
              "&:hover": { backgroundColor: "#A57801" },
              color: "#ffffff",
              mt: 2,
              fontFamily: "'Oswald', sans-serif",
              fontWeight: "500",
              fontSize: { xs: "14px", md: "16px" },
            }}
          >
            Ask the AI Assistant
          </Button>
        </Link>
      </HeroSection>

      {/* About Section */}
      <AboutSection id="about">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <AboutContent>
              <Typography
                variant="h4"
                component="h2"
                gutterBottom
                sx={{
                  fontFamily: "'Oswald', sans-serif",
                  fontWeight: "700",
                  color: "#34495E",
                }}
              >
                About ProfGuide AI
              </Typography>
              <Typography
                variant="body1"
                component="p"
                gutterBottom
                sx={{
                  fontFamily: "'Oswald', sans-serif",
                  fontWeight: "500",
                  color: "#565656",
                }}
              >
                ProfGuide AI is an innovative, AI-powered assistant specifically
                designed to guide students in finding the ideal professors for
                their academic journey. Our platform is built on cutting-edge
                technology that ensures personalized, accurate, and reliable
                recommendations tailored to your unique preferences and
                requirements.
                <br />
                <br />
                Whether you’re searching for a professor with a strong teaching
                style, deep expertise in a particular subject, or someone highly
                rated by fellow students, ProfGuide AI has you covered. The
                platform leverages advanced Retrieval-Augmented Generation (RAG)
                technology to sift through a vast database of professor reviews,
                ratings, and feedback. This allows it to generate
                recommendations that are not just relevant but also deeply
                insightful, helping you make informed decisions.
                <br />
                <br />
                ProfGuide AI is more than just a tool; it’s your academic
                companion. The AI considers various factors such as teaching
                methodologies, course content, student engagement, and overall
                ratings to ensure you get the best match.
              </Typography>
            </AboutContent>
          </Grid>
          <Grid item xs={12} md={6}>
            <AboutImage
              src="https://img.freepik.com/free-vector/professor-concept-illustration_114360-6761.jpg"
              alt="Professor Illustration"
            />
          </Grid>
        </Grid>
      </AboutSection>

      {/* How It Works Section */}
      <HowItWorksSection id="working">
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: "700",
            color: "#34495E",
          }}
        >
          How It Works
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item>
            <CardContainer>
              <Card>
                <CardFront>
                  <NumberCircle>1</NumberCircle>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      fontFamily: "'Oswald', sans-serif",
                      fontWeight: "500",
                    }}
                  >
                    Ask a Question
                  </Typography>
                </CardFront>
                <CardBack>
                  <Typography
                    variant="body1"
                    component="p"
                    sx={{
                      fontFamily: "'Oswald', sans-serif",
                      fontWeight: "500",
                      fontSize: "20px",
                    }}
                  >
                    Describe what you&apos;re looking for in a professor.
                  </Typography>
                </CardBack>
              </Card>
            </CardContainer>
          </Grid>
          <Grid item>
            <CardContainer>
              <Card>
                <CardFront>
                  <NumberCircle>2</NumberCircle>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      fontFamily: "'Oswald', sans-serif",
                      fontWeight: "500",
                    }}
                  >
                    Get Recommendations
                  </Typography>
                </CardFront>
                <CardBack>
                  <Typography
                    variant="body1"
                    component="p"
                    sx={{
                      fontFamily: "'Oswald', sans-serif",
                      fontWeight: "500",
                      fontSize: "20px",
                    }}
                  >
                    Our AI assistant will present the top three matches based on
                    your query.
                  </Typography>
                </CardBack>
              </Card>
            </CardContainer>
          </Grid>
          <Grid item>
            <CardContainer>
              <Card>
                <CardFront>
                  <NumberCircle>3</NumberCircle>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      fontFamily: "'Oswald', sans-serif",
                      fontWeight: "500",
                    }}
                  >
                    Make an Informed Choice
                  </Typography>
                </CardFront>
                <CardBack>
                  <Typography
                    variant="body1"
                    component="p"
                    sx={{
                      fontFamily: "'Oswald', sans-serif",
                      fontWeight: "500",
                      fontSize: "20px",
                    }}
                  >
                    Review the recommendations and choose the best professor for
                    you.
                  </Typography>
                </CardBack>
              </Card>
            </CardContainer>
          </Grid>
        </Grid>
      </HowItWorksSection>

      {/* Footer */}
      <Footer>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          sx={{
            flexDirection: { xs: "column", md: "row" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Grid item xs={12} md={6}>
            <Typography variant="body1">
              &copy; {new Date().getFullYear()} FlashForge Pro. All rights
              reserved.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} textAlign={{ xs: "center", md: "right" }}>
            <Box
              display="flex"
              justifyContent={{ xs: "center", md: "flex-end" }}
              mt={{ xs: 2, md: 0 }}
            >
              <FooterLink
                href="https://www.linkedin.com/in/maheeenasad/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={24} />
              </FooterLink>
              <Box mx={2}>
                <FooterLink
                  href="https://github.com/Maheeenasad"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={24} />
                </FooterLink>
              </Box>
              <FooterLink href="mailto:maheenasad19@gmail.com">
                <Mail size={24} />
              </FooterLink>
            </Box>
          </Grid>
        </Grid>
      </Footer>
    </>
  );
}
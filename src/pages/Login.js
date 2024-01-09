import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Container, Typography, Link, Box, Divider } from "@mui/material";
import styled from "@emotion/styled";
import LoginForm from "../components/LoginForm";
import SocialAuth from "../components/SocialAuth";
import Logo from "../components/Logo";
import { motion } from "framer-motion";
import { LoadingButton } from "@mui/lab";

const RootStyle = styled("div")({
  background: "#f2f2f2",
  height: "100vh",
  maxWidth: "100%",
  display: "flex",
  flexDirection: "row",
  flex: "1"
  // alignItems: "center",
});

const HeadingStyle = styled(Box)({ 
  textAlign: "left",
});

const ContentStyle = styled("div")({
  maxWidth: "100vh",
  padding: 25,
  flexDirection: "column",
  margin: "auto",
  display: "flex",
//   background: "#fff",
//   alignItems: "center",
//   justifyContent: "center",
});

let easing = [0.6, -0.05, 0.01, 0.99];
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};


const FlexStyle = styled("div")({
    display: "flex",
    justifyContent: "center",
    flex: 1,
});



const LeftColumnComponent = ({ setAuth }) => {
  return (
      <ContentStyle>
        <HeadingStyle component={motion.div} {...fadeInUp}>
          <Typography sx={{ color: "#474bca", mb: 5 , fontFamily: "Itim-Regular, Helvetica", fontSize: '30px', fontWeight: '500'}}>
            Taisiupoly
          </Typography>
        </HeadingStyle>


        <HeadingStyle component={motion.div} {...fadeInUp}>
          <Typography sx={{ color: "black", mb: 5 , fontFamily: "Inter-Bold, Helvetica", fontSize: '36px', fontWeight: '700'}}>
            Login Now
          </Typography>
        </HeadingStyle>


        <HeadingStyle component={motion.div} {...fadeInUp}>
          <Typography sx={{ color: "black", mb: 5 , fontFamily: "Inter-Regular, Helvetica", fontSize: '20px', fontWeight: '200'}}>
            Hi, Welcome back!
          </Typography>
        </HeadingStyle>

        <Box component={motion.div} {...fadeInUp}>
          <SocialAuth />
        </Box>

        <Divider sx={{ my: 3 }} component={motion.div} {...fadeInUp}>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            OR
          </Typography>
        </Divider>

        <LoginForm setAuth={setAuth} />

        <Typography
          component={motion.p}
          {...fadeInUp}
          variant="body2"
          align="center"
          sx={{ mt: 3 }}
        >
          Don’t have an account?{" "}
          <Link variant="subtitle2" component={RouterLink} to="/signup">
            Sign up
          </Link>
        </Typography>
      </ContentStyle>
  );
};

let isSubmitting = false;
const RightColumnComponent = ({ setAuth }) => {
    return (
        <ContentStyle>
            <FlexStyle>
                <LoadingButton
                    size="large"
                    type="submit"
                    variant="contained"
                    loading={isSubmitting}
                    style = {{marginBottom: '20px'}}
                    >
                    {isSubmitting ? "loading..." : "Sign UP"}
                </LoadingButton>
            </FlexStyle>
            <FlexStyle>
                <img
                    src="assets/login/logoImage.png"  // Replace this with the actual URL of your image
                    alt="Description of the image"
                    style={{ maxWidth: "100%", height: "auto" }}
                    justifyContent="center"
                    margin = "auto"
                />
            </FlexStyle>
        </ContentStyle>
    );
  };


const Login = ({ setAuth }) => {
    return (
            // <Container maxWidth="sm">
                <RootStyle>
                        <FlexStyle>
                            <LeftColumnComponent setAuth={setAuth} />
                        </FlexStyle>
                        {/* <Divider sx={{ my: 3 }} component={motion.div} {...fadeInUp}>
                            <Typography variant="body2" sx={{ color: "text.secondary" }}>
                                OR
                            </Typography>
                        </Divider> */}
                        <FlexStyle>
                            <RightColumnComponent setAuth={setAuth} />
                        </FlexStyle>
                </RootStyle>
            // </Container>
    );
};

export default Login;

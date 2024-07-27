import React, { useState, useEffect } from "react";
import {
  Box,
  Stack,
  Card,
  CardContent,
  Typography,
  Button,
  IconButton,
  Link,
  Avatar,
} from "@mui/material";
import { styled } from "@mui/system";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import VideocamIcon from "@mui/icons-material/Videocam";
import PaymentsIcon from "@mui/icons-material/Payments";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";


const StickyBox = styled(Box)({
  position: "sticky",
  top: "30px",
  right: "0",
  paddingRight: "40px",
});

const EventCard = ({ data }) => {
  const calculateTimeLeft = () => {
    const eventDate = new Date("2034-07-31T06:00:00");
    const currentDate = new Date();
    const difference = eventDate - currentDate;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        d: Math.floor(difference / (1000 * 60 * 60 * 24)),
        h: Math.floor((difference / (1000 * 60 * 60)) % 24),
        m: Math.floor((difference / 1000 / 60) % 60),
        s: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]}
        {interval.toUpperCase()}
        {" : "}
      </span>
    );
  });

  return (
    <StickyBox>
      <Box>
        <Card variant="outlined" sx={{ maxWidth: 330, margin: "0 auto" }}>
          <CardContent>
            <Typography
              variant="h5"
              component="div"
              fontWeight={"bold"}
              fontSize={"28px"}
            >
              KonfHub Frontend Evaluation Task
            </Typography>
            <Box
              display="flex"
              alignItems="center"
              justifyContent={"space-between"}
              mt={2}
            >
              <Stack direction={"row"} ml={1}>
                <VideocamIcon />
                <Typography
                  variant="body2"
                  color="text.secondary"
                  ml={1}
                  fontSize={"17px"}
                >
                  Online
                </Typography>
              </Stack>
              <Stack direction={"row"}>
                <PaymentsIcon />
                <Typography
                  variant="body2"
                  color="text.secondary"
                  fontSize={"17px"}
                  ml={1}
                  mr={6}
                >
                  Paid
                </Typography>
              </Stack>
            </Box>
            <Typography
              variant="body1"
              fontSize={"17px"}
              color="text.primary"
              mt={2}
            >
              <b>Event Live Link </b>:{" "}
              <Link href="#">Open streaming website</Link>
            </Typography>
            <Typography
              variant="body2"
              color="text.primary"
              mt={1}
              fontSize={"17px"}
            >
              <b>Date</b>: Jul 31st, 2034 6:00 AM - Aug 31st, 2034 6:00 PM IST
            </Typography>
            <Typography variant="h6" component="div" mt={2}>
              EVENT STARTS IN
            </Typography>
            <Typography variant="h5" component="div" mt={1}>
              {timerComponents.length ? (
                <b>{timerComponents}</b>
              ) : (
                <span>
                  <b>Time's up!</b>
                </span>
              )}
            </Typography>{" "}
          </CardContent>
        </Card>
      </Box>
      <Box p={1} ml={4}>
        <Button
          variant="contained"
          fullWidth
          sx={{
            width: "355px",
            mt: 2,
            bgcolor: "black",
            textTransform: "none",
            fontSize: "19px",
            "&:hover": { bgcolor: "gray" },
          }}
        >
          Buy Now
        </Button>
        <Button
          variant="outlined"
          endIcon={<OpenInNewIcon />}
          fullWidth
          sx={{
            mt: 2,
            width: "355px",
            outlineColor: "black",
            color: "black",
            textTransform: "none",
            fontSize: "19px",
            borderColor: "black",
            "&:hover": { bgcolor: "gray" },
          }}
        >
          Official Website
        </Button>
      </Box>
      <Typography
        variant="h5"
        component="div"
        mt={2}
        ml={5}
        color="text.primary"
      >
        HOSTED BY
      </Typography>
      <Card
        sx={{
          width: "300px",
          p: 2,
          ml: 5,
        }}
      >
        <Stack direction={"row"} mt={2} mb={2}>
          <Avatar alt="Manjunath R" src={data.organiser_image_url} />

          <Typography variant="h5" component="div" ml={2}>
            <b>Manjunath R</b>
          </Typography>
        </Stack>
        <Typography variant="h6" color="text.secondary">
          This is the description of the organiser. You can get to know more
          about the organiser here.
        </Typography>
        <Typography variant="h6" color="text.primary" mt={3}>
          <b>Contact Us On</b>
        </Typography>
        <Stack direction={"row"} mt={1} spacing={0}>
          <IconButton
            component="a"
            href={data.organizer_facebook_url}
            target="_blank"
            rel="noopener"
          >
            <FacebookRoundedIcon
              sx={{
                bgcolor: "black",
                color: "white",
                width: "20px",
                height: "20px",
                borderRadius: "20px",
                p: "6px",
              }}
            />
          </IconButton>
          <IconButton
            component="a"
            href={data.organizer_twitter_url}
            target="_blank"
            rel="noopener"
          >
            <XIcon
              sx={{
                bgcolor: "black",
                color: "white",
                width: "20px",
                height: "20px",
                borderRadius: "20px",
                p: "6px",
              }}
            />{" "}
          </IconButton>
          <IconButton
            component="a"
            href={data.organizer_linkedin_url}
            target="_blank"
            rel="noopener"
          >
            <LinkedInIcon
              sx={{
                bgcolor: "black",
                color: "white",
                width: "20px",
                height: "20px",
                borderRadius: "20px",
                p: "6px",
              }}
            />
          </IconButton>

          <IconButton
            component="a"
            href={data.organizer_website_url}
            target="_blank"
            rel="noopener"
          >
            <LanguageIcon
              sx={{
                bgcolor: "black",
                color: "white",
                width: "20px",
                height: "20px",
                borderRadius: "20px",
                p: "6px",
              }}
            />
          </IconButton>

          <IconButton
            component="a"
            href={data.organizer_email_url}
            target="_blank"
            rel="noopener"
          >
            <MailOutlineIcon
              sx={{
                bgcolor: "black",
                color: "white",
                width: "20px",
                height: "20px",
                borderRadius: "20px",
                p: "6px",
              }}
            />
          </IconButton>

          <IconButton
            component="a"
            href={data.organizer_phone_url}
            target="_blank"
            rel="noopener"
          >
            <LocalPhoneIcon
              sx={{
                bgcolor: "black",
                color: "white",
                width: "20px",
                height: "20px",
                borderRadius: "20px",
                p: "6px",
              }}
            />
          </IconButton>
        </Stack>
      </Card>
    </StickyBox>
  );
};

export default EventCard;

import React from "react";
import { Card, CardContent, Stack, Typography, Box } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";

const SpeakerCard = ({ name, title, company, image }) => {
  return (
    <Box
      sx={{
        ":hover": {
          transform: "scale(1.05)",
        },
        transition: "transform 0.3s, box-shadow 0.3s",
      }}
    >
      <Card sx={{ maxWidth: 450, m: 2, p: 3 }}>
        <Box component="img" src={image} alt={name} width={"200px"} />
        <CardContent>
          <Typography variant="h6" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {company}
          </Typography>
          <Stack direction={"row"} mt={1} spacing={1}>
            <FacebookRoundedIcon
              sx={{
                bgcolor: "text.secondary",
                color: "white",
                width: "20px",
                height: "20px",
                borderRadius: "20px",
                p: "6px",
              }}
            />
            <XIcon
              sx={{
                bgcolor: "text.secondary",
                color: "white",
                width: "20px",
                height: "20px",
                borderRadius: "20px",
                p: "6px",
              }}
            />
            <LinkedInIcon
              sx={{
                bgcolor: "text.secondary",
                color: "white",
                width: "20px",
                height: "20px",
                borderRadius: "20px",
                p: "6px",
              }}
            />
            <LanguageIcon
              sx={{
                bgcolor: "text.secondary",
                color: "white",
                width: "20px",
                height: "20px",
                borderRadius: "20px",
                p: "6px",
              }}
            />
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SpeakerCard;

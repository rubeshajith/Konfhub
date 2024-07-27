import React, { useState } from "react";
import { Box, Typography, Grid, Drawer, Stack } from "@mui/material";
import SpeakerCard from "./SpeakerCard";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";

const speakers = [
  {
    name: "Bruce Wayne",
    title: "Chairman",
    company: "Wayne Enterprises",
    image:
      "https://dev-media.konfhub.com/speakers/2024/June/09/1717977337424-66d3d266-64c3-4c45-a4ec-f9288d96dbc8.jpg",
  },
  {
    name: "Dark Knight",
    title: "Batman",
    company: "Gotham",
    image:
      "https://dev-media.konfhub.com/speakers/2024/June/09/1717977466945-9da4f3da-047e-491b-83c3-6c2adc46223b.jpg",
  },
];

const Speakers = ({speakerRef}) => {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  const handleSpeakerClick = (speaker) => {
    setSelectedSpeaker(speaker);
  };

  const handleDrawerClose = () => {
    setSelectedSpeaker(null);
  };

  return (
    <Box mt={10} ml={7} ref={speakerRef}> 
      <Typography
        variant="h4"
        component="h2"
        mb={4}
        fontSize={"27px"}
        fontWeight={600}
      >
        THIS IS SPEAKER SECTION
      </Typography>
      <Typography
        variant="body"
        gutterBottom
        fontSize={"19px"}
        color={"text.secondary"}
      >
        This is the description for speakers section.
      </Typography>
      <Grid container spacing={2}>
        {speakers.map((speaker) => (
          <Grid
            item
            xs={12}
            md={6}
            key={speaker.name}
            onClick={() => handleSpeakerClick(speaker)}
          >
            <SpeakerCard {...speaker} />
          </Grid>
        ))}
      </Grid>
      <Drawer
        anchor="right"
        open={Boolean(selectedSpeaker)}
        onClose={handleDrawerClose}
      >
        <Box p={10} width="750px" role="presentation">
          {selectedSpeaker && (
            <>
              <Stack direction={"row"} spacing={8}>
                <img
                  src={selectedSpeaker.image}
                  alt={selectedSpeaker.name}
                  style={{ width: "200px" }}
                />
                <div>
                  <Typography mt={5} variant="h5" fontWeight={600}>
                    {selectedSpeaker.name}
                  </Typography>
                  <Typography mt={1} variant="body1">
                    {selectedSpeaker.title}
                  </Typography>
                  <Typography mt={1} variant="body1">
                    {selectedSpeaker.company}
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
                </div>
              </Stack>
              <Typography mt={5} fontSize={"20px"}>
                This is description for a speaker.
              </Typography>
            </>
          )}
        </Box>
      </Drawer>
    </Box>
  );
};

export default Speakers;

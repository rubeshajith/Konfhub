import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import WorkshopCard from "./WorkshopCard";

const workshop = [
  {
    title: "How to make more money",
    date: "Jun 11th, 2024 at 10:00 AM (IST)",
    image:
      "https://dev.konfhub.com/_next/image?url=https%3A%2F%2Fdev-media.konfhub.com%2Fsponsors%2F2024%2FJune%2F10%2F1717977949758-0e87f502-f5b9-4799-b857-623780fc1415.png&w=1920&q=75",
    speakers: [
      {
        name: "Bruce Wayne",
        image:
          "https://dev-media.konfhub.com/speakers/2024/June/09/1717977337424-66d3d266-64c3-4c45-a4ec-f9288d96dbc8.jpg",
      },
    ],
  },
  {
    title: "How to fight crime",
    date: "Jun 1st, 2034 at 10:00 AM (IST)",
    image:
      "https://dev.konfhub.com/_next/image?url=https%3A%2F%2Fdev-media.konfhub.com%2Fsponsors%2F2024%2FJune%2F10%2F1717978156489-c8a828a9-13ca-4572-b117-0483bafd34d9.jpg&w=1920&q=75",
    speakers: [
      {
        name: "Dark Knight",
        image:
          "https://dev-media.konfhub.com/speakers/2024/June/09/1717977466945-9da4f3da-047e-491b-83c3-6c2adc46223b.jpg",
      },
    ],
  },
  {
    title: "This is a workshop connected to a ticket",
    date: "Jun 1st, 2034 at 10:00 AM (IST)",
    image:
      "https://dev.konfhub.com/_next/image?url=https%3A%2F%2Fdev-media.konfhub.com%2Fsponsors%2F2024%2FJune%2F10%2F1717978363785-8225249d-f4dd-4572-826e-84093b5eb32f.jpg&w=1920&q=75",
    speakers: [
      {
        name: "Bruce Wayne",
        image:
          "https://dev-media.konfhub.com/speakers/2024/June/09/1717977337424-66d3d266-64c3-4c45-a4ec-f9288d96dbc8.jpg",
      },
      {
        name: "Dark Knight",
        image:
          "https://dev-media.konfhub.com/speakers/2024/June/09/1717977466945-9da4f3da-047e-491b-83c3-6c2adc46223b.jpg",
      },
    ],
  },
];

const Workshop = ({ workshopRef, eventSponsorRef }) => {
  return (
    <>
      <Box mt={6} ml={8} ref={workshopRef}>
        <Typography
          variant="h5"
          fontSize={"27px"}
          fontWeight={600}
          mt={4}
          gutterBottom
        >
          THIS IS WORKSHOP SECTION
        </Typography>
        <Box sx={{ mt: 6, mb: 6 }}>
          <Typography fontSize={"19px"} color={"text.secondary"}>
            This is the description for workshop sections.
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {workshop.map((workshop) => (
            <Grid item xs={12} md={4} key={workshop.title}>
              <WorkshopCard {...workshop} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box mt={6} ml={8} ref={eventSponsorRef}>
        <Typography
          variant="h5"
          fontSize={"27px"}
          fontWeight={600}
          mt={4}
          gutterBottom
        >
          THIS IS EVENT SPONSORS
        </Typography>
        <Box sx={{ mt: 6, mb: 6 }}>
          <Typography fontSize={"19px"} color={"text.secondary"}>
            This is description of sponsors sections.
          </Typography>
        </Box>
        <Box
          component={"img"}
          width={"215px"}
          height={"109px"}
          alt="batman"
          src="https://dev.konfhub.com/_next/image?url=https%3A%2F%2Fdev-media.konfhub.com%2Fsponsors%2F2024%2FJune%2F09%2F1717977584480-2a58c92e-ac5f-4ebd-9570-d6bcfc792dc2.png&w=1920&q=75"
        ></Box>
        <Box mt={6}>
          <Typography
            variant="h5"
            width={"200px"}
            fontSize={"30px"}
            fontWeight={500}
          >
            SPONSOR CATEGORY
          </Typography>
          <Box
            mt={6}
            component={"img"}
            width={"300px"}
            height={"150px"}
            alt="batman"
            src="https://dev-media.konfhub.com/sponsors/2024/June/10/1717977635909-75bb1d01-51a2-4af1-82cd-72d587192692.jpg"
          ></Box>
        </Box>
      </Box>
    </>
  );
};

export default Workshop;

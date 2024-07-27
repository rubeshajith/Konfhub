import React from "react";
import { Button, Box, Stack, Divider, ButtonGroup } from "@mui/material";
import { styled } from "@mui/system";

function Contents({
  data,
  aboutRef,
  ticketRef,
  workshopRef,
  eventSponsorRef,
  speakerRef,
  activeSection,
  setActiveSection,
}) {
  const scrollToSection = (sectionRef, sectionName) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionName);
  };

  const NavbarButton = styled(Button)(({ active }) => ({
    position: "relative",
    padding: "10px 20px",
    fontSize: "15px",
    cursor: "pointer",
    backgroundColor: "transparent",
    border: "none",
    color: "black",
    "&:hover": {
      backgroundColor: "lightgrey",
      border: "transparent",
    },
    "&:after": {
      content: '""',
      display: "block",
      width: "100%",
      height: "2px",
      backgroundColor: active ? "#333" : "transparent",
      position: "absolute",
      bottom: "-1px",
      left: 0,
      transition: "background-color 0.3s",
    },
  }));

  return (
    <Stack marginLeft={"60px"} maxWidth={"1000px"}>
      <Box
        sx={{
          width: "910px",
          height: "468px",
          borderRadius: "20px",
          paddingLeft: "6px",
          boxShadow: 5,
          alignContent: "center",
        }}
      >
        <Box
          component={"img"}
          src={data.event_poster_url}
          alt={data.event_poster_url}
          sx={{ width: "905px", height: "452px", borderRadius: "20px" }}
        ></Box>
      </Box>

      <ButtonGroup>
        <Box
          display="flex"
          justifyContent="space-around"
          borderBottom={"1px"}
          borderColor={"black"}
          marginTop={"28px"}
        >
          <NavbarButton
            active={activeSection === "about"}
            onClick={() => scrollToSection(aboutRef, "about")}
          >
            About
          </NavbarButton>
          <NavbarButton
            active={activeSection === "tickets"}
            onClick={() => scrollToSection(ticketRef, "tickets")}
          >
            Tickets
          </NavbarButton>
          <NavbarButton
            active={activeSection === "speakers"}
            onClick={() => scrollToSection(speakerRef, "speakers")}
          >
            This is speakers section
          </NavbarButton>
          <NavbarButton
            active={activeSection === "workshop"}
            onClick={() => scrollToSection(workshopRef, "workshop")}
          >
            This is workshop section
          </NavbarButton>
          <NavbarButton
            active={activeSection === "eventSponsor"}
            onClick={() => scrollToSection(eventSponsorRef, "eventSponsor")}
          >
            This is event sponsors
          </NavbarButton>
        </Box>
      </ButtonGroup>
      <Divider orientation="horizontal" flexItem color="grey" width="970px" />
    </Stack>
  );
}

export default Contents;

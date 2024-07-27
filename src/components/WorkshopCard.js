import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
  Avatar,
  AvatarGroup,
} from "@mui/material";
import { CalendarToday } from "@mui/icons-material";

const WorkshopCard = ({ title, date, image, speakers }) => {
  return (
    <Card sx={{ maxWidth: 350, m: 2 }}>
      <CardMedia component="img" height="140" image={image} alt={title} />
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          sx={{ width: "268px", height: "63px" }}
        >
          {title}
        </Typography>
        <Box display="flex" mt={2}>
          <CalendarToday fontSize="small" />
          <Typography
            variant="body1"
            color="textSecondary"
            ml={1}
            sx={{ width: "260px", height: "48px" }}
          >
            {date}
          </Typography>
        </Box>
        <Box display="flex" mt={2} justifyContent={"space-between"}>
          {speakers.length > 1 ? (
            <AvatarGroup max={1}>
              {speakers.map((speaker, index) => (
                <Avatar key={index} alt={speaker.name} src={speaker.image} />
              ))}
            </AvatarGroup>
          ) : (
            <Avatar alt={speakers[0].name} src={speakers[0].image} />
          )}
          <Button variant="contained" sx={{ bgcolor: "black" }}>
            View Details
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default WorkshopCard;

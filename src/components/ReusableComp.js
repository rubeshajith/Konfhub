import { Typography, Box, Button, Stack } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function ReusableComp({
  title,
  freeOrPaidText,
  buttonText,
  onButtonClick,
  width,
  height,
}) {
  return (
    <Box
      sx={{
        padding: 2,
        border: "1px solid #ddd",
        borderRadius: 2,
        boxShadow: 2,
        textAlign: "left",
        bgcolor: "white",
        width: width,

        height: height,
        marginBottom: "30px",
      }}
    >
      <Typography
        variant="h6"
        component="div"
        sx={{ marginBottom: 1, fontSize: "22px", fontWeight: 550 }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        component="div"
        sx={{ marginBottom: 2, fontSize: "19px" }}
      >
        This is a ticket description. This is a free ticket. This ticket is
        uncategorised.
      </Typography>
      <a
        href="https://www.google.com/maps/search/?api=1&query=KonfHub+Technologies,+Nagavarapalya,+C+V+Raman+Nagar,+Bengaluru,+Karnataka,+India"
        style={{ textDecoration: "none", color: "blue" }}
      >
        <Stack direction={"row"}>
          <LocationOnIcon />
          <Typography fontSize={"18px"}>
            KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru,
            Karnataka, India
          </Typography>
        </Stack>
      </a>
      <Typography fontSize={"16px"} marginTop={2} color={"gray"}>
        This is additional venue details.
      </Typography>
      <Box
        bgcolor={"lightgray"}
        sx={{ width: "360px", height: "30px", marginTop: 2 }}
      >
        <Typography fontSize={"18px"}>
          Available till: 31st Aug 2030, 06:00 PM IST
        </Typography>
      </Box>
      <Stack direction={"row"} justifyContent={"space-between"} marginTop={2}>
        <Typography fontSize={"29px"} sx={{ color: "black", fontWeight: 500 }}>
          {freeOrPaidText}
        </Typography>
        <Button
          variant="contained"
          onClick={onButtonClick}
          sx={{ bgcolor: "black", width: "124px", height: "44px" }}
        >
          {buttonText}
        </Button>
      </Stack>
    </Box>
  );
}

export default ReusableComp;

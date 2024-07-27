import { Stack, Box } from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

function Header({ data }) {
  return (
    <Stack
      direction={"row"}
      sx={{
        justifyContent: "space-between",
        padding: "16px",
        paddingTop: "24px",
      }}
    >
      <Box
        component={"img"}
        src={data.navbar_icon}
        alt={data.navbar_icon}
        sx={{
          width: "150px",
          height: "60px",
          justifyContent: "start",
        }}
      ></Box>
      <Box width={"60px"} justifyContent={"end"} marginTop={"1px"}>
        <PersonOutlineOutlinedIcon />
      </Box>
    </Stack>
  );
}

export default Header;

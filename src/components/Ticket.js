import {
  Stack,
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ReusableComp from "./ReusableComp";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Ticket({ ticketRef }) {
  return (
    <Box ref={ticketRef}>
      <Typography
        sx={{
          fontSize: "25px",
          fontWeight: "Bold",
          margin: "50px",
          marginLeft: "50px",
        }}
      >
        TICKETS
      </Typography>
      <Box
        sx={{
          padding: 2,
          marginLeft: "150px",
          borderRadius: 2,
          boxShadow: 2,
          bgcolor: "#F3F3F3",
          width: "800px",
        }}
      >
        <Stack sx={{ margin: "30px", width: "800px" }}>
          <ReusableComp
            title={"Free Ticket"}
            freeOrPaidText={"FREE"}
            buttonText={"Register"}
            width={"700px"}
          />
          <ReusableComp
            title={"Paid Ticket"}
            freeOrPaidText={"₹1,000"}
            buttonText={"Register"}
            width={"700px"}
          />
          <ReusableComp
            title={"Donation Ticket"}
            buttonText={"Donation"}
            width={"700px"}
            freeOrPaidText={
              <Typography fontSize={"20px"}>
                Min{" "}
                <b
                  style={{
                    fontSize: "29px",
                    fontWeight: 500,
                  }}
                >
                  ₹10
                </b>{" "}
                - Max
                <b style={{ fontSize: "29px", fontWeight: 510 }}> ₹1,000</b>
              </Typography>
            }
          />
          <ReusableComp
            title={"Ticket With Coupon"}
            freeOrPaidText={"₹1,000"}
            buttonText={"Register"}
            width={"700px"}
          />
          <Box mt={1} sx={{ width: "735px" }}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  This is a category
                </Typography>
              </AccordionSummary>
              <Box sx={{ bgcolor: "#F3F3F3" }}>
                <AccordionDetails>
                  <Typography mt={0} mb={2} variant="h6">
                    This is category description. This category is collapsed by
                    default.
                  </Typography>
                  <ReusableComp
                    title={"Free Ticket in Category1"}
                    freeOrPaidText={"FREE"}
                    buttonText={"Register"}
                  />

                  <ReusableComp
                    title={"Paid Ticket in Category1"}
                    freeOrPaidText={"₹1,000"}
                    buttonText={"Register"}
                  />
                </AccordionDetails>
              </Box>
            </Accordion>
          </Box>
          <Box mt={3} sx={{ width: "735px" }}>
            <Accordion defaultExpanded={true}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  This is a category. But with a little longer name. Also note,
                  this category expanded by default
                </Typography>
              </AccordionSummary>
              <Box sx={{ bgcolor: "#F3F3F3" }}>
                <AccordionDetails>
                  <Typography mt={0} mb={2} variant="h6">
                    This is category description. This category is expanded by
                    default. This is a little longer description. Adding more
                    content to make the description look longer. Adding more
                    content to make the description look longer. Adding more
                    content to make the description look longer. Adding more
                    content to make the description look longer. Adding more
                    content to make the description look longer. Adding more
                    content to make the description look longer.
                  </Typography>
                  <ReusableComp
                    title={"Free Ticket in Category2"}
                    freeOrPaidText={"FREE"}
                    buttonText={"Register"}
                  />

                  <ReusableComp
                    title={"Paid Ticket in Category2"}
                    freeOrPaidText={"₹1,000"}
                    buttonText={"Register"}
                  />
                </AccordionDetails>
              </Box>
            </Accordion>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}

export default Ticket;

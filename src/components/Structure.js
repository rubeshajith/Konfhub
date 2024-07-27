import Header from "./Header";
import Contents from "./Contents";
import { useState, useEffect, useRef } from "react";
import About from "./About";
import Ticket from "./Ticket";
import StickyEventCard from "./StickyEventCard";
import { Box } from "@mui/material";
import Speaker from "./Speaker";
import Workshop from "./Workshop";

function Structure() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("about");

  const aboutRef = useRef(null);
  const ticketRef = useRef(null);
  const workshopRef = useRef(null);
  const eventSponsorRef = useRef(null);
  const speakerRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://dev-api.konfhub.com/event/public/konfhub-frontend-evaluation-task"
      );
      const result = await response.json();
      setData(result);
      setLoading(false);
    };
    fetchData();
  }, []);
  console.log(data);
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <Header data={data} />
          <Box display="flex" justifyContent="space-between">
            <Box>
              <Contents
                data={data}
                aboutRef={aboutRef}
                ticketRef={ticketRef}
                workshopRef={workshopRef}
                eventSponsorRef={eventSponsorRef}
                speakerRef={speakerRef}
                activeSection={activeSection}
                setActiveSection={setActiveSection}
              />
              <About data={data} aboutRef={aboutRef} />
              <Ticket ticketRef={ticketRef} />
              <Speaker speakerRef={speakerRef} />
              <Workshop
                workshopRef={workshopRef}
                eventSponsorRef={eventSponsorRef}
              />
            </Box>
            <Box>
              <StickyEventCard data={data} />
            </Box>
          </Box>
        </>
      )}
    </div>
  );
}

export default Structure;

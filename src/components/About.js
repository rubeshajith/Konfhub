import { Stack, Typography, Box } from "@mui/material";

function About({ data, aboutRef }) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(data.description, "text/html");
  const blockquoteText = doc.querySelector("blockquote p").innerHTML;
  const imgElements = doc.querySelector("img");
  const iframeElement = doc.querySelector("iframe");

  return (
    <Stack
      sx={{ marginTop: "50px", marginLeft: "60px", width: "969px" }}
      ref={aboutRef}
    >
      <Typography sx={{ fontSize: "25px", fontWeight: "Bold" }}>
        ABOUT EVENT
      </Typography>
      <Typography marginTop={"20px"} component="div" sx={{ fontSize: "20px" }}>
        <div dangerouslySetInnerHTML={{ __html: blockquoteText }} />
      </Typography>
      <Box
        component="img"
        src={imgElements.src}
        alt={imgElements.src}
        width={"310px"}
        height={"310px"}
      ></Box>
      <div>
        <iframe
          width="850px"
          height="480px"
          src={iframeElement.src}
          title="YouTube video player"
          allowFullScreen
        ></iframe>
      </div>
      <div style={{ marginTop: "20px" }}>
        <table width={"910px"} height={"102"}>
          <tr>
            <td>A</td>
            <td>B</td>
            <td>C</td>
          </tr>
          <tr>
            <td>A1</td>
            <td>B1</td>
            <td>C1</td>
          </tr>
          <tr>
            <td>A2</td>
            <td>B2</td>
            <td>C2</td>
          </tr>
        </table>
      </div>
    </Stack>
  );
}

export default About;

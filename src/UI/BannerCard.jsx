import React from "react";
import { Card, CardMedia, capitalize, Grid } from "@mui/material";

const othersStyles = {
  objectFit: "cover",
  width: "100%",
  minHeight: "100px",
  height: "100%",
  overflow: "visible",
  marginBottom: "10px",
  borderRadius: "100px",
};
function BannerCard({ image, label, xstyles = othersStyles }) {
  return (
    <>
      <Card style={{ display: "block", textAlign: "center" }} as="a">
        <Grid container>
          <Grid
            sx={{
              height: "auto",
              minHeight: "60px",
              width: "100%",
              padding: "10px",
            }}
          >
            <CardMedia
              sx={{
                objectFit: "cover",
                overflow: "hidden",
                height: "100%",
                borderRadius: "50px",
              }}
              href=""
              image={image}
              component="img"
            />
          </Grid>
          <Grid justifySelf="center" textAlign="center" sx={{ width: "100%" }}>
            <p
              style={{
                display: "inline",
                fontSize: "90%",
                color: "#717171",
                marginTop: "20px",
              }}
            >
              {capitalize(label)}
            </p>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}

export default BannerCard;

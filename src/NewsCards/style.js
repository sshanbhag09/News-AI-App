import { styled } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  details: {
    fontSize: "0.8rem",
    margin: "0.3rem",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    margin: "auto",
    height: "50vh",
    padding: "10%",
    borderRadius: 10,
    color: "white",
  },
  infoCard: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    height: "400px",
  },
  container: {
    padding: "0 5%",
    width: "100%",
    margin: 0,
  },
});

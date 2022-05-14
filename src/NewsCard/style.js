import { makeStyles } from "@material-ui/core";
export default makeStyles({
  media: {
    height: "250",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: " 0 15px",
  },
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
  },
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderBottom: "10px solid white",
    height: "450px",
  },
  activeCard: {
    borderBottom: "10px solid #22289a",
  },
  grid: {
    display: "flex",
  },
  descBox:{
  overflow: 'hidden',
  height: '3.5rem',
  }
});

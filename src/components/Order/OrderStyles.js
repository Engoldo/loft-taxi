const styles = theme => ({
  container: {
    width: "100%",
    height: "100%",
    position: "absolute"
  },
  form: {
    margin: 30,
    maxWidth: 300,
    position: "absolute",
    zIndex: 200,
    top: 70,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "stretch",
    padding: theme.spacing.unit * 3
  }
});

export default styles;
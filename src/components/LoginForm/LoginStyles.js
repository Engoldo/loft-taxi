const styles = theme => ({
  container: {
    width: "100%",
    height: "100%"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "stretch",
    padding: theme.spacing.unit * 3
  },
  fieldAlign: {
    display: "flex"
  },
  alignLeft: {
    justifyContent: "flex-start"
  },
  alignCenter: {
    justifyContent: "center"
  }
});

export default styles;

import React, { Component, Fragment } from "react";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { login, testAuth, getIsLoggedIn } from "../../modules/Auth";
import { renderTextField } from "../helpers";
import styles from "./LoginStyles";

class LoginForm extends Component {
  renderForm = () => {
    const { classes, handleSubmit } = this.props;

    return (
      <Grid
        container
        spacing={0}
        className={classes.container}
        alignItems="center"
        justify="center"
      >
        <Grid item xs={4}>
          <Paper component="form" onSubmit={handleSubmit(this.handleSubmit)}>
            <Grid container spacing={24} className={classes.form}>
              <Grid
                item
                xs={12}
                className={`${classes.alignCenter} ${classes.fieldAlign}`}
              >
                <Typography variant="h4">Войти</Typography>
              </Grid>
              <Grid
                item
                xs={12}
                className={`${classes.alignLeft} ${classes.fieldAlign}`}
              >
                <Field
                  name="userName"
                  component={renderTextField}
                  label="Имя пользователя"
                  type="text"
                  fullWidth
                />
              </Grid>
              <Grid
                item
                xs={12}
                className={`${classes.alignLeft} ${classes.fieldAlign}`}
              >
                <Field
                  name="userPassword"
                  component={renderTextField}
                  label="Пароль"
                  type="password"
                  fullWidth
                />
              </Grid>
              <Grid
                item
                xs={12}
                className={`${classes.alignLeft} ${classes.fieldAlign}`}
              >
                <Button
                  variant="outlined"
                  color="primary"
                  type="submit"
                  component="button"
                >
                  Войти
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    );
  };

  handleSubmit = values => {
    const { userName: username, userPassword: password } = values;
    const { testAuth } = this.props;
    testAuth({ username, password });
  };

  render() {
    const { isLoggedIn } = this.props;
    return (
      <Fragment>
        {isLoggedIn ? <Redirect to="/map" /> : this.renderForm()}
      </Fragment>
    );
  }
}

const loginSyncValidator = values => {
  const errors = {};
  if (!values.userName) {
    errors.userName = "Надо указать логин";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.userName)
  ) {
    errors.userName = "Неверный e-mail";
  }
  if (!values.userPassword) errors.userPassword = "Неверный пароль";
  return errors;
};

const mapStateToProps = state => ({
  isLoggedIn: getIsLoggedIn(state)
});

const mapDispatchToProps = { login, testAuth };

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles),
  reduxForm({ form: "loginform", validate: loginSyncValidator })
)(LoginForm);

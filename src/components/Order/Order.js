import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withStyles } from "@material-ui/core/styles";
import styles from "./OrderStyles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import OrderForm from "../OrderForm";
import ProfileAlert from "../ProfilePopup";
import OrderAlert from "../OrderPopup";
import { getIsProfileFilled } from "../../modules/Auth";
import { getIsOrderMade } from "../../modules/Coords";

const Order = props => {
  const { classes, isProfile, isOrderMade } = props;

  return (
    <Grid
      container
      spacing={0}
      className={classes.container}
      alignItems="center"
      justify="flex-start"
    >
      <Grid item xs={8}>
        <Paper className={classes.form}>
          {isProfile && !isOrderMade && <OrderForm />}
          {isProfile && isOrderMade && <OrderAlert />}
          {!isProfile && (
            <ProfileAlert
              header="Заполните платежные данные"
              body="Укажите информацию о банковской карте, чтобы сделать заказ"
              btnText="перейти в профиль"
              linkTo="/profile"
            />
          )}
        </Paper>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = state => ({
  isProfile: getIsProfileFilled(state),
  isOrderMade: getIsOrderMade(state)
});

const mapDispatchToProps = null;

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles)
)(Order);

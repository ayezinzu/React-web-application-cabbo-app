import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import AdjustIcon from "@material-ui/icons/Adjust";

const useStyles = makeStyles((theme) => ({
  imgFluid: {
    maxWidth: "100%",
    height: "auto",
  },
  topBarContainer: {
    height: "90px",
  },
  cabboLogo: {
    maxWidth: "100%",
    height: "60px",
  },
  verticalLine: {
    borderLeft: "2px solid #DBB7EF",
    height: "40px",
  },
  borgoLogo: {
    maxWidth: "100%",
    height: "40px",
  },
  menuItem: {
    "&:hover": {
      cursor: "pointer",
    },
    minWidth: "80px",
    textAlign: "center",
    marginLeft: "10px",
    marginRight: "10px",
  },
  menuItemText: {
    color: "#707070",
    fontWeight: 600,
  },
  stepSubtitle: {
    fontSize: "8px",
    color: "#B8A6A6",
    fontWeight: 600,
  },
  mainContainer: {
    backgroundColor: "#FCF5F5",
  },
  infoContainer: {
    backgroundColor: "#B5489B",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    borderRadius: "8px",
    padding: theme.spacing(2),
  },
  infoContainerTitle: {
    fontSize: "15px",
    color: "#fff",
    lineHeight: 1,
  },
  infoContainerSubtitle: {
    marginTop: theme.spacing(0.5),
    fontSize: "10px",
    color: "#CECECE",
  },
  bookingDetailsCard: {
    borderRadius: "10px",
    width: "100%",
    padding: theme.spacing(1, 2),
  },
  bookingDetailsTitleGrid: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(3),
  },
  bookingDetailsTitle: {
    fontWeight: 600,
  },
  inputGrid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  inputTextField: {
    padding: 0,
    width: "100%",
  },
  inputLabel: {
    fontSize: "15px",
    fontWeight: 600,
    paddingBottom: theme.spacing(1),
  },
  checkboxGrid: {
    paddingBottom: theme.spacing(2),
  },
  continueButton: {
    "&:hover": {
      border: "1px solid #F1A009",
      background: "#fff",
      color: "#F1A009",
    },
    backgroundColor: "#F1A009",
    width: "100%",
    color: "#fff",
    padding: theme.spacing(2),
  },
  orderSummaryTitle: {
    fontWeight: 600,
  },
  orderSummaryDateText: {
    color: "#707070",
  },
  orderSummaryHourText: {
    color: "#707070",
  },
  editButton: {
    textDecoration: "none",
    color: "#707070",
  },
}));

function Transfer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <Grid container className={classes.topBarContainer} justify="center">
      <Grid container item md={10} spacing={2}>
        <Grid item md={4} container justify="center" direction="row">
          <Grid item md={5} container alignItems="center" justify="center">
            <img src="cabbo-logo.png" className={classes.cabboLogo} />
          </Grid>
          <Grid item md={2} container alignItems="center" justify="center">
            <div className={classes.verticalLine}></div>
          </Grid>
          <Grid item md={5} container alignItems="center" justify="center">
            <img src="logo-be.png" className={classes.borgoLogo} />
          </Grid>
        </Grid>
        <Grid item md={4} container justify="flex-end" alignItems="center">
          <Grid item md={2} style={{ textAlign: "center" }}>
            <CheckCircleIcon style={{ color: "#4BD859" }} />
            <Typography variant="subtitle2" className={classes.stepSubtitle}>
              QUOTE
            </Typography>
          </Grid>
          <Grid item md={2} container justify="center">
            <img src="step-arrow.png" className={classes.imgFluid} />
          </Grid>
          <Grid item md={2} style={{ textAlign: "center" }}>
            <AdjustIcon style={{ color: "#4BD859" }} />
            <Typography variant="subtitle2" className={classes.stepSubtitle}>
              TRANSFER
            </Typography>
          </Grid>
          <Grid item md={2} container justify="center">
            <img src="step-arrow.png" className={classes.imgFluid} />
          </Grid>
          <Grid item md={2} style={{ textAlign: "center" }}>
            <RadioButtonUncheckedIcon style={{ color: "#4BD859" }} />
            <Typography variant="subtitle2" className={classes.stepSubtitle}>
              PAYMENT
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          md={4}
          container
          justify="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item className={classes.menuItem}>
            <Typography variant="subtitle1" className={classes.menuItemText}>
              Help
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container className={classes.mainContainer} justify="center">
        <Grid
          container
          md={8}
          className={classes.infoContainer}
          spacing={1}
          justify="center"
        >
          <Grid item md={4} container justify="center" spacing={2}>
            <Grid item md={3} container alignItems="center">
              <img src="infosection-image-1.png" className={classes.imgFluid} />
            </Grid>
            <Grid item md={9} container alignItems="center">
              <Typography
                variant="subtitle1"
                className={classes.infoContainerTitle}
              >
                Travellers rate us excellent
              </Typography>
              <Typography
                variant="subtitle2"
                className={classes.infoContainerSubtitle}
              >
                4.9/5 Average (5000 reviews)
              </Typography>
            </Grid>
          </Grid>
          <Grid item md={4} container justify="center" spacing={2}>
            <Grid item md={3} container alignItems="center">
              <img src="infosection-image-2.png" className={classes.imgFluid} />
            </Grid>
            <Grid item md={9} container alignItems="center">
              <Typography
                variant="subtitle1"
                className={classes.infoContainerTitle}
              >
                Best drivers in Rome
              </Typography>
              <Typography
                variant="subtitle2"
                className={classes.infoContainerSubtitle}
              >
                We handpick the friendliest, professional, english-speaking
                drivers
              </Typography>
            </Grid>
          </Grid>
          <Grid item md={4} container justify="center" spacing={2}>
            <Grid item md={3} container alignItems="center">
              <img src="infosection-image-3.png" className={classes.imgFluid} />
            </Grid>
            <Grid item md={9} container alignItems="center">
              <Typography
                variant="subtitle1"
                className={classes.infoContainerTitle}
              >
                Always on time
              </Typography>
              <Typography
                variant="subtitle2"
                className={classes.infoContainerSubtitle}
              >
                Our drivers monitor the flights in case of delays
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid container md={8} spacing={2}>
          <Grid item md={7} container>
            <Card className={classes.bookingDetailsCard}>
              <CardContent>
                <Grid item md={12} className={classes.bookingDetailsTitleGrid}>
                  <Typography
                    variant="h5"
                    className={classes.bookingDetailsTitle}
                  >
                    Booking Details
                  </Typography>
                </Grid>
                <Grid item md={12} className={classes.inputGrid}>
                  <Typography variant="h6" className={classes.inputLabel}>
                    Flight number
                  </Typography>
                  <TextField
                    required
                    variant="outlined"
                    className={classes.inputTextField}
                    inputProps={{
                      style: {
                        height: "5px",
                      },
                    }}
                  />
                </Grid>

                <Grid item md={12} className={classes.inputGrid}>
                  <Typography variant="h6" className={classes.inputLabel}>
                    Your full name
                  </Typography>
                  <TextField
                    required
                    variant="outlined"
                    className={classes.inputTextField}
                    inputProps={{
                      style: {
                        height: "5px",
                      },
                    }}
                  />
                </Grid>

                <Grid item md={12} className={classes.inputGrid}>
                  <Typography variant="h6" className={classes.inputLabel}>
                    Mobile Phone Number
                  </Typography>
                  <TextField
                    required
                    variant="outlined"
                    className={classes.inputTextField}
                    type="number"
                    inputProps={{
                      style: {
                        height: "5px",
                      },
                    }}
                  />
                </Grid>

                <Grid item md={12} className={classes.inputGrid}>
                  <Typography variant="h6" className={classes.inputLabel}>
                    Email
                  </Typography>
                  <TextField
                    required
                    variant="outlined"
                    className={classes.inputTextField}
                    type="email"
                    inputProps={{
                      style: {
                        height: "5px",
                      },
                    }}
                  />
                </Grid>

                <Grid item md={12} className={classes.checkboxGrid}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={state.checkedB}
                        onChange={handleChange}
                        name="checkedA"
                      />
                    }
                    label="I agree to receive status updates via sms & email"
                  />
                </Grid>
                <hr style={{ marginBottom: "20px" }} />
                <Grid item md={12} className={classes.checkboxGrid}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={state.checkedB}
                        onChange={handleChange}
                        name="checkedA"
                        disabled
                      />
                    }
                    label="Add child seats"
                  />
                </Grid>
                <Grid item md={12} className={classes.checkboxGrid}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={state.checkedB}
                        onChange={handleChange}
                        name="checkedA"
                        disabled
                      />
                    }
                    label="Add notes for the driver"
                  />
                </Grid>
              </CardContent>
              <CardActions>
                <Grid container justify="center">
                  <Grid item md={12}>
                    <Button size="small" className={classes.continueButton}>
                      Continue
                    </Button>
                  </Grid>
                </Grid>
              </CardActions>
            </Card>
          </Grid>
          <Grid item md={5} container>
            <Grid item md={12}>
              <Card className={classes.root}>
                <CardContent>
                  <Grid container>
                    <Grid item md={12}>
                      <Typography
                        variant="h6"
                        className={classes.orderSummaryTitle}
                      >
                        Order summary
                      </Typography>
                    </Grid>
                    <Grid item md={12} container spacing={2}>
                      <Grid item md={4}>
                        <Typography
                          variant="subtitle2"
                          className={classes.orderSummaryDateText}
                        >
                          5 June, Fri
                        </Typography>
                      </Grid>
                      <Grid item md={4}>
                        <Typography
                          variant="subtitle2"
                          className={classes.orderSummaryHourText}
                        >
                          11:10
                        </Typography>
                      </Grid>
                      <Grid item md={4} container justify="flex-end">
                        <a href="#" className={classes.editButton}>
                          Edit
                        </a>
                      </Grid>
                    </Grid>
                  </Grid>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item md={12}>
              Route
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Transfer;

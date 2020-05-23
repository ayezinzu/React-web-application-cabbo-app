import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  Select,
  MenuItem,
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import Slider from "infinite-react-carousel";

import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

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
    height: "80px",
  },
  verticalLine: {
    borderLeft: "2px solid #DBB7EF",
    height: "40px",
  },
  borgoLogo: {
    maxWidth: "100%",
    height: "50px",
  },
  menuItem: {
    "&:hover": {
      cursor: "pointer",
    },
    backgroundImage: `url('menu-background.png')`,
    backgroundSize: "100% 100%",
    minWidth: "80px",
    textAlign: "center",
    color: "#fff",
    marginLeft: "10px",
    marginRight: "10px",
  },
  mainContainer: {
    padding: theme.spacing(10),
    backgroundImage: `url('main-background-image.png')`,
    backgroundSize: "100% 100%",
  },
  mainContainerTitle: {
    color: "#fff",
    fontWeight: 400,
    marginBottom: theme.spacing(2),
  },
  mainContainerSubTitle: {
    color: "#fff",
    fontWeight: 500,
  },
  bookTransferCard: {
    borderRadius: "20px",
    padding: theme.spacing(2),
  },
  bookTransferCardTitle: {
    color: "#A327C8",
    fontWeight: 600,
  },
  inputsContainer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    border: "1px solid #9C9C9C",
    borderRadius: "5px",
    padding: theme.spacing(1),
  },
  select: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    width: "100%",
    fontSize: "13px",
    paddingLeft: theme.spacing(1),
    "&:focus": {
      backgroundColor: "transparent!important",
    },
    "&:hover": {
      borderBottom: "none!important",
    },
    "&:before": {
      borderBottom: "none",
    },
    "&:after": {
      borderBottom: "none",
    },
    "&:hover:not($disabled):not($focused):not($error):before": {
      borderBottom: "none",
    },
  },
  countersContainer: {
    marginTop: theme.spacing(2),
  },
  counterContainer: {
    border: "1px solid #9C9C9C",
    borderRadius: "5px",
    padding: theme.spacing(1),
  },
  boxesContainer: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  boxContainer: {
    width: "600px",
    height: "180px",
    border: "1px solid #707070",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  infoContainer: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(8),
  },
  infoTitle: {
    color: "#8A64B7",
  },
  infoSubtitle: {
    color: "#8A64B7",
  },
  reviewsContainer: {
    backgroundColor: "#EBEBEB",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  trustpilotLogo: {
    width: "153px",
    height: "64px",
    marginBottom: theme.spacing(3),
  },
  reviewBoxContainer: {
    "&:focus": {
      outline: "none!important",
    },
  },
  reviewBox: {
    backgroundColor: "#fff",
    boxShadow: "1px 1px 10px 0px rgba(0,0,0,0.25)",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    padding: theme.spacing(2),
  },
  reviewBoxAvatar: {},
  faqContainer: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  faqTitle: {
    marginBottom: theme.spacing(6),
  },
  faqAnswer: {
    padding: theme.spacing(2, 3),
  },
  footer: {
    height: "200px",
    backgroundColor: "#232222",
  },
}));

function HomePage(props) {
  const classes = useStyles();
  const [pickupLocation, setPickupLocation] = React.useState("");
  const [pickupDestination, setPickupDestination] = React.useState("");
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handlePickupLocation = (event) => {
    setPickupLocation(event.target.value);
  };

  const handlePickupDestination = (event) => {
    setPickupDestination(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const carouselSettings = {
    arrows: false,
    slidesToShow: 5,
  };

  return (
    <>
      <Grid container className={classes.topBarContainer}>
        <Grid item md={4} container justify="center"></Grid>
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
        <Grid
          item
          md={4}
          container
          justify="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item className={classes.menuItem}>
            tours
          </Grid>
          <Grid item className={classes.menuItem}>
            contact
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.mainContainer}
      >
        <Grid item md={9} container>
          <Grid item md={9}>
            <Typography variant="h4" className={classes.mainContainerTitle}>
              Your transfer service in Puglia, between Borgo Egnazia and the
              main hubs.
            </Typography>
            <Typography variant="h3" className={classes.mainContainerSubTitle}>
              Ride in safety and style!
            </Typography>
          </Grid>
        </Grid>
        <Grid item md={3}>
          <Card className={classes.bookTransferCard}>
            <CardContent>
              <Grid container justify="center">
                <Grid item>
                  <Typography
                    variant="h6"
                    className={classes.bookTransferCardTitle}
                  >
                    Book a transfer
                  </Typography>
                </Grid>
                <Grid
                  item
                  container
                  justify="center"
                  className={classes.inputsContainer}
                >
                  <FormControl
                    className={classes.formControl}
                    style={{ width: "100%" }}
                  >
                    <Grid container>
                      <Grid
                        item
                        md={1}
                        container
                        alignItems="center"
                        justify="center"
                      >
                        <RadioButtonUncheckedIcon
                          style={{ fontSize: "10px" }}
                        />
                      </Grid>
                      <Grid item md={11} container alignItems="center">
                        <Select
                          value={pickupLocation}
                          onChange={handlePickupLocation}
                          displayEmpty
                          className={classes.select}
                          IconComponent={() => (
                            <ExpandMoreIcon
                              style={{ fontSize: "20px", color: "#707070" }}
                            />
                          )}
                        >
                          >
                          <MenuItem value="" disabled style={{ width: "100%" }}>
                            pickup location
                          </MenuItem>
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </Grid>
                    </Grid>
                  </FormControl>
                  <FormControl
                    className={classes.formControl}
                    style={{ width: "100%" }}
                  >
                    <Grid container>
                      <Grid
                        item
                        md={1}
                        container
                        alignItems="center"
                        justify="center"
                      >
                        <RadioButtonCheckedIcon style={{ fontSize: "10px" }} />
                      </Grid>
                      <Grid item md={11} container alignItems="center">
                        <Select
                          value={pickupDestination}
                          onChange={handlePickupDestination}
                          displayEmpty
                          className={classes.select}
                          IconComponent={() => (
                            <ExpandMoreIcon
                              style={{ fontSize: "20px", color: "#707070" }}
                            />
                          )}
                        >
                          <MenuItem value="" disabled style={{ width: "100%" }}>
                            destination
                          </MenuItem>
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </Grid>
                    </Grid>
                  </FormControl>
                </Grid>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid container justify="space-around" spacing={1}>
                    <Grid item md={6}>
                      <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="dd/MM"
                        margin="normal"
                        id="date-picker-inline"
                        label="Pickup Date"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                          "aria-label": "change date",
                        }}
                      />
                    </Grid>
                    <Grid item md={6}>
                      <KeyboardTimePicker
                        margin="normal"
                        id="time-picker"
                        label="Time"
                        ampm={false}
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                          "aria-label": "change time",
                        }}
                      />
                    </Grid>
                  </Grid>
                </MuiPickersUtilsProvider>
                <Grid
                  container
                  className={classes.countersContainer}
                  spacing={2}
                >
                  <Grid item md={6}>
                    <Typography variant="subtitle2">Passengers</Typography>
                    <Grid
                      container
                      alignItems="center"
                      className={classes.counterContainer}
                    >
                      <Grid
                        item
                        md={4}
                        container
                        alignItems="center"
                        justify="center"
                      >
                        <RemoveIcon
                          style={{ fontSize: "20px", color: "#707070" }}
                        />
                      </Grid>
                      <Grid
                        item
                        md={4}
                        container
                        alignItems="center"
                        justify="center"
                      >
                        1
                      </Grid>
                      <Grid
                        item
                        md={4}
                        container
                        alignItems="center"
                        justify="center"
                      >
                        <AddIcon
                          style={{ fontSize: "20px", color: "#707070" }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item md={6}>
                    <Typography variant="subtitle2">Luggages</Typography>
                    <Grid
                      container
                      alignItems="center"
                      className={classes.counterContainer}
                    >
                      <Grid
                        item
                        md={4}
                        container
                        alignItems="center"
                        justify="center"
                      >
                        <RemoveIcon
                          style={{ fontSize: "20px", color: "#707070" }}
                        />
                      </Grid>
                      <Grid
                        item
                        md={4}
                        container
                        alignItems="center"
                        justify="center"
                      >
                        1
                      </Grid>
                      <Grid
                        item
                        md={4}
                        container
                        alignItems="center"
                        justify="center"
                      >
                        <AddIcon
                          style={{ fontSize: "20px", color: "#707070" }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
            <CardActions>
              <Grid container justify="center">
                <Grid item>
                  <Button
                    size="small"
                    onClick={() => props.history.push("transfer")}
                  >
                    Book now
                  </Button>
                </Grid>
              </Grid>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <Grid container className={classes.boxesContainer} justify="center">
        <Grid item md={10} container spacing={2}>
          <Grid item className={classes.boxContainer}>
            BOX
          </Grid>
          <Grid item className={classes.boxContainer}>
            BOX
          </Grid>
        </Grid>
      </Grid>
      <Grid container className={classes.infoContainer} justify="center">
        <Grid item md={10} container spacing={2}>
          <Grid item md={2} container justify="center">
            <img src="info-section-1.png" className={classes.imgFluid} />
            <Typography variant="h6" className={classes.infoTitle}>
              Book Now
            </Typography>
            <Typography variant="subtitle2" className={classes.infoSubtitle}>
              at best available rate
            </Typography>
          </Grid>
          <Grid item md={2} container justify="center">
            <img src="info-section-2.png" className={classes.imgFluid} />
            <Typography variant="h6" className={classes.infoTitle}>
              Book Now
            </Typography>
            <Typography variant="subtitle2" className={classes.infoSubtitle}>
              at best available rate
            </Typography>
          </Grid>
          <Grid item md={2} container justify="center">
            <img src="info-section-3.png" className={classes.imgFluid} />
            <Typography variant="h6" className={classes.infoTitle}>
              Book Now
            </Typography>
            <Typography variant="subtitle2" className={classes.infoSubtitle}>
              at best available rate
            </Typography>
          </Grid>
          <Grid item md={2} container justify="center">
            <img src="info-section-4.png" className={classes.imgFluid} />
            <Typography variant="h6" className={classes.infoTitle}>
              Book Now
            </Typography>
            <Typography variant="subtitle2" className={classes.infoSubtitle}>
              at best available rate
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container className={classes.reviewsContainer}>
        <Grid item md={12}>
          <span>
            <Grid container justify="center">
              <Grid item md={10}>
                <img
                  src="trustpilot-logo.png"
                  className={classes.trustpilotLogo}
                />
              </Grid>
            </Grid>
          </span>
          <Slider {...carouselSettings}>
            <Grid container className={classes.reviewBoxContainer}>
              <Grid item md={11} container className={classes.reviewBox}>
                <Grid item md={2} container alignItems="center">
                  <img src="avatar.png" className={classes.imgFluid} />
                </Grid>
                <Grid
                  item
                  md={10}
                  container
                  alignItems="center"
                  style={{ paddingLeft: "10px" }}
                >
                  <img
                    src="star.png"
                    className={classes.imgFluid}
                    style={{ maxWidth: "20px" }}
                  />
                  <img
                    src="star.png"
                    className={classes.imgFluid}
                    style={{ maxWidth: "20px" }}
                  />
                  <img
                    src="star.png"
                    className={classes.imgFluid}
                    style={{ maxWidth: "20px" }}
                  />
                  <img
                    src="star.png"
                    className={classes.imgFluid}
                    style={{ maxWidth: "20px" }}
                  />
                </Grid>
                <Grid item>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  quis porta elit, sed accumsan lorem. Curabitur gravida non
                  lectus sit amet tincidunt.
                </Grid>
              </Grid>
            </Grid>
            <Grid container className={classes.reviewBoxContainer}>
              <Grid item md={11} container className={classes.reviewBox}>
                <Grid item md={2} container alignItems="center">
                  <img src="avatar.png" className={classes.imgFluid} />
                </Grid>
                <Grid
                  item
                  md={10}
                  container
                  alignItems="center"
                  style={{ paddingLeft: "10px" }}
                >
                  <img
                    src="star.png"
                    className={classes.imgFluid}
                    style={{ maxWidth: "20px" }}
                  />
                  <img
                    src="star.png"
                    className={classes.imgFluid}
                    style={{ maxWidth: "20px" }}
                  />
                  <img
                    src="star.png"
                    className={classes.imgFluid}
                    style={{ maxWidth: "20px" }}
                  />
                  <img
                    src="star.png"
                    className={classes.imgFluid}
                    style={{ maxWidth: "20px" }}
                  />
                </Grid>
                <Grid item>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  quis porta elit, sed accumsan lorem. Curabitur gravida non
                  lectus sit amet tincidunt.
                </Grid>
              </Grid>
            </Grid>
            <Grid container className={classes.reviewBoxContainer}>
              <Grid item md={11} container className={classes.reviewBox}>
                <Grid item md={2} container alignItems="center">
                  <img src="avatar.png" className={classes.imgFluid} />
                </Grid>
                <Grid
                  item
                  md={10}
                  container
                  alignItems="center"
                  style={{ paddingLeft: "10px" }}
                >
                  <img
                    src="star.png"
                    className={classes.imgFluid}
                    style={{ maxWidth: "20px" }}
                  />
                  <img
                    src="star.png"
                    className={classes.imgFluid}
                    style={{ maxWidth: "20px" }}
                  />
                  <img
                    src="star.png"
                    className={classes.imgFluid}
                    style={{ maxWidth: "20px" }}
                  />
                  <img
                    src="star.png"
                    className={classes.imgFluid}
                    style={{ maxWidth: "20px" }}
                  />
                </Grid>
                <Grid item>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  quis porta elit, sed accumsan lorem. Curabitur gravida non
                  lectus sit amet tincidunt.
                </Grid>
              </Grid>
            </Grid>
            <Grid container className={classes.reviewBoxContainer}>
              <Grid item md={11} container className={classes.reviewBox}>
                <Grid item md={2} container alignItems="center">
                  <img src="avatar.png" className={classes.imgFluid} />
                </Grid>
                <Grid
                  item
                  md={10}
                  container
                  alignItems="center"
                  style={{ paddingLeft: "10px" }}
                >
                  <img
                    src="star.png"
                    className={classes.imgFluid}
                    style={{ maxWidth: "20px" }}
                  />
                  <img
                    src="star.png"
                    className={classes.imgFluid}
                    style={{ maxWidth: "20px" }}
                  />
                  <img
                    src="star.png"
                    className={classes.imgFluid}
                    style={{ maxWidth: "20px" }}
                  />
                  <img
                    src="star.png"
                    className={classes.imgFluid}
                    style={{ maxWidth: "20px" }}
                  />
                </Grid>
                <Grid item>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  quis porta elit, sed accumsan lorem. Curabitur gravida non
                  lectus sit amet tincidunt.
                </Grid>
              </Grid>
            </Grid>
            <Grid container className={classes.reviewBoxContainer}>
              <Grid item md={11} container className={classes.reviewBox}>
                <Grid item md={2} container alignItems="center">
                  <img src="avatar.png" className={classes.imgFluid} />
                </Grid>
                <Grid
                  item
                  md={10}
                  container
                  alignItems="center"
                  style={{ paddingLeft: "10px" }}
                >
                  <img
                    src="star.png"
                    className={classes.imgFluid}
                    style={{ maxWidth: "20px" }}
                  />
                  <img
                    src="star.png"
                    className={classes.imgFluid}
                    style={{ maxWidth: "20px" }}
                  />
                  <img
                    src="star.png"
                    className={classes.imgFluid}
                    style={{ maxWidth: "20px" }}
                  />
                  <img
                    src="star.png"
                    className={classes.imgFluid}
                    style={{ maxWidth: "20px" }}
                  />
                </Grid>
                <Grid item>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  quis porta elit, sed accumsan lorem. Curabitur gravida non
                  lectus sit amet tincidunt.
                </Grid>
              </Grid>
            </Grid>
            <Grid container className={classes.reviewBoxContainer}>
              <Grid item md={11} container className={classes.reviewBox}>
                <Grid item md={2} container alignItems="center">
                  <img src="avatar.png" className={classes.imgFluid} />
                </Grid>
                <Grid
                  item
                  md={10}
                  container
                  alignItems="center"
                  style={{ paddingLeft: "10px" }}
                >
                  <img
                    src="star.png"
                    className={classes.imgFluid}
                    style={{ maxWidth: "20px" }}
                  />
                  <img
                    src="star.png"
                    className={classes.imgFluid}
                    style={{ maxWidth: "20px" }}
                  />
                  <img
                    src="star.png"
                    className={classes.imgFluid}
                    style={{ maxWidth: "20px" }}
                  />
                  <img
                    src="star.png"
                    className={classes.imgFluid}
                    style={{ maxWidth: "20px" }}
                  />
                </Grid>
                <Grid item>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  quis porta elit, sed accumsan lorem. Curabitur gravida non
                  lectus sit amet tincidunt.
                </Grid>
              </Grid>
            </Grid>
            <Grid container className={classes.reviewBoxContainer}>
              <Grid item md={11} container className={classes.reviewBox}>
                <Grid item md={2} container alignItems="center">
                  <img src="avatar.png" className={classes.imgFluid} />
                </Grid>
                <Grid
                  item
                  md={10}
                  container
                  alignItems="center"
                  style={{ paddingLeft: "10px" }}
                >
                  <img
                    src="star.png"
                    className={classes.imgFluid}
                    style={{ maxWidth: "20px" }}
                  />
                  <img
                    src="star.png"
                    className={classes.imgFluid}
                    style={{ maxWidth: "20px" }}
                  />
                  <img
                    src="star.png"
                    className={classes.imgFluid}
                    style={{ maxWidth: "20px" }}
                  />
                  <img
                    src="star.png"
                    className={classes.imgFluid}
                    style={{ maxWidth: "20px" }}
                  />
                </Grid>
                <Grid item>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  quis porta elit, sed accumsan lorem. Curabitur gravida non
                  lectus sit amet tincidunt.
                </Grid>
              </Grid>
            </Grid>
            <Grid container className={classes.reviewBoxContainer}>
              <Grid item md={11} container className={classes.reviewBox}>
                <Grid item md={2} container alignItems="center">
                  <img src="avatar.png" className={classes.imgFluid} />
                </Grid>
                <Grid
                  item
                  md={10}
                  container
                  alignItems="center"
                  style={{ paddingLeft: "10px" }}
                >
                  <img
                    src="star.png"
                    className={classes.imgFluid}
                    style={{ maxWidth: "20px" }}
                  />
                  <img
                    src="star.png"
                    className={classes.imgFluid}
                    style={{ maxWidth: "20px" }}
                  />
                  <img
                    src="star.png"
                    className={classes.imgFluid}
                    style={{ maxWidth: "20px" }}
                  />
                  <img
                    src="star.png"
                    className={classes.imgFluid}
                    style={{ maxWidth: "20px" }}
                  />
                </Grid>
                <Grid item>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  quis porta elit, sed accumsan lorem. Curabitur gravida non
                  lectus sit amet tincidunt.
                </Grid>
              </Grid>
            </Grid>
            <Grid container className={classes.reviewBoxContainer}>
              <Grid item md={11} container className={classes.reviewBox}>
                <Grid item md={2} container alignItems="center">
                  <img src="avatar.png" className={classes.imgFluid} />
                </Grid>
                <Grid
                  item
                  md={10}
                  container
                  alignItems="center"
                  style={{ paddingLeft: "10px" }}
                >
                  <img
                    src="star.png"
                    className={classes.imgFluid}
                    style={{ maxWidth: "20px" }}
                  />
                  <img
                    src="star.png"
                    className={classes.imgFluid}
                    style={{ maxWidth: "20px" }}
                  />
                  <img
                    src="star.png"
                    className={classes.imgFluid}
                    style={{ maxWidth: "20px" }}
                  />
                  <img
                    src="star.png"
                    className={classes.imgFluid}
                    style={{ maxWidth: "20px" }}
                  />
                </Grid>
                <Grid item>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  quis porta elit, sed accumsan lorem. Curabitur gravida non
                  lectus sit amet tincidunt.
                </Grid>
              </Grid>
            </Grid>
          </Slider>
        </Grid>
      </Grid>
      <Grid container className={classes.faqContainer} justify="center">
        <Grid container item md={10}>
          <Grid container item md={8}>
            <Grid item md={12} className={classes.faqTitle}>
              <Typography variant="h4">Frequently Asked Questions</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6">
                Q. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed?
              </Typography>
              <Typography variant="subtitle1" className={classes.faqAnswer}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6">
                Q. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed?
              </Typography>
              <Typography variant="subtitle1" className={classes.faqAnswer}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6">
                Q. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed?
              </Typography>
              <Typography variant="subtitle1" className={classes.faqAnswer}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6">
                Q. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed?
              </Typography>
              <Typography variant="subtitle1" className={classes.faqAnswer}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container className={classes.footer}></Grid>
    </>
  );
}

export default HomePage;

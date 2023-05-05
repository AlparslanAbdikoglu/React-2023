import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FadeInSection from "./FadeInSection";

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`
    };
  } else {
    return {
      id: `vertical-tab-${index}`
    };
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "theme.palette.background.paper",
    display: "flex",
    height: 300
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

const JobList = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const experienceItems = {
    CashierBasket: {
      jobTitle: "Chief Information Officer @",
      duration: "Jan 2021 - PRESENT",
      desc: [
        "We make shopping enjoyable, convenient and a great experience again.",
        "A small team of six is building the next unicorn  SAAS startup with a complete overhaul of shopping as we know it. Putting the End user time as the biggest priority shopping will be fun, smart and convenient since this is the next generation of shopping built with the newest techstack & love. ", 
        "Full development cycle from an IDEA to MVP currently in charge of the Mobile application development."
      ]
    },
    Internship: {
      jobTitle: "FM Intern at U.S. Embassy Budapest @",
      duration: "AUG 2020 - FEB 2021",
      desc: [
        "Interns in an embassy typically have various responsibilities and tasks depending on the specific embassy and its needs interns may engage in:",
        "Public Diplomacy and Outreach: Interns may contribute to the embassy's public diplomacy efforts by assisting in the organization of cultural events, educational programs, or exchange programs. They may help manage social media accounts, draft press releases, or engage with the local community to promote positive relations.",
        "Research and Analysis, Assistance to Consular Services, Language Support."
      ]
    },
    "International Diplomatic Student Association": {
      jobTitle: "Vice President: PR & Communications @",
      duration: "MAY 2019 - SEPT 2020",
      desc: [
        "Mainly providing opportunities to students who are willing to participate in special events, therefore gain unforgettable experiences and knowledge.",
        "Organizing events, Teaching principles of MUN (MUN stands for Model United Nations.) making PR materials and managing newsletters."
      ]
    },
   
  };

  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation={!isHorizontal ? "vertical" : null}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
        ))}
      </Tabs>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel value={value} index={i}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          <span className="joblist-job-company">{key}</span>
          <div className="joblist-duration">
            {experienceItems[key]["duration"]}
          </div>
          <ul className="job-description">
            {experienceItems[key]["desc"].map(function (descItem, i) {
              return (
                <FadeInSection delay={`${i + 1}00ms`}>
                  <li key={i}>{descItem}</li>
                </FadeInSection>
              );
            })}
          </ul>
        </TabPanel>
      ))}
    </div>
  );
};

export default JobList;

import { Box, Fade, Grid, Link, Typography } from "@mui/material";
import AboutOurTeamSVG from "../../../assets/illustrations/About-Our-Team-1--Streamline-Free-Illustrations.svg";
import BeingCreativeSVG from "../../../assets/illustrations/Being-Creative-1--Streamline-Free-Illustrations.svg";
import ConversationBusinessCustomerSVG from "../../../assets/illustrations/Conversation-Businessman-Customer-1--Streamline-Free-Illustrations.svg";
import DiversityUnitySVG from "../../../assets/illustrations/Online-Test-2--Streamline-Free-Illustrations.svg";
import OrderCompletedSVG from "../../../assets/illustrations/Order-Completed-2--Streamline-Free-Illustrations.svg";
import SmartPeopleSVG from "../../../assets/illustrations/Smart-People-1--Streamline-Free-Illustrations.svg";
import Benefit from "../../../components/benefit";
import scrollElementToViewById from "../../../utils/scroll-element-to-view";

const Benefits = () => {
  return (
    <>
      <Fade id="benefits" in={true} timeout={1000}>
        <Box
          p={5}
          mt={5}
          display="flex"
          flexDirection="column"
          alignItems={"center"}
          width="100%"
          justifyContent={"center"}
        >
          <Typography sx={{ typography: { sm: "h3", md: "h2", xs: "h4" } }}>
            Why should you chose <b>us</b>?
          </Typography>
          <Typography
            sx={{ typography: { sm: "h4", md: "h3", xs: "h5" } }}
            mt={2}
          >
            Check our FAQs or{" "}
            <Link onClick={() => scrollElementToViewById("contact")}>
              book a call
            </Link>
            .
          </Typography>
        </Box>
      </Fade>
      <Grid id="twist" container spacing={5} mt={5} px={5}>
        <Benefit
          svg={AboutOurTeamSVG}
          title={"Fixed Monthly Rates. No Surprises"}
          message={
            "Our pricing is clear and simple. We won't charge you more, neither surprise you with extra fees."
          }
        />
        <Benefit
          svg={BeingCreativeSVG}
          title={"Flexible & Scalable"}
          message={
            "Scale up, or down, changing subscriptions if and when you need."
          }
        />
        <Benefit
          svg={ConversationBusinessCustomerSVG}
          title={"High Quality Delivers"}
          message={
            "Top of the line quality development always at your fingertips, on demand."
          }
        />
        <Benefit
          svg={OrderCompletedSVG}
          title={"Unlimited Requests"}
          message={"Add as many request as you want to the queue."}
        />
        <Benefit
          svg={DiversityUnitySVG}
          title={"Unhappy with results? Money back"}
          message={
            "If our service is not what you were looking, within the first month, we will refund you."
          }
        />
        <Benefit
          svg={SmartPeopleSVG}
          title={"Fast Delivery"}
          message={
            "We work as fast as we can, and typically fulfil tasks within 2-4 business days."
          }
        />
      </Grid>
    </>
  );
};

export default Benefits;

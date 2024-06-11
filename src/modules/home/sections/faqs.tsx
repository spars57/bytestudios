import { Box, Divider, Grid, Link, Typography, useTheme } from "@mui/material";
import { FC } from "react";
import FrequentlyAskedQuestion from "../../../components/faq";
import scrollElementToViewById from "../../../utils/scroll-element-to-view";

const FAQs: FC = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        id="faqs"
        bgcolor={theme.palette.grey[100]}
        p={5}
        mt={5}
        display="flex"
        flexDirection="column"
        alignItems={"center"}
        width="100%"
        justifyContent={"center"}
      >
        <Typography variant="h3" fontWeight={"bold"}>
          Have Questions?
        </Typography>
        <Typography variant="h5" mt={2}>
          Check our FAQs or{" "}
          <Link onClick={() => scrollElementToViewById("contact")}>
            book a call
          </Link>
          .
        </Typography>
      </Box>
      <Box
        mt={5}
        display="flex"
        flexDirection="column"
        alignItems={"center"}
        width="100%"
        justifyContent={"center"}
      >
        <Typography variant="h4" fontWeight={"bold"}>
          FAQs
        </Typography>
      </Box>
      <Grid container justifyContent={"center"} mt={4}>
        <Grid item sm={0} md={3}></Grid>
        <Grid item sm={12} md={6}>
          <Grid container spacing={2} p={1}>
            <Grid item md={12} sm={12}>
              <FrequentlyAskedQuestion
                question="Why not just hire a full-time developer?"
                response={
                  <>
                    Hiring a full-time senior developer can be very expensive,
                    typically above $120,000 yearly plus benefits. Additionally,
                    it is very hard to find available developers nowadays, and
                    sometimes you might not have enough work for them.
                    <br />
                    <br />
                    By choosing us, you will have the flexibility to only pay
                    when you need our services, reducing unnecessary costs
                    associated with idle engineers.
                  </>
                }
              />
              <Divider />
            </Grid>
            <Grid item md={12} sm={12}>
              <FrequentlyAskedQuestion
                question="What tools are used to communicate?"
                response="The main tools we use are Microsoft Teams and Jira. Microsoft Teams will be used for communication with our founder, who can answer any questions you have about what's going on, or how things work. Jira will be used for all the task management."
              />
              <Divider />
            </Grid>
            <Grid item md={12} sm={12}>
              <FrequentlyAskedQuestion
                question="How does 24/7 support work?"
                response="You can reach out to our team, including our founder, directly through Slack, Teams, or whatever communication tool you prefer. All of us are developers and we're here to help with any questions you have about the project's status, what's going on, or anything else. If you'd like, we can also set up a call to discuss things in more detail."
              />
              <Divider />
            </Grid>
            <Grid item md={12} sm={12}>
              <FrequentlyAskedQuestion
                question="How do I make a new request?"
                response={
                  <>
                    By creating a new issue on Jira, and attaching any relevant
                    links or documents. Videos, Figma links, Google Docs -
                    anything.
                    <br />
                    <br />
                    We'll let you know if we have any questions or concerns
                    through Microsoft Teams.
                  </>
                }
              />
              <Divider />
            </Grid>
            <Grid item md={12} sm={12}>
              <FrequentlyAskedQuestion
                question="How does the satisfaction guarantee work?"
                response={
                  <>
                    If within the first month, you're not happy with our service
                    and work, you can let us know over Microsoft Teams you'd
                    like to issue a refund, and we'll close your account, and
                    return your money in full.
                    <br />
                    <br />
                    Please note this only applies to the first billing cycle.
                  </>
                }
              />
              <Divider />
            </Grid>
            <Grid item md={12} sm={12}>
              <FrequentlyAskedQuestion
                question="What if I don't like the work?"
                response="Don't worry! We will revise the work until you're completely satisfied"
              />
              <Divider />
            </Grid>
            <Grid item md={12} sm={12}>
              <FrequentlyAskedQuestion
                question="What if I just need one task done?"
                response="You can pause your subscription once the work is complete, and save the remainder of your subscription for the future when you have some more work."
              />
              <Divider />
            </Grid>
            <Grid item md={12} sm={12}>
              <FrequentlyAskedQuestion
                question="How does pausing my subscription work?"
                response={
                  <>
                    If you don't have enough work to fill an entire month, you
                    can pause once your tasks are completed. However many days
                    are left in your billing cycle can be used once you resume
                    the subscription.
                    <br />
                    <br />
                    Billing cycles are 31 days. If you pause on day 10, you will
                    have 21 days of service remaining when you resume.
                  </>
                }
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={0} md={3}></Grid>
      </Grid>
    </>
  );
};

export default FAQs;

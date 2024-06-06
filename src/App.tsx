import {
  Box,
  Button,
  Divider,
  Fade,
  Grow,
  Link,
  Slide,
  Typography,
  useTheme,
} from "@mui/material";
import FrequentlyAskedQuestion from "./components/faq";
import Header from "./components/header";
import HeaderLogo from "./components/logo";

function App() {
  const theme = useTheme();
  const setTag = (tag: string) => () => {
    const url = new URL(window.location.href);
    url.hash = tag.startsWith("#") ? tag : `#${tag}`;
    window.location.href = url.toString();
  };

  return (
    <Box>
      <a href="#home" />
      <Header onImageClick={setTag("home")} />
      {/*First Section*/}
      <section id="home" />
      <Box
        mt={3}
        height={450}
        display="flex"
        p={2}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box p={2} pl={5} id="home">
          <Slide direction="right" in={true} timeout={1000}>
            <Typography variant="h3">
              <Box display="flex">
                <div style={{ opacity: 0.6 }}>We help</div>&nbsp;<b>startups</b>
              </Box>
              <Box display="flex">
                <div>design, develop &</div>&nbsp;
                <b>ship</b>
              </Box>
              <Box display="flex">
                <div>software</div>&nbsp;
                <div style={{ opacity: 0.6 }}>in</div>&nbsp;
                <b>weeks</b>
                <div style={{ opacity: 0.6 }}>.</div>
              </Box>
              <Box display="flex">
                <div style={{ opacity: 0.6 }}>With a</div>&nbsp;
                <div style={{ fontStyle: "italic" }}>Twist</div>
                <div style={{ opacity: 0.6 }}>.</div>
              </Box>
            </Typography>
          </Slide>
          <Box mt={3} display="flex">
            <Grow in={true} timeout={2000}>
              <Box mr={1}>
                <Button sx={{ width: 200 }} variant="contained">
                  Book an intro call
                </Button>
              </Box>
            </Grow>
            <Grow in={true} timeout={4000}>
              <Box mx={1}>
                <Button
                  sx={{ width: 200 }}
                  variant="contained"
                  color="inherit"
                  onClick={setTag("twist")}
                >
                  What is the twist?
                </Button>
              </Box>
            </Grow>
          </Box>
        </Box>
      </Box>
      {/* Our Services */}
      <Box
        mt={5}
        display="flex"
        width="100%"
        justifyContent={"center"}
        p={1}
        px={5}
      >
        <Box display="flex" width="60%">
          <Fade in={true} timeout={1000}>
            <Typography variant="h4">
              Our <b>Services</b>
            </Typography>
          </Fade>
          <Box
            mx={2}
            width={"80%"}
            borderRadius={4}
            border={`1px solid ${theme.palette.primary.main}`}
          >
            <Box m={5}>
              <FrequentlyAskedQuestion
                timeout={1000}
                question="Frontend Development"
                response={
                  <>
                    Our frontend team can bring your designs to life, creating
                    captivating user interfaces and seamless user experiences.
                    With a focus on responsive design and optimal performance,
                    we craft applications that engage and retain your users.
                    From pixel-perfect layouts to interactive elements, we
                    ensure seamless interactions across devices. We're
                    particularly focused on the following:
                    <ul>
                      <li>React</li>
                      <li>React Native</li>
                      <li>Typescript</li>
                      <li>Responsive design</li>
                      <li>Webpack</li>
                      <li>Tailwind CSS</li>
                      <li>Frontend testing (Jest, Cypress, Enzyme, etc.)</li>
                      <li>RESTful API integration</li>
                      <li>Performance optimisation</li>
                      <li>Web accessibility</li>
                    </ul>
                  </>
                }
              />
              <Divider />
              <FrequentlyAskedQuestion
                timeout={2000}
                question="Backend Development"
                response={
                  <>
                    Our skilled team of backend developers builds the engine
                    that powers your software. From robust APIs and server-side
                    logic to database design and optimization, we ensure your
                    applications run efficiently and securely. With a focus on
                    scalability and performance, we lay the foundation for
                    seamless user experiences and reliable functionality. Trust
                    us to handle the technical complexities, so you can focus on
                    growing your business. We're particularly proficient in:
                    <ul>
                      <li>NodeJS</li>
                      <li>GO</li>
                      <li>Typescript</li>
                      <li>Express</li>
                      <li>Java</li>
                      <li>Springboot</li>
                      <li>JEST</li>
                      <li>Redis</li>
                      <li>Firebase</li>
                      <li>SQL Databases</li>
                      <li>No-SQL Databases</li>
                      <li>RESTful APIs</li>
                      <li>Git</li>
                    </ul>
                  </>
                }
              />
              <Divider />
              <FrequentlyAskedQuestion
                timeout={3000}
                question="Full-Stack App Development"
                response={
                  <>
                    Looking to build a powerful and robust application from the
                    ground up? From conceptualisation to execution, our
                    full-stack team can cover every aspect of your project to
                    ensure a seamless user experience and top-notch performance.
                    <br />
                    <br />
                    Our team will work closely with you to understand your
                    unique requirements and design a scalable and future-proof
                    architecture. Whether it's a web application, mobile app, or
                    both, we've got you covered across platforms.
                    <br />
                    <br />
                    Leveraging the latest technologies and best practices, we
                    create dynamic front-end interfaces that captivate users and
                    back-end systems that handle complex operations
                    effortlessly.
                    <br />
                    <br />
                    With a focus on continuous integration and agile
                    methodologies, we deliver regular updates and demos, so
                    you're always in the loop.
                    <br />
                    <br />
                    Ready to see your vision come to life? Book a call below,
                    and let's discuss how our full-stack team can turn your
                    dream application into a reality
                  </>
                }
              />
              <Divider />
              <FrequentlyAskedQuestion
                timeout={4000}
                question="UI/UX Design"
                response={
                  <>
                    Good UI/UX can make or break a product. As a team of
                    developers & designers, we ensure designs are always ready
                    for development with the right assets always available. We
                    actively gather feedback & iterate on designs until they are
                    perfect. We're particularly proficient in designing the
                    following:
                    <ul>
                      <li>Wire-framing</li>
                      <li>User experience design</li>
                      <li>Interaction design</li>
                      <li>User interface design</li>
                      <li>Design systems</li>
                    </ul>
                  </>
                }
              />
            </Box>
          </Box>
        </Box>
      </Box>
      {/*Pricing?*/}
      <Box
        mt={10}
        display="flex"
        flexDirection={"column"}
        justifyContent={"center"}
        width="100%"
      >
        <Typography variant="h1" textAlign={"center"}>
          LET'S TALK TODAY,
        </Typography>
        <Typography variant="h1" textAlign={"center"}>
          WE START TOMORROW
        </Typography>
      </Box>
      <Box display="flex" justifyContent="space-between" width="100%">
        <Box
          display="flex"
          flexDirection={"column"}
          justifyContent="center"
          borderRadius={4}
          mx={3}
          my={5}
          width={"50%"}
          border={`1px solid ${theme.palette.primary.main}`}
        >
          <Typography
            paddingTop={4}
            paddingBottom={2}
            variant="h5"
            fontWeight={"bold"}
            textAlign={"center"}
          >
            MAINTENANCE & GROWTH
          </Typography>
          <Typography variant="caption" textAlign={"center"}>
            One request at time.
          </Typography>
          <Typography variant="caption" textAlign={"center"}>
            Pause or cancel anytime.
          </Typography>
          <Typography
            marginTop={2}
            variant="h6"
            fontWeight={"bold"}
            textAlign={"center"}
          >
            3,000€-8,000€/m
          </Typography>
          <Box
            mt={1}
            mb={0.5}
            display="flex"
            width={"100%"}
            justifyContent={"center"}
          >
            <Button variant="contained" sx={{ width: 200 }}>
              get started
            </Button>
          </Box>
          <Box my={1} display="flex" width={"100%"} justifyContent={"center"}>
            <Link>Book a call</Link>
          </Box>
          <Box p={1}>
            <Typography variant="caption" fontWeight={"bold"}>
              What's included:
            </Typography>
            <Typography variant="caption">
              <ul>
                <li>
                  <b>One request at a time.</b>
                </li>
                <li>Average 2-4 day delivery</li>
                <li>Signed NDA if necessary</li>
                <li>Unlimited users</li>
                <li>24 Hour onboarding</li>
                <li>1st-Month Satisfaction Guarantee</li>
                <li>Easy credit-card payments</li>
                <li>Pause or cancel anytime</li>
              </ul>
            </Typography>
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection={"column"}
          justifyContent="center"
          borderRadius={4}
          mx={3}
          my={5}
          width={"50%"}
          border={`1px solid ${theme.palette.primary.main}`}
        >
          <Typography
            paddingTop={4}
            paddingBottom={2}
            variant="h5"
            fontWeight={"bold"}
            textAlign={"center"}
          >
            E2E DEVELOPMENT
          </Typography>
          <Typography variant="caption" textAlign={"center"}>
            Your product or MVP, built for you, start to finish.
          </Typography>
          <Typography variant="caption" textAlign={"center"}>
            Same Benefits.
          </Typography>
          <Typography
            marginTop={2}
            variant="h6"
            fontWeight={"bold"}
            textAlign={"center"}
          >
            Custom
          </Typography>
          <Box
            mt={1}
            mb={0.5}
            display="flex"
            width={"100%"}
            justifyContent={"center"}
          >
            <Button variant="contained" sx={{ width: 200 }}>
              get started
            </Button>
          </Box>
          <Box my={1} display="flex" width={"100%"} justifyContent={"center"}>
            <Link>Book a call</Link>
          </Box>
          <Box p={1}>
            <Typography variant="caption" fontWeight={"bold"}>
              What's included:
            </Typography>
            <Typography variant="caption">
              <ul>
                <li>
                  <b>A dedicated project manager</b>
                </li>
                <li>Demos & updates shipped every 1-2 weeks on average</li>
                <li>Signed NDA if necessary</li>
                <li>Unlimited users</li>
                <li>24 Hour onboarding</li>
                <li>1st-Month Satisfaction Guarantee</li>
                <li>Easy credit-card payments</li>
                <li>Pause or cancel anytime</li>
              </ul>
            </Typography>
          </Box>
        </Box>
      </Box>
      {/*Have questions?*/}
      <Box
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
          Check our FAQs or <Link>book a call</Link>.
        </Typography>
      </Box>
      {/*FAQs*/}
      <a href="#faqs" />
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
      <Box mt={4} display="flex" width="100%" justifyContent={"center"}>
        <Box width="33%">
          <FrequentlyAskedQuestion
            question="Why not just hire a full-time developer?"
            response={
              <>
                Hiring a full-time senior developer can be very expensive,
                typically above $120,000 yearly plus benefits. Additionally, it
                is very hard to find available developers nowadays, and
                sometimes you might not have enough work for them.
                <br />
                <br />
                By choosing us, you will have the flexibility to only pay when
                you need our services, reducing unnecessary costs associated
                with idle engineers.
              </>
            }
          />
          <Divider />
          <FrequentlyAskedQuestion
            question="What tools are used to communicate?"
            response="The main tools we use are Microsoft Teams and Jira. Microsoft Teams will be used for communication with our founder, who can answer any questions you have about what's going on, or how things work. Jira will be used for all the task management."
          />
          <Divider />
          <FrequentlyAskedQuestion
            question="How does 24/7 support work?"
            response="You can reach out to our team, including our founder, directly through Slack, Teams, or whatever communication tool you prefer. All of us are developers and we're here to help with any questions you have about the project's status, what's going on, or anything else. If you'd like, we can also set up a call to discuss things in more detail."
          />

          <Divider />
          <FrequentlyAskedQuestion
            question="How do I make a new request?"
            response={
              <>
                By creating a new issue on Jira, and attaching any relevant
                links or documents. Videos, Figma links, Google Docs - anything.
                <br />
                <br />
                We'll let you know if we have any questions or concerns through
                Microsoft Teams.
              </>
            }
          />
          <Divider />
          <FrequentlyAskedQuestion
            question="How does the satisfaction guarantee work?"
            response={
              <>
                If within the first month, you're not happy with our service and
                work, you can let us know over Microsoft Teams you'd like to
                issue a refund, and we'll close your account, and return your
                money in full.
                <br />
                <br />
                Please note this only applies to the first billing cycle.
              </>
            }
          />
          <Divider />
          <FrequentlyAskedQuestion
            question="What if I don't like the work?"
            response="Don't worry! We will revise the work until you're completely satisfied"
          />
          <Divider />
          <FrequentlyAskedQuestion
            question="What if I just need one task done?"
            response="You can pause your subscription once the work is complete, and save the remainder of your subscription for the future when you have some more work."
          />
          <Divider />
          <FrequentlyAskedQuestion
            question="How does pausing my subscription work?"
            response={
              <>
                If you don't have enough work to fill an entire month, you can
                pause once your tasks are completed. However many days are left
                in your billing cycle can be used once you resume the
                subscription.
                <br />
                <br />
                Billing cycles are 31 days. If you pause on day 10, you will
                have 21 days of service remaining when you resume.
              </>
            }
          />
        </Box>
      </Box>
      {/*Footer*/}
      <Box
        mt={5}
        display={"flex"}
        flexDirection="column"
        alignItems={"center"}
        width="100%"
        height={200}
        style={{
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
        }}
      >
        <Box
          alignItems={"center"}
          display="flex"
          justifyContent="space-between"
          width="50%"
          height="84%"
        >
          <HeaderLogo onClick={setTag("home")} />
          <Box display="flex">
            {/*About*/}
            <Box mx={2} display="flex" flexDirection={"column"}>
              <Box mb={2}>
                <Typography variant="button">About</Typography>
              </Box>
              <Box my={0.6}>
                <Link
                  color="primary.contrastText"
                  variant="body1"
                  onClick={setTag("benefits")}
                >
                  How it works
                </Link>
              </Box>
              <Box my={0.6}>
                <Link
                  color="primary.contrastText"
                  variant="body1"
                  onClick={setTag("pricing")}
                >
                  Pricing
                </Link>
              </Box>
              <Box my={0.6}>
                <Link
                  color="primary.contrastText"
                  variant="body1"
                  onClick={setTag("faqs")}
                >
                  FAQs
                </Link>
              </Box>
            </Box>
            {/*Legal*/}
            <Box mx={2} display="flex" flexDirection={"column"}>
              <Box mb={2}>
                <Typography variant="button">Legal</Typography>
              </Box>
              <Box my={0.6}>
                <Link color="primary.contrastText" variant="body1">
                  Terms & Conditions
                </Link>
              </Box>
              <Box my={0.6}>
                <Link color="primary.contrastText" variant="body1">
                  Data Privacy
                </Link>
              </Box>
            </Box>
            {/*Company*/}
            <Box mx={2} display="flex" flexDirection={"column"}>
              <Box mb={2}>
                <Typography variant="button">Company</Typography>
              </Box>
              <Box my={0.6}>
                <Link color="primary.contrastText" variant="body1">
                  Support
                </Link>
              </Box>
              <Box my={0.6}>
                <Link color="primary.contrastText" variant="body1">
                  Press
                </Link>
              </Box>
            </Box>
            {/*Follow Us*/}
            <Box mx={2} display="flex" flexDirection={"column"}>
              <Box mb={2}>
                <Typography variant="button">Follow Us</Typography>
              </Box>
              <Box my={0.6}>
                <Link color="primary.contrastText" variant="body1">
                  Instagram
                </Link>
              </Box>
              <Box my={0.6}>
                <Link color="primary.contrastText" variant="body1">
                  LinkedIn
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          p={1}
          display="flex"
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
          width="100%"
          borderTop="1px solid #9119F6"
        >
          <Typography variant="caption">
            Copyright © 2024 <b>Bytestudios.Ltd.</b>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default App;

import { Box, Divider, Fade, Grid, Typography, useTheme } from "@mui/material";
import { FC } from "react";
import FrequentlyAskedQuestion from "../../../components/faq";

const Services: FC = () => {
  const theme = useTheme();
  return (
    <Grid container mt={20}>
      <Grid item md={3} sm={12}>
        <Fade in={true} timeout={1000}>
          <Box p={2}>
            <Typography variant="h4" textAlign="center">
              Our <b>Services</b>
            </Typography>
          </Box>
        </Fade>
      </Grid>
      <Grid item md={6} sm={12}>
        <Box
          mx={2}
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
                  With a focus on responsive design and optimal performance, we
                  craft applications that engage and retain your users. From
                  pixel-perfect layouts to interactive elements, we ensure
                  seamless interactions across devices. We're particularly
                  focused on the following:
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
              timeout={1200}
              question="Backend Development"
              response={
                <>
                  Our skilled team of backend developers builds the engine that
                  powers your software. From robust APIs and server-side logic
                  to database design and optimization, we ensure your
                  applications run efficiently and securely. With a focus on
                  scalability and performance, we lay the foundation for
                  seamless user experiences and reliable functionality. Trust us
                  to handle the technical complexities, so you can focus on
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
              timeout={1400}
              question="Full-Stack App Development"
              response={
                <>
                  Looking to build a powerful and robust application from the
                  ground up? From conceptualisation to execution, our full-stack
                  team can cover every aspect of your project to ensure a
                  seamless user experience and top-notch performance.
                  <br />
                  <br />
                  Our team will work closely with you to understand your unique
                  requirements and design a scalable and future-proof
                  architecture. Whether it's a web application, mobile app, or
                  both, we've got you covered across platforms.
                  <br />
                  <br />
                  Leveraging the latest technologies and best practices, we
                  create dynamic front-end interfaces that captivate users and
                  back-end systems that handle complex operations effortlessly.
                  <br />
                  <br />
                  With a focus on continuous integration and agile
                  methodologies, we deliver regular updates and demos, so you're
                  always in the loop.
                  <br />
                  <br />
                  Ready to see your vision come to life? Book a call below, and
                  let's discuss how our full-stack team can turn your dream
                  application into a reality
                </>
              }
            />
            <Divider />
            <FrequentlyAskedQuestion
              timeout={1600}
              question="UI/UX Design"
              response={
                <>
                  Good UI/UX can make or break a product. As a team of
                  developers & designers, we ensure designs are always ready for
                  development with the right assets always available. We
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
      </Grid>
    </Grid>
  );
};

export default Services;

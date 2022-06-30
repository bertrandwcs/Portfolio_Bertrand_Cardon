import React from "react";
import ContactForm from "../components/ContactForm";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";
import SocialNetwork from "../components/SocialNetwork";
import Buttons from "../components/Buttons";
import { motion } from "framer-motion";

const Contact = () => {
  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: 200,
    },
  };

  return (
    <main>
      <Mouse />
      <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={pageTransition}
        transition={{ duration: 0.4 }}
        className="contact"
      >
        <Navigation />
        <Logo />
        <ContactForm />
        <div className="experience-container">
          <p className="experience">
            Analyzing of website project development in order to enhance the
            Business of Customer. Development in ReactJS/Redux with a good
            knowledge of CSS and JavaScript. Deployment coordination related to
            Flex release(Tool : Visual Studio). BAU (Business As Usual)
            activities: Web development, web architecture, template concept
            design analyst. Basic skills in Backend architecture. (project
            performed: Financial web app, Community platform, E-commerce floral
            workshop)
          </p>
        </div>
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>Address</h4>
              <p>1490 Court-Saint-Etienne</p>
            </div>
          </div>
          <div className="phone">
            <div className="content">
              <h4>Mobile</h4>
              <CopyToClipboard text="0474682578" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => alert("Téléphone copié !")}
                >
                  0474 68 25 78
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <div className="email">
            <div className="content">
              <h4>Email</h4>
              <CopyToClipboard
                text="bertrandcardon@hotmail.com"
                className="hover"
              >
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => alert("Email copié !")}
                >
                  bertrandcardon@hotmail.com
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <SocialNetwork />
          <div className="credits">
            <p>Bertrand Cardon - 2022</p>
          </div>
        </div>
        <Buttons left={"/projet-5"} />
      </motion.div>
    </main>
  );
};

export default Contact;

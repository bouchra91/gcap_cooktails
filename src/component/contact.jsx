import React from "react";
import { storeInfo, openingHours, socials } from "/src/constants/index.js";

import { SplitText } from "gsap/all";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
const Contact = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#contact", { type: "words" });

    const timeLine = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
      },
      ease: "power1.inOut",
    });

    timeLine
      .from(titleSplit.words, {
        opacity: 0,
        duration: 1,
        yPercent: 100,
        stagger: 0.02,
      })
      .from("#contact h3 , #contact p ", {
        opacity: 0,
        duration: 1,
        yPercent: 100,
        stagger: 0.02,
      })
      .to("#f-left-leaf", {
        y: "-50",
        duration: 1,
        ease: "power1.inOut",
      })
      .to("#f-right-leaf", {
        y: "-50",
        duration: 1,
        ease: "power1.inOut",
      });
  });

  return (
    <footer id="contact">
      <img
        src="/src/assets/public/images/footer-left-leaf.png"
        id="f-left-leaf"
      />
      <img
        src="/src/assets/public/images/footer-right-leaf.png"
        id="f-right-leaf"
      />
      <div className="content ">
        <h2>{storeInfo.heading}</h2>
        <div>
          <h3>visit our store</h3>
          <p>{storeInfo.address}</p>
        </div>
        <div>
          <h3>contact us</h3>
          <p>{storeInfo.contact.phone}</p>
          <p>{storeInfo.contact.email}</p>
        </div>

        <div>
          <h3>open every day</h3>
          {openingHours.map((data, index) => (
            <p key={index}>{`${data.day}: ${data.time}`}</p>
          ))}
        </div>
        <div>
          <h3>Socials</h3>
          <div className="flex-center gap-5">
            {socials.map((social, index) => (
              <div key={index} className="flex-center gap-5">
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  <img src={social.icon} alt={social.name} className="" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <img
        src="/src/assets/public/images/footer-drinks.png"
        className="drink-img"
      />
    </footer>
  );
};

export default Contact;

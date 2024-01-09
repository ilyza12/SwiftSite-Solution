import React from "react";

const teamMembers = [
  {
    name: "AMMAR",
    role: "CTO",
    description:
      "Plays a pivotal role in developing and implementing the company's technology strategy and overseeing the technical aspects of product development.",
  },
  {
    name: "HARITH",
    role: "CEO",
    description:
      "Responsible for making crucial corporate decisions, overseeing overall operations, and ensuring the company's strategic goals are met.",
  },
  {
    name: "NORHAZIRA",
    role: "Marketing Manager",
    description:
      "Responsible for leading the marketing team in developing and executing effective strategies, analyzing market trends and customer behavior to make informed marketing decisions.",
  },

  {
    name: "ILYZA",
    role: "Business Analyst",
    description:
      "Responsible for working closely with various departments to gather and analyze data for informed decision-making.",
  },

  {
    name: "DANISH",
    role: "Software engineer",
    description:
      "Designs, develops, and maintains software systems and collaborates with the development team to create high-quality, efficient, and scalable software solutions.",
  },
];

function Team() {
  let message = `Get to know the dynamic individuals who power our team! Each member brings unique skills and expertise, contributing to a collaborative and innovative environment. Meet the faces behind our success and discover the passion that drives us to exceed expectations.`;

  return (
    <section className="team-white">
      <div className="team">
        <div className="team-row">
          <div className="team-col-full text-center">
            <h2 className="team-title">Meet Our Team</h2>
            <p className="team-subtitle">{message}</p>
          </div>
          <div id="teams-container">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-col">
                <div className="team-item">
                  <div className="team-img">
                    <img src={`./img/${member.name.toLowerCase()}.jpg`} alt={member.name} />
                  </div>

                  <h3>{member.name}</h3>
                  <div className="team-info">
                    <p>{member.role}</p>
                  </div>
                  <p>{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;

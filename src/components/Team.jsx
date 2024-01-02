import React from "react";

const teamMembers = [
  {
    name: "HARITH",
    role: "CEO",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "AMMAR",
    role: "CTO",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "NORHAZIRA",
    role: "Marketing Manager",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },

  {
    name: "ILYZA",
    role: "Business Analyst",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },

  {
    name: "DANISH",
    role: "Software engineer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

function Team() {
  let message = `There are many variations of passages of Lorem Ipsum available but the \n majority have suffered alteration in some injected humour.`;

  return (
    <section className="team-white">
      <div className="team">
        <div className="team-row">
          <div className="team-col-full text-center">
            <h2 className="team-title">Meet Our Team</h2>
            <p className="team-subtitle">{message}</p>
          </div>
          {teamMembers.map((member, index) => (
            <div key={index} className="team-col">
              <div className="team-item">
                <div class="team-img">
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
    </section>
  );
}

export default Team;

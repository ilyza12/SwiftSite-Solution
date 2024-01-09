import Affiliated from "./Affiliated";

export default function Hero() {
  return (
    <div id="hero">
      <div id="container">
        <div id="container__content" className="justify-between items-center">
          <div id="left-side">
            <p id="info">New and elegant</p>
            <h1 className="">
              SwiftSite
              <span className="highlight"> Solutions</span>
            </h1>
            <p id="description">
              Where innovation meets design excellence. Transform your digital presence with our
              cutting-edge solutions, tailored to elevate your brand and captivate your audience.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="button">Get Started</button>
              <button className="button2">Learn More</button>
            </div>
          </div>
          <div id="right-side">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              width="100%"
              height="100%"
              src="/img/Web Design CAT201.webp"
            />
          </div>
        </div>
      </div>
      <Affiliated />
    </div>
  );
}

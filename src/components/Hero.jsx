import Affiliated from "./Affiliated";

export default function Hero() {
  return (
    <div id="hero">
      <div id="container">
        <div id="container__content" class="justify-between items-center">
          <div id="left-side">
            <p id="info">New and elegant</p>
            <h1 class="">
              SwiftSite
              <br class="hidden lg:inline-block" />
              <span class="highlight">Solutions</span> 
            </h1>
            <p id="description">
            Where innovation meets design excellence. Transform your digital presence with our cutting-edge solutions, tailored to elevate your brand and captivate your audience.
            </p>
            <div class="flex gap-4 justify-center">
              <button class="button">Get Started</button>
              <button class="button2">Learn More</button>
            </div>
          </div>
          <div id="right-side">
            <img
              class="object-cover object-center rounded"
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
           

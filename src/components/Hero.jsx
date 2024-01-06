import Affiliated from "./Affiliated";

export default function Hero() {
  return (
    <div id="hero">
      <div id="container">
        <div id="container__content" class="justify-between items-center">
          <div id="left-side">
            <p id="info">New and elegant</p>
            <h1 class="">
              Unlock your idea, where
              <br class="hidden lg:inline-block" />
              <span class="highlight">creativity</span> meets digital brilliance
            </h1>
            <p id="description">
            where innovation meets design excellence. Transform your digital presence with our cutting-edge solutions, tailored to elevate your brand and captivate your audience.
            </p>
            <div class="flex gap-4 justify-center">
              <button class="button">Button Now</button>
              <button class="button2">Do what it says</button>
            </div>
          </div>
          <div id="right-side">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              width="100%"
              height="100%"
              src="/img/img.png"
            />
          </div>
        </div>
      </div>
      <Affiliated />
    </div>
  );
}

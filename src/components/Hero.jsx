export default function Hero() {
  return (
    <div id="hero">
      <div id="container">
        <div id="container__content" class="md:flex justify-between items-center">
          <div id="left-side">
            <p id="info">New and improved</p>
            <h1 class="">
              Before they sold out
              <br class="hidden lg:inline-block" />
              <span class="highlight">readymade</span> gluten
            </h1>
            <p id="description">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed
              tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken
              authentic tumeric truffaut hexagon try-hard chambray.
            </p>
            <div class="flex gap-4 justify-center md:justify-left">
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
              src="https://dummyimage.com/720x600"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

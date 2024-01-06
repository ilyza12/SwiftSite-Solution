export default function Services() {
  const services = [];
  return (
    <>
      <div className="service" id="services">
        <h2 className="service__title">Our Services</h2>
        <div className="service__content">
          {/*<div className="service__container">
            {[...Array(4)].map((_, i) => (
              <div key={`service-` + i} className="service__item">
                <div className="service__item-icon">
                  <img src={`/icons/cube-side.svg`} alt="icon" />
                </div>
                <h3 className="service__item-title">Service {i + 1}</h3>
                <p className="service__item-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum,
                  voluptate quidem, quod, quae officiis
                </p>
              </div>
            ))}
            </div>*/}
          <div className="service__container">
            
              <div className="service__item">
                <div className="service__item-icon">
                  <img src={`/icons/cube-side.svg`} alt="icon" />
                </div>
                <h3 className="service__item-title">Product Design</h3>
                <p className="service__item-desc">
                Transform your ideas into stunning, user-centric products with our expert product design services. From concept to prototype, 
                we collaborate closely to ensure your vision is brought to life. Our innovative approach blends aesthetics with functionality to create products that resonate with your audience and make a lasting impact.
                </p>
              </div>
          </div>
          <div className="service__container">
            <div className="service__item">
              <div className="service__item-icon">
                <img src={`/icons/cube-side.svg`} alt="icon" />
              </div>
              <h3 className="service__item-title">Web Development and Design</h3>
              <p className="service__item-desc">
              Elevate your online presence with our comprehensive web development and design solutions. We craft visually appealing, 
              responsive websites that not only captivate visitors but also deliver seamless user experiences. Whether you need a new website, an e-commerce platform, or a redesign, our team is here to transform your digital space.
              </p>
            </div>
        </div>
        <div className="service__container">
            <div className="service__item">
              <div className="service__item-icon">
                <img src={`/icons/cube-side.svg`} alt="icon" />
              </div>
              <h3 className="service__item-title">IT Consulting</h3>
              <p className="service__item-desc">
              Navigate the complexities of technology with our strategic IT consulting services. We provide tailored insights to align your IT infrastructure with your business goals. Our experts offer guidance on technology adoption, system optimization, 
              and security strategies, ensuring your business stays agile and resilient in today's dynamic landscape.
              </p>
            </div>
        </div>
        <div className="service__container">
            <div className="service__item">
              <div className="service__item-icon">
                <img src={`/icons/cube-side.svg`} alt="icon" />
              </div>
              <h3 className="service__item-title">Manage IT services</h3>
              <p className="service__item-desc">
              Relieve the burden of IT management with our reliable and proactive managed IT services. We take care of your technology infrastructure, offering 24/7 support, monitoring, and maintenance. From troubleshooting to strategic planning, 
              our team ensures your IT environment runs smoothly, allowing you to focus on your core business objectives.
              </p>
            </div>
        </div>

          <div className="service__img__container">
            {/* TODO: change image to match theme later */}
            <img className="service__img" src="/img/service.webp" alt="random" />
          </div>
        </div>
      </div>
    </>
  );
}

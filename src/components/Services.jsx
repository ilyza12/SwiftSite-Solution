export default function Services() {
  const services = [];
  return (
    <>
      <div className="service" id="services">
        <h2 className="service__title">Our Services</h2>
        <div className="service__content">
          <div className="service__container">
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
          </div>
          <div>
            {/* TODO: change image to match theme later */}
            <img className="service__img" src="/img/service.webp" alt="random" />
          </div>
        </div>
      </div>
    </>
  );
}

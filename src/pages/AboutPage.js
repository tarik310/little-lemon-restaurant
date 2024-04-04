export default function AboutPage() {
  return (
    <>
      <section className="about-container">
        <div className="about-column about-text">
          <h2 className="about-heading-primary">Little Lemon Restaurant</h2>
          <p className="about-paragraph">
            Experience the essence of culinary excellence at Little Lemon Restaurant,
            nestled in the vibrant heart of Chicago. With a rich fusion of Mediterranean
            tradition and contemporary flair, our family-owned establishment invites you
            on a gastronomic journey like no other.
          </p>
          <p className="about-paragraph">
            At Little Lemon, we meticulously select the freshest ingredients, ensuring
            each dish bursts with authentic Mediterranean flavors. Our skilled chefs,
            drawing inspiration from generations of culinary wisdom, masterfully blend
            traditional recipes with innovative techniques, crafting culinary delights
            that tantalize the senses.
          </p>
        </div>
        <div className="about-column about-image-container">
          <div className="about-image-wrapper">
            <img className="about-image" src="/images/about1.jpg" alt="About us 1" />
          </div>
        </div>
      </section>
    </>
  );
}

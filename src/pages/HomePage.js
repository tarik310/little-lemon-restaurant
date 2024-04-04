import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import TestimonialsCard from "../components/TestimonialsCard";

const data = [
  {
    name: "Greek Salad",
    price: "$5.99",
    image: "/images/Greek_Salad.jpeg",
    description:
      "Crisp lettuce, juicy tomatoes, cucumber, red onions, and briny Kalamata olives.",
  },
  {
    name: "Bruschetta",
    price: "$6.99",
    image: "/images/Bruschetta.jpeg",
    description:
      "Grilled or toasted bread slices, garlic, various fresh and flavorful toppings.",
  },
  {
    name: "Mascarpone Dessert",
    price: "$5.99",
    image: "/images/Mascarpone_Dessert.jpg",
    description:
      "Mascarpone cheese, known for its rich and velvety texture, is called Tiramisu.",
  },
];
const users = [
  {
    name: "Andrew",
    image: "/images/75.jpg",
    Testimon:
      "Little Lemon Restaurant delivers exceptional dining: exquisite flavors, impeccable service, and inviting ambiance—a true Chicago gem!",
  },
  {
    name: "Rachel",
    image: "/images/60.jpg",
    Testimon:
      "Little Lemon delights with every bite. Exceptional flavors and attention to detail make it a must-visit for food enthusiasts.",
  },
  {
    name: "Theres",
    image: "/images/77.jpg",
    Testimon:
      "delicious food, cozy atmosphere, and top-notch service combine for an unforgettable experience",
  },
];
export default function HomePage() {
  return (
    <>
      <section id="hero" className="container my-3">
        <div className="info pd pdr-65p">
          <br></br>
          <h1 className="lemon-primary-lemon">Little Lemon Restaurant</h1>
          <h2>Chicago</h2>
          <p>
            Step into our Mediterranean eatery, a cherished family establishment where the
            old blends seamlessly with the new. Situated in Chicago's bustling center, we
            delight in crafting a genuine culinary journey, honoring age-old traditions
            while injecting contemporary flair into our menu offerings.
          </p>
          <br></br>
          <Link className="txt-dec-none" to="table-reserve">
            <button className="reserve-btn">Table Reserve</button>
          </Link>
        </div>
      </section>
      <section id="special" className="container mb-3">
        <h2>This Week Specials!</h2>
        <div className="special-body">
          {data.map((element, index) => {
            return <Card key={index} data={element} />;
          })}
        </div>
      </section>
      <section className="testimonial container py-3 my-3">
        <h2>Testimonials from our guests!</h2>
        <div className="testrow justify-content-center align-items-center testpd">
          {users.map((person, index) => {
            return <TestimonialsCard key={index} data={person} />;
          })}
        </div>
      </section>
    </>
  );
}

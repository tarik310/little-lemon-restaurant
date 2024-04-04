import "./TestimonialsCard.css";

export default function TestimonialsCard({ data }) {
  return (
    <div className="col-25 col-50 col light">
      <div className="center mt-3">
        <img className="test-img" src={data.image} alt="" />
      </div>
      <h5 className="center my-2">{data.name}</h5>
      <p className="pd">{data.Testimon}</p>
    </div>
  );
}

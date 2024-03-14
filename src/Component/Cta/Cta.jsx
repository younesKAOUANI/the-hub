import { Link } from "react-router-dom";

function Cta() {
  return (
    <section
      className="cta-section"
      style={{ backgroundImage: "url(assets/images/home/cta-bg.png)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="sec-title">
              <span>The Hub</span> Courses from the top instructors.
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, reiciendis!
              <br /> piss cheeky my lady gutted mate excuse my french.
            </p>
            <Link
              to="/course-1"
              className="bisylms-btn"
              style={{ zIndex: "0" }}
            >
              Start Courses
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;

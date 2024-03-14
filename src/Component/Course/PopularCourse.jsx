import ProtoTypes from "prop-types";
import CourseItemCard from "../Cards/CourseItemCard";

function PopularCourse({ course, heading }) {
  return (

    <section className="popular-course-section">
      <div className="container">
        {heading && (
          <div className="row">
            <div className="col-md-8">
              <h2 className="sec-title">
                <span>Explore</span> Our Popular Courses
              </h2>
            </div>
            <div className="col-md-4">
              <a className="read-more" href="/course-1">
                Browse Online Courses<i className="arrow_right"></i>
              </a>
            </div>
          </div>
        )}
        {course && (
          <div className="row">
            <div className="col-lg-12">
              <div className="course-wrapper">
              <CourseItemCard
                  title="Business and Management"
                  link="single-course"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="74"
                    height="70"
                    viewBox="0 0 74 70"
                  >
                    <image
                      id="mind"
                      width="74"
                      height="70"
                      xlinkHref="assets/images/home/bussiness@4x.png"
                    />
                  </svg>
                </CourseItemCard>
                <CourseItemCard
                  title="Marketing"
                  link="single-course"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="74"
                    height="70"
                    viewBox="0 0 74 70"
                  >
                    <image
                      id="data"
                      width="74"
                      height="70"
                      xlinkHref="assets/images/home/marketing@4x.png"
                    />
                  </svg>
                </CourseItemCard>
                <CourseItemCard
                  title="Developement"
                  link="single-course"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="74"
                    height="70"
                    viewBox="0 0 74 70"
                  >
                    <image
                      id="proposal"
                      width="74"
                      height="70"
                      xlinkHref="assets/images/home/developement@4x.png  "
                    />
                  </svg>
                </CourseItemCard>
                <CourseItemCard title="Audio-visual" link="single-course">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="74"
                    height="70"
                    viewBox="0 0 74 70"
                  >
                    <image
                      id="chat"
                      width="74"
                      height="70"
                      xlinkHref="assets/images/home/videovisual@4x.png"
                    />
                  </svg>
                </CourseItemCard>
                <CourseItemCard
                  title="Languages"
                  link="single-course"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="74"
                    height="70"
                    viewBox="0 0 74 70"
                  >
                    <image
                      id="mind"
                      width="74"
                      height="70"
                      xlinkHref="assets/images/home/languages@4x.png"
                    />
                  </svg>
                </CourseItemCard>
              </div>
            </div>
          </div>
        )}
        <div className="row mt-120">
          <div className="col-lg-7 col-md-6">
            <div className="ab-thumb">
              <img src="assets/images/home/1.png" alt="" />
            </div>
          </div>
          <div className="col-lg-5 col-md-6">
            <div className="ab-content">
              <h3>Our Incubator</h3>
              <p className="mid-item">
                We will incubate the fuck out of you
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos eius vitae recusandae reprehenderit deleniti! Animi dolor minus at fugit maiores.
              </p>
              <a className="bisylms-btn" href="/Incubator">
                Know More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

PopularCourse.propTypes = {
  course: ProtoTypes.bool,
  heading: ProtoTypes.bool,
};

export default PopularCourse;

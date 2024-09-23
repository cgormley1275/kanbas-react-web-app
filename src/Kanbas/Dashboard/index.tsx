import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">

          <div className="wd-dashboard-course col" style={{ width: "250px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
                <img src="/images/teslabot.jpg" width="100%" height={160} alt="" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1234 React JS
                  </h5>
                  <p className="wd-dashboard-course-title">
                    Full Stack software developer
                  </p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "250px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/5001/Home">
                <img src="/images/cs1.jpeg" width="100%" height={160} alt="" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS5001 Python
                  </h5>
                  <p className="wd-dashboard-course-title">
                    Introduction to Programming
                  </p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "250px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/5004/Home">
                <img src="/images/cs2.jpeg" width="100%" height={160} alt="" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS5004 Java
                  </h5>
                  <p className="wd-dashboard-course-title">
                    Object Oriented Design
                  </p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "250px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/5008/Home">
                <img src="/images/cs3.jpeg" width="100%" height={160} alt="" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS5008 Systems
                  </h5>
                  <p className="wd-dashboard-course-title">
                    Algorithms/Computer Systems
                  </p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "250px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/5800/Home">
                <img src="/images/cs4.jpeg" width="100%" height={160} alt="" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS5800 Algorithms
                  </h5>
                  <p className="wd-dashboard-course-title">
                    Algorithms
                  </p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "250px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/5200/Home">
                <img src="/images/cs5.jpeg" width="100%" height={160} alt="" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS5200 Databases
                  </h5>
                  <p className="wd-dashboard-course-title">
                    Database Management Systems
                  </p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "250px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/5610/Home">
                <img src="/images/cs6.jpeg" width="100%" height={160} alt="" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS5610 Web Development
                  </h5>
                  <p className="wd-dashboard-course-title">
                    Web Development
                  </p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

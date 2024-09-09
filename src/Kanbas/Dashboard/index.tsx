import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">

        <div className="wd-dashboard-course">
          <img src="/images/teslabot.jpg" width={200} alt=""/>
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home">
              CS1234 React JS
            </Link>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/cs1.jpeg" width={200} alt=""/>
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/5001/Home">
              CS5001 Python
            </Link>
            <p className="wd-dashboard-course-title">
              Introduction to Programming
            </p>
            <Link to="/Kanbas/Courses/5001/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/cs2.jpeg" width={200} alt=""/>
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/5004/Home">
              CS5004 Java
            </Link>
            <p className="wd-dashboard-course-title">
              Object Oriented Design
            </p>
            <Link to="/Kanbas/Courses/5004/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/cs3.jpeg" width={200} alt=""/>
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/5008/Home">
              CS5008 Systems
            </Link>
            <p className="wd-dashboard-course-title">
              Algorithms and Computer Systems
            </p>
            <Link to="/Kanbas/Courses/5008/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/cs4.jpeg" width={200} alt=""/>
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/5800/Home">
              CS5800 Algorithms
            </Link>
            <p className="wd-dashboard-course-title">
              Algorithms
            </p>
            <Link to="/Kanbas/Courses/5800/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/cs5.jpeg" width={200} alt=""/>
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/5200/Home">
              CS5200 Databases
            </Link>
            <p className="wd-dashboard-course-title">
              Database Management Systems
            </p>
            <Link to="/Kanbas/Courses/5200/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/cs6.jpeg" width={200} alt=""/>
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/5610/Home">
              CS5610 Web Development
            </Link>
            <p className="wd-dashboard-course-title">
              Web Development
            </p>
            <Link to="/Kanbas/Courses/5610/Home"> Go </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

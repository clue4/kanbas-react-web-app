import './index.css';
import { courses } from "../../Kanbas/Database";
import { 
  Navigate, 
  Route, 
  Routes, 
  useLocation, 
  useParams 
} from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import { FaChevronRight } from "react-icons/fa";
import CourseNavigation from "./Navigation";

function Courses() {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  const { pathname } = useLocation();
  const pathArray = pathname.split('/');
  const page = pathArray[pathArray.length - 1];
  console.log(page)

  return (
    <div className='course-container'>
      <h1><span><HiMiniBars3 /> Course {course?.name}</span> <FaChevronRight /> {page}</h1>
      <hr id='grey' />
      <span>{course?.description}</span>
      <div className='course-content'>
        <CourseNavigation />
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<h1>Home</h1>} />
            <Route path="Modules" element={<h1>Modules</h1>} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<h1>Assignments</h1>} />
            <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>

    </div>
  );
}

export default Courses;


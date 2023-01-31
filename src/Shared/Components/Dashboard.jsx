import './Components-Style/dashboard-style.css'

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="dashboard-heading">
                <img src="/src/assets/icons/content_50px.png" alt="content_50px.png" />
                <h1>Dashboard</h1>
            </div>

            <div className="panel-dashboard">
                <StudentDashboard />
                <FacultyDashboard />
                <SubjectDashboard />
                <CourseDashboard />
            </div>
        </div>
    )
}

const StudentDashboard = () => {
    return (
        <div className="student-dashboard">
            <div className="dashboard-container">
                <img src="/src/assets/icons/dashboard_student.png" alt="dashboard_student.png" />

                <div className="student-total">
                    <h3>Total Students</h3>
                    <h1 className="dashboard-count"><span>150</span></h1>
                </div>
            </div>
        </div>
    )
}

const FacultyDashboard = () => {
    return (
        <div className="faculty-dashboard">
            <div className="dashboard-container">
                <img src="/src/assets/icons/dashboard_faculty.png" alt="dashboard_faculty.png" />
                
                <div className="faculty-total">
                    <h3>Total Faculties</h3>
                    <h1 className="dashboard-count"><span>25</span></h1>
                </div>
            </div>
        </div>
    )
}

const SubjectDashboard = () => {
    return (
        <div className="subject-dashboard">
            <div className="dashboard-container">
                <img src="/src/assets/icons/dashboard_subject.png" alt="dashboard_subject.png" />

                <div className="subject-total">
                    <h3>Total Subjects</h3>
                    <h1 className="subject-count"><span>123</span></h1>
                </div>
            </div>
        </div>
    )
}

const CourseDashboard = () => {
    return (
        <div className="course-dashboard">
            <div className="dashboard-container">
                <img src="/src/assets/icons/dashboard_course.png" alt="dashboard_course.png" />

                <div className="course-total">
                    <h3>Total Courses</h3>
                    <h1 className="subject-count"><span>54</span></h1>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
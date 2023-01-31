import './Components-Style/panel-style.css'
import { Link } from 'react-router-dom'

const PanelTab = () => {
    return (
        <div className="panel-tab">
            <div className="admin-avatar">
                <img src="/src/assets/male_user_125px.png" alt="male_user_125px.png" />

                <p>Jan Phillip Dacallos</p>
            </div>

            <div className="panel-buttons">
                <Link to="/dashboard">
                    <div className="panelBtn">
                        <img src="/src/assets/icons/content_40px.png" alt="content_50px.png" />
                        <p>Dashboard</p>
                    </div>
                </Link>
                <Link to="/students">
                    <div className="panelBtn">
                        <img src="/src/assets/icons/customer_35px.png" alt="customer_35px.png" />
                        <p>Student</p>
                    </div>
                </Link>
                <Link to="/faculty">
                    <div className="panelBtn">
                        <img src="/src/assets/icons/people_35px.png" alt="people_35px.png" />
                        <p>Faculty</p>
                    </div>
                </Link>
                <Link to="/subjects">
                    <div className="panelBtn">
                        <img src="/src/assets/icons/book_and_pencil_35px.png" alt="book_and_pencil_35px.png" />
                        <p>Subject</p>
                    </div>
                </Link>
                <Link to="/course">
                    <div className="panelBtn">
                        <img src="/src/assets/icons/syllabus_35px.png" alt="syllabus_35px.png" />
                        <p>Course</p>
                    </div>
                </Link>
                <Link to="/schedule">
                    <div className="panelBtn">
                        <img src="/src/assets/icons/schedule_35px.png" alt="schedule_35px.png" />
                        <p>Schedule</p>
                    </div>
                </Link>
                <Link to="/accounts">
                    <div className="panelBtn">
                        <img src="/src/assets/icons/cloud_user_35px.png" alt="cloud_user_35px.png" />
                        <p>Accounts</p>
                    </div>
                </Link>
                <Link to="/settings">
                    <div className="panelBtn">
                        <img src="/src/assets/icons/tune_35px.png" alt="tune_35px.png" />
                        <p>Settings</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default PanelTab;
import './Pages-Style/students-style.css'

const Students = () => {
    return (
        <div className="students">
            <div className="students-header">
                <h2>List of <span>Students</span></h2>

                <div className="students-buttons">
                    <button>Search</button>
                    <input type="number" className="searchBtn" placeholder="Enter student no..." />
                    
                    <button><img src="/src/assets/icons/Add Male User Group_35px.png" alt="Add Male User Group_35px.png" /> Add Student</button>
                </div>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Student No.</th>
                        <th>Last Name</th>
                        <th>First Name</th>
                        <th>Middle Name</th>
                        <th>Email</th>
                        <th>Course</th>
                        <th>Year</th>
                        <th>Section</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>1</td>
                        <td>204093</td>
                        <td>Dacallos</td>
                        <td>Jan Phillip</td>
                        <td>Morallos</td>
                        <td>jphillipdacallos@gmail.com</td>
                        <td>BSIT</td>
                        <td>3rd Year</td>
                        <td>C</td>
                        <td><img src="/src/assets/icons/eye_35px.png" alt="eye_35px.png" /> View</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>204093</td>
                        <td>Dacallos</td>
                        <td>Jan Phillip</td>
                        <td>Morallos</td>
                        <td>jphillipdacallos@gmail.com</td>
                        <td>BSIT</td>
                        <td>3rd Year</td>
                        <td>C</td>
                        <td><img src="/src/assets/icons/eye_35px.png" alt="eye_35px.png" /> View</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>204093</td>
                        <td>Dacallos</td>
                        <td>Jan Phillip</td>
                        <td>Morallos</td>
                        <td>jphillipdacallos@gmail.com</td>
                        <td>BSIT</td>
                        <td>3rd Year</td>
                        <td>C</td>
                        <td><img src="/src/assets/icons/eye_35px.png" alt="eye_35px.png" /> View</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>204093</td>
                        <td>Dacallos</td>
                        <td>Jan Phillip</td>
                        <td>Morallos</td>
                        <td>jphillipdacallos@gmail.com</td>
                        <td>BSIT</td>
                        <td>3rd Year</td>
                        <td>C</td>
                        <td><img src="/src/assets/icons/eye_35px.png" alt="eye_35px.png" /> View</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Students;
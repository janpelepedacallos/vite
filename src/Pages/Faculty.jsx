import './Pages-Style/faculty-style.css'

const Faculty = () => {
    return (
        <div className="faculty">
            <div className="faculty-header">
                <h2>List of <span>Faculty</span></h2>

                <button><img src="/src/assets/icons/Add Male User Group_35px.png" alt="Add Male User Group_35px.png" />Add Faculty</button>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Faculty ID</th>
                        <th>Full Name</th>
                        <th>Sex</th>
                        <th>Civil Status</th>
                        <th>Email</th>
                        <th>Department</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Jan Phillip M. Dacallos</td>
                        <td>Male</td>
                        <td>Single</td>
                        <td>jphillipdacallos@gmail.com</td>
                        <td>College of Science</td>
                        <td><img src="/src/assets/icons/eye_35px.png" alt="eye_35px.png" /> View</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Jan Phillip M. Dacallos</td>
                        <td>Male</td>
                        <td>Single</td>
                        <td>jphillipdacallos@gmail.com</td>
                        <td>Criminology Department</td>
                        <td><img src="/src/assets/icons/eye_35px.png" alt="eye_35px.png" /> View</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Jan Phillip M. Dacallos</td>
                        <td>Male</td>
                        <td>Single</td>
                        <td>jphillipdacallos@gmail.com</td>
                        <td>College of Engineering</td>
                        <td><img src="/src/assets/icons/eye_35px.png" alt="eye_35px.png" /> View</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Jan Phillip M. Dacallos</td>
                        <td>Male</td>
                        <td>Single</td>
                        <td>jphillipdacallos@gmail.com</td>
                        <td>College of Veterinary Medecine</td>
                        <td><img src="/src/assets/icons/eye_35px.png" alt="eye_35px.png" /> View</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Faculty;
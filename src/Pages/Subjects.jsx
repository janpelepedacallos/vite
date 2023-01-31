import './Pages-Style/subjects-style.css'

const Subjects = () => {
    return (
        <div className="subjects">
            <div className="subjects-header">
                <h2>List of <span>Subjects</span></h2>

                <button><img src="/src/assets/icons/Add Male User Group_35px.png" alt="Add Male User Group_35px.png" />Add Subjects</button>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Subject Code</th>
                        <th>Description</th>
                        <th>Units</th>
                        <th>Course</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>1</td>
                        <td>MS101</td>
                        <td>Discrete Mathematics</td>
                        <td>3</td>
                        <td>BSIT</td>
                        <td><img src="/src/assets/icons/eye_35px.png" alt="eye_35px.png" /> View</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>IPT101</td>
                        <td>Integrating Programming Technologies 1</td>
                        <td>3</td>
                        <td>BSIT</td>
                        <td><img src="/src/assets/icons/eye_35px.png" alt="eye_35px.png" /> View</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>SPI101</td>
                        <td>Social Professional Issues</td>
                        <td>3</td>
                        <td>BSIT</td>
                        <td><img src="/src/assets/icons/eye_35px.png" alt="eye_35px.png" /> View</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>SIA1</td>
                        <td>System Integration and Architecture 1</td>
                        <td>3</td>
                        <td>BSIT</td>
                        <td><img src="/src/assets/icons/eye_35px.png" alt="eye_35px.png" /> View</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>WS101</td>
                        <td>Web System</td>
                        <td>3</td>
                        <td>BSIT</td>
                        <td><img src="/src/assets/icons/eye_35px.png" alt="eye_35px.png" /> View</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Subjects;
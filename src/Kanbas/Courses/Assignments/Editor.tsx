export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name" className="form-label">Assignment Name</label>
            <input id="wd-name" value="A1" className="form-control"/><br /><br />
            <textarea id="wd-description" rows={10} cols={50} className="form-control">
                The assignment is available online Submit a link to the landing page of your Web application running on Netlify.  The landing pagr should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page.
            </textarea>
            <br />
            <div className="container">
                <div className="row">
                    <div className="col">
                        <label htmlFor="wd-points" className="form-label">Points</label>
                    </div>
                    <div className="col">
                        <input className="form-control" id="wd-points" value={100} />
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <label htmlFor="wd-group" className="form-label">Assignment Group</label>
                    </div>
                    <div className="col">
                        <select id="wd-group" className="form-control">
                            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                            <option value="QUIZZES">QUIZZES</option>
                            <option value="EXAMS">EXAMS</option>
                            <option value="PROJECTS">PROJECTS</option>
                            <option value="LABS">LABS</option>
                        </select>
                    </div>
                </div>

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as" className="form-label">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as" className="form-control">
                            <option value="PERCENTAGE">Percentage</option>
                            <option value="VALUE">Value</option>
                        </select>
                    </td>
                </tr>

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type" className="form-control">
                            <option value="ONLINE">Online</option>
                            <option value="INPERSON">In Person</option>
                        </select>
                    </td>
                </tr>

                <tr>
                    <td align="right" valign="top">
                    </td>
                    <td>
                        <label className="form-label">Online Entry Options</label>
                        <br />
                        <input type="checkbox" id="wd-text-entry" />
                        <label htmlFor="wd-text-entry">Text Entry</label><br />
                        <input type="checkbox" id="wd-website-url" />
                        <label htmlFor="wd-website-url">Website URL</label><br />
                        <input type="checkbox" id="wd-media-recordings" />
                        <label htmlFor="wd-media-recordings">Media Recordings</label><br />
                        <input type="checkbox" id="wd-student-annotation" />
                        <label htmlFor="wd-student-annotation">Student Annotation</label><br />
                        <input type="checkbox" id="wd-file-upload" />
                        <label htmlFor="wd-file-upload">File Uploads</label><br />
                    </td>
                </tr>

                <tr>
                    <td align="right" valign="top">
                        <label className="form-label" htmlFor="wd-assign-to">Assign to</label>
                    </td>
                    <td>
                        <input id="wd-assign-to" type="text" value="Everyone" className="form-control"/>
                    </td>
                </tr>

                <tr>
                    <td></td>
                    <td>
                        <label className="form-label" htmlFor="wd-due-date">Due</label><br />
                        <input type="date" className="form-control"
                            id="wd-due-date"
                            value="2024-05-13" /><br />
                    </td>
                </tr>

                <tr>
                    <td></td>
                    <td>
                        <td>
                            <label htmlFor="wd-available-from" className="form-label">Available From</label><br />
                            <input type="date" className="form-control"
                                id="wd-available-from"
                                value="2024-05-06" />
                        </td>
                        <td>
                            <label htmlFor="wd-available-until" className="form-label">Until</label><br />
                            <input type="date" className="form-control"
                                id="wd-available-until"
                                value="2024-05-20" />
                        </td>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td><hr /></td>
                </tr>
                <tr>
                    <td>
                    </td>
                    <td align="right">
                        <button className="btn btn-secondary">
                            Cancel
                        </button>
                        <button className="btn btn-danger">
                            Save
                        </button>
                    </td>
                </tr>
            </div>
        </div>
    );
}

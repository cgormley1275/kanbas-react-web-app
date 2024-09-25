export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name" className="form-label">Assignment Name</label>
            <input id="wd-name" value="A1" className="form-control" /><br />
            <textarea id="wd-description" rows={10} cols={50} className="form-control">
                The assignment is available online Submit a link to the landing page of your Web application running on Netlify.  The landing pagr should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page.
            </textarea>
            <br />
            <div className="container">
                <div className="row">
                    <div className="col">
                        <label htmlFor="wd-points" className="form-label float-end">Points</label>
                    </div>
                    <div className="col">
                        <input className="form-control" id="wd-points" value={100} />
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col">
                        <label htmlFor="wd-group" className="form-label float-end">Assignment Group</label>
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

                <div className="row mt-4">
                    <div className="col">
                        <label htmlFor="wd-display-grade-as" className="form-label float-end">Display Grade as</label>
                    </div>
                    <div className="col">
                        <select id="wd-display-grade-as" className="form-control">
                            <option value="PERCENTAGE">Percentage</option>
                            <option value="VALUE">Value</option>
                        </select>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col">
                        <label htmlFor="wd-submission-type" className="form-label float-end">Submission Type</label>
                    </div>
                    <div className="col">
                        <div className="border rounded p-4 ">
                            <select id="wd-submission-type" className="form-control">
                                <option value="ONLINE">Online</option>
                                <option value="INPERSON">In Person</option>
                            </select>
                            <label className="form-label mt-2"><b>Online Entry Options</b></label>
                            <br />
                            <input type="checkbox" id="wd-text-entry" />
                            <label htmlFor="wd-text-entry" className="form-label ms-1">Text Entry</label><br />
                            <input type="checkbox" id="wd-website-url" />
                            <label htmlFor="wd-website-url" className="form-label ms-1">Website URL</label><br />
                            <input type="checkbox" id="wd-media-recordings" />
                            <label htmlFor="wd-media-recordings" className="form-label ms-1">Media Recordings</label><br />
                            <input type="checkbox" id="wd-student-annotation" />
                            <label htmlFor="wd-student-annotation" className="form-label ms-1">Student Annotation</label><br />
                            <input type="checkbox" id="wd-file-upload" />
                            <label htmlFor="wd-file-upload" className="form-label ms-1">File Uploads</label><br />
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col">
                        <label className="form-label float-end" htmlFor="wd-assign-to">Assign</label>
                    </div>
                    <div className="col">
                        <div className="border rounded p-4">
                            <label className="form-label" htmlFor="wd-assign-to">Assign to</label>
                            <input id="wd-assign-to" type="text" value="Everyone" className="form-control" />
                            <label className="form-label" htmlFor="wd-due-date">Due</label><br />
                            <input type="date" className="form-control"
                                id="wd-due-date"
                                value="2024-05-13" /><br />
                            <label htmlFor="wd-available-from" className="form-label">Available From</label><br />
                            <input type="date" className="form-control"
                                id="wd-available-from"
                                value="2024-05-06" />
                            <label htmlFor="wd-available-until" className="form-label">Until</label><br />
                            <input type="date" className="form-control"
                                id="wd-available-until"
                                value="2024-05-20" />
                        </div>

                    </div>
                </div>
                <div className="row mt-4">
                    <hr />
                </div>
                <div className="float-end mt-0">
                    <button className="btn btn-secondary me-1">
                        Cancel
                    </button>
                    <button className="btn btn-danger">
                        Save
                    </button>
                </div>

            </div>
        </div>
    );
}

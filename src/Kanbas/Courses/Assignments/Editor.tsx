import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { assignments } from "../../Database";

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    console.log(aid)
    return (
        <div>
            {
                assignments.filter((assignments: any) => assignments._id === aid)
                    .map((assignment: any) => (
                        <div id="wd-assignments-editor">
                            <label htmlFor="wd-name" className="form-label">Assignment Name</label>
                            <input id="wd-name" defaultValue={assignment.title} className="form-control" /><br />
                            <textarea id="wd-description" rows={10} cols={50} className="form-control">
                                {assignment.description}
                            </textarea>
                            <br />
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="wd-points" className="form-label float-end">Points</label>
                                    </div>
                                    <div className="col">
                                        <input className="form-control" id="wd-points" value={assignment.points} />
                                    </div>
                                </div>

                                <div className="row mt-4">
                                    <div className="col">
                                        <label htmlFor="wd-group" className="form-label float-end">Assignment Group</label>
                                    </div>
                                    <div className="col">
                                        <select id="wd-group" className="form-control">
                                            {assignment.assignmentGroup === "ASSIGNMENTS" ? <option selected value="ASSIGNMENTS">ASSIGNMENTS</option> : <option value="ASSIGNMENTS">ASSIGNMENTS</option>}
                                            {assignment.assignmentGroup === "QUIZZES" ? <option selected value="QUIZZES">QUIZZES</option> : <option value="QUIZZES">QUIZZES</option>}
                                            {assignment.assignmentGroup === "EXAMS" ? <option selected value="EXAMS">EXAMS</option> : <option value="EXAMS">EXAMS</option>}
                                            {assignment.assignmentGroup === "PROJECTS" ? <option selected value="PROJECTS">PROJECTS</option> : <option value="PROJECTS">PROJECTS</option>}
                                            {assignment.assignmentGroup === "LABS" ? <option selected value="LABS">LABS</option> : <option value="LABS">LABS</option>}
                                        </select>
                                    </div>
                                </div>

                                <div className="row mt-4">
                                    <div className="col">
                                        <label htmlFor="wd-display-grade-as" className="form-label float-end">Display Grade as</label>
                                    </div>
                                    <div className="col">
                                        <select id="wd-display-grade-as" className="form-control">
                                            {assignment.display === "PERCENTAGE" ? <option selected value="PERCENTAGE">Percentage</option> : <option value="PERCENTAGE">Percentage</option>}
                                            {assignment.display === "VALUE" ? <option selected value="VALUE">Value</option> : <option value="VALUE">Value</option>}
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
                                                {assignment.submissionType === "ONLINE" ? <option selected value="ONLINE">Online</option> : <option value="ONLINE">Online</option>}
                                                {assignment.submissionType === "INPERSON" ? <option selected value="INPERSON">In Person</option> : <option value="INPERSON">In Person</option>}
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
                                                value={assignment.dueDate} /><br />
                                            <label htmlFor="wd-available-from" className="form-label">Available From</label><br />
                                            <input type="date" className="form-control"
                                                id="wd-available-from"
                                                value={assignment.availableFrom} />
                                            <label htmlFor="wd-available-until" className="form-label">Until</label><br />
                                            <input type="date" className="form-control"
                                                id="wd-available-until"
                                                value={assignment.availableUntil} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <hr />
                                </div>
                                <div className="float-end mt-0">
                                    <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
                                        <button className="btn btn-secondary me-1">
                                            Cancel
                                        </button>
                                    </Link>
                                    <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
                                        <button className="btn btn-danger">
                                            Save
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
            }
        </div>
    );
}

import { useParams } from "react-router";
import { Link } from "react-router-dom";
import * as client from "./client";
// import { assignments } from "../../Database";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, deleteAssignment, updateAssignment, setAssignments } from "./reducer";

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const { assignments } = useSelector((state: any) => state.assignmentReducer);
    let [assignment, setAssignment] = useState<any>(assignments.filter((assignments: any) => assignments._id === aid)[0]);
    if (!assignment) {
        assignment = {
            title: "",
            course: cid,
            description: "",
            points: 100,
            assignmentGroup: "ASSIGNMENTS",
            display: "PERCENTAGE",
            dueDate: "",
            availableFrom: "",
            availableUntil: ""
        }
    }
    const dispatch = useDispatch();
    const saveAssignment = async (assignment: any) => {
        const status = await client.updateAssignment(assignment);
        dispatch(updateAssignment(assignment));
    };
    const createAssignment = async (assignment: any) => {
        const newAssignment = await client.createAssignment(cid as string, assignment);
        dispatch(addAssignment(newAssignment));
    };
    const fetchAssignments = async () => {
        const assignments = await client.findAssignmentsForCourse(cid as string);
        dispatch(setAssignments(assignments));
    };
    useEffect(() => {
        fetchAssignments();
    }, []);
    // console.log(assignment)
    return (
        <div>
            {
                <div id="wd-assignments-editor">
                    <label htmlFor="wd-name" className="form-label">Assignment Name</label>
                    <input id="wd-name" defaultValue={assignment.title} className="form-control" onChange={(e) => setAssignment({ ...assignment, title: e.target.value })} /><br />
                    <textarea id="wd-description" rows={10} cols={50} className="form-control" onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}>
                        {assignment.description}
                    </textarea>
                    <br />
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <label htmlFor="wd-points" className="form-label float-end">Points</label>
                            </div>
                            <div className="col">
                                <input type="number" className="form-control" id="wd-points" defaultValue={assignment.points} onChange={(e) => setAssignment({ ...assignment, points: e.target.value })} />
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col">
                                <label htmlFor="wd-group" className="form-label float-end">Assignment Group</label>
                            </div>
                            <div className="col">
                                <select id="wd-group" className="form-control" onChange={(e) => setAssignment({ ...assignment, assignmentGroup: e.target.value })}>
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
                                <select id="wd-display-grade-as" className="form-control" onChange={(e) => setAssignment({ ...assignment, display: e.target.value })}>
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
                                    <select id="wd-submission-type" className="form-control" onChange={(e) => setAssignment({ ...assignment, submissionType: e.target.value })}>
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
                                    <input type="date" className="form-control" onChange={(e) => setAssignment({ ...assignment, dueDate: e.target.value })}
                                        id="wd-due-date"
                                        defaultValue={assignment.dueDate} /><br />
                                    <label htmlFor="wd-available-from" className="form-label">Available From</label><br />
                                    <input type="date" className="form-control" onChange={(e) => setAssignment({ ...assignment, availableFrom: e.target.value })}
                                        id="wd-available-from"
                                        defaultValue={assignment.availableFrom} />
                                    <label htmlFor="wd-available-until" className="form-label">Until</label><br />
                                    <input type="date" className="form-control" onChange={(e) => setAssignment({ ...assignment, availableUntil: e.target.value })}
                                        id="wd-available-until"
                                        defaultValue={assignment.availableUntil} />
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
                                {!(aid === "-1") && <button className="btn btn-danger" onClick={() => saveAssignment(assignment)}>
                                    Save
                                </button>}
                                {(aid === "-1") && <button className="btn btn-danger" onClick={() => createAssignment(assignment)}>
                                    Save
                                </button>}
                            </Link>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

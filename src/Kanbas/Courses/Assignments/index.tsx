import React, { useState, useEffect } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import * as client from "./client";
import { FaPlus } from "react-icons/fa6";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { MdAssignment } from "react-icons/md";
import { FaCaretDown, FaTrash } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
// import { assignments } from "../../Database";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import AssignmentDeleteButton from "./AssignmentDeleteButton";
import { addAssignment, deleteAssignment, updateAssignment, setAssignments } from "./reducer";

export default function Assignments() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { assignments } = useSelector((state: any) => state.assignmentReducer);
    
    const { cid, aid } = useParams();
    const dispatch = useDispatch();

    const removeAssignment = async (assignmentId: string) => {
        console.log(assignmentId)
        await client.deleteAssignment(assignmentId);
        dispatch(deleteAssignment(assignmentId));
    };
    const fetchAssignments = async () => {
        const assignments = await client.findAssignmentsForCourse(cid as string);
        dispatch(setAssignments(assignments));
    };

    useEffect(() => {
        fetchAssignments();
    }, []);
    return (
        <div id="wd-assignments" className="wd-assignments container">
            <div className="wd-assignments-search-header text-nowrap me-4">
                <div className="input-group mb-3" id="wd-search-assignment">
                    <div className="input-group-text wd-search-assignment-text me-0" > <HiMagnifyingGlass /> </div>
                    <input className="wd-search-assignment-input form-control me-5" placeholder="Search..." />
                </div>
                {currentUser.role === "FACULTY" && <div>
                    <button id="wd-add-assignment-group" className="btn btn-secondary">
                        <FaPlus className="me-2" />
                        Group
                    </button>
                    <a href={`#/Kanbas/Courses/${cid}/Assignments/-1`}>
                        <button id="wd-add-assignment" className="btn btn-danger">
                            <FaPlus className="me-2" />
                            Assignment
                        </button>
                    </a>
                </div>}
            </div>

            <ul id="wd-assignment-list" className="list-group rounded-0 me-4">
                <li className="list-group-item bg-secondary wd-assignments-title ps-0">
                    <div>
                        <BsGripVertical className="fs-1" />
                        <FaCaretDown className="fs-5 me-1" />
                    </div>
                    <div className="mt-1">
                        <h3 id="wd-assignments-title">
                            ASSIGNMENTS
                        </h3>
                    </div>
                    <div className="mt-2 wd-assignment-control-buttons">
                        <div className="wd-assignment-percent-of-total mx-2 rounded-pill px-2 py-1 btn">
                            <h5>40% of Total</h5>
                        </div>
                        <button className="wd-add-assignment bg-secondary">
                            <FaPlus />
                        </button>
                        <IoEllipsisVertical className="fs-4" />
                    </div>
                </li>
                {assignments
                    .filter((assignments: any) => assignments.course === cid)
                    .map((assignment: any) => (
                        <li key={assignment._id} className="wd-assignment-list-item list-group-item ps-0">
                            <div className="py-4 px-0">
                                < BsGripVertical className=" fs-1" />
                                < MdAssignment className="fs-1 text-success" />
                            </div>
                            <div className="ms-3">
                                <a className="wd-assignment-link text-dark text-decoration-none"
                                    href={currentUser.role === "FACULTY" ? `#/Kanbas/Courses/${cid}/Assignments/${assignment._id}` : `#/Kanbas/Courses/${cid}/Assignments`}>
                                    <b>{assignment._id} - {assignment.title}</b>
                                </a>
                                <div><span className="multiple-modules">Multiple Modules</span> | <b>Not available until</b> {assignment.availableFrom} at 12:00am |<br /> <b>Due</b> {assignment.dueDate} at 11:59pm | {assignment.points} pts</div>
                            </div>
                            <div className="py-4 lesson-control-button-container">
                            {currentUser.role === "FACULTY" && <AssignmentDeleteButton assignmentId={assignment._id} deleteAssignment={(assignmentId) => {
                                    console.log(assignmentId)
                                    removeAssignment(assignmentId)
                                }} />}
                                <LessonControlButtons />
                            </div>
                        </li>
                    ))}
            </ul>
        </div>
    );
}

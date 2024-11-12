import { FaTrash } from "react-icons/fa";
import AssignmentDeleteModal from "./AssignmentDeleteModal";
import { setAssignmentId } from "./deleteAssignmentReducer";
import { useSelector, useDispatch } from "react-redux";

export default function AssignmentDeleteButton({ assignmentId, deleteAssignment }: { assignmentId: string; deleteAssignment: (assignmentId: string) => void }) {
    const dispatch = useDispatch();
    return (
        // <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteAssignment(assignmentId)}/>
        <span>
            <div>{assignmentId}</div>
            {/* <button onClick={() => {dispatch(setAssignmentId(assignmentId))}}><FaTrash className="text-danger me-2 mb-1" data-bs-toggle="modal" data-bs-target="#wd-delete-assignment-dialog"/></button> */}
            <FaTrash className="text-danger me-2 mb-1" data-bs-toggle="modal" data-bs-target="#wd-delete-assignment-dialog" onClick={() => {dispatch(setAssignmentId(assignmentId))}}/>
            <AssignmentDeleteModal assignmentId={assignmentId} deleteAssignment={deleteAssignment}/>
            {/* <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteAssignment(assignmentId)} /> */}
        </span>

    )
}
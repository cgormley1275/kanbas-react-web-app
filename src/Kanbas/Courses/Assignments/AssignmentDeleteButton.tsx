import { FaTrash } from "react-icons/fa";
import AssignmentDeleteModal from "./AssignmentDeleteModal";

export default function AssignmentDeleteButton({ assignmentId, deleteAssignment }: { assignmentId: string; deleteAssignment: (assignmentId: string) => void }) {
    return (
        // <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteAssignment(assignmentId)}/>
        <span>
            <div>{assignmentId}</div>
            <FaTrash className="text-danger me-2 mb-1" data-bs-toggle="modal" data-bs-target="#wd-delete-assignment-dialog" />
            <AssignmentDeleteModal assignmentId={assignmentId} deleteAssignment={deleteAssignment}/>
            {/* <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteAssignment(assignmentId)} /> */}
        </span>

    )
}
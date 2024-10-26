import { FaTrash } from "react-icons/fa";

export default function AssignmentDeleteButton({assignmentId, deleteAssignment} : {assignmentId: string; deleteAssignment : (assignmentId: string) => void}) {
    return (
        <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteAssignment(assignmentId)}/>
    )
}
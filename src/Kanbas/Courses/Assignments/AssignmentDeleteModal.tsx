export default function AssignmentDeleteModal({ assignmentId, deleteAssignment }:
{ assignmentId: string; deleteAssignment: (assignmentId: string) => void; }) {
    return (
        // <div id="wd-delete-assignment-modal" className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false">
        //     Hello World!
        // </div>
        <div className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" id="wd-delete-assignment-dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Delete Assignment</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>Are you sure you want to delete this assignment?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
                        <button type="button" className="btn btn-danger" onClick={() => deleteAssignment(assignmentId)} data-bs-dismiss="modal">Yes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
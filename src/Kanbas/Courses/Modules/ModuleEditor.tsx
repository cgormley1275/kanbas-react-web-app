import { Link } from "react-router-dom";

export default function ModuleEditor({ courseId, dialogTitle, moduleName, setModuleName, addModule }:
    { courseId: string; dialogTitle: string; moduleName: string; setModuleName: (name: string) => void; addModule: () => void; }) {
    return (
        <div id="wd-add-module-dialog" className="modal" data-bs-backdrop="static" data-bs-keyboard="false">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">
                            {dialogTitle} </h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body">
                        <input className="form-control" value={moduleName} placeholder="Module Name"
                            onChange={(e) => setModuleName(e.target.value)} />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                            Cancel </button>
                        <Link to={`/Kanbas/Courses/${courseId}/Home`}>
                            <button onClick={addModule} type="button" data-bs-dismiss="modal" className="btn btn-danger">
                                Add Module </button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
}

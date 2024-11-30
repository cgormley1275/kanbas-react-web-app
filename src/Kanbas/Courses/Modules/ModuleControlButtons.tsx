import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import GreenCheckmark from "./GreenCheckmark";
import { Link } from "react-router-dom";
export default function LessonControlButtons({ courseId, moduleId, deleteModule, editModule }: {
    courseId: string;
    moduleId: string;
    deleteModule: (moduleId: string) => void;
    editModule: (moduleId: string) => void
}) {
    return (
        <div className="float-end">
            <FaPencil onClick={() => editModule(moduleId)} className="text-primary me-3" />
            <Link to={`/Kanbas/Courses/${courseId}/Home`}>
                <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteModule(moduleId)} />
            </Link>
            <GreenCheckmark />
            <BsPlus />
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}
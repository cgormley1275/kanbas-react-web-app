import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer";
import assignmentReducer from "./Courses/Assignments/reducer"
import enrollmentReducer from "./Dashboard/enrollmentReducer";
import deleteAssignmentReducer from "./Courses/Assignments/deleteAssignmentReducer";
const store = configureStore({
    reducer: {
        modulesReducer,
        accountReducer,
        assignmentReducer,
        enrollmentReducer,
        deleteAssignmentReducer
    },
});
export default store;
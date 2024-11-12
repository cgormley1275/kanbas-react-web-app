import { createSlice } from "@reduxjs/toolkit";
const aid = null;
const initialState = {
    newAssignmentId: aid,
};
const deleteAssignmentSlice = createSlice({
    name: "newAssignmentId",
    initialState,
    reducers: {
        setAssignmentId: (state, {payload: newAssignmentId}) => {
            state.newAssignmentId = newAssignmentId
            // console.log("hello: ", state.assignmentId)
        },
    },
});
export const { setAssignmentId } =
    deleteAssignmentSlice.actions;
export default deleteAssignmentSlice.reducer;
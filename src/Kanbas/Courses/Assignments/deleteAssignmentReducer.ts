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
        },
    },
});
export const { setAssignmentId } =
    deleteAssignmentSlice.actions;
export default deleteAssignmentSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../Database";
const initialState = {
    enrollments: enrollments,
};
const enrollmentsSlice = createSlice({
    name: "enrollments",
    initialState,
    reducers: {
        addEnrollment: (state, action) => {
            const newEnrollment: any = {
                _id: new Date().getTime().toString(),
                user: action.payload.currentUser._id,
                course: action.payload.course._id
            };
            state.enrollments = [...state.enrollments, newEnrollment] as any;
            console.log(state.enrollments)
        },
        deleteEnrollment: (state, action) => {
            state.enrollments = state.enrollments.filter(
                (e: any) => e.user !== action.payload.currentUser._id || e.course!= action.payload.course._id);
            console.log(state.enrollments)
        },
    },
});
export const { addEnrollment, deleteEnrollment } =
    enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
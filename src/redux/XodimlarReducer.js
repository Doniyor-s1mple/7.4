import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'XodimlarReducer',
    initialState: {
        Xodimlar: [
            { id: 1, firstname: 'John', lastname: "Doe", phone: 9090, lavozim: 'developer', level: 'senior' },
        ]
    },
    reducers: {
        addXodim: (state, action) => {
            state.Xodimlar.unshift({
                id: state.Xodimlar.length + 1,
                firstname: action.payload.firstname,
                lastname: action.payload.lastname,
                phone: action.payload.phone,
                lavozim: action.payload.lavozim,
                level: action.payload.level,
            })
        },
        editXodim: (state, action) => {
            state.Xodimlar.map(item => {
                if (item.id === action.payload.id) {
                    item.firstname = action.payload.firstname
                    item.lastname = action.payload.lastname
                    item.phone = action.payload.phone
                    item.lavozim = action.payload.lavozim
                    item.level = action.payload.level
                }
            })
        },
        DelUser: (state, action) => {
            state.Xodimlar.splice(action.payload, 1)
        }

    }

})


export default slice.reducer
export const { addXodim, editXodim, DelUser } = slice.actions

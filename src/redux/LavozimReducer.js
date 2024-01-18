import { createSlice } from "@reduxjs/toolkit";

var slice = createSlice({
    name: 'LavozimReducer',
    initialState: {
        Lavozim: [
            { id: 1, nomi: 'Team Leader', maosh: '2000$' },
            { id: 2, nomi: 'Manager', maosh: '1500$' },
        ]
    },
    reducers: {
        addLavozim: (state, action) => {
            state.Lavozim.push({
                id: state.Lavozim.length + 1,
                nomi: action.payload.nomi,
                maosh: action.payload.maosh
            })
        },
        editLavozim: (state, action) => {
            state.Lavozim.map(item => {
                if (item.id === action.payload.id) {
                    item.nomi = action.payload.nomi
                    item.maosh = action.payload.maosh
                }
            })
        },
        DeletLavozim: (state, action) => {
            state.Lavozim.splice(action.payload, 1)
        }
    }
})

export default slice.reducer
export const { addLavozim, editLavozim, DeletLavozim } = slice.actions
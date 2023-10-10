const { createSlice } = require('@reduxjs/toolkit');

export const filterInitialState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filters',
  initialState: filterInitialState,
  reducers: {
    filterContact: (state, action) => {
      state.filter = action.payload;
      return state;
    },
  },
});

export const { filterContact } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

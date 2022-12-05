import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  value: [
    {
      comment: 'Gojo looks nice. Excellent work amigo!',
      username: 'Saitama',
    },
    {
      comment: 'Catoru Sensei! Konnichiwa!',
      username: 'Yuji',
    },
  ],
};

export const commentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    // Action to add comment
    addComment: (state, action) => {
      state.value = [...state.value, action.payload];
    },

    // Special reducer for hydrating the state
    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.comments,
        };
      },
    },
  },
});

export const { addComment } = commentSlice.actions;
export const selectComments = (state) => state.comments.value;
export default commentSlice.reducer;

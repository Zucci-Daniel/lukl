import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

type SliceType = {};

const initialState: SliceType = {};

export const getData = createAsyncThunk(
  'question/getQuestions',
  async (payload: any, thunkAPI: any) => {
    try {
      return; // make request
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  },
);

export const namedSlice = createSlice({
  name: 'name',
  initialState,
  reducers: {
    reset: (state: any) => {
      state.loading = false;
      state.success = false;
      state.error = false;
    },
  },
  extraReducers: (builder: any) => {
    builder.addCase(getData.pending, (state: any) => {
      state.loading = true;
    });
    builder.addCase(getData.fulfilled, (state: any) => {
      state.success = true;
      state.loading = false;
    });
    builder.addCase(getData.rejected, (state: any) => {
      state.error = true;
      state.loading = false;
    });
  },
});

export const {reset, setAnsweredQuestions, clearArrays} = namedSlice.actions;
export const namedReducer = namedSlice.reducer;

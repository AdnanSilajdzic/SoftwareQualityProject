import { createSlice } from "@reduxjs/toolkit";

interface searchState {
  searchString: string;
  searchCategory: string;
  searchResults: any[];
}

const initialState: searchState = {
  searchString: "",
  searchCategory: "tv",
  searchResults: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchString: (state, action) => {
      state.searchString = action.payload;
    },
    setSearchCategory: (state, action) => {
      state.searchCategory = action.payload;
    },
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
  },
});

export const { setSearchString, setSearchCategory, setSearchResults } =
  searchSlice.actions;

export default searchSlice.reducer;

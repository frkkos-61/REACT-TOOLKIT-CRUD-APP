/**
 * Slice nedir ?
 *  Hem reducer'ı hem akisyonları hem de aksiyon tiplerini tek noktada oluşturmamızı sağlar
 * 
 
 * nasıl slice oluşturulur ?
 * import createSlice
 * name: slice ismi > string
 * initialState: başlangıç state'i > object
 * reducers: aksiyonların görevini tanımladığımız fonk. ifade eder.
 

 */
//? actionlar reducer'a gönderdiğimiz nesnelerdir.

import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 1, name: "ömer" },
  //* hem aksiyonları hem de görevlerini tanımla
  reducers: {
    increase: (state, action) => {
      //* artık state'i doğrudan güncelleyebilirsin
      state.count++;

      //eski yöntem: return {...state,count:State.count+1}
    },
    decrease: (state, action) => {
      state.count--;
    },
    //*aksiyon, nesne oluşturan fonksiyonlardır.

    setCount: (state, action) => {
      state.count = action.payload;
    },
  },
});

//! Yukarıdaki inc-dec action creator'lara erişmek için .actions yazarız yani aksiyonları çağırmak veya başka dosyalara aktarmak istediğinde genellikle buradan kullanılır.
export const { increase, decrease, setCount } = counterSlice.actions;

//!Genellikle reducer'ı dışa aktarırız, çünkü bu reducer, Redux store'unda kullanılacaktır:
export default counterSlice.reducer;

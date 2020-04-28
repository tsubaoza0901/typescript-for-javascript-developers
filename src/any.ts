import axios from 'axios';

export {};

let url: string =
  'http://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

axios.get(url).then(function (response) {
  // 追加---------------------------
  interface Article {
    id: number;
    title: string;
    description: string;
  }
  // ------------------------------
  let data: Article[]; // 修正：Object[] → Article[]
  data = response.data;
  console.log(data);
});

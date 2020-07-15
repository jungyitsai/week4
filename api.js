// ref: https://medium.com/i-am-mike/%E4%BD%BF%E7%94%A8axios%E6%99%82%E4%BD%A0%E7%9A%84api%E9%83%BD%E6%80%8E%E9%BA%BC%E7%AE%A1%E7%90%86-557d88365619

// import axios from 'axios'; 使用 CDN 的時候，不用 import

// Product 相關的 api
var uuid = '83e5dddb-dc92-4272-9ddd-488cfb6ae1e0';
var apiPath = 'https://course-ec-api.hexschool.io/';

const productListRequest = axios.create({
    baseURL: apiPath,
});

// Product 相關的 api
export const apiProductList = () => productListRequest.get(`api/${uuid}/ec/products`);


// // User相關的 api
const userRequest = axios.create({
  baseURL: apiPath,
});

// // 文章相關的 api
// const articleRequest = axios.create({
//   baseURL: 'https://api/article/'
// });
// // 搜尋相關的 api
// const searchRequest = axios.create({
//   baseURL: 'https://api/search/'
// });

// // User 相關的 api
export const apiUserLogin = data => userRequest.post('api/auth/login', data);
// export const apiUserLogout = data => userRequest.post('/signOut', data);
// export const apiUserSignUp = data => userRequest.post('/signUp', data);

// // 文章相關的 api
// export const apiArticleItem = () => articleRequest.get('/ArticleItem');
// export const apiArticleMsg = data => articleRequest.post('/ArticleMsg', data);
// export const apiArticleLink = data => articleRequest.post('/ArticleLink', data);

// // 搜尋相關的 api
// export const apiSearch = data => searchRequest.get(`/Search?searchdata=${data}`);
// export const apiSearchType = () => searchRequest.get(`/SearchType`);
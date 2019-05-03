const FilmList = () => import(/* webpackChunkName: 'films' */ '../views/FilmList');
const FilmDetail = () => import(/* webpackChunkName: 'films' */ '../views/FilmDetail');

export default [
  {
    path: '/',
    name: 'film-list',
    component: FilmList,
  },
  {
    path: '/details/:filmId',
    name: 'film-detail',
    component: FilmDetail,
    props: true,
  },
];

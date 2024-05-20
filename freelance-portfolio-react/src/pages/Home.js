import Header from "../components/header/Header";

const Home = () => {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p>
                JavaScript, TypeScript, ReactJS, Vue3, Vue3 + Composition API,
                Vuex, HTML, CSS, SCSS(SASS), NPM, BootStrap, Yarn, TailwindCSS,
                Handlebars, Vue-router, Websocket, Webpack, Axios, REST API
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Backend</h2>
              <p>NodeJS, MySQL, MongoDB, ASP.NET API, PostgreSQL </p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;

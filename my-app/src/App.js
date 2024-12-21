import logo from './logo.svg';
import './App.css';

function Header(props) {
  return (
    <header>
      <h1>
        <a href='/' onClick={function(event) {
          event.preventDefault();
          props.onChangeMode();
        }}>{props.title}</a>
      </h1>
    </header>
  );

}

function Nav(props) {
  return (
    <nav>
      <ol>
        {props.topics.map(topic => {
          return (
            <li key={topic.id}>
            <a id={topic.id} href={'/read/' + topic.id} onClick={(event) => {
              event.preventDefault();
              props.onChangeMode(event.target.id);
            }}>{topic.title}</a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}

function App() {
  const topics = [
    {id: 1, title: 'html', body: 'html is ...'},
    {id: 2, title: 'css', body: 'css is ...'},
    {id: 3, title: 'javascript', body: 'javascript is ...'},
  ];

  return (
    <div className="App">
      <Header title="WEB" onChangeMode={function() {
        alert('Altert');
      }}></Header>
      <Nav topics={topics} onChangeMode={(id) => {
        alert(id);
      }}></Nav>
      <Article title="Welcom" body="Hello, WEB"></Article>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

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
              props.onChangeMode(Number(event.target.id));
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
  const [id, setId] = useState(null);
  const topics = [
    {id: 0, title: 'Web', body: 'Hello, Web'},
    {id: 1, title: 'html', body: 'html is ...'},
    {id: 2, title: 'css', body: 'css is ...'},
    {id: 3, title: 'javascript', body: 'javascript is ...'},
  ];

  let topic = id !== null ? topics.find((topic) => topic.id === id) : topics[0];

  let article = <Article title={topic.title} body={topic.body}></Article>
  return (
    <div className="App">
      <Header title="WEB" onChangeMode={function() {
        alert('Altert');
      }}></Header>
      <Nav topics={topics} onChangeMode={(id) => {
        setId(id);
      }}></Nav>
      {article}
    </div>
  );
}

export default App;

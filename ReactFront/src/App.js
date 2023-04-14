import logo from "./logo.svg";
import "./App.css";
import axios from 'axios'


function App() {
  const [posts, updatePosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const resp = await axios.get("/api/posts");

      updatePosts(resp.data.data);
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      {posts.map((x) => {
        return (
          <div>
            <a href={x.url}>
              <div>id: {x._id}</div>
              <div>title: {x.title}</div>
              <div>url: {x.url}</div>
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default App;

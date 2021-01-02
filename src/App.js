import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import axios from "axios";
import "./App.css";
import { nowPlayingUrl } from "./api/api";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Example />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;

function Example() {
  const { isLoading, error, data } = useQuery("repoData", () =>
    axios.get(nowPlayingUrl()).then((res) => res.data.results)
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      {data.map((resu) => {
        return (
          <div>
            <h1>{resu.original_title}</h1>
            <img
              src={`https://image.tmdb.org/t/p/w500/${resu.poster_path}`}
              alt="ok"
            />
            <h3>{resu.overview}</h3>
            <img
              src={`https://image.tmdb.org/t/p/w500/${resu.backdrop_path}`}
              alt="ok"
            />
          </div>
        );
      })}
    </div>
  );
}

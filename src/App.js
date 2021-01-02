import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "./App.css";

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
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=1363d7b67a206e14c8f8e2ac254a40e7&region=In&sort_by=popularity.asc&include_adult=false&include_video=false&page=1&year=2021&with_original_language=hi"
    ).then((res) => res.json())
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return <div></div>;
}

import { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import FPQuotesData from "./component/FPQuotesData";

function App() {
  const client = new QueryClient({
      defaultOptions : {
        queries : {
          suspense : true
        }
      }
  })
  return (
    <div className="App">
         <QueryClientProvider client={client}>
                <Suspense fallback={<h1>Loading...</h1>}>
                    <FPQuotesData/>
                    <FPQuotesData/>
                </Suspense>
            </QueryClientProvider>
    </div>
  );
}

export default App;

import { ApolloClient, InMemoryCache } from '@apollo/client';
import { gql } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import LaunchesComponent from './LaunchesComponent';

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
  cache: new InMemoryCache()
});

client
  .query({
    query: gql`
      query GetLaunches {
        launches(limit: 5) {
          launch_date_utc
          launch_success
          rocket {
            rocket_name
          }
          links {
            video_link
          }
          details
        }
      }
    `
  })
  .then(result => console.log(result));

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <LaunchesComponent />
      </div>
    </ApolloProvider>
  );
}

export default App;

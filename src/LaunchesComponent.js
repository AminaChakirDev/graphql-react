import { useQuery, gql } from '@apollo/client';

const LAUNCHES = gql`
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
`;

function LaunchesComponent() {
const { loading, error, data } = useQuery(LAUNCHES);

if (loading) return <p>Loading...</p>;
if (error) return <p>Error :(</p>;

return data.launches.map(({ launch_date_utc, launch_success, rocket, links, details }) => (
<div key={launch_date_utc}>
    <p>Launches : {launch_date_utc}</p>
    <p>Succès ? {launch_success}</p>
    <p>Nom de la fusée : {rocket.rocket_name}</p>
    <p>Lien youtube : {links.video_link}</p>
    <p>Détails : {details}</p>
</div>
));
}

export default LaunchesComponent;

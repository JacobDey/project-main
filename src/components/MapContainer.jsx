import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

const MapContainer = () => {
    const northPosition = { lat: 43.75786823431031, lng: -79.46595627436407 };
    const westPosition = { lat: 43.647106599577526, lng: -79.52623970519376 };
    const eastPosition = { lat: 43.687772206235074, lng: -79.31013523993245 };
    const center = { lat: 43.718595682003155, lng: -79.41124766621074 };
    return (
        <APIProvider apiKey='AIzaSyA39DZInJlJwbt08YPLns0c_cL_oEi7N5w'>
            <Map
                style={{ width: '80vw', height: '80vh', margin: 'auto', textAlign: 'center' }}
                defaultCenter={center}
                defaultZoom={11}
                gestureHandling={'greedy'}
                disableDefaultUI={true}
            >
                <Marker position={northPosition} />
                <Marker position={eastPosition} />
                <Marker position={westPosition} />
            </Map>
        </APIProvider>
    );
}

export default MapContainer;
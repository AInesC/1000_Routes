import { Marker, Popup, useMapEvents } from "react-leaflet";

export default function LocationMarker(props) {
	const map = useMapEvents({
		click() {
			map.locate();
		},
		locationfound(e) {
			props.setLocation(e.latlng);
			map.flyTo(e.latlng, map.getZoom());
		},
	});

	return props.location ===
		[props.DEFAULT_LATITUDE, props.DEFAULT_LONGITUDE] ? (
		[props.DEFAULT_LATITUDE, props.DEFAULT_LONGITUDE]
	) : (
		<Marker position={props.location}>
			<Popup>You are here</Popup>
		</Marker>
	);
}

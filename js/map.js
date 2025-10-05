mapboxgl.accessToken = 'pk.eyJ1Ijoiamhlcm5hbmRlenNoaWZ0YSIsImEiOiJjbWdlN3M4bnQxdnQ0MmtvbDdxNnZpMDZxIn0.4UAZmk1FZ0Roe_3_yKJhmg';
const map = new mapboxgl.Map({
  container: 'map', // ID
  style: 'mapbox://styles/mapbox/navigation-day-v1', // estilos de mapbox
  center: [-74.1304886, 4.6637321],
  zoom: 9 // zoom mapa
});

map.addControl(new mapboxgl.NavigationControl());
map.scrollZoom.disable();

map.on('style.load', () => {
  map.setFog({});
});
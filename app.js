const STATIONS = [
  { id: 'people-square', name: "People's Square", lat: 31.2304, lng: 121.4737 },
  { id: 'jingan-temple', name: 'Jingan Temple', lat: 31.2231, lng: 121.4457 },
  { id: 'xujiahui', name: 'Xujiahui', lat: 31.1946, lng: 121.4365 },
  { id: 'shanghai-railway', name: 'Shanghai Railway Station', lat: 31.2521, lng: 121.4581 },
  { id: 'lujiazui', name: 'Lujiazui', lat: 31.2397, lng: 121.4998 },
  { id: 'nanjing-east', name: 'East Nanjing Road', lat: 31.2383, lng: 121.4847 },
  { id: 'century-avenue', name: 'Century Avenue', lat: 31.2327, lng: 121.5228 },
  { id: 'zhongshan-park', name: 'Zhongshan Park', lat: 31.2249, lng: 121.4164 },
  { id: 'west-nanjing', name: 'West Nanjing Road', lat: 31.2287, lng: 121.4624 },
  { id: 'yu-garden', name: 'Yuyuan Garden', lat: 31.2271, lng: 121.4924 },
  { id: 'laoximen', name: 'Laoximen', lat: 31.2176, lng: 121.4862 },
  { id: 'zhaojiabang', name: 'Zhaojiabang Road', lat: 31.2025, lng: 121.4688 },
  { id: 'longyang-road', name: 'Longyang Road', lat: 31.2109, lng: 121.5635 },
  { id: 'hongqiao-railway', name: 'Hongqiao Railway Station', lat: 31.1979, lng: 121.3274 },
  { id: 'xintiandi', name: 'Xintiandi', lat: 31.2184, lng: 121.4741 },
  { id: 'south-shaanxi', name: 'South Shaanxi Road', lat: 31.2205, lng: 121.4605 },
  { id: 'jinan-temple', name: 'Jinsha Temple', lat: 31.2428, lng: 121.4376 },
  { id: 'pudong-airport', name: 'Pudong Int. Airport', lat: 31.1434, lng: 121.8052 }
];

const EDGES = [
  ['hongqiao-railway', 'zhongshan-park', 18],
  ['zhongshan-park', 'jingan-temple', 7],
  ['jingan-temple', 'west-nanjing', 3],
  ['west-nanjing', 'people-square', 3],
  ['people-square', 'nanjing-east', 2],
  ['nanjing-east', 'lujiazui', 4],
  ['lujiazui', 'century-avenue', 4],
  ['century-avenue', 'longyang-road', 6],
  ['longyang-road', 'pudong-airport', 24],
  ['people-square', 'laoximen', 4],
  ['laoximen', 'xintiandi', 2],
  ['xintiandi', 'south-shaanxi', 3],
  ['south-shaanxi', 'jingan-temple', 4],
  ['south-shaanxi', 'zhaojiabang', 4],
  ['zhaojiabang', 'xujiahui', 3],
  ['people-square', 'shanghai-railway', 5],
  ['shanghai-railway', 'zhongshan-park', 8],
  ['century-avenue', 'yu-garden', 8],
  ['yu-garden', 'laoximen', 2],
  ['jinan-temple', 'jingan-temple', 4]
];

const stationMap = new Map(STATIONS.map((station) => [station.id, station]));
const graph = new Map();

for (const station of STATIONS) {
  graph.set(station.id, []);
}

for (const [from, to, minutes] of EDGES) {
  graph.get(from).push({ to, minutes });
  graph.get(to).push({ to: from, minutes });
}

const map = L.map('map', {
  zoomControl: true,
  attributionControl: true
}).setView([31.2304, 121.4737], 12);

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png', {
  maxZoom: 19,
  attribution: '&copy; OpenStreetMap contributors &copy; CARTO'
}).addTo(map);

const metroLayer = L.layerGroup().addTo(map);
const reachLayer = L.layerGroup().addTo(map);

for (const [fromId, toId] of EDGES) {
  const from = stationMap.get(fromId);
  const to = stationMap.get(toId);
  L.polyline(
    [
      [from.lat, from.lng],
      [to.lat, to.lng]
    ],
    { color: '#0a84ff', weight: 4, opacity: 0.7 }
  ).addTo(metroLayer);
}

for (const station of STATIONS) {
  L.circleMarker([station.lat, station.lng], {
    radius: 4,
    color: '#fff',
    weight: 2,
    fillColor: '#0a84ff',
    fillOpacity: 1
  })
    .bindTooltip(station.name, { direction: 'top', opacity: 0.9, className: 'station-label' })
    .addTo(metroLayer);
}

const originStationSelect = document.getElementById('originStation');
const walkSpeedSelect = document.getElementById('walkSpeed');
const timeBudgetInput = document.getElementById('timeBudget');
const timeValue = document.getElementById('timeValue');
const summary = document.getElementById('summary');

for (const station of STATIONS) {
  const option = document.createElement('option');
  option.value = station.id;
  option.textContent = station.name;
  originStationSelect.appendChild(option);
}
originStationSelect.value = 'people-square';

let originMarker = null;

function dijkstra(startId) {
  const distances = new Map(STATIONS.map((s) => [s.id, Number.POSITIVE_INFINITY]));
  const visited = new Set();
  distances.set(startId, 0);

  while (visited.size < STATIONS.length) {
    let currentId = null;
    let currentDist = Number.POSITIVE_INFINITY;

    for (const [id, dist] of distances) {
      if (!visited.has(id) && dist < currentDist) {
        currentDist = dist;
        currentId = id;
      }
    }

    if (!currentId) break;
    visited.add(currentId);

    for (const edge of graph.get(currentId)) {
      const alt = currentDist + edge.minutes;
      if (alt < distances.get(edge.to)) {
        distances.set(edge.to, alt);
      }
    }
  }

  return distances;
}

function render() {
  reachLayer.clearLayers();

  const originId = originStationSelect.value;
  const budget = Number(timeBudgetInput.value);
  const walkMetersPerMinute = Number(walkSpeedSelect.value);
  const distances = dijkstra(originId);

  const origin = stationMap.get(originId);
  if (originMarker) reachLayer.removeLayer(originMarker);
  originMarker = L.circleMarker([origin.lat, origin.lng], {
    radius: 8,
    color: '#111827',
    weight: 2,
    fillColor: '#ff9f0a',
    fillOpacity: 1
  })
    .bindPopup(`Origin: ${origin.name}`)
    .addTo(reachLayer);

  let reachableStationCount = 0;
  let maxWalkRadius = 0;

  for (const station of STATIONS) {
    const metroMinutes = distances.get(station.id);
    if (metroMinutes > budget) continue;

    const walkMinutes = budget - metroMinutes;
    const walkRadius = walkMinutes * walkMetersPerMinute;
    maxWalkRadius = Math.max(maxWalkRadius, walkRadius);
    reachableStationCount += 1;

    L.circle([station.lat, station.lng], {
      radius: walkRadius,
      color: '#16a34a',
      weight: 1,
      fillColor: '#34c759',
      fillOpacity: 0.18
    })
      .bindTooltip(`${station.name}<br/>Metro: ${metroMinutes} min<br/>Walk left: ${walkMinutes.toFixed(0)} min`)
      .addTo(reachLayer);
  }

  timeValue.textContent = `${budget} min`;
  summary.innerHTML = `
    <strong>${origin.name}</strong><br/>
    Reachable metro stations: <strong>${reachableStationCount}/${STATIONS.length}</strong><br/>
    Max final walk radius: <strong>${Math.round(maxWalkRadius)} m</strong><br/>
    Model: <em>travel time = metro rides + post-metro walk</em>
  `;
}

function nearestStation(latlng) {
  let nearest = STATIONS[0];
  let bestDistance = Number.POSITIVE_INFINITY;

  for (const station of STATIONS) {
    const distance = map.distance(latlng, [station.lat, station.lng]);
    if (distance < bestDistance) {
      bestDistance = distance;
      nearest = station;
    }
  }
  return nearest;
}

originStationSelect.addEventListener('change', render);
walkSpeedSelect.addEventListener('change', render);
timeBudgetInput.addEventListener('input', render);

map.on('click', (event) => {
  const station = nearestStation(event.latlng);
  originStationSelect.value = station.id;
  render();
});

render();

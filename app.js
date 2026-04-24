const STATIONS = [
  { id: 'hongqiao-railway', name: 'Hongqiao Railway Station', lat: 31.1979, lng: 121.3274 },
  { id: 'hongqiao-airport-t2', name: 'Hongqiao Airport Terminal 2', lat: 31.1965, lng: 121.3363 },
  { id: 'hongqiao-airport-t1', name: 'Hongqiao Airport Terminal 1', lat: 31.1924, lng: 121.3481 },
  { id: 'songhong-road', name: 'Songhong Road', lat: 31.221, lng: 121.3598 },
  { id: 'beixinjing', name: 'Beixinjing', lat: 31.2208, lng: 121.3785 },
  { id: 'weining-road', name: 'Weining Road', lat: 31.2193, lng: 121.3936 },
  { id: 'loushanguan-road', name: 'Loushanguan Road', lat: 31.2147, lng: 121.4178 },
  { id: 'zhongshan-park', name: 'Zhongshan Park', lat: 31.2249, lng: 121.4164 },
  { id: 'jiangsu-road', name: 'Jiangsu Road', lat: 31.2198, lng: 121.4342 },
  { id: 'jingan-temple', name: 'Jingan Temple', lat: 31.2231, lng: 121.4457 },
  { id: 'west-nanjing', name: 'West Nanjing Road', lat: 31.2287, lng: 121.4624 },
  { id: 'people-square', name: "People's Square", lat: 31.2304, lng: 121.4737 },
  { id: 'east-nanjing', name: 'East Nanjing Road', lat: 31.2383, lng: 121.4847 },
  { id: 'lujiazui', name: 'Lujiazui', lat: 31.2397, lng: 121.4998 },
  { id: 'dongchang-road', name: 'Dongchang Road', lat: 31.2348, lng: 121.5112 },
  { id: 'century-avenue', name: 'Century Avenue', lat: 31.2327, lng: 121.5228 },
  { id: 'shanghai-sci-tech', name: 'Shanghai Science & Technology Museum', lat: 31.2241, lng: 121.5444 },
  { id: 'longyang-road', name: 'Longyang Road', lat: 31.2109, lng: 121.5635 },
  { id: 'huamu-road', name: 'Huamu Road', lat: 31.2086, lng: 121.5559 },
  { id: 'fanghua-road', name: 'Fanghua Road', lat: 31.1993, lng: 121.5512 },
  { id: 'jinke-road', name: 'Jinke Road', lat: 31.2101, lng: 121.603 },
  { id: 'guanglan-road', name: 'Guanglan Road', lat: 31.2142, lng: 121.6172 },
  { id: 'chuansha', name: 'Chuansha', lat: 31.1909, lng: 121.6994 },
  { id: 'pudong-airport', name: 'Pudong International Airport', lat: 31.1434, lng: 121.8052 },
  { id: 'shanghai-railway', name: 'Shanghai Railway Station', lat: 31.2521, lng: 121.4581 },
  { id: 'xinzha-road', name: 'Xinzha Road', lat: 31.2385, lng: 121.4639 },
  { id: 'hanzhong-road', name: 'Hanzhong Road', lat: 31.2402, lng: 121.4588 },
  { id: 'south-shaanxi', name: 'South Shaanxi Road', lat: 31.2205, lng: 121.4605 },
  { id: 'changshu-road', name: 'Changshu Road', lat: 31.2149, lng: 121.4521 },
  { id: 'hengshan-road', name: 'Hengshan Road', lat: 31.2055, lng: 121.4443 },
  { id: 'xujiahui', name: 'Xujiahui', lat: 31.1946, lng: 121.4365 },
  { id: 'shanghai-stadium', name: 'Shanghai Stadium', lat: 31.188, lng: 121.4366 },
  { id: 'caoxi-road', name: 'Caoxi Road', lat: 31.1778, lng: 121.4334 },
  { id: 'shanghai-south', name: 'Shanghai South Railway Station', lat: 31.1547, lng: 121.4298 },
  { id: 'jinjiang-park', name: 'Jinjiang Park', lat: 31.1425, lng: 121.4232 },
  { id: 'xinzhuang', name: 'Xinzhuang', lat: 31.111, lng: 121.3858 },
  { id: 'xintiandi', name: 'Xintiandi', lat: 31.2184, lng: 121.4741 },
  { id: 'laoximen', name: 'Laoximen', lat: 31.2176, lng: 121.4862 },
  { id: 'yuyuan-garden', name: 'Yuyuan Garden', lat: 31.2271, lng: 121.4924 },
  { id: 'tiantong-road', name: 'Tiantong Road', lat: 31.2438, lng: 121.4881 },
  { id: 'sichuan-north', name: 'North Sichuan Road', lat: 31.259, lng: 121.4847 },
  { id: 'hailun-road', name: 'Hailun Road', lat: 31.2678, lng: 121.4981 },
  { id: 'siping-road', name: 'Siping Road', lat: 31.2734, lng: 121.508 },
  { id: 'dalian-road', name: 'Dalian Road', lat: 31.2571, lng: 121.5196 },
  { id: 'pudian-road', name: 'Pudian Road (Line 4)', lat: 31.2236, lng: 121.5334 },
  { id: 'lancun-road', name: 'Lancun Road', lat: 31.2184, lng: 121.5272 },
  { id: 'tangqiao', name: 'Tangqiao', lat: 31.2133, lng: 121.5158 },
  { id: 'dongan-road', name: 'Dongan Road', lat: 31.1927, lng: 121.4533 },
  { id: 'zhaojiabang', name: 'Zhaojiabang Road', lat: 31.2025, lng: 121.4688 },
  { id: 'jiashan-road', name: 'Jiashan Road', lat: 31.2043, lng: 121.4639 },
  { id: 'madang-road', name: 'Madang Road', lat: 31.2105, lng: 121.4788 },
  { id: 'xiaonanmen', name: 'Xiaonanmen', lat: 31.2213, lng: 121.4986 },
  { id: 'world-expo-museum', name: 'World Expo Museum', lat: 31.2029, lng: 121.4885 },
  { id: 'yaohua-road', name: 'Yaohua Road', lat: 31.1727, lng: 121.4894 },
  { id: 'qibao', name: 'Qibao', lat: 31.1572, lng: 121.3498 },
  { id: 'hechuan-road', name: 'Hechuan Road', lat: 31.1718, lng: 121.3912 },
  { id: 'caohejing', name: 'Caohejing Hi-Tech Park', lat: 31.1712, lng: 121.4102 },
  { id: 'xingzhong-road', name: 'Xingzhong Road', lat: 31.1297, lng: 121.3433 },
  { id: 'sheshan', name: 'Sheshan', lat: 31.1016, lng: 121.2118 },
  { id: 'songjiang-university', name: 'Songjiang University Town', lat: 31.0564, lng: 121.2149 }
];

const EDGES = [
  // Line 2
  ['hongqiao-railway', 'hongqiao-airport-t2', 2],
  ['hongqiao-airport-t2', 'hongqiao-airport-t1', 2],
  ['hongqiao-airport-t1', 'songhong-road', 3],
  ['songhong-road', 'beixinjing', 3],
  ['beixinjing', 'weining-road', 2],
  ['weining-road', 'loushanguan-road', 3],
  ['loushanguan-road', 'zhongshan-park', 2],
  ['zhongshan-park', 'jiangsu-road', 2],
  ['jiangsu-road', 'jingan-temple', 2],
  ['jingan-temple', 'west-nanjing', 2],
  ['west-nanjing', 'people-square', 2],
  ['people-square', 'east-nanjing', 2],
  ['east-nanjing', 'lujiazui', 3],
  ['lujiazui', 'dongchang-road', 2],
  ['dongchang-road', 'century-avenue', 2],
  ['century-avenue', 'shanghai-sci-tech', 2],
  ['shanghai-sci-tech', 'longyang-road', 2],
  ['longyang-road', 'jinke-road', 4],
  ['jinke-road', 'guanglan-road', 3],
  ['guanglan-road', 'chuansha', 10],
  ['chuansha', 'pudong-airport', 12],

  // Line 1
  ['shanghai-railway', 'hanzhong-road', 2],
  ['hanzhong-road', 'xinzha-road', 2],
  ['xinzha-road', 'people-square', 2],
  ['people-square', 'south-shaanxi', 2],
  ['south-shaanxi', 'changshu-road', 2],
  ['changshu-road', 'hengshan-road', 2],
  ['hengshan-road', 'xujiahui', 2],
  ['xujiahui', 'shanghai-stadium', 2],
  ['shanghai-stadium', 'caoxi-road', 2],
  ['caoxi-road', 'shanghai-south', 2],
  ['shanghai-south', 'jinjiang-park', 2],
  ['jinjiang-park', 'xinzhuang', 4],

  // Line 10 (core section)
  ['hongqiao-railway', 'hongqiao-airport-t2', 2],
  ['hongqiao-airport-t2', 'songhong-road', 3],
  ['songhong-road', 'loushanguan-road', 5],
  ['loushanguan-road', 'jiangsu-road', 2],
  ['jiangsu-road', 'shanghai-railway', 7],
  ['shanghai-railway', 'tiantong-road', 4],
  ['tiantong-road', 'east-nanjing', 2],
  ['east-nanjing', 'yuyuan-garden', 2],
  ['yuyuan-garden', 'laoximen', 2],
  ['laoximen', 'xintiandi', 2],
  ['xintiandi', 'south-shaanxi', 3],
  ['south-shaanxi', 'zhaojiabang', 3],
  ['zhaojiabang', 'xujiahui', 3],

  // Line 9 (west -> east trunk)
  ['songjiang-university', 'sheshan', 6],
  ['sheshan', 'xingzhong-road', 8],
  ['xingzhong-road', 'qibao', 4],
  ['qibao', 'hechuan-road', 3],
  ['hechuan-road', 'caohejing', 3],
  ['caohejing', 'xujiahui', 4],
  ['xujiahui', 'jiashan-road', 3],
  ['jiashan-road', 'madang-road', 2],
  ['madang-road', 'xiaonanmen', 3],
  ['xiaonanmen', 'century-avenue', 6],

  // Line 4 (partial loop and Pudong section)
  ['zhongshan-park', 'dongan-road', 6],
  ['dongan-road', 'zhaojiabang', 2],
  ['zhaojiabang', 'lancun-road', 4],
  ['lancun-road', 'pudian-road', 2],
  ['pudian-road', 'century-avenue', 2],
  ['century-avenue', 'dalian-road', 5],
  ['dalian-road', 'siping-road', 2],
  ['siping-road', 'hailun-road', 2],
  ['hailun-road', 'sichuan-north', 2],
  ['sichuan-north', 'shanghai-railway', 4],

  // Line 13/12/8 style connectors
  ['jingan-temple', 'changshu-road', 2],
  ['changshu-road', 'jiashan-road', 2],
  ['jiashan-road', 'dongan-road', 2],
  ['madang-road', 'world-expo-museum', 2],
  ['world-expo-museum', 'yaohua-road', 3],
  ['yaohua-road', 'longyang-road', 5],
  ['longyang-road', 'huamu-road', 2],
  ['huamu-road', 'fanghua-road', 2]
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
}).setView([31.2304, 121.4737], 11);

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png', {
  maxZoom: 19,
  attribution: '&copy; OpenStreetMap contributors &copy; CARTO'
}).addTo(map);

const metroLayer = L.layerGroup().addTo(map);
const reachLayer = L.layerGroup().addTo(map);

for (const [fromId, toId] of EDGES) {
  const from = stationMap.get(fromId);
  const to = stationMap.get(toId);
  if (!from || !to) continue;

  L.polyline(
    [
      [from.lat, from.lng],
      [to.lat, to.lng]
    ],
    { color: '#0a84ff', weight: 3, opacity: 0.6 }
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

for (const station of [...STATIONS].sort((a, b) => a.name.localeCompare(b.name))) {
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

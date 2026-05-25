var manualPoints = [
    { name: 'Rektorat Universitas Bengkulu', lat: -3.758925991680951, lng: 102.27233254501347, tier: 1, type: 'rektorat' },
    { name: 'Fakultas Ekonomi dan Bisnis (FEB) UNIB', lat: -3.761743030790814, lng: 102.26864780567482, tier: 1, type: 'fakultas' },
    { name: 'Fakultas Teknik Universitas Bengkulu', lat: -3.7582743815464026, lng: 102.27738893738805, tier: 1, type: 'fakultas' },
    { name: 'Fakultas Ilmu Sosial dan Ilmu Politik (FISIP) UNIB', lat: -3.759215588543014, lng: 102.27448693475885, tier: 1, type: 'fakultas' },
    { name: 'Fakultas Keguruan dan Ilmu Pendidikan (FKIP) UNIB', lat: -3.7576116493071736, lng: 102.27506763393801, tier: 1, type: 'fakultas' },
    { name: 'Fakultas Pertanian Universitas Bengkulu', lat: -3.757626592083991, lng: 102.27165981793573, tier: 1, type: 'fakultas' },
    { name: 'Fakultas Hukum Universitas Bengkulu', lat: -3.7604697553707878, lng: 102.26844887116475, tier: 1, type: 'fakultas' },
    { name: 'Fakultas MIPA Universitas Bengkulu', lat: -3.756064554398636, lng: 102.27476839254005, tier: 1, type: 'fakultas' },
    { name: 'Fakultas Kedokteran Universitas Bengkulu', lat: -3.755049175852167, lng: 102.27799603213823, tier: 1, type: 'fakultas' },
    { name: 'Gerbang Masuk Depan UNIB', lat: -3.7599556451382616, lng: 102.26708760598453, tier: 2, type: 'gerbang' },
    { name: 'Gerbang Keluar Depan UNIB', lat: -3.759153284887122, lng: 102.26691070286351, tier: 2, type: 'gerbang' },
    { name: 'Gerbang Masuk Belakang UNIB', lat: -3.7596380420268845, lng: 102.27516259098546, tier: 2, type: 'gerbang' },
    { name: 'Gerbang Keluar Belakang UNIB', lat: -3.7593149088938853, lng: 102.27622059999348, tier: 2, type: 'gerbang' },
    { name: 'Perpustakaan Pusat Universitas Bengkulu', lat: -3.7567420148766, lng: 102.27484309262306, tier: 2, type: 'fasilitas' },
    { name: 'Gedung Serba Guna (GSG) UNIB', lat: -3.7575770654684173, lng: 102.2765918928578, tier: 2, type: 'fasilitas' },
    { name: 'Gedung Olahraga (GOR) UNIB', lat: -3.7607612297254738, lng: 102.26758247749183, tier: 2, type: 'fasilitas' },
    { name: 'Masjid Kampus Universitas Bengkulu', lat: -3.75897250873728, lng: 102.27593321314441, tier: 3, type: 'masjid' },
    { name: 'Laboratorium Terpadu Universitas Bengkulu', lat: -3.758577679594874, lng: 102.27735320144156, tier: 3, type: 'lab' },
    { name: 'Gedung GB5 Universitas Bengkulu', lat: -3.7555147241605007, lng: 102.27644943719929, tier: 3, type: 'lab' }
];

var map = L.map('map', { 
    zoomControl: false, 
    scrollWheelZoom: true, 
    doubleClickZoom: true, 
    touchZoom: true,
    zoomSnap: 0.5 
}).setView([-3.7589, 102.2723], 15); 

L.control.zoom({ position: 'bottomright' }).addTo(map);
L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors', maxZoom: 19
}).addTo(map);

var getIconByType = function(type) {
    var fillColor = '#1a365d'; 
    var svgIconPath = '<circle cx="12" cy="12" r="4.5" fill="#ffffff"/>'; 

    switch (type) {
        case 'rektorat':
            fillColor = '#800000'; 
            svgIconPath = '<path d="M12 4L4 8v2h16V8L12 4zM6 12v5h2v-5H6zm5 0v5h2v-5h-2zm5 0v5h2v-5h-2zM4 19v2h16v-2H4z" fill="#ffffff"/>';
            break;
        case 'fakultas':
            fillColor = '#1a365d'; 
            svgIconPath = '<path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2.18-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 14.72l5-2.45v3.72z" fill="#ffffff"/>';
            break;
        case 'masjid':
            fillColor = '#228B22'; 
            svgIconPath = '<path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z" fill="#ffffff"/>';
            break;
        case 'fasilitas':
            fillColor = '#d97706'; 
            svgIconPath = '<path d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z" fill="#ffffff"/>';
            break;
        case 'gerbang':
            fillColor = '#475569'; 
            svgIconPath = '<path d="M20 5v14h-4v-8H8v8H4V5h16zm-6 0H10v4h4V5z" fill="#ffffff"/>';
            break;
        case 'lab':
            fillColor = '#0284c7'; 
            svgIconPath = '<path d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" fill="#ffffff"/>';
            break;
        case 'pemakaman':
            fillColor = '#52525b'; 
            svgIconPath = '<path d="M8 17V10c0-2.21 1.79-4 4-4s4 1.79 4 4v7H8zm-2 2h12v2H6v-2z" fill="#ffffff"/>';
            break;
    }

    var svgContent = `
    <div style="filter: drop-shadow(0px 2px 4px rgba(0,0,0,0.3));">
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="6" fill="${fillColor}" />
            ${svgIconPath}
        </svg>
    </div>`;

    return L.divIcon({ html: svgContent, className: '', iconSize: [24,24], iconAnchor: [12,12] });
};

var currentRoutingControl = null, lokasiData = [], poiMarkers = []; 
var startSelect = document.getElementById('startPoint'), endSelect = document.getElementById('endPoint');

function formatLabelText(text) {
    if (text.length <= 20) return text; 
    var words = text.split(' ');
    var result = '';
    var currentLineLength = 0;
    for (var i = 0; i < words.length; i++) {
        if (currentLineLength + words[i].length > 20 && currentLineLength > 0) {
            result += '<br>';
            currentLineLength = 0;
        } else if (currentLineLength > 0) {
            result += ' ';
        }
        result += words[i];
        currentLineLength += words[i].length + 1;
    }
    return result;
}

function addLokasi(nama, lat, lng, tier, type) {
    if (lokasiData.find(x => x.name.toLowerCase() === nama.toLowerCase())) return;
    
    lokasiData.push({ name: nama, lat: lat, lng: lng });
    startSelect.add(new Option(nama, nama)); 
    endSelect.add(new Option(nama, nama));
    
    var formattedName = formatLabelText(nama);
    var icon = getIconByType(type);
    
    var marker = L.marker([lat, lng], { icon: icon });
    marker.bindPopup(`<div style="text-align:center;"><b>${formattedName}</b></div>`);
    
    var label = L.tooltip({
        permanent: true, direction: 'top', className: 'map-label', offset: [0, -14]
    }).setContent(`<div style="text-align:center; line-height:1.3;">${formattedName}</div>`);
    
    marker.bindTooltip(label);

    var currentZoom = map.getZoom();
    var isVisible = false;
    if (tier === 1 && currentZoom >= 14) isVisible = true;
    else if (tier === 2 && currentZoom >= 16) isVisible = true;
    else if (tier === 3 && currentZoom >= 17.5) isVisible = true;
    else if (tier === 4 && currentZoom >= 18.5) isVisible = true;

    if (isVisible) {
        marker.addTo(map); 
    }

    poiMarkers.push({ marker: marker, tier: tier });
}

map.on('zoomend', () => {
    var zoom = map.getZoom();
    
    poiMarkers.forEach(item => {
        var isVisible = false;
        
        if (item.tier === 1 && zoom >= 14) isVisible = true; 
        else if (item.tier === 2 && zoom >= 16) isVisible = true; 
        else if (item.tier === 3 && zoom >= 17.5) isVisible = true; 
        else if (item.tier === 4 && zoom >= 18.5) isVisible = true; 
        
        if (isVisible && !map.hasLayer(item.marker)) {
            item.marker.addTo(map); 
        } else if (!isVisible && map.hasLayer(item.marker)) {
            map.removeLayer(item.marker); 
        }
    });
});

manualPoints.forEach(pt => addLokasi(pt.name, pt.lat, pt.lng, pt.tier, pt.type));

omnivore.kml('data_kampus.kml').on('ready', function(e) {
    e.target.eachLayer(layer => {
        if (layer instanceof L.Marker) {
            var tier = 4;
            var type = 'default';
            var name = layer.feature.properties.name || "Lokasi";
            
            if (name.toLowerCase().includes('masjid') || name.toLowerCase().includes('mushola')) {
                type = 'masjid';
            } else if (name.toLowerCase().includes('fakultas') || name.toLowerCase().includes('dekanat')) {
                type = 'fakultas';
            } else if (name.toLowerCase().includes('gerbang')) {
                type = 'gerbang';
            } else if (name.toLowerCase().includes('lab') || name.toLowerCase().includes('laboratorium')) {
                type = 'lab';
            } else if (name.toLowerCase().includes('tpu') || name.toLowerCase().includes('pemakaman') || name.toLowerCase().includes('makam')) {
                type = 'pemakaman';
            }
            
            addLokasi(name, layer.getLatLng().lat, layer.getLatLng().lng, tier, type);
            map.removeLayer(layer);
        }
    });
}).addTo(map);

function findRoute() {
    var startObj = lokasiData.find(x => x.name === startSelect.value), endObj = lokasiData.find(x => x.name === endSelect.value);
    var mode = document.querySelector('input[name="mode"]:checked').value;
    if (currentRoutingControl) map.removeControl(currentRoutingControl);
    
    var router = L.Routing.osrmv1({ serviceUrl: 'https://router.project-osrm.org/route/v1', profile: (mode === 'walking' ? 'foot' : 'driving') });
    currentRoutingControl = L.Routing.control({
        waypoints: [L.latLng(startObj.lat, startObj.lng), L.latLng(endObj.lat, endObj.lng)],
        router: router, show: false, addWaypoints: false, fitSelectedRoutes: true,
        lineOptions: { styles: [{ color: '#1a365d', weight: 6, opacity: 0.9 }] },
        plan: L.Routing.plan([L.latLng(startObj.lat, startObj.lng), L.latLng(endObj.lat, endObj.lng)], { createMarker: () => null })
    }).addTo(map);

    currentRoutingControl.on('routesfound', e => {
        var r = e.routes[0];
        var dist = (r.summary.totalDistance/1000).toFixed(2);
        var time = Math.floor((mode === 'walking' ? r.summary.totalDistance / 1.4 : r.summary.totalTime) / 60);
        document.getElementById('infoResult').innerHTML = `<b>${startSelect.value} → ${endSelect.value}</b><br>Jarak: ${dist} km | Waktu: ${time} menit`;
    });
}

document.getElementById('routeBtn').addEventListener('click', findRoute);
document.getElementById('resetBtn').addEventListener('click', () => location.reload());
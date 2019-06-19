
mapboxgl.accessToken = 'pk.eyJ1IjoiaGVpbWFubnVuZHNjaHdhbnRlcyIsImEiOiJjanU5ajNmeWYxdnlsM3pvMjB1aHN3djl1In0.C4x_2T6CWDi6Y1vG6YbLBg';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/heimannundschwantes/cjwtbq9hq1oeu1cq77uqcghb5',
  center: [8.693016,49.407200],
  zoom: 12.95
});

// coordinates below

var geojson = {
  type: 'FeatureCollection',
  features: [
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [8.651548, 49.408797]
    },
    properties: {
      title: 'exPRO 3',
      group: 'Lernräume',
      number: "06"
      // icon: {
      //   iconUrl: 'pins_PNG/pin_pin-6.png',
      //   iconSize: [38, 53]
      // }
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [8.685837, 49.375866]
    },
    properties: {
      title: 'Collegium Academicum',
      group: 'Wissenschaften',
      number: "06"
      // icon: {
      //   iconUrl: 'pins_PNG/pin_pin-12.png',
      //   iconSize: [38, 53]
      // }
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [8.650562,49.389939]
    },
    properties: {
      title: 'Landwirtschaftspark',
      group: 'Stoffkreisläufe',
      number: "19"
      // icon: {
      //   iconUrl: 'pins_PNG/pin_pin-19.png',
      //   iconSize: [38, 53]
      // }
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [8.693083,49.407205]
    },
    properties: {
      title: 'Forum Adenauerplatz',
      group: 'Lernräume',
      number: "29"
      // icon: {
      //   iconUrl: 'pins_PNG/pin_pin-29.png',
      //   iconSize: [38, 53]
      // }
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [8.666443,49.403243]
    },
    properties: {
      title: 'B3 Gadamerplatz',
      group: 'Lernräume',
      number: "30"
      // icon: {
      //   iconUrl: 'pins_PNG/pin_pin-30.png',
      //   iconSize: [38, 53]
      // }
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [8.675629,49.406997]
    },
    properties: {
      title: 'International Welcome Center',
      group: 'Lernräume',
      number: "31"
      // icon: {
      //   iconUrl:'pins_PNG/pin_pin-31.png',
      //   iconSize: [38, 53]
      // }
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [8.686027,49.396373]
    },
    properties: {
      title: 'Haus der Jugend',
      group: 'Lernräume',
      number: "32"
      // icon: {
      //   iconUrl: 'pins_PNG/pin_pin-32.png',
      //   iconSize: [38, 53]
      // }
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [8.650991,49.405944]
    },
    properties: {
      title: 'Energiespeicher',
      group: 'Stoffkreisläufe',
      number: "33"
      // icon: {
      //   iconUrl: 'pins_PNG/pin_pin-33.png',
      //   iconSize: [38, 53]
      // }
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [8.688773,49.409783]
    },
    properties: {
      title: 'Sammlung Prinzhorn',
      group: 'Wissenschaften',
      number: "36"
      // icon: {
      //   iconUrl:'pins_PNG/pin_pin-36.png',
      //   iconSize: [38, 53]
      // }
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [8.649816,49.424450]
    },
    properties: {
      title: 'Thadden Schule',
      group: 'Lernräume',
      number: "65"
      // icon: {
      //   iconUrl: 'pins_PNG/pin_pin-65.png',
      //   iconSize: [38, 53]
      // }
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [48.684521,49.387056]
    },
    properties: {
      title: 'DER ANDERE PARK',
      group: 'Vernetzungen',
      number: "67"
      // icon: {
      //   iconUrl: 'pins_PNG/pin_pin-67.png',
      //   iconSize: [38, 53]
      // }
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [8.687422,49.409310]
    },
    properties: {
      title: 'Campus Bergheim',
      group: 'Wissenschaften',
      number: "68"
      // icon: {
      //   iconUrl: 'pins_PNG/pin_pin-68.png',
      //   iconSize: [38, 53]
      // }
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [8.673740,49.401712]
    },
    properties: {
      title: 'Neues Konferenzzentrum',
      group: 'Wissenschaften',
      number: "69"
      // icon: {
      //   iconUrl: 'pins_PNG/pin_pin-69.png',
      //   iconSize: [38, 53]
      // }
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [8.709332,49.384922]
    },
    properties: {
      title: 'EMBL Imaging Centre',
      group: 'Wissenschaften',
      number: "70"
      // icon: {
      //   iconUrl: 'pins_PNG/pin_pin-70.png',
      //   iconSize: [38, 53]
      // }
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [8.669392,49.410234]
    },
    properties: {
      title: 'Radbrücke',
      group: 'Vernetzungen',
      number: "71"
      // icon: {
      //   iconUrl: 'pins_PNG/pin_pin-71.png',
      //   iconSize: [38, 53]
      // }
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [8.629815,49.378020]
    },
    properties: {
      title: 'PHVision',
      group: 'Koproduktion',
      number: "72"
      // icon: {
      //   iconUrl: 'pins_PNG/pin_pin-72.png',
      //   iconSize: [38, 53]
      // }
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [8.710819,49.410607]
    },
    properties: {
      title: 'Dokumentationszentrum Sinti & Roma',
      group: 'TBA',
      number: ""
      // icon: {
      //   iconUrl: '' ,
      //   iconSize: [38, 53]
      // }
    }
  }
]
};

// end coordinates

// begin popups
geojson.features.forEach(function(marker) {

  var el = document.createElement('div');
  el.className = 'marker';

  new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML('<h1>' + marker.properties.title + '</h1>'))
    .addTo(map);
});

// end popups


// geojson.features.forEach(function(marker) {
//
//   var el = document.createElement('div');
//   el.className = 'marker';
//
//   marker.setIcon(L.icon(feature.properties.icon));

// });


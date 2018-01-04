'use strict';

import Hilo3d from 'hilo3d';

const Stats = require('./stats');
const OrbitControls = require('./orbitcontrols');

module.exports = () => {
  var camera = new Hilo3d.PerspectiveCamera({
    aspect: innerWidth / innerHeight,
    far: 100,
    near: 0.1,
    z: 3
  });
  var stage = new Hilo3d.Stage({
    container: document.querySelector('#container'),
    camera: camera,
    clearColor: new Hilo3d.Color(0.4, 0.4, 0.4),
    width: innerWidth,
    height: innerHeight
  });

  new Hilo3d.DirectionalLight({
    color: new Hilo3d.Color(1, 1, 1),
    direction: new Hilo3d.Vector3(0, -1, 0)
  }).addTo(stage);

  new Hilo3d.AmbientLight({
    color: new Hilo3d.Color(1, 1, 1),
    amount: 0.5
  }).addTo(stage);

  var ticker = new Hilo3d.Ticker(60);
  ticker.addTick(stage);
  ticker.addTick(Hilo3d.Tween);
  ticker.addTick(Hilo3d.Animation);
  new Stats(ticker, stage.renderer.renderInfo);
  new OrbitControls(stage, {
    isLockMove: true
  });

  setTimeout(function() {
    ticker.start(true);
  }, 10);

  const html = document.querySelector('.wordCloud svg').innerHTML;
  var data = `
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    ${html}
    </svg>
  `;

  var canvas = document.querySelector('#canvas');
  var ctx = canvas.getContext('2d');

  var DOMURL = window.URL || window.webkitURL || window;

  var img = new Image();
  img.crossOrigin = 'anonymous';
  var svg = new Blob([data], {
    type: 'image/svg+xml;charset=utf-8'
  });
  var url = DOMURL.createObjectURL(svg);

  img.onload = function () {
    ctx.drawImage(img, 0, 0);
    DOMURL.revokeObjectURL(url);
  };

  img.src = url;

  setTimeout(function() {
    var container = new Hilo3d.Node();

    var geometry = new Hilo3d.SphereGeometry({
      radius: 1,
      heightSegments: 32,
      widthSegments: 64
    });
    var material = new Hilo3d.BasicMaterial({
      lightType: 'NONE',
      diffuse: new Hilo3d.Texture({
        image: canvas
      }),
      wireframe: false
    });
    var mesh = new Hilo3d.Mesh({
      geometry: geometry,
      material: material
    });
    container.addChild(mesh);
    stage.addChild(container);
  }, 100);
};

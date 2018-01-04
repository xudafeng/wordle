'use strict';

import Hilo3d from 'hilo3d';

const Stats = require('./stats');
const OrbitControls = require('./orbitcontrols');

module.exports = () => {
  const stageWidth = parseInt(getComputedStyle(document.querySelector('#container')).width);
  const stageHeight = parseInt(innerHeight);

  const camera = new Hilo3d.PerspectiveCamera({
    aspect: stageWidth / stageHeight,
    far: 100,
    near: 0.1,
    z: 3
  });

  const stage = new Hilo3d.Stage({
    container: document.querySelector('#container'),
    camera: camera,
    clearColor: new Hilo3d.Color(1, 1, 1),
    width: stageWidth,
    height: stageHeight,
    pixelRatio: 1
  });

  const ticker = new Hilo3d.Ticker(60);
  ticker.addTick(stage);
  ticker.start(true);

  new Stats(ticker, stage.renderer.renderInfo);
  new OrbitControls(stage, {
    isLockMove: true
  });

  setTimeout(() => {
    const svgElem = document.querySelector('.wordCloud svg');
    const svgGElem = document.querySelector('.wordCloud svg g');

    var data = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${svgGElem.getAttribute('width')}" height="${svgGElem.getAttribute('height')}">
      ${svgElem.innerHTML}
      </svg>
    `;

    const DOMURL = window.URL || window.webkitURL || window;
    const svg = new Blob([data], {
      type: 'image/svg+xml;charset=utf-8'
    });
    const url = DOMURL.createObjectURL(svg);

    const geometry = new Hilo3d.SphereGeometry({
      radius: 1,
      heightSegments: 32,
      widthSegments: 64
    });

    const material = new Hilo3d.BasicMaterial({
      transparent: true,
      diffuse: new Hilo3d.LazyTexture({
        src: url
      })
    });

    new Hilo3d.Mesh({
      rotationY: 90,
      geometry: geometry,
      material: material
    }).addTo(stage);
  }, 1000);
};

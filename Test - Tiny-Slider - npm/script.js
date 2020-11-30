'use strict';

//Test install npm - Tiny Slider

import { tns } from "./node_modules/tiny-slider/src/tiny-slider"

tns({
    container: '.my-slider',
    items: 1,
    slideBy: 'page',
    autoplay: true
  });
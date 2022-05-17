import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  front_view = true;
  back_view = false;
  see_through = false;
  buffer_visible = true;

  origin_x = 40;
  origin_y = 10;
  style =
    'fill:blue;stroke:black;stroke-width:2;fill-opacity:0.1;stroke-opacity:0.9';
  device_style = 'fill:gray;stroke:black;stroke-width:1;opacity:0.6';
  device_buffer_style = 'fill:blue;stroke:black;stroke-width:1;opacity:0.3';

  device_back_style = 'fill:red;stroke:black;stroke-width:1;opacity:0.6';
  device_back_buffer_style =
    'fill:yellow;stroke:black;stroke-width:1;opacity:0.3';

  rack_units = 10;
  rack_unit_height = 100;
  rack_height = this.rack_units * this.rack_unit_height;
  rack_unit_width = 350;
  rack_unit_array = [];

  total_height = this.rack_height + 200;
  total_width = this.rack_unit_width + 200;

  devices_front = [
    {
      name: 'Test Device-1',
      height: 200,
      width: 200,
      buffer_x1: 20,
      buffer_x2: 50,
      buffer_y1: 40,
      buffer_y2: 20,
      rack_position: 4,
    },
    {
      name: 'Test Device-2',
      height: 50,
      width: 150,
      buffer_x1: 20,
      buffer_x2: 20,
      buffer_y1: 21,
      buffer_y2: 21,
      rack_position: 2,
    },
    {
      name: 'Test Device-3',
      height: 30,
      width: 200,
      buffer_x1: 20,
      buffer_x2: 20,
      buffer_y1: 21,
      buffer_y2: 21,
      rack_position: 8,
    },
  ];

  devices_back = [
    {
      name: 'Test Device-4',
      height: 70,
      width: 100,
      buffer_x1: 40,
      buffer_x2: 5,
      buffer_y1: 5,
      buffer_y2: 40,
      rack_position: 3,
    },
    {
      name: 'Test Device-5',
      height: 50,
      width: 150,
      buffer_x1: 20,
      buffer_x2: 20,
      buffer_y1: 21,
      buffer_y2: 21,
      rack_position: 4,
    },
    {
      name: 'Test Device-6',
      height: 30,
      width: 200,
      buffer_x1: 20,
      buffer_x2: 20,
      buffer_y1: 21,
      buffer_y2: 21,
      rack_position: 6,
    },
  ];

  constructor() {
    for (let i = 1; i <= this.rack_units; i++) {
      this.rack_unit_array.push(i);
    }
  }

  fvChange(event) {
    console.log('fv = ', this.front_view);
    if (this.front_view == true) {
      // this.back_view = false;
      this.see_through = false;
    }
  }
  bvChange(event) {
    console.log('bv = ', this.back_view);
    if (this.back_view == true) {
      this.see_through = false;
      // this.front_view = false;
    }
  }
  stChange(event) {
    console.log('st = ', this.see_through);
    if (this.see_through == true) {
      this.back_view = false;
      this.front_view = false;
    }
  }

  bufferChange(event) {}
}

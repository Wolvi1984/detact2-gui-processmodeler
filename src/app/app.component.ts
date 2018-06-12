import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

import {WindowService} from "./services/window.services";
import {mxgraph} from "mxgraph";

declare var require: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild("graphContainer")
  elGraph:ElementRef;

  editor:any;

  constructor(private winService: WindowService) {
    let win = this.winService.nativeWindow;

    /*const mx = require('mxgraph')({
      mxImageBasePath: '/assets/mxgraph/images',
      mxBasePath: '/assets/mxgraph'
    });*/
  }

  ngAfterViewInit() {
    console.log(this.elGraph);
  }

  ngOnInit(): void {
    const graph = new mxgraph.mxGraph(document.getElementById('graphContainer'));

    /*let graph: mxgraph.mxGraph = mx.mxGraph(document.getElementById('graphContainer'));

    graph.setEnabled(false);
    /!*let style = graph.getStylesheet().getDefaultVertexStyle();
    style[mxConstants.STYLE_SHAPE] = 'box';

    style[mxConstants.STYLE_SPACING_TOP] = BoxShape.prototype.extrude;
    style[mxConstants.STYLE_SPACING_RIGHT] = BoxShape.prototype.extrude;

    style[mxConstants.STYLE_GRADIENTCOLOR] = '#FFFFFF';
    style[mxConstants.STYLE_SHADOW] = true;*!/
    let parent = graph.getDefaultParent();

    graph.getModel().beginUpdate();
    try {
      let v1 = graph.insertVertex(parent, null, 'Custom', 20, 20, 80, 60),
        v2 = graph.insertVertex(parent, null, 'Shape', 200, 150, 80, 60);
      graph.insertEdge(parent, null, '', v1, v2);
    }
    finally {
      graph.getModel().endUpdate();
    }*/
  }
}

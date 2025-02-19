import { SVGItem } from "./SVGItem";
import { CanvasGradient } from '../Canvas2D';
import { DOMParser } from 'xmldom';
export class Rect extends SVGItem {
	x: any = 0;
	y: any = 0;
	rx: any = 0;
	ry: any = 0;

	constructor(){
		super();
		this._dom = new DOMParser().parseFromString('<rect></rect>');
	}
}

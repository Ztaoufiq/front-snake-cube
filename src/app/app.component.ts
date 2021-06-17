import { Component } from '@angular/core';
import { CubeService } from './cube.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-snake-cube';
  startFrom="";
  vectors="";
  error="";
  constructor(private cubeService:CubeService) {}

  onSend(coordinateX:string,coordinateY:string,coordinateZ:string,segment:string){
	const formData : FormData = new FormData()
	let dimension = [coordinateX,coordinateY,coordinateZ]
	formData.append('dimension',JSON.stringify(dimension))
	formData.append('segment',segment)
	this.cubeService.onSendService(formData).subscribe
	(res=>{
		console.log(res);
		this.startFrom= res[0][0];
		this.vectors= res[0][1];
	},
	err=>{
		console.log(err);
		this.error= err.error.text
	}
	)
}
}

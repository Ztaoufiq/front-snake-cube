import { Component } from '@angular/core';
import { NameService } from './name.service';

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
  constructor(private nameService:NameService) {}

  onSend(coordinateX:string,coordinateY:string,coordinateZ:string,segment:string){
	const formData : FormData = new FormData()
	let dimension = [coordinateX,coordinateY,coordinateZ]
	formData.append('dimension',JSON.stringify(dimension))
	formData.append('structure',segment)
	this.nameService.onSendService(formData).subscribe
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

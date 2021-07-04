import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export class ResourceComponent implements OnInit {
titulo:string="Este es el perro titulo"
  constructor() { }

  ngOnInit(): void {
  }

}

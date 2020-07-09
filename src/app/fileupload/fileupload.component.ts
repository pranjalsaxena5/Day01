import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {
  selectedFile = null;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  onFileSelected(event){
    this.selectedFile = event.target.files[0];
    console.log(event);
  }
  upload(){
    this.http.post
  }
}

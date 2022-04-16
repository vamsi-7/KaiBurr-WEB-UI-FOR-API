import { Component, OnInit } from '@angular/core';
import { ServiceComponentService } from '../service-component.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-operation-component',
  templateUrl: './post-operation-component.component.html',
  styleUrls: ['./post-operation-component.component.css']
})
export class PostOperationComponentComponent implements OnInit {

  constructor(private uiService: ServiceComponentService, private router: Router) { }

  ngOnInit(): void {
  }

  OnSubmit(postData: { id: string, name: string, description: string }) {
    console.log(postData);
    this.uiService.savewords(postData).subscribe(data => console.log(data));
    this.wordsList();

  }
  refresh(): void {
    window.location.reload();
  }
  wordsList() {
    this.router.navigate(['/words']);
  }
  onclickback() {
    this.router.navigate(['/words']);
  }
}

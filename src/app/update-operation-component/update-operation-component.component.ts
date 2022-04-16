import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceComponentService } from '../service-component.service';
import { WordObject } from '../word';

@Component({
  selector: 'app-update-operation-component',
  templateUrl: './update-operation-component.component.html',
  styleUrls: ['./update-operation-component.component.css']
})
export class UpdateOperationComponentComponent implements OnInit {

  constructor(private uiService: ServiceComponentService, private router: Router, private route: ActivatedRoute) { }
  word: WordObject;
  id: string;
  editindex: string;
  editedItem: WordObject;

  @ViewChild('putdata') form: NgForm

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.uiService.getwordswithid(this.id).subscribe(data => { this.word = data })
  }

  onclickback() {
    this.router.navigate(['/words']);
  }
  OnSubmit(putdata: { id: string; name: string }) {
    this.uiService.updateword(putdata).subscribe(data => { console.log(data) });
  }

  wordsList() {
    this.router.navigate(['/words']);
  }

}

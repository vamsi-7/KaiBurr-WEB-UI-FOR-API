import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceComponentService } from '../service-component.service';
import { WordObject } from '../word';

@Component({
  selector: 'app-get-operation-component',
  templateUrl: './get-operation-component.component.html',
  styleUrls: ['./get-operation-component.component.css']
})
export class GetOperationComponentComponent implements OnInit {

  constructor(private uiService: ServiceComponentService, private router: Router, private route: ActivatedRoute) { }
  words: WordObject[] = [];
  ngOnInit() {
    this.getWords();
  }

  private getWords() {
    this.uiService.getwords().subscribe(data => { this.words = data; });
  }

  onedit(id: string) {
    this.router.navigate(['update-word', id]);
  }

  ondelete(id: string) {
    try {
      this.uiService.deleteword(id).subscribe(data => console.log(data));
    } catch (e) {
      console.log(e);
    }

    this.refresh();
  }
  refresh(): void {
    window.location.reload();
  }
}
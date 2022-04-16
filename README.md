# Introduction
```
This is an User Interface for the task-1 Java Rest API using Angular Framework.

Which allows the user to create, modify, view and delete the records with the help of the user interface.
```
# Pre-requisite
```
The @CrossOrigin annotation in the above controller is used to enable Cross-Origin requests. 

This is required because we’ll be accessing the apis from angular’s frontend server.
```
# Installation

You can install angular by typing the following command in your terminal
```
npm install -g @angular/cli
```

# Requirements

## Server-side technologies
```
 Spring Boot - 2.0.5.RELEASE
 JDK - 1.8 or later
 Spring Framework - 5.0.8 RELEASE
```

## Front end technologies

    Angular 8.0.0
    Bootstrap 4
    npm- 6.9.0

```
The Angular CLI is a command-line interface tool that you use to initialize, develop, scaffold, and maintain Angular applications.
```



##  Components and services 
Components

    get-operation-component
    post-operation-component
    update-operation-component

 Services

    service-component.service.ts - Service for Http Client methods

# Code Snippets

## get-operation-component

```typescript
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
```

## post-operation-component

```typescript
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

```

## update-operation-component
```typescript
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
```

## Service-Component.Service.ts
```typescript
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { WordObject } from './word';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceComponentService {
  private word: WordObject[] = [];
  startedEditing = new Subject<number>();

  private baseurl = "http://localhost:8080/students"

  constructor(private httpClient: HttpClient) { }

  getwords(): Observable<WordObject[]> {
    return this.httpClient.get<WordObject[]>(`${this.baseurl}`);
  }

  savewords(postData: { id: string; name: string; description: string }): Observable<Object> {
    return this.httpClient.post<Object>(`${this.baseurl}`, postData);
  }
  updateword(putData: { id: string; name: string }): Observable<Object> {
    return this.httpClient.put<Object>(`${this.baseurl}/${putData.id}`, putData);
  }

  deleteword(id: string): Observable<Object> {
    debugger
    console.log(`${this.baseurl}/${id}`)
    return this.httpClient.delete<Object>(`${this.baseurl}/${id}`)
  }

  getwordswithid(id: string): Observable<WordObject> {
    return this.httpClient.get<WordObject>(`${this.baseurl}/${id}`)
  }
}

```
# Running and Testing the app

## The Angular front-end can be run by typing ng serve command. It will start on port 4200 

```
$ ng serve
```

# Screenshots of the App running on port 4200

## User Interface of the App
![UI](https://github.com/vamsi-7/KaiBurr-WEB-UI-FOR-API/blob/main/Images/UI.JPG?raw=true)

## Create Student

-> Clicking on create button creates new students after click on submit the record in the database

![Create Student](https://github.com/vamsi-7/KaiBurr-WEB-UI-FOR-API/blob/main/Images/Add_new.JPG?raw=true)


## Update Student

-> Clicking on update button and after making changes to the existing data updates the record in the database

![Update Student](https://github.com/vamsi-7/KaiBurr-WEB-UI-FOR-API/blob/main/Images/Update.JPG?raw=true)

## Delete Student

-> Clicking on delete button deletes the record in the database

![Delete Student](https://github.com/vamsi-7/KaiBurr-WEB-UI-FOR-API/blob/main/Images/delete.JPG?raw=true)
# App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
# App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

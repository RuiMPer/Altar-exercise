import { Component} from "@angular/core"
import { CoursesService } from './courses.service';


@Component({
    selector: "courses",
    template: `
        <h2>{{ countCourses() + " courses" }}<h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}    
            </li>
        </ul>
    ` 
   
})
export class CoursesComponent  {
    courses; 

    constructor(service: CoursesService) {
        this.courses = service.getCourses()
    }

    countCourses() {
        return this.courses.length
    }
}
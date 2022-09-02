import { Component, OnInit } from '@angular/core';
import { NewcssService } from './newcss.service';

@Component({
  selector: 'app-newcss',
  templateUrl: './newcss.component.html',
  styleUrls: ['./newcss.component.scss'],
})

export class NewcssComponent implements OnInit {
    public forms = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        email: '',
    }

    constructor (
        private newcssService: NewcssService,
    ) { }

    ngOnInit() {
        this.forms.created_by = sessionStorage.getItem('email') || ''; 
    }
    GpSearch() {
        this.newcssService.GpSearch(this.forms).subscribe(data => {
            this.rowData = data;
        },
        error => {
            console.log('Error', error);
        });
    }
}
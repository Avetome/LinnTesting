import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from './category';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class CategoriesService {

    private serverUrl = 'http://localhost:5000';

    constructor(private http: HttpClient)
    {
    }

    public getCategories()
    {
        return this.http.get<Category[]>(this.serverUrl + "/api/categories")
            .pipe(
                tap(_ => console.log('fetched categories'))
            );
    }

    public updateCategory(category: Category) {
        return this.http.put(this.serverUrl + `/api/categories/${category.CategoryId}`, { categoryName: category.CategoryName })
            .pipe(
                tap(_ => console.log('fetched categories'))
            );
    }
}

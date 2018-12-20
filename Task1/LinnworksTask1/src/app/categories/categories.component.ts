import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material';

import { Category } from './../category';
import { CategoriesService } from './../categories.service';

import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.less']
})
export class CategoriesComponent implements OnInit {
    public categories = [];
    public selectedCategory: string = "";
    public error: { categoryId?: string, errorMessage: string } = { categoryId: undefined, errorMessage: undefined };

    private previosCategoryName: string = "";

    public isLoading: boolean = false;

    public dataSource = new MatTableDataSource<Category>(this.categories);
    public selection = new SelectionModel<Category>(false, []);

    public matcher = new MyErrorStateMatcher();
    public categoryNameFormControl = new FormControl('', [Validators.required]);

    public columns = [/*'select', */'CategoryName', 'ProductsCount', 'Edit'];

    @ViewChild('CategoryNameInput') CategoryNameInput: ElementRef;

    constructor(public categoriesService: CategoriesService) {
    }

    ngOnInit()
    {
        this.isLoading = true;

        this.categoriesService
            .getCategories()
            .subscribe(categories => {
                this.categories = categories
                this.isLoading = false;
            });
    }

    editCategoryClick(category: Category, event: MouseEvent) {
        this.selectedCategory = category.CategoryId;
        this.previosCategoryName = category.CategoryName;

        event.stopPropagation();

        setTimeout(() => {
            this.CategoryNameInput.nativeElement.focus();
        }, 0);

        return false;
    }

    editCategoryInputFocusOut(category: Category) {
        this.editCategory(category);
    }

    editCategoryInputKeyDown(category: Category, event: KeyboardEvent) {

        // enter
        if (event.keyCode === 13) {
            this.editCategory(category);
        }

        // esc
        if (event.keyCode === 27) {
            category.CategoryName = this.previosCategoryName;
            this.error = { categoryId: undefined, errorMessage: undefined };
            this.selectedCategory = "";
        }
    }

    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }

    masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(row => this.selection.select(row));
    }

    private editCategory(category: Category) {
        if (category.CategoryName === this.previosCategoryName) {
            this.error = { categoryId: undefined, errorMessage: undefined };
            this.selectedCategory = "";
            return;
        }

        if (!category.CategoryName) {
            this.error.categoryId = category.CategoryId;
            this.error.errorMessage = "Сategory name can't be empty";

            this.CategoryNameInput.nativeElement.focus();

            return;
        }

        let existedCatWithSameName: Category[] = this.categories.filter((cat: Category) => cat.CategoryName == category.CategoryName && cat.CategoryId != category.CategoryId);

        if (existedCatWithSameName.length != 0) {
            this.error.categoryId = category.CategoryId;
            // this.error.errorMessage = "There is already exists category with same name";
            this.error.errorMessage = "Dublicate category name";

            this.CategoryNameInput.nativeElement.focus();

            return;
        }

        this.categoriesService.updateCategory(category).subscribe(() => {
            this.error = { categoryId: undefined, errorMessage: undefined };
            this.selectedCategory = "";
        });
    }
}

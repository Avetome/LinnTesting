(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-testtask></app-testtask>\n"

/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categories/categories.component */ "./src/app/categories/categories.component.ts");
/* harmony import */ var _categories_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./categories.service */ "./src/app/categories.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _testtask_testtask_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./testtask/testtask.component */ "./src/app/testtask/testtask.component.ts");
/* harmony import */ var _token_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./token.interceptor */ "./src/app/token.interceptor.ts");
/* harmony import */ var _errorhandler_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./errorhandler.interceptor */ "./src/app/errorhandler.interceptor.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _categories_categories_component__WEBPACK_IMPORTED_MODULE_6__["CategoriesComponent"],
                _testtask_testtask_component__WEBPACK_IMPORTED_MODULE_12__["TesttaskComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSortModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"]
            ],
            providers: [
                _categories_service__WEBPACK_IMPORTED_MODULE_7__["CategoriesService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
                    useClass: _errorhandler_interceptor__WEBPACK_IMPORTED_MODULE_14__["ErrorHandlerInterceptor"],
                    multi: true
                },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
                    useClass: _token_interceptor__WEBPACK_IMPORTED_MODULE_13__["TokenInterceptor"],
                    multi: true
                },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/categories.service.ts":
/*!***************************************!*\
  !*** ./src/app/categories.service.ts ***!
  \***************************************/
/*! exports provided: CategoriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesService", function() { return CategoriesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var CategoriesService = /** @class */ (function () {
    function CategoriesService(http) {
        this.http = http;
        this.serverUrl = 'http://localhost:5000';
    }
    CategoriesService.prototype.getCategories = function () {
        return this.http.get(this.serverUrl + "/api/categories")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log('fetched categories'); }));
    };
    CategoriesService.prototype.updateCategory = function (category) {
        return this.http.put(this.serverUrl + ("/api/categories/" + category.CategoryId), { categoryName: category.CategoryName })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log('fetched categories'); }));
    };
    CategoriesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CategoriesService);
    return CategoriesService;
}());



/***/ }),

/***/ "./src/app/categories/categories.component.html":
/*!******************************************************!*\
  !*** ./src/app/categories/categories.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Product categories</h2>\r\n<div *ngIf=\"isLoading; else CategoriesLIst\">\r\n    <div class=\"loader\">\r\n        <mat-spinner></mat-spinner>\r\n    </div>\r\n</div>\r\n<ng-template #CategoriesLIst>\r\n    <table mat-table [dataSource]=\"categories\" matSort class=\"mat-elevation-z8\">\r\n\r\n        <ng-container matColumnDef=\"select\">\r\n            <th mat-header-cell *matHeaderCellDef></th>\r\n            <td mat-cell *matCellDef=\"let row\">\r\n                <mat-checkbox (click)=\"$event.stopPropagation()\"\r\n                              (change)=\"$event ? selection.toggle(row) : null\"\r\n                              [checked]=\"selection.isSelected(row)\">\r\n                </mat-checkbox>\r\n            </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"CategoryName\">\r\n            <th mat-header-cell *matHeaderCellDef> Category name </th>\r\n            <td mat-cell *matCellDef=\"let category\">\r\n                <div *ngIf=\"category.CategoryId != selectedCategory; else elseBlock\">\r\n                    {{category.CategoryName}}\r\n                </div>\r\n                <ng-template #elseBlock>\r\n                    <mat-form-field class=\"example-full-width\">\r\n                        <input #CategoryNameInput\r\n                               matInput type=\"text\"\r\n                               [(ngModel)]=\"category.CategoryName\"\r\n                               (keydown)=\"editCategoryInputKeyDown(category, $event)\"\r\n                               (focusout)=\"editCategoryInputFocusOut(category)\"\r\n                               [errorStateMatcher]=\"matcher\"\r\n                               autofocus />\r\n                        <mat-hint *ngIf=\"error.errorMessage != undefined\">\r\n                            {{error.errorMessage}}\r\n                        </mat-hint>\r\n                    </mat-form-field>\r\n                </ng-template>\r\n            </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"ProductsCount\">\r\n            <th mat-header-cell *matHeaderCellDef> Products count </th>\r\n            <td mat-cell *matCellDef=\"let category\"> {{category.ProductsCount}} </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"Edit\">\r\n            <th mat-header-cell *matHeaderCellDef></th>\r\n            <td mat-cell *matCellDef=\"let category\">\r\n                <button mat-button (click)=\"editCategoryClick(category, $event)\">Edit</button>\r\n            </td>\r\n        </ng-container>\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"columns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: columns;\" (click)=\"selection.toggle(row)\"></tr>\r\n\r\n    </table>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/categories/categories.component.less":
/*!******************************************************!*\
  !*** ./src/app/categories/categories.component.less ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n}\n.mat-header-cell {\n  text-align: left;\n}\n.mat-cell {\n  text-align: left;\n}\n.mat-column-Edit {\n  width: 64px;\n}\n.cdk-column-ProductsCount {\n  width: 100px;\n}\n.cdk-column-CategoryName {\n  min-width: 400px;\n}\n.mat-column-select {\n  text-align: center;\n}\n.loader {\n  width: 100px;\n  margin: 50px auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcmllcy9FOi9Xb3JrL0xpbm5UZXN0aW5nL1Rhc2sxL0xpbm53b3Jrc1Rhc2sxL3NyYy9hcHAvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9jYXRlZ29yaWVzL2NhdGVnb3JpZXMuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0NDQ0g7QURFRDtFQUNJLGlCQUFBO0NDQUg7QURHRDtFQUNJLGlCQUFBO0NDREg7QURJRDtFQUNJLFlBQUE7Q0NGSDtBREtEO0VBQ0ksYUFBQTtDQ0hIO0FETUQ7RUFDSSxpQkFBQTtDQ0pIO0FET0Q7RUFDSSxtQkFBQTtDQ0xIO0FEUUQ7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7Q0NOSCIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1oZWFkZXItY2VsbCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLm1hdC1jZWxsIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ubWF0LWNvbHVtbi1FZGl0IHtcbiAgICB3aWR0aDogNjRweDtcbn1cblxuLmNkay1jb2x1bW4tUHJvZHVjdHNDb3VudCB7XG4gICAgd2lkdGg6IDEwMHB4O1xufVxuXG4uY2RrLWNvbHVtbi1DYXRlZ29yeU5hbWUge1xuICAgIG1pbi13aWR0aDogNDAwcHg7XG59XG5cbi5tYXQtY29sdW1uLXNlbGVjdCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubG9hZGVyIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XG59XG4iLCJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1hdC1oZWFkZXItY2VsbCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ubWF0LWNlbGwge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLm1hdC1jb2x1bW4tRWRpdCB7XG4gIHdpZHRoOiA2NHB4O1xufVxuLmNkay1jb2x1bW4tUHJvZHVjdHNDb3VudCB7XG4gIHdpZHRoOiAxMDBweDtcbn1cbi5jZGstY29sdW1uLUNhdGVnb3J5TmFtZSB7XG4gIG1pbi13aWR0aDogNDAwcHg7XG59XG4ubWF0LWNvbHVtbi1zZWxlY3Qge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubG9hZGVyIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW46IDUwcHggYXV0bztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/categories/categories.component.ts":
/*!****************************************************!*\
  !*** ./src/app/categories/categories.component.ts ***!
  \****************************************************/
/*! exports provided: MyErrorStateMatcher, CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _categories_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../categories.service */ "./src/app/categories.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






/** Error when invalid control is dirty, touched, or submitted. */
var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(categoriesService) {
        this.categoriesService = categoriesService;
        this.categories = [];
        this.selectedCategory = "";
        this.error = { categoryId: undefined, errorMessage: undefined };
        this.previosCategoryName = "";
        this.isLoading = false;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.categories);
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["SelectionModel"](false, []);
        this.matcher = new MyErrorStateMatcher();
        this.categoryNameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]);
        this.columns = [/*'select', */ 'CategoryName', 'ProductsCount', 'Edit'];
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.categoriesService
            .getCategories()
            .subscribe(function (categories) {
            _this.categories = categories;
            _this.isLoading = false;
        });
    };
    CategoriesComponent.prototype.editCategoryClick = function (category, event) {
        var _this = this;
        this.selectedCategory = category.CategoryId;
        this.previosCategoryName = category.CategoryName;
        event.stopPropagation();
        setTimeout(function () {
            _this.CategoryNameInput.nativeElement.focus();
        }, 0);
        return false;
    };
    CategoriesComponent.prototype.editCategoryInputFocusOut = function (category) {
        this.editCategory(category);
    };
    CategoriesComponent.prototype.editCategoryInputKeyDown = function (category, event) {
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
    };
    CategoriesComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
    };
    CategoriesComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    CategoriesComponent.prototype.editCategory = function (category) {
        var _this = this;
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
        var existedCatWithSameName = this.categories.filter(function (cat) { return cat.CategoryName == category.CategoryName && cat.CategoryId != category.CategoryId; });
        if (existedCatWithSameName.length != 0) {
            this.error.categoryId = category.CategoryId;
            // this.error.errorMessage = "There is already exists category with same name";
            this.error.errorMessage = "Dublicate category name";
            this.CategoryNameInput.nativeElement.focus();
            return;
        }
        this.categoriesService.updateCategory(category).subscribe(function () {
            _this.error = { categoryId: undefined, errorMessage: undefined };
            _this.selectedCategory = "";
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('CategoryNameInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CategoriesComponent.prototype, "CategoryNameInput", void 0);
    CategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-categories',
            template: __webpack_require__(/*! ./categories.component.html */ "./src/app/categories/categories.component.html"),
            styles: [__webpack_require__(/*! ./categories.component.less */ "./src/app/categories/categories.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_categories_service__WEBPACK_IMPORTED_MODULE_4__["CategoriesService"]])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/errorhandler.interceptor.ts":
/*!*********************************************!*\
  !*** ./src/app/errorhandler.interceptor.ts ***!
  \*********************************************/
/*! exports provided: ErrorHandlerInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlerInterceptor", function() { return ErrorHandlerInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./token.service */ "./src/app/token.service.ts");






var ErrorHandlerInterceptor = /** @class */ (function () {
    function ErrorHandlerInterceptor(snackBar, tokenService) {
        this.snackBar = snackBar;
        this.tokenService = tokenService;
    }
    ErrorHandlerInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (event) {
        }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                if (err.status === 401) {
                    var snackBarRef = _this.snackBar.open("Invalid authorization token", null, {
                        duration: 2000,
                    });
                    snackBarRef.afterDismissed().subscribe(function () {
                        _this.tokenService.clearToken();
                        window.location.reload();
                    });
                }
            }
        }));
    };
    ErrorHandlerInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            _token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"]])
    ], ErrorHandlerInterceptor);
    return ErrorHandlerInterceptor;
}());



/***/ }),

/***/ "./src/app/testtask/testtask.component.html":
/*!**************************************************!*\
  !*** ./src/app/testtask/testtask.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div *ngIf=\"tokenSuccess == false; else Categories\" class=\"login\">\r\n        <mat-form-field class=\"example-full-width\">\r\n            <input matInput\r\n                   #TokenInput\r\n                   placeholder=\"Enter the token\"\r\n                   type=\"text\"\r\n                   [(ngModel)]=\"token\"\r\n                   autofocus />\r\n        </mat-form-field>\r\n        <button mat-raised-button color=\"primary\" (click)=\"enterTokenClick()\" disabled=\"{{!token}}\">Enter!</button>\r\n    </div>\r\n    <ng-template #Categories><app-categories></app-categories></ng-template>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/testtask/testtask.component.less":
/*!**************************************************!*\
  !*** ./src/app/testtask/testtask.component.less ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login {\n  position: absolute;\n  width: 300px;\n  height: 60px;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.login button {\n  margin-left: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVzdHRhc2svRTovV29yay9MaW5uVGVzdGluZy9UYXNrMS9MaW5ud29ya3NUYXNrMS9zcmMvYXBwL3Rlc3R0YXNrL3Rlc3R0YXNrLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC90ZXN0dGFzay90ZXN0dGFzay5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHlDQUFBO1VBQUEsaUNBQUE7Q0NDSDtBRENHO0VBQ0ksa0JBQUE7Q0NDUCIsImZpbGUiOiJzcmMvYXBwL3Rlc3R0YXNrL3Rlc3R0YXNrLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgLy8gSEFDSzpcbiAgICAmIGJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIH1cbn1cbiIsIi5sb2dpbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuLmxvZ2luIGJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/testtask/testtask.component.ts":
/*!************************************************!*\
  !*** ./src/app/testtask/testtask.component.ts ***!
  \************************************************/
/*! exports provided: TesttaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TesttaskComponent", function() { return TesttaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../token.service */ "./src/app/token.service.ts");



var TesttaskComponent = /** @class */ (function () {
    function TesttaskComponent(tokenService) {
        this.tokenService = tokenService;
        this.token = undefined;
        this.tokenSuccess = false;
    }
    TesttaskComponent.prototype.ngOnInit = function () {
        this.token = this.tokenService.getToken();
        if (this.token) {
            this.tokenSuccess = true;
        }
    };
    TesttaskComponent.prototype.enterTokenClick = function () {
        var token = this.TokenInput.nativeElement.value;
        this.tokenService.setToken(token);
        this.tokenSuccess = true;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('TokenInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TesttaskComponent.prototype, "TokenInput", void 0);
    TesttaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-testtask',
            template: __webpack_require__(/*! ./testtask.component.html */ "./src/app/testtask/testtask.component.html"),
            styles: [__webpack_require__(/*! ./testtask.component.less */ "./src/app/testtask/testtask.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"]])
    ], TesttaskComponent);
    return TesttaskComponent;
}());



/***/ }),

/***/ "./src/app/token.interceptor.ts":
/*!**************************************!*\
  !*** ./src/app/token.interceptor.ts ***!
  \**************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token.service */ "./src/app/token.service.ts");



var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(tokenService) {
        this.tokenService = tokenService;
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        request = request.clone({
            setHeaders: {
                Authorization: "" + this.tokenService.getToken()
            }
        });
        return next.handle(request);
    };
    TokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"]])
    ], TokenInterceptor);
    return TokenInterceptor;
}());



/***/ }),

/***/ "./src/app/token.service.ts":
/*!**********************************!*\
  !*** ./src/app/token.service.ts ***!
  \**********************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TokenService = /** @class */ (function () {
    function TokenService() {
        this.token = undefined;
        this.LOCAL_STORAGE_TOKEN_KEY = "TOKEN_KEY_FOR_API";
        var tokenFromLs = window.localStorage.getItem(this.LOCAL_STORAGE_TOKEN_KEY);
        if (tokenFromLs && this.validateToken(tokenFromLs)) {
            this.token = tokenFromLs;
        }
    }
    TokenService.prototype.setToken = function (token) {
        if (!token || !this.validateToken(token)) {
            console.error("Token error");
            return;
        }
        this.token = token;
        window.localStorage.setItem(this.LOCAL_STORAGE_TOKEN_KEY, token);
    };
    TokenService.prototype.getToken = function () {
        return this.token;
    };
    TokenService.prototype.clearToken = function () {
        this.token = undefined;
        window.localStorage.setItem(this.LOCAL_STORAGE_TOKEN_KEY, undefined);
    };
    TokenService.prototype.validateToken = function (token) {
        return token.length >= 32;
    };
    TokenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TokenService);
    return TokenService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Work\LinnTesting\Task1\LinnworksTask1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
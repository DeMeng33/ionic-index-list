import {AfterViewChecked, Component, ContentChildren, ElementRef, Input, QueryList} from '@angular/core';
import {IndexCellComponent} from './index-cell';

// 字母索引 单个字母列表模块封装 这里处理了字母显示
@Component({
  selector: 'ion-index-section',
  template: `
      <div class="index-section" [class.index-section-current]="_current" [ngClass]="className">
          <!-- group-->
          <div class="index-section-index" (click)="hide()">
              {{index}}
          </div>

          <!--分组下的详细内容-->
          <div class="index-section-main">
              <ng-content>

              </ng-content>
          </div>
      </div>
  `,
  styleUrls: ['./index-section.scss']
})
export class IndexSectionComponent implements AfterViewChecked {

  _current = false;

  className: string = '';

  @Input() index: string;

  @ContentChildren(IndexCellComponent) _listOfIndexCell: QueryList<IndexCellComponent>;

  constructor(public elementRef: ElementRef) {

  }

  getElementRef(): ElementRef {
    return this.elementRef;
  }

  ngAfterViewChecked(): void {
  }

  hide() {
    this.className = this.className === 'hide' ? 'show' : 'hide';
  }
}

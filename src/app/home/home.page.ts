import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  key: string;
  spell = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'M'];
  contactGroup = [];

  constructor() {
    // 数据 同步获取 会导致索引黏贴位置错误
    setTimeout(() => {
    this.spell.forEach(c => {
      const data = [];
      for (let i = 0; i < 10; i++) {
        data.push(`${c}${i}`);
      }
      this.contactGroup.push({
        Spell: c,
        Data: data
      });
    });
    }, 0);
  }
}

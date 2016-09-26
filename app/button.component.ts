import { Component, Input } from '@angular/core';

@Component({
    selector: 'my-button',
    template: `<button>{{title}}</button>`
})
export class MyButtonComponent {
    @Input('customTitle')
    title: string;
}
import { Component, HostBinding, OnInit, Directive, HostListener, ElementRef, Renderer } from '@angular/core';

@Directive({
    selector: '[myDir]'
})
export class CustomDir implements OnInit{

    @HostBinding('style.backgroundColor') bgColor: string;
    @HostBinding('style.border') border: string;
    @HostBinding('style.height') height: string;
    @HostBinding('style.background-image') img: string;
    @HostBinding('style.width') width: string;
    constructor(private el: ElementRef, private renderer: Renderer) {}
    ngOnInit() {
        this.bgColor = 'red';
    }

    @HostListener('mouseover', ["$event"]) onMouseOver(event) {
        this.bgColor = 'yellow';
        this.width = '300px';
    }
    @HostListener('mouseout') onMouseOut() {
        this.bgColor = 'green';
    }
    @HostListener('click') onClick() {
        this.renderer.setElementStyle(this.el.nativeElement, 'colour', 'violet');
        this.border = '100px';
        this.height = '100px';
        this.img = 'https://res.cloudinary.com/demo/image/upload/w_500/sample.jpg';
    }
   /*  @HostListener('blur') onBlur() {
        window.alert('BLURRRRRRRRRrr');
    } */

    /* @HostListener('window:scroll') onScroll() {
        document.bgColor = 'pink';
    } */

    /* @HostListener('window:keyup', ['$event']) onKeyup(event) {
        if(event.key === 'ArrowUp') {

        } else if(event.key === 'ArrowDown') {

        } else if(event.key === 'ArrowLeft') {

        } else if(event.key === 'ArrowRight') {

        }
    } */
    /* @HostListener('window:blur') onWindowClick() {
        document.bgColor = 'black';
    } */
}
// highlight.directive.ts
import { Directive, 
         OnInit,
         OnDestroy,
         ElementRef,
         HostListener,
         Renderer2,
         Input
} from '@angular/core';

//<h1 appHighlight
// <div appHighlight
// h1, div are called as host element

// No template, no styles

@Directive({
  selector: '[appHighlight]', // MUST have []
})
export class HighlightDirective implements OnInit, OnDestroy {

  @Input()
  color: string;

  constructor(private hostElement: ElementRef,
             private renderer: Renderer2) {
    console.log('HighlightDirective created');
  }

  ngOnInit() {
    console.log('HighlightDirective ngOnInit');
    console.log('Host element ', this.hostElement
                                 .nativeElement.tagName);

    this.color = this.color || 'lightgreen';
  }

  ngOnDestroy() {
    console.log('HighlightDirective ngOnDestroy');
  }

  @HostListener('mouseenter')
  onEnter() {
    // console.log('mouse enter');
    this.renderer.setStyle(this.hostElement.nativeElement,
                           'background',
                           this.color);
  }

  @HostListener('mouseleave')
  onLeave() {
    // console.log('mouse leave');
    this.renderer.removeStyle(this.hostElement.nativeElement,
                              'background');
  }
}

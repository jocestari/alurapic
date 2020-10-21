import { Directive, ElementRef, OnInit } from '@angular/core';
import { PlatFormDetectorService } from 'src/app/core/platform-detector/platform-detector.service';

@Directive({
    selector: '[immediateClick]'
})
export class ImmediateClickDirective implements OnInit {

    constructor(
        private element: ElementRef<any>,
        private platFormDetector: PlatFormDetectorService
    ) { }
    ngOnInit(): void {
        
        this.platFormDetector.isPlatformBrowser &&
            this.element.nativeElement.click();
    
    }

    

}
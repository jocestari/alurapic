import { NgModule } from '@angular/core';
import { PhotoModule } from './photo/photo.module';
import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { CardModule } from '../shared/components/card/card.module';
import { PhotoDetailsComponent } from './photo-details/photo-details.component';
import { PhotoDetailsModule } from './photo-details/photo-details.module';




@NgModule({
    imports: [ 
        PhotoModule, 
        PhotoListModule, 
        PhotoFormModule,
        PhotoDetailsModule
        
     ]
})
export class PhotosModule {}
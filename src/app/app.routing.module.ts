import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { LoginGuard } from './core/auth/login.guard';
import { AuthGuard } from './core/auth/auth.guard';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { PhotoDetailsComponent } from './photos/photo-details/photo-details.component';
import { GlobalErrorHandler } from './errors/global-error-handler/global-error-handler';
import { GlobalErrorComponent } from './errors/global-error/global-error.component';

const routes: Routes = [
    {
        path: '', 
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        loadChildren:'./home/home.module#HomeModule' 
    
    },
   
    {
        path: 'user/:userName', 
        component: PhotoListComponent,
        resolve: {
            photos: PhotoListResolver 
        },
        data: {
            title: 'Timeline'
        }
    },
    {
        path: 'p/add', component: PhotoFormComponent,
        canActivate: [AuthGuard],
        data: {
            title: 'Photo Upload'
        }
    },
    {
        path: 'p/:photoId', 
        component: PhotoDetailsComponent,
        data: {
            title: 'Photo Detail'
        }
    },
    { 
        path: 'error',
        component: GlobalErrorComponent,
        data: {
            title: 'Error'
        }
    },
    { 
        path: 'not-found',
        component: NotFoundComponent,
        data: {
            title: 'Not Found'
        }
    },
    {
        path: '**',
        redirectTo: 'not-found'
    }
]

@NgModule({
    imports: [ 
        RouterModule.forRoot(routes, { useHash:true }) 
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
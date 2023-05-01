import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotFoundRoutingModule } from './not-found-routing.module';
import { NotFoundComponent } from './not-found.component';

import { MaterialModule } from '../material/material';

// import { SidebarComponent } from './components/sidebar/sidebar.component';
// import { HeaderComponent } from './components/header/header.component';


@NgModule({
    imports: [
        CommonModule,
        NotFoundRoutingModule,
        MaterialModule,
        FormsModule
    ],
    declarations: [NotFoundComponent]
})
export class NotFoundModule {}
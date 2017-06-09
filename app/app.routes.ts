import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { IntroduceComponent } from '../app/home2/introduce/introduce.component';
import { BlogComponent } from '../app/home2/blog/blog.component';
import { ContactComponent } from '../app/home2/contact/contact.component';
import { ProductComponent } from '../app/home2/product/product.component';
import { ExperienceComponent } from '../app/home2/experience/experience.component';
import { PartnerComponent } from '../app/home2/partner/partner.component';
import { FanpageComponent } from '../app/home2/fanpage/fanpage.component';
import { FlMeaningComponent } from '../app/home2/flmeaning/flmeaning.component';
import { ProductDetailsComponent } from '../app/home2/productdetails/productdetails.component';
import { BlogIDComponent } from '../app/home2/blogid/blogid.component';

const MODULE_ROUTES: Route[] = [
    { path: 'home', component: HomeComponent },
    { path: 'introduce', component: IntroduceComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'blog/view/:id', component: BlogIDComponent },    
    { path: 'contact', component: ContactComponent },
    { path: 'product', component: ProductComponent,},
    { path: 'product/view/:id', component: ProductDetailsComponent },
    { path: 'flmeaning', component: ExperienceComponent },
    { path: 'flmeaning/view/:id', component: FlMeaningComponent },
    { path: 'partner', component: PartnerComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
]

export const MODULE_COMPONENT = RouterModule.forRoot(MODULE_ROUTES);

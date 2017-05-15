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

const MODULE_ROUTES: Route[] = [
    { path: 'home', component: HomeComponent },
    { path: 'introduce', component: IntroduceComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'product', component: ProductComponent },
    { path: 'flmeaning', component: ExperienceComponent },
    { path: 'partner', component: PartnerComponent },
    { path: 'fanpage', component: FanpageComponent },
    { path: 'flmeaningid', component: FlMeaningComponent },
    { path: 'productid', component: ProductDetailsComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
]

export const MODULE_COMPONENT = RouterModule.forRoot(MODULE_ROUTES);

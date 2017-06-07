import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MODULE_COMPONENT } from './app.routes';
import { APP_BASE_HREF } from '@angular/common';
import { AppComponent } from './app.component';
import { HomeComponent } from '../app/home/home.component';
import { IntroduceComponent } from '../app/home2/introduce/introduce.component';
import { BlogComponent } from '../app/home2/blog/blog.component';
import { BlogIDComponent } from '../app/home2/blogid/blogid.component';
import { ContactComponent } from '../app/home2/contact/contact.component';
import { ProductComponent } from '../app/home2/product/product.component';
import { ExperienceComponent } from '../app/home2/experience/experience.component';
import { PartnerComponent } from '../app/home2/partner/partner.component';
import { FanpageComponent } from '../app/home2/fanpage/fanpage.component';
import { FlMeaningComponent } from '../app/home2/flmeaning/flmeaning.component';
import { ProductDetailsComponent } from '../app/home2/productdetails/productdetails.component';
import { HeaderComponent } from '../app/home2/header/header.component';
import { FooterComponent } from '../app/home2/footer/footer.component';

@NgModule({
  imports: [BrowserModule, MODULE_COMPONENT],
  declarations: [AppComponent, HomeComponent, IntroduceComponent,
    HeaderComponent, FooterComponent, BlogComponent, ContactComponent,
    ProductComponent, ExperienceComponent, PartnerComponent, FanpageComponent,
    FlMeaningComponent, ProductDetailsComponent, BlogIDComponent],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap:    [AppComponent]
})

export class AppModule { }
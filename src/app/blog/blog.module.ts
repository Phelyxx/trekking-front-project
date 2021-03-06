import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListarComponent } from './blog-listar/blog-listar.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import {PostModule} from '../post/post.module';
import {BlogRoutingModule} from './blog.route.module';



@NgModule({
  declarations: [BlogListarComponent, BlogDetailComponent],
  imports: [
    CommonModule,
    PostModule,
    BlogRoutingModule
  ],
  exports: [BlogListarComponent]
})
export class BlogModule { }

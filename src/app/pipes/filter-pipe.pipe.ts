import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../models/post';

@Pipe({
  name: 'filterPipe',
  standalone: true
})
export class FilterPipePipe implements PipeTransform {

  transform(posts:Post[], filterText: string): Post[] {

    filterText = filterText?.toLocaleLowerCase();

    if(filterText!=null){
      return posts.filter((p:Post)=>p.title.toLocaleLowerCase().indexOf(filterText)!==-1);
    }
    else{
      return posts;
    }

  }

}

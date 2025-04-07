import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtercontrato'
})
export class FiltercontratoPipe implements PipeTransform {

  transform(value: any[], arg: string): any {
    if (!value) return []; // si no hay datos
    if (!arg || arg.trim() === '' || arg.length < 3) return value;
  
    const resultPosts = [];
    for (const post of value) {
      // protegemos si post.nombre es null
      if (post?.TipoContrato?.toLowerCase().includes(arg.toLowerCase())) {
        resultPosts.push(post);
      }
    }
    return resultPosts;
  }


}

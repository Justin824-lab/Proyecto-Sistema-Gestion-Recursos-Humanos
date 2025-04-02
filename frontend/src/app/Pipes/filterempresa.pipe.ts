import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterempresa'
})
export class FilterempresaPipe implements PipeTransform {
  transform(value: any, arg: any): any {
    if (!value) return []; 
    if (!arg || arg.length < 3) return value; 

    const resultPosts = [];
    for (const post of value) {
      if (post.Nombre && post.Nombre.toLowerCase().includes(arg.toLowerCase())) {
        resultPosts.push(post);
      }
    }
    return resultPosts;
  }
}

  



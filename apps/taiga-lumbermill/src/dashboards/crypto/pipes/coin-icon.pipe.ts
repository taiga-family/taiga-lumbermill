import type {PipeTransform} from '@angular/core';
import {Pipe} from '@angular/core';

@Pipe({
    standalone: true,
    name: 'coinIcon',
})
export class CoinIconPipe implements PipeTransform {
    public transform(value: string): string {
        return `https://assets.coincap.io/assets/icons/${value}@2x.png`;
    }
}

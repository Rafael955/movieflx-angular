import { Component } from '@angular/core';
import { HeaderComponent } from "../../../components/logged/header/header.component";
import { CardComponent } from "../../../components/logged/card/card.component";
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from "@angular/router";
import { CommonModule } from '@angular/common';
import { Movie } from '../../../interfaces/movie.interface';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    HeaderComponent,
    CardComponent,
    RouterLink,
    RouterLinkActive
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

    movies: Movie[] = [
    {
      id: 1,
      title: 'Casablanca',
      description: 'Durante a Segunda Guerra Mundial, um exilado americano precisa escolher entre o amor da sua vida e ajudar um líder da resistência.',
      duration: '1:30h',
      ageRating: '+18',
      approval: '67',
      top10: true,
      serviceLogo: 'images/partners/netflix.png',
      serviceName: 'Netflix'
    },
    {
      id: 2,
      title: 'O Poderoso Chefão',
      description: 'A história da família Corleone e sua luta pelo poder no mundo da máfia italiana.',
      duration: '2:55h',
      ageRating: '+18',
      approval: '95',
      top10: true,
      serviceLogo: 'images/partners/prime-video.png',
      serviceName: 'Prime Video'
    },
    {
      id: 3,
      title: 'Forrest Gump',
      description: 'Um homem simples com um coração puro testemunha e influencia eventos históricos nos EUA.',
      duration: '2:20h',
      ageRating: 'Livre',
      approval: '89',
      top10: false,
      serviceLogo: 'images/partners/netflix.png',
      serviceName: 'Netflix'
    },
    {
      id: 4,
      title: 'A Origem',
      description: 'Um ladrão que invade os sonhos das pessoas recebe a missão de plantar uma ideia na mente de um alvo.',
      duration: '2:28h',
      ageRating: '14 anos',
      approval: '86',
      top10: true,
      serviceLogo: 'images/partners/hbo-max.svg',
      serviceName: 'HBO Max'
    },
    {
      id: 5,
      title: 'Clube da Luta',
      description: 'Um homem entediado encontra um vendedor de sabonetes excêntrico e juntos criam um clube secreto.',
      duration: '2:10h',
      ageRating: '+18',
      approval: '82',
      top10: false,
      serviceLogo: 'images/partners/prime-video.png',
      serviceName: 'Prime Video'
    },
    {
      id: 6,
      title: 'Matrix',
      description: 'Um hacker descobre a verdade por trás da realidade e se junta à resistência contra as máquinas.',
      duration: '2:16h',
      ageRating: '+16',
      approval: '88',
      top10: true,
      serviceLogo: 'images/partners/netflix.png',
      serviceName: 'Netflix'
    },
    {
      id: 7,
      title: 'Gladiador',
      description: 'Um general romano traído busca vingança contra o imperador corrupto que matou sua família.',
      duration: '2:35h',
      ageRating: '+16',
      approval: '91',
      top10: false,
      serviceLogo: 'images/partners/disney.svg',
      serviceName: 'Disney+'
    },
    {
      id: 8,
      title: 'Titanic',
      description: 'Um romance floresce a bordo do Titanic entre uma jovem rica e um artista pobre.',
      duration: '3:15h',
      ageRating: '12 anos',
      approval: '84',
      top10: true,
      serviceLogo: 'images/partners/netflix.png',
      serviceName: 'Netflix'
    },
    {
      id: 9,
      title: 'O Senhor dos Anéis: A Sociedade do Anel',
      description: 'Um hobbit embarca em uma jornada épica para destruir um anel maligno.',
      duration: '2:58h',
      ageRating: '12 anos',
      approval: '93',
      top10: true,
      serviceLogo: 'images/partners/prime-video.png',
      serviceName: 'Prime Video'
    },
    {
      id: 10,
      title: 'Coringa',
      description: 'A origem sombria de um dos maiores vilões da cultura pop.',
      duration: '2:02h',
      ageRating: '+18',
      approval: '85',
      top10: false,
      serviceLogo: 'images/partners/hbo-max.svg',
      serviceName: 'HBO Max'
    }
  ];
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent {
  images = [
    { src: './assets/imagens/300.jpeg', whatsappLink: 'PJ3J33Y52256H1' },
    { src: './assets/imagens/300doc.jpeg', whatsappLink: 'PJ3J33Y52256H1' },
    { src: './assets/imagens/300fixo.jpeg', whatsappLink: 'PJ3J33Y52256H1' },
    { src: './assets/imagens/300music.jpeg', whatsappLink: 'PJ3J33Y52256H1' },
    { src: './assets/imagens/500flix.jpeg', whatsappLink: 'PJ3J33Y52256H1' },
    { src: './assets/imagens/500tele.jpeg', whatsappLink: 'PJ3J33Y52256H1' },
    { src: './assets/imagens/700globo.jpeg', whatsappLink: 'PJ3J33Y52256H1' },
  ];
}

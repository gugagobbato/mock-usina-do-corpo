import { Component, ElementRef, inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicSlides } from '@ionic/angular';
import { register } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';

register();

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {

  constructor(private renderer: Renderer2) { }

  @ViewChild('swiper1') swiperRef1?: ElementRef;
  @ViewChild('swiper2') swiperRef2?: ElementRef;
  @ViewChild('swiper3') swiperRef3?: ElementRef;
  @ViewChild('contentDiv') contentDiv?: ElementRef;

  protected folder!: string;
  protected newPrograms: boolean = true;
  protected MOCK_IMAGE_PATH: string = 'https://via.placeholder.com/800';
  protected LOCAL_MOCK_PNG_IMAGE_PATH: string = 'assets/img/png/mock-swiper.png';
  protected LOCAL_MOCK_JPG_YOGA_IMAGE_PATH: string = 'assets/img/jpg/mock-swiper-1.jpg';
  protected LOCAL_MOCK_JPEG_FUNCTIONAL_IMAGE_PATH: string = 'assets/img/jpeg/mock-swiper-1.jpeg';

  private activatedRoute = inject(ActivatedRoute);

  protected currentIndex: number = 0;
  protected swiperModules = [IonicSlides];

  protected swiperOptions: SwiperOptions = {
    initialSlide: 0,
    slidesPerView: 1.5,
    spaceBetween: 10,
    allowSlideNext: true,
    watchSlidesProgress: true,
  };

  protected slides = [
    {
      title: 'LEVANTAMENTO DE PESO',
      description: 'Treino de força e resistência',
      image: this.LOCAL_MOCK_PNG_IMAGE_PATH,
    },
    {
      title: 'YOGA EXPRESS',
      description: 'Yoga para iniciantes',
      image: this.LOCAL_MOCK_JPG_YOGA_IMAGE_PATH,
    },
    {
      title: 'FUNCIONAL',
      description: 'Treino funcional',
      image: this.LOCAL_MOCK_JPEG_FUNCTIONAL_IMAGE_PATH,
    },
  ];

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  ionViewDidEnter() {
    Object.assign(this.swiperRef1?.nativeElement, this.swiperOptions);
    Object.assign(this.swiperRef2?.nativeElement, this.swiperOptions);
    Object.assign(this.swiperRef3?.nativeElement, this.swiperOptions);
    this.renderer.setStyle(this.contentDiv?.nativeElement, 'opacity', '0.2');
  }

  protected markAsRead = () => this.newPrograms = false;

  protected addNewTraining = () => console.log('Add new training');
}

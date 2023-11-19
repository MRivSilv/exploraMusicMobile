import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleAlbumPage } from './detalle-album.page';

describe('DetalleAlbumPage', () => {
  let component: DetalleAlbumPage;
  let fixture: ComponentFixture<DetalleAlbumPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetalleAlbumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

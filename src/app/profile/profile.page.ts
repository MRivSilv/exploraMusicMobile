import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  userProfile = {
    imageUrl: 'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.webp',
    name: '',
    description: 'Descripción del Usuario',
  };

  constructor(private actionSheetController: ActionSheetController) {}
  ngOnInit() {
    // Recupera el nombre del usuario del localStorage y asígnalo al userProfile.name
    const userNombre = localStorage.getItem('userNombre');
    if (userNombre) {
      this.userProfile.name = userNombre;
    }
  }
  async changeProfilePicture() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Cambiar Foto de Perfil',
      buttons: [
        {
          text: 'Tomar Foto',
          icon: 'camera',
          handler: () => {
            // Lógica para tomar una foto
          },
        },
        {
          text: 'Seleccionar de la Galería',
          icon: 'image',
          handler: () => {
            // Lógica para seleccionar una imagen de la galería
          },
        },
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
        },
      ],
    });

    await actionSheet.present();
  }
}



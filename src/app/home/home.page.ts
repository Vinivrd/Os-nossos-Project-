import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public alertController: AlertController) {}

  async presentAlertPromptAdd(){
    const alert = await this.alertController.create({
      cssClass:'my-custom-class',
      header:'Adicionar Tarefa!',
      inputs:[
        {
          name:'nomeTarefa',
          type:'text',
          placeholder:'Nome da tarefa'
        },
        {
          name:'description',
          type:'text',
          placeholder:'Descrição'
        },
        {
          name:'date',
          type:'date',
          min:'2024-09-01',  // Corrigido o formato da data
          max:'2025-09-01',
          placeholder:'Data da tarefa'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Salvar',
          handler: () => {
            console.log('Confirm Ok');
          }
        },
      ]
    });

    await alert.present();  // Adicionado para apresentar o alerta
  }

}

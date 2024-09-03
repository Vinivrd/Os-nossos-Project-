import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public alertController: AlertController,
    public taskService: TaskService,
    public toastControler: ToastController
  ) {}

  //Alert do ionic doc
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
          placeholder:'Data da tarefa',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Salvar',
          handler: (alertData) => {
            if(alertData.nomeTarefa != ""){
              this.taskService.addTask(alertData.nomeTarefa,alertData.description,alertData.date);
            }else{
              this.presentToast()
              this.presentAlertPromptAdd();
            }
          }
        },
      ]
    });

    await alert.present();  // Adicionado para apresentar o alerta
  }

  async presentAlertPromptUpdate(index:number,task:any){
    console.log(task);
    const alert = await this.alertController.create({
      header:'Atualizar Tarefa!',
      cssClass: 'custom-alert',
      inputs:[
        {
          name:'nomeTarefa',
          type:'text',
          placeholder:'Nome da tarefa',
          value:task.nome,
        },
        {
          name:'description',
          type:'text',
          placeholder:'Descrição',
          value:task.desc
        },
        {
          name:'date',
          type:'date',
          min:'2024-09-01',  // Corrigido o formato da data
          max:'2025-09-01',
          placeholder:'Data da tarefa',
          value: task.date.getFullYear() + '-' +
            ((task.date.getMonth() + 1) < 10 ? '0' + (task.date.getMonth() + 1) : (task.date.getMonth() + 1)) +
              "-" +
            (task.date.getDate() < 10 ? '0' + task.date.getDate() : task.date.getDate())


        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Salvar',
          handler: (alertData) => {
            if(alertData.nomeTarefa != ""){
              this.taskService.updateTask(index,alertData.nomeTarefa,alertData.description,alertData.date)

            }else{
              this.presentToast()
              this.taskService.updateTask(index,alertData.nomeTarefa,alertData.description,alertData.date)
            }
          }
        },
      ]
    });

    await alert.present();  // Adicionado para apresentar o alerta
  }

  async presentAlertPromptDelete(index:number){
    // Função para criar um atraso
    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
  
    await delay(500);
  
    this.taskService.delTask(index);
    
  }


  async presentToast(){
      const toast = await this.toastControler.create({
          message: "Preencha a tarefa",
          duration: 2000
      });
    toast.present();
  }

}

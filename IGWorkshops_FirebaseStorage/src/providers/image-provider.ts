import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

export class ImageProvider {

  constructor() {
  }

  uploadImage(image: string, userId: string): any {
    let storageRef = firebase.storage().ref();
    let imageName = this.generateUUID();
    let imageRef = storageRef.child(`${userId}/${imageName}.jpg`);
    return imageRef.putString(image, 'data_url');
  }

  getImage(userId: string, imageId: string): any {
    let storageRef = firebase.storage().ref();
    let imageRef = storageRef.child(`${userId}/${imageId}`);
    return imageRef.getDownloadURL();
  }

  private generateUUID(): string {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }

}

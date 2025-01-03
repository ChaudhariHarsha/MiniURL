import { Component } from '@angular/core';
import { UrlShortenerService } from '../../services/url-shortener.service';

@Component({
  selector: 'app-url-shortener',
  templateUrl: './url-shortener.component.html',
  styleUrl: './url-shortener.component.scss'
})
export class UrlShortenerComponent {
  inputUrl=''
  showError=false
  shareAbleLink=''
  copySuccess=false
constructor(private urlShortenerService:UrlShortenerService){}

  async onClick(){
    if(this.inputUrl && !this.showError){
      const shortenUrl =await this.urlShortenerService.shortenUrl(this.inputUrl)
      this.shareAbleLink='http://localhost:3000/mini-url/' + shortenUrl.url
      this.inputUrl='';
    }
  }

  isValidUrl(){
    if(this.inputUrl){
      const pattern = /^(https?:\/\/|www\.)[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\S*)$/;
      this.showError= !pattern.test(this.inputUrl);
    }else{
      this.showError=false
    }
  }

  onClickLink(){
    window.open(this.shareAbleLink,'_blank')
  }

  copyUrl() {
    navigator.clipboard.writeText(this.shareAbleLink).then(() => {
      this.copySuccess = true;
      setTimeout(() => {
        this.copySuccess = false;
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  }
}

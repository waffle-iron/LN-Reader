import {Page, NavController, NavParams} from 'ionic-angular';
import {NovelService} from '../../providers/novel-service/novel-service';

/*
  Generated class for the SettingsNewsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@Page({
  templateUrl: 'build/pages/settings-news/settings-news.html',
  providers: [NovelService]
})

export class SettingsNewsPage {
  
  data: any;
  
  constructor(private nav: NavController, private novelservice: NovelService, private params: NavParams) {}
  
  ngOnInit() {
    this.novelservice.getNews().then(data => {
      this.data = data;
    })
  }
  
  openInBrowser(link) {
    cordova.InAppBrowser.open(link, "_system", '');
  }
}

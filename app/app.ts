import {App, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';
import {SqlManager} from './providers/sql-manager/sql-manager'

@App({
	template: '<ion-nav [root]="rootPage"></ion-nav>',
	config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
	rootPage: any;

	constructor(platform: Platform) {
		platform.ready().then(() => {
			
			// var notificationOpenedCallback = function(jsonData) {
			// 	console.log('didReceiveRemoteNotificationCallBack: ' + JSON.stringify(jsonData));
			// };
			// window.plugins.OneSignal.init("74412a7f-ad29-4df9-a230-3891d0012435",
			// 	{googleProjectNumber: ""}, notificationOpenedCallback);
			// // Show an alert box if a notification comes in when the user is in your app.
			// window.plugins.OneSignal.enableInAppAlertNotification(true);
			
			SqlManager.init().then(() => {
				this.rootPage = TabsPage;
			})
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			StatusBar.styleDefault();
		});
	}
}
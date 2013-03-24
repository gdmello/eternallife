
/*var prayerHours = [19, 20, 21, 22, 23, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
var prayerHourlyMinuteOfSplit = [30, 30, 30, 30, 30, 45, 30, 15, 45, 30, 15, 45, 30, 15, 45, 30, 15, 45, 30, 15, 45, 30, 15 ];

var currentDate = new Date();  
var currentYear = currentDate.getYear();
var currentMonth = currentDate.getMonth();
var currentDay = currentDate.getDate();
var currentDay = currentDate.getDate();
var currentHour = currentDate.getHours();
var currentMinute = currentDate.getMinutes();

var getHourlyPrayerUrl = function(minuteOfSplit, hourToTest) {
	if(currentMinute < minuteOfSplit) {
		//document.write("<br>prayer for "+hourToTest+"-"+hourToTest+":"+minuteOfSplit);
		document.write("<br>hourlyPassionPrayer"+hourToTest+"-"+hourToTest+minuteOfSplit+".html");
	} else {
		//document.write("<br>prayer for "+hourToTest+":"+minuteOfSplit+"-"+(hourToTest+1));
		document.write("<br>hourlyPassionPrayer"+hourToTest+minuteOfSplit+"-"+(hourToTest+1)+".html");
	}
};

for(var i=0; i<prayerHours.length; i++) {
	if(currentHour == prayerHours[i]) {
		getHourlyPrayerUrl(prayerHourlyMinuteOfSplit[i], prayerHours[i]);
	}
}

var prayerHours1 = ["00:00","00:45","1:30","2:15","3:00","3:45","4:30","5:15","6:00","6:45","7:30","8:15","9:00","9:45","10:30","11:15","12:00","12:45","13:30","14:15","15:00","15:45","16:30","17:15","18:00","18:30","19:00","19:30","20:00","20:30","21:00","21:30","22:00","22:30","23:00","23:30"];
*/
document.write("<br>Hourly Prayers ");
var today = Date.parse('today');
today.setTimeToNow();
var prayerHoursAscending = [Date.today().set({ hour: 0, minute: 0 }),
Date.today().set({ hour: 0, minute: 45 }),
Date.today().set({ hour: 1, minute: 30 }),
Date.today().set({ hour: 2, minute: 15 }),
Date.today().set({ hour: 3, minute: 0 }),
Date.today().set({ hour: 3, minute: 45 }),
Date.today().set({ hour: 4, minute: 30 }),
Date.today().set({ hour: 5, minute: 15 }),
Date.today().set({ hour: 6, minute: 0 }),
Date.today().set({ hour: 6, minute: 45 }),
Date.today().set({ hour: 7, minute: 30 }),
Date.today().set({ hour: 8, minute: 15 }),
Date.today().set({ hour: 9, minute: 0 }),
Date.today().set({ hour: 9, minute: 45 }),
Date.today().set({ hour: 10, minute: 30 }),
Date.today().set({ hour: 11, minute: 15 }),
Date.today().set({ hour: 12, minute: 0 }),
Date.today().set({ hour: 12, minute: 45 }),
Date.today().set({ hour: 13, minute: 30 }),
Date.today().set({ hour: 14, minute: 15 }),
Date.today().set({ hour: 15, minute: 0 }),
Date.today().set({ hour: 15, minute: 45 }),
Date.today().set({ hour: 16, minute: 30 }),
Date.today().set({ hour: 17, minute: 15 }),
Date.today().set({ hour: 18, minute: 0 }),
Date.today().set({ hour: 18, minute: 30 }),
Date.today().set({ hour: 19, minute: 0 }),
Date.today().set({ hour: 19, minute: 30 }),
Date.today().set({ hour: 20, minute: 0 }),
Date.today().set({ hour: 20, minute: 30 }),
Date.today().set({ hour: 21, minute: 0 }),
Date.today().set({ hour: 21, minute: 30 }),
Date.today().set({ hour: 22, minute: 0 }),
Date.today().set({ hour: 22, minute: 30 }),
Date.today().set({ hour: 23, minute: 0 }),
Date.today().set({ hour: 23, minute: 30 })];


document.write("<br>prayerHours.length(): "+prayerHoursAscending.length);
document.write("<br>");
document.write(today);
document.write("<br>");

for(var i=0; i<prayerHoursAscending.length; i++) {
	
	if(Date.compare(today, prayerHoursAscending[i]) < 0 ) {
		document.write("<br>prayer time to display: "+prayerHoursAscending[i-1]);
		document.write("<br>prayer time to display: "+prayerHoursAscending[i-1].toString("HH:mm"));
		break;
	}
	
}



var prayerHours = [19, 20, 21, 22, 23, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
var prayerHourlyMinuteOfSplit = [30, 30, 30, 30, 30, 45, 30, 15, 45, 30, 15, 45, 30, 15, 45, 30, 15, 45, 30, 15, 45, 30, 15 ];

var currentDate = new Date();  
var currentHour = currentDate.getHours();
var currentMinute = currentDate.getMinutes();

var getHourlyPrayerUrl = function(minuteOfSplit, hourToTest) {
	if(currentMinute < minuteOfSplit) {
		document.write("<br>prayer for "+hourToTest+"-"+hourToTest+":"+minuteOfSplit);
	} else {
		document.write("<br>prayer for "+hourToTest+":"+minuteOfSplit+"-"+(hourToTest+1));
	}
};

for(var i=0; i<prayerHours.length; i++) {
	if(currentHour == prayerHours[i]) {
		getHourlyPrayerUrl(prayerHourlyMinuteOfSplit[i], prayerHours[i]);
	}
}

/*switch (currentHour) {
case 19:
		getHourlyPrayerUrl(30, 19);
		break;
case 20:
		getHourlyPrayerUrl(30, 20);
		break;
case 21:
		getHourlyPrayerUrl(30, 21);
		break;
case 22:
		getHourlyPrayerUrl(30, 22);
        break;
case 23:
		getHourlyPrayerUrl(30, 23);
		break;
case 0:
		getHourlyPrayerUrl(45, 0);
		break;
case 1:
		getHourlyPrayerUrl(30, 1);
		break;
case 2:
		getHourlyPrayerUrl(15, 2);
		break;
case 3:
		getHourlyPrayerUrl(45, 3);
		break;
case 4:
		getHourlyPrayerUrl(30, 4);
		break;
case 5:
		getHourlyPrayerUrl(15, 5);
		break;
case 6:
		getHourlyPrayerUrl(45, 6);
		break;
case 7:
		getHourlyPrayerUrl(30, 7);
		break;
case 8:
		getHourlyPrayerUrl(15, 8);
		break;
case 9:
		getHourlyPrayerUrl(45, 9);
		break;
case 10:
		getHourlyPrayerUrl(30, 10);
		break;
case 11:
		getHourlyPrayerUrl(15, 11);
		break;
case 12:
		getHourlyPrayerUrl(45, 12);
		break;
case 13:
		getHourlyPrayerUrl(30, 13);
		break;
case 14:
		getHourlyPrayerUrl(15, 14);
		break;
case 15:
		getHourlyPrayerUrl(45, 15);
		break;
case 16:
		getHourlyPrayerUrl(30, 16);
		break;
case 17:
		getHourlyPrayerUrl(15, 17);
		break;
case 18:
		break;
}
*/



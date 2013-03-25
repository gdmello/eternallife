
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
		document.write("<br>prayer time to display: "+prayerHoursAscending[i-1].toString("HH-mm"));
		break;
	}
	
}


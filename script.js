// ------------------------------------------
function liveClock(){
    time=new Date();
    hour=time.getHours();
    minute=time.getMinutes();
    second=time.getSeconds();
    periods= hour >=12 ? 'PM' : 'AM';
    clock.textContent=hour+" : "+minute+" :  "+second;
    ind.textContent = periods;

    if(hour > 12){
        hour = hour - 12
    }
    
    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;
// --------
    day=time.getDate();
    month=(time.getMonth()+1);
    year=time.getFullYear();
    cldate.textContent= day+"-"+month+"-"+year;
// ---------
    // console.log(hour,minute,second,day,month,year,periods)

    setTimeout(()=>{liveClock()},1000)
}
liveClock()
export function getWeekBracket(){
    const date = new Date();

    let currentDay= String(date.getDate()).padStart(2, '0');

    let currentMonth = String(date.getMonth()+1).padStart(2,"0");

    let currentYear = date.getFullYear();

    if(currentDay > 0 && currentDay<=7) return { startDate : `${currentYear}-${currentMonth}-1`, endDate : `${currentYear}-${currentMonth}-7`}
    if(currentDay > 7 && currentDay<=15) return { startDate : `${currentYear}-${currentMonth}-8`, endDate : `${currentYear}-${currentMonth}-15`}
    if(currentDay > 15 && currentDay<=22) return { startDate : `${currentYear}-${currentMonth}-16`, endDate : `${currentYear}-${currentMonth}-22`}
    if(currentDay > 23 && currentDay<=31) return { startDate : `${currentYear}-${currentMonth}-23`, endDate : `${currentYear}-${currentMonth}-31`}
    if(currentDay > 30 && currentDay<=31) return { startDate : `${currentYear}-${currentMonth}-30`, endDate : `${currentYear}-${currentMonth}-31`}
}

 export function zeroFill(brackets){
    // const date = new Date();  
    let days = []
    for(let i = brackets.startDate.split("-")[2]; i <= brackets.endDate.split("-")[2]; i++){
        days.push({
            date : i,
            horns : 0
        })
    }
    return days;
}

export function cleanDataByTime(timeFrame, data){
    const lower = new Date(timeFrame.startDate);
    const upper = new Date(timeFrame.endDate);
    const datesWithDataPoints = data.filter((item)=>{
        const date = new Date(item._id);
        if (date <= upper && date> lower) {
          return item;
        }
      });

      const timeSeriesData = zeroFill(timeFrame);
      
      timeSeriesData.forEach((day, timeSeriesDataKey)=>{
        datesWithDataPoints.forEach((date, datesWithDataPointsKey)=>{
          if (day.date==date._id.split("-")[2]) timeSeriesData[timeSeriesDataKey].horns = datesWithDataPoints[datesWithDataPointsKey].horn_count
        })
      });
      return timeSeriesData;  
}

export function formatForApex(chartData){
 const xAxis = chartData.map((item)=>{
  return Number(item.x)
 })
 const yAxis = chartData.map((item)=>{
  return Number(item.y)
 })
return {xAxis,yAxis}
}

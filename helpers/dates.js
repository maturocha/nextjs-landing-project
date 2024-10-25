export const DatesHelper = {
  formatDate,
  getDiffMinutes
};

function formatDate(date, type = 'long') {
  let dateObject = new Date(date);
  if (type == 'short') {
    return dateObject.toLocaleString('short', { year: 'numeric', month: '2-digit', day: '2-digit' })
  } else {
    return dateObject.toLocaleString('default', {  year: 'numeric', month: 'short', day: 'numeric' })
  }
  
}

function getDiffMinutes(date1, date2) {
  
  let dt1 = new Date(date1);
  let dt2 = new Date(date2);
  let string_time = 'minutos'

  let diff =(dt2.getTime() - dt1.getTime()) / 1000;
  diff /= 60;
  diff = Math.abs(Math.round(diff))

  if (diff > 59) {
    diff = Math.abs(Math.round(diff/60))
    string_time = 'horas'
  }

  if (diff > 23) {
    diff = Math.abs(Math.round(diff/24))
    string_time = 'días'
  }
  
  return `${diff} ${string_time}`;
  


  
}
var age_years = prompt("please enter your age in years: ");
if (age_years <= 0){
    age_years = prompt("Age can not be less than or equal 0 , please enter your right age: ");
}
var age_days = age_years * 365;
alert(`your age in days is : ${age_days}`)

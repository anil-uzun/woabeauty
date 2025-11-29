var d = new Date()
const week_day = d.getDay();
const day = d.getDate();
const hour = d.getHours() + d.getTimezoneOffset()/60 + 3;
const min = d.getMinutes();
const month = d.getMonth() + 1;
const year = d.getFullYear();
const lang = document.getElementById("site.lang").innerHTML;
if(week_day == 7 || hour >= 18 || hour < 9) {
    document.getElementById("ht_contact").innerHTML = "";
}
if(week_day == 7 || hour >= 18 || hour < 9) {
    if(lang == "tr") {
        document.getElementById("work_message").innerHTML = "<r>Şu anda bulunduğunuz tarih <b>( " + hour + ":" + min + " | " + day + "/"+ month +"/" + year + " )</b> çalışma saatlerimiz içerisinde değildir.</r>";
    } else if(lang == "en") {
        document.getElementById("work_message").innerHTML = "<r>The current date <b>( " + hour + ":" + min + " | " + day + "/"+ month +"/" + year + " )</b> is not in our working hours.</r>";
    } else {
        document.getElementById("work_message").innerHTML = "sebebi belli olmayan bir hata yaşandı";
    }
} else {
    if(lang == "tr") {
        document.getElementById("work_message").innerHTML = "<g>Şu anda bulunduğunuz tarih <b>( " + hour + ":" + min + " | " + day + "/"+ month +"/" + year + " )</b> çalışma saatlerimiz içerisindedir.</g>";
    } else if(lang == "en") {
        document.getElementById("work_message").innerHTML = "<g>The current date <b>( " + hour + ":" + min + " | " + day + "/"+ month +"/" + year + " )</b> is in our working hours.</g>";
    } else {
        document.getElementById("work_message").innerHTML = "an unexpected error has occured";
    }
}
/**
 * Created by yuan on 2016/3/8.
 */
'use strict';
var Common = {
    getDate: function(wanted){
        this.data = "";
        this.startData = "";
        this.endData = "";

        var data,
            startData,
            endData,
            nuMonth,
            date = new Date(),
            year = date.getFullYear(),
            month = date.getMonth(),
            day = date.getDate();

        date = new Date(year,month,day);
        month = date.getMonth()+1;
        day = date.getDate();
        year = date.getFullYear();
        nuMonth = month;

        if(month.toString().length == 1){
            month = "0"+month.toString();
        }
        if(day.toString().length == 1){
            day = "0"+day.toString();
        }

        switch (wanted){
            case "today":
                data = year + "-" + month + "-" + day;
                break;
            case "toMonth":
                startData = year + "-" + month + "-" + "01";
                endData = year + "-" + month + "-" + "30";
                break;
            case "toQuarter":
                if(nuMonth <= 3){
                    startData = year + "-01-01";
                    endData = year + "-03-31";
                }else if(nuMonth <= 6 && month > 3){
                    startData = year + "-04-01";
                    endData = year + "06-30";
                }else if(nuMonth <= 9 && month > 6){
                    startData = year + "-07-01";
                    endData = year + "09-30";
                }else if(nuMonth <= 12 && month > 9){
                    startData = year + "-10-01";
                    endData = year + "12-31";
                }
                break;
            case "toYear":
                startData = year + "-01-01";
                endData = year + "-12-31";
                break;
            case "toLastYear":
                var ldate = new Date(year-1,month,day),
                    lyear = ldate.getFullYear();
                startData = lyear + "-01-01";
                endData = lyear + "-12-31";
                break;
        }

        this.data = data;
        this.startData = startData;
        this.endData = endData;

        return this;
    },
    stampToDate: function(num, isSimple, isLine, isSlash, splitLine) {
        var date = new Date(num),
            year = date.getFullYear(),
            month = date.getMonth()+1,
            days = date.getDate(),
            hours = date.getHours(),
            minutes = date.getMinutes(),
            seconds = date.getSeconds();

        if(month.toString().length == 1){
            month = "0"+month.toString();
        }
        if(days.toString().length == 1){
            days = "0"+days.toString();
        }
        if(!isSimple){
            if(hours.toString().length == 1){
                hours = "0"+hours.toString();
            }
            if(minutes.toString().length == 1){
                minutes = "0"+minutes.toString();
            }
            if(seconds.toString().length == 1){
                seconds = "0"+seconds.toString();
            }

            if(isLine){
                return year + "-" + month + "-" + days + " " + hours + ":" + minutes + ":" + seconds;
            }else{
                return year + "年" + month + "月" + days + "日 " + hours + ":" + minutes + ":" + seconds;
            }
        }else{
            if(isSlash){
                return year + "/" + month + "/" + days;
            }else if(splitLine){
                return year + splitLine + month + splitLine + days;
            }else{
                return year + "-" + month + "-" + days;
            }
        }
    },
    ajaxService: function(url, type, data, successFn, errorFn){
        $.ajax({
            url: url,
            type: type,
            dataType: 'json',
            data: data,
            success: function(data){
                successFn(data)
            },
            error: function(data){
                if(errorFn){
                    errorFn(data)
                }
            }
        })
    }
};
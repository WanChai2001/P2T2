<!DOCTYPE html>
<html>
<head>
        <title>covid-19</title>
</head>
<script>
    $(document).ready(function(){
        $.ajax({
            method: "GET",
            url: "https://covid19.ddc.moph.go.th/api/Cases/today-cases-all",
            })
            .DONE(function(msg) {
                console.log("Data Saved: ", msg);
                let new_case = msg[0].new_case;
                $("#new_case").html(new_case);

                let total_case = msg[0].total_case;
                $("#new_case").html(total_case);

                let new_death = msg[0].new_death;
                $("#new_case").html(new_death);

                let total_death = msg[0].total_death;
                $("#new_case").html(total_death);

                let new_recovered = msg[0].new_recovered;
                $("#new_case").html(new_recovered);

                let total_drecovered = msg[0].total_drecovered;
                $("#new_case").html(total_drecovered);

                let update_date = msg[0].txn_date;
                const date = new Date(update_date);
                const resultdate = date.toLocaleDateString('th-TH', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    })
const date = new Date(update_date);
            })
            .fail(function(){
                alert( "error");
            });
    });     
</script>
<body bgcolor="#808080">
<table border="1" bordercolor="black" width="60%" align="centet">
<caption><h2>COVID-19</h2><h4>(วันที่ 15 พฤศจิกายน 2564)</h4></caption>
<tr>
    <th bgcolor="#9ACD32">หายป่วยวันนี้</th>
     <th bgcolor="#CC3333">ติดเชื้อวันนี้</th>
</tr>
<tr>
    <td align = 'center'bgcolor="#9ACD32">+7,663 ราย</td> 
    <td align = 'center' bgcolor="#CC3333">+6,343 ราย</td>
</tr>
<tr>
    <th align = 'center' bgcolor="#228B22">หายป่วยสะสม</th> 
    <th align = 'center' bgcolor="#990000">ผู้ป่วยสะสม</th>
</tr>
<tr>
    <td align = 'center' bgcolor="#228B22">1,883,083 ราย</td>
    <td align = 'center' bgcolor="#990000">1,995,890 ราย</td>
</tr>
<tr>
    <th align = 'center' bgcolor="#87CEFA">กำลังรักษาตัว</th> 
    <th align = 'center' bgcolor="#D3D3D3">เสียชีวิตเพิ่ม</th>
</tr>
<tr>
    <td align = 'center' bgcolor="#87CEFA">94,163 ราย</td>
    <td align = 'center' bgcolor="#D3D3D3">45 ราย</td>
</tr>
</body>
</html>
function showMessage() {
    // name
    var name = document.getElementById("name").value;
    name = name.charAt(0).toUpperCase() + name.slice(1);
    display_name.innerHTML = name;

    var name1 = document.getElementById("name").value;
    name1 = name1.charAt(0).toUpperCase() + name1.slice(1);
    display_name1.innerHTML = name1;

    var name2 = document.getElementById("name").value;
    name2 = name2.charAt(0).toUpperCase() + name2.slice(1);
    display_name2.innerHTML = name2;


    var name3 = document.getElementById("name").value;
    name3 = name3.charAt(0).toUpperCase() + name3.slice(1);
    display_name3.innerHTML = name3;



    // Last name
    var Lname = document.getElementById("Lname").value;
    Lname = Lname.charAt(0).toUpperCase() + Lname.slice(1);
    display_Lname.innerHTML = Lname;

    var Lname1 = document.getElementById("Lname").value;
    Lname1 = Lname1.charAt(0).toUpperCase() + Lname1.slice(1);
    display_Lname1.innerHTML = Lname1;

    var Lname2 = document.getElementById("Lname").value;
    Lname2 = Lname2.charAt(0).toUpperCase() + Lname2.slice(1);
    display_Lname2.innerHTML = Lname2;


    var Lname3 = document.getElementById("Lname").value;
    Lname3 = Lname3.charAt(0).toUpperCase() + Lname3.slice(1);
    display_Lname3.innerHTML = Lname3;



    // DOB
    var dob = document.getElementById("dob").value;
    display_dob.innerHTML = dob;

    // Sex
    var sex = document.getElementById("sex").value;
    display_sex.innerHTML = sex;


    // Card Number
    var cardno = document.getElementById("cardno").value;
    cardno = cardno.substring(12,16);
    display_cardno.innerHTML = cardno;


    var cardno1 = document.getElementById("cardno").value;
    cardno1 = cardno1.substring(12,16);
    display_cardno1.innerHTML = cardno1;


    var cardno3 = document.getElementById("cardno").value;
    display_cardno3.innerHTML = cardno3;



    // cardname
    var cardname = document.getElementById("cardname").value;
    cardname = cardname.charAt(0).toUpperCase() + cardname.slice(1);
    display_cardname.innerHTML = cardname;


    var cardname3 = document.getElementById("cardname").value;
    cardname3 = cardname3.charAt(0).toUpperCase() + cardname3.slice(1);
    display_cardname3.innerHTML = cardname3;




    // Phone
    var phone = document.getElementById("phone").value;
    display_phone.innerHTML = phone;


    var phone3 = document.getElementById("phone").value;
    display_phone3.innerHTML = phone3;


    // Email
    var email = document.getElementById("email").value;
    display_email.innerHTML = email;


    var email3 = document.getElementById("email").value;
    display_email3.innerHTML = email3;


    // Billing
    var billing = document.getElementById("billing").value;
    display_billing.innerHTML = billing;


    var billing3 = document.getElementById("billing").value;
    display_billing3.innerHTML = billing3;




    // Expiration Month
    var month = document.getElementById("month").value;
    display_month.innerHTML = month;


    var month3 = document.getElementById("month").value;
    display_month3.innerHTML = month3;



    // Expiration Year
    var year = document.getElementById("year").value;
    year = year.substring(2,4);
    display_year.innerHTML = year;


    var year3 = document.getElementById("year").value;
    year3 = year3.substring(2,4);
    display_year3.innerHTML = year3;




    // PNR
    var pnr = document.getElementById("pnr").value;
    display_pnr.innerHTML = pnr;


    // Airline
    var airline = document.getElementById("airline").value;
    display_airline.innerHTML = airline;


    // CVV
    var cvv = document.getElementById("cvv").value;
    display_cvv.innerHTML = cvv;



    // Date
    var date = document.getElementById("date").value;
    display_date.innerHTML = date;


    // Date
    var tfn = document.getElementById("tfn").value;
    display_tfn.innerHTML = tfn;


    // Agent Name
    var agent = document.getElementById("agent").value;
    display_agent.innerHTML = agent;


    // Time and Date now
    var time = document.getElementById("time").value;
    display_time.innerHTML = time;
















    // Ticket Price
    var price = document.getElementById("price").value;
    display_price.innerHTML = price;
    var p = price;

   


    // Ticket mco
    var mco = document.getElementById("mco").value;
    display_mco.innerHTML = mco;
    var m = mco;

    



    // Ticket total
    p = parseFloat(p);
    m = parseFloat(m);
    var total = p + m;
    display_total.innerHTML = total;




    // Ticket price for last part:

    var price1 = document.getElementById("price").value;
    display_price1.innerHTML = price1;
    var p1 = price1;

    var mco1 = document.getElementById("mco").value;
    display_mco1.innerHTML = mco1;
    var m1 = mco1;

    p1 = parseFloat(p1);
    m1 = parseFloat(m1);
    var total1 = p1 + m1;
    display_total1.innerHTML = total1;


    // TO TL
    // Ticket mco
    var mco3 = document.getElementById("mco").value;
    display_mco3.innerHTML = mco3;
    var m = mco3;

}

function toggleContent() {
    var hiddenContent = document.getElementById("hidden-content");
    var button = document.querySelector(".view-more-button");
    if (hiddenContent.style.display === "none") {
        hiddenContent.style.display = "block";
        button.textContent = "View Less";
    } else {
        hiddenContent.style.display = "none";
        button.textContent = "View More";
    }
}

$(document).ready(function () {
    $("a.scrollLink").click(function (event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 500);
    });
}, { passive: false });

document.getElementById("sendEmail").addEventListener("click", function () {
    var designation = document.getElementById("designation");
    var first_name = document.getElementById("first_name");
    var last_name = document.getElementById("last_name");
    var email = document.getElementById("email");
    var mobile = document.getElementById("mobile");
    var subject = encodeURIComponent("Application for the position of ".concat(designation.value));
    var body = encodeURIComponent("Hello Team,\n\nThis is to inform you that I am interested in joining your organisation as "
        .concat(designation.value)
        .concat(". Please find below mentioned details:\n\n Name: ")
        .concat(first_name.value)
        .concat(" ")
        .concat(last_name.value)
        .concat("\n Email: ")
        .concat(email.value)
        .concat("\n Mobile: ")
        .concat(mobile.value)
        .concat("\n\nThanks & Regards,\n")
        .concat(first_name.value)
        .concat(" ")
        .concat(last_name.value));
    var mailtoLink = "mailto:info@rrlsecurities.co.in,hr@rrlsecurities.co.in" + "?subject=" + subject + "&body=" + body;
    window.location.href = mailtoLink;
});


function myFunction() {
    var language = document.getElementById("languages");
    var ms = document.getElementById("male_security");
    var msd = document.getElementById("male_security_description");
    var fs = document.getElementById("female_security");
    var fsd = document.getElementById("female_security_description");
    if (language.value === "en") {
        ms.innerHTML = "MALE SECURITY GUARD";
        msd.innerHTML = "Our security guards are the embodiment of vigilance and reliability, standing as unwavering sentinels of safety. Trained to perfection, they bring a sense of assurance to any environment they secure. Equipped with comprehensive expertise and a commitment to safeguarding lives and property, our security guards are not just protectors, but also ambassadors of peace. With a keen eye for detail and a proactive approach, they ensure that every corner is shielded from potential threats. Our security guards are not just professionals; they are the guardians of tranquility, ensuring that you can carry on with confidence in a secure environment. Trust in their dedication and experience as they stand as the first line of defense against any challenge, demonstrating our unwavering commitment to your safety."
        fs.innerHTML = "FEMALE SECURITY GUARD";
        fsd.innerHTML = "Introducing our exceptional team of female security guards – a testament to empowerment, strength, and professionalism. At RRL Security Pvt. Ltd. we recognize the importance of diversity and inclusivity in the security industry. Our female security guards are highly trained, skilled, and committed to providing top-tier security services to our clients. With an acute sense of situational awareness and a unique ability to foster a secure environment, they bring a distinctive touch to every assignment. Their presence signifies not only a commitment to safety but also  a representation of equality in the field. Trust in our female security guards to bring a balance of empathy and authority, ensuring your peace of mind while upholding our unwavering standards of security excellence."
    } else {
        ms.innerHTML = "पुरुष सुरक्षा गार्ड";
        msd.innerHTML = "हमारे सुरक्षा गार्ड सतर्कता और विश्वसनीयता के प्रतीक हैं, जो सुरक्षा के अटूट प्रहरी के रूप में खड़े हैं। पूर्णता के लिए प्रशिक्षित, वे जिस भी वातावरण को सुरक्षित करते हैं उसमें आश्वासन की भावना लाते हैं। व्यापक विशेषज्ञता और जीवन और संपत्ति की सुरक्षा के प्रति प्रतिबद्धता से लैस, हमारे सुरक्षा गार्ड न केवल रक्षक हैं, बल्कि शांति के राजदूत भी हैं। विस्तार पर गहरी नजर और सक्रिय दृष्टिकोण के साथ, वे यह सुनिश्चित करते हैं कि हर कोने को संभावित खतरों से बचाया जाए। हमारे सुरक्षा गार्ड सिर्फ पेशेवर नहीं हैं; वे शांति के संरक्षक हैं, यह सुनिश्चित करते हुए कि आप सुरक्षित वातावरण में आत्मविश्वास के साथ आगे बढ़ सकें। उनके समर्पण और अनुभव पर भरोसा रखें क्योंकि वे किसी भी चुनौती के खिलाफ रक्षा की पहली पंक्ति के रूप में खड़े हैं, जो आपकी सुरक्षा के प्रति हमारी अटूट प्रतिबद्धता को प्रदर्शित करता है।"
        fs.innerHTML = "महिला सुरक्षा गार्ड";
        fsd.innerHTML = "महिला सुरक्षा गार्डों की हमारी असाधारण टीम का परिचय - सशक्तिकरण, शक्ति और व्यावसायिकता का एक प्रमाण। आरआरएल सिक्योरिटी प्रा. लिमिटेड हम सुरक्षा उद्योग में विविधता और समावेशिता के महत्व को पहचानते हैं। हमारी महिला सुरक्षा गार्ड अत्यधिक प्रशिक्षित, कुशल और हमारे ग्राहकों को शीर्ष स्तरीय सुरक्षा सेवाएँ प्रदान करने के लिए प्रतिबद्ध हैं। स्थितिजन्य जागरूकता की तीव्र भावना और एक सुरक्षित वातावरण को बढ़ावा देने की अद्वितीय क्षमता के साथ, वे हर कार्य में एक विशिष्ट स्पर्श लाते हैं। उनकी उपस्थिति न केवल सुरक्षा के प्रति प्रतिबद्धता बल्कि क्षेत्र में समानता का प्रतिनिधित्व भी दर्शाती है। सुरक्षा उत्कृष्टता के हमारे अटूट मानकों को कायम रखते हुए, आपकी मानसिक शांति सुनिश्चित करते हुए, सहानुभूति और अधिकार का संतुलन लाने के लिए हमारी महिला सुरक्षा गार्डों पर भरोसा करें।"
    }
}
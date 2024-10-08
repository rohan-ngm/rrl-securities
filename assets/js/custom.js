function toggleContent() {
    var hiddenContent = document.getElementById("hidden_content");
    var hcp_1 = document.getElementById("hcp_1");
    var hcp_2 = document.getElementById("hcp_2");
    var hcp_3 = document.getElementById("hcp_3");
    var hcp_4 = document.getElementById("hcp_4");
    var button = document.querySelector(".view-more-button");
    var language = "en";
    if (hiddenContent.style.display === "none") {
        hiddenContent.style.display = "block";
        if (language.value === "en") {
            button.textContent = "View Less";
        } else {
            button.textContent = "कम देखें";
        }
    } else {
        hiddenContent.style.display = "none";
        if (language.value === "en") {
            button.textContent = "View More";
        } else {
            button.textContent = "और देखें";
        }

    }
    if (hcp_1.style.display === "none") {
        hcp_1.style.display = "block";
        if (language.value === "en") {
            button.textContent = "View Less";
        } else {
            button.textContent = "कम देखें";
        }
    } else {
        hcp_1.style.display = "none";
        if (language.value === "en") {
            button.textContent = "View More";
        } else {
            button.textContent = "और देखें";
        }

    }
    if (hcp_2.style.display === "none") {
        hcp_2.style.display = "block";
        if (language.value === "en") {
            button.textContent = "View Less";
        } else {
            button.textContent = "कम देखें";
        }
    } else {
        hcp_2.style.display = "none";
        if (language.value === "en") {
            button.textContent = "View More";
        } else {
            button.textContent = "और देखें";
        }

    }
    if (hcp_3.style.display === "none") {
        hcp_3.style.display = "block";
        if (language.value === "en") {
            button.textContent = "View Less";
        } else {
            button.textContent = "कम देखें";
        }
    } else {
        hcp_3.style.display = "none";
        if (language.value === "en") {
            button.textContent = "View More";
        } else {
            button.textContent = "और देखें";
        }

    }
    if (hcp_4.style.display === "none") {
        hcp_4.style.display = "block";
        if (language.value === "en") {
            button.textContent = "View Less";
        } else {
            button.textContent = "कम देखें";
        }
    } else {
        hcp_4.style.display = "none";
        if (language.value === "en") {
            button.textContent = "View More";
        } else {
            button.textContent = "और देखें";
        }

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

function updateLanguageContent(languageValue) {
    if (languageValue === "en") {
        title.innerHTML = "RRL Security Pvt. Ltd.";
        intro.innerHTML = "Introduction";
        services_link.innerHTML = "Services";
        services.innerHTML = "Services";
        contact_us_1.innerHTML = "Contact Us";
        contact_us_2.innerHTML = "Contact Us";
        rrlSecurity.innerHTML = "RRL Security Pvt. Ltd.";
        welcome1.innerHTML = "Welcome to RRL Security Pvt. Ltd., your trusted partner in comprehensive security solutions. With a steadfast commitment to safeguarding lives and assets, we stand at the forefront of the security industry, offering both security guard services and security guard hiring options. Our mission is to create an environment of trust and safety for individuals, businesses, and communities.";
        hcp_1.innerHTML = "At RRL Security Pvt. Ltd., we understand that security is not just a service; it's a promise. With years of experience and a team of highly trained professionals, we specialize in providing top-tier security services that cater to the diverse needs of our clients. Whether you require a single security guard for an event or a dedicated team to secure your premises  round-the-clock,  we have the expertise to deliver solutions tailored to your specific requirements.";
        hcp_2.innerHTML = "Our commitment extends beyond merely offering security services. We believe in empowering individuals and organizations by providing the opportunity to hire qualified and reliable security guards through our platform. By connecting experienced security professionals with those in need of their expertise, we contribute to the growth of a safer and more secure society.";
        hcp_3.innerHTML = "What sets us apart is our unwavering dedication to excellence, integrity, and responsiveness. Our security guards are not just trained to be vigilant; they are ambassadors of safety who understand the importance of proactive prevention, effective communication, and a swift response to any potential threats.";
        hcp_4.innerHTML = "Whether you're an individual seeking personal protection or a business aiming to enhance security measures, RRL Security Pvt. Ltd. is here to partner with you. We are your trusted shield, ensuring that you can go about your daily life and business operations with peace of mind. Join us in building a safer world together.";
        we_are_hiring.innerHTML = "We are hiring";
        our_team.innerHTML = "Our Team";
        male_security.innerHTML = "MALE SECURITY GUARD";
        male_security_description.innerHTML = "Our security guards are the embodiment of vigilance and reliability, standing as unwavering sentinels of safety. Trained to perfection, they bring a sense of assurance to any environment they secure. Equipped with comprehensive expertise and a commitment to safeguarding lives and property, our security guards are not just protectors, but also ambassadors of peace. With a keen eye for detail and a proactive approach, they ensure that every corner is shielded from potential threats. Our security guards are not just professionals; they are the guardians of tranquility, ensuring that you can carry on with confidence in a secure environment. Trust in their dedication and experience as they stand as the first line of defense against any challenge, demonstrating our unwavering commitment to your safety."
        female_security.innerHTML = "FEMALE SECURITY GUARD";
        female_security_description.innerHTML = "Introducing our exceptional team of female security guards – a testament to empowerment, strength, and professionalism. At RRL Security Pvt. Ltd. we recognize the importance of diversity and inclusivity in the security industry. Our female security guards are highly trained, skilled, and committed to providing top-tier security services to our clients. With an acute sense of situational awareness and a unique ability to foster a secure environment, they bring a distinctive touch to every assignment. Their presence signifies not only a commitment to safety but also  a representation of equality in the field. Trust in our female security guards to bring a balance of empathy and authority, ensuring your peace of mind while upholding our unwavering standards of security excellence."
        cash_management.innerHTML = "CASH MANAGEMENT";
        cash_management_description.innerHTML = "In the realm of modern business, effective cash management is paramount to ensuring financial stability and smooth operations. At RRL Security Pvt. Ltd. our dedicated team of security guards goes beyond traditional security roles to provide comprehensive cash management solutions that safeguard your financial assets. Our highly trained professionals are not only vigilant guardians but also adept cash handlers who are well-versed in the intricacies of secure cash handling procedures. From monitoring cash movements and maintaining accurate records to facilitating secure cash transfers, our security guards bring a heightened level of expertise to cash management. With an unwavering commitment to integrity and accountability, we ensure that your valuable assets remain safeguarded at every step. Trust  RRL Security Pvt. Ltd. for seamless cash management that not only ensures security but also bolsters your financial confidence."
        event_security.innerHTML = "EVENT SECURITY";
        event_security_description.innerHTML = "Event security is a critical aspect that demands meticulous attention and effective management to ensure the safety and smooth execution of any gathering. Our dedicated team of highly trained security guards takes on the responsibility of event security with utmost professionalism and precision. From grand celebrations to corporate conferences, our security guards are adept at creating a secure environment that allows attendees to focus on enjoying the event without worries. With a keen eye for detail and a proactive approach, our security personnel manage crowd control, access points, and emergency response, ensuring that every aspect of the event remains under vigilant watch. Whether it's a small-scale affair or a large-scale festival, our security guards are well-equipped to handle any situation, ensuring that the event unfolds seamlessly and everyone present feels secure and protected."
        office_security.innerHTML = "OFFICE SECURITY";
        office_security_description.innerHTML = "Office security is of paramount importance, and our dedicated team of security guards is here to ensure a safe and secure environment for your workplace. With a vigilant presence and a deep commitment to safeguarding your office premises, our security guards play a pivotal role in maintaining order and deterring potential security threats. They are meticulously trained to monitor access points, verify identities, and enforce security protocols, creating a strong deterrent against unauthorized entry. Beyond their physical presence, our security guards are skilled  in crisis management, responding swiftly and effectively to emergencies while ensuring minimal disruption to daily operations. By collaborating seamlessly with your team, they contribute to a cohesive security strategy that fosters a sense of safety among employees and visitors alike. At RRL Security Pvt. Ltd., we understand that a secure office environment is not just a necessity; it's the foundation upon which productivity and peace of mind thrive."
        building_security.innerHTML = "BUILDING SECURITY GUARD";
        building_security_description.innerHTML = "Security guards play a vital role in ensuring the safety and protection of buildings. With a watchful presence and a keen eye for detail, security guards effectively safeguard entrances, monitor surveillance systems, and control access points, creating a secure environment for both occupants and assets. Their continuous patrolling and diligent monitoring deter unauthorized access, preventing potential threats from gaining foothold. Whether it's a residential complex, commercial establishment, or industrial facility, security guards provide a sense of assurance and deterrence, working tirelessly to maintain order and respond promptly to any security breaches. Their role goes beyond physical presence; they act as the first line of defense, upholding the integrity of the building's security infrastructure and fostering a secure atmosphere that promotes peace of mind for all those within."
        industrial_security.innerHTML = "INDUSTRIAL SECURITY";
        industrial_security_description.innerHTML = "Industrial security is of paramount importance in today's fast-paced and ever-evolving business landscape. The intricate nature of industrial facilities demands a robust security framework, and this is where our dedicated team of security guards steps in. With unwavering vigilance and a deep understanding of industrial processes, our security guards are the first line of defense against potential threats. They meticulously monitor access points, conduct thorough inspections, and implement stringent security protocols to ensure the safety of personnel, assets, and sensitive information. Our security guards are not just watchful eyes; they are well-trained professionals who proactively identify vulnerabilities, deter potential risks, and respond swiftly to any emerging situations. Their presence instills confidence in the workforce and helps maintain a secure environment that fosters productivity and peace of mind. At RRL Security Pvt. Ltd. we take industrial security to heart, safeguarding the foundations on which businesses thrive."
        retail_security.innerHTML = "RETAIL SECURITY";
        retail_security_description.innerHTML = "In the dynamic landscape of retail, security is a paramount concern that directly  influences both customer experience and business operations. Our dedicated team of highly trained security guards specializes in providing comprehensive retail security solutions that encompass a range of vital aspects. From deterring theft and preventing shoplifting to ensuring a safe shopping environment for customers and staff, our security guards are equipped with the expertise to maintain order and protect assets. With an acute understanding of the unique challenges faced in retail settings, our security personnel effectively monitor entrances and exits, conduct routine patrols, and implement access control measures. By focusing on proactive prevention and maintaining a visible presence, our security guards play a pivotal role in fostering a secure and enjoyable shopping atmosphere, enhancing customer trust, and safeguarding the retail establishment's reputation. At RRL Security Pvt. Ltd. we take pride in our commitment to upholding the security and success of your retail venture."
        hospital_security.innerHTML = "HOSPITAL SECURITY";
        hospital_security_description.innerHTML = "Hospital security is a critical aspect of ensuring a safe and secure environment for patients, visitors, and healthcare professionals. Security guards play a pivotal role in upholding the well-being of everyone within the hospital premises. These dedicated professionals are not only the first line of defense against potential threats but also the reassuring presence that maintains order and prevents unauthorized access. From monitoring entrances and exits to conducting regular patrols, security guards ensure that only authorized individuals are granted access, thereby safeguarding patient privacy and sensitive medical information. Additionally, they are trained to handle emergency situations with swift and efficient responses, ensuring the smooth evacuation of patients and personnel when necessary. Hospital security guards provide the peace of mind that allows medical staff to focus on providing quality care while creating an environment where patients can heal and recover without worry."
        property_security.innerHTML = "PROPERTY SECURITY";
        property_security_description.innerHTML = "Property security is of paramount importance, and our dedicated team of security guards takes it upon themselves to ensure the safeguarding of your valuable assets. With their vigilant presence and unwavering commitment, our security guards act as the first line of defense against potential threats to your property. From residential complexes to commercial establishments, our guards are trained to employ a combination of proactive surveillance and quick response to maintain a secure environment. They conduct thorough perimeter checks, monitor access points, and are skilled in identifying and addressing any suspicious activities promptly. Our security guards are not only equipped with the necessary skills and training, but they also carry a sense of responsibility to uphold the integrity of your property's security. vWith their watchful eyes and dedication, you can trust that your property is in capable hands, ensuring a sense of safety and peace for both you and your stakeholders."
        school_security.innerHTML = "SCHOOL SECURITY";
        school_security_description.innerHTML = "The safety and security of students within a school environment are paramount, and this responsibility is diligently undertaken by our team of dedicated security guards. At schools, our security guards play a pivotal role in creating a safe and conducive learning environment for students, teachers, and staff members alike. Trained to be vigilant, approachable, and responsive, our security personnel are a reassuring presence that ensures unauthorized individuals are kept at bay and potential threats are promptly addressed. From monitoring access points to conducting routine patrols, our security guards employ their expertise to mitigate risks and prevent any disruptions that may compromise the well-being of the school community. With a strong commitment to safeguarding both the physical and emotional security of everyone on campus, our security guards uphold a culture of safety that fosters a sense of trust and tranquility, allowing students to focus on their studies and personal growth without worry."
        tel_1.innerHTML = "8604911129";
        tel_2.innerHTML = "9936814362";
        tel_3.innerHTML = "9313431129";
        join_us_today.innerHTML = "JOIN US TODAY !";
        fn.innerHTML = "First Name";
        first_name.innerHTML = "First Name";
        ln.innerHTML = "Last Name";
        last_name.innerHTML = "Last Name";
        e_mail.innerHTML = "E-Mail";
        email.innerHTML = "E-Mail Address";
        label_mobile.innerHTML = "Mobile #";
        mobile.innerHTML = "(123) 456-7890";
        sendEmail.innerHTML = "Submit";
        our_team_members.innerHTML = "Our Team Members";
        d1_name.innerHTML = "Radhakrishanan Nigam";
        d1_des.innerHTML = "Director";
        d1_email.innerHTML = "director@rrlsecurity.com";
        d2_name.innerHTML = "Rohan Nigam";
        d2_des.innerHTML = "Director";
        d2_email.innerHTML = "director@rrlsecurity.com";
        hr_name.innerHTML = "Supriya Nigam";
        hr_des.innerHTML = "HR (Human Resources)";
        hr_email.innerHTML = "hr-head@rrlsecurity.com";
        f_fs.innerHTML = "FEMALE SECURITY GUARD";
        f_ms.innerHTML = "MALE SECURITY GUARD";
        f_fs.innerHTML = "FEMALE SECURITY GUARD";
        f_cm.innerHTML = "CASH MANAGEMENT";
        f_es.innerHTML = "EVENT SECURITY";
        f_os.innerHTML = "OFFICE SECURITY";
        f_bs.innerHTML = "BUILDING SECURITY GUARD";
        f_is.innerHTML = "INDUSTRIAL SECURITY";
        f_rs.innerHTML = "RETAIL SECURITY";
        f_hs.innerHTML = "HOSPITAL SECURITY";
        f_ps.innerHTML = "PROPERTY SECURITY";
        f_ss.innerHTML = "SCHOOL SECURITY";
        f_cu.innerHTML = "CONTACT US";
        f_ot.innerHTML = "OUR TEAM";
        f_au.innerHTML = "ABOUT US";
        f_intro.innerHTML = "INTRODUCTION";
        f_services.innerHTML = "SERVICES";
        f_contact.innerHTML = "CONTACT";
        $(".popup").fadeOut(500);
        $(".cover").fadeOut(500);
    } else {
        title.innerHTML = "आरआरएल सिक्योरिटी प्रा. लिमिटेड";
        intro.innerHTML = "परिचय";
        services_link.innerHTML = "सेवाएं";
        services.innerHTML = "सेवाएं";
        contact_us_1.innerHTML = "संपर्क करें";
        contact_us_2.innerHTML = "संपर्क करें";
        rrlSecurity.innerHTML = "आरआरएल सिक्योरिटी प्रा. लिमिटेड";
        welcome1.innerHTML = "आरआरएल सिक्योरिटी प्राइवेट में आपका स्वागत है। लिमिटेड, व्यापक सुरक्षा समाधानों में आपका विश्वसनीय भागीदार। जीवन और संपत्ति की सुरक्षा के लिए दृढ़ प्रतिबद्धता के साथ, हम सुरक्षा उद्योग में सबसे आगे खड़े हैं, सुरक्षा गार्ड सेवाएं और सुरक्षा गार्ड भर्ती विकल्प दोनों प्रदान करते हैं। हमारा मिशन व्यक्तियों, व्यवसायों और समुदायों के लिए विश्वास और सुरक्षा का माहौल बनाना है।";
        hcp_1.innerHTML = "आरआरएल सिक्योरिटी प्रा. लिमिटेड, हम समझते हैं कि सुरक्षा केवल एक सेवा नहीं है; यह एक वादा है। वर्षों के अनुभव और उच्च प्रशिक्षित पेशेवरों की एक टीम के साथ, हम शीर्ष स्तरीय सुरक्षा सेवाएँ प्रदान करने में माहिर हैं जो हमारे ग्राहकों की विविध आवश्यकताओं को पूरा करती हैं। चाहे आपको किसी कार्यक्रम के लिए एक सुरक्षा गार्ड की आवश्यकता हो या अपने परिसर को चौबीसों घंटे सुरक्षित रखने के लिए एक समर्पित टीम की, हमारे पास आपकी विशिष्ट आवश्यकताओं के अनुरूप समाधान प्रदान करने की विशेषज्ञता है।";
        hcp_2.innerHTML = "हमारी प्रतिबद्धता केवल सुरक्षा सेवाएँ प्रदान करने तक ही सीमित नहीं है। हम अपने मंच के माध्यम से योग्य और विश्वसनीय सुरक्षा गार्डों को नियुक्त करने का अवसर प्रदान करके व्यक्तियों और संगठनों को सशक्त बनाने में विश्वास करते हैं। अनुभवी सुरक्षा पेशेवरों को उनकी विशेषज्ञता की आवश्यकता वाले लोगों के साथ जोड़कर, हम एक सुरक्षित और सुरक्षित समाज के विकास में योगदान करते हैं।";
        hcp_3.innerHTML = "उत्कृष्टता, सत्यनिष्ठा और जवाबदेही के प्रति हमारा अटूट समर्पण ही हमें अलग करता है। हमारे सुरक्षा गार्ड सिर्फ सतर्क रहने के लिए ही प्रशिक्षित नहीं हैं; वे सुरक्षा के राजदूत हैं जो सक्रिय रोकथाम, प्रभावी संचार और किसी भी संभावित खतरे पर त्वरित प्रतिक्रिया के महत्व को समझते हैं।";
        hcp_4.innerHTML = "चाहे आप व्यक्तिगत सुरक्षा चाहने वाले व्यक्ति हों या सुरक्षा उपायों को बढ़ाने का लक्ष्य रखने वाला व्यवसाय हों, आरआरएल सिक्योरिटी प्राइवेट। लिमिटेड आपके साथ साझेदारी करने के लिए यहां है। हम आपकी विश्वसनीय ढाल हैं, जो यह सुनिश्चित करते हैं कि आप मन की शांति के साथ अपने दैनिक जीवन और व्यावसायिक संचालन कर सकें। एक साथ मिलकर एक सुरक्षित विश्व के निर्माण में हमारा साथ दें।";
        we_are_hiring.innerHTML = "हम भर्ती कर रहे हैं";
        our_team.innerHTML = "हमारी टीम";
        male_security.innerHTML = "पुरुष सुरक्षा गार्ड";
        male_security_description.innerHTML = "हमारे सुरक्षा गार्ड सतर्कता और विश्वसनीयता के प्रतीक हैं, जो सुरक्षा के अटूट प्रहरी के रूप में खड़े हैं। पूर्णता के लिए प्रशिक्षित, वे जिस भी वातावरण को सुरक्षित करते हैं उसमें आश्वासन की भावना लाते हैं। व्यापक विशेषज्ञता और जीवन और संपत्ति की सुरक्षा के प्रति प्रतिबद्धता से लैस, हमारे सुरक्षा गार्ड न केवल रक्षक हैं, बल्कि शांति के राजदूत भी हैं। विस्तार पर गहरी नजर और सक्रिय दृष्टिकोण के साथ, वे यह सुनिश्चित करते हैं कि हर कोने को संभावित खतरों से बचाया जाए। हमारे सुरक्षा गार्ड सिर्फ पेशेवर नहीं हैं; वे शांति के संरक्षक हैं, यह सुनिश्चित करते हुए कि आप सुरक्षित वातावरण में आत्मविश्वास के साथ आगे बढ़ सकें। उनके समर्पण और अनुभव पर भरोसा रखें क्योंकि वे किसी भी चुनौती के खिलाफ रक्षा की पहली पंक्ति के रूप में खड़े हैं, जो आपकी सुरक्षा के प्रति हमारी अटूट प्रतिबद्धता को प्रदर्शित करता है।"
        female_security.innerHTML = "महिला सुरक्षा गार्ड";
        female_security_description.innerHTML = "महिला सुरक्षा गार्डों की हमारी असाधारण टीम का परिचय - सशक्तिकरण, शक्ति और व्यावसायिकता का एक प्रमाण। आरआरएल सिक्योरिटी प्रा. लिमिटेड हम सुरक्षा उद्योग में विविधता और समावेशिता के महत्व को पहचानते हैं। हमारी महिला सुरक्षा गार्ड अत्यधिक प्रशिक्षित, कुशल और हमारे ग्राहकों को शीर्ष स्तरीय सुरक्षा सेवाएँ प्रदान करने के लिए प्रतिबद्ध हैं। स्थितिजन्य जागरूकता की तीव्र भावना और एक सुरक्षित वातावरण को बढ़ावा देने की अद्वितीय क्षमता के साथ, वे हर कार्य में एक विशिष्ट स्पर्श लाते हैं। उनकी उपस्थिति न केवल सुरक्षा के प्रति प्रतिबद्धता बल्कि क्षेत्र में समानता का प्रतिनिधित्व भी दर्शाती है। सुरक्षा उत्कृष्टता के हमारे अटूट मानकों को कायम रखते हुए, आपकी मानसिक शांति सुनिश्चित करते हुए, सहानुभूति और अधिकार का संतुलन लाने के लिए हमारी महिला सुरक्षा गार्डों पर भरोसा करें।"
        cash_management.innerHTML = "नकदी प्रबंधन";
        cash_management_description.innerHTML = "आधुनिक व्यवसाय के क्षेत्र में, वित्तीय स्थिरता और सुचारू संचालन सुनिश्चित करने के लिए प्रभावी नकदी प्रबंधन सर्वोपरि है। आरआरएल सिक्योरिटी प्रा. लिमिटेड सुरक्षा गार्डों की हमारी समर्पित टीम आपकी वित्तीय संपत्तियों की सुरक्षा के लिए व्यापक नकदी प्रबंधन समाधान प्रदान करने के लिए पारंपरिक सुरक्षा भूमिकाओं से परे जाती है। हमारे उच्च प्रशिक्षित पेशेवर न केवल सतर्क अभिभावक हैं बल्कि कुशल नकदी संचालक भी हैं जो सुरक्षित नकदी प्रबंधन प्रक्रियाओं की जटिलताओं से अच्छी तरह वाकिफ हैं। नकदी की आवाजाही की निगरानी करने और सटीक रिकॉर्ड बनाए रखने से लेकर सुरक्षित नकदी हस्तांतरण की सुविधा तक, हमारे सुरक्षा गार्ड नकदी प्रबंधन में उच्च स्तर की विशेषज्ञता लाते हैं। सत्यनिष्ठा और जवाबदेही के प्रति अटूट प्रतिबद्धता के साथ, हम यह सुनिश्चित करते हैं कि आपकी मूल्यवान संपत्तियाँ हर कदम पर सुरक्षित रहें। ट्रस्ट आरआरएल सिक्योरिटी प्रा. निर्बाध नकदी प्रबंधन के लिए लिमिटेड जो न केवल सुरक्षा सुनिश्चित करता है बल्कि आपके वित्तीय आत्मविश्वास को भी बढ़ाता है।"
        event_security.innerHTML = "इवेंट सुरक्षा";
        event_security_description.innerHTML = "इवेंट सुरक्षा एक महत्वपूर्ण पहलू है जो किसी भी सभा की सुरक्षा और सुचारू निष्पादन सुनिश्चित करने के लिए सावधानीपूर्वक ध्यान और प्रभावी प्रबंधन की मांग करता है। उच्च प्रशिक्षित सुरक्षा गार्डों की हमारी समर्पित टीम अत्यंत व्यावसायिकता और सटीकता के साथ कार्यक्रम की सुरक्षा की जिम्मेदारी लेती है। भव्य समारोहों से लेकर कॉर्पोरेट सम्मेलनों तक, हमारे सुरक्षा गार्ड एक सुरक्षित वातावरण बनाने में माहिर हैं जो उपस्थित लोगों को बिना किसी चिंता के कार्यक्रम का आनंद लेने पर ध्यान केंद्रित करने की अनुमति देता है। विस्तार पर गहरी नजर और सक्रिय दृष्टिकोण के साथ, हमारे सुरक्षाकर्मी भीड़ नियंत्रण, पहुंच बिंदुओं और आपातकालीन प्रतिक्रिया का प्रबंधन करते हैं, यह सुनिश्चित करते हुए कि घटना का हर पहलू सतर्क निगरानी में रहे। चाहे वह छोटे पैमाने का मामला हो या बड़े पैमाने का त्योहार, हमारे सुरक्षा गार्ड किसी भी स्थिति से निपटने के लिए अच्छी तरह से सुसज्जित हैं, यह सुनिश्चित करते हुए कि कार्यक्रम निर्बाध रूप से संपन्न हो और उपस्थित सभी लोग सुरक्षित और सुरक्षित महसूस करें।"
        office_security.innerHTML = "कार्यालय सुरक्षा";
        office_security_description.innerHTML = "कार्यालय की सुरक्षा सर्वोपरि है, और सुरक्षा गार्डों की हमारी समर्पित टीम आपके कार्यस्थल के लिए एक सुरक्षित वातावरण सुनिश्चित करने के लिए यहां मौजूद है। सतर्क उपस्थिति और आपके कार्यालय परिसर की सुरक्षा के लिए गहरी प्रतिबद्धता के साथ, हमारे सुरक्षा गार्ड व्यवस्था बनाए रखने और संभावित सुरक्षा खतरों को रोकने में महत्वपूर्ण भूमिका निभाते हैं। उन्हें पहुंच बिंदुओं की निगरानी करने, पहचान सत्यापित करने और सुरक्षा प्रोटोकॉल लागू करने, अनधिकृत प्रवेश के खिलाफ एक मजबूत निवारक बनाने के लिए सावधानीपूर्वक प्रशिक्षित किया जाता है। अपनी भौतिक उपस्थिति के अलावा, हमारे सुरक्षा गार्ड संकट प्रबंधन में कुशल हैं, वे दैनिक कार्यों में न्यूनतम व्यवधान सुनिश्चित करते हुए आपात स्थिति में तेजी से और प्रभावी ढंग से प्रतिक्रिया करते हैं। आपकी टीम के साथ निर्बाध रूप से सहयोग करके, वे एक समेकित सुरक्षा रणनीति में योगदान करते हैं जो कर्मचारियों और आगंतुकों के बीच समान रूप से सुरक्षा की भावना को बढ़ावा देती है। आरआरएल सिक्योरिटी प्रा. लिमिटेड, हम समझते हैं कि एक सुरक्षित कार्यालय वातावरण सिर्फ एक आवश्यकता नहीं है; यह वह आधार है जिस पर उत्पादकता और मन की शांति पनपती है।"
        building_security.innerHTML = "बिल्डिंग सुरक्षा गार्ड";
        building_security_description.innerHTML = "सुरक्षा गार्ड इमारतों की सुरक्षा सुनिश्चित करने में महत्वपूर्ण भूमिका निभाते हैं। सतर्क उपस्थिति और विस्तार पर गहरी नजर के साथ, सुरक्षा गार्ड प्रभावी ढंग से प्रवेश द्वारों की सुरक्षा करते हैं, निगरानी प्रणालियों की निगरानी करते हैं और पहुंच बिंदुओं को नियंत्रित करते हैं, जिससे रहने वालों और संपत्ति दोनों के लिए एक सुरक्षित वातावरण बनता है। उनकी निरंतर गश्त और परिश्रमी निगरानी अनधिकृत पहुंच को रोकती है, संभावित खतरों को पैर जमाने से रोकती है। चाहे वह आवासीय परिसर हो, वाणिज्यिक प्रतिष्ठान हो, या औद्योगिक सुविधा हो, सुरक्षा गार्ड आश्वासन और भय की भावना प्रदान करते हैं, व्यवस्था बनाए रखने के लिए अथक प्रयास करते हैं और किसी भी सुरक्षा उल्लंघन पर तुरंत प्रतिक्रिया देते हैं। उनकी भूमिका भौतिक उपस्थिति से परे है; वे रक्षा की पहली पंक्ति के रूप में कार्य करते हैं, इमारत के सुरक्षा बुनियादी ढांचे की अखंडता को बनाए रखते हैं और एक सुरक्षित माहौल को बढ़ावा देते हैं जो अंदर मौजूद सभी लोगों के लिए मानसिक शांति को बढ़ावा देता है।"
        industrial_security.innerHTML = "औद्योगिक सुरक्षा";
        industrial_security_description.innerHTML = "आज के तेज़-तर्रार और निरंतर विकसित हो रहे व्यावसायिक परिदृश्य में औद्योगिक सुरक्षा अत्यंत महत्वपूर्ण है। औद्योगिक सुविधाओं की जटिल प्रकृति एक मजबूत सुरक्षा ढांचे की मांग करती है, और यहीं पर सुरक्षा गार्डों की हमारी समर्पित टीम कदम रखती है। अटूट सतर्कता और औद्योगिक प्रक्रियाओं की गहरी समझ के साथ, हमारे सुरक्षा गार्ड संभावित खतरों के खिलाफ रक्षा की पहली पंक्ति हैं। वे पहुंच बिंदुओं की सावधानीपूर्वक निगरानी करते हैं, गहन निरीक्षण करते हैं और कर्मियों, संपत्तियों और संवेदनशील जानकारी की सुरक्षा सुनिश्चित करने के लिए कड़े सुरक्षा प्रोटोकॉल लागू करते हैं। हमारे सुरक्षा गार्ड सिर्फ चौकस निगाहें नहीं हैं; वे अच्छी तरह से प्रशिक्षित पेशेवर हैं जो सक्रिय रूप से कमजोरियों की पहचान करते हैं, संभावित जोखिमों को रोकते हैं और किसी भी उभरती स्थिति पर तेजी से प्रतिक्रिया देते हैं। उनकी उपस्थिति कार्यबल में आत्मविश्वास पैदा करती है और एक सुरक्षित वातावरण बनाए रखने में मदद करती है जो उत्पादकता और मन की शांति को बढ़ावा देती है। आरआरएल सिक्योरिटी प्रा. लिमिटेड हम औद्योगिक सुरक्षा को ध्यान में रखते हैं, उन नींवों की रक्षा करते हैं जिन पर व्यवसाय फलते-फूलते हैं।"
        retail_security.innerHTML = "खुदरा सुरक्षा";
        retail_security_description.innerHTML = "खुदरा क्षेत्र के गतिशील परिदृश्य में, सुरक्षा एक सर्वोपरि चिंता है जो सीधे ग्राहक अनुभव और व्यावसायिक संचालन दोनों को प्रभावित करती है। उच्च प्रशिक्षित सुरक्षा गार्डों की हमारी समर्पित टीम व्यापक खुदरा सुरक्षा समाधान प्रदान करने में माहिर है जिसमें कई महत्वपूर्ण पहलू शामिल हैं। चोरी रोकने और दुकानों से चोरी रोकने से लेकर ग्राहकों और कर्मचारियों के लिए सुरक्षित खरीदारी का माहौल सुनिश्चित करने तक, हमारे सुरक्षा गार्ड व्यवस्था बनाए रखने और संपत्तियों की सुरक्षा करने की विशेषज्ञता से लैस हैं। खुदरा सेटिंग में सामना की जाने वाली अनूठी चुनौतियों की गहरी समझ के साथ, हमारे सुरक्षाकर्मी प्रभावी ढंग से प्रवेश और निकास की निगरानी करते हैं, नियमित गश्त करते हैं और पहुंच नियंत्रण उपायों को लागू करते हैं। सक्रिय रोकथाम और दृश्य उपस्थिति बनाए रखने पर ध्यान केंद्रित करके, हमारे सुरक्षा गार्ड एक सुरक्षित और आनंददायक खरीदारी माहौल को बढ़ावा देने, ग्राहकों का विश्वास बढ़ाने और खुदरा प्रतिष्ठान की प्रतिष्ठा की रक्षा करने में महत्वपूर्ण भूमिका निभाते हैं। आरआरएल सिक्योरिटी प्रा. लिमिटेड, हम आपके खुदरा उद्यम की सुरक्षा और सफलता को बनाए रखने की अपनी प्रतिबद्धता पर गर्व करते हैं।"
        hospital_security.innerHTML = "अस्पताल सुरक्षा";
        hospital_security_description.innerHTML = "मरीजों, आगंतुकों और स्वास्थ्य देखभाल पेशेवरों के लिए सुरक्षित वातावरण सुनिश्चित करने के लिए अस्पताल सुरक्षा एक महत्वपूर्ण पहलू है। सुरक्षा गार्ड अस्पताल परिसर में सभी की भलाई बनाए रखने में महत्वपूर्ण भूमिका निभाते हैं। ये समर्पित पेशेवर न केवल संभावित खतरों के खिलाफ रक्षा की पहली पंक्ति हैं, बल्कि आश्वस्त उपस्थिति भी हैं जो व्यवस्था बनाए रखते हैं और अनधिकृत पहुंच को रोकते हैं। प्रवेश और निकास की निगरानी से लेकर नियमित गश्त करने तक, सुरक्षा गार्ड यह सुनिश्चित करते हैं कि केवल अधिकृत व्यक्तियों को ही प्रवेश दिया जाए, जिससे रोगी की गोपनीयता और संवेदनशील चिकित्सा जानकारी सुरक्षित रहे। इसके अतिरिक्त, उन्हें त्वरित और कुशल प्रतिक्रियाओं के साथ आपातकालीन स्थितियों को संभालने के लिए प्रशिक्षित किया जाता है, जिससे आवश्यक होने पर रोगियों और कर्मियों की सुचारू निकासी सुनिश्चित होती है। अस्पताल के सुरक्षा गार्ड मन की शांति प्रदान करते हैं जो चिकित्सा कर्मचारियों को एक ऐसा वातावरण बनाते समय गुणवत्तापूर्ण देखभाल प्रदान करने पर ध्यान केंद्रित करने की अनुमति देता है जहां मरीज बिना किसी चिंता के ठीक हो सकते हैं।"
        property_security.innerHTML = "संपत्ति सुरक्षा";
        property_security_description.innerHTML = "संपत्ति की सुरक्षा अत्यंत महत्वपूर्ण है, और सुरक्षा गार्डों की हमारी समर्पित टीम आपकी मूल्यवान संपत्तियों की सुरक्षा सुनिश्चित करने का जिम्मा अपने ऊपर लेती है। अपनी सतर्क उपस्थिति और अटूट प्रतिबद्धता के साथ, हमारे सुरक्षा गार्ड आपकी संपत्ति पर संभावित खतरों के खिलाफ रक्षा की पहली पंक्ति के रूप में कार्य करते हैं। आवासीय परिसरों से लेकर व्यावसायिक प्रतिष्ठानों तक, हमारे गार्डों को सुरक्षित वातावरण बनाए रखने के लिए सक्रिय निगरानी और त्वरित प्रतिक्रिया के संयोजन को नियोजित करने के लिए प्रशिक्षित किया जाता है। वे पूरी तरह से परिधि की जांच करते हैं, पहुंच बिंदुओं की निगरानी करते हैं, और किसी भी संदिग्ध गतिविधियों को तुरंत पहचानने और संबोधित करने में कुशल हैं। हमारे सुरक्षा गार्ड न केवल आवश्यक कौशल और प्रशिक्षण से सुसज्जित हैं, बल्कि वे आपकी संपत्ति की सुरक्षा की अखंडता को बनाए रखने के लिए जिम्मेदारी की भावना भी रखते हैं। vउनकी सतर्क निगाहों और समर्पण के साथ, आप भरोसा कर सकते हैं कि आपकी संपत्ति सक्षम हाथों में है, जो आपके और आपके हितधारकों दोनों के लिए सुरक्षा और शांति की भावना सुनिश्चित करती है।"
        school_security.innerHTML = "स्कूल सुरक्षा";
        school_security_description.innerHTML = "स्कूल के माहौल में छात्रों की सुरक्षा और सुरक्षा सर्वोपरि है, और यह जिम्मेदारी समर्पित सुरक्षा गार्डों की हमारी टीम द्वारा पूरी लगन से निभाई जाती है। स्कूलों में, हमारे सुरक्षा गार्ड छात्रों, शिक्षकों और स्टाफ सदस्यों के लिए एक सुरक्षित और अनुकूल शिक्षण वातावरण बनाने में महत्वपूर्ण भूमिका निभाते हैं। सतर्क, पहुंच योग्य और उत्तरदायी होने के लिए प्रशिक्षित, हमारे सुरक्षाकर्मी एक आश्वस्त उपस्थिति हैं जो यह सुनिश्चित करते हैं कि अनधिकृत व्यक्तियों को दूर रखा जाए और संभावित खतरों का तुरंत समाधान किया जाए। पहुंच बिंदुओं की निगरानी से लेकर नियमित गश्त करने तक, हमारे सुरक्षा गार्ड जोखिमों को कम करने और स्कूल समुदाय की भलाई से समझौता करने वाले किसी भी व्यवधान को रोकने के लिए अपनी विशेषज्ञता का उपयोग करते हैं। परिसर में सभी की शारीरिक और भावनात्मक सुरक्षा की मजबूत प्रतिबद्धता के साथ, हमारे सुरक्षा गार्ड सुरक्षा की संस्कृति को कायम रखते हैं जो विश्वास और शांति की भावना को बढ़ावा देता है, जिससे छात्रों को बिना किसी चिंता के अपनी पढ़ाई और व्यक्तिगत विकास पर ध्यान केंद्रित करने की अनुमति मिलती है।"
        tel_1.innerHTML = "8604911129";
        tel_2.innerHTML = "9936814362";
        tel_3.innerHTML = "9313431129";
        join_us_today.innerHTML = "आज ही शामिल हों !";
        fn.innerHTML = "पहला नाम";
        first_name.innerHTML = "पहला नाम";
        ln.innerHTML = "उपनाम";
        last_name.innerHTML = "उपनाम";
        e_mail.innerHTML = "ई-मेल";
        email.innerHTML = "ई-मेल";
        label_mobile.innerHTML = "मोबाइल नंबर";
        mobile.innerHTML = "(123) 456-7890";
        sendEmail.innerHTML = "जमा करना";
        our_team_members.innerHTML = "हमारी टीम के सदस्य";
        d1_name.innerHTML = "आर. के. निगम";
        d1_des.innerHTML = "निदेशक";
        d2_name.innerHTML = "रोहन निगम";
        d2_des.innerHTML = "निदेशक";
        hr_name.innerHTML = "सुप्रिया निगम";
        hr_des.innerHTML = "निदेशक";
        f_fs.innerHTML = "महिला सुरक्षा गार्ड";
        f_ms.innerHTML = "पुरुष सुरक्षा गार्ड";
        f_cm.innerHTML = "नकदी प्रबंधन";
        f_es.innerHTML = "घटना सुरक्षा";
        f_os.innerHTML = "कार्यालय सुरक्षा";
        f_bs.innerHTML = "बिल्डिंग सुरक्षा गार्ड";
        f_is.innerHTML = "औद्योगिक सुरक्षा";
        f_rs.innerHTML = "खुदरा सुरक्षा";
        f_hs.innerHTML = "अस्पताल सुरक्षा";
        f_ps.innerHTML = "संपत्ति सुरक्षा";
        f_ss.innerHTML = "स्कूल सुरक्षा";
        f_cu.innerHTML = "संपर्क करें";
        f_ot.innerHTML = "हमारी टीम";
        f_au.innerHTML = "हमारे बारे में";
        f_intro.innerHTML = "परिचय";
        f_services.innerHTML = "सेवा";
        f_contact.innerHTML = "संपर्क";
        $(".popup").fadeOut(500);
        $(".cover").fadeOut(500);
    }
    // $(".popup, .cover").fadeOut(500);
}

function myFunction_1() {
    updateLanguageContent(languages_1.value);
}

function myFunction_2() {
    updateLanguageContent(languages_2.value);
}

$(document).ready(function () {
    setTimeout(function () {
        $(".popup").fadeIn(500);
        $(".cover").fadeTo(500, 0.5);
    }, 1500);
});
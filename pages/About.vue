<template>
    <div class="container py-3">
        <h1 class="text-capitalize text-center font-weight-bold">Meet Our Founder</h1>
        <div class="row my-2 container justify-content-center">
            <div class="col-12 text-dark">
                <p>
                    <strong>Sevanjali</strong> {{ $t('Foundation') }}
                </p>
                <p>
                    {{ $t('Directly') }}
                </p>
                <p>
                    {{ $t('Founder') }}
                </p>
            </div>
            <div class="col-12 offset-1">
                <div class="row">
                    <div class="col-lg-3 col-sm-6">
                        <div class="px-2">
                            <img alt="" src="/images/resources/founder1.jpg" class="w-100 rounded">
                            <p class="mt-3 text-center text-dark">{{ $t('DrFounder') }}</p>
                            <h3 class="text-center">{{ $t('FounderText') }}</h3>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div class="make-donation-two__single-img p-2">
                            <img alt="" src="/images/resources/founder2.jpg" class="w-100 rounded">
                            <p class="mt-3 text-center text-dark">{{ $t('CoFounder') }}</p>
                            <h3 class="text-center">{{ $t('CoFounderText') }}</h3>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div class="make-donation-two__single-img p-2">
                            <img alt="" src="/images/resources/Manish.jpeg" class="w-100 rounded">
                            <p class="mt-3 text-center text-dark">{{ $t('Manish') }}</p>
                            <h3 class="text-center">{{ $t('seniorAdviser') }}</h3>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div class="make-donation-two__single-img p-2">
                            <img alt="" src="/images/resources/Sammer.jpeg" class="w-100 rounded">
                            <p class="mt-3 text-center text-dark">{{ $t('Sameer') }}</p>
                            <h3 class="text-center">{{ $t('Member') }}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "About"
}
</script>

<i18n lang="yaml">
en:
    Foundation: "Foundation is an NGO registered under Ministry of Corporate Affairs \"CIN: U85300RJ2018NPL063332\" - \"
            License No : 113520 \" with establish, setup or run medical camps,healthcare institution, medical education objective."
    Directly: "It is directly benefiting to poor people and their families, through medical camp welfare projects on
        health in city , remote villages and slums across the country. Education is both the means as well as
        the end to a better life:"
    Founder: "the means because it empowers an individual to earn his/her livelihood and the end because it
        increases one's awareness on a range of issues – from healthcare to appropriate social behaviour to
        understanding one's rights – and in the process help him/her evolve as a better citizen."
    DrFounder: "Dr.kamlesh kumar Vaishnav"
    CoFounder: "Adv.Dinesh Sharma"
    FounderText: "Founder"
    CoFounderText: "Co-Founder"
    Manish: "Dr. Manish Sharma"
    seniorAdviser: "Senior Adviser"
    Sameer: "Dr. Sameer Sharma"
    Member: "Member"
hi:
    Foundation: "फाउंडेशन कॉर्पोरेट मामलों के मंत्रालय के तहत पंजीकृत एक गैर सरकारी संगठन है \"CIN: U85300RJ2018NPL063332\" - \" लाइसेंस संख्या: 113520 \"चिकित्सा शिविर,
            स्वास्थ्य संस्थान, चिकित्सा शिक्षा उद्देश्य की स्थापना, स्थापना या संचालन के साथ।"
    Directly: "इसका सीधा लाभ गरीब लोगों और उनके परिवारों को चिकित्सा शिविर कल्याण परियोजनाओं के माध्यम से मिल रहा है देश भर में शहर, दूरदराज के गांवों और मलिन बस्तियों में
        स्वास्थ्य। शिक्षा साधन भी है और एक बेहतर जीवन का अंत:"
    Founder: "साधन क्योंकि यह एक व्यक्ति को अपनी आजीविका कमाने के लिए सशक्त बनाता है और अंत क्योंकि यह
         स्वास्थ्य देखभाल से लेकर उचित सामाजिक व्यवहार तक कई मुद्दों पर जागरूकता बढ़ाता है
         अपने अधिकारों को समझना - और इस प्रक्रिया में उसे एक बेहतर नागरिक के रूप में विकसित होने में मदद करना।"
    DrFounder: "डॉ कमलेश कुमार वैष्णव"
    CoFounder: "एडवोकेट दिनेश शर्मा"
    FounderText: "संस्थापक"
    CoFounderText: "सह संस्थापक"
    Manish: "डॉ मनीष शर्मा"
    seniorAdviser: "वरिष्ठ सलाहकार"
    Sameer: "डॉ समीर शर्मा"
    Member: "सदस्य"
</i18n>

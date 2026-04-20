// Simple language switcher for ShareBite
class LanguageSwitcher {
    constructor() {
        this.currentLanguage = localStorage.getItem('ShareBite_language') || 'en';
        this.translations = {};
        this.loadTranslations();
    }

    loadTranslations() {
        // Translation objects
        this.translations = {
            en: {
                'nav.home': 'Home',
                'nav.features': 'How It Works',
                'nav.listings': 'Listings',
                'nav.about': 'About',
                'nav.login': 'Login',
                'nav.partner': 'Partner with us',
                'hero.title': 'Reduce Food Waste,',
                'hero.subtitle': 'Feed Communities',
                'hero.description': 'Connect restaurants and households with NGOs and volunteers to redistribute fresh leftover food and fight hunger while reducing waste.',
                'hero.donateFood': 'Donate Food',
                'hero.findFood': 'Find Food',
                'hero.meals': 'Meals Saved',
                'hero.donors': 'Active Donors',
                'hero.partners': 'NGO Partners',
                'features.title': 'How ShareBite Works',
                'features.subtitle': 'Simple steps to make a huge difference in your community.',
                'features.list': 'List Your Food',
                'features.listDesc': 'Restaurants and households can easily list fresh leftover food with details.',
                'features.connect': 'Connect & Coordinate',
                'features.connectDesc': 'Our platform connects donors with NGOs and volunteers instantly.',
                'features.feed': 'Feed Communities',
                'features.feedDesc': 'Collected food reaches those who need it most.',
                'gallery.title': 'Our Impact Gallery',
                'gallery.subtitle': 'Moments of kindness and community.',
                'gallery.distribution': 'Community Distribution',
                'gallery.distributionDesc': 'Over 500 meals served this weekend.',
                'gallery.harvest': 'Fresh Harvest',
                'gallery.harvestDesc': 'Local farms donating surplus vegetables.',
                'gallery.heroes': 'Volunteer Heroes',
                'gallery.heroesDesc': 'Our dedicated team sorting donations.',
                'gallery.viewAll': 'View All Stories',
                'about.title': 'About ShareBite',
                'about.description': 'ShareBite is a revolutionary platform designed to tackle food waste.',
                'about.join': 'Join Our Mission',
                'listings.title': 'Food Listings',
                'listings.subtitle': 'Available fresh food waiting to be collected',
                'listings.filterAll': 'All',
                'listings.filterRestaurant': 'Restaurant',
                'listings.filterHousehold': 'Household',
                'listings.filterBakery': 'Bakery',
                'listings.filterDietary': 'Dietary Filters',
                'listings.searchPlaceholder': 'Search location or food...',
                'listings.mapView': 'Map View',
                'listings.addListing': 'Add Listing',
                'listings.modalTitle': 'Add Food Listing',
                'listings.roleSwitch': 'Donor',
                'listings.form.foodType': 'Food Type',
                'listings.form.quantity': 'Quantity',
                'listings.form.category': 'Category',
                'listings.form.description': 'Description',
                'listings.form.freshUntil': 'Fresh Until',
                'listings.form.time': 'Time',
                'listings.form.location': 'Location',
                'listings.form.contact': 'Contact',
                'listings.form.addPhoto': 'Add Photo (Optional)',
                'listings.form.submit': 'Submit Listing',
                'listings.form.cancel': 'Cancel',
                'listings.form.next': 'Next',
                'listings.form.previous': 'Previous',
                'listings.emptyState': 'No food listings available right now 🍽️',
                'listings.emptyStateSubtext': 'Check back later!',
                'listings.noListingsFiltered': 'No listings match your filters',
                'footer.quickLinks': 'Quick Links',
                'footer.forDonors': 'For Donors',
                'footer.forCollectors': 'For Collectors',
                'footer.listFood': 'List Food',
                'footer.guidelines': 'Guidelines',
                'footer.trackImpact': 'Track Impact',
                'footer.findFood': 'Find Food',
                'footer.registerNgo': 'Register NGO',
                'footer.volunteerLogin': 'Volunteer Login',
                'footer.copyright': '© 2026 ShareBite. All rights reserved.',
                'footer.tagline': 'Making a difference, one meal at a time. Join us in the fight against food waste and hunger.',
                'footer.aboutUs': 'About Us',
            },
            hi: {
                'nav.home': 'होम',
                'nav.features': 'कैसे काम करता है',
                'nav.listings': 'सूचियां',
                'nav.about': 'परिचय',
                'nav.login': 'लॉगिन',
                'nav.partner': 'हमारे साथ भागीदार बनें',
                'hero.title': 'खाद्य अपशिष्ट को कम करें,',
                'hero.subtitle': 'समुदायों को खिलाएं',
                'hero.description': 'रेस्तरां और घरों को एनजीओ और स्वयंसेवकों से जोड़ें ताजा बचा हुआ भोजन वितरित करने के लिए।',
                'hero.donateFood': 'भोजन दान करें',
                'hero.findFood': 'भोजन खोजें',
                'hero.meals': 'बचाए गए भोजन',
                'hero.donors': 'सक्रिय दाता',
                'hero.partners': 'एनजीओ भागीदार',
                'features.title': 'ShareBite कैसे काम करता है',
                'features.subtitle': 'अपने समुदाय में बड़ा बदलाव लाने के लिए सरल कदम।',
                'features.list': 'अपना भोजन सूचीबद्ध करें',
                'features.listDesc': 'रेस्तरां और घर आसानी से ताजा बचा हुआ भोजन सूचीबद्ध कर सकते हैं।',
                'features.connect': 'कनेक्ट और समन्वय करें',
                'features.connectDesc': 'हमारा मंच दाताओं को एनजीओ और स्वयंसेवकों से तुरंत जोड़ता है।',
                'features.feed': 'समुदायों को खिलाएं',
                'features.feedDesc': 'एकत्रित भोजन उन लोगों तक पहुंचता है जिन्हें इसकी सबसे अधिक आवश्यकता है।',
                'gallery.title': 'हमारी प्रभाव गैलरी',
                'gallery.subtitle': 'दया और समुदाय के क्षण।',
                'gallery.distribution': 'सामुदायिक वितरण',
                'gallery.distributionDesc': 'इस सप्ताहांत को 500 से अधिक भोजन परोसा गया।',
                'gallery.harvest': 'ताजी फसल',
                'gallery.harvestDesc': 'स्थानीय खेत अतिरिक्त सब्जियां दान कर रहे हैं।',
                'gallery.heroes': 'स्वयंसेवक नायक',
                'gallery.heroesDesc': 'हमारी समर्पित टीम दान को छांट रही है।',
                'gallery.viewAll': 'सभी कहानियां देखें',
                'about.title': 'ShareBite के बारे में',
                'about.description': 'ShareBite एक क्रांतिकारी मंच है जो खाद्य अपशिष्ट से निपटने के लिए डिज़ाइन किया गया है।',
                'about.join': 'हमारे मिशन में शामिल हों',
                'listings.title': 'खाद्य सूची',
                'listings.subtitle': 'संग्रह के लिए उपलब्ध ताजा भोजन',
                'listings.filterAll': 'सभी',
                'listings.filterRestaurant': 'रेस्तरां',
                'listings.filterHousehold': 'घर',
                'listings.filterBakery': 'बेकरी',
                'listings.filterDietary': 'आहार संबंधी फिल्टर',
                'listings.searchPlaceholder': 'स्थान या भोजन खोजें...',
                'listings.mapView': 'नक्शा दृश्य',
                'listings.addListing': 'सूची जोड़ें',
                'listings.modalTitle': 'खाद्य सूची जोड़ें',
                'listings.roleSwitch': 'दाता',
                'listings.form.foodType': 'खाद्य प्रकार',
                'listings.form.quantity': 'मात्रा',
                'listings.form.category': 'श्रेणी',
                'listings.form.description': 'विवरण',
                'listings.form.freshUntil': 'ताजा तक',
                'listings.form.time': 'समय',
                'listings.form.location': 'स्थान',
                'listings.form.contact': 'संपर्क',
                'listings.form.addPhoto': 'फोटो जोड़ें (वैकल्पिक)',
                'listings.form.submit': 'सूची सबमिट करें',
                'listings.form.cancel': 'रद्द करें',
                'listings.form.next': 'आगे',
                'listings.form.previous': 'पिछला',
                'listings.emptyState': 'अभी कोई खाद्य सूची उपलब्ध नहीं है 🍽️',
                'listings.emptyStateSubtext': 'बाद में वापस आएं!',
                'listings.noListingsFiltered': 'आपके फ़िल्टर के अनुरूप कोई सूची नहीं',
                'footer.quickLinks': 'त्वरित लिंक',
                'footer.forDonors': 'दाताओं के लिए',
                'footer.forCollectors': 'संग्राहकों के लिए',
                'footer.listFood': 'भोजन सूचीबद्ध करें',
                'footer.guidelines': 'दिशानिर्देश',
                'footer.trackImpact': 'प्रभाव ट्रैक करें',
                'footer.findFood': 'भोजन खोजें',
                'footer.registerNgo': 'एनजीओ पंजीकरण करें',
                'footer.volunteerLogin': 'स्वयंसेवक लॉगिन',
                'footer.copyright': '© 2026 ShareBite। सर्वाधिकार सुरक्षित।',
                'footer.tagline': 'एक बार में एक भोजन बनाते हुए फर्क लाएं। खाद्य अपशिष्ट और भूख से लड़ने में हमारे साथ शामिल हों।',
                'footer.aboutUs': 'हमारे बारे में',
            },
            bn: {
                'nav.home': 'হোম',
                'nav.features': 'কীভাবে কাজ করে',
                'nav.listings': 'তালিকা',
                'nav.about': 'সম্পর্কে',
                'nav.login': 'লগইন',
                'nav.partner': 'আমাদের সাথে অংশীদার হন',
                'hero.title': 'খাদ্য বর্জ্য কমান,',
                'hero.subtitle': 'সম্প্রদায়কে খাওয়ান',
                'hero.description': 'রেস্তোরাঁ এবং পরিবারগুলিকে এনজিও এবং স্বেচ্ছাসেবকদের সাথে সংযুক্ত করুন।',
                'hero.donateFood': 'খাবার দান করুন',
                'hero.findFood': 'খাবার খুঁজুন',
                'hero.meals': 'বাঁচানো খাবার',
                'hero.donors': 'সক্রিয় দাতা',
                'hero.partners': 'এনজিও অংশীদার',
                'features.title': 'ShareBite কীভাবে কাজ করে',
                'features.subtitle': 'আপনার সম্প্রদায়ে বড় পার্থক্য তৈরি করার সহজ পদক্ষেপ।',
                'features.list': 'আপনার খাবার তালিকাভুক্ত করুন',
                'features.listDesc': 'রেস্তোরাঁ এবং পরিবারগুলি সহজেই তাজা বাকি খাবার তালিকাভুক্ত করতে পারে।',
                'features.connect': 'সংযোগ এবং সমন্বয় করুন',
                'features.connectDesc': 'আমাদের প্ল্যাটফর্ম দাতাদের এনজিও এবং স্বেচ্ছাসেবকদের সাথে তাৎক্ষণিকভাবে সংযুক্ત করে।',
                'features.feed': 'সম্প্রদায়কে খাওয়ান',
                'features.feedDesc': 'সংগৃহীত খাবার সেইসব মানুষের কাছে পৌঁছায় যারা এটি সবচেয়ে বেশি প্রয়োজন।',
                'gallery.title': 'আমাদের প্রভাব গ্যালারি',
                'gallery.subtitle': 'দয়া এবং সম্প্রদায়ের মুহূর্ত।',
                'gallery.distribution': 'সম্প্রদায় বিতরণ',
                'gallery.distributionDesc': 'এই সপ্তাহে 500+ খাবার পরিবেশন করা হয়েছে।',
                'gallery.harvest': 'তাজা ফসল',
                'gallery.harvestDesc': 'স্থানীয় খামার অতিরিক্ত সবজি দান করছে।',
                'gallery.heroes': 'স্বেচ্ছাসেবক নায়করা',
                'gallery.heroesDesc': 'আমাদের নিবেদিত দল দান সাজাচ্ছে।',
                'gallery.viewAll': 'সমস্ত গল্প দেখুন',
                'about.title': 'ShareBite সম্পর্কে',
                'about.description': 'ShareBite একটি বিপ্লবী প্ল্যাটফর্ম যা খাদ্য বর্জ্য মোকাবেলা করতে ডিজাইন করা হয়েছে।',
                'about.join': 'আমাদের মিশনে যোগ দিন',
                'listings.title': 'খাদ্য তালিকা',
                'listings.subtitle': 'সংগ্রহের জন্য উপলব্ধ তাজা খাবার',
                'listings.filterAll': 'সব',
                'listings.filterRestaurant': 'রেস্তোরাঁ',
                'listings.filterHousehold': 'পরিবার',
                'listings.filterBakery': 'বেকারি',
                'listings.filterDietary': 'খাদ্যতালিকাগত ফিল্টার',
                'listings.searchPlaceholder': 'অবস্থান বা খাবার অনুসন্ধান করুন...',
                'listings.mapView': 'মানচিত্র দৃশ্য',
                'listings.addListing': 'তালিকা যোগ করুন',
                'listings.modalTitle': 'খাদ্য তালিকা যোগ করুন',
                'listings.roleSwitch': 'দাতা',
                'listings.form.foodType': 'খাদ্য প্রকার',
                'listings.form.quantity': 'পরিমাণ',
                'listings.form.category': 'শ্রেণী',
                'listings.form.description': 'বিবরণ',
                'listings.form.freshUntil': 'তাজা পর্যন্ত',
                'listings.form.time': 'সময়',
                'listings.form.location': 'অবস্থান',
                'listings.form.contact': 'যোগাযোগ',
                'listings.form.addPhoto': 'ফটো যোগ করুন (ঐচ্ছিক)',
                'listings.form.submit': 'তালিকা জমা দিন',
                'listings.form.cancel': 'বাতিল করুন',
                'listings.form.next': 'পরবর্তী',
                'listings.form.previous': 'পূর্ববর্তী',
                'listings.emptyState': 'এখন কোন খাদ্য তালিকা উপলব্ধ নেই 🍽️',
                'listings.emptyStateSubtext': 'পরে ফিরে আসুন!',
                'listings.noListingsFiltered': 'আপনার ফিল্টার সঙ্গে কোন তালিকা মেলে না',
                'footer.quickLinks': 'দ্রুত লিংক',
                'footer.forDonors': 'দাতাদের জন্য',
                'footer.forCollectors': 'সংগ্রাহকদের জন্য',
                'footer.listFood': 'খাবার তালিকাভুক্ত করুন',
                'footer.guidelines': 'নির্দেশিকা',
                'footer.trackImpact': 'প্রভাব ট্র্যাক করুন',
                'footer.findFood': 'খাবার খুঁজুন',
                'footer.registerNgo': 'এনজিও নিবন্ধন করুন',
                'footer.volunteerLogin': 'স্বেচ্ছাসেবক লগইন',
                'footer.copyright': '© 2026 ShareBite। সর্বাধিকার সংরক্ষিত।',
                'footer.tagline': 'এক বার খাবার সময় পার্থক্য তৈরি করুন। খাদ্য বর্জ্য এবং ক্ষুধার বিরুদ্ধে লড়াইয়ে আমাদের সাথে যোগ দিন।',
                'footer.aboutUs': 'আমাদের সম্পর্কে',
            },
            mr: {
                'nav.home': 'होम',
                'nav.features': 'कसे काम करते',
                'nav.listings': 'यादी',
                'nav.about': 'बद्दल',
                'nav.login': 'प्रवेश करा',
                'nav.partner': 'आमच्या सह भागीदार व्हा',
                'hero.title': 'खाद्य कचरा कमी करा,',
                'hero.subtitle': 'समाज पोषवा',
                'hero.description': 'रेस्तोरांत आणि घरांना एनजीओ आणि स्वयंसेवकांशी जोडा ताजे उरलेले अन्न पुनर्वितरित करण्यासाठी।',
                'hero.donateFood': 'अन्न दान करा',
                'hero.findFood': 'अन्न शोधा',
                'hero.meals': 'वाचवलेले जेवण',
                'hero.donors': 'सक्रिय दानदार',
                'hero.partners': 'एनजीओ भागीदार',
                'features.title': 'ShareBite कसे काम करते',
                'features.subtitle': 'तुमच्या समाजात मोठा फरक करण्यासाठी सोपे पायरी।',
                'features.list': 'आपले अन्न यादीबद्ध करा',
                'features.listDesc': 'रेस्तोरांत आणि घर सहजपणे ताजे उरलेले अन्न यादीबद्ध करू शकतात।',
                'features.connect': 'कनेक्ट आणि समन्वय करा',
                'features.connectDesc': 'आमचा मंच दातांना एनजीओ आणि स्वयंसेवकांशी तात्काळ जोडतो।',
                'features.feed': 'समाज पोषवा',
                'features.feedDesc': 'एकत्रित अन्न त्या लोकांपर्यंत पोहोचते जांना सर्वाधिक आवश्यकता आहे।',
                'gallery.title': 'आमचा प्रभाव गॅलरी',
                'gallery.subtitle': 'दया आणि समाजाचे क्षण।',
                'gallery.distribution': 'सामुदायिक वितरण',
                'gallery.distributionDesc': 'या सप्ताहांत 500+ जेवण परोसले गेले।',
                'gallery.harvest': 'ताजी पीक',
                'gallery.harvestDesc': 'स्थानिक शेतकरी अतिरिक्त भाजीपाला दान करत आहेत।',
                'gallery.heroes': 'स्वयंसेवक नायक',
                'gallery.heroesDesc': 'आमची समर्पित टीम दान सॉर्ट करत आहे।',
                'gallery.viewAll': 'सर्व कहानी पहा',
                'about.title': 'ShareBite बद्दल',
                'about.description': 'ShareBite हा एक क्रांतिकारी मंच आहे जो खाद्य कचरा कमी करण्यासाठी डिजाइन केलेला आहे।',
                'about.join': 'आमच्या मिशनात सामील व्हा',
                'listings.title': 'अन्न यादी',
                'listings.subtitle': 'संग्रहासाठी उपलब्ध ताজे अन्न',
                'listings.filterAll': 'सर्व',
                'listings.filterRestaurant': 'रेस्तोरांत',
                'listings.filterHousehold': 'घरगुती',
                'listings.filterBakery': 'बेकरी',
                'listings.filterDietary': 'आहार संबंधী फिल्टर',
                'listings.searchPlaceholder': 'स्थान किंवा अन्न शोधा...',
                'listings.mapView': 'नकाशा दृश्य',
                'listings.addListing': 'यादी जोडा',
                'listings.modalTitle': 'अन्न यादी जोडा',
                'listings.roleSwitch': 'दानकर्ता',
                'listings.form.foodType': 'अन्नाचे प्रकार',
                'listings.form.quantity': 'प्रमाण',
                'listings.form.category': 'श्रेणी',
                'listings.form.description': 'वर्णन',
                'listings.form.freshUntil': 'ताजे पर्यंत',
                'listings.form.time': 'वेळ',
                'listings.form.location': 'स्थान',
                'listings.form.contact': 'संपर्क',
                'listings.form.addPhoto': 'फोटो जोडा (वैकल्पिक)',
                'listings.form.submit': 'यादी सबमिट करा',
                'listings.form.cancel': 'रद्द करा',
                'listings.form.next': 'पुढील',
                'listings.form.previous': 'मागील',
                'listings.emptyState': 'अभी कोणत्याही खाद्य सूची उपलब्ध नाही 🍽️',
                'listings.emptyStateSubtext': 'नंतर परत या!',
                'listings.noListingsFiltered': 'आपल्या फिल्टर सह कोणत्याही सूची जुळत नाही',
                'footer.quickLinks': 'द्रुत लिंक',
                'footer.forDonors': 'दातांसाठी',
                'footer.forCollectors': 'संग्रहकांसाठी',
                'footer.listFood': 'अन्न यादीबद्ध करा',
                'footer.guidelines': 'मार्गदर्शन',
                'footer.trackImpact': 'प्रभाव ट्रॅक करा',
                'footer.findFood': 'अन्न शोधा',
                'footer.registerNgo': 'एनजीओ नोंदणी करा',
                'footer.volunteerLogin': 'स्वयंसेवक प्रवेश',
                'footer.copyright': '© 2026 ShareBite। सर्व हक्क राखीव।',
                'footer.tagline': 'एक वेळी एक जेवण काढून मोठा फरक करा। खाद्य कचरा आणि भूकेविरुद्ध लढाईत आमच्या सह सामील व्हा।',
                'footer.aboutUs': 'आमच्या बद्दल',
            },
            ta: {
                'nav.home': 'முகப்பு',
                'nav.features': 'எவ்வாறு செயல்படுகிறது',
                'nav.listings': 'பட்டியல்',
                'nav.about': 'எச்சரிக்கை',
                'nav.login': 'உள்நுழைக',
                'nav.partner': 'எங்களுடன் பங்குதாரர்',
                'hero.title': 'உணவு கழிவுகளைக் குறையுங்கள்,',
                'hero.subtitle': 'சமூகங்களை வளர்ப்பிக்கவும்',
                'hero.description': 'உணவகங்கள் மற்றும் குடியிருப்புகளை এনজিও முடிவு்டன் இணைக்கவும்.',
                'hero.donateFood': 'உணவு வழங்கவும்',
                'hero.findFood': 'உணவு கண்டுபிடிக்கவும்',
                'hero.meals': 'காப்பாற்றப்பட்ட உணவுகள்',
                'hero.donors': 'சற்றுக்கூடிய தாதையர்',
                'hero.partners': 'NGO பங்குதாரர்கள்',
                'features.title': 'ShareBite எவ்வாறு செயல்படுகிறது',
                'features.subtitle': 'உங்கள் சமூகத்தில் பெரிய வித்தியாசம் ஏற்படுத்த எளிய வழிமுறைகள்।',
                'features.list': 'உங்கள் உணவு பட்டியலிடவும்',
                'features.listDesc': 'உணவகங்கள் மற்றும் வீடுகள் எளிதாக புதிய எஞ்சிய உணவு பட்டியலிடலாம்।',
                'features.connect': 'இணைக்க மற்றும் ஒருங்கிணைக்க',
                'features.connectDesc': 'எங்கள் தளம் தாதாக்கள் மற்றும் தொண்டு நிறுவனங்களுடன் உடனடியாக இணைக்கிறது।',
                'features.feed': 'சமூகங்களை வளர்ப்பிக்கவும்',
                'features.feedDesc': 'சேகரிக்கப்பட்ட உணவு அதை மிகவும் தேவைப்படுபவர்களிடம் பৌঁছாய்।',
                'gallery.title': 'எங்கள் தாக்க கேலரி',
                'gallery.subtitle': 'கருணை மற்றும் சமூகத்தின் தருணங்கள்.',
                'gallery.distribution': 'சமூக விநியோகம்',
                'gallery.distributionDesc': 'இந்த வாரம் 500+ உணவுகள் பரிமாறப்பட்டுள்ளன.',
                'gallery.harvest': 'புதிய மணை',
                'gallery.harvestDesc': 'உள்ளூர் விவசாயிகள் அதிரிக்த காய்கறிகள் தான செய்யக்கூடியவை.',
                'gallery.heroes': 'தொண்டு நிறுவன நாயகர்கள்',
                'gallery.heroesDesc': 'எங்கள் பணிபுரிக்கும் குழு தான செய்ய வரிசைப்படுத்திக்கொண்டிருக்கிறது.',
                'gallery.viewAll': 'அனைத்து கடிகார பார்க்கவும்',
                'about.title': 'ShareBite பற்றி',
                'about.description': 'ShareBite என்பது உணவு கழிவுகளை எதிர்கொள்ள ஒரு புரட்சிகர மंच।',
                'about.join': 'எங்கள் மிஷனுக்கு சேர்ந்துகொள்ளுங்கள்',
                'listings.title': 'உணவு பட்டியல்',
                'listings.subtitle': 'சேகரிப்பதற்கான கிடைக்கும் புதிய உணவு',
                'listings.filterAll': 'அனைத்தும்',
                'listings.filterRestaurant': 'உணவகம்',
                'listings.filterHousehold': 'வீட்டு',
                'listings.filterBakery': 'பேக்கரி',
                'listings.filterDietary': 'உணவு வடிப்பு',
                'listings.searchPlaceholder': 'இடம் அல்லது உணவு தேடவும்...',
                'listings.mapView': 'मानचित्र दृश्य',
                'listings.addListing': 'பட்டியல் சேர்க்கவும்',
                'listings.modalTitle': 'உணவு பட்டியல் சேர்க்கவும்',
                'listings.roleSwitch': 'தාता',
                'listings.form.foodType': 'உணவு வகை',
                'listings.form.quantity': 'அளவு',
                'listings.form.category': 'பிரிவு',
                'listings.form.description': 'விளக்கம்',
                'listings.form.freshUntil': 'புதியது வரை',
                'listings.form.time': 'நேரம்',
                'listings.form.location': 'இடம்',
                'listings.form.contact': 'தொடர்புக்கு',
                'listings.form.addPhoto': 'ফটो சேர்க்கவும் (விரும்பினால்)',
                'listings.form.submit': 'பட்டியல் சமர்পிக்கவும்',
                'listings.form.cancel': 'ரத்து செய்யவும்',
                'listings.form.next': 'அடுத்தது',
                'listings.form.previous': 'முந்தையது',
                'footer.quickLinks': 'வேகமான இணைப்புகள்',
                'footer.forDonors': 'தாதாக்கள்டைக்கு',
                'footer.forCollectors': 'சேகரிப்பவர்களுக்கு',
                'footer.listFood': 'உணவு பட்டியலிடவும்',
                'footer.guidelines': 'வழிகாட்டுதல்கள்',
                'footer.trackImpact': 'தாக்கத்தை ट్రॅక్ చేయండి',
                'footer.findFood': 'உணவு கண்டுபிடிக்கவும்',
                'footer.registerNgo': 'NGO பதிவு செய்யவும்',
                'footer.volunteerLogin': 'தொண்டு உள்நுழைவு',
                'footer.copyright': '© 2026 ShareBite। సభకు హక్కులు।',
                'footer.tagline': 'ஒரு இரு கட்ட உணவு மூலம் பெரிய வித்தியாசம் ஏற்படுத்துங்கள்। உணவு கழிவுகள் மற்றும் பசிக்கு எதிரான எங்களை் சேர்க்கவும்।',
                'footer.aboutUs': 'எங்கள் பற்றி',
            },
            te: {
                'nav.home': 'హోమ్',
                'nav.features': 'ఎలా పనిచేస్తుంది',
                'nav.listings': 'జాబితాలు',
                'nav.about': 'గురించి',
                'nav.login': 'లాగిన్',
                'nav.partner': 'మమ్మల్ని నుండి భాగస్వామి',
                'hero.title': 'ఆహార వ్యర్థాలను తగ్గించండి,',
                'hero.subtitle': 'సమాజాలను దోషపూరితం చేయండి',
                'hero.description': 'డైనర్‌లు మరియు గృహాలను NGO‌లకు కనెక్ట్ చేయండి.',
                'hero.donateFood': 'ఆహారాన్ని విరాళం ఇవ్వండి',
                'hero.findFood': 'ఆహారాన్ని కనుగొనండి',
                'hero.meals': 'సేవ్ చేసిన భోజనాలు',
                'hero.donors': 'సక్రియ దాతలు',
                'hero.partners': 'NGO భాగస్వాములు',
                'features.title': 'ShareBite ఎలా పనిచేస్తుంది',
                'features.subtitle': 'మీ సమాజంలో పెద్ద తేడా చేయడానికి సులభ దశలు.',
                'features.list': 'మీ ఆహారాన్ని జాబితా చేయండి',
                'features.listDesc': 'డైనర్‌లు మరియు గృహాలు సులభంగా తాజా మిగిలిన ఆహారాన్ని జాబితా చేయవచ్చు.',
                'features.connect': 'కనెక్ట్ మరియు సమన్వయం',
                'features.connectDesc': 'మా ప్లాట్‌ఫారమ్ దాతలను NGO‌లకు తక్షణ సమయానికి కనెక్ట్ చేస్తుంది.',
                'features.feed': 'సమాజాలను దోషపూరితం చేయండి',
                'features.feedDesc': 'సేకరించిన ఆహారం దానిని సమస్చేతిలో పెద్దలకు చేరుకుంటుంది.',
                'gallery.title': 'మా ప్రభావ గ్యాలరీ',
                'gallery.subtitle': 'దయ మరియు సమాజం యొక్క క్షణాలు.',
                'gallery.distribution': 'సమాజ పంపిణీ',
                'gallery.distributionDesc': 'ఈ వారం 500+ భోజనాలు సేవ చేయబడ్డాయి.',
                'gallery.harvest': 'తాజా పంట',
                'gallery.harvestDesc': 'స్థానిక రైతులు అతిరిక్త కూరగాయలను దానం చేస్తున్నారు.',
                'gallery.heroes': 'స్వచ్ఛంద నాయకులు',
                'gallery.heroesDesc': 'మా నిబద్ధ బృందం దానాలను సాధారణీకరిస్తోంది.',
                'gallery.viewAll': 'అన్ని కథలను చూడండి',
                'about.title': 'ShareBite గురించి',
                'about.description': 'ShareBite అనేది ఆహార వ్యర్థాలను ఎదుర్కోవటానికి ఒక విప్లవ ప్లాట్‌ఫారమ్.',
                'about.join': 'మా మిషనలో చేరండి',
                'listings.title': 'ఆహార జాబితాలు',
                'listings.subtitle': 'సేకరణ కోసం లభ్యమైన తాజా ఆహారం',
                'listings.filterAll': 'అందరూ',
                'listings.filterRestaurant': 'రెస్టুరెంట్',
                'listings.filterHousehold': 'గృహం',
                'listings.filterBakery': 'బేకరీ',
                'listings.filterDietary': 'ఆహార సూచిక',
                'listings.searchPlaceholder': 'స్థానం లేదా ఆహారం వెతకండి...',
                'listings.mapView': 'మ్యాప్ వీక్ష్యం',
                'listings.addListing': 'జాబితా జోడించండి',
                'listings.modalTitle': 'ఆహార జాబితా జోడించండి',
                'listings.roleSwitch': 'దాతలు',
                'listings.form.foodType': 'ఆహారం రకం',
                'listings.form.quantity': 'పరిమాణం',
                'listings.form.category': 'వర్గం',
                'listings.form.description': 'వర్ణన',
                'listings.form.freshUntil': 'సరళమైనది వరకు',
                'listings.form.time': 'సమయం',
                'listings.form.location': 'స్థానం',
                'listings.form.contact': 'సంప్రదించండి',
                'listings.form.addPhoto': 'ఫోటో జోడించండి (ఐచ్ఛికం)',
                'listings.form.submit': 'జాబితా సమర్పించండి',
                'listings.form.cancel': 'రద్దు చేయండి',
                'listings.form.next': 'తరువాతి',
                'listings.form.previous': 'మునుపటి',
                'footer.quickLinks': 'త్వరిత లింకులు',
                'footer.forDonors': 'దాతల కోసం',
                'footer.forCollectors': 'సంగ్రాహకుల కోసం',
                'footer.listFood': 'ఆహారాన్ని జాబితా చేయండి',
                'footer.guidelines': 'మార్గదర్శకాలు',
                'footer.trackImpact': 'ప్రభావాన్ని ట్రాక్ చేయండి',
                'footer.findFood': 'ఆహారాన్ని కనుగొనండి',
                'footer.registerNgo': 'NGO నమోదు చేయండి',
                'footer.volunteerLogin': 'స్వచ్ఛంద లాగిన్',
                'footer.copyright': '© 2026 ShareBite | సభకు హక్కులు।',
                'footer.tagline': 'ఒక్క భోజనం సమయానికి పెద్ద తేడా చేయండి. ఆహార వ్యర్థాలు మరియు ఆకలికి వ్యతిరేకంగా సంగ్రామంలో మమ్మల్ని చేరండి.',
                'footer.aboutUs': 'మన గురించి',
            },
            gu: {
                'nav.home': 'હોમ',
                'nav.features': 'કેવી રીતે કામ કરે છે',
                'nav.listings': 'યાદીઓ',
                'nav.about': 'વિશે',
                'nav.login': 'લૉગઇન',
                'nav.partner': 'અમારી સાથે ભાગીદાર',
                'hero.title': 'ખાદ્ય કચરો ઓછો કરો,',
                'hero.subtitle': 'સમુદાયોને ખવડાવો',
                'hero.description': 'રેસ્તોરાં અને ઘરોને NGOને જોડો તાજા બાકી ખાધ્યને પુનર્વિતરણ કરવા.',
                'hero.donateFood': 'ખાધ્ય દાન કરો',
                'hero.findFood': 'ખાધ્ય શોધો',
                'hero.meals': 'બચાયેલ ભોજન',
                'hero.donors': 'સક્રિય દાતા',
                'hero.partners': 'NGO ભાગીદારો',
                'features.title': 'ShareBite કેવી રીતે કામ કરે છે',
                'features.subtitle': 'તમારા સમુદાયમાં મોટો તફાવત આણવા માટે સહેલાં પગલાં।',
                'features.list': 'તમારું ખાધ્ય યાદીમાં આમંત્રણ આપો',
                'features.listDesc': 'રેસ્તોરાં અને ઘર સહેલાઈથી તાજા બાકી ખાધ્ય યાદીમાં આમંત્રણ આપી શકે છે.',
                'features.connect': 'જોડો અને સમન્વય કરો',
                'features.connectDesc': 'અમારો પ્લેટફોર્મ દાતાઓને NGOને તાત્કાલિક જોડે છે.',
                'features.feed': 'સમુદાયોને ખવડાવો',
                'features.feedDesc': 'એકત્રિત ખાધ્ય તેઓ પાસે પહોંચે કે જેણે તેની સૌથી વધુ જરૂર છે.',
                'gallery.title': 'આપણો અસર ગેલેરી',
                'gallery.subtitle': 'દયા અને સમુદાયના ક્ષણો.',
                'gallery.distribution': 'સમુદાય વિતરણ',
                'gallery.distributionDesc': 'આ અઠવાડિયે 500+ ભોજન પરોસવામાં આવ્યું હતું.',
                'gallery.harvest': 'તાજી ફસલ',
                'gallery.harvestDesc': 'સ્થાનિક ખેતરો વધારાના શાકભાજી દાન કરી રહ્યાં છે.',
                'gallery.heroes': 'સ્વયંસેવક હીરો',
                'gallery.heroesDesc': 'આમણ નિષ્ઠાવાન ટીમ દાતાઓને સૉર્ટ કરી રહ્યાં છે.',
                'gallery.viewAll': 'તમામ વાર્તાઓ જુઓ',
                'about.title': 'ShareBite વિશે',
                'about.description': 'ShareBite એક ક્રાંતિકારી પ્લેટફોર્મ છે જે ખાદ્ય કચરો સામે લડવા માટે ડિઝાઇન કરાયેલ છે।',
                'about.join': 'આપણો મિશન જોડાવો',
                'listings.title': 'ખાધ્ય યાદી',
                'listings.subtitle': 'સંગ્રહ માટે ઉપલબ્ધ તાજા ખાધ્ય',
                'listings.filterAll': 'બધુ',
                'listings.filterRestaurant': 'રેસ્તોરાં',
                'listings.filterHousehold': 'ઘર',
                'listings.filterBakery': 'બેકરી',
                'listings.filterDietary': 'આહાર ફિલ્ટર',
                'listings.searchPlaceholder': 'સ્થાન અથવા ખાધ્ય શોધો...',
                'listings.mapView': 'નકશો દૃશ્ય',
                'listings.addListing': 'યાદી ઉમેરો',
                'listings.modalTitle': 'ખાધ્ય યાદી ઉમેરો',
                'listings.roleSwitch': 'દાતા',
                'listings.form.foodType': 'ખાધ્ય પ્રકાર',
                'listings.form.quantity': 'જથ્થો',
                'listings.form.category': 'કેટેગરી',
                'listings.form.description': 'વર્ણન',
                'listings.form.freshUntil': 'તાજું સુધી',
                'listings.form.time': 'સમય',
                'listings.form.location': 'સ્થાન',
                'listings.form.contact': 'સંપર્ક',
                'listings.form.addPhoto': 'ફોટો ઉમેરો (વૈકલ્પિક)',
                'listings.form.submit': 'યાદી સબમિટ કરો',
                'listings.form.cancel': 'રદ કરો',
                'listings.form.next': 'આગલું',
                'listings.form.previous': 'પુર્વમાં',
                'footer.quickLinks': 'ઝડપી લિંક્સ',
                'footer.forDonors': 'દાતા માટે',
                'footer.forCollectors': 'સંગ્રહકર્તા માટે',
                'footer.listFood': 'ખાધ્ય યાદીમાં આમંત્રણ આપો',
                'footer.guidelines': 'માર્ગદર્શન',
                'footer.trackImpact': 'અસર ટ્રેક કરો',
                'footer.findFood': 'ખાધ્ય શોધો',
                'footer.registerNgo': 'NGO રજીસ્ટર કરો',
                'footer.volunteerLogin': 'સ્વયંસેવક લૉગઇન',
                'footer.copyright': '© 2026 ShareBite. તમામ અધિકારો આરક્ષિત.',
                'footer.tagline': 'એક વખતે એક ભોજન દ્વારા મોટો તફાવત આણો. ખાદ્ય કચરો અને ભૂખ સામે લડાઈમાં આપણી સાથે જોડાવો.',
                'footer.aboutUs': 'આપણા વિશે',
            }
        };
    }

    setLanguage(lang) {
        if (this.translations[lang]) {
            this.currentLanguage = lang;
            localStorage.setItem('ShareBite_language', lang);
            this.applyTranslations();
            
            // If we're on the foodlisting page and the foodListingManager instance exists, re-render
            if (window.foodListingManager && typeof window.foodListingManager.renderFoodListings === 'function') {
                window.foodListingManager.renderFoodListings();
            }
            
            console.log('✅ Language switched to:', lang);
            return true;
        }
        return false;
    }

    getTranslation(key) {
        return this.translations[this.currentLanguage]?.[key] || this.translations['en']?.[key] || key;
    }

    applyTranslations() {
        // Direct translation of common elements
        const translations = this.translations[this.currentLanguage];
        
        // Navbar translations
        const navLinks = document.querySelectorAll('.nav-menu .nav-link');
        if (navLinks.length >= 4) {
            navLinks[0].textContent = translations['nav.home'];
            navLinks[1].textContent = translations['nav.features'];
            navLinks[2].textContent = translations['nav.listings'];
            navLinks[3].textContent = translations['nav.about'];
        }
        
        // Login and Partner buttons
        const loginBtn = document.querySelector('.login-btn.login-outline');
        const partnerBtn = document.querySelector('.login-btn.login-primary');
        if (loginBtn) loginBtn.textContent = translations['nav.login'];
        if (partnerBtn) partnerBtn.textContent = translations['nav.partner'];
        
        // Hero section
        const heroTitle = document.querySelector('h1.hero-title');
        const heroSubtitle = document.querySelector('.gradient-text');
        const heroDesc = document.querySelector('.hero-description');
        const donateBtn = document.getElementById('donateFood');
        const findBtn = document.getElementById('findFood');
        
        if (heroTitle) {
            heroTitle.innerHTML = translations['hero.title'] + '<br /><span class="gradient-text">' + translations['hero.subtitle'] + '</span>';
        }
        if (heroDesc) heroDesc.textContent = translations['hero.description'];
        if (donateBtn) donateBtn.innerHTML = '<i class="fas fa-heart"></i> ' + translations['hero.donateFood'];
        if (findBtn) findBtn.innerHTML = '<i class="fas fa-search"></i> ' + translations['hero.findFood'];
        
        // Hero stats
        const stats = document.querySelectorAll('.stat-number');
        const statLabels = document.querySelectorAll('.stat-label');
        if (statLabels.length >= 3) {
            statLabels[0].textContent = translations['hero.meals'];
            statLabels[1].textContent = translations['hero.donors'];
            statLabels[2].textContent = translations['hero.partners'];
        }
        
        // Features section
        const featureTitle = document.querySelector('.features .section-title');
        const featureSubtitle = document.querySelector('.features .section-subtitle');
        if (featureTitle) featureTitle.textContent = translations['features.title'];
        if (featureSubtitle) featureSubtitle.textContent = translations['features.subtitle'];
        
        const featureCards = document.querySelectorAll('.feature-card');
        if (featureCards.length >= 3) {
            featureCards[0].querySelector('h3').textContent = translations['features.list'];
            featureCards[0].querySelector('p').textContent = translations['features.listDesc'];
            featureCards[1].querySelector('h3').textContent = translations['features.connect'];
            featureCards[1].querySelector('p').textContent = translations['features.connectDesc'];
            featureCards[2].querySelector('h3').textContent = translations['features.feed'];
            featureCards[2].querySelector('p').textContent = translations['features.feedDesc'];
        }
        
        // Gallery section
        const galleryTitle = document.querySelector('#gallery .section-title');
        const gallerySubtitle = document.querySelector('#gallery .section-subtitle');
        if (galleryTitle) galleryTitle.textContent = translations['gallery.title'];
        if (gallerySubtitle) gallerySubtitle.textContent = translations['gallery.subtitle'];
        
        const foodCards = document.querySelectorAll('.food-card');
        if (foodCards.length >= 3) {
            foodCards[0].querySelector('.food-title').textContent = translations['gallery.distribution'];
            foodCards[0].querySelector('.text-muted').textContent = translations['gallery.distributionDesc'];
            foodCards[1].querySelector('.food-title').textContent = translations['gallery.harvest'];
            foodCards[1].querySelector('.text-muted').textContent = translations['gallery.harvestDesc'];
            foodCards[2].querySelector('.food-title').textContent = translations['gallery.heroes'];
            foodCards[2].querySelector('.text-muted').textContent = translations['gallery.heroesDesc'];
        }
        
        // Gallery "View All Stories" button
        const viewAllStoriesBtn = document.querySelector('.text-center .btn-redirect');
        if (viewAllStoriesBtn) viewAllStoriesBtn.textContent = translations['gallery.viewAll'];
        
        // About section
        const aboutTitle = document.querySelector('#about .section-title');
        const aboutDesc = document.querySelector('#about .hero-description');
        if (aboutTitle) aboutTitle.textContent = translations['about.title'];
        if (aboutDesc) aboutDesc.textContent = translations['about.description'];
        
        // Join Our Mission button in About section
        const joinMissionBtns = document.querySelectorAll('#about .btn-redirect');
        if (joinMissionBtns.length > 0) {
            joinMissionBtns[0].textContent = translations['about.join'];
        }
        
        // Footer section
        const footerDivs = document.querySelectorAll('.footer-grid > div');
        if (footerDivs.length >= 4) {
            // Quick Links section
            let divIndex = 1;
            if (footerDivs[divIndex]?.querySelector('h4')) {
                footerDivs[divIndex].querySelector('h4').textContent = translations['footer.quickLinks'];
                const quickLinks = footerDivs[divIndex].querySelectorAll('a');
                if (quickLinks.length >= 4) {
                    quickLinks[0].textContent = translations['nav.home'];
                    quickLinks[1].textContent = translations['nav.features'];
                    quickLinks[2].textContent = translations['nav.listings'];
                    quickLinks[3].textContent = translations['footer.aboutUs'];  // Use footer.aboutUs instead of nav.about
                }
            }
            
            // For Donors section
            divIndex = 2;
            if (footerDivs[divIndex]?.querySelector('h4')) {
                footerDivs[divIndex].querySelector('h4').textContent = translations['footer.forDonors'];
                const donorLinks = footerDivs[divIndex].querySelectorAll('a');
                if (donorLinks.length >= 3) {
                    donorLinks[0].textContent = translations['footer.listFood'];
                    donorLinks[1].textContent = translations['footer.guidelines'];
                    donorLinks[2].textContent = translations['footer.trackImpact'];
                }
            }
            
            // For Collectors section
            divIndex = 3;
            if (footerDivs[divIndex]?.querySelector('h4')) {
                footerDivs[divIndex].querySelector('h4').textContent = translations['footer.forCollectors'];
                const collectorLinks = footerDivs[divIndex].querySelectorAll('a');
                if (collectorLinks.length >= 3) {
                    collectorLinks[0].textContent = translations['footer.findFood'];
                    collectorLinks[1].textContent = translations['footer.registerNgo'];
                    collectorLinks[2].textContent = translations['footer.volunteerLogin'];
                }
            }
        }
        
        // Foodlisting page translations
        const listingsTitle = document.querySelector('#listings .section-title');
        const listingsSubtitle = document.querySelector('#listings .section-subtitle');
        if (listingsTitle) listingsTitle.textContent = translations['listings.title'];
        if (listingsSubtitle) listingsSubtitle.textContent = translations['listings.subtitle'];
        
        // Filter buttons
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            const filterText = btn.getAttribute('data-filter');
            if (filterText === 'all') btn.textContent = translations['listings.filterAll'];
            else if (filterText === 'restaurant') btn.textContent = translations['listings.filterRestaurant'];
            else if (filterText === 'household') btn.textContent = translations['listings.filterHousehold'];
            else if (filterText === 'bakery') btn.textContent = translations['listings.filterBakery'];
        });
        
        // Dietary Filters button
        const dietaryFilterBtn = document.getElementById('dietary-filter-btn');
        if (dietaryFilterBtn) {
            dietaryFilterBtn.querySelector('span').textContent = translations['listings.filterDietary'];
        }
        
        // Search box placeholder
        const searchInput = document.querySelector('.search-box input');
        if (searchInput) searchInput.placeholder = translations['listings.searchPlaceholder'];
        
        // Map View and Add Listing buttons
        const mapViewBtn = document.querySelector('.view-map-btn');
        const addListingBtn = document.getElementById('addListingBtn');
        if (mapViewBtn) mapViewBtn.innerHTML = '<i class="fas fa-map-marked-alt" style="color: var(--primary);"></i> ' + translations['listings.mapView'];
        if (addListingBtn) addListingBtn.innerHTML = '<i class="fas fa-plus"></i> ' + translations['listings.addListing'];
        
        // Modal title
        const modalHeader = document.querySelector('.modal-header h3');
        if (modalHeader) modalHeader.textContent = translations['listings.modalTitle'];
        
        // Role switch text
        const currentRoleSpan = document.getElementById('currentRole');
        if (currentRoleSpan) currentRoleSpan.textContent = translations['listings.roleSwitch'];
        
        // Login button in foodlisting page (update only if it doesn't have the special classes from index.html)
        const foodListingLoginBtn = document.querySelector('.login-btn:not(.login-primary):not(.login-outline)');
        if (foodListingLoginBtn) foodListingLoginBtn.textContent = translations['nav.login'];
        
        // Footer copyright
        const copyrightText = document.querySelectorAll('.footer-bottom p');
        if (copyrightText.length > 1) {
            // Select the last paragraph (copyright one, not "Made with 💚")
            copyrightText[copyrightText.length - 1].textContent = translations['footer.copyright'];
        } else if (copyrightText.length === 1) {
            copyrightText[0].textContent = translations['footer.copyright'];
        }
        
        // Footer brand tagline
        const footerBrandP = document.querySelector('.footer-brand p');
        if (footerBrandP) footerBrandP.textContent = translations['footer.tagline'];
        
        // Update "About Us" link in Quick Links to use footer.aboutUs instead of nav.about
        const footerAllDivs = document.querySelectorAll('.footer-grid > div');
        if (footerAllDivs.length >= 2) {
            const quickLinksDiv = footerAllDivs[1];
            const quickLinksAbout = quickLinksDiv.querySelectorAll('a');
            if (quickLinksAbout.length >= 4) {
                quickLinksAbout[3].textContent = translations['footer.aboutUs'];
            }
        }
    }
}

// Initialize language switcher
const languageSwitcher = new LanguageSwitcher();
languageSwitcher.applyTranslations();

// Export for use in other scripts
window.languageSwitcher = languageSwitcher;

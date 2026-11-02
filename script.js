
/* =========================================
   ARBA'IN AN-NAWAWI DIGITAL
   Main JavaScript
   Version 1.0
========================================= */


/* =========================================
   01. HADITH DATA
========================================= */

/*
    Masukkan naskah asli 42 hadis di bagian ini.

    Format setiap hadis:
    {
        id: 1,
        title: "Hadis Pertama",
        arabic: "Teks Arab...",
        translation: "Terjemahan...",
        source: "HR. Bukhari dan Muslim"
    }

    Untuk sementara, 42 data dibuat sebagai placeholder.
    Tidak ada teks hadis yang dibuat-buat.
*/


const hadiths = [

    // =====================================
    // HADIS 01
    // Amal Tergantung Niat
    // =====================================

    {
        id: 1,

        title: "Amal Tergantung Niat",

        arabic: `عَنْ أَمِيرِ الْمُؤْمِنِينَ أَبِي حَفْصٍ عُمَرَ بْنِ الْخَطَّابِ رَضِيَ اللَّهُ عَنْهُ قَالَ: سَمِعْتُ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَقُولُ: «إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى، فَمَنْ كَانَتْ هِجْرَتُهُ إِلَى اللَّهِ وَرَسُولِهِ فَهِجْرَتُهُ إِلَى اللَّهِ وَرَسُولِهِ، وَمَنْ كَانَتْ هِجْرَتُهُ لِدُنْيَا يُصِيبُهَا أَوِ امْرَأَةٍ يَنْكِحُهَا فَهِجْرَتُهُ إِلَى مَا هَاجَرَ إِلَيْهِ». رواه إماما المحدثين أبو عبدالله محمد بن إسماعيل بن إبراهيم بن المغيرة بن بَرْدِزْبَه البخاري، وأبو الحسين مسلم بن الحجَّاج ين مسلم القشيري النيسابوري، في صحيحيهما اللَذين هما أصح الكتب المصنفة.`,

        translation: `Dari Amirul Mukminin Abu Hafsh ‘Umar bin Khaththab radhiyallahu ‘anhu berkata: aku mendengar Rasulullah shallallahu ‘alaihi wa sallam bersabda:

“Sesungguhnya amal itu tergantung dengan niatnya dan setiap orang akan mendapatkan sesuai dengan niatnya. Maka, barangsiapa yang hijrahnya kepada Allah dan Rasul-Nya maka hijrahnya kepada Allah dan Rasul-Nya, dan barangsiapa yang hijrahnya kepada dunia yang ingin diraih atau wanita yang ingin dinikahi maka hijrahnya kepada apa yang dia berhijrah kepadanya.”

Diriwayatkan oleh dua imam ahli hadits:

Abu Abdillah Muhammad bin Ismail bin Ibrahim bin al-Mughirah bin Bardizbah al-Bukhari dan Abul Husain Muslim bin Hajjaj bin Muslim al-Qushairi an-Naisaburi di kedua kitab Shahihnya yang merupakan dua kitab paling shahih yang pernah disusun.`,

        source: `Muttafaqun 'Alaihi: Shahih al-Bukhari (no. 1, 54, 2529, 3898, 5070, 6689, 6953), Shahih Muslim (no. 1907), Sunan Abu Dawud (no. 2201), Sunan at-Tirmidzi (no. 1647), Sunan Ibnu Majah (no. 4227), Sunan an-Nasa'i (I59-60), Musnad Ahmad (I25, 43), Sunan ad-Daruquthni (I136), dan Shahih Ibnu Khuzaimah (no. 455).`
    },

    
    {
        id: 2,
        title: "Pengertian Islam, Iman, dan Ihsan",

        arabic: `عَنْ عُمَرَ رَضِيَ اللَّهُ عَنْهُ أَيْضًا قَالَ: بَيْنَمَا نَحْنُ جُلُوسٌ عِنْدَ رَسُولِ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ ذَاتَ يَوْمٍ، إِذْ طَلَعَ عَلَيْنَا رَجُلٌ شَدِيدُ بَيَاضِ الثِّيَابِ، شَدِيدُ سَوَادِ الشَّعْرِ، لَا يُرَى عَلَيْهِ أَثَرُ السَّفَرِ، وَلَا يَعْرِفُهُ مِنَّا أَحَدٌ، حَتَّى جَلَسَ إِلَى النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ، فَأَسْنَدَ رُكْبَتَيْهِ إِلَى رُكْبَتَيْهِ، وَوَضَعَ كَفَّيْهِ عَلَى فَخِذَيْهِ، وَقَالَ: يَا مُحَمَّدُ، أَخْبِرْنِي عَنِ الْإِسْلَامِ! فَقَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: «الْإِسْلَامُ أَنْ تَشْهَدَ أَنْ لَا إِلَهَ إِلَّا اللَّهُ، وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ، وَتُقِيمَ الصَّلَاةَ، وَتُؤْتِيَ الزَّكَاةَ، وَتَصُومَ رَمَضَانَ، وَتَحُجَّ الْبَيْتَ إِنِ اسْتَطَعْتَ إِلَيْهِ سَبِيلًا». قَالَ: صَدَقْتَ. فَعَجِبْنَا لَهُ، يَسْأَلُهُ وَيُصَدِّقُهُ. قَالَ: فَأَخْبِرْنِي عَنِ الْإِيمَانِ! قَالَ: «أَنْ تُؤْمِنَ بِاللَّهِ، وَمَلَائِكَتِهِ، وَكُتُبِهِ، وَرُسُلِهِ، وَالْيَوْمِ الْآخِرِ، وَتُؤْمِنَ بِالْقَدَرِ خَيْرِهِ وَشَرِّهِ». قَالَ: صَدَقْتَ. قَالَ: فَأَخْبِرْنِي عَنِ الْإِحْسَانِ! قَالَ: «أَنْ تَعْبُدَ اللَّهَ كَأَنَّكَ تَرَاهُ، فَإِنْ لَمْ تَكُنْ تَرَاهُ فَإِنَّهُ يَرَاكَ». قَالَ: فَأَخْبِرْنِي عَنِ السَّاعَةِ! قَالَ: «مَا الْمَسْئُولُ عَنْهَا بِأَعْلَمَ مِنَ السَّائِلِ». قَالَ: فَأَخْبِرْنِي عَنْ أَمَارَاتِهَا! قَالَ: «أَنْ تَلِدَ الْأَمَةُ رَبَّتَهَا، وَأَنْ تَرَى الْحُفَاةَ الْعُرَاةَ الْعَالَةَ رِعَاءَ الشَّاءِ يَتَطَاوَلُونَ فِي الْبُنْيَانِ». ثُمَّ انْطَلَقَ، فَلَبِثْتُ مَلِيًّا، ثُمَّ قَالَ: «يَا عُمَرُ! أَتَدْرِي مَنِ السَّائِلُ؟» قُلْتُ: اللَّهُ وَرَسُولُهُ أَعْلَمُ. قَالَ: «فَإِنَّهُ جِبْرِيلُ أَتَاكُمْ يُعَلِّمُكُمْ دِينَكُمْ».`,

        translation: `Dari Umar radhiyallahu ‘anhu juga, ia berkata:

    Pada suatu hari, ketika kami sedang duduk di sisi Rasulullah shallallahu ‘alaihi wa sallam, tiba-tiba datang kepada kami seorang laki-laki yang sangat putih pakaiannya dan sangat hitam rambutnya. Tidak tampak padanya bekas perjalanan, dan tidak seorang pun di antara kami yang mengenalnya.

    Kemudian, ia duduk di hadapan Nabi shallallahu ‘alaihi wa sallam. Ia menyandarkan kedua lututnya pada kedua lutut beliau dan meletakkan kedua telapak tangannya di atas kedua paha beliau.

    Laki-laki itu berkata, “Wahai Muhammad, kabarkanlah kepadaku tentang Islam!”

    Rasulullah shallallahu ‘alaihi wa sallam bersabda:

    “Islam adalah engkau bersaksi bahwa tidak ada sesembahan yang berhak disembah selain Allah dan bahwa Muhammad adalah utusan Allah, menegakkan salat, menunaikan zakat, berpuasa Ramadan, dan menunaikan haji ke Baitullah jika engkau mampu menempuh perjalanan ke sana.”

    Laki-laki itu berkata, “Engkau benar.”

    Kami pun heran kepadanya. Ia bertanya kepada beliau, tetapi ia pula yang membenarkan jawaban beliau.

    Laki-laki itu bertanya lagi, “Kabarkanlah kepadaku tentang iman!”

    Beliau menjawab:

    “Engkau beriman kepada Allah, para malaikat-Nya, kitab-kitab-Nya, para rasul-Nya, hari akhir, serta beriman kepada takdir, baik maupun buruknya.”

    Laki-laki itu berkata, “Engkau benar.”

    Kemudian ia bertanya lagi, “Kabarkanlah kepadaku tentang ihsan!”

    Beliau menjawab:

    “Engkau beribadah kepada Allah seakan-akan engkau melihat-Nya. Jika engkau tidak dapat melihat-Nya, sesungguhnya Dia melihatmu.”

    Laki-laki itu bertanya lagi, “Kabarkanlah kepadaku tentang hari Kiamat!”

    Beliau menjawab:

    “Orang yang ditanya tentangnya tidak lebih mengetahui daripada orang yang bertanya.”

    Laki-laki itu bertanya lagi, “Kabarkanlah kepadaku tentang tanda-tandanya!”

    Beliau menjawab:

    “Apabila seorang budak perempuan melahirkan tuannya, dan apabila engkau melihat orang-orang yang tidak beralas kaki, tidak berpakaian, miskin, serta penggembala kambing berlomba-lomba meninggikan bangunan.”

    Kemudian laki-laki itu pergi. Aku terdiam beberapa lama. Setelah itu, beliau bersabda, “Wahai Umar, tahukah engkau siapa orang yang bertanya tadi?”

    Aku menjawab, “Allah dan Rasul-Nya lebih mengetahui.”

    Beliau bersabda:

    “Sesungguhnya dia adalah Jibril. Ia datang kepada kalian untuk mengajarkan agama kalian.”`,

        source: `Diriwayatkan oleh Muslim. Shahih Muslim (no. 8), Sunan Abu Dawud (no. 4695), Sunan at-Tirmidzi (no. 2610), Sunan Ibnu Majah (no. 63), Sunan an-Nasa’i (VIII/97–101), Musnad Ahmad (I/27, 28, 51, 52), Musnad ath-Thayalisi (no. 21), dan Musnad Abu Ya’la (no. 237).`
    },

    
    {
        id: 3,
        title: "Rukun Islam",

        arabic: `عَنْ أَبِي عَبْدِ الرَّحْمَنِ عَبْدِ اللَّهِ بْنِ عُمَرَ بْنِ الْخَطَّابِ رَضِيَ اللَّهُ عَنْهُمَا قَالَ: سَمِعْتُ النَّبِيَّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَقُولُ: «بُنِيَ الْإِسْلَامُ عَلَى خَمْسٍ: شَهَادَةِ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ، وَإِقَامِ الصَّلَاةِ، وَإِيتَاءِ الزَّكَاةِ، وَحَجِّ الْبَيْتِ، وَصَوْمِ رَمَضَانَ».`,

        translation: `Dari Abu Abdirrahman Abdullah bin Umar bin Khaththab radhiyallahu ‘anhuma, ia berkata: Aku mendengar Nabi shallallahu ‘alaihi wa sallam bersabda:

    “Islam dibangun di atas lima perkara: bersaksi bahwa tidak ada sesembahan yang berhak disembah selain Allah dan bahwa Muhammad adalah utusan Allah, menegakkan salat, menunaikan zakat, berhaji ke Baitullah, dan berpuasa Ramadan.”`,

        source: `Diriwayatkan oleh al-Bukhari dan Muslim. Muttafaqun ‘Alaihi: Shahih al-Bukhari (no. 8), Shahih Muslim (no. 16), Sunan at-Tirmidzi (no. 2609), Sunan an-Nasa’i (VIII/107–108), Musnad Ahmad (II/26, 93, 120, 143), dan Musnad al-Humaidi (no. 703).`
    },

    
    {
        id: 4,
        title: "Proses Penciptaan Manusia dan Takdir yang Menyertainya",

        arabic: `عَنْ أَبِي عَبْدِ الرَّحْمَنِ عَبْدِ اللَّهِ بْنِ مَسْعُودٍ رَضِيَ اللَّهُ عَنْهُ قَالَ: حَدَّثَنَا رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ، وَهُوَ الصَّادِقُ الْمَصْدُوقُ: «إِنَّ أَحَدَكُمْ يُجْمَعُ خَلْقُهُ فِي بَطْنِ أُمِّهِ أَرْبَعِينَ يَوْمًا نُطْفَةً، ثُمَّ يَكُونُ عَلَقَةً مِثْلَ ذَلِكَ، ثُمَّ يَكُونُ مُضْغَةً مِثْلَ ذَلِكَ، ثُمَّ يُرْسَلُ إِلَيْهِ الْمَلَكُ فَيَنْفُخُ فِيهِ الرُّوحَ، وَيُؤْمَرُ بِأَرْبَعِ كَلِمَاتٍ: بِكَتْبِ رِزْقِهِ، وَأَجَلِهِ، وَعَمَلِهِ، وَشَقِيٌّ أَوْ سَعِيدٌ. فَوَاللَّهِ الَّذِي لَا إِلَهَ غَيْرُهُ، إِنَّ أَحَدَكُمْ لَيَعْمَلُ بِعَمَلِ أَهْلِ الْجَنَّةِ حَتَّى مَا يَكُونُ بَيْنَهُ وَبَيْنَهَا إِلَّا ذِرَاعٌ، فَيَسْبِقُ عَلَيْهِ الْكِتَابُ، فَيَعْمَلُ بِعَمَلِ أَهْلِ النَّارِ فَيَدْخُلُهَا، وَإِنَّ أَحَدَكُمْ لَيَعْمَلُ بِعَمَلِ أَهْلِ النَّارِ حَتَّى مَا يَكُونُ بَيْنَهُ وَبَيْنَهَا إِلَّا ذِرَاعٌ، فَيَسْبِقُ عَلَيْهِ الْكِتَابُ، فَيَعْمَلُ بِعَمَلِ أَهْلِ الْجَنَّةِ فَيَدْخُلُهَا».`,

        translation: `Dari Abu Abdirrahman Abdullah bin Mas’ud radhiyallahu ‘anhu, ia berkata:

    Rasulullah shallallahu ‘alaihi wa sallam telah menceritakan kepada kami, dan beliau adalah orang yang selalu benar dan dibenarkan:

    “Sesungguhnya penciptaan salah seorang di antara kalian dikumpulkan dalam perut ibunya selama empat puluh hari dalam bentuk nutfah (setetes air mani). Kemudian ia menjadi ‘alaqah (segumpal darah) selama waktu yang sama. Kemudian ia menjadi mudghah (segumpal daging) selama waktu yang sama. Setelah itu, diutuslah seorang malaikat kepadanya, lalu malaikat tersebut meniupkan ruh ke dalamnya dan diperintahkan untuk mencatat empat perkara: rezekinya, ajalnya, amalnya, serta apakah ia termasuk orang yang celaka atau bahagia.

    Demi Allah, yang tidak ada sesembahan yang berhak disembah selain Dia, sesungguhnya salah seorang di antara kalian benar-benar beramal dengan amalan penghuni surga hingga jarak antara dirinya dan surga hanya tinggal sehasta. Namun, ketetapan yang telah ditulis mendahuluinya, lalu ia beramal dengan amalan penghuni neraka sehingga ia pun memasukinya.

    Dan sesungguhnya salah seorang di antara kalian benar-benar beramal dengan amalan penghuni neraka hingga jarak antara dirinya dan neraka hanya tinggal sehasta. Namun, ketetapan yang telah ditulis mendahuluinya, lalu ia beramal dengan amalan penghuni surga sehingga ia pun memasukinya.”`,

        source: `Diriwayatkan oleh al-Bukhari dan Muslim. Muttafaqun ‘Alaihi: Shahih al-Bukhari (no. 3208), Shahih Muslim (no. 2643), Sunan Abu Dawud (no. 4708), Sunan at-Tirmidzi (no. 2137), dan Sunan Ibnu Majah (no. 76).`
    },

    
    {
        id: 5,
        title: "Bahaya Bid'ah",

        arabic: `عَنْ أُمِّ الْمُؤْمِنِينَ أُمِّ عَبْدِ اللَّهِ عَائِشَةَ رَضِيَ اللَّهُ عَنْهَا قَالَتْ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: «مَنْ أَحْدَثَ فِي أَمْرِنَا هَذَا مَا لَيْسَ مِنْهُ فَهُوَ رَدٌّ». رَوَاهُ الْبُخَارِيُّ وَمُسْلِمٌ.

    وَفِي رِوَايَةٍ لِمُسْلِمٍ: «مَنْ عَمِلَ عَمَلًا لَيْسَ عَلَيْهِ أَمْرُنَا فَهُوَ رَدٌّ».`,

        translation: `Dari Ummul Mukminin Ummu Abdillah, Aisyah radhiyallahu ‘anha, ia berkata: Rasulullah shallallahu ‘alaihi wa sallam bersabda:

    “Barang siapa mengada-adakan sesuatu yang baru dalam urusan (agama) kami ini, yang bukan bagian darinya, maka sesuatu itu tertolak.”

    Diriwayatkan oleh al-Bukhari dan Muslim.

    Dalam riwayat Muslim disebutkan:

    “Barang siapa melakukan suatu amalan yang tidak berdasarkan tuntunan kami, maka amalan itu tertolak.”`,

        source: `Diriwayatkan oleh al-Bukhari dan Muslim. Muttafaqun ‘Alaihi: Shahih al-Bukhari (no. 2697), Shahih Muslim (no. 1718), Sunan Abu Dawud (no. 4606), Sunan Ibnu Majah (no. 14), dan Musnad Ahmad (VI/73, 146, 180, 240, 256, 270). Riwayat tambahan: Shahih Muslim (no. 1718).`
    },

    
    {
        id: 6,
        title: "Halal dan Haram",

        arabic: `عَنْ أَبِي عَبْدِ اللَّهِ النُّعْمَانِ بْنِ بَشِيرٍ رَضِيَ اللَّهُ عَنْهُمَا قَالَ: سَمِعْتُ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَقُولُ: «إِنَّ الْحَلَالَ بَيِّنٌ، وَإِنَّ الْحَرَامَ بَيِّنٌ، وَبَيْنَهُمَا أُمُورٌ مُشْتَبِهَاتٌ لَا يَعْلَمُهُنَّ كَثِيرٌ مِنَ النَّاسِ، فَمَنِ اتَّقَى الشُّبُهَاتِ فَقَدِ اسْتَبْرَأَ لِدِينِهِ وَعِرْضِهِ، وَمَنْ وَقَعَ فِي الشُّبُهَاتِ وَقَعَ فِي الْحَرَامِ، كَالرَّاعِي يَرْعَى حَوْلَ الْحِمَى يُوشِكُ أَنْ يَرْتَعَ فِيهِ. أَلَا وَإِنَّ لِكُلِّ مَلِكٍ حِمًى، أَلَا وَإِنَّ حِمَى اللَّهِ مَحَارِمُهُ. أَلَا وَإِنَّ فِي الْجَسَدِ مُضْغَةً، إِذَا صَلَحَتْ صَلَحَ الْجَسَدُ كُلُّهُ، وَإِذَا فَسَدَتْ فَسَدَ الْجَسَدُ كُلُّهُ، أَلَا وَهِيَ الْقَلْبُ». رَوَاهُ الْبُخَارِيُّ وَمُسْلِمٌ.`,

        translation: `Dari Abu Abdillah an-Nu’man bin Basyir radhiyallahu ‘anhuma, ia berkata: Aku mendengar Rasulullah shallallahu ‘alaihi wa sallam bersabda:

    “Sesungguhnya perkara yang halal itu jelas dan perkara yang haram itu jelas. Di antara keduanya terdapat perkara-perkara yang samar (syubhat) yang tidak diketahui oleh banyak orang.

    Barang siapa menjaga diri dari perkara-perkara syubhat, sungguh ia telah menjaga agama dan kehormatannya. Barang siapa terjatuh ke dalam perkara-perkara syubhat, ia akan terjatuh ke dalam perkara yang haram. Hal itu seperti seorang penggembala yang menggembalakan ternaknya di sekitar kawasan terlarang, sehingga dikhawatirkan ternaknya akan masuk ke dalam kawasan tersebut.

    Ketahuilah, setiap raja memiliki kawasan terlarang. Ketahuilah, kawasan terlarang milik Allah adalah segala sesuatu yang diharamkan-Nya.

    Ketahuilah, sesungguhnya di dalam tubuh terdapat segumpal daging. Jika segumpal daging itu baik, seluruh tubuh pun menjadi baik. Jika segumpal daging itu rusak, seluruh tubuh pun menjadi rusak. Ketahuilah, segumpal daging itu adalah hati.”`,

        source: `Diriwayatkan oleh al-Bukhari dan Muslim. Muttafaqun ‘Alaihi: Shahih al-Bukhari (no. 52, 2051), Shahih Muslim (no. 1599), Sunan Abu Dawud (no. 3329, 3330), Sunan at-Tirmidzi (no. 1205), Sunan Ibnu Majah (no. 3984), Sunan an-Nasa’i (VII/241–243), dan Musnad Ahmad (IV/267).`
    },

    
    {
        id: 7,
        title: "Agama adalah Nasihat",

        arabic: `عَنْ أَبِي رُقَيَّةَ تَمِيمِ بْنِ أَوْسٍ الدَّارِيِّ رَضِيَ اللَّهُ عَنْهُ، أَنَّ النَّبِيَّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ: «الدِّينُ النَّصِيحَةُ». قُلْنَا: لِمَنْ؟ قَالَ: «لِلَّهِ، وَلِكِتَابِهِ، وَلِرَسُولِهِ، وَلِأَئِمَّةِ الْمُسْلِمِينَ، وَعَامَّتِهِمْ». رَوَاهُ مُسْلِمٌ.`,

        translation: `Dari Abu Ruqayyah Tamim bin Aus ad-Dari radhiyallahu ‘anhu, bahwa Nabi shallallahu ‘alaihi wa sallam bersabda:

    “Agama adalah nasihat.”

    Kami bertanya, “Untuk siapa?”

    Beliau menjawab:

    “Untuk Allah, Kitab-Nya, Rasul-Nya, para pemimpin kaum muslimin, dan kaum muslimin secara umum.”`,

        source: `Diriwayatkan oleh Muslim. Shahih Muslim (no. 55), Sunan Abu Dawud (no. 4944), Sunan an-Nasa’i (VII/156–157), dan Musnad Ahmad (IV/102–103).`
    },

    
    {
        id: 8,
        title: "Haram Darah Seorang Muslim",

        arabic: `عَنِ ابْنِ عُمَرَ رَضِيَ اللَّهُ عَنْهُمَا أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ: «أُمِرْتُ أَنْ أُقَاتِلَ النَّاسَ حَتَّى يَشْهَدُوا أَنْ لَا إِلَهَ إِلَّا اللَّهُ، وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ، وَيُقِيمُوا الصَّلَاةَ، وَيُؤْتُوا الزَّكَاةَ، فَإِذَا فَعَلُوا ذَلِكَ عَصَمُوا مِنِّي دِمَاءَهُمْ وَأَمْوَالَهُمْ إِلَّا بِحَقِّ الْإِسْلَامِ، وَحِسَابُهُمْ عَلَى اللَّهِ تَعَالَى». رَوَاهُ الْبُخَارِيُّ وَمُسْلِمٌ.`,

        translation: `Dari Ibnu Umar radhiyallahu ‘anhuma, bahwa Rasulullah shallallahu ‘alaihi wa sallam bersabda:

    “Aku diperintahkan untuk memerangi manusia hingga mereka bersaksi bahwa tidak ada sesembahan yang berhak disembah selain Allah dan bahwa Muhammad adalah utusan Allah, menegakkan salat, serta menunaikan zakat. Apabila mereka telah melakukan hal tersebut, maka mereka telah menjaga darah dan harta mereka dariku, kecuali berdasarkan hak Islam. Adapun perhitungan amal mereka diserahkan kepada Allah Ta’ala.”`,

        source: `Diriwayatkan oleh al-Bukhari dan Muslim. Muttafaqun ‘Alaihi: Shahih al-Bukhari (no. 25), Shahih Muslim (no. 22), Sunan ad-Daraquthni (I/512, no. 886), dan as-Sunan al-Kubra lil-Baihaqi (III/92, 367; VIII/177).`
    },

    
    {
        id: 9,
        title: "Meninggalkan yang Haram",

        arabic: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: «إِنَّ اللَّهَ تَعَالَى طَيِّبٌ لَا يَقْبَلُ إِلَّا طَيِّبًا، وَإِنَّ اللَّهَ أَمَرَ الْمُؤْمِنِينَ بِمَا أَمَرَ بِهِ الْمُرْسَلِينَ، فَقَالَ تَعَالَى: ﴿يَا أَيُّهَا الرُّسُلُ كُلُوا مِنَ الطَّيِّبَاتِ وَاعْمَلُوا صَالِحًا، إِنِّي بِمَا تَعْمَلُونَ عَلِيمٌ﴾ [الْمُؤْمِنُونَ: ٥١]، وَقَالَ تَعَالَى: ﴿يَا أَيُّهَا الَّذِينَ آمَنُوا كُلُوا مِنْ طَيِّبَاتِ مَا رَزَقْنَاكُمْ﴾ [الْبَقَرَةِ: ١٧٢]. ثُمَّ ذَكَرَ الرَّجُلَ يُطِيلُ السَّفَرَ، أَشْعَثَ أَغْبَرَ، يَمُدُّ يَدَيْهِ إِلَى السَّمَاءِ: يَا رَبِّ، يَا رَبِّ، وَمَطْعَمُهُ حَرَامٌ، وَمَشْرَبُهُ حَرَامٌ، وَمَلْبَسُهُ حَرَامٌ، وَغُذِيَ بِالْحَرَامِ، فَأَنَّى يُسْتَجَابُ لِذَلِكَ؟». رَوَاهُ مُسْلِمٌ.`,

        translation: `Dari Abu Hurairah radhiyallahu ‘anhu, ia berkata: Rasulullah shallallahu ‘alaihi wa sallam bersabda:

    “Sesungguhnya Allah Mahabaik dan tidak menerima kecuali yang baik. Sesungguhnya Allah telah memerintahkan kepada orang-orang beriman sebagaimana Dia memerintahkan kepada para rasul.

    Allah Ta’ala berfirman:

    ‘Wahai para rasul! Makanlah dari makanan yang baik-baik dan kerjakanlah kebajikan. Sesungguhnya Aku Maha Mengetahui apa yang kamu kerjakan.’ (QS. Al-Mu’minun: 51)

    Dan Allah juga berfirman:

    ‘Wahai orang-orang yang beriman! Makanlah dari rezeki yang baik yang Kami berikan kepadamu.’ (QS. Al-Baqarah: 172)

    Kemudian beliau menceritakan tentang seorang laki-laki yang melakukan perjalanan jauh, rambutnya kusut dan berdebu. Ia menengadahkan kedua tangannya ke langit seraya berdoa, ‘Wahai Rabb-ku, wahai Rabb-ku.’

    Namun, makanannya haram, minumannya haram, pakaiannya haram, dan ia diberi asupan dari sesuatu yang haram. Maka, bagaimana mungkin doanya akan dikabulkan?”`,

        source: `Diriwayatkan oleh Muslim. Shahih Muslim (no. 1015), Sunan at-Tirmidzi (no. 2989), Musnad Ahmad (II/328), dan Sunan ad-Darimi (II/300).`
    },

    
    {
        id: 10,
        title: "Menjalankan Perintah Semampunya",

        arabic: `عَنْ أَبِي هُرَيْرَةَ عَبْدِ الرَّحْمَنِ بْنِ صَخْرٍ رَضِيَ اللَّهُ عَنْهُ قَالَ: سَمِعْتُ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَقُولُ: «مَا نَهَيْتُكُمْ عَنْهُ فَاجْتَنِبُوهُ، وَمَا أَمَرْتُكُمْ بِهِ فَأْتُوا مِنْهُ مَا اسْتَطَعْتُمْ، فَإِنَّمَا أَهْلَكَ الَّذِينَ مِنْ قَبْلِكُمْ كَثْرَةُ مَسَائِلِهِمْ وَاخْتِلَافُهُمْ عَلَى أَنْبِيَائِهِمْ». رَوَاهُ الْبُخَارِيُّ وَمُسْلِمٌ.`,

        translation: `Dari Abu Hurairah, yaitu Abdurrahman bin Shakhr radhiyallahu ‘anhu, ia berkata: Aku mendengar Rasulullah shallallahu ‘alaihi wa sallam bersabda:

    “Apa yang aku larang bagi kalian, maka jauhilah. Dan apa yang aku perintahkan kepada kalian, maka kerjakanlah semampu kalian. Sesungguhnya yang membinasakan orang-orang sebelum kalian adalah banyaknya pertanyaan mereka dan perselisihan mereka terhadap nabi-nabi mereka.”`,

        source: `Diriwayatkan oleh al-Bukhari dan Muslim. Muttafaqun ‘Alaihi: Shahih al-Bukhari (no. 7288), Shahih Muslim (no. 1337), Sunan at-Tirmidzi (no. 2679), Sunan Ibnu Majah (no. 1, 2), Sunan an-Nasa’i (V/110–111), dan Musnad Ahmad (II/247, 258, 428, 517).`
    },

    
    {
        id: 11,
        title: "Tinggalkan Apa yang Meragukan",

        arabic: `عَنْ أَبِي مُحَمَّدٍ الْحَسَنِ بْنِ عَلِيِّ بْنِ أَبِي طَالِبٍ، سِبْطِ رَسُولِ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ وَرَيْحَانَتِهِ، رَضِيَ اللَّهُ عَنْهُمَا قَالَ: حَفِظْتُ مِنْ رَسُولِ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: «دَعْ مَا يَرِيبُكَ إِلَى مَا لَا يَرِيبُكَ». رَوَاهُ التِّرْمِذِيُّ وَالنَّسَائِيُّ، وَقَالَ التِّرْمِذِيُّ: حَدِيثٌ حَسَنٌ صَحِيحٌ.`,

        translation: `Dari Abu Muhammad Al-Hasan bin Ali bin Abi Thalib, cucu Rasulullah shallallahu ‘alaihi wa sallam dan kesayangan beliau, radhiyallahu ‘anhuma, ia berkata:

    “Aku menghafal dari Rasulullah shallallahu ‘alaihi wa sallam sabda beliau:

    ‘Tinggalkanlah perkara yang meragukanmu dan beralihlah kepada perkara yang tidak meragukanmu.’”

    Diriwayatkan oleh at-Tirmidzi dan an-Nasa’i. At-Tirmidzi berkata, “Hadis ini hasan sahih.”`,

        source: `Diriwayatkan oleh at-Tirmidzi dan an-Nasa’i. Dinilai hasan sahih oleh at-Tirmidzi. Sunan at-Tirmidzi (no. 2518), Sunan an-Nasa’i (VIII/327–328), Musnad Ahmad (I/200), Sunan ad-Darimi (II/245), Mushannaf Abdurrazzaq (no. 4984), Musnad ath-Thayalisi (no. 1274), al-Mustadrak (II/13, IV/99), dan Sunan al-Baihaqi (V/335).`
    },

    
    {
        id: 12,
        title: "Tinggalkan Apa yang Tidak Berguna",

        arabic: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: «مِنْ حُسْنِ إِسْلَامِ الْمَرْءِ تَرْكُهُ مَا لَا يَعْنِيهِ». حَدِيثٌ حَسَنٌ، رَوَاهُ التِّرْمِذِيُّ وَغَيْرُهُ هَكَذَا.`,

        translation: `Dari Abu Hurairah radhiyallahu ‘anhu, ia berkata: Rasulullah shallallahu ‘alaihi wa sallam bersabda:

    “Di antara tanda baiknya keislaman seseorang adalah meninggalkan perkara yang tidak bermanfaat baginya.”`,

        source: `Hadis hasan. Diriwayatkan oleh at-Tirmidzi dan selainnya dengan redaksi tersebut. Sunan at-Tirmidzi (no. 2317) dan Sunan Ibnu Majah (no. 3976).`
    },

    
    {
        id: 13,
        title: "Mencintai Sesama Muslim",

        arabic: `عَنْ أَبِي حَمْزَةَ أَنَسِ بْنِ مَالِكٍ رَضِيَ اللَّهُ عَنْهُ، خَادِمِ رَسُولِ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ، عَنِ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ: «لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ». رَوَاهُ الْبُخَارِيُّ وَمُسْلِمٌ.`,

        translation: `Dari Abu Hamzah Anas bin Malik radhiyallahu ‘anhu, pelayan Rasulullah shallallahu ‘alaihi wa sallam, dari Nabi shallallahu ‘alaihi wa sallam, beliau bersabda:

    “Tidak sempurna iman salah seorang di antara kalian hingga ia mencintai untuk saudaranya apa yang ia cintai untuk dirinya sendiri.”`,

        source: `Diriwayatkan oleh al-Bukhari dan Muslim. Muttafaqun ‘Alaihi: Shahih al-Bukhari (no. 13), Shahih Muslim (no. 45), Sunan at-Tirmidzi (no. 2515), Sunan Ibnu Majah (no. 66), Sunan an-Nasa’i (VIII/115), Musnad Ahmad (III/176, 206, 251, 272, 289), Sunan ad-Darimi (II/307), Musnad Abu Awanah (I/33), dan Musnad Abu Ya’la (no. 2880, 3069, 3171, 3245).`
    },

    
    {
        id: 14,
        title: "Sebab-Sebab Halalnya Darah Seorang Muslim",

        arabic: `عَنِ ابْنِ مَسْعُودٍ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: «لَا يَحِلُّ دَمُ امْرِئٍ مُسْلِمٍ يَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَنِّي رَسُولُ اللَّهِ، إِلَّا بِإِحْدَى ثَلَاثٍ: الثَّيِّبُ الزَّانِي، وَالنَّفْسُ بِالنَّفْسِ، وَالتَّارِكُ لِدِينِهِ الْمُفَارِقُ لِلْجَمَاعَةِ». رَوَاهُ الْبُخَارِيُّ وَمُسْلِمٌ.`,

        translation: `Dari Ibnu Mas’ud radhiyallahu ‘anhu, ia berkata: Rasulullah shallallahu ‘alaihi wa sallam bersabda:

    “Tidak halal darah seorang muslim yang bersaksi bahwa tidak ada sesembahan yang berhak disembah selain Allah dan bahwa aku adalah utusan Allah, kecuali karena salah satu dari tiga perkara: orang yang telah menikah lalu berzina, jiwa dibalas dengan jiwa (qisas karena pembunuhan), dan orang yang meninggalkan agamanya serta memisahkan diri dari jamaah.”`,

        source: `Diriwayatkan oleh al-Bukhari dan Muslim. Muttafaqun ‘Alaihi: Shahih al-Bukhari (no. 6878), Shahih Muslim (no. 1676), Sunan Abu Dawud (no. 4352), Sunan at-Tirmidzi (no. 1402), Sunan Ibnu Majah (no. 2534), Sunan an-Nasa’i (VII/90–91), Musnad Ahmad (I/382, 428, 444), Sunan ad-Darimi (II/218), dan Mushannaf Ibnu Abi Syaibah (no. 28358).`
    },

    
    {
        id: 15,
        title: "Berkata Baik, Hormati Tetangga, Muliakan Tamu",

        arabic: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ: «مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ، وَمَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيُكْرِمْ جَارَهُ، وَمَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيُكْرِمْ ضَيْفَهُ». رَوَاهُ الْبُخَارِيُّ وَمُسْلِمٌ.`,

        translation: `Dari Abu Hurairah radhiyallahu ‘anhu, bahwa Rasulullah shallallahu ‘alaihi wa sallam bersabda:

    “Barang siapa beriman kepada Allah dan hari akhir, hendaklah ia berkata yang baik atau diam. Barang siapa beriman kepada Allah dan hari akhir, hendaklah ia memuliakan tetangganya. Dan barang siapa beriman kepada Allah dan hari akhir, hendaklah ia memuliakan tamunya.”`,

        source: `Diriwayatkan oleh al-Bukhari dan Muslim. Muttafaqun ‘Alaihi: Shahih al-Bukhari (no. 6018, 6136, 6475), Shahih Muslim (no. 47), Sunan Abu Dawud (no. 5154), Sunan at-Tirmidzi (no. 2500), Sunan Ibnu Majah (no. 3971), Musnad Ahmad (II/267, 433, 463), dan Sunan al-Baihaqi (VIII/164).`
    },

    
    {
        id: 16,
        title: "Jangan Marah",

        arabic: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ أَنَّ رَجُلًا قَالَ لِلنَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: أَوْصِنِي. قَالَ: «لَا تَغْضَبْ». فَرَدَّدَ مِرَارًا، وَقَالَ: «لَا تَغْضَبْ». رَوَاهُ الْبُخَارِيُّ.`,

        translation: `Dari Abu Hurairah radhiyallahu ‘anhu, bahwa seseorang berkata kepada Nabi shallallahu ‘alaihi wa sallam, “Berilah aku nasihat!”

    Beliau menjawab, “Jangan marah.”

    Orang itu mengulangi permintaannya beberapa kali, tetapi beliau tetap menjawab, “Jangan marah.”`,

        source: `Diriwayatkan oleh al-Bukhari. Shahih al-Bukhari (no. 6116), Sunan at-Tirmidzi (no. 2020), Musnad Ahmad (II/362, 466), Mushannaf Abdurrazzaq (no. 20286), dan Mushannaf Ibnu Abi Syaibah (no. 25769).`
    },

    
    {
        id: 17,
        title: "Berbuat Baik dalam Segala Sesuatu",
        arabic: `عَنْ أَبِي يَعْلَى شَدَّادِ بْنِ أَوْسٍ رَضِيَ اللَّهُ عَنْهُ، عَنْ رَسُولِ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ: «إِنَّ اللَّهَ كَتَبَ الْإِحْسَانَ عَلَى كُلِّ شَيْءٍ، فَإِذَا قَتَلْتُمْ فَأَحْسِنُوا الْقِتْلَةَ، وَإِذَا ذَبَحْتُمْ فَأَحْسِنُوا الذِّبْحَةَ، وَلْيُحِدَّ أَحَدُكُمْ شَفْرَتَهُ، وَلْيُرِحْ ذَبِيحَتَهُ». رَوَاهُ مُسْلِمٌ.`,
        translation: `Dari Abu Ya’la Syaddad bin Aus radhiyallahu ‘anhu, dari Rasulullah shallallahu ‘alaihi wa sallam, beliau bersabda:

    “Sesungguhnya Allah menetapkan ihsan (berbuat baik) dalam segala sesuatu. Maka, apabila kalian membunuh, lakukanlah dengan cara yang baik. Apabila kalian menyembelih, lakukanlah penyembelihan dengan baik pula. Hendaklah salah seorang dari kalian menajamkan pisaunya dan membuat hewan sembelihannya nyaman.”`,
        source: `Diriwayatkan oleh Muslim. Shahih Muslim (no. 1955), Sunan Abu Dawud (no. 2815), Sunan at-Tirmidzi (no. 1409), Sunan Ibnu Majah (no. 3170), Sunan an-Nasa’i (VII/227), Musnad Ahmad (IV/123–125), Sunan ad-Darimi (II/82), Musnad ath-Thayalisi (no. 1215), Mushannaf Abdurrazzaq (no. 8604), dan Mushannaf Ibnu Abi Syaibah (no. 28386 dan 28388).`
    },

    
    {
        id: 18,
        title: "Bertakwalah kepada Allah di Mana Pun Berada",
        arabic: `عَنْ أَبِي ذَرٍّ جُنْدُبِ بْنِ جُنَادَةَ، وَأَبِي عَبْدِ الرَّحْمَنِ مُعَاذِ بْنِ جَبَلٍ رَضِيَ اللَّهُ عَنْهُمَا، عَنْ رَسُولِ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ: «اتَّقِ اللَّهَ حَيْثُمَا كُنْتَ، وَأَتْبِعِ السَّيِّئَةَ الْحَسَنَةَ تَمْحُهَا، وَخَالِقِ النَّاسَ بِخُلُقٍ حَسَنٍ». رَوَاهُ التِّرْمِذِيُّ وَقَالَ: حَدِيثٌ حَسَنٌ، وَفِي بَعْضِ النُّسَخِ: حَسَنٌ صَحِيحٌ.`,
        translation: `Dari Abu Dzar Jundub bin Junadah dan Abu Abdirrahman Muadz bin Jabal radhiyallahu ‘anhuma, dari Rasulullah shallallahu ‘alaihi wa sallam, beliau bersabda:

    “Bertakwalah kepada Allah di mana pun kamu berada. Iringilah keburukan dengan kebaikan, niscaya kebaikan itu akan menghapusnya. Dan pergaulilah manusia dengan akhlak yang baik.”`,
        source: `Diriwayatkan oleh at-Tirmidzi. Beliau mengatakan, “Hadis hasan.” Dalam sebagian naskah disebutkan, “Hasan sahih.” Sunan at-Tirmidzi (no. 1987), Musnad Ahmad (V/153, V/158, dan V/177), serta Sunan ad-Darimi (II/323).`
    },

    
    {
        id: 19,
        title: "Jagalah Allah, Maka Dia Akan Menjagamu",
        arabic: `عَنْ أَبِي الْعَبَّاسِ عَبْدِ اللَّهِ بْنِ عَبَّاسٍ رَضِيَ اللَّهُ عَنْهُمَا قَالَ: كُنْتُ خَلْفَ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَوْمًا، فَقَالَ: «يَا غُلَامُ، إِنِّي أُعَلِّمُكَ كَلِمَاتٍ: احْفَظِ اللَّهَ يَحْفَظْكَ، احْفَظِ اللَّهَ تَجِدْهُ تُجَاهَكَ، إِذَا سَأَلْتَ فَاسْأَلِ اللَّهَ، وَإِذَا اسْتَعَنْتَ فَاسْتَعِنْ بِاللَّهِ، وَاعْلَمْ أَنَّ الْأُمَّةَ لَوِ اجْتَمَعَتْ عَلَى أَنْ يَنْفَعُوكَ بِشَيْءٍ لَمْ يَنْفَعُوكَ إِلَّا بِشَيْءٍ قَدْ كَتَبَهُ اللَّهُ لَكَ، وَإِنِ اجْتَمَعُوا عَلَى أَنْ يَضُرُّوكَ بِشَيْءٍ لَمْ يَضُرُّوكَ إِلَّا بِشَيْءٍ قَدْ كَتَبَهُ اللَّهُ عَلَيْكَ، رُفِعَتِ الْأَقْلَامُ وَجَفَّتِ الصُّحُفُ». رَوَاهُ التِّرْمِذِيُّ وَقَالَ: حَدِيثٌ حَسَنٌ صَحِيحٌ.

    وَفِي رِوَايَةٍ غَيْرِ التِّرْمِذِيِّ: «احْفَظِ اللَّهَ تَجِدْهُ أَمَامَكَ، تَعَرَّفْ إِلَى اللَّهِ فِي الرَّخَاءِ يَعْرِفْكَ فِي الشِّدَّةِ، وَاعْلَمْ أَنَّ مَا أَخْطَأَكَ لَمْ يَكُنْ لِيُصِيبَكَ، وَمَا أَصَابَكَ لَمْ يَكُنْ لِيُخْطِئَكَ، وَاعْلَمْ أَنَّ النَّصْرَ مَعَ الصَّبْرِ، وَأَنَّ الْفَرَجَ مَعَ الْكَرْبِ، وَأَنَّ مَعَ الْعُسْرِ يُسْرًا».`,
        translation: `Dari Abul Abbas Abdullah bin Abbas radhiyallahu ‘anhuma, ia berkata:

    “Pada suatu hari, aku pernah berada di belakang Nabi shallallahu ‘alaihi wa sallam. Beliau kemudian bersabda:

    ‘Wahai anak muda, sesungguhnya aku akan mengajarkan kepadamu beberapa kalimat:

    Jagalah Allah, niscaya Allah akan menjagamu. Jagalah Allah, niscaya engkau akan mendapati-Nya di hadapanmu. Apabila engkau meminta, mintalah kepada Allah. Apabila engkau memohon pertolongan, mohonlah pertolongan kepada Allah.

    Ketahuilah, seandainya seluruh umat manusia bersatu untuk memberikan suatu manfaat kepadamu, mereka tidak akan dapat memberikan manfaat kepadamu kecuali sesuatu yang telah Allah tetapkan untukmu. Dan seandainya mereka bersatu untuk mencelakakanmu, mereka tidak akan dapat mencelakakanmu kecuali dengan sesuatu yang telah Allah tetapkan atasmu. Pena-pena telah diangkat dan lembaran-lembaran telah kering.’

    Dalam riwayat selain at-Tirmidzi disebutkan:

    ‘Jagalah Allah, niscaya engkau akan mendapati-Nya di hadapanmu. Kenalilah Allah pada waktu lapang, niscaya Dia akan mengenalimu pada waktu sulit.

    Ketahuilah, apa yang luput darimu tidak mungkin menimpamu, dan apa yang menimpamu tidak mungkin luput darimu.

    Ketahuilah, sesungguhnya pertolongan datang bersama kesabaran, kelapangan datang bersama kesulitan, dan sesungguhnya bersama kesulitan ada kemudahan.’`,
        source: `Diriwayatkan oleh at-Tirmidzi. Beliau mengatakan, “Hadis hasan sahih.” Shahih Sunan at-Tirmidzi (no. 2516), Musnad Ahmad (I/293, I/303, I/307–308), Musnad Abu Ya’la (no. 2549), al-Mustadrak (III/541–542), dan al-Mu’jam al-Kabir lith-Thabrani (no. 11243, 11426, 11560, dan 12988).`
    },

    
    {
        id: 20,
        title: "Rasa Malu",
        arabic: `عَنْ أَبِي مَسْعُودٍ عُقْبَةَ بْنِ عَمْرٍو الْأَنْصَارِيِّ الْبَدْرِيِّ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: «إِنَّ مِمَّا أَدْرَكَ النَّاسُ مِنْ كَلَامِ النُّبُوَّةِ الْأُولَى: إِذَا لَمْ تَسْتَحْيِ فَاصْنَعْ مَا شِئْتَ». رَوَاهُ الْبُخَارِيُّ.`,
        translation: `Dari Abu Mas’ud Uqbah bin Amr al-Anshari al-Badri radhiyallahu ‘anhu, ia berkata: Rasulullah shallallahu ‘alaihi wa sallam bersabda:

    “Sesungguhnya di antara ajaran yang masih dikenal oleh manusia dari perkataan para nabi terdahulu adalah: ‘Jika engkau tidak memiliki rasa malu, berbuatlah sesukamu.’”`,
        source: `Diriwayatkan oleh al-Bukhari. Shahih al-Bukhari (no. 3483, 3484, dan 6120), Sunan Abu Dawud (no. 4797), Sunan Ibnu Majah (no. 4183), Musnad Ahmad (IV/121, IV/122, dan V/273), Musnad ath-Thayalisi (no. 655), serta al-Mu’jam al-Ausath (no. 2332).`
    },

    
    {
        id: 21,
        title: "Istiqamah",
        arabic: `عَنْ أَبِي عَمْرٍو، وَقِيلَ: أَبِي عَمْرَةَ، سُفْيَانَ بْنِ عَبْدِ اللَّهِ رَضِيَ اللَّهُ عَنْهُ قَالَ: قُلْتُ: يَا رَسُولَ اللَّهِ، قُلْ لِي فِي الْإِسْلَامِ قَوْلًا لَا أَسْأَلُ عَنْهُ أَحَدًا غَيْرَكَ. قَالَ: «قُلْ: آمَنْتُ بِاللَّهِ ثُمَّ اسْتَقِمْ». رَوَاهُ مُسْلِمٌ.`,
        translation: `Dari Abu Amr—ada pula yang berpendapat Abu Amrah—Sufyan bin Abdullah radhiyallahu ‘anhu, ia berkata:

    Aku berkata, “Wahai Rasulullah, beritahukanlah kepadaku suatu perkataan tentang Islam yang tidak perlu lagi kutanyakan kepada siapa pun selain engkau.”

    Beliau menjawab, “Katakanlah, ‘Aku beriman kepada Allah,’ kemudian istiqamahlah.”`,
        source: `Diriwayatkan oleh Muslim. Shahih Muslim (no. 38), Sunan at-Tirmidzi (no. 2410), Sunan Ibnu Majah (no. 3972), as-Sunan al-Kubra lin-Nasa’i (no. 11425, 11426, dan 11776), Musnad Ahmad (III/413 dan IV/384–385), Sunan ad-Darimi (II/298), Musnad ath-Thayalisi (no. 1327), serta al-Mu’jam al-Kabir lith-Thabrani (no. 6396, 6397, dan 6398).`
    },

    
    {
        id: 22,
        title: "Amalan untuk Masuk Surga",
        arabic: `عَنْ أَبِي عَبْدِ اللَّهِ جَابِرِ بْنِ عَبْدِ اللَّهِ الْأَنْصَارِيِّ رَضِيَ اللَّهُ عَنْهُمَا: أَنَّ رَجُلًا سَأَلَ النَّبِيَّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ فَقَالَ: أَرَأَيْتَ إِذَا صَلَّيْتُ الْمَكْتُوبَاتِ، وَصُمْتُ رَمَضَانَ، وَأَحْلَلْتُ الْحَلَالَ، وَحَرَّمْتُ الْحَرَامَ، وَلَمْ أَزِدْ عَلَى ذَلِكَ شَيْئًا، أَأَدْخُلُ الْجَنَّةَ؟ قَالَ: «نَعَمْ». رَوَاهُ مُسْلِمٌ.

    وَمَعْنَى «حَرَّمْتُ الْحَرَامَ»: اجْتَنَبْتُهُ. وَمَعْنَى «أَحْلَلْتُ الْحَلَالَ»: فَعَلْتُهُ مُعْتَقِدًا حِلَّهُ.`,
        translation: `Dari Abu Abdillah Jabir bin Abdullah al-Anshari radhiyallahu ‘anhuma, bahwa seseorang bertanya kepada Nabi shallallahu ‘alaihi wa sallam seraya berkata:

    “Bagaimana pendapatmu jika aku melaksanakan salat-salat wajib, berpuasa pada bulan Ramadan, menghalalkan apa yang halal, mengharamkan apa yang haram, dan tidak menambah amalan selain itu, apakah aku akan masuk surga?”

    Beliau menjawab, “Ya.”

    Makna “aku mengharamkan apa yang haram” adalah “aku menjauhinya”. Sedangkan makna “aku menghalalkan apa yang halal” adalah “aku mengerjakannya dengan meyakini bahwa hal itu halal.”`,
        source: `Diriwayatkan oleh Muslim. Shahih Muslim (no. 15), Musnad Ahmad (III/316 dan III/348), Musnad Abu Ya’la (no. 1936 dan 2291), serta Musnad Abu Awanah (I/4–5).`
    },

    
    {
        id: 23,
        title: "Bersuci, Hamdalah, Tasbih, Salat, dan Al-Qur'an",
        arabic: `عَنْ أَبِي مَالِكٍ الْحَارِثِ بْنِ عَاصِمٍ الْأَشْعَرِيِّ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: «الطُّهُورُ شَطْرُ الْإِيمَانِ، وَالْحَمْدُ لِلَّهِ تَمْلَأُ الْمِيزَانَ، وَسُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ تَمْلَآنِ أَوْ تَمْلَأُ مَا بَيْنَ السَّمَاءِ وَالْأَرْضِ، وَالصَّلَاةُ نُورٌ، وَالصَّدَقَةُ بُرْهَانٌ، وَالصَّبْرُ ضِيَاءٌ، وَالْقُرْآنُ حُجَّةٌ لَكَ أَوْ عَلَيْكَ، كُلُّ النَّاسِ يَغْدُو فَبَائِعٌ نَفْسَهُ فَمُعْتِقُهَا أَوْ مُوبِقُهَا». رَوَاهُ مُسْلِمٌ.`,
        translation: `Dari Abu Malik al-Harits bin Ashim al-Asy’ari radhiyallahu ‘anhu, ia berkata: Rasulullah shallallahu ‘alaihi wa sallam bersabda:

    “Bersuci adalah separuh dari iman. Ucapan alhamdulillah memenuhi timbangan. Ucapan subhanallah dan alhamdulillah memenuhi—atau masing-masing memenuhi—ruang antara langit dan bumi.

    Salat adalah cahaya, sedekah adalah bukti, kesabaran adalah sinar yang menerangi, dan Al-Qur’an adalah hujah yang membelamu atau yang memberatkanmu. Setiap manusia memulai harinya dengan menjual dirinya, lalu ia memerdekakan dirinya atau justru membinasakannya.”`,
        source: `Diriwayatkan oleh Muslim. Shahih Muslim (no. 223), Sunan at-Tirmidzi (no. 3517), Sunan Ibnu Majah (no. 280), Musnad Ahmad (V/342 dan V/343–344), Sunan ad-Darimi (I/167), serta Musnad Abu Awanah (I/223).`
    },

    
    {
        id: 24,
        title: "Larangan Berbuat Aniaya (Zalim)",
        arabic: `عَنْ أَبِي ذَرٍّ الْغِفَارِيِّ رَضِيَ اللَّهُ عَنْهُ، عَنِ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ فِيمَا يَرْوِيهِ عَنْ رَبِّهِ عَزَّ وَجَلَّ أَنَّهُ قَالَ: «يَا عِبَادِي، إِنِّي حَرَّمْتُ الظُّلْمَ عَلَى نَفْسِي، وَجَعَلْتُهُ بَيْنَكُمْ مُحَرَّمًا، فَلَا تَظَالَمُوا. يَا عِبَادِي، كُلُّكُمْ ضَالٌّ إِلَّا مَنْ هَدَيْتُهُ، فَاسْتَهْدُونِي أَهْدِكُمْ. يَا عِبَادِي، كُلُّكُمْ جَائِعٌ إِلَّا مَنْ أَطْعَمْتُهُ، فَاسْتَطْعِمُونِي أُطْعِمْكُمْ. يَا عِبَادِي، كُلُّكُمْ عَارٍ إِلَّا مَنْ كَسَوْتُهُ، فَاسْتَكْسُونِي أَكْسُكُمْ. يَا عِبَادِي، إِنَّكُمْ تُخْطِئُونَ بِاللَّيْلِ وَالنَّهَارِ، وَأَنَا أَغْفِرُ الذُّنُوبَ جَمِيعًا، فَاسْتَغْفِرُونِي أَغْفِرْ لَكُمْ. يَا عِبَادِي، إِنَّكُمْ لَنْ تَبْلُغُوا ضَرِّي فَتَضُرُّونِي، وَلَنْ تَبْلُغُوا نَفْعِي فَتَنْفَعُونِي. يَا عِبَادِي، لَوْ أَنَّ أَوَّلَكُمْ وَآخِرَكُمْ وَإِنْسَكُمْ وَجِنَّكُمْ كَانُوا عَلَى أَتْقَى قَلْبِ رَجُلٍ وَاحِدٍ مِنْكُمْ، مَا زَادَ ذَلِكَ فِي مُلْكِي شَيْئًا. يَا عِبَادِي، لَوْ أَنَّ أَوَّلَكُمْ وَآخِرَكُمْ وَإِنْسَكُمْ وَجِنَّكُمْ كَانُوا عَلَى أَفْجَرِ قَلْبِ رَجُلٍ وَاحِدٍ مِنْكُمْ، مَا نَقَصَ ذَلِكَ مِنْ مُلْكِي شَيْئًا. يَا عِبَادِي، لَوْ أَنَّ أَوَّلَكُمْ وَآخِرَكُمْ وَإِنْسَكُمْ وَجِنَّكُمْ قَامُوا فِي صَعِيدٍ وَاحِدٍ، فَسَأَلُونِي، فَأَعْطَيْتُ كُلَّ وَاحِدٍ مَسْأَلَتَهُ، مَا نَقَصَ ذَلِكَ مِمَّا عِنْدِي إِلَّا كَمَا يَنْقُصُ الْمِخْيَطُ إِذَا أُدْخِلَ الْبَحْرَ. يَا عِبَادِي، إِنَّمَا هِيَ أَعْمَالُكُمْ أُحْصِيهَا لَكُمْ، ثُمَّ أُوَفِّيكُمْ إِيَّاهَا، فَمَنْ وَجَدَ خَيْرًا فَلْيَحْمَدِ اللَّهَ، وَمَنْ وَجَدَ غَيْرَ ذَلِكَ فَلَا يَلُومَنَّ إِلَّا نَفْسَهُ». رَوَاهُ مُسْلِمٌ.`,
        translation: `Dari Abu Dzar al-Ghifari radhiyallahu ‘anhu, dari Nabi shallallahu ‘alaihi wa sallam, dalam hadis yang beliau riwayatkan dari Rabb-nya, Allah Azza wa Jalla berfirman:

    “Wahai hamba-hamba-Ku! Sesungguhnya Aku telah mengharamkan kezaliman atas diri-Ku dan menjadikannya haram di antara kalian. Maka, janganlah kalian saling menzalimi.

    Wahai hamba-hamba-Ku! Setiap kalian berada dalam kesesatan, kecuali orang yang telah Aku beri petunjuk. Maka, mintalah petunjuk kepada-Ku, niscaya Aku akan memberi kalian petunjuk.

    Wahai hamba-hamba-Ku! Setiap kalian lapar, kecuali orang yang telah Aku beri makan. Maka, mintalah makanan kepada-Ku, niscaya Aku akan memberi kalian makan.

    Wahai hamba-hamba-Ku! Setiap kalian tidak berpakaian, kecuali orang yang telah Aku beri pakaian. Maka, mintalah pakaian kepada-Ku, niscaya Aku akan memberi kalian pakaian.

    Wahai hamba-hamba-Ku! Sesungguhnya kalian melakukan kesalahan pada malam dan siang hari, sedangkan Aku mengampuni seluruh dosa. Maka, mohonlah ampun kepada-Ku, niscaya Aku akan mengampuni kalian.

    Wahai hamba-hamba-Ku! Sesungguhnya kalian tidak akan mampu mendatangkan bahaya kepada-Ku sehingga dapat membahayakan-Ku, dan kalian tidak akan mampu memberikan manfaat kepada-Ku sehingga dapat memberi-Ku manfaat.

    Wahai hamba-hamba-Ku! Seandainya orang-orang terdahulu dan orang-orang terakhir dari kalian, baik manusia maupun jin, semuanya memiliki hati yang paling bertakwa seperti hati seorang laki-laki yang paling bertakwa di antara kalian, hal itu tidak akan menambah sedikit pun kekuasaan-Ku.

    Wahai hamba-hamba-Ku! Seandainya orang-orang terdahulu dan orang-orang terakhir dari kalian, baik manusia maupun jin, semuanya memiliki hati yang paling durhaka seperti hati seorang laki-laki yang paling durhaka di antara kalian, hal itu tidak akan mengurangi sedikit pun kekuasaan-Ku.

    Wahai hamba-hamba-Ku! Seandainya orang-orang terdahulu dan orang-orang terakhir dari kalian, baik manusia maupun jin, berkumpul di satu tempat, lalu semuanya meminta kepada-Ku, kemudian Aku memberikan kepada setiap orang apa yang dimintanya, hal itu tidak akan mengurangi apa yang ada di sisi-Ku sedikit pun, kecuali seperti berkurangnya air laut ketika sebuah jarum dimasukkan ke dalamnya.

    Wahai hamba-hamba-Ku! Sesungguhnya semua itu hanyalah amal-amal kalian yang Aku hitung untuk kalian, kemudian Aku berikan balasannya secara sempurna. Barang siapa mendapati kebaikan, hendaklah ia memuji Allah. Dan barang siapa mendapati selain itu, janganlah ia mencela siapa pun selain dirinya sendiri.”`,
        source: `Diriwayatkan oleh Muslim. Shahih Muslim (no. 2557), Sunan at-Tirmidzi (no. 2495), Sunan Ibnu Majah (no. 4257), Musnad Ahmad (V/160), Mushannaf Abdurrazzaq (no. 20272), Sunan al-Baihaqi (VI/93), al-Adab al-Mufrad (no. 490), dan al-Mustadrak (IV/241).`
    },

    
    {
        id: 25,
        title: "Dzikir dan Amal Kebaikan adalah Sedekah",
        arabic: `عَنْ أَبِي ذَرٍّ رَضِيَ اللَّهُ عَنْهُ أَيْضًا: أَنَّ نَاسًا مِنْ أَصْحَابِ رَسُولِ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالُوا لِلنَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: يَا رَسُولَ اللَّهِ، ذَهَبَ أَهْلُ الدُّثُورِ بِالْأُجُورِ، يُصَلُّونَ كَمَا نُصَلِّي، وَيَصُومُونَ كَمَا نَصُومُ، وَيَتَصَدَّقُونَ بِفُضُولِ أَمْوَالِهِمْ. قَالَ: «أَوَلَيْسَ قَدْ جَعَلَ اللَّهُ لَكُمْ مَا تَصَدَّقُونَ بِهِ؟ إِنَّ بِكُلِّ تَسْبِيحَةٍ صَدَقَةً، وَكُلِّ تَكْبِيرَةٍ صَدَقَةً، وَكُلِّ تَحْمِيدَةٍ صَدَقَةً، وَكُلِّ تَهْلِيلَةٍ صَدَقَةً، وَأَمْرٌ بِالْمَعْرُوفِ صَدَقَةٌ، وَنَهْيٌ عَنِ الْمُنْكَرِ صَدَقَةٌ، وَفِي بُضْعِ أَحَدِكُمْ صَدَقَةٌ». قَالُوا: يَا رَسُولَ اللَّهِ، أَيَأْتِي أَحَدُنَا شَهْوَتَهُ وَيَكُونُ لَهُ فِيهَا أَجْرٌ؟ قَالَ: «أَرَأَيْتُمْ لَوْ وَضَعَهَا فِي حَرَامٍ أَكَانَ عَلَيْهِ وِزْرٌ؟ فَكَذَلِكَ إِذَا وَضَعَهَا فِي الْحَلَالِ كَانَ لَهُ أَجْرٌ». رَوَاهُ مُسْلِمٌ.`,
        translation: `Dari Abu Dzar radhiyallahu ‘anhu, ia juga meriwayatkan bahwa sekelompok sahabat Rasulullah shallallahu ‘alaihi wa sallam berkata kepada Nabi shallallahu ‘alaihi wa sallam:

    “Wahai Rasulullah, orang-orang kaya telah memperoleh banyak pahala. Mereka salat sebagaimana kami salat dan berpuasa sebagaimana kami berpuasa, tetapi mereka dapat bersedekah dengan kelebihan harta mereka.”

    Beliau bersabda, “Bukankah Allah telah menyediakan bagi kalian berbagai hal yang dapat kalian sedekahkan?

    Sesungguhnya setiap tasbih adalah sedekah, setiap takbir adalah sedekah, setiap tahmid adalah sedekah, setiap tahlil adalah sedekah, mengajak kepada kebaikan adalah sedekah, mencegah kemungkaran adalah sedekah, dan hubungan intim salah seorang dari kalian juga merupakan sedekah.”

    Mereka bertanya, “Wahai Rasulullah, apakah jika salah seorang dari kami menyalurkan hasratnya, ia juga mendapatkan pahala?”

    Beliau menjawab, “Bagaimana pendapat kalian jika ia menyalurkan hasratnya pada sesuatu yang haram, bukankah ia akan mendapatkan dosa? Demikian pula, apabila ia menyalurkannya pada sesuatu yang halal, ia akan mendapatkan pahala.”`,
        source: `Diriwayatkan oleh Muslim. Shahih Muslim (no. 1006), Sunan Abu Dawud (no. 5243 dan 5244), Musnad Ahmad (V/167 dan V/168), al-Adab al-Mufrad (no. 227), serta Musnad al-Bazzar (no. 3917 dan 3918).`
    },

    
    {
        id: 26,
        title: "Macam-Macam Sedekah",
        arabic: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: «كُلُّ سُلَامَى مِنَ النَّاسِ عَلَيْهِ صَدَقَةٌ كُلَّ يَوْمٍ تَطْلُعُ فِيهِ الشَّمْسُ: تَعْدِلُ بَيْنَ اثْنَيْنِ صَدَقَةٌ، وَتُعِينُ الرَّجُلَ فِي دَابَّتِهِ فَتَحْمِلُهُ عَلَيْهَا أَوْ تَرْفَعُ لَهُ عَلَيْهَا مَتَاعَهُ صَدَقَةٌ، وَالْكَلِمَةُ الطَّيِّبَةُ صَدَقَةٌ، وَبِكُلِّ خُطْوَةٍ تَمْشِيهَا إِلَى الصَّلَاةِ صَدَقَةٌ، وَتُمِيطُ الْأَذَى عَنِ الطَّرِيقِ صَدَقَةٌ». رَوَاهُ الْبُخَارِيُّ وَمُسْلِمٌ.`,
        translation: `Dari Abu Hurairah radhiyallahu ‘anhu, ia berkata: Rasulullah shallallahu ‘alaihi wa sallam bersabda:

    “Setiap persendian manusia wajib bersedekah setiap hari selama matahari terbit pada hari itu.

    Mendamaikan dua orang yang berselisih adalah sedekah. Membantu seseorang menaiki tunggangannya, atau mengangkatkan barangnya ke atas tunggangannya, adalah sedekah. Perkataan yang baik adalah sedekah. Setiap langkah yang engkau ayunkan menuju salat adalah sedekah. Dan menyingkirkan gangguan dari jalan adalah sedekah.”`,
        source: `Diriwayatkan oleh al-Bukhari dan Muslim (muttafaqun ‘alaih). Shahih al-Bukhari (no. 2707, 2891, dan 2989), Shahih Muslim (no. 1009), Musnad Ahmad (II/312, II/316, dan II/374), serta Sunan al-Baihaqi (IV/187–188).`
    },

    
    {
        id: 27,
        title: "Pengertian Kebaikan dan Dosa",
        arabic: `عَنِ النَّوَّاسِ بْنِ سَمْعَانَ رَضِيَ اللَّهُ عَنْهُ، عَنِ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ: «الْبِرُّ حُسْنُ الْخُلُقِ، وَالْإِثْمُ مَا حَاكَ فِي نَفْسِكَ وَكَرِهْتَ أَنْ يَطَّلِعَ عَلَيْهِ النَّاسُ». رَوَاهُ مُسْلِمٌ.

    وَعَنْ وَابِصَةَ بْنِ مَعْبَدٍ رَضِيَ اللَّهُ عَنْهُ قَالَ: أَتَيْتُ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ، فَقَالَ: «جِئْتَ تَسْأَلُ عَنِ الْبِرِّ وَالْإِثْمِ؟» قُلْتُ: نَعَمْ. قَالَ: «اسْتَفْتِ قَلْبَكَ، الْبِرُّ مَا اطْمَأَنَّتْ إِلَيْهِ النَّفْسُ وَاطْمَأَنَّ إِلَيْهِ الْقَلْبُ، وَالْإِثْمُ مَا حَاكَ فِي النَّفْسِ وَتَرَدَّدَ فِي الصَّدْرِ، وَإِنْ أَفْتَاكَ النَّاسُ وَأَفْتَوْكَ». قَالَ الشَّيْخُ رَحِمَهُ اللَّهُ: حَدِيثٌ حَسَنٌ، رَوَيْنَاهُ فِي مُسْنَدَيِ الْإِمَامِ أَحْمَدَ بْنِ حَنْبَلٍ وَالدَّارِمِيِّ بِإِسْنَادٍ حَسَنٍ.`,
        translation: `Dari an-Nawwas bin Sam’an radhiyallahu ‘anhu, dari Nabi shallallahu ‘alaihi wa sallam, beliau bersabda:

    “Kebaikan adalah akhlak yang mulia, sedangkan dosa adalah sesuatu yang menimbulkan kegelisahan dalam dirimu dan engkau tidak suka jika orang lain mengetahuinya.”

    Diriwayatkan oleh Muslim.

    Dari Wabishah bin Ma’bad radhiyallahu ‘anhu, ia berkata:

    Aku datang kepada Rasulullah shallallahu ‘alaihi wa sallam. Beliau kemudian bersabda, “Apakah engkau datang untuk bertanya tentang kebaikan dan dosa?”

    Aku menjawab, “Ya.”

    Beliau bersabda, “Mintalah fatwa kepada hatimu sendiri. Kebaikan adalah sesuatu yang membuat jiwa merasa tenang dan hati merasa tenteram. Sedangkan dosa adalah sesuatu yang menimbulkan kegelisahan dalam jiwa dan keraguan dalam dada, meskipun orang-orang telah memberikan fatwa kepadamu.”

    Syaikh (Imam an-Nawawi) rahimahullah berkata, “Hadis ini hasan. Kami meriwayatkannya dalam Musnad Imam Ahmad bin Hanbal dan Musnad ad-Darimi dengan sanad yang hasan.”`,
        source: `Riwayat pertama: Diriwayatkan oleh Muslim. Shahih Muslim (no. 2553), Sunan at-Tirmidzi (no. 2389), Musnad Ahmad (IV/182), al-Adab al-Mufrad (no. 295 dan 302), Sunan ad-Darimi (II/322), serta al-Mustadrak (II/14).

    Riwayat kedua: Disebutkan oleh Imam an-Nawawi dengan penilaian hasan berdasarkan sanad yang beliau rujuk dalam Musnad Ahmad dan ad-Darimi. Referensi yang dicantumkan: Musnad Ahmad (IV/228), Sunan ad-Darimi (II/245–246), dan Musnad Abu Ya’la (no. 1583 dan 1584). Catatan penilaian dha'if jiddan pada daftar referensi perlu diperiksa berdasarkan jalur sanad masing-masing.`
    },

    
    {
        id: 28,
        title: "Wasiat Rasulullah: Berpegang Teguh pada Sunnah dan Menjauhi Bid'ah",
        arabic: `عَنْ أَبِي نَجِيحٍ الْعِرْبَاضِ بْنِ سَارِيَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ: وَعَظَنَا رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ مَوْعِظَةً وَجِلَتْ مِنْهَا الْقُلُوبُ وَذَرَفَتْ مِنْهَا الْعُيُونُ، فَقُلْنَا: يَا رَسُولَ اللَّهِ، كَأَنَّهَا مَوْعِظَةُ مُوَدِّعٍ، فَأَوْصِنَا. قَالَ: «أُوصِيكُمْ بِتَقْوَى اللَّهِ عَزَّ وَجَلَّ، وَالسَّمْعِ وَالطَّاعَةِ، وَإِنْ تَأَمَّرَ عَلَيْكُمْ عَبْدٌ، فَإِنَّهُ مَنْ يَعِشْ مِنْكُمْ بَعْدِي فَسَيَرَى اخْتِلَافًا كَثِيرًا، فَعَلَيْكُمْ بِسُنَّتِي وَسُنَّةِ الْخُلَفَاءِ الرَّاشِدِينَ الْمَهْدِيِّينَ، عَضُّوا عَلَيْهَا بِالنَّوَاجِذِ، وَإِيَّاكُمْ وَمُحْدَثَاتِ الْأُمُورِ، فَإِنَّ كُلَّ مُحْدَثَةٍ بِدْعَةٌ، وَكُلَّ بِدْعَةٍ ضَلَالَةٌ». رَوَاهُ أَبُو دَاوُدَ وَالتِّرْمِذِيُّ، وَقَالَ: حَدِيثٌ حَسَنٌ صَحِيحٌ.`,
        translation: `Dari Abu Najih al-Irbadh bin Sariyah radhiyallahu ‘anhu, ia berkata:

    Rasulullah shallallahu ‘alaihi wa sallam pernah memberikan nasihat kepada kami dengan nasihat yang membuat hati bergetar dan mata bercucuran air mata. Kami pun berkata, “Wahai Rasulullah, seolah-olah ini adalah nasihat perpisahan. Maka, berilah kami wasiat.”

    Beliau bersabda:

    “Aku berwasiat kepada kalian agar bertakwa kepada Allah Azza wa Jalla, serta mendengar dan menaati pemimpin, meskipun yang memimpin kalian adalah seorang budak.

    Sesungguhnya siapa di antara kalian yang hidup setelahku, niscaya ia akan melihat banyak perselisihan. Maka, berpegang teguhlah kalian pada sunnahku dan sunnah para Khulafaur Rasyidin yang mendapat petunjuk. Gigitlah sunnah itu dengan gigi geraham kalian (berpegang teguhlah sekuat-kuatnya).

    Jauhilah perkara-perkara baru dalam urusan agama, karena sesungguhnya setiap perkara baru (dalam agama) adalah bid'ah, dan setiap bid'ah adalah kesesatan.”`,
        source: `Diriwayatkan oleh Abu Dawud dan at-Tirmidzi. At-Tirmidzi mengatakan, “Hadis hasan sahih.” Sunan Abu Dawud (no. 4607), Sunan at-Tirmidzi (no. 2676), Sunan Ibnu Majah (no. 42 dan 43), Musnad Ahmad (IV/126–127), serta Sunan ad-Darimi (I/44).`
    },

    
    {
        id: 29,
        title: "Amalan yang Memasukkan ke Surga dan Menjauhkan dari Neraka",
        arabic: `عَنْ مُعَاذِ بْنِ جَبَلٍ رَضِيَ اللَّهُ عَنْهُ قَالَ: قُلْتُ: يَا رَسُولَ اللَّهِ، أَخْبِرْنِي بِعَمَلٍ يُدْخِلُنِي الْجَنَّةَ وَيُبَاعِدُنِي مِنَ النَّارِ. قَالَ: «لَقَدْ سَأَلْتَ عَنْ عَظِيمٍ، وَإِنَّهُ لَيَسِيرٌ عَلَى مَنْ يَسَّرَهُ اللَّهُ تَعَالَى عَلَيْهِ: تَعْبُدُ اللَّهَ لَا تُشْرِكُ بِهِ شَيْئًا، وَتُقِيمُ الصَّلَاةَ، وَتُؤْتِي الزَّكَاةَ، وَتَصُومُ رَمَضَانَ، وَتَحُجُّ الْبَيْتَ». ثُمَّ قَالَ: «أَلَا أَدُلُّكَ عَلَى أَبْوَابِ الْخَيْرِ؟ الصَّوْمُ جُنَّةٌ، وَالصَّدَقَةُ تُطْفِئُ الْخَطِيئَةَ كَمَا يُطْفِئُ الْمَاءُ النَّارَ، وَصَلَاةُ الرَّجُلِ فِي جَوْفِ اللَّيْلِ». ثُمَّ تَلَا: «تَتَجَافَى جُنُوبُهُمْ عَنِ الْمَضَاجِعِ ۖ يَدْعُونَ رَبَّهُمْ خَوْفًا وَطَمَعًا وَمِمَّا رَزَقْنَاهُمْ يُنْفِقُونَ ۝ فَلَا تَعْلَمُ نَفْسٌ مَا أُخْفِيَ لَهُمْ مِنْ قُرَّةِ أَعْيُنٍ جَزَاءً بِمَا كَانُوا يَعْمَلُونَ». [السَّجْدَةِ: ١٦-١٧]

    ثُمَّ قَالَ: «أَلَا أُخْبِرُكَ بِرَأْسِ الْأَمْرِ وَعَمُودِهِ وَذِرْوَةِ سَنَامِهِ؟» قُلْتُ: بَلَى يَا رَسُولَ اللَّهِ. قَالَ: «رَأْسُ الْأَمْرِ الْإِسْلَامُ، وَعَمُودُهُ الصَّلَاةُ، وَذِرْوَةُ سَنَامِهِ الْجِهَادُ». ثُمَّ قَالَ: «أَلَا أُخْبِرُكَ بِمِلَاكِ ذَلِكَ كُلِّهِ؟» قُلْتُ: بَلَى يَا رَسُولَ اللَّهِ. فَأَخَذَ بِلِسَانِهِ وَقَالَ: «كُفَّ عَلَيْكَ هَذَا». قُلْتُ: يَا نَبِيَّ اللَّهِ، وَإِنَّا لَمُؤَاخَذُونَ بِمَا نَتَكَلَّمُ بِهِ؟ فَقَالَ: «ثَكِلَتْكَ أُمُّكَ يَا مُعَاذُ! وَهَلْ يَكُبُّ النَّاسَ فِي النَّارِ عَلَى وُجُوهِهِمْ، أَوْ قَالَ: عَلَى مَنَاخِرِهِمْ، إِلَّا حَصَائِدُ أَلْسِنَتِهِمْ؟». رَوَاهُ التِّرْمِذِيُّ وَقَالَ: حَدِيثٌ حَسَنٌ صَحِيحٌ.`,
        translation: `Dari Mu’adz bin Jabal radhiyallahu ‘anhu, ia berkata:

    Aku bertanya, “Wahai Rasulullah, beritahukanlah kepadaku suatu amalan yang dapat memasukkanku ke dalam surga dan menjauhkanku dari neraka.”

    Beliau bersabda, “Sungguh, engkau telah menanyakan perkara yang besar. Namun, perkara itu mudah bagi orang yang dimudahkan oleh Allah Ta’ala untuk melakukannya: engkau menyembah Allah dan tidak menyekutukan-Nya dengan sesuatu apa pun, mendirikan salat, menunaikan zakat, berpuasa Ramadan, dan menunaikan ibadah haji ke Baitullah.”

    Kemudian beliau bersabda, “Maukah aku tunjukkan kepadamu pintu-pintu kebaikan? Puasa adalah perisai, sedekah dapat memadamkan dosa sebagaimana air memadamkan api, dan salat seseorang pada tengah malam.”

    Kemudian beliau membaca ayat:

    “Lambung mereka jauh dari tempat tidurnya. Mereka berdoa kepada Rabb mereka dengan rasa takut dan penuh harap, serta menginfakkan sebagian rezeki yang Kami berikan kepada mereka. Tidak ada seorang pun yang mengetahui berbagai kenikmatan yang disembunyikan untuk mereka sebagai balasan atas apa yang telah mereka kerjakan.” (QS. as-Sajdah: 16–17).

    Kemudian beliau bersabda, “Maukah aku beritahukan kepadamu pokok segala urusan, tiangnya, dan puncak tertingginya?”

    Aku menjawab, “Tentu, wahai Rasulullah.”

    Beliau bersabda, “Pokok segala urusan adalah Islam, tiangnya adalah salat, dan puncak tertingginya adalah jihad.”

    Kemudian beliau bersabda, “Maukah aku beritahukan kepadamu tentang sesuatu yang menjadi kendali bagi semua itu?”

    Aku menjawab, “Tentu, wahai Rasulullah.”

    Beliau kemudian memegang lidahnya dan bersabda, “Jagalah ini.”

    Aku bertanya, “Wahai Nabi Allah, apakah kita benar-benar akan dimintai pertanggungjawaban atas apa yang kita ucapkan?”

    Beliau menjawab, “Celakalah engkau, wahai Mu’adz! Bukankah kebanyakan manusia tersungkur ke dalam neraka dengan wajah mereka—atau beliau bersabda, dengan hidung mereka—karena hasil dari ucapan lisan mereka?”`,
        source: `Diriwayatkan oleh at-Tirmidzi. Beliau mengatakan, “Hadis hasan sahih.” Sunan at-Tirmidzi (no. 2616), Sunan Ibnu Majah (no. 3973), as-Sunan al-Kubra lin-Nasa’i (no. 11330), Musnad Ahmad (V/231, V/236, V/237, dan V/245), serta Mushannaf Abdurrazzaq (no. 20303).`
    },

    
    {
        id: 30,
        title: "Batasan-Batasan Allah",
        arabic: `عَنْ أَبِي ثَعْلَبَةَ الْخُشَنِيِّ جُرْثُومِ بْنِ نَاشِرٍ رَضِيَ اللَّهُ عَنْهُ، عَنْ رَسُولِ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ: «إِنَّ اللَّهَ فَرَضَ فَرَائِضَ فَلَا تُضَيِّعُوهَا، وَحَدَّ حُدُودًا فَلَا تَعْتَدُوهَا، وَحَرَّمَ أَشْيَاءَ فَلَا تَنْتَهِكُوهَا، وَسَكَتَ عَنْ أَشْيَاءَ رَحْمَةً لَكُمْ غَيْرَ نِسْيَانٍ، فَلَا تَبْحَثُوا عَنْهَا». حَدِيثٌ حَسَنٌ، رَوَاهُ الدَّارَقُطْنِيُّ وَغَيْرُهُ.`,
        translation: `Dari Abu Tsa’labah al-Khusyani Jurtsum bin Nasyir radhiyallahu ‘anhu, dari Rasulullah shallallahu ‘alaihi wa sallam, beliau bersabda:

    “Sesungguhnya Allah telah menetapkan beberapa kewajiban, maka janganlah kalian menyia-nyiakannya. Dia telah menetapkan batasan-batasan, maka janganlah kalian melampauinya. Dia telah mengharamkan beberapa perkara, maka janganlah kalian melanggarnya. Dia juga mendiamkan beberapa perkara sebagai rahmat bagi kalian, bukan karena lupa, maka janganlah kalian mencari-cari tentangnya.”`,
        source: `Disebutkan sebagai hadis hasan dalam redaksi yang dicantumkan oleh Imam an-Nawawi, diriwayatkan oleh ad-Daraquthni dan selainnya. Sunan ad-Daraquthni (no. 4316). Catatan penilaian: hadis ini dinilai dha’if oleh al-Albani.`
    },

    
    {
        id: 31,
        title: "Zuhud terhadap Dunia",
        arabic: `عَنْ أَبِي الْعَبَّاسِ سَهْلِ بْنِ سَعْدٍ السَّاعِدِيِّ رَضِيَ اللَّهُ عَنْهُ قَالَ: جَاءَ رَجُلٌ إِلَى النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ فَقَالَ: يَا رَسُولَ اللَّهِ، دُلَّنِي عَلَى عَمَلٍ إِذَا عَمِلْتُهُ أَحَبَّنِيَ اللَّهُ وَأَحَبَّنِيَ النَّاسُ؟ فَقَالَ: «ازْهَدْ فِي الدُّنْيَا يُحِبَّكَ اللَّهُ، وَازْهَدْ فِيمَا عِنْدَ النَّاسِ يُحِبَّكَ النَّاسُ».`,
        translation: `Dari Abul Abbas Sahl bin Sa‘d as-Sa‘idi radhiyallahu ‘anhu, ia berkata: Seseorang datang kepada Nabi shallallahu ‘alaihi wa sallam, lalu berkata, “Wahai Rasulullah! Tunjukkanlah kepadaku suatu amalan yang apabila aku kerjakan, Allah akan mencintaiku dan manusia juga akan mencintaiku!”

    Beliau menjawab, “Zuhudlah terhadap dunia, niscaya Allah akan mencintaimu. Dan zuhudlah terhadap apa yang dimiliki manusia, niscaya manusia akan mencintaimu.”`,
        source: `Hadis hasan, diriwayatkan oleh Ibnu Majah dan selainnya dengan sanad-sanad yang hasan. Sunan Ibnu Majah (no. 4102), Raudhatul 'Uqala (hal. 128) karya Ibnu Hibban, al-Mustadrak (IV/313) karya al-Hakim, al-Mu'jam al-Kabir (no. 5972) karya ath-Thabrani, Hilyatul Auliya' (VII/155, no. 9991) karya Abu Nu'aim, Syu'ab al-Iman (no. 10043) karya al-Baihaqi, al-Kamil (III/458) karya Ibnu 'Adi, dan adh-Dhu'afa' (II/357) karya al-'Uqaili.`
    },

    
    {
        id: 32,
        title: "Tidak Boleh Membahayakan Diri dan Orang Lain",
        arabic: `عَنْ أَبِي سَعِيدٍ سَعْدِ بْنِ مَالِكِ بْنِ سِنَانٍ الْخُدْرِيِّ رَضِيَ اللَّهُ عَنْهُ، أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ: «لَا ضَرَرَ وَلَا ضِرَارَ». حَدِيثٌ حَسَنٌ. رَوَاهُ ابْنُ مَاجَهْ وَالدَّارَقُطْنِيُّ وَغَيْرُهُمَا مُسْنَدًا، وَرَوَاهُ مَالِكٌ فِي الْمُوَطَّإِ مُرْسَلًا عَنْ عَمْرِو بْنِ يَحْيَى، عَنْ أَبِيهِ، عَنِ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ، فَأَسْقَطَ أَبَا سَعِيدٍ، وَلَهُ طُرُقٌ يُقَوِّي بَعْضُهَا بَعْضًا.`,
        translation: `Dari Abu Sa'id Sa'd bin Malik bin Sinan al-Khudri radhiyallahu 'anhu, bahwa Rasulullah shallallahu 'alaihi wa sallam bersabda, “Tidak boleh membahayakan diri sendiri dan tidak boleh membahayakan orang lain.”

    Hadis hasan. Diriwayatkan oleh Ibnu Majah, ad-Daraquthni, dan selain keduanya dengan sanad yang bersambung. Hadis ini juga diriwayatkan oleh Malik dalam al-Muwaththa' secara mursal, dari Amr bin Yahya, dari ayahnya, dari Nabi shallallahu 'alaihi wa sallam, tanpa menyebutkan Abu Sa'id. Hadis ini memiliki beberapa jalur periwayatan yang saling menguatkan satu sama lain.`,
        source: `Hadis hasan. Al-Muwaththa' (no. 31) dan Sunan ad-Daraquthni (no. 4461).`
    },

    
    {
        id: 33,
        title: "Tuntutan Manusia",
        arabic: `عَنِ ابْنِ عَبَّاسٍ رَضِيَ اللَّهُ عَنْهُمَا، أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ: «لَوْ يُعْطَى النَّاسُ بِدَعْوَاهُمْ، لَادَّعَى رِجَالٌ أَمْوَالَ قَوْمٍ وَدِمَاءَهُمْ، وَلَكِنِ الْبَيِّنَةُ عَلَى الْمُدَّعِي، وَالْيَمِينُ عَلَى مَنْ أَنْكَرَ». حَدِيثٌ حَسَنٌ. رَوَاهُ الْبَيْهَقِيُّ هَكَذَا، وَبَعْضُهُ فِي الصَّحِيحَيْنِ.`,
        translation: `Dari Ibnu Abbas radhiyallahu 'anhuma, bahwa Rasulullah shallallahu 'alaihi wa sallam bersabda:

    “Seandainya setiap orang diberi apa yang dituntutnya hanya berdasarkan pengakuannya, niscaya orang-orang akan menuntut harta dan darah orang lain. Akan tetapi, bukti wajib diajukan oleh pihak yang mengajukan tuntutan, sedangkan sumpah dibebankan kepada pihak yang mengingkarinya.”

    Hadis hasan. Diriwayatkan oleh al-Baihaqi dengan redaksi seperti ini, sedangkan sebagian redaksinya diriwayatkan dalam Shahih al-Bukhari dan Shahih Muslim.`,
        source: `Hadis hasan. As-Sunan al-Kubra (V/331–332, X/252) karya al-Baihaqi, Shahih al-Bukhari (no. 4552), Shahih Muslim (no. 1711), Sunan Ibnu Majah (no. 2321), Mushannaf Abdurrazzaq (no. 15193), dan al-Mu'jam al-Kabir (no. 11224) karya ath-Thabrani.`
    },

    
    {
        id: 34,
        title: "Wajib Mengubah Kemungkaran",
        arabic: `عَنْ أَبِي سَعِيدٍ الْخُدْرِيِّ رَضِيَ اللَّهُ عَنْهُ قَالَ: سَمِعْتُ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَقُولُ: «مَنْ رَأَى مِنْكُمْ مُنْكَرًا فَلْيُغَيِّرْهُ بِيَدِهِ، فَإِنْ لَمْ يَسْتَطِعْ فَبِلِسَانِهِ، فَإِنْ لَمْ يَسْتَطِعْ فَبِقَلْبِهِ، وَذَلِكَ أَضْعَفُ الْإِيمَانِ». رَوَاهُ مُسْلِمٌ.`,
        translation: `Dari Abu Sa'id al-Khudri radhiyallahu 'anhu, ia berkata: Aku mendengar Rasulullah shallallahu 'alaihi wa sallam bersabda:

    “Barang siapa di antara kalian melihat suatu kemungkaran, hendaklah ia mengubahnya dengan tangannya. Jika tidak mampu, hendaklah ia mengubahnya dengan lisannya. Jika tidak mampu, hendaklah ia mengubahnya dengan hatinya. Dan itulah iman yang paling lemah.”

    Diriwayatkan oleh Muslim.`,
        source: `Hadis sahih. Shahih Muslim (no. 49), Sunan Abu Dawud (no. 1140, 4340), Sunan at-Tirmidzi (no. 2172), Sunan Ibnu Majah (no. 1275, 4013), Sunan an-Nasa'i (VIII/111–112), dan Musnad Ahmad (III/10, 20, 49, 52–54).`
    },

    
    {
        id: 35,
        title: "Sesama Muslim Bersaudara",
        arabic: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: «لَا تَحَاسَدُوا، وَلَا تَنَاجَشُوا، وَلَا تَبَاغَضُوا، وَلَا تَدَابَرُوا، وَلَا يَبِعْ بَعْضُكُمْ عَلَى بَيْعِ بَعْضٍ، وَكُونُوا عِبَادَ اللَّهِ إِخْوَانًا. الْمُسْلِمُ أَخُو الْمُسْلِمِ، لَا يَظْلِمُهُ، وَلَا يَخْذُلُهُ، وَلَا يَكْذِبُهُ، وَلَا يَحْقِرُهُ. التَّقْوَى هَاهُنَا» -وَيُشِيرُ إِلَى صَدْرِهِ ثَلَاثَ مَرَّاتٍ- «بِحَسْبِ امْرِئٍ مِنَ الشَّرِّ أَنْ يَحْقِرَ أَخَاهُ الْمُسْلِمَ. كُلُّ الْمُسْلِمِ عَلَى الْمُسْلِمِ حَرَامٌ: دَمُهُ، وَمَالُهُ، وَعِرْضُهُ». رَوَاهُ مُسْلِمٌ.`,
        translation: `Dari Abu Hurairah radhiyallahu 'anhu, ia berkata: Rasulullah shallallahu 'alaihi wa sallam bersabda:

    “Janganlah kalian saling mendengki, janganlah saling melakukan najasy, janganlah saling membenci, janganlah saling membelakangi, dan janganlah sebagian dari kalian menjual barang di atas transaksi jual beli saudaranya.

    Jadilah kalian hamba-hamba Allah yang bersaudara. Seorang muslim adalah saudara bagi muslim lainnya. Ia tidak boleh menzaliminya, menelantarkannya, mendustainya, ataupun merendahkannya.

    Takwa itu berada di sini.” Beliau menunjuk ke dadanya sebanyak tiga kali.

    “Cukuplah seseorang dianggap melakukan keburukan apabila ia merendahkan saudara muslimnya. Setiap muslim haram bagi muslim lainnya darahnya, hartanya, dan kehormatannya.”

    Diriwayatkan oleh Muslim.`,
        source: `Hadis sahih. Shahih Muslim (no. 2564), Sunan Ibnu Majah (no. 3933, 4213), dan Musnad Ahmad (no. 360).`
    },

    
    {
        id: 36,
        title: "Balasan Menolong Sesama",
        arabic: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ، عَنِ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ: «مَنْ نَفَّسَ عَنْ مُؤْمِنٍ كُرْبَةً مِنْ كُرَبِ الدُّنْيَا، نَفَّسَ اللَّهُ عَنْهُ كُرْبَةً مِنْ كُرَبِ يَوْمِ الْقِيَامَةِ، وَمَنْ يَسَّرَ عَلَى مُعْسِرٍ، يَسَّرَ اللَّهُ عَلَيْهِ فِي الدُّنْيَا وَالْآخِرَةِ، وَمَنْ سَتَرَ مُسْلِمًا، سَتَرَهُ اللَّهُ فِي الدُّنْيَا وَالْآخِرَةِ، وَاللَّهُ فِي عَوْنِ الْعَبْدِ مَا كَانَ الْعَبْدُ فِي عَوْنِ أَخِيهِ، وَمَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا، سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ، وَمَا اجْتَمَعَ قَوْمٌ فِي بَيْتٍ مِنْ بُيُوتِ اللَّهِ يَتْلُونَ كِتَابَ اللَّهِ وَيَتَدَارَسُونَهُ بَيْنَهُمْ، إِلَّا نَزَلَتْ عَلَيْهِمُ السَّكِينَةُ، وَغَشِيَتْهُمُ الرَّحْمَةُ، وَحَفَّتْهُمُ الْمَلَائِكَةُ، وَذَكَرَهُمُ اللَّهُ فِيمَنْ عِنْدَهُ، وَمَنْ بَطَّأَ بِهِ عَمَلُهُ، لَمْ يُسْرِعْ بِهِ نَسَبُهُ». رَوَاهُ مُسْلِمٌ بِهَذَا اللَّفْظِ.`,
        translation: `Dari Abu Hurairah radhiyallahu 'anhu, dari Nabi shallallahu 'alaihi wa sallam, beliau bersabda:

    “Barang siapa menghilangkan satu kesusahan dari kesusahan-kesusahan dunia yang dialami seorang mukmin, niscaya Allah akan menghilangkan satu kesusahan dari kesusahan-kesusahan hari Kiamat darinya.

    Barang siapa memberikan kemudahan kepada orang yang sedang mengalami kesulitan, niscaya Allah akan memberikan kemudahan baginya di dunia dan akhirat. Barang siapa menutupi aib seorang muslim, niscaya Allah akan menutupi aibnya di dunia dan akhirat.

    Allah senantiasa menolong seorang hamba selama hamba tersebut menolong saudaranya.

    Barang siapa menempuh suatu jalan untuk mencari ilmu, niscaya Allah akan memudahkan baginya jalan menuju surga.

    Tidaklah suatu kaum berkumpul di salah satu rumah Allah untuk membaca Kitabullah dan mempelajarinya bersama-sama, melainkan ketenangan akan turun kepada mereka, rahmat akan meliputi mereka, para malaikat akan mengelilingi mereka, dan Allah akan menyebut-nyebut mereka di hadapan para malaikat yang berada di sisi-Nya.

    Barang siapa yang amalnya lambat, nasabnya tidak akan dapat mempercepatnya.”

    Diriwayatkan oleh Muslim dengan lafaz ini.`,
        source: `Hadis sahih. Shahih Muslim (no. 2699), Sunan Abu Dawud (no. 3643), Sunan at-Tirmidzi (no. 1425, 2646, 2945), Sunan Ibnu Majah (no. 225), Musnad Ahmad (II/252, 325), Sunan ad-Darimi (I/99), Musnad ath-Thayalisi (no. 2561), dan al-Mustadrak (I/88–89).`
    },

    
    {
        id: 37,
        title: "Niat Berbuat Kebaikan dan Keburukan",
        arabic: `عَنِ ابْنِ عَبَّاسٍ رَضِيَ اللَّهُ عَنْهُمَا، عَنِ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ، فِيمَا يَرْوِيهِ عَنْ رَبِّهِ تَبَارَكَ وَتَعَالَى أَنَّهُ قَالَ: «إِنَّ اللَّهَ كَتَبَ الْحَسَنَاتِ وَالسَّيِّئَاتِ، ثُمَّ بَيَّنَ ذَلِكَ؛ فَمَنْ هَمَّ بِحَسَنَةٍ فَلَمْ يَعْمَلْهَا، كَتَبَهَا اللَّهُ عِنْدَهُ حَسَنَةً كَامِلَةً، وَإِنْ هَمَّ بِهَا فَعَمِلَهَا، كَتَبَهَا اللَّهُ عِنْدَهُ عَشْرَ حَسَنَاتٍ إِلَى سَبْعِمِائَةِ ضِعْفٍ إِلَى أَضْعَافٍ كَثِيرَةٍ. وَإِنْ هَمَّ بِسَيِّئَةٍ فَلَمْ يَعْمَلْهَا، كَتَبَهَا اللَّهُ عِنْدَهُ حَسَنَةً كَامِلَةً، وَإِنْ هَمَّ بِهَا فَعَمِلَهَا، كَتَبَهَا اللَّهُ سَيِّئَةً وَاحِدَةً». رَوَاهُ الْبُخَارِيُّ وَمُسْلِمٌ فِي صَحِيحَيْهِمَا بِهَذِهِ الْحُرُوفِ.`,
        translation: `Dari Ibnu Abbas radhiyallahu 'anhuma, dari Nabi shallallahu 'alaihi wa sallam, mengenai hadis yang beliau riwayatkan dari Rabb-nya Tabaraka wa Ta'ala, bahwa Allah berfirman:

    “Sesungguhnya Allah telah menetapkan kebaikan-kebaikan dan keburukan-keburukan, kemudian menjelaskan hal tersebut.

    Barang siapa berniat melakukan suatu kebaikan, tetapi tidak mengerjakannya, Allah mencatatnya di sisi-Nya sebagai satu kebaikan yang sempurna. Jika ia berniat melakukan kebaikan lalu mengerjakannya, Allah mencatatnya di sisi-Nya sebagai sepuluh kebaikan hingga tujuh ratus kali lipat, bahkan hingga berlipat-lipat ganda.

    Jika ia berniat melakukan suatu keburukan, tetapi tidak mengerjakannya, Allah mencatatnya di sisi-Nya sebagai satu kebaikan yang sempurna. Namun, jika ia berniat melakukan keburukan lalu mengerjakannya, Allah mencatatnya sebagai satu keburukan.”

    Diriwayatkan oleh al-Bukhari dan Muslim dalam kedua kitab Shahih mereka dengan redaksi ini.`,
        source: `Muttafaqun 'alaih. Shahih al-Bukhari (no. 6491), Shahih Muslim (no. 131), dan Musnad Ahmad (I/310, 361).`
    },

    
    {
        id: 38,
        title: "Keutamaan Wali Allah",
        arabic: `عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: «إِنَّ اللَّهَ تَعَالَى قَالَ: مَنْ عَادَى لِي وَلِيًّا فَقَدْ آذَنْتُهُ بِالْحَرْبِ. وَمَا تَقَرَّبَ إِلَيَّ عَبْدِي بِشَيْءٍ أَحَبَّ إِلَيَّ مِمَّا افْتَرَضْتُهُ عَلَيْهِ. وَلَا يَزَالُ عَبْدِي يَتَقَرَّبُ إِلَيَّ بِالنَّوَافِلِ حَتَّى أُحِبَّهُ، فَإِذَا أَحْبَبْتُهُ كُنْتُ سَمْعَهُ الَّذِي يَسْمَعُ بِهِ، وَبَصَرَهُ الَّذِي يُبْصِرُ بِهِ، وَيَدَهُ الَّتِي يَبْطِشُ بِهَا، وَرِجْلَهُ الَّتِي يَمْشِي بِهَا. وَلَئِنْ سَأَلَنِي لَأُعْطِيَنَّهُ، وَلَئِنِ اسْتَعَاذَنِي لَأُعِيذَنَّهُ». رَوَاهُ الْبُخَارِيُّ.`,
        translation: `Dari Abu Hurairah radhiyallahu 'anhu, ia berkata: Rasulullah shallallahu 'alaihi wa sallam bersabda:

    “Sesungguhnya Allah Ta'ala berfirman:

    ‘Barang siapa memusuhi wali-Ku, sungguh Aku telah mengumumkan perang terhadapnya.

    Tidaklah hamba-Ku mendekatkan diri kepada-Ku dengan sesuatu yang lebih Aku cintai daripada apa yang telah Aku wajibkan kepadanya. Hamba-Ku senantiasa mendekatkan diri kepada-Ku dengan amalan-amalan sunah hingga Aku mencintainya.

    Apabila Aku telah mencintainya, Aku menjadi pendengarannya yang dengannya ia mendengar, penglihatannya yang dengannya ia melihat, tangannya yang dengannya ia memegang, dan kakinya yang dengannya ia berjalan.

    Jika ia meminta kepada-Ku, pasti Aku memberinya. Jika ia memohon perlindungan kepada-Ku, pasti Aku melindunginya.’”

    Diriwayatkan oleh al-Bukhari.`,
        source: `Hadis sahih. Shahih al-Bukhari (no. 6502) dan as-Sunan al-Kubra karya al-Baihaqi (III/346, X/219).`
    },

    
    {
        id: 39,
        title: "Tiga Hal yang Dimaafkan: Tidak Sengaja, Lupa, dan Terpaksa",
        arabic: `عَنِ ابْنِ عَبَّاسٍ رَضِيَ اللَّهُ عَنْهُمَا، أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ: «إِنَّ اللَّهَ تَجَاوَزَ لِي عَنْ أُمَّتِي الْخَطَأَ وَالنِّسْيَانَ وَمَا اسْتُكْرِهُوا عَلَيْهِ». حَدِيثٌ حَسَنٌ. رَوَاهُ ابْنُ مَاجَهْ وَالْبَيْهَقِيُّ وَغَيْرُهُمَا.`,
        translation: `Dari Ibnu Abbas radhiyallahu 'anhuma, bahwa Rasulullah shallallahu 'alaihi wa sallam bersabda:

    “Sesungguhnya Allah memaafkan umatku atas kesalahan yang tidak disengaja, kelupaan, dan apa yang mereka lakukan karena dipaksa.”

    Hadis hasan. Diriwayatkan oleh Ibnu Majah, al-Baihaqi, dan selain keduanya.`,
        source: `Sunan Ibnu Majah (no. 2045), as-Sunan al-Kubra karya al-Baihaqi (VII/356–357), Sunan ad-Daraquthni (III/403), dan al-Mustadrak (II/198).`
    },

    
    {
        id: 40,
        title: "Hiduplah Laksana Orang Asing dan Musafir",
        arabic: `عَنِ ابْنِ عُمَرَ رَضِيَ اللَّهُ عَنْهُمَا قَالَ: أَخَذَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ بِمَنْكِبَيَّ فَقَالَ: «كُنْ فِي الدُّنْيَا كَأَنَّكَ غَرِيبٌ أَوْ عَابِرُ سَبِيلٍ».

    وَكَانَ ابْنُ عُمَرَ رَضِيَ اللَّهُ عَنْهُمَا يَقُولُ: «إِذَا أَمْسَيْتَ فَلَا تَنْتَظِرِ الصَّبَاحَ، وَإِذَا أَصْبَحْتَ فَلَا تَنْتَظِرِ الْمَسَاءَ، وَخُذْ مِنْ صِحَّتِكَ لِمَرَضِكَ، وَمِنْ حَيَاتِكَ لِمَوْتِكَ». رَوَاهُ الْبُخَارِيُّ.`,
        translation: `Dari Ibnu Umar radhiyallahu 'anhuma, ia berkata: Rasulullah shallallahu 'alaihi wa sallam memegang kedua pundakku, lalu bersabda:

    “Jadilah engkau di dunia seperti orang asing atau seorang musafir.”

    Ibnu Umar radhiyallahu 'anhuma juga berkata:

    “Jika engkau memasuki waktu sore, janganlah menunggu datangnya pagi. Jika engkau memasuki waktu pagi, janganlah menunggu datangnya sore. Manfaatkanlah kesehatanmu sebelum datang sakitmu, dan manfaatkanlah kehidupanmu sebelum datang kematianmu.”

    Diriwayatkan oleh al-Bukhari.`,
        source: `Hadis sahih. Shahih al-Bukhari (no. 6416), Sunan at-Tirmidzi (no. 2333), Sunan Ibnu Majah (no. 4114), dan Musnad Ahmad (II/24, 41).`
    },

    
    {
        id: 41,
        title: "Hawa Nafsu",
        arabic: `عَنْ أَبِي مُحَمَّدٍ عَبْدِ اللَّهِ بْنِ عَمْرِو بْنِ الْعَاصِ رَضِيَ اللَّهُ عَنْهُمَا قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: «لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يَكُونَ هَوَاهُ تَبَعًا لِمَا جِئْتُ بِهِ». حَدِيثٌ حَسَنٌ صَحِيحٌ. رَوَيْنَاهُ فِي كِتَابِ الْحُجَّةِ بِإِسْنَادٍ صَحِيحٍ.`,
        translation: `Dari Abu Muhammad Abdullah bin Amr bin al-Ash radhiyallahu 'anhuma, ia berkata: Rasulullah shallallahu 'alaihi wa sallam bersabda:

    “Tidaklah sempurna iman salah seorang di antara kalian hingga hawa nafsunya mengikuti ajaran yang aku bawa.”

    Hadis hasan sahih. Kami meriwayatkannya dalam Kitab al-Hujjah dengan sanad yang sahih.`,
        source: `Redaksi hadis ini disebutkan dalam Kitab al-Hujjah. Terdapat perbedaan penilaian terhadap hadis ini. Dalam catatan rujukan yang kamu berikan, hadis ini dinilai dha'if dan dinisbatkan kepada penilaian Ibnu Rajab serta Syaikh al-Albani. Rujukan yang dicantumkan: Syarh as-Sunnah (no. 104) dan as-Sunnah karya Ibnu Abi Ashim (no. 15).`
    },

    
    {
        id: 42,
        title: "Ampunan Allah Itu Luas",
        arabic: `عَنْ أَنَسِ بْنِ مَالِكٍ رَضِيَ اللَّهُ عَنْهُ قَالَ: سَمِعْتُ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَقُولُ: قَالَ اللَّهُ تَعَالَى: «يَا ابْنَ آدَمَ، إِنَّكَ مَا دَعَوْتَنِي وَرَجَوْتَنِي، غَفَرْتُ لَكَ عَلَى مَا كَانَ مِنْكَ وَلَا أُبَالِي. يَا ابْنَ آدَمَ، لَوْ بَلَغَتْ ذُنُوبُكَ عَنَانَ السَّمَاءِ، ثُمَّ اسْتَغْفَرْتَنِي، غَفَرْتُ لَكَ. يَا ابْنَ آدَمَ، إِنَّكَ لَوْ أَتَيْتَنِي بِقُرَابِ الْأَرْضِ خَطَايَا، ثُمَّ لَقِيتَنِي لَا تُشْرِكُ بِي شَيْئًا، لَأَتَيْتُكَ بِقُرَابِهَا مَغْفِرَةً». رَوَاهُ التِّرْمِذِيُّ وَقَالَ: حَدِيثٌ حَسَنٌ صَحِيحٌ.`,
        translation: `Dari Anas bin Malik radhiyallahu 'anhu, ia berkata: Aku mendengar Rasulullah shallallahu 'alaihi wa sallam bersabda:

    Allah Ta'ala berfirman:

    “Wahai anak Adam! Selama engkau berdoa kepada-Ku dan berharap kepada-Ku, Aku akan mengampunimu atas segala dosa yang telah engkau lakukan, dan Aku tidak mempermasalahkannya.

    Wahai anak Adam! Seandainya dosa-dosamu mencapai awan di langit, kemudian engkau memohon ampun kepada-Ku, niscaya Aku akan mengampunimu.

    Wahai anak Adam! Seandainya engkau datang kepada-Ku dengan membawa dosa sepenuh bumi, kemudian engkau menemui-Ku tanpa menyekutukan-Ku dengan sesuatu apa pun, niscaya Aku akan datang kepadamu dengan membawa ampunan sepenuh bumi pula.”

    Diriwayatkan oleh at-Tirmidzi. Ia berkata, “Hadis hasan sahih.”`,
        source: `Hadis hasan sahih menurut penilaian at-Tirmidzi. Sunan at-Tirmidzi (no. 3540).`
    },





    // =====================================
    // HADIS 20–42
    // Placeholder untuk naskah berikutnya
    // =====================================

    // ...Array.from({ length: 1 }, (_, index) => ({
    //     id: index + 42,
    //     title: `Hadis ${String(index + 42).padStart(2, '0')}`,
    //     arabic: "",
    //     translation: "",
    //     source: ""
    // }))

];



/* =========================================
   02. DOM ELEMENTS
========================================= */

const contentsList = document.getElementById('contents-list');
const readerContent = document.getElementById('reader-content');

const searchInput = document.getElementById('search-hadith');
const totalHadith = document.getElementById('total-hadith');

const progressText = document.getElementById('reading-progress-text');
const progressBar = document.getElementById('reading-progress-bar');

const fontIncrease = document.getElementById('font-increase');
const fontDecrease = document.getElementById('font-decrease');

const navToggle = document.getElementById('nav-toggle');
const navMenu = document.querySelector('.nav-menu');

const navLinks = document.querySelectorAll('.nav-link');


/* =========================================
   03. APPLICATION SETTINGS
========================================= */

const STORAGE_KEYS = {
    fontSize: 'arbain-font-size',
    lastRead: 'arbain-last-read'
};

const FONT_MIN = 20;
const FONT_MAX = 48;
const FONT_STEP = 2;
const DEFAULT_FONT_SIZE = 32;

let currentFontSize = DEFAULT_FONT_SIZE;
let currentHadith = 0;

let hadithObserver = null;


/* =========================================
   04. HELPER FUNCTIONS
========================================= */

// Format nomor hadis menjadi dua digit.

function formatNumber(number) {
    return String(number).padStart(2, '0');
}


// Menghindari HTML injection dari data teks.

function escapeHTML(value = '') {
    return String(value).replace(/[&<>"']/g, character => {
        const entities = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
        };

        return entities[character];
    });
}


// Mengambil data hadis berdasarkan ID.

function getHadithById(id) {
    return hadiths.find(hadith => hadith.id === Number(id));
}


/* =========================================
   05. RENDER TABLE OF CONTENTS
========================================= */

function renderContents(data = hadiths) {

    if (!contentsList) return;

    if (data.length === 0) {
        contentsList.innerHTML = `
            <div class="contents-empty">
                Hadis yang kamu cari tidak ditemukan.
            </div>
        `;

        return;
    }

    contentsList.innerHTML = data.map(hadith => {

        return `
            <a
                href="#hadith-${hadith.id}"
                class="contents-item"
                data-hadith-id="${hadith.id}"
            >

                <div class="contents-item-number">
                    ${formatNumber(hadith.id)}
                </div>

                <div class="contents-item-info">

                    <h3>${escapeHTML(hadith.title)}</h3>

                    <p>
                        ${hadith.arabic
                            ? 'Buka bacaan hadis'
                            : 'Naskah menunggu dimasukkan'}
                    </p>

                </div>

                <span class="contents-item-arrow">
                    →
                </span>

            </a>
        `;

    }).join('');

}


/* =========================================
   06. RENDER HADITH READER
========================================= */

function renderReader() {

    if (!readerContent) return;

    readerContent.innerHTML = hadiths.map(hadith => {

        const arabicText = hadith.arabic
            ? `
                <div
                    class="hadith-arabic"
                    dir="rtl"
                    lang="ar"
                >
                    ${escapeHTML(hadith.arabic)}
                </div>
            `
            : `
                <div class="hadith-arabic">
                    <p style="
                        font-family: var(--font-body);
                        font-size: 13px;
                        color: var(--text-light);
                        direction: ltr;
                        text-align: center;
                    ">
                        Naskah hadis belum dimasukkan.
                    </p>
                </div>
            `;


        const translation = hadith.translation
            ? `
                <div class="hadith-translation">

                    <h4>TERJEMAHAN</h4>

                    <p>
                        ${escapeHTML(hadith.translation)}
                    </p>

                </div>
            `
            : '';


        const source = hadith.source
            ? `
                <p class="hadith-source">
                    ${escapeHTML(hadith.source)}
                </p>
            `
            : '';


        return `
            <article
                class="hadith-card"
                id="hadith-${hadith.id}"
                data-hadith-id="${hadith.id}"
            >

                <div class="hadith-header">

                    <h3 class="hadith-title">
                        ${escapeHTML(hadith.title)}
                    </h3>

                    <span class="hadith-number">
                        Hadis ${formatNumber(hadith.id)}
                    </span>

                </div>

                ${arabicText}

                <div class="hadith-separator">
                    ۞
                </div>

                ${translation}

                ${source}

            </article>
        `;

    }).join('');


    // Terapkan ukuran font yang tersimpan.
    applyFontSize();

    // Aktifkan pengamatan progres bacaan.
    initializeReadingObserver();

}


/* =========================================
   07. HADITH SEARCH
========================================= */

function initializeSearch() {

    if (!searchInput) return;

    searchInput.addEventListener('input', function () {

        const keyword = this.value
            .trim()
            .toLowerCase();

        const filteredHadiths = hadiths.filter(hadith => {

            const title = hadith.title.toLowerCase();

            const number = String(hadith.id);

            const paddedNumber = formatNumber(hadith.id);

            return (
                title.includes(keyword) ||
                number.includes(keyword) ||
                paddedNumber.includes(keyword)
            );

        });

        renderContents(filteredHadiths);

    });

}


/* =========================================
   08. CONTENTS NAVIGATION
========================================= */

function initializeContentsNavigation() {

    if (!contentsList) return;

    contentsList.addEventListener('click', function (event) {

        const link = event.target.closest('.contents-item');

        if (!link) return;

        const id = Number(link.dataset.hadithId);

        const target = document.getElementById(`hadith-${id}`);

        if (!target) return;

        // Navigasi dilakukan oleh anchor href.
        // Simpan hadis tujuan sebagai progres bacaan.
        saveLastRead(id);

    });

}


/* =========================================
   09. READING PROGRESS
========================================= */

function updateReadingProgress(id) {

    if (!progressText || !progressBar) return;

    currentHadith = id;

    const percentage = (id / hadiths.length) * 100;

    progressText.textContent =
        `${id} dari ${hadiths.length} hadis`;

    progressBar.style.width = `${percentage}%`;

    saveLastRead(id);

}


function initializeReadingObserver() {

    if (!readerContent) return;

    if (hadithObserver) {
        hadithObserver.disconnect();
    }

    const cards = document.querySelectorAll('.hadith-card');

    if (!cards.length) return;

    hadithObserver = new IntersectionObserver(entries => {

        const visibleCards = entries
            .filter(entry => entry.isIntersecting)
            .sort((a, b) =>
                b.intersectionRatio - a.intersectionRatio
            );

        if (visibleCards.length > 0) {

            const id = Number(
                visibleCards[0].target.dataset.hadithId
            );

            updateReadingProgress(id);

        }

    }, {
        root: null,
        threshold: [0.2, 0.4, 0.6, 0.8],
        rootMargin: '-10% 0px -30% 0px'
    });


    cards.forEach(card => {
        hadithObserver.observe(card);
    });

}


/* =========================================
   10. LOCAL STORAGE
========================================= */

function saveLastRead(id) {

    try {
        localStorage.setItem(
            STORAGE_KEYS.lastRead,
            String(id)
        );
    } catch (error) {
        console.warn('Progres bacaan tidak dapat disimpan.', error);
    }

}


function getLastRead() {

    try {

        const saved = Number(
            localStorage.getItem(STORAGE_KEYS.lastRead)
        );

        if (
            Number.isInteger(saved) &&
            saved >= 1 &&
            saved <= hadiths.length
        ) {
            return saved;
        }

    } catch (error) {
        console.warn('Progres bacaan tidak dapat dibaca.', error);
    }

    return 0;

}


/* =========================================
   11. FONT SIZE CONTROLLER
========================================= */

function applyFontSize() {

    const arabicTexts = document.querySelectorAll(
        '.hadith-arabic'
    );

    arabicTexts.forEach(element => {

        element.style.fontSize = `${currentFontSize}px`;

    });

}


function saveFontSize() {

    try {
        localStorage.setItem(
            STORAGE_KEYS.fontSize,
            String(currentFontSize)
        );
    } catch (error) {
        console.warn('Ukuran font tidak dapat disimpan.', error);
    }

}


function loadFontSize() {

    try {

        const saved = Number(
            localStorage.getItem(STORAGE_KEYS.fontSize)
        );

        if (
            Number.isFinite(saved) &&
            saved >= FONT_MIN &&
            saved <= FONT_MAX
        ) {
            currentFontSize = saved;
        }

    } catch (error) {
        console.warn('Ukuran font tidak dapat dibaca.', error);
    }

}


function initializeFontController() {

    if (fontIncrease) {

        fontIncrease.addEventListener('click', function () {

            if (currentFontSize >= FONT_MAX) return;

            currentFontSize += FONT_STEP;

            applyFontSize();
            saveFontSize();

        });

    }


    if (fontDecrease) {

        fontDecrease.addEventListener('click', function () {

            if (currentFontSize <= FONT_MIN) return;

            currentFontSize -= FONT_STEP;

            applyFontSize();
            saveFontSize();

        });

    }

}


/* =========================================
   12. MOBILE NAVIGATION
========================================= */

function initializeMobileNavigation() {

    if (!navToggle || !navMenu) return;


    navToggle.addEventListener('click', function () {

        const isOpen = navMenu.classList.toggle('active');

        navToggle.classList.toggle('active', isOpen);

        navToggle.setAttribute(
            'aria-expanded',
            String(isOpen)
        );

        navToggle.setAttribute(
            'aria-label',
            isOpen ? 'Tutup navigasi' : 'Buka navigasi'
        );

    });


    // Tutup menu setelah memilih navigasi.

    navLinks.forEach(link => {

        link.addEventListener('click', function () {

            navMenu.classList.remove('active');

            navToggle.classList.remove('active');

            navToggle.setAttribute('aria-expanded', 'false');

        });

    });


    // Tutup menu ketika klik di luar navbar.

    document.addEventListener('click', function (event) {

        const clickedInsideNavbar =
            event.target.closest('.navbar');

        if (!clickedInsideNavbar) {

            navMenu.classList.remove('active');

            navToggle.classList.remove('active');

            navToggle.setAttribute('aria-expanded', 'false');

        }

    });

}


/* =========================================
   13. ACTIVE NAVIGATION ON SCROLL
========================================= */

function initializeActiveNavigation() {

    const sections = document.querySelectorAll(
        '#home, #contents, #about'
    );

    if (!sections.length) return;

    const sectionObserver = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const activeId = entry.target.id;

            navLinks.forEach(link => {

                const isActive =
                    link.getAttribute('href') === `#${activeId}`;

                link.classList.toggle('active', isActive);

            });

        });

    }, {
        rootMargin: '-25% 0px -65% 0px'
    });


    sections.forEach(section => {
        sectionObserver.observe(section);
    });

}


/* =========================================
   14. RESUME LAST READING
========================================= */

function initializeResumeReading() {

    const lastRead = getLastRead();

    if (!lastRead) return;

    const target = document.getElementById(
        `hadith-${lastRead}`
    );

    if (!target) return;

    /*
        Simpan posisi terakhir dan pulihkan ketika
        pembaca membuka kembali halaman.

        Jika tidak ingin fitur ini, hapus fungsi
        initializeResumeReading() dari init().
    */

    window.setTimeout(() => {

        target.scrollIntoView({
            behavior: 'instant',
            block: 'start'
        });

    }, 300);

}


/* =========================================
   15. UPDATE COPYRIGHT YEAR
========================================= */

function initializeYear() {

    const yearElement = document.getElementById(
        'current-year'
    );

    if (!yearElement) return;

    yearElement.textContent = new Date().getFullYear();

}


/* =========================================
   16. APPLICATION INITIALIZATION
========================================= */

function init() {

    // Load preferences.
    loadFontSize();

    // Render contents and reader.
    renderContents();
    renderReader();

    // Initialize interactive features.
    initializeSearch();
    initializeContentsNavigation();
    initializeFontController();
    initializeMobileNavigation();
    initializeActiveNavigation();
    initializeYear();

    // Restore last reading position.
    initializeResumeReading();

    console.log(
        'Arba’in An-Nawawi Digital berhasil diinisialisasi.'
    );

}


// Jalankan aplikasi setelah DOM siap.

document.addEventListener('DOMContentLoaded', init);

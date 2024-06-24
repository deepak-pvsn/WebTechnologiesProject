const PaperData = [
    {
      id: 1,
      title: 'A Survey on DNS Encryption: Current Development, Malware Misuse, and Inference Techniques',
      authors: 'Minzhao Lyu, Hassan Habibi Gharakheili, and Vijay Sivaraman',
      // abstract: 'The paper surveys the current landscape of DNS encryption technologies, examining their development, deployment, and implications for security and privacy.It addresses the challenges and risks posed by the misuse of DNS encryption by malware and reviews techniques for analyzing encrypted DNS traffic to infer malicious activities',
      problemDefinition: ['DoH_MD'],
      solutions: ['ML_BD'],
      methodology: ['System_Imp']
    },
    {
      id: 2,
      title: ' A Comprehensive Study of DNS-over-HTTPS Downgrade Attack',
      authors: 'Qing Huang',
      // abstract: 'The thesis by Qing Huang delves into the DNS-over-HTTPS (DoH) downgrade attack, focusing on its deployment, security implications, and impact on the Internet ecosystem. The study evaluates the feasibility and success rates of downgrade attacks on mainstream browsers, highlighting vulnerabilities in default settings and the lack of user notification when DoH is compromised.The research also explores potential countermeasures at both implementation and protocol levels to mitigate the risks associated with DoH downgrade attacks.',
      problemDefinition: ['DoH_MD'],
      solutions: ['ML_BD'],
      methodology:['Th_Analysis']
    },
    {
      id: 3,
      title: 'Measuring DNS-over-HTTPS Performance Around the World',
      authors: 'Rishabh Chhabra, Philip Winter, Steven Englehardt, and Nick Feamster',
      // abstract: 'The paper by Chhabra et al. explores the global performance impact of DNS-over-HTTPS (DoH), a protocol designed to enhance DNS privacy by encrypting queries.Through an extensive measurement campaign involving over 22,000 clients from 224 countries, the authors compare DoH\'s performance with traditional DNS (Do53). They analyze performance variability across different regions and providers, develop models to explain these differences, and propose guidelines for optimizing DoH deployment worldwide.',
      problemDefinition: ['ML_AI'],
      solutions: ['Theoretical'],
      methodology: ['Th_Analysis']
    },
    {
      id: 4,
      title: 'Exploring Simple Detection Techniques for DNS-over-HTTPS Tunnels',
      authors: 'Carmen Kwan, Paul Janiszewski, Shela Qiu, Cathy Wang, and Cecylia Bocovich',
      problemDefinition: ['DoH_MD'],
      solutions: ['ML_BD'],
      methodology: ['System_Imp']
    },
    {
      id: 5,
      title: 'Detecting Malicious Use of DNS over HTTPS Tunnels Using Statistical Traffic Analysis',
      authors: 'Marta Moure-Garrido, Celeste Campo, Carlos Garcia-Rubio',
      problemDefinition: ['ML_AI'],
      solutions: ['Theoretical'],
      methodology: ['Th_Analysis']
    },
    {
      id: 6,
      title: 'Insights into DoH: Traffic Classification for DNS over HTTPS in an Encrypted Network',
      authors: 'Fatema Bannat Wala, Scott Campbell, Mariam Kiran',
      problemDefinition: ['DoH_MD'],
      solutions: ['ML_BD'],
      methodology: ['System_Imp']
    },
    {
      id: 7,
      title: 'Detecting DNS over HTTPS (DoH) Tunneling Using TLS Fingerprints and Flow-Based Features',
      authors: 'Mengqi Zhan, Yang Li, Guangxi Yu, Bo Li, Weiping Wang',
      problemDefinition: ['DoH_MD'],
      solutions: ['ML_BD'],
      methodology: ['System_Imp','Th_Analysis']
    },
    {
      id: 8,
      title: 'Classifying DNS Tunneling Tools For Malicious DoH Traffic',
      authors: 'Rafa Alenezi, Simone A. Ludwig',
      problemDefinition: ['DoH_MD'],
      solutions: ['ML_BD'],
      methodology: []
    },
    {
      id: 9,
      title: 'Detection of Malicious DNS over HTTPS Traffic Using Machine Learning',
      authors: 'Sunil Kumar Singh, Pradeep Kumar Roy',
      problemDefinition: ['ML_AI'],
      solutions: ['Theoretical'],
      methodology: ['Th_Analysis']
    },
    {
      id: 10,
      title: 'Visualizing Realistic Benchmarked IDS Dataset: CIRA-CIC-DoHBrw-2020',
      authors: ' Mohammad Hafiz Mohd Yusof, Akram A. Almohammedi, Vladimir Shepelev, Osman Ahmed',
      problemDefinition: ['DoH_MD'],
      solutions: ['ML_BD'],
      methodology: ['System_Imp']
    },
    {
      id: 11,
      title: 'DNS Over HTTPS Detection Using Standard Flow Telemetry',
      authors: ' Kamil Jerabek , Karel Hynek, Ondrej Rysavy,  Ivana Burgetova',
      problemDefinition: ['DoH_MD'],
      solutions: ['ML_BD'],
      methodology: ['System_Imp','Th_Analysis']
    },
    {
      id: 12,
      title: 'Summary of DNS Over HTTPS Abuse',
      authors: ' Karel Hynek, Dmitrii Vekshin, Jan Luxemberg, Tomas Cejka, Armin Wasicek.',
      problemDefinition: ['DoH_MD'],
      solutions: ['ML_BD'],
      methodology: ['System_Imp']
    },
    {
      id: 13,
      title: 'Lightweight Double-Stage Scheme to Identify Malicious DNS over HTTPS (DoH) Traffic Using a Hybrid Learning Approach',
      authors: 'Qasem Abu Al-Haija , Manar Alohaly and Ammar Odeh',
      problemDefinition: ['DoH_MD'],
      solutions: ['ML_BD'],
      methodology: ['System_Imp']
    },
    {
      id: 14,
      title: 'Detection of Tunneling in DNS over HTTPS',
      authors: 'Hrithik Jha, Iishi Patel, Gang Li, Aswani Kumar Cherukuri, Sumaiya Thaseen',
      problemDefinition: [],
      solutions: [],
      methodology: ['Th_Analysis']
    },
    {
      id: 15,
      title: 'Malicious traffic Detection of DNS over HTTPS using Ensemble Machine Learning',
      authors: 'Sunil Kumar Singh and Pradeep Kumar Roy',
      problemDefinition: ['ML_AI'],
      solutions: ['Theoretical'],
      methodology: ['System_Imp','Th_Analysis']
    },
    {
      id: 16,
      title: 'Privacy of DNS-over-HTTPS: Requiem for a Dream?',
      authors: 'Levente Csikor, National University of Singapore, Himanshu Singh, IIIT, Naya Raipur,Min Suk Kang, KAIST,Dinil Mon Divakaran, Trustwave',
      problemDefinition: [],
      solutions: [],
      methodology: ['System_Imp']
    },
    {
      id: 17,
      title: 'Summary of DNS Over HTTPS Abuse',
      authors: ' K. Hynek, V. Bartoš, M. Uřičář, J. Andraščík, M. Celeda, P. Čeleda, J. Vykopal,M. Zadnik',
      problemDefinition: ['DoH_MD'],
      solutions: ['ML_BD'],
      methodology: ['Th_Analysis']
    },
    {
      id: 18,
      title: 'DNS over HTTPS Insight: Detecting DNS over HTTPS by Machine Learning',
      authors: 'Dmitrii Vekshin, Karel Hynek, Tomas Cejka',
      problemDefinition: ['DoH_MD'],
      solutions: ['ML_BD'],
      methodology: ['System_Imp']
    },
    {
      id: 19,
      title: 'Comparative Analysis of DNS over HTTPS Detectors',
      authors: 'Kamil Jerabek, Karel Hynek, Ondrej Rysavy',
      problemDefinition: [],
      solutions: [],
      methodology: ['System_Imp', 'Th_Analysis']
    },
    {
      id: 20,
      title: 'Generalized Classification of DNS over HTTPS Traffic with Deep Learning',
      authors: 'Lionel F. Gonzalez Casanova and Po-Chiang Lin',
      problemDefinition: ['ML_AI'],
      solutions: ['Theoretical'],
      methodology: ['Th_Analysis']
    },
  {
    id: 21,
    title: 'DNS Over HTTPS Traffic Analysis and Detection',
    authors: 'Carlos López Romera',
    problemDefinition: ['ML_AI'],
    solutions: ['Theoretical'],
    methodology: ['System_Imp', 'Th_Analysis']
  },
  {
    id: 23,
    title: 'On the Impact of DNS over HTTPS Paradigm on Cyber Systems',
    authors: 'Kimo Bumanglag, Houssain Kettani',
    problemDefinition: ['DoH_MD'],
    solutions: ['ML_BD'],
    methodology: ['System_Imp']
  },
  {
    id: 24,
    title: ':Detection of HTTPS Encrypted DNS Traffic',
    authors: 'Frank Nijeboer',
    problemDefinition: ['ML_AI'],
    solutions: ['ML_BD'],
    methodology: ['System_Imp']
  },
  {
    id: 25,
    title: 'An Explainable AI-Based Intrusion Detection System for DNS Over HTTPS (DoH) Attacks',
    authors: 'Tahmina Zebin, Shahadate Rezvy, Yuan Luo',
    problemDefinition: [],
    solutions: ['Theoretical'],
    methodology: ['System_Imp', 'Th_Analysis']
  },
  {
    id: 26,
    title: 'Vulnerability Detection of DNS over HTTPS Traffic using Ensemble Machine Learning',
    authors: 'Sunil Kumar Singh1 and Pradeep Kumar Roy',
    problemDefinition: ['ML_AI'],
    solutions: ['ML_BD'],
    methodology: ['System_Imp']
  },
  {
    id: 27,
    title: 'Oblivious DNS over HTTPS (ODoH): A Practical Privacy Enhancement to DNS',
    authors: 'Sudheesh Singanamalla , Suphanat Chunhapanya , Marek Vavruša , Tanya Verma, Peter, Wu Marwan Fayed , Kurtis Heimerl , Nick Sullivan , Christopher Wood.',
    problemDefinition: ['DoH_MD'],
    solutions: ['ML_BD'],
    methodology: ['System_Imp']
  },
  {
    id: 28,
    title: 'Feature Engineering and Machine Learning Model Comparison for Malicious Activity Detection in the DNS-Over-HTTPS Protocol',
    authors: ' Ram Basnet, Tenzin Doleck, Matthew Behnke, Nathan Briner, Drake Cullen, Katelynn,Schwerdtfeger',
    problemDefinition: ['ML_AI'],
    solutions: ['ML_BD'],
    methodology: ['Th_Analysis']
  },
  {
    id: 29,
    title: 'An ensemble framework for detection of DNS-Over-HTTPS (DOH) traffic',
    authors: 'Akarsh Aggarwal, Manoj Kumar',
    problemDefinition: ['DoH_MD'],
    solutions: ['Theoretical'],
    methodology: ['System_Imp']
  },
  {
    id: 30,
    title: 'Malicious Network Traffic De tection for DNS over HTTPS using Machine Learning Algorithms',
    authors: 'Lionel F. Gonzalez Casanova and Po-Chiang Lin',
    problemDefinition: ['ML_AI'],
    solutions: ['ML_BD'],
    methodology: ['System_Imp', 'Th_Analysis']
  },
  {
    id: 31,
    title: 'Detecting Malicious DNS over HTTPs (DoH) Connections via Machine Learning Techniques.',
    authors: 'MHD RAJA ABOU HARB* and Serhat Ozekes',
    problemDefinition: ['ML_AI'],
    solutions: ['ML_BD'],
    methodology: ['System_Imp', 'Th_Analysis']
  },
  {
    id: 32,
    title: 'Measurement and characterization of DNS over HTTPS traffic',
    authors: 'Kamil Jeˇr ́abeka , Ondˇrej Ryˇsav ́ya , Ivana Burgetov ́a',
    problemDefinition: ['DoH_MD'],
    solutions: ['ML_BD'],
    methodology: ['System_Imp']
  },
  {
    id: 33,
    title: 'XTS: A Hybrid Framework to Detect DNS-Over-HTTPS Tunnels Based on XGBoost and Cooperative Game Theory',
    authors: 'Mungwarakarama Irénée , Yichuan Wang , Xinhong Hei , Xin Song, Jean Claude Turiho and Enan Muhire Nyesheja.',
    problemDefinition: ['DoH_MD'],
    solutions: ['ML_BD'],
    methodology: ['System_Imp']
  },
  {
    id: 34,
    title: 'Classifying DNS over HTTPS Malicious/Benign Traffic Using Deep Learning Models',
    authors: 'Mandar Chougule, Praveen K, Amritha P. P, Sangeetha Viswanathan, K.S Ravichandran, M. Sethumadhavan, Masoumeh Rahimi, Amir H. Gandomi',
    problemDefinition: ['DoH_MD'],
    solutions: ['ML_BD'],
    methodology: ['System_Imp']
  },
  {
    id: 35,
    title: 'A novel deep-learning based approach to DNS over HTTPS network traffic detection',
    authors: 'Jan Fesl, Michal Konopa, Jiří Jelínek',
    problemDefinition: ['ML_AI'],
    solutions: ['Theoretical'],
    methodology: ['System_Imp', 'Th_Analysis']
  },
  {
    id: 36,
    title: 'Analysis of Well-Known DNS over HTTPS Resolvers',
    authors: 'Kamil Jerabek, Ondrej Rysavy',
    problemDefinition: ['DoH_MD'],
    solutions: ['ML_BD'],
    methodology: ['System_Imp']
  },
  {
    id: 37,
    title: 'Machine-learning based Detection of Malicious DNS-over-HTTPS (DoH) Traffic Based on Packet Captures.',
    authors: 'David Stalder Zurich, Switzerland',
    problemDefinition: ['ML_AI'],
    solutions: ['Theoretical'],
    methodology: ['System_Imp', 'Th_Analysis']
  },
  {
    id: 38,
    title: 'Detection of DNS over HTTPS Tunneling using Random Forest Supervised Learning',
    authors: 'Tejaswi Pednekar',
    problemDefinition: ['DoH_MD'],
    solutions: ['ML_BD'],
    methodology: ['System_Imp']
  },
  {
    id: 39,
    title: 'Fingerprinting DNS over HTTPS (DoH)',
    authors: 'John Choi',
    problemDefinition: ['ML_AI'],
    solutions: ['Theoretical'],
    methodology: ['System_Imp', 'Th_Analysis']
  },
  {
    id: 40,
    title: 'Global Impact of Migration to DNS-over-HTTPS',
    authors: 'RISHABH CHHABRA',
    problemDefinition: ['DoH_MD'],
    solutions: ['ML_BD'],
    methodology: ['System_Imp']
  },
  {
    id: 41,
    title: 'An Anomaly Detection Framework for DNS-over-HTTPS (DoH) Tunnel Using Time-series Analysis.',
    authors: 'Mohammad reza, Montazeri Shatoori',
    problemDefinition: ['ML_AI'],
    solutions: ['Theoretical'],
    methodology: ['System_Imp', 'Th_Analysis']
  },
  {
    id: 42,
    title: 'Detection of Malicious DNS-over-HTTPS Traffic: An Anomaly Detection Approach using Autoencoders.',
    authors: 'Sergio A. Salinas Monroy, Aman Kumar Gupta, and Garrett Wahlstedt',
    problemDefinition: ['DoH_MD'],
    solutions: ['ML_BD'],
    methodology: ['System_Imp', 'Th_Analysis']
  },
  {
    id: 43,
    title: 'DePL:Detecting Privacy Leakage in DNS Over HTTPS Traffic.',
    authors: 'Futai Zou,Dechao Meng,Wentao Gao,Linsen Li',
    problemDefinition: [],
    solutions: [],
    methodology: ['System_Imp']
  },
  {
    id: 44,
    title: 'CCSv6: A Detection Model for DNS-over-HTTPS Tunnel Using Attention Mechanism over IPv6',
    authors: 'Liang Jiao, Yujia Zhu, Xingyu Fu, Yi Zhou, Fenglin Qin, Qingyun Liu',
    problemDefinition: ['DoH_MD'],
    solutions: ['ML_BD'],
    methodology: ['System_Imp', 'Th_Analysis']
  },
  {
    id: 45,
    title: 'PACLASS: A Lightweight Classification Framework on DNS-over-HTTPS.',
    authors: 'Quanbo Pan, Hanbing Yan, Zhipeng Qin ,Bingzhi Qi',
    problemDefinition: ['DoH_MD'],
    solutions: ['ML_BD'],
    methodology: ['System_Imp']
  },
  {
    id: 46,
    title: 'NVESTIGATION OF OBLIVIOUS DNS OVER HTTPS AGAINST TRAFFIC ANALYSIS ATTACKS',
    authors: 'Mohammad Amir Salari, B.Sc.',
    problemDefinition: ['ML_AI'],
    solutions: ['Theoretical'],
    methodology: ['System_Imp', 'Th_Analysis']
  },
  {
    id: 47,
    title: 'Inline Traffic Analysis Attacks on DNS over HTTPS',
    authors: 'Thilini Dahanayaka, Zhiyi Wang, Guillaume Jourjon, Suranga Seneviratne',
    problemDefinition: ['ML_AI'],
    solutions: ['Theoretical'],
    methodology: ['System_Imp', 'Th_Analysis']
  },
  {
    id: 48,
    title: 'Classifying DNS Tunneling Tools For Malicious DoH Traffic',
    authors: 'Rafa Alenezi and Simone A. Ludwig',
    problemDefinition: ['DoH_MD'],
    solutions: ['ML_BD'],
    methodology: ['System_Imp']
  },
  {
    id: 49,
    title: 'DoH detection: Discovering hidden DNS.',
    authors: 'Karel Hynek, Tomas Cejka, Dmitrii Vekshin',
    problemDefinition: ['ML_AI'],
    solutions: ['Theoretical'],
    methodology: ['System_Imp', 'Th_Analysis']
  },
  {
    id: 50,
    title: 'Comparing the Effects of DNS, DoT, and DoH on Web Performance',
    authors: 'Austin Hounsel, Kevin Borgolte, Paul Schmitt, Jordan Holland, Nick Feamster',
    problemDefinition: ['DoH_MD'],
    solutions: ['ML_BD'],
    methodology: ['System_Imp']
  },
    
  ];
  
  export default PaperData;
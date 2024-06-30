const PaperData = [
  {
      id: 1,
      title: 'A Survey on DNS Encryption: Current Development, Malware Misuse, and Inference Techniques',
      authors: 'Minzhao Lyu, Hassan Habibi Gharakheili, and Vijay Sivaraman',
      url:'https://dl.acm.org/doi/10.1145/3547331',
      problemDefinition: ['DoH_MD'],
      solutions: ['ML_BD'],
      methodology: ['System_Imp'],
      problemContent: `The paper identifies the core problem of unencrypted DNS traffic, which exposes users to privacy breaches and security threats due to the plaintext nature of traditional DNS queries and responses. 
      This lack of encryption makes DNS communications vulnerable to interception and manipulation. 
      Additionally, the paper highlights the issue of malware leveraging DNS encryption to obfuscate its activities, thereby evading traditional security measures that depend on inspecting plaintext traffic. 
      The challenge lies in detecting and analyzing encrypted DNS traffic to identify and mitigate these malicious activities without compromising user privacy.`,
      solutionContent: `The paper reviews the deployment of standardized DNS encryption protocols such as DNS-overTLS (DoT), DNS-over-HTTPS (DoH), and DNS-over-QUIC (DoQ), which aim to secure DNS
      communications and protect user privacy by encrypting DNS queries and responses. To
      counteract the misuse of these encryption methods by malware, the paper suggests adopting
      advanced detection techniques, including traffic profiling, statistical analysis, and machine
      learning, to identify anomalous patterns in encrypted DNS traffic. These solutions aim to
      enhance the security and performance of DNS encryption while ensuring robust detection of
      malicious activities`,
      methodologyContent:`The paper employs a systematic literature review methodology, analyzing peer-reviewed papers,
      technical reports, and standards documents from 2016 to 2021. It categorizes the literature based
      on topics like DNS encryption standards, performance, practical deployment issues, and security
      vulnerabilities. The authors critically assess the current state of DNS encryption, including the
      challenges posed by malware misuse and the methods available for inferring information from
      encrypted DNS traffic. The paper concludes with a discussion of future research directions,
      emphasizing the need for improved detection techniques and more resilient DNS encryption
      mechanisms`
  },

    {
      id: 2,
      title: ' A Comprehensive Study of DNS-over-HTTPS Downgrade Attack',
      authors: 'Qing Huang',
      url:'https://www.usenix.org/system/files/foci20-paper-huang.pdf',
      problemDefinition: ['DoH_MD'],
      solutions: ['ML_BD'],
      methodology:['Th_Analysis'],
      problemContent:`The primary problem addressed in the thesis is the vulnerability of
mainstream browsers to DNS-over-HTTPS downgrade attacks. By analyzing the adoption
process of DoH in browsers and IETF documentations, the study identifies various attack vectors
and emphasizes the ease with which attackers can compromise user queries without detection.
The lack of user awareness and notification when DoH is unavailable poses a significant security
risk to Internet users.`,
      solutionContent:`To address the identified vulnerabilities, the thesis proposes
countermeasures at both the implementation and protocol levels. By revising DoH
implementations and protocols, it aims to enhance the security of DNS-over-HTTPS and mitigate
the risks associated with downgrade attacks. These solutions are designed to improve the
resilience of mainstream browsers against potential threats and safeguard user privacy and data
integrity in the face of evolving cyber threats.`,
      methodologyContent:`The methodology employed in the thesis includes a comprehensive
analysis of the resolution and communication process of DNS-over-HTTPS, the design of an
adversary model, and the development of downgrade attack methods targeting different phases of
DoH. Through experimental setups and tool flows, the study evaluates the response patterns of
browsers facing downgrade attacks in a realistic lab environment. By systematically categorizing
and evaluating the attacks, the research provides insights into the feasibility and effectiveness of
downgrade attacks on mainstream browsers across various operating systems.`
    },
    {
      id: 3,
      title: 'Measuring DNS-over-HTTPS Performance Around the World',
      authors: 'Rishabh Chhabra, Philip Winter, Steven Englehardt, and Nick Feamster',
      url: 'https://dl.acm.org/doi/pdf/10.1145/3487552.3487849',
      problemDefinition: ['ML_AI'],
      solutions: ['Theoretical'],
      methodology: ['Th_Analysis'],
      problemContent:`The primary problem addressed in the paper is the performance impact of adopting DNS-overHTTPS (DoH) compared to traditional DNS (Do53) from a global perspective. While DoH
improves privacy by encrypting DNS queries, it may introduce latency and slowdowns,
potentially varying significantly across different regions due to disparities in internet
infrastructure and economic conditions. The study aims to measure and understand these
performance variations, highlighting the feasibility and challenges of DoH adoption worldwide.`,
      solutionContent:`To address the problem, the authors propose a large-scale measurement campaign using the
BrightData proxy network to gather performance data from a diverse range of global locations.
They focus on comparing DoH and Do53 by analyzing key metrics such as query latency and
resolution time. The study also includes an evaluation of the performance of different DoH
providers, aiming to identify the best options for various regions. Additionally, the authors
suggest creating explanatory models to understand the factors contributing to performance
differences and offer recommendations for the effective global deployment of DoH.`,
      methodologyContent:`The methodology employed involves conducting a comprehensive measurement study using the
BrightData proxy network, which includes data collection from over 22,000 clients across 224
countries. The authors perform a comparative analysis of DoH and Do53, focusing on
performance metrics like latency and resolution time. They utilize empirical and statistical
methods to analyze the data and develop explanatory models that account for performance
variations across different regions. These models consider factors such as internet infrastructure
quality and economic conditions. Finally, the study concludes with data-driven recommendations
for optimizing DoH deployment globally, aiming to mitigate performance issues and ensure
equitable access.`
    },
    {
      id: 4,
      title: 'Exploring Simple Detection Techniques for DNS-over-HTTPS Tunnels',
      authors: 'Carmen Kwan, Paul Janiszewski, Shela Qiu, Cathy Wang, and Cecylia Bocovich',
      url: 'https://dl.acm.org/doi/pdf/10.1145/3473604.3474563',
      problemDefinition: ['DoH_MD'],
      solutions: ['ML_BD'],
      methodology: ['System_Imp'],
      problemContent:`The paper addresses the challenge of detecting DNS-over-HTTPS (DoH)
tunnels used for censorship circumvention. These tunnels obscure DNS queries within HTTPS
traffic, evading traditional detection methods and enabling users to bypass censorship controls.`,
      solutionContent:`To tackle this problem, the authors propose threshold-based attacks based
on traffic characteristics such as average payload length, packet rate, and throughput. These
attacks aim to distinguish between normal DoH traffic and DoH tunneling traffic effectively
while minimizing collateral damage in a censoring environment. Additionally, traffic shaping
techniques are explored to modify the dnstt tool's traffic patterns, making it more difficult to
detect.`,
      methodologyContent:`The study employs a measurement study approach using real-world
datasets and experiments. It begins with an analysis of traffic characteristics in normal DoH
traffic to establish baseline thresholds for detection. Threshold-based attacks are then developed
and tested against datasets containing both circumventor (dnstt) and non-circumventor (DoH)
traffic to evaluate their accuracy, recall, precision, and collateral damage. Furthermore, the dnstt
tool is modified to shape its traffic to resemble non-circumventor traffic patterns, and the impact
of these modifications on dnstt's performance metrics such as throughput and page load time is
assessed. This empirical approach provides insights into the effectiveness and limitations of
detecting DoH tunnels and defending against detection through traffic shaping strategies.`
    },
    {
      id: 5,
      title: 'Detecting Malicious Use of DNS over HTTPS Tunnels Using Statistical Traffic Analysis',
      authors: 'Marta Moure-Garrido, Celeste Campo, Carlos Garcia-Rubio',
      url: 'https://dl.acm.org/doi/10.1145/3551663.3558605',
      problemDefinition: ['ML_AI'],
      solutions: ['Theoretical'],
      methodology: ['Th_Analysis'],
      problemContent:`The primary challenge addressed is the identification and differentiation of
benign DoH traffic from malicious DoH traffic. Malicious actors can exploit DoH to hide their
activities, making it difficult to detect anomalous behaviors or patterns that indicate malicious
intent. Traditional methods of traffic analysis and detection are often inadequate due to the
encrypted nature of DoH traffic, necessitating new approaches that leverage statistical analysis
and machine learning techniques.`,
      solutionContent:`The paper proposes a solution based on statistical traffic analysis combined
with machine learning classifiers. It suggests extracting and analyzing specific statistical features
from DoH traffic, such as connection duration, packet size distributions, and time intervals
between packets. These features are utilized to train machine learning models to distinguish
between benign and malicious traffic. The focus is on selecting the most discriminative features
to achieve high detection accuracy while minimizing false positives and false negatives.`,
      methodologyContent:`The methodology involves several key steps: first, collecting and
preprocessing a dataset containing both benign and malicious DoH traffic. Statistical parameters
are then extracted from the traffic data, focusing on features that are likely to differentiate
between benign and malicious behaviors. Machine learning classifiers, including Random Forest
(RF), Decision Tree (DT), and K-Nearest Neighbors (KNN), are applied to the dataset to build
and evaluate detection models. The performance metrics such as accuracy, precision, recall, and
F1-score are used to assess the effectiveness of each model in accurately classifying traffic. The
study emphasizes empirical evaluation using real-world or realistic simulation data to validate
the proposed approach's efficacy in practical scenarios.`
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
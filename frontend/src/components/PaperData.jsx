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
    methodology: ['System_Imp', 'Th_Analysis'],
    url: 'https://www.proquest.com/openview/973656a2de922a09225d080fad4d1168/1?pq-origsite=gscholar&cbl=18750&diss=y',
    problemContent: `The paper addresses the issue of website fingerprinting attacks on the Oblivious DNS over HTTPS 
(ODoH) protocol. Encrypted DNS protocols like ODoH are designed to enhance user privacy by 
preventing the interception and modification of DNS queries. However, the research highlights that 
even these encrypted protocols are vulnerable to website fingerprinting attacks. These attacks can 
identify which website a user is visiting by analyzing patterns in network traffic, such as packet size 
and timing, despite the encryption of the actual content`,
    solutionContent: `The paper proposes using machine learning models to conduct website fingerprinting on ODoH 
traffic. By collecting and analyzing ODoH traffic data, the research aims to demonstrate that it is 
possible to achieve high accuracy in identifying websites even with encrypted DNS. The key 
contributions include:
1. Developing a comprehensive dataset of ODoH traffic from various locations.
2. Demonstrating the feasibility of website fingerprinting attacks on ODoH with machine 
learning models.
3. Evaluating the impact of different factors such as location, resolver, and time stability on 
the effectiveness of these attacks`,
    methodologyContent: `The methodology involves several steps:
1. Data Collection: The researchers identified the 100 most visited websites and collected 
ODoH traffic for these sites from various locations to ensure spatiotemporal diversity. This data 
collection was performed in a controlled environment to build a robust dataset.
2. Feature Extraction: Different features were extracted from the ODoH traffic data, focusing 
on metadata such as packet sizes and timings, which are critical for website fingerprinting.
3. Machine Learning Models: Various machine learning models were trained using the 
extracted features to perform website fingerprinting. The models' performance was evaluated in 
both open-world (where new, unseen websites are introduced) and closed-world (limited to known 
websites) scenarios.
4. Performance Evaluation: The study measured the accuracy and F1-scores of the models. It 
also analyzed the effects of factors like location changes, different DNS resolvers, and temporal 
stability on the model's performance. The experiments demonstrated that website fingerprinting 
attacks on ODoH could achieve high accuracy, with one model reaching 91% accuracy and a 
weighted-average F1-score of 90%`
  },
  {
    id: 47,
    title: 'Inline Traffic Analysis Attacks on DNS over HTTPS',
    authors: 'Thilini Dahanayaka, Zhiyi Wang, Guillaume Jourjon, Suranga Seneviratne',
    problemDefinition: ['ML_AI'],
    solutions: ['Theoretical'],
    methodology: ['System_Imp', 'Th_Analysis'],
    url: 'https://ieeexplore.ieee.org/abstract/document/9843593',
    problemContent: `The paper addresses the vulnerability of DNS over HTTPS (DoH) traffic to traffic analysis attacks, 
despite the use of encryption. Previous research demonstrated such attacks under strong 
assumptions like closed-set classification or post-event analysis. This work aims to show traffic 
analysis attacks on DoH without these strong assumptions, focusing on more realistic inline 
attacks and open-set classification scenarios.`,
    solutionContent: `1. An inline traffic analysis attack using variable length LSTM models that can achieve high 
accuracy with as few as 10 packets.
2. A novel open-set classification method based on the Jaccard Similarity Index (JSI) of top-n 
predictions, which can identify target websites among background traffic without requiring openset samples during training.
3. Analysis of the impact of user behavior (like DNS caching) on attack accuracy.
4. Evaluation of padding as a defense mechanism against these attacks.`,
    methodologyContent: `The methodology primarily involves system implementation and measurement studies:
1. Data Collection: The authors collected DoH traffic data from the top 201 websites in Alexa's list 
over 11 weeks, creating datasets for closed-set and open-set scenarios. They also created a user 
behavior emulation dataset to study the effects of caching.
2. Model Implementation: They implemented a variable length LSTM model for inline traffic 
analysis. For open-set classification, they compared their proposed JSI method with existing 
methods like Background Class and OpenMax.
3. Experiments: The authors conducted various experiments including temporal analysis, concept 
drift analysis, and defense analysis. They used different subsets of their collected data to train and 
test their models under various scenarios.
4. Performance Evaluation: The effectiveness of the attacks was evaluated using metrics such as 
accuracy, F-score, and confusion analysis. They also analyzed the impact of different input lengths 
on the attack performance.
`
  },
  {
    id: 48,
    title: 'Classifying DNS Tunneling Tools For Malicious DoH Traffic',
    authors: 'Rafa Alenezi and Simone A. Ludwig',
    problemDefinition: ['DoH_MD'],
    solutions: ['ML_BD'],
    methodology: ['System_Imp'],
    url: 'https://ieeexplore.ieee.org/abstract/document/9660136',
    problemContent: `The paper addresses the issue of detecting and classifying DNS tunneling tools used for malicious 
DNS over HTTPS (DoH) traffic. As DoH has introduced new privacy challenges and can be exploited 
by attackers to bypass security measures, there is a need to identify the specific DNS tunneling 
tools being used to generate malicious DoH traffic`,
    solutionContent: `The authors propose using various machine learning models to classify and predict the DNS 
tunneling tools (dns2tcp, DNSCat2, and Iodine) utilized for generating malicious DoH traffic. They 
investigate eight different machine learning algorithms to determine which ones perform best at 
this classification task`,
    methodologyContent: `The methodology involves applying and comparing eight machine learning models:
1. Recurrent Neural Network (RNN)
2. Long Short-Term Memory (LSTM) 
3. Gated Recurrent Unit (GRU)
4. Random Forest Classifier (RFC)
5. Decision Tree Classifier (DTC) 
6. Gradient Boosting Classifier (GBC)
7. K-Neighbors Classifier (KNC)
8. XGBoost Classifier (XGBC)
The authors use the CIRA-CIC-DoHBrw-2020 dataset containing samples of malicious DoH traffic 
generated by different DNS tunneling tools. They apply the machine learning models to this data to 
classify the traffic into the correct DNS tunneling tool categories. The performance of the models is 
evaluated using metrics such as precision, recall, F1-score, accuracy, mean absolute error, mean 
squared error, and confusion matrices. The methodology involves training and testing the models 
using 10-fold cross-validation to obtain robust results.`
  },
  {
    id: 49,
    title: 'DoH detection: Discovering hidden DNS.',
    authors: 'Karel Hynek, Tomas Cejka, Dmitrii Vekshin',
    problemDefinition: ['ML_AI'],
    solutions: ['Theoretical'],
    methodology: ['System_Imp', 'Th_Analysis'],
    url: 'https://pesw.fit.cvut.cz/2020/PESW_2020.pdf#page=19',
    problemContent: `The paper "DoH detection: Discovering hidden DNS" by Karel Hynek, Tomas Cejka, and Dmitrii 
Vekshin addresses the issue of detecting DNS over HTTPS (DoH) traffic. The primary problem is that 
while DoH aims to enhance user privacy by encrypting DNS queries, it also obscures network 
visibility. This can hinder network security measures that rely on DNS traffic for identifying 
malicious activities, such as malware communication and data exfiltration. Existing detection 
methods that block known DoH resolver IP addresses are inadequate because users or malicious 
actors can use private or less-known DoH resolvers, bypassing these controls`,
    solutionContent: `The authors propose a solution based on machine learning to detect DoH traffic using statistical 
features derived from IP flow data. The key steps include:
1. Developing a large dataset of DoH traffic from popular browsers (Firefox and Chrome) by 
simulating browsing activities.
2. Extracting relevant features from this traffic data to differentiate DoH from regular HTTPS 
traffic.
3. Using machine learning algorithms, specifically an AdaBoosted decision tree, to classify 
and detect DoH traffic with high accuracy.`,
    methodologyContent: `The methodology includes several key components:
1. Data Collection: Traffic data was collected from autonomous browsing sessions of 
websites from Alexa's top 10,000 list using DoH-enabled browsers (Firefox and Chrome). This setup 
aimed to simulate realistic DoH traffic patterns.
2. Feature Extraction: The researchers identified 18 features from the collected traffic data 
that could distinguish DoH traffic. These features included the duration of the connection, packet 
sizes, and burstiness of traffic. For example, DoH connections tend to have longer durations and 
more consistent packet sizes due to the encapsulation of DNS queries within HTTPS packets.
3. Machine Learning Models: Various machine learning algorithms were tested, including 5-
NN and C4.5 decision tree. The AdaBoosted decision tree was found to be the most effective, 
achieving an accuracy of 99.6% and a class recall of 95.5% for DoH traffic.
4. System Implementation: The practical implementation required enhancing an IP flow 
exporter (ipfixprobe) to capture additional packet information within HTTPS connections. The flow 
data was then processed and analyzed using the NEMEA system, an open-source framework for 
network traffic analysis. Experimental validation was conducted using Jupyter notebooks in Python, 
with potential for deployment as a NEMEA module for real-time detection.
5. Performance Evaluation: The performance of the machine learning classifier was evaluated 
using a 5-fold cross-validation technique. The results were presented in a confusion matrix, 
demonstrating high accuracy and reliability of the proposed detection method.
This comprehensive approach combines data collection, feature extraction, machine learning, and 
practical implementation to address the challenge of detecting DoH traffic, ensuring both privacy 
and security in network environments.`
  },
  {
    id: 50,
    title: 'Comparing the Effects of DNS, DoT, and DoH on Web Performance',
    authors: 'Austin Hounsel, Kevin Borgolte, Paul Schmitt, Jordan Holland, Nick Feamster',
    problemDefinition: ['DoH_MD'],
    solutions: ['ML_BD'],
    methodology: ['System_Imp'],
    url: 'https://dl.acm.org/doi/abs/10.1145/3366423.3380139',
    problemContent: `The paper addresses the performance implications of using encrypted DNS protocols (DNS-overTLS and DNS-over-HTTPS) compared to traditional unencrypted DNS. While encrypted DNS 
provides privacy benefits, its impact on query response times and overall web page load times was 
not well understood, especially under different network conditions`,
    solutionContent: `The authors propose several optimizations to improve DNS performance:
1. Opportunistic partial responses: Allowing clients to send multiple questions in a single query and 
servers to respond with partial answers as they become available.
2. Wire format caching: Caching the DNS response wire format to improve tail response times.
3. Dropping support for EDNS Client-Subnet at public recursors to potentially improve page load 
times.`,
    methodologyContent: `The study employs a measurement-based approach:
1. System Implementation: The authors developed custom tools using getdns and libcurl libraries 
to measure precise DNS query response times for Do53, DoT, and DoH.
2. Measurement Study: They conducted extensive measurements from five global vantage points 
using Amazon EC2 instances. Measurements included DNS query response times and web page 
load times for the top 1,000 websites and websites ranked 99,000-100,000.
3. Emulation: The researchers emulated various network conditions, including 4G, lossy 4G, and 3G 
networks, to understand how different DNS protocols perform under varying network quality.
4. Real Prototype: The study used Mozilla Firefox 67.0.1 in headless mode, controlled by Selenium, 
to measure actual page load times. This setup allowed for realistic measurements of user 
experience with different DNS protocols.
The methodology combines elements of system implementation, large-scale measurement 
studies, network emulation, and real-world prototyping to provide a comprehensive analysis of 
DNS protocol performance across various scenarios and network conditions`
  },
    
  ];
  
  export default PaperData;
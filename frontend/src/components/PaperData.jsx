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
      problemDefinition: ['DoH_MD'],
      solutions: ['ML_BD'],
      methodology:['Th_Analysis'],
      url:'https://www.usenix.org/system/files/foci20-paper-huang.pdf',
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
      methodology: ['System_Imp'],
      url:'https://dl.acm.org/doi/pdf/10.1145/3589012.3594895',
      problemContent: `The primary challenge addressed is the identification and classification of
DoH traffic within encrypted network traffic. Traditional methods of DNS monitoring and
security are rendered ineffective with the widespread adoption of DoH, as it obscures DNS
traffic patterns. This lack of visibility can potentially aid malicious activities that hide within
encrypted DoH traffic, circumventing traditional security measures.`,
      solutionContent:`The paper proposes leveraging machine learning techniques and statistical
analysis to classify DoH traffic accurately. By analyzing packet-level data and statistical features
of DoH transactions, the study aims to distinguish between benign DoH usage and potentially
malicious activities. The goal is to develop effective classifiers that can operate in real-world
encrypted network environments, providing network defenders with tools to detect and mitigate
threats hidden within DoH traffic.`,
      methodologyContent:`The methodology involves a systematic approach combining data collection,
feature extraction, and machine learning model development. They collected network traffic data
from various geographic regions and used passive monitoring techniques to capture encrypted
DoH traffic. Feature extraction focused on statistical patterns and packet sequence analysis
unique to DoH transactions. Machine learning models were trained and evaluated using this
dataset to classify DoH traffic accurately. The study utilizes both simulation and measurement
study approaches to validate the effectiveness of their proposed classification methods in real-
world scenarios.`
    },
    {
      id: 7,
      title: 'Detecting DNS over HTTPS (DoH) Tunneling Using TLS Fingerprints and Flow-Based Features',
      authors: 'Mengqi Zhan, Yang Li, Guangxi Yu, Bo Li, Weiping Wang',
      problemDefinition: ['DoH_MD'],
      solutions: ['ML_BD'],
      methodology: ['System_Imp','Th_Analysis'],
      url:'https://www.sciencedirect.com/science/article/abs/pii/S1389128622001104',
      problemContent: `The proliferation of DNS over HTTPS (DoH) has introduced a security
challenge by enabling data exfiltration through encrypted DNS traffic, which bypasses traditional
detection methods. Detecting such covert channels is crucial for network security to prevent
unauthorized data transfer that could exploit organizational defenses. Existing approaches for
detecting DNS tunneling are ineffective against encrypted DoH traffic, necessitating innovative
methods to identify and mitigate this emerging threat.`,
      solutionContent:`The paper proposes a methodology centered on TLS fingerprints and flow-
based features to detect DoH tunneling. TLS fingerprints are extracted from the TLS handshake
phase of DoH traffic, leveraging unique patterns that differentiate legitimate DoH connections
from covert tunnels. Flow-based features complement TLS fingerprints by analyzing traffic
characteristics such as packet size, timing intervals, and request-response patterns. These features
are used to train machine learning classifiers capable of distinguishing between normal DoH
traffic and instances of data exfiltration.`,
      methodologyContent:`The methodology involves a comprehensive approach combining
theoretical analysis and empirical evaluation. Initial theoretical groundwork includes the
identification of TLS fingerprints that are specific to DoH clients. This is followed by the
implementation of machine learning classifiers trained on flow-based features extracted from
real-world DoH traffic datasets. The evaluation spans simulation-based experiments and real-
world network deployments to validate the effectiveness of the proposed detection method under
various conditions. The study emphasizes the practical deployment of TLS fingerprinting and
flow-based analysis as a viable strategy for detecting and mitigating DoH tunneling threats in
enterprise and network security contexts.`
    },
    {
      id: 8,
      title: 'Classifying DNS Tunneling Tools For Malicious DoH Traffic',
      authors: 'Rafa Alenezi, Simone A. Ludwig',
      problemDefinition: ['DoH_MD'],
      solutions: ['ML_BD'],
      methodology: [],
      url:'https://ieeexplore-ieee-org.ezp.slu.edu/document/9660136',
      problemContent: `The primary challenge addressed in the paper is the detection of DNS
tunneling in encrypted DoH traffic, which poses a significant threat due to its potential use by
malicious actors to exfiltrate data covertly. Traditional detection techniques are rendered
ineffective in the presence of encryption, necessitating the exploration of ML-based approaches
to accurately classify and identify these threats.`,
      solutionContent:`To tackle the problem, the paper proposes the application of multiple ML
models such as LSTM, GRU, RNN, RFC, DTC, GBC, KNC, and XGBoost. These models are
utilized to analyze patterns and features extracted from network traffic data. The objective is to
leverage these models' capabilities to distinguish normal from malicious DoH traffic by
recognizing behavioral and structural anomalies associated with DNS tunneling.`,
      methodologyContent:`The methodology involves the implementation and evaluation of ML
models on a large-scale dataset (CIRA-CIC-DoHBrw-2020) sourced from UNB. The evaluation
metrics include accuracy, mean absolute error (MAE), mean squared error (MSE), classification
tables, and confusion matrices. The study utilizes these metrics to quantify the effectiveness of
each ML model in correctly classifying different DNS tunneling tools across various
experiments. The research compares the performance of LSTM, GRU, RNN, RFC, DTC, GBC,
KNC, and XGBoost models, highlighting XGBoost and RFC as the top performers with high
accuracy rates in detecting malicious DNS tunneling activities in DoH traffic.`
    },
    {
      id: 9,
      title: 'Detection of Malicious DNS over HTTPS Traffic Using Machine Learning',
      authors: 'Sunil Kumar Singh, Pradeep Kumar Roy',
      problemDefinition: ['ML_AI'],
      solutions: ['Theoretical'],
      methodology: ['Th_Analysis'],
      url:'https://ieeexplore-ieee-org.ezp.slu.edu/stamp/stamp.jsp?tp=&arnumber=9312004',
      problemContent: `The primary challenge tackled in the paper is the identification and
classification of DoH traffic to distinguish between legitimate (benign) and potentially harmful
(malicious) activities. Traditional methods of DNS analysis may be inadequate due to the
encryption used in DoH, which obscures the content and purpose of DNS queries. This poses
significant security risks, as malicious actors can exploit DoH to evade detection and exfiltrate
data or perform other harmful actions.`,
      solutionContent:`The paper proposes the use of machine learning classifiers to analyze
features extracted from DoH traffic and effectively differentiate between benign and malicious
requests. It explores the application of classifiers such as Naive Bayes, Logistic Regression,
Random Forest, K-Nearest Neighbors (KNN), and Gradient Boosting. These classifiers are
trained using a dataset comprising both benign and malicious DoH traffic instances to develop
models capable of accurately identifying malicious patterns.`,
      methodologyContent:`The methodology involves several key steps: dataset collection and
preprocessing, feature selection using tools like DoHMeter, dataset splitting for training and
testing, and evaluation of classifier performance using metrics such as Precision, Recall, F1-
Score, and Area Under the Curve (AUC). The study employs a rigorous experimental approach
where multiple classifiers are trained and evaluated comprehensively to determine their
effectiveness in detecting malicious DoH traffic. The results demonstrate that ensemble learning-
based classifiers like Random Forest and Gradient Boosting achieve the highest accuracy and
reliability in classifying DoH traffic, offering robust solutions to mitigate the security threats
associated with encrypted DNS traffic.`
    },
    {
      id: 10,
      title: 'Visualizing Realistic Benchmarked IDS Dataset: CIRA-CIC-DoHBrw-2020',
      authors: ' Mohammad Hafiz Mohd Yusof, Akram A. Almohammedi, Vladimir Shepelev, Osman Ahmed',
      problemDefinition: ['DoH_MD'],
      solutions: ['ML_BD'],
      methodology: ['System_Imp'],
      url:'https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9878102',
      problemContent: `The main problem addressed is the inadequacy of existing public IDS
datasets in reflecting real-world cyber threats accurately. Many current datasets lack real-time
scenarios, recent malware attacks, and comprehensive layer 3 (L3) information, leading to
unreliable results when used for IDS development and testing.`,
      solutionContent:`To mitigate these issues, the authors propose a sophisticated visualization
approach that enhances the understanding and usability of the CIRA-CIC-DoHBrw-2020 dataset.
By leveraging techniques like Principal Component Analysis (PCA), Gaussian Mixture Models
(GMM), and graph theory (Eigen Centrality), they aim to provide clearer insights into network
traffic patterns and anomaly detection criteria.`,
      methodologyContent:`The methodology involves several key components: first, the
preprocessing and feature extraction from the dataset using PCA to reduce dimensionality and
identify critical features. Next, GMM clustering is applied to classify network traffic into distinct
clusters based on various parameters such as packet lengths and port numbers. The visualization
techniques employed, including 2D and 3D graphs, help in intuitively understanding the
distribution of benign and attack traffic within these clusters. This approach not only aids in
anomaly detection but also supports the development of more accurate and efficient IDS models
by identifying and visualizing critical network behaviors associated with cyber threats.`
    },
    {
      id: 11,
      title: 'DNS Over HTTPS Detection Using Standard Flow Telemetry',
      authors: ' Kamil Jerabek , Karel Hynek, Ondrej Rysavy,  Ivana Burgetova',
      problemDefinition: ['DoH_MD'],
      solutions: ['ML_BD'],
      methodology: ['System_Imp','Th_Analysis'],
      url:'https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10123708',
      problemContent: `The primary challenge addressed in the paper is the detection of DNS over
HTTPS (DoH) traffic within network flows. Traditional DNS traffic is increasingly being
replaced by DoH due to its encryption capabilities, making it challenging for network
administrators to monitor and filter DNS requests. This shift undermines network security
measures that rely on DNS inspection for threat detection and mitigation.`,
      solutionContent:`The paper proposes a novel detection system that leverages standard flow
telemetry, specifically NetFlowV5 records, which are commonly available in network
monitoring infrastructures. Instead of relying on specialized monitoring devices or intrusive
packet inspection, the system uses machine learning classifiers and active probing techniques to
identify patterns indicative of DoH traffic. The approach aims to achieve high accuracy in DoH
detection while minimizing false positives, thus enhancing network security without requiring
significant infrastructure upgrades.`,
      methodologyContent:`The methodology involves the implementation of a detection pipeline
that integrates IP-based filtering, machine learning classifiers trained on a comprehensive dataset
of DoH traffic, and active verification through probing. The system's efficacy is validated using
both synthetic and real-world datasets, demonstrating its robustness against variations in traffic
patterns and network environments. The study includes theoretical analysis supported by
empirical evaluations to assess the system's performance metrics such as accuracy, false positive
rate, and detection latency. This approach ensures the practical deployment of the DoH detection
system across large-scale network infrastructures, addressing both technical feasibility and real-
world applicability.`
    },
    {
      id: 12,
      title: 'Summary of DNS Over HTTPS Abuse',
      authors: ' Karel Hynek, Dmitrii Vekshin, Jan Luxemberg, Tomas Cejka, Armin Wasicek.',
      problemDefinition: ['DoH_MD'],
      solutions: ['ML_BD'],
      methodology: ['System_Imp'],
      url:'https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9775718',
      problemContent: `The primary problem addressed in the paper is the misuse of DNS over
HTTPS for malicious purposes. Traditional DNS queries are plaintext and can be easily
monitored or intercepted, making them vulnerable to surveillance or manipulation. In contrast,
DoH encrypts DNS traffic, making it harder to detect and analyze malicious activities that may
be hidden within encrypted channels. This presents a significant challenge for network
administrators and security analysts who need effective methods to identify and mitigate threats
without compromising user privacy.`,
      solutionContent:`The paper discusses various solutions proposed in recent literature to
address the misuse of DoH. These include machine learning-based detection techniques, traffic
analysis methods, and behavioral analysis approaches. Each solution aims to distinguish between
legitimate and malicious DoH traffic, enabling proactive security measures to be implemented.
Additionally, the paper emphasizes the importance of collaborative efforts among researchers,
industry stakeholders, and regulatory bodies to develop standardized approaches and policies for
managing DoH traffic securely.`,
      methodologyContent:`The methodology employed in the reviewed studies varies widely,
encompassing machine learning models, traffic flow analysis, and experimental validation
through simulations or real-world deployments. Researchers have utilized datasets containing
DoH traffic samples to train and evaluate detection algorithms, leveraging features such as traffic
patterns, payload analysis, and anomaly detection techniques. Theoretical analyses explore the
vulnerabilities introduced by DoH, while practical implementations involve the deployment of
monitoring tools and detection systems within network infrastructures. These methodologies
collectively contribute to a deeper understanding of DoH abuse scenarios and effective strategies
for mitigating associated risks in diverse network environments.`
    },
    {
      id: 13,
      title: 'Lightweight Double-Stage Scheme to Identify Malicious DNS over HTTPS (DoH) Traffic Using a Hybrid Learning Approach',
      authors: 'Qasem Abu Al-Haija , Manar Alohaly and Ammar Odeh',
      problemDefinition: ['DoH_MD'],
      solutions: ['ML_BD'],
      methodology: ['System_Imp'],
      url:'https://www.mdpi.com/1424-8220/23/7/3489',
      problemContent: `The primary problem addressed in the paper is the vulnerability of DNS traffic to various
security attacks such as DNS phishing, hijacking/spoofing, malware, and denial-of-service
attacks. Traditional DNS traffic is unencrypted, making it susceptible to interception and
manipulation. Although the DNS over HTTPS (DoH) protocol was introduced to enhance
security by encrypting DNS traffic, attackers have adapted their strategies to exploit even DoH
traffic. Thus, there is a need for an effective mechanism to identify and mitigate malicious DoH
traffic to protect users and organizations from potential threats.`,
      solutionContent:`The paper proposes a novel lightweight double-stage detection system for identifying malicious
DoH traffic. The system employs a hybrid machine learning approach with two layers of
classification:
1. First Layer: This layer uses random fine trees (RF) to examine and classify the traffic as
either DoH or non-DoH.
2. Second Layer: In this layer, Adaboost trees (ADT) are used to further analyze the DoH
traffic, classifying it as either benign or malicious.`,
      methodologyContent:`The methodology involves a combination of system implementation, theoretical analysis, and
experimental evaluation:
1. System Implementation: The system is designed as a two-layer classifier, where the first
layer filters the traffic into DoH and non-DoH categories using random fine trees. The
second layer scrutinizes the DoH traffic further, classifying it into benign or malicious
categories using Adaboost trees.
2. Feature Selection and Data Balancing: The model employs principal component
analysis (PCA) to reduce the number of features to six, optimizing the feature set for
efficiency. Additionally, a random under-sampling (RUS) approach is used to balance the
dataset, ensuring that the training samples are representative and not biased.`
    },
    {
      id: 14,
      title: 'Detection of Tunneling in DNS over HTTPS',
      authors: 'Hrithik Jha, Iishi Patel, Gang Li, Aswani Kumar Cherukuri, Sumaiya Thaseen',
      problemDefinition: [],
      solutions: [],
      methodology: ['Th_Analysis'],
      url:'https://ieeexplore-ieee-org.ezp.slu.edu/stamp/stamp.jsp?tp=&arnumber=9673380',
      problemContent: `The paper addresses the challenge of detecting DNS tunneling in DNS over HTTPS (DoH)
environments. DoH provides increased privacy and security by encrypting DNS queries, but this
also makes it harder to detect malicious DNS tunneling attempts. Traditional methods of
detecting DNS tunneling do not work with DoH due to the encryption. The authors aim to
develop methods to detect DoH tunneling using only unencrypted packet metadata like size and
timing.`,
      solutionContent:`The authors propose using machine learning techniques to detect DoH tunneling based on packet
sizes and request durations. They explore using various supervised machine learning models like
K-Nearest Neighbor (KNN), Support Vector Machines (SVM), Random Forests, and hybrid deep
learning architectures like xDeepFM to identify anomalous traffic patterns indicative of
tunneling.`,
      methodologyContent:`The methodology involves several steps:
1. Dataset creation: The authors set up a simulated DoH tunneling environment using a custom
server and Python scripts. They collected packet data using Wireshark and combined it with an
existing dataset to create a large dataset of over 545,000 packet flows.
2. Feature analysis: They analyzed the collected data to identify key features correlated with
tunneling activity, focusing on packet size and timing metrics.
3. Model implementation: Multiple machine learning models were implemented and tested,
including KNN, SVM, Random Forests, and DeepFM. The models were trained to detect outliers
in the dataset that could indicate tunneling.
4. Evaluation: The models were evaluated using the F1 score metric on the collected dataset.
Performance comparisons were made between the different approaches.`
    },
    {
      id: 15,
      title: 'Malicious traffic Detection of DNS over HTTPS using Ensemble Machine Learning',
      authors: 'Sunil Kumar Singh and Pradeep Kumar Roy',
      problemDefinition: ['ML_AI'],
      solutions: ['Theoretical'],
      methodology: ['System_Imp','Th_Analysis'],
      url:'https://journal.uob.edu.bh/bitstream/handle/123456789/4585/IJCDS-110185-1570723501.pdf?sequence=3&isAllowed=y',
      problemContent: `The paper addresses the security vulnerabilities of DNS over HTTPS (DoH), a new protocol
designed to improve DNS security but which has its own drawbacks like bypassing local
firewalls. The authors aim to detect malicious DoH traffic using machine learning techniques, as
DoH is vulnerable to attacks despite its encryption.`,
      solutionContent:`The authors propose an ensemble machine learning approach to detect and classify DoH traffic
as benign or malicious. They evaluate various ML models including decision trees, logistic
regression, K-nearest neighbors, and random forests. An ensemble framework combining
multiple classifiers is developed, along with using the random forest ensemble method.`,
      methodologyContent:`The methodology involves:
1. Using a benchmark DoH dataset (CIRA-CIC-DoHBrw-2020) containing both benign and
malicious traffic samples.
2. Preprocessing the data and selecting relevant features using the DoHMeter tool.
3. Splitting the data into 75% training and 25% testing sets.
4. Training individual ML classifiers (decision tree, logistic regression, KNN) as well as creating
an ensemble framework combining these classifiers with a voting mechanism.
5. Additionally training a random forest classifier.
6. Evaluating the models using metrics like precision, recall, F1-score and confusion matrices.
7. Comparing the performance of individual classifiers, the created ensemble framework, and the
random forest classifier.`
    },
    {
      id: 16,
      title: 'Privacy of DNS-over-HTTPS: Requiem for a Dream?',
      authors: 'Levente Csikor, National University of Singapore, Himanshu Singh, IIIT, Naya Raipur,Min Suk Kang, KAIST,Dinil Mon Divakaran, Trustwave',
      problemDefinition: [],
      solutions: [],
      methodology: ['System_Imp'],
      url:'https://ieeexplore.ieee.org/abstract/document/9581227?casa_token=HWl_K8_9FjgAAAAA:ktPY8HzQ_UX3wwWgHeVE3GlxCDsRET51nqwYY53m43QU1j-K8yFHe0eYGY8jNvD4D6quYRlKdkA',
      problemContent: `The primary problem addressed in this paper is whether DoH traffic is truly indistinguishable
from regular encrypted web traffic. Despite the encryption of DNS queries and responses to
enhance privacy, there is concern that adversaries could still identify and filter DoH traffic,
thereby undermining its purpose. The paper seeks to determine the effectiveness of existing
methods in detecting DoH traffic and to explore potential solutions to enhance its privacy
guarantees.`,
      solutionContent:`To address the problem, the authors propose:
1. Machine Learning-Based Traffic Classification: Developing a supervised machine
learning model to classify HTTPS traffic into web and DoH categories. This model aims
to identify DoH traffic with high accuracy using minimal visible properties of the
encrypted traffic.
2. Mitigation Techniques: Introducing effective padding techniques for DoH packets to
reduce the classification accuracy of the machine learning model. These techniques aim
to make it impractical for adversaries to filter DoH traffic without significant false
positives.`,
      methodologyContent:`The methodology involves several key steps:1. Data Collection: Automated collection of DoH traffic traces from 25 different DoH
servers, including major providers like Google and Cloudflare. The traffic was generated
by visiting the top 20,000 domains from Alexa’s top one million websites at various times
and locations.
2. Machine Learning Model Development: Training a supervised machine learning model
using the collected traffic data to classify HTTPS traffic into web and DoH categories.
The model was evaluated in both closed-world and open-world settings to assess its
effectiveness.
3. Evaluation of Mitigation Techniques: Implementing and testing various padding
techniques to obscure DoH traffic characteristics, thereby reducing the classification
accuracy of the machine learning model. The effectiveness of these techniques was
measured by the model's ability to correctly identify DoH traffic under different
conditions.`
    },
    {
      id: 17,
      title: 'Analyzing the costs (and benefits) of DNS, DoT, and DoH for the modern web',
      authors: 'Austin Hounsel, Kevin Borgolte, Paul Schmitt, Jordan Holland, and Nick Feamster',
      problemDefinition: ['DoH_MD'],
      solutions: ['ML_BD'],
      methodology: ['Th_Analysis'],
      url:'https://ieeexplore.ieee.org/abstract/document/9775718',
      problemContent: `The paper addresses the costs of DNS, DoT and DoH which, although
designed to enhance user privacy by encrypting DNS queries, has become a tool for
malicious activities. Traditional DNS transmits queries in plain text, making them
susceptible to surveillance and profiling. DoH encrypts these queries within HTTPS traffic,
protecting user privacy but simultaneously concealing malicious activities from network
security tools. The challenge lies in the inability of third parties to analyze DoH traffic
without decryption, which is often impractical. The paper highlights how this encryption
allows attackers to use DoH for covert communication channels, making it harder to detect
and block malicious activities.`,
      solutionContent:`The authors propose several solutions to mitigate the abuse of DoH. These include the
implementation of machine learning models to detect DoH traffic based on its
characteristics, such as the duration of connections, and the development of methods to
recognize and block DoH traffic in highly restricted networks. Additionally, they suggest
the use of intermediate proxies as outlined in the Oblivious DoH (ODoH) proposal, which
aims to prevent data centralization and potential misuse by separating the client's IP
address from the DNS request payload. The paper also discusses the necessity of forced
domain shutdowns by TLD operators and the blocking of known DoH resolvers as
potential countermeasures.`,
      methodologyContent:`The methodology employed in the paper includes a combination of system implementation,
theoretical analysis, and measurement studies. The researchers utilized automated analysis
pipelines to identify and inspect suspicious software samples that use DoH, manually
decompiling and deobfuscating the source codes to study their behavior. They also
performed machine learning-based detection of DoH traffic, achieving high accuracy by
training models on the traffic characteristics. Additionally, the paper discusses the
implementation of DoH detection in network environments, emphasizing the challenges
posed by encrypted DNS traffic and proposing solutions for maintaining situational
awareness in network security.`
    },
    {
      id: 18,
      title: 'DNS over HTTPS Insight: Detecting DNS over HTTPS by Machine Learning',
      authors: 'Dmitrii Vekshin, Karel Hynek, Tomas Cejka',
      problemDefinition: ['DoH_MD'],
      solutions: ['ML_BD'],
      methodology: ['System_Imp'],
      url:'https://dl.acm.org/doi/pdf/10.1145/3407023.3409192',
      problemContent: `The primary challenge addressed is the identification and classification of
DoH traffic amidst regular HTTPS traffic. DoH, by encrypting DNS queries, obscures network
visibility and could potentially be exploited by malicious actors for covert communication or to
bypass security controls. Traditional methods relying on IP addresses and ports are ineffective
against DoH, necessitating novel approaches to detect and differentiate DoH from legitimate
HTTPS traffic reliably.`,
      solutionContent:`The paper proposes the use of machine learning algorithms for DoH
detection and classification. It identifies 18 key traffic features, such as IP flow duration and
packet size variance, deemed critical for distinguishing DoH from other traffic types. Feature
importance analysis using the Gini index guides the selection of features optimized for DoH
recognition and client classification tasks. The study also introduces dataset creation
methodologies involving browser-based traffic capture and proxy-generated DoH traffic
simulation to train and evaluate ML models effectively.`,
      methodologyContent:`The methodology encompasses the creation of a specialized dataset
containing over 1 million bidirectional IP flows, annotated with ground truth labels for DoH and
non-DoH traffic. Data collection involves capturing DoH traffic from browsers configured to use
DoH and from a Cloudflare DoH proxy deployed in a network environment. Machine learning
algorithms including K-Nearest Neighbors, C4.5 Decision Tree, Random Forest, Naive Bayes,
and Ada-boosted Decision Tree are evaluated using 5-Fold cross-validation to assess their
accuracy in DoH detection and client classification. The study employs techniques like SMOTE
for oversampling and NearMiss-3 for undersampling to address class imbalance and enhance
model performance.`
    },
    {
      id: 19,
      title: 'Comparative Analysis of DNS over HTTPS Detectors',
      authors: 'Kamil Jerabek, Karel Hynek, Ondrej Rysavy',
      problemDefinition: [],
      solutions: [],
      methodology: ['System_Imp', 'Th_Analysis'],
      url:'https://www.sciencedirect.com/science/article/pii/S1389128624002846',
      problemContent: `The paper addresses the challenge of detecting DNS over HTTPS (DoH) traffic, which is used to
enhance privacy and security by encrypting DNS requests. The issue lies in the difficulty of
detecting DoH traffic for network operators and security analysts, as it blends with regular
HTTPS traffic, potentially allowing malicious activities to go unnoticed.`,
      solutionContent:`The paper proposes using machine learning (ML) and deep learning (DL) methods to detect DoH
traffic. Seven different DoH detection models were recreated and evaluated under six different
experiments to assess their performance across various deployment scenarios, including model
transferability, usability, and longevity.`,
      methodologyContent:`The methodology involves:
Data Collection: Utilizing a large collection of DoH datasets and a novel 5-week dataset for
thorough testing.
Experiments: Conducting six different experiments to evaluate the performance of seven DoH
detection models.
Metrics: Using precision, recall, accuracy, and F1-score to measure the performance of different
ML and DL methods.
Model Comparison: Comparing the performance of models like Random Forest, Decision Tree,
KNN, 1D CNN, 2D CNN, and LSTM.`
    },
    {
      id: 20,
      title: 'Generalized Classification of DNS over HTTPS Traffic with Deep Learning',
      authors: 'Lionel F. Gonzalez Casanova and Po-Chiang Lin',
      problemDefinition: ['ML_AI'],
      solutions: ['Theoretical'],
      methodology: ['Th_Analysis'],
      url:'https://ieeexplore.ieee.org/abstract/document/9689667?casa_token=yBqvk6uPMygAAAAA:-mhGozxaz5nECPJNYKEMvhb12MEMiPBdgfeyebDB24tZOrlH3-iCQ6IYTiS7-DYnBKHy8AgWqHM',
      problemContent: `The paper addresses the challenge of classifying DNS over HTTPS (DoH) traffic, particularly in
detecting malicious DoH traffic. The authors highlight two main issues:
1. Many existing machine learning models for DoH classification use features specific to certain
network environments, limiting their generalizability.
2. The data imbalance problem in DoH traffic datasets, where benign and malicious traffic
samples are not equally represented.`,
      solutionContent:`1. Development of generalized deep learning models (LSTM and BiLSTM) for DoH traffic
classification that use fewer, more generalizable features.
2. Design of a data processing pipeline to handle feature selection and data imbalance in the
CIRA-CIC-DoHBrw-2020 dataset.`,
      methodologyContent:`The methodology involves data processing and machine learning techniques:
1. Data Processing:
- Feature selection: Dropping environment-specific and time-specific features to improve
generalizability.
- Missing data handling: Removing instances with missing values.
- Train-test split: 80% training, 20% testing.
- Data imbalance handling: Resampling technique to balance different traffic classes.
- One-hot encoding and feature scaling.
2. Machine Learning:
- Implementation of LSTM and BiLSTM models.- Hyperparameter optimization using grid search.
- Model training and evaluation using the processed dataset.
- Performance comparison between LSTM and BiLSTM models in terms of accuracy and
computation time.
- Use of confusion matrices and performance metrics to assess model effectiveness.`
    },
    {
      id: 21,
      title: "DNS Over HTTPS Traffic Analysis and Detection",
      authors: "Carlos López Romera",
      url: "https://openaccess.uoc.edu/bitstream/10609/118266/6/lopezcTFM0620memory.pdf",
      problemDefinition: ["ML_AI"],
      solutions: ["Theoretical"],
      methodology: ["System_Imp", "Th_Analysis"],
      problemContent: "The paper addresses several challenges related to network traffic analysis, encrypted traffic classification, and privacy concerns in DNS and web traffic. DNS Privacy and Traffic Analysis involves analyzing the leakage of information in DNS over TLS (DoT) and DNS over HTTPS (DoH) to assess privacy vulnerabilities, with various studies evaluating the privacy guarantees of encrypted DNS protocols (e.g., DoH and DoT) using traffic analysis techniques through measurement studies and traffic analysis approaches. Encrypted Traffic Classification focuses on classifying encrypted traffic (e.g., HTTPS, webmail) for network management and security purposes, employing machine learning (ML) techniques such as supervised and unsupervised learning for traffic classification through ML models, flow-based classification, and deep learning approaches. Website Fingerprinting involves identifying specific websites visited by users through encrypted traffic analysis, with robust techniques like k-fingerprinting and deep learning-based methods developed to detect website visits despite encryption, evaluated through experimental setups and simulations. TLS and HTTPS Security aims to enhance security and bypass filtering mechanisms based on Server Name Indication (SNI) in TLS and HTTPS, proposing encryption improvements and bypass techniques for HTTPS filtering, validated experimentally using traffic manipulation and emulation to assess the effectiveness of bypass strategies.",
      solutionContent: "The paper proposes various solutions to address challenges in DNS privacy, encrypted traffic classification, website fingerprinting, and TLS and HTTPS security. Solutions for DNS Privacy and Traffic Analysis include evaluating the privacy guarantees of encrypted DNS protocols (e.g., DoH and DoT) using traffic analysis techniques. For Encrypted Traffic Classification, machine learning (ML) techniques such as supervised and unsupervised learning are applied for traffic classification using ML models, flow-based classification, and deep learning approaches. Website Fingerprinting solutions involve developing robust techniques like k-fingerprinting and deep learning-based methods to detect website visits despite encryption, with evaluations through experimental setups and simulations. TLS and HTTPS Security solutions propose encryption improvements and bypass techniques for HTTPS filtering, validated experimentally through traffic manipulation and emulation to assess the effectiveness of bypass strategies.",
      methodologyContent: "The paper employs several methodologies, including Measurement Studies, which involve real-world data collection using tools like TCPDump and network probes to analyze DNS queries, encrypted traffic patterns, and network behaviors. Traffic Analysis Techniques are used, involving statistical analysis, payload inspection, and flow-based classification to understand network traffic characteristics and identify patterns. Machine Learning Models are implemented, including supervised and unsupervised ML algorithms (e.g., neural networks, autoencoders) for traffic classification and anomaly detection. Experimental Setup involves simulation environments and prototype implementations to test the feasibility and performance of proposed solutions in controlled settings. Security Analysis includes vulnerability assessment and security evaluation of encryption protocols (e.g., DoH, DoT) and web security mechanisms (e.g., HTTPS) through theoretical analysis and practical experimentation."
    },
    {
      id: 22,
      title: "Evaluation and Optimization of learning-based DNS over HTTPS Traffic Classification",
      authors: "Yue Li; Abdulhalim Dandoush; Ji Liu",
      url: "https://ieeexplore.ieee.org/abstract/document/9615659?casa_token=_xEmt_mCwiMAAAAA:QlDXpGK4uSxVHe-30u_WcgaFzBn6-wqy26Ycbx84JcJUQH4ch39YOVgLKVSFKnJw1JkeTjFAtFk",
      problemDefinition: ["ML_AI"],
      solutions: ["Theoretical"],
      methodology: ["Th_Analysis"],
      problemContent:`The primary issue addressed is the challenge of detecting malicious DoH traffic. DoH, while
beneficial for privacy, can be exploited by malicious actors to hide harmful activities, making it
difficult to distinguish between benign and malicious traffic using traditional methods.`,
      solutionContent:`The paper explores several ML and DL algorithms for the classification task, including:ML Algorithms: k-Nearest Neighbors (kNN), Decision Tree, and Random Forest.
DL Algorithms: 1D Convolutional Neural Network (CNN), 2D CNN, and Long Short-Term Memory
(LSTM) networks.`,
      methodologyContent:`Dataset Preprocessing:

Remove timestamp, encode labels, replace nulls with zeros
Convert IP addresses to integers
Balance dataset using SMOTE
Normalize features with MinMax scaling, except for port numbers

Classification Algorithms:

k-Nearest Neighbors: Optimize by varying k
Decision Tree: Adjust tree depth for best performance
Random Forest: Fine-tune depth for improved classification
Deep Learning: Explore CNN layer/filter variations and LSTM configurations`
    },

    {
      id: 23,
      title: "On the Impact of DNS over HTTPS Paradigm on Cyber Systems",
      authors: "Kimo Bumanglag, Houssain Kettani",
      url: "https://ieeexplore.ieee.org/abstract/document/9092077?casa_token=PDmhksnHr4oAAAAA:wX3uTGOUEYIlnp6eLbdXfy9l3BQA2bnhDuajZN4ls7Xt3Wt_tb6-8L2ag6pFi_2znjmpcnAMCh0",
      problemDefinition: ["DoH_MD"],
      solutions: ["ML_BD"],
      methodology: ["System_Imp"],
      problemContent: "While DoH improves privacy and security for end users by encrypting DNS traffic, it poses challenges for network defenders trying to detect malicious activity through DNS monitoring. Many existing detection methods rely on analyzing unencrypted DNS queries and responses, which are obscured when DoH is used.",
      solutionContent: "The paper proposes several solutions to address the challenges posed by DoH. These include using TLS man-in-the-middle decryption at network proxy servers to inspect DoH traffic, decrypting DoH traffic and transforming it into standard DNS format to apply existing detection methods, developing new detection techniques specifically for DoH traffic formats, and implementing organizational policies to control DoH usage.",
      methodologyContent: "The authors conducted an experimental study using a virtual machine test environment to generate and analyze DoH traffic. They set up a DoH proxy server and client, performed DoH queries using both GET and POST methods, and captured the network traffic. By logging TLS session keys, they were able to decrypt and inspect the DoH queries and responses. They compared the structure of standard DNS and DoH traffic, identifying differences in query and response formats. The authors also analyzed which features used by existing DNS-based detection methods are still observable in encrypted DoH traffic, highlighting the challenges DoH poses for current detection approaches and the need for new methods."
    },
    {
      id: 24,
      title: "Detection of HTTPS Encrypted DNS Traffic",
      authors: "Frank Nijeboer",
      url: "https://essay.utwente.nl/82085/1/Nijeboer_BA_EEMCS.pdf",
      problemDefinition: ["ML_AI"],
      solutions: ["ML_BD"],
      methodology: ["System_Imp"],
      problemContent: "The paper aims to evaluate the effectiveness of DNS over HTTPS (DoH) in preventing on-path devices from eavesdropping and interfering with DNS requests. The specific problems addressed include assessing whether DoH effectively hides DNS queries from on-path observers, investigating methods that can detect DoH traffic despite its integration with HTTPS, and understanding implications for network administrators who need visibility and control over DNS traffic.",
      solutionContent: "The paper proposes several solutions to address these challenges, including adding padding to DoH packets to obfuscate packet sizes and make it harder for observers to distinguish DoH traffic from regular HTTPS traffic, developing a proof-of-concept tool for pattern analysis of DoH packet sizes to potentially identify visited websites, and evaluating JA3 fingerprinting and its limitations in detecting DoH traffic, suggesting improvements or alternative methods for accurate identification.",
      methodologyContent: "The methodology includes implementing a pattern analysis tool to analyze DoH packet sizes and identify patterns that could reveal visited websites through real-world measurements and analysis, employing JA3 fingerprinting to assess its effectiveness in identifying DoH traffic and focusing on its limitations and false positive rates, conducting theoretical analysis of DoH’s privacy implications and its effectiveness in hiding DNS queries within HTTPS traffic, simulating the impact of adding padding to DoH packets to assess its effectiveness in masking packet sizes and implications on bandwidth usage, and analyzing real-world DoH traffic to validate findings and assess practical implications for network management and privacy."
    },
    {
    id: 25,
        title: 'An Explainable AI-Based Intrusion Detection System for DNS Over HTTPS (DoH) Attacks',
        authors: 'Tahmina Zebin, Shahadate Rezvy, Yuan Luo',
      url: "https://ieeexplore.ieee.org/abstract/document/9796558?casa_token=9dcWorZDqbQAAAAA:OZIRrNvuWve18btg-BHj9Xvm3ZrKy1JTfBrm1q4hFsnfh_Ocp_VPCmIpluqRL5Rlm3gAg0ODqow",
    problemDefinition: [],
        solutions: ['Theoretical'],
        methodology: ['System_Imp', 'Th_Analysis'],
    problemContent: "The problem addressed in the paper is the accurate detection and classification of DNS over HTTPS (DoH) attacks. The DoH protocol, while enhancing privacy and security for internet users, hinders network administrators from identifying suspicious network traffic generated by malware and malicious tools. The need for a solution that can effectively detect and classify DoH attacks is crucial for maintaining network security.",
      solutionContent: "The proposed solution involves implementing an explainable AI-based intrusion detection system using a novel machine learning framework. The authors utilized the CIRA-CIC-DoHBrw-2020 dataset to develop a model capable of accurately detecting and classifying DNS over HTTPS attacks. They specifically employed a balanced and stacked Random Forest classifier to achieve high precision, recall, and F1 score for the classification task.",
      methodologyContent: "The methodology discussed in the paper includes using a publicly available dataset (CIRA-CIC-DoHBrw-2020) for model development, employing a balanced and stacked Random Forest classifier for accurate detection and classification, implementing explainable AI methods to provide transparent and interpretable results, and highlighting feature contributions to enhance understanding of the model's decision-making process."
    },
    {
      id: 26,
      title: "Vulnerability Detection of DNS over HTTPS Traffic using Ensemble Machine Learning",
      authors: "Sunil Kumar Singh and Pradeep Kumar Roy",
      url: "https://journal.uob.edu.bh/bitstream/handle/123456789/4472/1570723501.pdf?sequence=1&isAllowed=y",
      problemDefinition: ["ML_AI"],
      solutions: ["ML_BD"],
      methodology: ["System_Imp"],
      problemContent: "The paper addresses the challenge of detecting malicious activity within DNS over HTTPS (DoH) traffic. DoH encrypts DNS queries within HTTPS sessions, enhancing privacy but complicating traditional network monitoring and threat detection. The specific problem is to distinguish between benign and malicious DoH traffic effectively.",
      solutionContent: "The paper proposes an ensemble learning approach combining multiple classifiers: Decision Tree, Logistic Regression, K-Nearest Neighbor, and Random Forest. Each classifier independently predicts the class (benign or malicious) of DoH traffic samples, and a voting mechanism aggregates these predictions to achieve a final classification decision. The proposed solution involves training the classifiers on a dataset comprising selected features extracted from PCAP files, including source port, destination port, packet length statistics, and others. The effectiveness of each classifier is evaluated using metrics such as precision, recall, and F1-score to assess their ability to correctly identify both benign and malicious DoH traffic.",
      methodologyContent: "The methodology in the paper includes dataset preparation by selecting and extracting relevant features from a large dataset of PCAP files capturing DoH traffic. Classifier training and testing involves splitting the dataset into training (75%) and testing (25%) sets, with each classifier (Decision Tree, Logistic Regression, K-Nearest Neighbor, Random Forest) trained on the training set and evaluated on the testing set to measure its performance in terms of precision, recall, and F1-score. An ensemble learning approach is used to combine the individual predictions from each classifier through a voting-based mechanism to determine the final classification of each sample. Performance evaluation is conducted using precision, recall, and F1-score metrics to provide insights into the effectiveness of each classifier and the ensemble approach in accurately identifying malicious DoH traffic while minimizing false positives and false negatives."
    },
    {
      id: 27,
      title: "Oblivious DNS over HTTPS (ODoH): A Practical Privacy Enhancement to DNS",
      authors: "Sudheesh Singanamalla, Suphanat Chunhapanya, Marek Vavruša, Tanya Verma, Peter Wu, Marwan Fayed, Kurtis Heimerl, Nick Sullivan, Christopher Wood",
      url: "https://arxiv.org/pdf/2011.10121",
      problemDefinition: ["DoH_MD"],
      solutions: ["ML_BD"],
      methodology: ["System_Imp"],
      problemContent: "The primary issue addressed is the lack of privacy in traditional DNS (Domain Name System) queries, which are typically sent in clear-text. This exposes users' browsing activities to various entities, including ISPs (Internet Service Providers) and potential attackers. The research focuses on the vulnerabilities and privacy concerns associated with DNS traffic, particularly when using encrypted variants like DNS-over-HTTPS (DoH). The goal is to enhance privacy and security for users' DNS queries without significant performance drawbacks.",
      solutionContent: "The paper proposes the use of Oblivious DNS-over-HTTPS (ODoH) as a solution. ODoH aims to improve privacy by ensuring that DNS queries and responses are encrypted and obfuscated, preventing the resolver from knowing both the client and the content of the queries. This is achieved by introducing a proxy between the client and the resolver, which handles the encrypted communication without the ability to link requests to clients. This method is designed to mitigate privacy concerns and prevent ISPs or other entities from profiling users based on their DNS queries.",
      methodologyContent: "The methodology involves the implementation, deployment, and evaluation of the ODoH protocol. The researchers conducted global measurements to assess the DNS response times and web page load times to evaluate the performance impact of the protocol. They also examined potential ethical implications and provided a roadmap for the adoption of ODoH. The evaluation included theoretical analysis, practical deployment, and performance measurements to ensure that the protocol is feasible and offers the intended privacy benefits without significant performance degradation."
    },
    {
      id: 28,
      title: "Feature Engineering and Machine Learning Model Comparison for Malicious Activity Detection in the DNS-Over-HTTPS Protocol",
      authors: "Ram Basnet, Tenzin Doleck, Matthew Behnke, Nathan Briner, Drake Cullen, Katelynn Schwerdtfeger",
      url: "https://ieeexplore.ieee.org/abstract/document/9540699",
      problemDefinition: ["ML_AI"],
      solutions: ["ML_BD"],
      methodology: ["Th_Analysis"],
      problemContent: "The problem addressed in the research is the need to improve the robustness and accuracy of classifying DDoS attacks using machine learning algorithms. The initial model developed by Banadaki achieved high accuracy but had limitations due to the lack of diversity in IP addresses in the dataset, potentially leading to overfitting.",
      solutionContent: "The team proposed solutions to enhance the model's performance by introducing a dataset with a more comprehensive set of features and implementing a two-layer model approach. The primary goal was to address the shortcomings identified in Banadaki's methodology and improve the model's ability to differentiate between DoH and Non-DoH traffic, ultimately classifying samples as either Malicious DoH or Benign DoH.",
      methodologyContent: "The methodology utilized in the research involved recreating the experiment with a new dataset containing 34 features and implementing a two-layer model. The first layer aimed to separate DoH from Non-DoH traffic, while the second layer focused on classifying samples as Malicious DoH or Benign DoH. By addressing the lack of diversity in the IP addresses and refining the classification process, the team sought to enhance the model's accuracy and robustness in detecting DDoS attacks."
    },
    {
      id: 29,
      title: "An ensemble framework for detection of DNS-Over-HTTPS (DOH) traffic",
      authors: "Akarsh Aggarwal, Manoj Kumar",
      url: "https://link.springer.com/article/10.1007/s11042-023-16956-9",
      problemDefinition: ["DoH_MD"],
      solutions: ["Theoretical"],
      methodology: ["System_Imp"],
      problemContent: "The paper focuses on the security vulnerabilities associated with DNS over HTTPS (DOH). The DOH protocol wraps DNS packets in HTTPS to secure DNS transmissions, protecting user privacy, preventing phishing, and reducing DNS data modification attacks. However, this encapsulation makes it difficult to detect DNS traffic, potentially allowing malware to exploit the HTTPS connection to bypass security measures, making the system vulnerable to data exfiltration and tunneling attacks.",
      solutionContent: "The paper proposes an ensemble learning framework for detecting DOH traffic, addressing the limitations of existing supervised learning techniques. It introduces a two-layered architecture to classify DOH and non-DOH traffic and further identify malicious DOH traffic. The framework aims to improve the detection accuracy and robustness by employing ensemble learning techniques to capture model anomalies and conduct a thorough analysis of key contributors influencing DOH traffic.",
      methodologyContent: "The methodology involves several steps: System Implementation with a two-layered architecture where the first layer classifies DOH and non-DOH traffic, and the second layer further identifies malicious DOH traffic. The ensemble learning framework uses methods such as XGBoost, Random Forest, and others to enhance detection accuracy and reliability. Theoretical Analysis includes robust feature engineering and selection techniques to improve model performance and detailed error analysis of false positives and false negatives. The Measurement Study involves classification metrics such as precision, recall, F-score, and confusion metrics to accurately detect DOH traffic, and a comparison with state-of-the-art machine learning techniques and recent classification methods presented in the literature."
    },
    {
      id: 30,
      title: "Malicious Network Traffic Detection for DNS over HTTPS using Machine Learning Algorithms",
      authors: "Lionel F. Gonzalez Casanova and Po-Chiang Lin",
      url: "https://www.nowpublishers.com/article/OpenAccessDownload/SIP-2022-0058",
      problemDefinition: ["ML_AI"],
      solutions: ["ML_BD"],
      methodology: ["System_Imp", "Th_Analysis"],
      problemContent: "The paper addresses the issue of detecting Domain Name System over HTTPS (DoH) traffic, which poses challenges due to its encrypted nature. The DoH protocol encapsulates DNS messages within HTTPS, enhancing privacy but making it harder to detect and monitor for malicious activities. This encryption can be exploited by malware to bypass security measures, making traditional threat detection techniques less effective. The goal is to develop robust methods to analyze and monitor DoH traffic to improve security and efficiency.",
      solutionContent: "The authors propose using machine learning models to categorize DoH traffic into benign and malicious categories. They focus on ensemble learning techniques, specifically Random Forest, Decision Tree, k-nearest neighbor, and Logistic Regression, to classify DoH traffic effectively. Additionally, they suggest using deep learning models such as Fully-Connected Convolutional Neural Networks (FCN) and various types of Recurrent Neural Networks (RNNs), including Long Short-Term Memory (LSTM) and Gated Recurrent Units (GRUs), to improve detection accuracy.",
      methodologyContent: "The methodology involves several steps: Data Preprocessing using the CIC-DoHBrw-2020 dataset, which includes both benign and malicious DoH traffic, with a focus on handling imbalanced data. Model Training includes training multiple machine learning and deep learning models, evaluating their performance using metrics such as precision, recall, F1-score, and confusion matrix. Evaluation compares ensemble learning-based Random Forest classifiers, which show high accuracy, with deep learning models like FCN and LSTM for anomaly detection. Overall, the paper provides a comprehensive approach to detecting and categorizing DoH traffic using advanced machine learning and deep learning techniques."
    },
    {
      id: 31,
      title: "Detecting Malicious DNS over HTTPS (DoH) Connections via Machine Learning Techniques.",
      authors: "MHD RAJA ABOU HARB* and Serhat Ozekes",
      url: "https://kuwaitjournals.org/jer/index.php/JER/article/view/14175",
      problemDefinition: ["ML_AI"],
      solutions: ["ML_BD"],
      methodology: ["System_Imp", "Th_Analysis"],
      problemContent: "The paper addresses the security vulnerabilities associated with the DNS over HTTPS (DoH) protocol. While DoH provides encryption for DNS queries, enhancing user privacy and protecting against certain types of attacks, it also introduces challenges. These include making DNS traffic harder to detect, which can be exploited by malware to bypass security measures and exfiltrate data. The study focuses on developing robust methods to detect and categorize DoH traffic to mitigate these risks.",
      solutionContent: "The paper proposes an ensemble learning framework to detect and classify DoH traffic. This includes the use of various machine learning algorithms such as Decision Trees, Logistic Regression, k-nearest neighbors, and Random Forests. The authors emphasize the importance of identifying both benign and malicious DoH traffic to improve overall network security. They also suggest the use of deep learning neural networks, including Fully-Connected Convolutional Neural Networks (FCNs) and several types of Recurrent Neural Networks (RNNs), such as LSTM, GRU, and bidirectional LSTM, to enhance anomaly detection capabilities.",
      methodologyContent: "The methodology involves extensive data preprocessing of the CIC-DoHBrw-2020 dataset, followed by the implementation and evaluation of various machine learning and deep learning models. The dataset includes benign and malicious DoH traffic, as well as non-DoH traffic, captured using different browsers and DNS tunneling tools. The models are trained and tested on this dataset, with their performance evaluated using metrics such as precision, recall, F1-score, and confusion matrices. The study particularly focuses on addressing the class imbalance problem and improving the detection accuracy of the models through robust feature engineering and selection techniques."
    },
    {
      id: 32,
      title: "Measurement and characterization of DNS over HTTPS traffic",
      authors: "Kamil Jeˇr ́abeka , Ondˇrej Ryˇsav ́ya , Ivana Burgetov ́a",
      url: "https://arxiv.org/pdf/2204.03975",
      problemDefinition: ["DoH_MD"],
      solutions: ["ML_BD"],
      methodology: ["System_Imp"],
      problemContent: "The paper aims to compare the effects of DNS, DNS over TLS, and DNS over HTTPS (DoH) on web performance. It addresses the challenges related to privacy and security in DNS resolution protocols and the impact of different encryption methods on web performance.",
      solutionContent: "1. Overview of domain name resolution protocols: DNS, DNS over TLS, and DNS over HTTPS. 2. Analysis of existing DoH client implementations in web browsers and DoH server deployments. 3. Creation of a large dataset of DoH communication for performance evaluation and traffic analysis. 4. Development of efficient methods for DoH traffic classification. 5. Introduction of a novel tool for detecting and testing deployed DoH servers on the Internet.",
      methodologyContent: "The study involves analyzing the performance characteristics of DNS, DNS over TLS, and DoH in isolated settings. It also focuses on studying DoH implementations in web browsers and measuring web page load times to demonstrate the practical impact of DoH. The researchers conducted experiments to compare the protocol performance characteristics of DNS, DoH, and other HTTPS traffic. They collected a large dataset of DoH communication through captured packets for evaluation. The paper includes a detailed characterization of DoH traffic and a comparison with regular web traffic. It explains the use of HTTPS headers in DoH communication and provides insights into DoH traffic features. The study evaluates various parameters of deployed DoH servers and analyzes the performance parameters of different domain resolution protocols. It also discusses the results of experiments that identified the current state of DoH implementation in client-side applications. By combining system implementation, measurement study, and traffic analysis, the paper offers a comprehensive evaluation of the impact of DNS, DNS over TLS, and DoH on web performance and privacy."
    },
    {
      id: 33,
      title: "XTS: A Hybrid Framework to Detect DNS-Over-HTTPS Tunnels Based on XGBoost and Cooperative Game Theory",
      authors: "Mungwarakarama Irénée , Yichuan Wang , Xinhong Hei , Xin Song, Jean Claude Turiho and Enan Muhire Nyesheja.",
      url: "https://www.mdpi.com/2227-7390/11/10/2372",
      problemDefinition: ["DoH_MD"],
      solutions: ["ML_BD"],
      methodology: ["System_Imp"],
      problemContent: "The paper addresses the challenge of detecting DNS-Over-HTTPS (DoH) tunnels, which are used for malicious activities like Command and Control (C2) communications. Traditional methods struggle to detect these tunnels due to the encryption and obfuscation techniques employed. The primary issue is the need for a robust framework that can effectively identify DoH tunnels in the presence of imbalanced and sparse data.",
      solutionContent: "The proposed solution is the XTS framework, which combines XGBoost and Cooperative Game Theory Mathematics to enhance the detection of DoH tunnels. XGBoost is utilized for its powerful predictive capabilities, while Cooperative Game Theory Mathematics aids in feature selection and model interpretability. This hybrid approach aims to address the challenges posed by imbalanced data and the need for efficient feature selection in DoH tunnel detection.",
      methodologyContent: "The methodology involves the implementation and evaluation of the XTS framework. The study includes a comprehensive comparison with existing studies that used similar datasets and computational time measurements. The authors optimized the XTS model with tailored parameters for the specific problem of detecting DoH tunnels. Evaluation metrics such as confusion matrix, log loss, and AUC–PR are employed to assess the model's performance and its ability to handle imbalanced datasets. The research also emphasizes the importance of considering time factors, stability of feature selection techniques, and the role of IP addresses in DoH tunnel detection. Overall, the methodology focuses on demonstrating the effectiveness, reliability, and robustness of the XTS framework in addressing the identified challenges in detecting DNS-Over-HTTPS tunnels."
    },
    {
      id: 34,
      title: "Classifying DNS over HTTPS Malicious/Benign Traffic Using Deep Learning Models",
      authors: "Mandar Chougule, Praveen K, Amritha P. P, Sangeetha Viswanathan, K.S Ravichandran, M. Sethumadhavan, Masoumeh Rahimi, Amir H. Gandomi",
      problemDefinition: ["DoH_MD"],
      solutions: ["ML_BD"],
      methodology: ["System_Imp"],
      url: "https://ieeexplore.ieee.org/abstract/document/10458486?casa_token=TfrUDrTALe0AAAAA:QB6vfhqR4BqA_GP2oUaagw-LUtyD9s9iBLB_aX1z9a_vwB-lkodQZmznsVgzNWpFfd1HKF5nt7Q",
      problemContent: "The increasing use of DNS over HTTPS (DoH) for privacy protection has created a new challenge for cybersecurity professionals. While DoH enhances user privacy by encrypting DNS queries, it also provides an opportunity for malicious actors to hide their activities. Traditional methods of detecting malicious DNS traffic are ineffective against encrypted DoH traffic, creating a critical need for new detection techniques that can accurately classify DoH traffic as malicious or benign without compromising user privacy.",
      solutionContent: "The authors propose a two-layer deep learning approach to address the challenge of classifying DoH traffic. The first layer distinguishes between DoH and non-DoH traffic, while the second layer focuses on classifying DoH traffic as malicious or benign. The study implements and compares three deep learning models: Long Short-Term Memory (LSTM), Bidirectional LSTM (BiLSTM), and Gated Recurrent Unit (GRU). These models are trained on preprocessed data to create a generalized solution that can work effectively in various network environments.",
      methodologyContent: "The research employs a system implementation and measurement study approach. The authors utilize the CIRA-CIC-DoHBrw-2020 dataset and apply several preprocessing techniques, including feature selection, handling missing data, train-test split, addressing data imbalance, and one-hot encoding. They implement LSTM, BiLSTM, and GRU models with hyperparameters optimized through grid search methods. The models' performance is evaluated using various metrics such as confusion matrices, accuracy, training and testing time, precision, recall, and F1-score. The results are compared with previous studies using the same dataset to demonstrate the effectiveness of the proposed approach."
    },
    {
      id: 35,
      title: "A novel deep-learning based approach to DNS over HTTPS network traffic detection",
      authors: "Jan Fesl, Michal Konopa, Jiří Jelínek",
      problemDefinition: ["ML_AI"],
      solutions: ["Theoretical"],
      methodology: ["System_Imp", "Th_Analysis"],
      url: "https://tinyurl.com/mupy7ajm 36",
      problemContent: "The paper addresses the challenge of detecting DNS over HTTPS (DoH) tunneling in network traffic. As DoH encrypts DNS queries within HTTPS, traditional detection methods are rendered ineffective. The researchers aim to develop effective detection mechanisms to identify DoH traffic and distinguish it from regular HTTPS traffic, which is crucial for maintaining network security and preventing potential misuse of DoH for malicious activities.",
      solutionContent: "The researchers propose a two-pronged approach to solve the DoH detection problem. First, they created a comprehensive dataset comprising DoH and non-DoH packet flows from real active domains under the national domain CZ, using the Firefox-extended support release (ESR) web browser and network probes reporting via the IPFIX network protocol. Second, they developed deep neural network models, including dense layers and convolutional layers, designed to analyze packet flow data and differentiate between DoH and non-DoH traffic. These models aim to learn and identify patterns indicative of DoH communication, enabling accurate detection even in encrypted traffic.",
      methodologyContent: "The study's methodology involves a systematic approach to data collection, model development, and evaluation. The researchers collected data from two main sources: DoH queries within the CZ.NIC network and communication with DoH servers under the domain cloudflare.com, creating separate datasets for training, validation, and testing. They then trained deep neural network models on this data, experimenting with various model structures to optimize DoH traffic detection. The best-performing model architecture was identified through extensive evaluation. Additionally, the researchers employed genetic algorithms to control the optimization process of the deep neural network models, focusing on hyperparameter tuning, model parameter selection, and minimizing accuracy loss during testing. This comprehensive methodology aims to create a robust and efficient system for detecting DoH tunneling in network traffic."
    },
    {
      id: 36,
      title: "Analysis of Well-Known DNS over HTTPS Resolvers",
      authors: "Kamil Jerabek, Ondrej Rysavy",
      problemDefinition: ["DoH_MD"],
      solutions: ["ML_BD"],
      methodology: ["System_Imp"],
      url: "https://ieeexplore.ieee.org/abstract/document/10099347?casa_token=4Q2gwdCJBD8AAAAA:AvHtiiJ9mEW8t0UR2WwoJrGoQ4l8iOTu2GQWMFdUhPjsfMe4YUuRL2WyosHrjNJb4LbJFWUVBM",
      problemContent: "The paper addresses the lack of comprehensive analysis of well-known DNS over HTTPS (DoH) resolvers. As DoH adoption increases, there is a growing need to understand the characteristics, security, privacy, and performance implications of publicly available DoH resolvers that users may choose. The authors highlight that previous studies have been limited in scope or sample size when examining DoH resolvers, leaving a gap in our understanding of these important components of modern internet infrastructure.",
      solutionContent: "To address the identified problem, the authors propose a comprehensive approach combining long-term monitoring of well-known DoH resolvers with in-depth testing of active resolvers. This solution aims to provide detailed insights into several key aspects of DoH resolvers, including: the progression and changes in resolver features over time, TLS certificate usage and security practices, support for other DNS protocols, HTTP header practices, and EDNS padding implementation. By examining these factors, the study seeks to offer a more complete picture of the DoH resolver landscape and its evolution.",
      methodologyContent: "The study's methodology consists of two main components. First, a long-term monitoring phase where nearly 500 DoH resolvers from a comprehensive public list were observed over 27 months (September 2020 to December 2022). During this period, the authors periodically checked resolver availability, supported features, and IP address changes. Second, an in-depth testing phase conducted at the end of the monitoring period, which involved extensive tests on active resolvers. These tests included TLS certificate inspection, checking support for other DNS protocols (UDP, TCP, DoT, DoQ), analyzing HTTP headers in responses, and testing EDNS padding capabilities and strategies. This dual approach allows for both a broad view of the DoH resolver ecosystem over time and a detailed snapshot of active resolvers' capabilities and practices."
    },
    {
      id: 37,
      title: "Machine-learning based Detection of Malicious DNS-over-HTTPS (DoH) Traffic Based on Packet Captures.",
      authors: "David Stalder Zurich, Switzerland",
      problemDefinition: ["ML_AI"],
      solutions: ["Theoretical"],
      methodology: ["System_Imp", "Th_Analysis"],
      url: "https://files.ifi.uzh.ch/CSG/staff/vonderassen/extern/theses/ba-stalder.pdf",
      problemContent: "The paper addresses the critical challenge of detecting malicious DNS-over-HTTPS (DoH) traffic within network data. As cyber attackers increasingly use DoH to conceal their activities, there is a pressing need to develop systems that can effectively differentiate between normal and malicious DoH traffic. This problem is particularly complex due to the encrypted nature of DoH, which makes traditional detection methods ineffective.",
      solutionContent: "To address the challenge of detecting malicious DoH traffic, the paper proposes a prototype called SecGrid. This solution consists of two main components: a feature extraction module and a Machine Learning pipeline. The feature extraction component is designed to extract both informational and statistical features from TCP flows in input PCAP files. The Machine Learning pipeline then utilizes these extracted features in a two-step process to detect malicious DoH traffic. First, it separates DoH traffic from normal HTTPS traffic, and then it identifies which of the DoH traffic is malicious. This layered approach allows for more precise detection and classification of potentially harmful network activities.",
      methodologyContent: "The methodology employed in this study combines theoretical analysis with practical implementation to create an effective system for detecting malicious DoH traffic. It begins with extensive literature research to understand existing solutions, particularly those using Machine Learning approaches. The design phase focuses on creating a layered architecture for the prototype. Implementation follows, involving the development of the feature extraction component, dataset creation for model training, and the implementation of the Machine Learning model. The methodology then includes a comprehensive evaluation of the prototype, assessing both the feature extraction process and the Machine Learning model's effectiveness in detecting malicious DoH traffic. The study concludes with a summary of the work, presentation of conclusions and limitations, and suggestions for future research and improvements, providing a holistic approach to addressing the complex problem of malicious DoH traffic detection."
    },
    {
      id: 38,
      title: "Detection of DNS over HTTPS Tunneling using Random Forest Supervised Learning",
      authors: "Tejaswi Pednekar",
      problemDefinition: ["DoH_MD"],
      solutions: ["ML_BD"],
      methodology: ["System_Imp"],
      url: "https://norma.ncirl.ie/6039/1/tejaswisharadpednekar.pdf",
      problemContent: "The research project addresses the security vulnerabilities in the Domain Name System (DNS) protocol, particularly in relation to DNS over HTTPS (DoH). The study aims to investigate the impact of DoH on DNS security, identify potential DNS attacks, and address the security risks associated with secretive communications over DoH. A significant challenge in this area is the limited availability of datasets for training, which hinders comprehensive research. The project seeks to develop effective methods for detecting malicious DoH traffic, distinguishing it from benign traffic, and mitigating the potential for DoH to be exploited for malicious purposes.",
      solutionContent: "To address the challenges posed by DoH tunneling, the research proposes the use of machine learning classifiers, particularly Random Forest supervised learning, to detect malicious DNS over HTTPS traffic. The approach involves developing a taxonomy of potential DNS attacks based on a comprehensive examination of DNS security flaws. By leveraging machine learning techniques, the study aims to enhance the accuracy and efficiency of detecting DoH tunneling activities. The proposed solution involves analyzing encrypted traffic data to accurately identify DoH connections and distinguish between benign and malicious DoH traffic, thereby improving network security and preventing potential misuse of DoH for malicious purposes.",
      methodologyContent: "The methodology of this research project employs machine learning techniques on datasets obtained from previous studies and external resources, primarily utilizing the Canadian Institute for Cybersecurity (CIC) dataset, which includes both benign and malicious DoH traffic as well as non-DoH traffic. A two-layered classification system is implemented to first categorize data samples as DoH or non-DoH, followed by classifying DoH samples as benign or malicious. The Random Forest model, along with Bagging Techniques, is used for model predictions and evaluations. The methodology also includes analyzing feature significance, conducting correlation tests, and utilizing confusion matrices for model evaluation. This comprehensive approach aims to develop an effective system for detecting DNS over HTTPS tunneling activities through the application of machine learning algorithms on encrypted traffic data."
    },
    {
      id: 39,
      title: "Fingerprinting DNS over HTTPS (DoH)",
      authors: "John Choi",
      problemDefinition: ["ML_AI"],
      solutions: ["Theoretical"],
      methodology: ["System_Imp", "Th_Analysis"],
      url: "https://core.ac.uk/download/pdf/478868643.pdf",
      problemContent: "The paper addresses the critical issue of assessing the effectiveness of DNS over HTTPS (DoH) in protecting the confidentiality of specific web page requests. As DoH becomes increasingly popular for enhancing user privacy, there is a need to understand its vulnerabilities to fingerprinting techniques. The study specifically examines whether advanced fingerprinting methods like ja3 and ja3s can decrypt DoH queries and differentiate between web pages hosted on the same server, potentially compromising the privacy benefits that DoH aims to provide.",
      solutionContent: "To address the challenges in evaluating DoH's privacy protection capabilities, the study proposes two main solutions. First, it suggests utilizing fingerprinting techniques such as ja3 and ja3s to analyze TLS connections between client machines and servers, with a particular focus on popular services like Google Search Engine, Google Drive, and Google Photos. This approach aims to assess the vulnerability of DoH to sophisticated fingerprinting methods. Second, based on the findings, the research proposes the need for enhancing DoH security through additional measures. These measures would aim to make DoH packets more secure and less susceptible to identification by third-party systems and scripts, thereby improving the overall privacy protection offered by DoH.",
      methodologyContent: "The study employs a comprehensive methodology to investigate DoH fingerprinting. It begins with data collection using tcpdump to log traffic on a client machine running Ubuntu 20.04. The methodology then progresses to packet analysis, where the collected internet logs are examined using ja3 and ja3s scripts to analyze TLS connections. The process includes detailed logging and analysis, with logs collected in pcap format from all interfaces on the Ubuntu machine. These logs are then processed using ja3 and ja3s scripts, with results saved for further analysis. A crucial step in the methodology involves the identification of DoH traffic and packets from the collected data. Throughout this process, the researchers acknowledge the current technological limitations in identifying specific web pages through DoH traffic. This systematic approach aims to provide valuable insights into DoH's effectiveness in protecting user privacy and the challenges associated with fingerprinting DoH queries."
    },
    {
      id: 40,
      title: "Global Impact of Migration to DNS-over-HTTPS",
      authors: "RISHABH CHHABRA",
      problemDefinition: ["DoH_MD"],
      solutions: ["ML_BD"],
      methodology: ["System_Imp"],
      url: "https://www.ideals.illinois.edu/items/118562",
      problemContent: "The paper addresses the complex challenge of understanding the global performance implications of transitioning from traditional DNS-over-UDP to DNS-over-HTTPS. The primary problem is to assess how this migration affects different countries, considering the additional costs and infrastructure requirements associated with DNS-over-HTTPS. The study aims to investigate the various factors influencing DNS-over-HTTPS performance across different regions and determine whether the current internet infrastructure is prepared for widespread adoption of this encrypted DNS protocol. This investigation is crucial as it impacts the efficiency of internet communications and has potential implications for user privacy and security.",
      solutionContent: "To address the challenges of understanding the global impact of DNS-over-HTTPS migration, the paper proposes a comprehensive evaluation of DNS-over-HTTPS performance across different countries. The solution involves analyzing various factors that influence the efficiency of DNS-over-HTTPS in different regions. This includes conducting comparative performance assessments between DNS-over-HTTPS and DNS-over-UDP on a global scale. The study aims to provide insights by evaluating different DNS servers and their performance in various countries. Additionally, the research explores the correlation between a country's economic status and its median DNS-over-HTTPS resolution time, offering a nuanced understanding of the implications of this migration. These solutions are designed to provide a holistic view of the readiness of global internet infrastructure for DNS-over-HTTPS adoption.",
      methodologyContent: "The methodology employed in this study likely involves a comprehensive measurement-based approach to evaluate the performance of DNS-over-HTTPS across multiple countries. This includes collecting extensive data points per country, analyzing domain name resolution times, and comparing the performance of various DNS servers such as Google and Cloudflare. The research methodology may encompass reverse engineering network flows, conducting ground truth experiments, and considering technical factors like TLS 1.3 implementation, connection reuse, and UDP timing. By employing this multifaceted approach, the study aims to provide a thorough understanding of the global impact of migrating to DNS-over-HTTPS, considering both technical and economic factors that influence its performance and adoption in different regions."
    },
    {
      id: 41,
      title: "An Anomaly Detection Framework for DNS-over-HTTPS (DoH) Tunnel Using Time-series Analysis.",
      authors: "Mohammad reza, Montazeri Shatoori",
      problemDefinition: ["ML_AI"],
      solutions: ["Theoretical"],
      methodology: ["System_Imp", "Th_Analysis"],
      url: "https://unbscholar.dspace.lib.unb.ca/server/api/core/bitstreams/1f562b47-75e2-453a-9bbb-c8a3648c65b9/content",
      problemContent: "The paper addresses the significant challenge of detecting DNS-over-HTTPS (DoH) tunnels, which can be exploited for malicious activities due to their encrypted nature. Traditional security mechanisms are ill-equipped to inspect encrypted traffic, making it extremely difficult to identify potential threats concealed within DoH tunnels. This vulnerability poses a serious risk to network security, as malicious actors can leverage DoH tunnels to bypass conventional detection methods, potentially leading to data exfiltration, command and control communication, or other cyber threats.",
      solutionContent: "To address the challenge of detecting malicious DoH tunnels, the paper proposes a multi-faceted solution. First, it develops a comprehensive taxonomy of known DNS attacks to understand the vulnerabilities in the DNS protocol and identify potential threats to the DoH protocol. Second, it introduces a novel two-layered classification approach that separates DoH traffic from non-DoH traffic at the network layer and then characterizes DoH traffic at a deeper level. Third, the paper presents a feature-based DoH anomaly detection framework that utilizes time-series representation of traffic flows, incorporating the concept of packet clumps for encrypted traffic characterization. Lastly, to support and evaluate the proposed detection framework, the solution includes the generation of a labeled dataset capturing Benign-DoH, Malicious-DoH, and non-DoH encrypted traffic.",
      methodologyContent: "The methodology employed in this study combines theoretical analysis, system implementation, measurement studies, and simulations to provide a comprehensive approach to DoH tunnel detection. It begins with a thorough review of existing literature on DNS vulnerabilities, DoH attacks, and related studies to establish a solid foundation for the research. The proposed framework for detecting DoH tunnels is then implemented, including modules for data capture, pre-processing, feature extraction, selection, and classification. To evaluate the framework, a dataset (CIRA-CIC-DoHBrw-2020) is collected, consisting of HTTPS traffic flows with distinct labels for DoH and non-DoH traffic, as well as benign and malicious DoH traffic. The methodology also includes the use of simulation tools to recreate network activity, including tunneled malicious traffic, to test the effectiveness of the detection framework under various scenarios."
    },
    {
      id: 42,
      title: "Detection of Malicious DNS-over-HTTPS Traffic: An Anomaly Detection Approach using Autoencoders.",
      authors: "Sergio A. Salinas Monroy, Aman Kumar Gupta, and Garrett Wahlstedt",
      problemDefinition: ["DoH_MD"],
      solutions: ["ML_BD"],
      methodology: ["System_Imp", "Th_Analysis"],
      url: "https://arxiv.org/pdf/2310.11325",
      problemContent: "The paper addresses critical cybersecurity challenges in the modern digital landscape, focusing on the detection and mitigation of sophisticated threats that exploit emerging technologies and protocols. Specifically, it targets the complex issue of identifying malicious activities within DNS over HTTPS (DoH) traffic, which poses a significant challenge due to its encrypted nature. The research also tackles broader cybersecurity concerns including insider threats, botnet activities in IoT networks, and the classification of encrypted traffic. These problems are crucial in maintaining network integrity and data privacy against evolving cyber threats that continuously adapt to bypass traditional security measures.",
    
      solutionContent: "To address the multifaceted cybersecurity challenges, the paper proposes several innovative solutions leveraging advanced machine learning and deep learning techniques. For insider threat detection, deep learning models are employed to analyze cybersecurity data streams, identifying anomalous behaviors without relying on predefined attack patterns. In IoT environments, a deep learning-based visualized system is proposed to enhance botnet detection within smart city networks. For encrypted traffic classification, Bayesian neural networks and deep learning approaches are introduced to analyze SSL/TLS connections, improving the identification of malicious activities in secure communications. Specifically for DNS over HTTPS (DoH) security issues, the research investigates potential vulnerabilities and information leakage associated with DoH adoption. Additionally, the paper presents anomaly detection methods using autoencoders and convolutional neural networks (CNNs) to identify deviations from expected behaviors in both IoT and general network traffic, thereby flagging potential threats autonomously.",
    
      methodologyContent: "The methodology employed in this research encompasses a comprehensive approach combining theoretical analysis, practical implementations, and empirical evaluations. It involves the deployment of advanced machine learning models such as deep autoencoders, variational autoencoders, and Bayesian neural networks in real-world cybersecurity scenarios. Empirical studies are conducted to assess the effectiveness of various machine learning algorithms in detecting specific threats like insider activities, botnets, and anomalies in encrypted and network traffic. The research utilizes a combination of simulations, emulations, and in some cases, real-world prototypes to thoroughly evaluate and validate the proposed cybersecurity solutions. This multi-faceted methodological approach ensures a robust assessment of performance metrics, scalability, and real-world applicability, which is crucial for developing effective cybersecurity measures against sophisticated threats and vulnerabilities in modern network environments."
    },
    {
      id: 43,
      title: "DePL:Detecting Privacy Leakage in DNS Over HTTPS Traffic.",
      authors: "Futai Zou,Dechao Meng,Wentao Gao,Linsen Li",
      problemDefinition: ["DoH_MD"],
      solutions: ["ML_BD"],
      methodology: ["System_Imp"],
      url: "https://ieeexplore.ieee.org/abstract/document/9724408",
      problemContent: "The paper likely addresses the challenge of detecting privacy leakages in DNS over HTTPS (DoH) traffic. While DoH aims to enhance user privacy by encrypting DNS queries, it may still be vulnerable to certain types of privacy leaks. The research focuses on identifying and mitigating these potential vulnerabilities in DoH implementations.",
      solutionContent: "The authors probably propose a system called DePL (Detecting Privacy Leakage) specifically designed to analyze DoH traffic and identify potential privacy leaks. This solution likely involves advanced traffic analysis techniques, possibly incorporating machine learning or deep learning methods, to detect patterns or anomalies that could indicate privacy breaches in encrypted DoH communications.",
      methodologyContent: "The methodology likely involves a system implementation approach, where the authors develop and test their DePL system. This may include creating controlled environments to simulate DoH traffic, implementing various privacy leakage scenarios, and evaluating the effectiveness of their detection system. The research might also incorporate real-world DoH traffic analysis to validate the system's performance in practical scenarios."
    },
    {
      id: 44,
      title: "CCSv6: A Detection Model for DNS-over-HTTPS Tunnel Using Attention Mechanism over IPv6",
      authors: "Liang Jiao, Yujia Zhu, Xingyu Fu, Yi Zhou, Fenglin Qin, Qingyun Liu",
      problemDefinition: ["DoH_MD"],
      solutions: ["ML_BD"],
      methodology: ["System_Imp", "Th_Analysis"],
      url: "https://ieeexplore.ieee.org/abstract/document/10218057",
      problemContent: "The paper addresses the critical challenge of detecting DNS-over-HTTPS (DoH) tunneling in IPv6 networks. While DoH enhances privacy for DNS queries, it also creates a potential avenue for malicious actors to conceal their activities. Previous detection methods have primarily focused on IPv4 networks, leaving a significant gap in understanding how DoH tunneling detection differs in IPv6 environments. This gap is particularly concerning given the increasing adoption of IPv6 and the unique characteristics of IPv6 traffic that may impact the effectiveness of existing detection techniques.",
    
      solutionContent: "To address the challenge of detecting DoH tunneling in IPv6 networks, the authors propose a novel detection model called CCSv6. This model leverages an attention-based convolutional neural network specifically designed to identify DoH tunneling over IPv6. Additionally, they develop a tool named DoHlyzerv6 to extract statistical features from IPv6 network flows, enhancing the model's ability to analyze and classify traffic patterns. The research aims to adapt and improve existing IPv4 detection methods for IPv6 networks, while also analyzing the impact of various factors such as geographic location and different DoH resolvers on detection results. This comprehensive approach seeks to provide a robust solution for identifying potentially malicious DoH activities in the evolving landscape of IPv6 networks.",
    
      methodologyContent: "The methodology employed in this study encompasses a multi-faceted approach to develop and evaluate the CCSv6 model. It begins with extensive data collection, gathering DoH tunneling traffic and normal DoH queries over IPv6 from various locations and using different DoH resolvers. The researchers then use their custom tool, DoHlyzerv6, to extract 29 statistical features from each network flow. The core of the methodology involves developing the CCSv6 model, which incorporates channel and spatial attention mechanisms within a convolutional neural network to process these features effectively. The evaluation phase is comprehensive, comparing CCSv6 against baseline methods like Decision Trees, Random Forests, and Gradient Boosting using metrics such as accuracy, precision, recall, and F1-score. The methodology also includes analyzing the impact of geographic location and DoH resolver choice on detection results, as well as testing the model's transfer learning capabilities by training on IPv6 data and testing on IPv4 data. This approach combines both simulations and real network traffic analysis, providing a thorough evaluation of the proposed detection model in various scenarios."
    },
    {
      id: 45,
      title: "PACLASS: A Lightweight Classification Framework on DNS-over-HTTPS.",
      authors: "Quanbo Pan, Hanbing Yan, Zhipeng Qin ,Bingzhi Qi",
      url: "https://ieeexplore.ieee.org/abstract/document/10279398",
      problemDefinition: ["DoH_MD"],
      solutions: ["ML_BD"],
      methodology: ["System_Imp"],
      problemContent: "Detecting and classifying DNS-over-HTTPS (DoH) traffic is challenging due to encryption and lack of dedicated ports. Existing machine learning methods for DoH detection require large amounts of complete network traffic data and rely on time-based features, limiting their applicability.",
      solutionContent: "PACLASS is a lightweight classification framework for encrypted DoH traffic that uses minimal features (only packet size statistics), does not rely on time-based features, supports sampled data and network device logs, and reduces required training data while maintaining high accuracy. The solutions proposed include a data sampling technique to reduce training data volume, a pre-training method to further reduce required training data, and filtering out communications with too few packets to improve accuracy.",
      methodologyContent: "The methodology involves system implementation of the PACLASS framework with modules for data collection, feature extraction, model training, and traffic classification using various machine learning algorithms (LR, NB, GBDT, KNN, DT, RF). A measurement study used the CIRA-CIC-DoHBrw-2020 dataset and an additional dataset generated using Firefox browser and Python scripts. Simulations evaluated PACLASS with different machine learning algorithms, tested data sampling ratios (10% to 100%), analyzed the impact of filtering communications with few packets, and evaluated the pre-training method using partial datasets. Comparative analysis compared PACLASS performance with existing methods and analyzed trade-offs between accuracy and data compression ratio. Real-world applicability was tested on an extended self-generated dataset, analyzing the effects of padding on classification accuracy. The methodology combines system implementation, extensive simulations, measurement studies using real-world datasets, and comparative analysis to validate the PACLASS framework and associated techniques."
    },
    
    {
      id: 46,
      title: 'Investigation of Oblivious DNS over HTTPS against traffic analysis attacks',
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
---
title: Md Tousif Hasan Lavlu
type: landing
sections:
  - block: about.biography
    id: about
    content:
      title: About me
      username: admin
  - block: experience
    id: experience
    content:
      title: Experience
      date_format: Jan 2006
      items:
        - title: Lecturer
          department: CSE
          company: Shanto-Mariam University of Creative Technology
          company_url: 'https://smuct.ac.bd/'
          company_logo: smuct
          location: Dhaka, Bangladesh
          date_start: '2022-11-15'
          date_end: ''
          description: |2-
            - <strong> Mentoring Competitive Programming Enthusiasts:</strong> Actively mentor students participating in competitive programming, guiding them through problem-solving techniques, algorithmic thinking, and contest preparation.

            - <strong> Problem Setter and Moderator for Competitive Programming Contests:</strong> Serve as a problem setter and moderator for various competitive programming contests, enabling students to experience real-world problem-solving scenarios.

            - <strong>Supervising Student Research:</strong> Mentor students in conducting research on machine learning, from formulating research problems to achieving results.Moreover, guiding students on projects using different programming languages (e.g., Python, Java, C++) to solve real-world problems.

      columns: '1'
  - block: experience
    id: education
    content:
      title: Education
      date_format: Jan 2006
      items:
        - title: MSc in Information and Communication Technology
          company: Bangladesh University of Engineering and Technology (BUET)
          company_url: 'https://www.buet.ac.bd/web/#/'
          company_logo: buet
          location: Dhaka, Bangladesh
          date_start: '2023-07-01'
          date_end: ''
          description: |2-
            - <strong>Machine Learning in Healthcare:</strong> Actively researching machine learning applications to enhance healthcare services, focusing on predictive modeling, data standardization.

            - <strong>Term paper on Hyperparameter Tuning:</strong> Completed a term paper on hyperparameter tuning in different machine learning algorithms using the United States Congressional Voting Records dataset from the UCI. This work provided insights into optimizing algorithm performance through systematic hyperparameter adjustments.

            - <strong>Review Paper:</strong> Wrote a review paper titled <strong>"Key Algorithms in Chatbot Development: A Comprehensive Review"</strong>, providing a detailed analysis of foundational and advanced algorithms used in chatbot systems.
            
            - <strong>Embedded Systems Design with STM32:</strong> Developed embedded systems titled <strong>Adjustable Digital Clock</strong> using STM32 microcontrollers, applying programming and hardware integration skills.
            

        - title: BSc in Computer Science and Engineering
          company: BRAC University
          company_url: 'http://www.bracu.ac.bd/'
          company_logo: bracu
          location: Dhaka, Bangladesh
          date_start: '2018-05-01'
          date_end: '2022-05-01'
          description: |2-
            - <strong>Thesis Title:</strong> Machine Learning Based Career Suggestive System in the Informal Job Sector Considering Cognitive Skills. 
            - Conducted research on optimizing machine learning models through hyperparameter tuning to improve predictive performance.

            - Achieved above <strong>90% marks (A)</strong> in key courses, including: <strong> Data, Structure, Algorithm, Artificial Intelligence, Neural Network, Robotics, Computer Network</strong>.

            - Worked on team projects where I demonstrated leadership and technical expertise in developing software solutions using advanced programming languages and frameworks.

            - <strong>Programming Club Involvement</strong>: Actively involved in the university's programming community, organizing and participating in coding workshops, hackathons, and events aimed at promoting coding literacy among students.
            - Actively participated in several programming contests, both regional and university-level, which enhanced my problem-solving skills and algorithmic thinking.

            - <strong>Leadership Roles</strong>: Held leadership positions in various club, contributing to organizing technical seminars, cultural events, orientation program, convocation and contests to foster a vibrant campus life.
    design:
      columns: '1'
  - block: markdown
    id: research
    content:
      title: Research Interests
      subtitle: 'Artifical Intelligence'
      text: |-
          ### Machine Learning
          My primary research focus lies in the expansive and rapidly evolving field of Machine Learning, driven by its potential to revolutionize industries and solve complex problems. I am particularly passionate about the interdisciplinary nature of machine learning, which allows me to blend theory and application to develop innovative solutions across various domains. My research spans several cutting-edge subdomains, where I aim to contribute both to the advancement of theoretical foundations and to the practical deployment of machine learning systems.

          ### Federated Learning
          As the demand for privacy-preserving machine learning grows, my work focuses on federated learning techniques, which allow models to be trained on decentralized data while maintaining user privacy. This is particularly relevant in industries like healthcare and finance, where sensitive data is prevalent.

          ### Reinforcement Learning
          This branch of machine learning excites me due to its potential for solving complex, dynamic decision-making problems. My research aims to apply reinforcement learning techniques to areas like robotics and game AI, where agents learn optimal behaviors through interaction with their environments.

          ### Computer Vision
          I am particularly fascinated by how machine learning models can be used to understand and 
          interpret visual information from the world. I focus on developing algorithms for image 
          classification, object detection, and segmentation, aiming to improve automation in tasks 
          like medical imaging, autonomous driving, and video surveillance.

          ### Cognitive Computing
          I am intrigued by how machine learning can mimic human thought processes, leading to the development of systems capable of reasoning, learning, and decision-making in real time. My research focuses on applying cognitive computing to areas like natural language understanding and intelligent systems.

          ### Cloud Computing
          With the growing adoption of cloud platforms, I am exploring how machine learning models can be efficiently deployed and scaled in cloud environments. My interest here lies in leveraging cloud resources to facilitate real-time processing, distributed learning, and scalable data pipelines.

          ### Health Informatics
          he healthcare sector presents a unique opportunity to apply machine learning to improve patient outcomes, disease prediction, and treatment personalization. I am focused on leveraging machine learning models for early diagnosis, predictive analytics in patient data, and optimizing healthcare operations. This includes using deep learning for medical imaging, federated learning for secure data sharing between hospitals, and reinforcement learning to optimize treatment plans. By integrating AI-driven solutions into healthcare systems, I aim to contribute to more efficient, accurate, and accessible care.
          
          For me, some important researchers in this field are:
          🎓 [Md Tousif Hasan Lavlu](https://scholar.google.com/citations?user=fE-nhx4AAAAJ&hl=en)

      #- 📄 [Contribution Title](https://dl.acm.org/doi/abs/10.1145/#3428658.3430972)


    design:
      columns: '2'
  # Publications    
  - block: portfolio
    id: publications
    content:
      title: Publications
      #text: |-
       # {{% callout note %}}
       # Quickly discover relevant content by [filtering publications](./publication/).
       # {{% /callout %}}
      filters:
        folders:
          - mypublications
      buttons:
        - name: All
          tag: '*'
        - name: Published
          tag: published
        - name: Under Submission
          tag:  under_submission
        - name: Ongoing
          tag: ongoing
       # exclude_featured: true
    design:
      columns: '2'
      #view: citation
      view: 2
      flip_alt_rows: false
      
# Projects
  - block: portfolio
    id: projects
    content:
      title: Projects
      filters:
        folders:
          - projects
      buttons:
        - name: All
          tag: '*'
        - name: ML Project
          tag: ml_project
        - name: Undergraduate Project
          tag: undergraduate_project
        - name: Masters Project
          tag:  masters_project
        - name: Misc
          tag: misc
    design:
      columns: '2'
      view: 2
      flip_alt_rows: false

  #Accomplishment
  - block: Accomplishments
    id: achievments
    content:
      title: Achievments
      subtitle: ''
      text: ''
      # Date format: https://wowchemy.com/docs/customization/#date-format
      date_format: Jan 2006
      items:
      # VC's list
        - title: VC's List
          certificate_url: ''
          date_end: '2022-05-01'
          date_start: '2018-04-01'
          description: ''
          icon: bracu
          organization: BRAC University
          organization_url: 'http://www.bracu.ac.bd/'
          url: ''
          # Merit based scholarship
        - title: Merit Based Scholarship
          certificate_url: ''
          date_end: '2020-01-01'
          date_start: '2022-01-01'
          description: '' 
          icon: bracu
          organization: BRAC University
          organization_url: 'http://www.bracu.ac.bd/'
          url: ''
          # Java certifications
        - title: Java Certification Course
          certificate_url: https://drive.google.com/file/d/1P4OnYRXA2gjbU8dm6HmMqzoNXjbHYD6R/view?usp=sharing
          date_end: ''
          date_start: '2022-11-08'
          description: 'I have successfully completed the advance Java Certification Course which is offered by 
                        Google in corporation with Simplilearn. This is a 9 hours course which include Core Java 
                        8 concepts. But it will take lot more than 9 hours for understanding concept and self practices. 
                        Some of the core things are #JavaEE, #JavaServlet, #JavaServerPages, #JSPLifeCycle, #HibernateQueries, 
                        #Springframework, #DependencyInjection, #SpringAOP, #SpringJDBC, #SpringMVC, #SOA.' 
          icon: simplilearn
          organization: Simplilearn
          organization_url: https://www.simplilearn.com/
          url: ''
          # Competitive Programming
        - title: Moderator Programming Contest CSE Fest 2023
          certificate_url: 'https://drive.google.com/drive/u/0/folders/1OjP4UiTKQklhB0mjZH1HXFcLx0sliTH2'
          date_end: ''
          date_start: '2022-08-17'
          description: 'I had the honor of serving as a Problem Setter and Moderator for the Programming Contest at 
                        CSE Fest 2023 V2 which was held on July, 2023, hosted by the Department of Computer Science and 
                        Engineering (CSE) and Computer Science and Information Technology (CSIT) at Shanto-Mariam University
                        of Creative Technology. The event was a tremendous success, bringing together brilliant minds and fostering
                        a spirit of innovation and collaboration. It was exhilarating to witness the participants enthusiasm and 
                        problem-solving skills as they tackled challenging problems.' 
          icon: smuct
          organization: Shanto-Mariam University of Creative Technology
          organization_url: https://smuct.ac.bd/
          url: ''
          # Cloud certification
        - title: Cloud Certification AZ 104
          certificate_url: 'https://drive.google.com/file/d/1F5rL1PhU_wu_WVq3etFoSF579KJ9RMae/view'
          date_end: ''
          date_start: '2022-11-08'
          description: 'The AZ-104 certification course focuses on Microsoft Azure Administration. 
                        By completing this course, you would have gained knowledge and skills in areas such as: 
                        Azure identity and governance management: Managing Azure Active Directory (AD), role-based 
                        access control (RBAC), and subscriptions. Azure resource management: Implementing and managing 
                        storage accounts, monitoring resources using tools like Azure Monitor, and managing virtual machines (VMs). 
                        Virtual networks: Configuring and managing virtual networks, load balancers, and troubleshooting network connectivity.
                        Azure storage solutions: Implementing secure data transfer, managing storage access, and backup strategies. Monitoring and 
                        backup: Setting up Azure alerts, utilizing Azure Backup, and managing disaster recovery with Azure Site Recovery.' 
          icon: 
          organization: Syava, Microsoft
          organization_url: 'https://www.microsoft.com/en-us/'
          url: ''
          


          

    design:
      columns: '2'


# Location
  - block: contact
    id: contact
    content:
      title: Contact
      address:
        street:
        city: Dhaka - 1230
        region: Bangladesh
        postcode: ''
        country: Bangladesh
        country_code: +88
      #coordinates:
       # latitude: '23.8041' 
       # longitude: '90.4152'
     # directions: Room 142, Polly Vacher
      autolink: true
    design:
      columns: '2'
---

# EA Deployment CA2

## Recipe Tracker Application

![AKS](https://img.shields.io/badge/Kubernetes-AKS-blue)
![CI/CD](https://img.shields.io/badge/CI/CD-GitHub%20Actions-brightgreen)
![IaC](https://img.shields.io/badge/IaC-Terraform-purple)

## Overview
This project demonstrates the implementation of a cloud-native microservices application using DevOps practices. The system is deployed on Azure Kubernetes Service (AKS) with automated CI/CD pipelines, infrastructure provisioning using Terraform, and integrated monitoring and scaling mechanisms.

---

## Architecture Overview
The system follows a microservices-based architecture where each component is independently deployed and managed. This approach improves scalability, maintainability, and fault isolation within the application.

### Components
- **Frontend (Node.js)**: Handles user interactions and UI rendering  
- **Backend (Java)**: Provides REST APIs and business logic  
- **Database (MongoDB)**: Stores application data  
- **Ingress (NGINX)**: Manages external access and routing  
- **AKS Cluster**: Hosts all services and manages orchestration  

---

## Communication Flow
User requests are initiated through a web browser and routed via the NGINX Ingress controller to the frontend service. The frontend communicates with the backend API, which processes requests and interacts with the MongoDB database. This flow ensures clear separation of concerns and controlled communication between services.

---

## Repository Structure
The repository is organised to separate application code, infrastructure, and deployment configurations for better maintainability.

```text
EADeployment-CA2/
│
├── EAD_BE_CA2/                 # Backend application (Java)
│
├── EAD_FE_CA2/                 # Frontend application (Node.js)
│
├── k8s/                        # Kubernetes manifests
│   ├── backend/                # Backend deployment & service
│   ├── frontend/               # Frontend deployment & ingress
│   └── mongodb/                # MongoDB deployment, PVC, secrets
│
├── .github/
│   └── workflows/              # CI/CD pipelines
│      
│
├── terraform/                  # Infrastructure as Code (AKS setup)
│   
│
├── k6-load-test/               # Load testing scripts
│  
│
└── README.md                  # Project documentation

```
---

## CI/CD Pipeline
A GitHub Actions-based pipeline automates the build, validation, and deployment of the application.

### Continuous Integration (CI)
The CI pipeline is triggered on code commits. It builds Docker images, performs vulnerability scanning using Trivy, and pushes validated images to Azure Container Registry (ACR).

### Continuous Delivery (CD)
The CD pipeline deploys the application to AKS by applying Kubernetes manifests and updating container images. Rolling updates ensure zero downtime during deployment.

---

## Deployment Strategy
A rolling update strategy is used to gradually replace old pods with new ones. This ensures that the application remains available during deployments while reducing risk.


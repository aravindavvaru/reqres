pipeline {
    agent any

    stages {
        stage('GIT pull') {
            steps {
                git branch: 'main', url: 'https://github.com/aravindavvaru/reqres'
            }
        }
        stage('unit testing') {
            steps {
                sh '''npm test
                    echo "Test Coverage results"
                    nyc node index.js &
                    sleep 2
                    PID=$!
                    kill $PID'''
            }
        }
        stage('Docker build & Push') {
            steps {
                sh '''sudo docker build -t aravindavvaru/reqres .
                sudo docker push aravindavvaru/reqres'''
            }
        }
        stage('Deploy') {
            steps {
                sh '''sudo kubectl apply -f /var/lib/jenkins/workspace/reqresCICD/kubernetes/deploy.yml && sudo kubectl rollout restart deployment/reqres
                      sudo kubectl apply -f /var/lib/jenkins/workspace/reqresCICD/kubernetes/service_nodePort.yml'''
            }
        }
    }
}

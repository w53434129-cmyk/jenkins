pipeline {
    agent any

    triggers {
        githubPush()
    }

    tools {
        nodejs 'nodejs-18'
    }

    environment {
        FRONTEND_DIR = '/var/www/html'
        BACKEND_PORT = '3000'
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/w53434129-cmyk/jenkins.git'
            }
        }

        stage('Backend Install & Test') {
            steps {
                dir('backend') {
                    sh '''
                      npm install
                      node -c server.js
                    '''
                }
            }
        }

        stage('Deploy Frontend') {
            steps {
                sh '''
                  sudo rm -rf ${FRONTEND_DIR}/*
                  sudo cp -r frontend/* ${FRONTEND_DIR}/
                '''
            }
        }

        stage('Deploy Backend') {
            steps {
                dir('backend') {
                    sh '''
                      npm install
                      pm2 describe backend > /dev/null \
                      && pm2 restart backend \
                      || pm2 start server.js --name backend -- --port=${BACKEND_PORT}
                    '''
                }
            }
        }
    }

    post {
        success {
            echo 'Frontend and Backend deployed successfully'
        }
        failure {
            echo 'Pipeline failed'
        }
    }
}

pipeline {

    agent any

    tools {
        nodejs 'NodeJS'
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                url: 'https://github.com/nigamshastri-0770/playwright-herokuapp-framework.git'
            }
        }

        stage('Install Linux Dependencies') {
            steps {
                sh '''
                apt-get update

                apt-get install -y \
                libatomic1 \
                xvfb
                '''
            }
        }

        stage('Install Node Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Install Playwright') {
            steps {
                sh 'npx playwright install --with-deps chromium'
            }
        }

        stage('Run Tests') {
            steps {
                sh '''
                xvfb-run npx playwright test
                '''
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
        }
    }
}
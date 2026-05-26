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
                libnss3 \
                libatk-bridge2.0-0 \
                libgtk-3-0 \
                libxss1 \
                libasound2t64 \
                libgbm1 \
                xvfb
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                sh 'npx playwright install --with-deps'
            }
        }

        stage('Run Playwright Tests') {
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
pipeline {
    // Clean workspace before doing anything
    //deleteDir()
    agent any
    tools {
        maven 'Maven 3.5.3'
        jdk 'jdk9'
    }
    stages{
        stage ('Initialize') {
            steps {
              sh '''
                  echo "PATH = ${PATH}"
                  echo "M2_HOME = ${M2_HOME}"
              '''
            }
        }
        stage ('Build') {
            steps {
                sh "mvn install"
            }
            post {
                success {
                    archive "target/cucumber-reports/cucumber-pretty/*"
                }
            }
        }
        //stage ('Tests') {
        //    parallel 'static': {
        //        sh "echo 'shell scripts to run static tests...'"
        //    },
        //    'unit': {
        //        sh "echo 'shell scripts to run unit tests...'"
        //    },
        //    'integration': {
        //        sh "echo 'shell scripts to run integration tests...'"
        //    }
        //}
        //stage ('Deploy') {
        //    sh "echo 'shell scripts to deploy to server...'"
        //}
    }
}

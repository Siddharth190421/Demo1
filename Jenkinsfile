pipeline{

    agent any

    parameters{
        string(name: 'SPEC', defaultValue:"cypress/e2e/**/**", description: "Enter the script path")
        choice(name: 'BROWSER', choice: ['chrome', 'edge', 'firefox'], description: "Browser you want to execute in")
    }
    options{

        ansiColor('xterm')
    }
    stages{
        stage('Build'){
            echo "Building app"
        }
        stage('Testing'){

            steps{

                bat "npm i"
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }
        }

        stage('Deploying'){

            echo "Deploying the App"
        }
    }
}
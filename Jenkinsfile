def mapApi = [
  Login: "src/tests/login.test.js",
  Register: "src/tests/register.test.js",
]

pipeline {
  agent {
    dockerfile {
      args '-u root:root'
    }
  }

  parameters {
    choice(name: 'API', choices: ['Login', 'Register'], description: 'Selecione a API')
    choice(name: 'Time', choices: ['30s', '1m', '3m', '5m', '10m'], description: 'Escolha o tempo de deuração do testes')
    choice(name: 'Users', choices: ['2', '5', '10', '20', '50'], description: 'Escolha a quantidade de usuários')
  }

  options {
    ansiColor('xterm')
  }

  stages {
    stage('Execution of Tests') {
      steps {
        sh "k6 run --config src/utils/options.json --stage ${Time}:${Users} ${mapApi[API]}"
      }
    }
  }

  post {
    always {
      publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: './report', reportFiles: 'summaryTest.html', reportName: 'HTML Report', reportTitles: 'Relatório de execução dos testes de desempenho'])
    }
  }
}

module.exports = {
  apps: [{
    name: 'aws-first-ec2',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-54-224-189-139.compute-1.amazonaws.com',
      key: '~/.ssh/first-ec2-instance.pem',
      ref: 'origin/master',
      repo: 'git@github.com:MGenteluci/aws-first-ec2.git',
      path: '/home/ubuntu/aws-first-ec2',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}

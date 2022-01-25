module.exports = {
  apps : [{
    name   : "app1",
    script : "./index.js",
    exec_mode: "cluster",
    watch: true,
    instances: "max",
    env: {
      "NODE_ENV": "Teste",
      "env_prod": '',
      "env_homolog": ''
    }
  }]
}

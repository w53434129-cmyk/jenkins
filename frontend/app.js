function checkBackend() {
  fetch("http://localhost:3.89.212.211/api/health")
    .then(res => res.json())
    .then(data => {
      document.getElementById("result").innerText = data.status;
    })
    .catch(() => {
      document.getElementById("result").innerText = "Backend not reachable";
    });
}

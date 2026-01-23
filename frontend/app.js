function checkBackend() {
  fetch("/api/health")
    .then(res => res.json())
    .then(data => {
      document.getElementById("result").innerText = data.status;
    })
    .catch(() => {
      document.getElementById("result").innerText = "Backend not reachable";
    });
}

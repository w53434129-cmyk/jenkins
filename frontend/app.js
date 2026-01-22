function checkBackend() {
  fetch("http://3.89.212.211:3000/api/health")
    .then(res => res.json())
    .then(data => {
      document.getElementById("result").innerText = data.status;
    })
    .catch(() => {
      document.getElementById("result").innerText = "Backend is running";
    });
}

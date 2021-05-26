"use strict";

const id = document.querySelector("#id");
const pw = document.querySelector("#password");
const btn = document.querySelector("button");

btn.addEventListener("click", login);

function login() {
  const req = {
    id: id.value,
    pw: pw.value,
  };

  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        location.href = "/";
      } else {
        alert(data.msg);
      }
    })
    .catch((err) => {
      console.error("로그인 에러 발 생");
    });
}

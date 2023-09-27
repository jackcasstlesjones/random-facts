const factElement = document.getElementById("fact-element");
const newFactBtn = document.getElementById("new-fact-button");

newFactBtn.addEventListener("click", getData);

async function getData() {
  const response = await fetch("https://api.api-ninjas.com/v1/facts?limit=1", {
    mode: "cors",
    method: "GET",
    headers: { "X-Api-key": "RQb9v8XnwxLVsF88uYc+QA==Dux3JGZxtCcw1FMs" },
  });
  const myData = await response.json();
  let fact = myData[0].fact;

  if (fact.slice(-1) !== ".") {
    fact = fact + ".";
  }
  shrinkText(fact, factElement);
  factElement.textContent = fact;
}

function shrinkText(string, element) {
  if (window.innerWidth < 850 || string.length < 100) {
    element.classList.remove("small-text");
    console.log("big time");
  } else {
    element.classList.add("small-text");
    console.log("shrink time");
  }
}

getData();

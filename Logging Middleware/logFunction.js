
const Log=async(stack, level, package,message)=> {
  const data = {
    stack : stack,
    level: level,
    package:package,
    message : message
  };

  const response = await fetch("http://20.244.56.144/evaluation-service/logs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  const result = await response.json();
  console.log(result);
}

// Log();
module.exports = Log;
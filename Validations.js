function validate(value) {
  switch (value) {
    case null:
      return false;
    case "":
      return false;
    default:
      return true;
  }
}

function validateAnimal(data) {
  for (const key in data) {
    if (!validate(data[key])) {
      alert(`o campo ${data[key]} é obrigatorio`);
      return false;
    }
  }
  return true;
}

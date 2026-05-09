const API_URL = "";

// Search By Pincode
async function searchPincode() {
  const pincode = document.getElementById("pincodeInput").value;

  const resultDiv = document.getElementById("pincodeResult");

  try {
    const response = await fetch(`${API_URL}/pincode/${pincode}`);

    const data = await response.json();

    if (response.ok) {
      resultDiv.innerHTML = `
        <p><strong>Pincode:</strong> ${data.pincode}</p>
        <p><strong>Areas:</strong> ${data.areas.join(", ")}</p>
      `;
    } else {
      resultDiv.innerHTML = `<p>${data.message}</p>`;
    }

  } catch (error) {
    resultDiv.innerHTML = `<p>Server Error</p>`;
  }
}

// Search By Area Name
async function searchArea() {
  const area = document.getElementById("areaInput").value;

  const resultDiv = document.getElementById("areaResult");

  try {
    const response = await fetch(`${API_URL}/area/${area}`);

    const data = await response.json();

    if (response.ok) {
      resultDiv.innerHTML = `
        <p><strong>Area:</strong> ${area}</p>
        <p><strong>Pincode:</strong> ${data.pincode}</p>
      `;
    } else {
      resultDiv.innerHTML = `<p>${data.message}</p>`;
    }

  } catch (error) {
    resultDiv.innerHTML = `<p>Server Error</p>`;
  }
}
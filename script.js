document.getElementById('registration-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get form values
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var age = document.getElementById('age').value;

  // Create a new row for the registration details
  var newRow = document.createElement('div');
  newRow.className = 'row mb-3';
  var displayData = `
      <div class="col-md-12">
          <div class="card">
              <div class="card-body">
                  <h5 class="card-title">Registration Details:</h5>
                  <p class="card-text"><strong>Name:</strong> ${name}</p>
                  <p class="card-text"><strong>Email:</strong> ${email}</p>
                  <p class="card-text"><strong>Password:</strong> ${password}</p>
                  <p class="card-text"><strong>Age:</strong> ${age}</p>
              </div>
          </div>
      </div>
  `;
  newRow.innerHTML = displayData;

  // Append the new row to the display area
  var displayArea = document.getElementById('display-area');
  displayArea.appendChild(newRow);
});

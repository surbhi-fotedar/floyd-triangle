(function() {

  var rows = document.getElementById('inputRows'),
    result = document.getElementById('resultGrp'),
    n = 1,
    i,
    j;

  function displayFloydTriangle() {
    result.innerHTML = '';
    for (i = 1; i <= rows.value; i++) {
      for (j = 1; j <= i; j++, n++) {
        result.innerHTML += ' ' + n;
      }
      result.innerHTML += '<br>';
    }
  }

  function addEventListeners() {
    submitBtn = document.getElementById('submitBtn');
    submitBtn.addEventListener('click', displayFloydTriangle);
  }

  addEventListeners();

})();
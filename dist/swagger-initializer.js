window.onload = function() {
  // Initially load the ACORD Swagger doc
  const ui = SwaggerUIBundle({
    url: "https://vvqx0s8wpj.execute-api.us-east-1.amazonaws.com/dev/swagger", // Default to ACORD API
    dom_id: '#swagger-ui',
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    layout: "StandaloneLayout"
  });

  window.ui = ui;

  // Function to switch Swagger docs based on user selection
  const changeSwaggerDoc = (url) => {
    ui.specActions.updateUrl(url); // Update the URL for the new Swagger doc
    ui.specActions.download(url);  // Reload the new Swagger doc
  };

  // Add event listeners for buttons to switch between Swagger docs
  document.getElementById('acord-btn').addEventListener('click', function() {
    changeSwaggerDoc("https://vvqx0s8wpj.execute-api.us-east-1.amazonaws.com/dev/swagger");
  });

  document.getElementById('policies-btn').addEventListener('click', function() {
    changeSwaggerDoc("https://rtq606spbi.execute-api.us-east-1.amazonaws.com/dev/swagger");
  });
}

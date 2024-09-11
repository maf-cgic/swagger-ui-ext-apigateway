window.onload = function() {
  // Initialize Swagger-UI with ACORD API as default
  const ui = SwaggerUIBundle({
    url: "https://vvqx0s8wpj.execute-api.us-east-1.amazonaws.com/dev/swagger", // Default to ACORD API
    dom_id: '#swagger-ui',
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    layout: "StandaloneLayout",
    onComplete: function() {
      // Add custom buttons into Swagger topbar
      const topbar = document.querySelector('.topbar');
      if (topbar) {
        // Create buttons
        const buttonContainer = document.createElement('div');
        buttonContainer.innerHTML = `
          <button id="acord-btn" style="margin-right: 10px;">ACORD API</button>
          <button id="policies-btn">Policies API</button>
        `;

        // Append buttons to the topbar
        topbar.appendChild(buttonContainer);

        // Add event listeners for the buttons
        document.getElementById('acord-btn').addEventListener('click', function() {
          ui.specActions.updateUrl("https://vvqx0s8wpj.execute-api.us-east-1.amazonaws.com/dev/swagger");
          ui.specActions.download("https://vvqx0s8wpj.execute-api.us-east-1.amazonaws.com/dev/swagger");
        });

        document.getElementById('policies-btn').addEventListener('click', function() {
          ui.specActions.updateUrl("https://rtq606spbi.execute-api.us-east-1.amazonaws.com/dev/swagger");
          ui.specActions.download("https://rtq606spbi.execute-api.us-east-1.amazonaws.com/dev/swagger");
        });
      }
    }
  });

  window.ui = ui;
};

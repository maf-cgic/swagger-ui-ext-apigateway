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
      // Check if the buttons already exist before adding them
      const topbar = document.querySelector('.topbar');
      const existingButtons = document.getElementById('custom-buttons');
      
      if (!existingButtons && topbar) {
        // Create a container for the buttons
        const buttonContainer = document.createElement('div');
        buttonContainer.id = 'custom-buttons';
        buttonContainer.style.display = 'inline-block';
        buttonContainer.innerHTML = `
          <button id="acord-btn" style="margin-right: 10px;">ACORD API</button>
          <button id="policies-btn" style="margin-right: 10px;">Policies API</button>
          <button id="agent-btn" style="margin-right: 10px;">Agent API</button>
        `;

        // Append the buttons only once
        topbar.appendChild(buttonContainer);

        // Add event listeners for buttons
        document.getElementById('acord-btn').addEventListener('click', function() {
          ui.specActions.updateUrl("https://vvqx0s8wpj.execute-api.us-east-1.amazonaws.com/dev/swagger");
          ui.specActions.download("https://vvqx0s8wpj.execute-api.us-east-1.amazonaws.com/dev/swagger");
        });

        document.getElementById('policies-btn').addEventListener('click', function() {
          ui.specActions.updateUrl("https://rtq606spbi.execute-api.us-east-1.amazonaws.com/dev/swagger");
          ui.specActions.download("https://rtq606spbi.execute-api.us-east-1.amazonaws.com/dev/swagger");
        });

        document.getElementById('agent-btn').addEventListener('click', function() {
          ui.specActions.updateUrl("https://srfhe708e3.execute-api.us-east-1.amazonaws.com/dev/swagger");
          ui.specActions.download("https://srfhe708e3.execute-api.us-east-1.amazonaws.com/dev/swagger");
        });
      }
    }
  });

  window.ui = ui;
};

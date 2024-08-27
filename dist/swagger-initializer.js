window.onload = function() {
  const ui = SwaggerUIBundle({
    url: "https://l7sf9cy018.execute-api.us-east-1.amazonaws.com/dev/swagger",
    dom_id: '#swagger-ui',
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    layout: "StandaloneLayout"
  });

  window.ui = ui;
}

window.onload = function() {
  const ui = SwaggerUIBundle({
    url: "https://t6t2a50kfi.execute-api.us-east-1.amazonaws.com/dev/swagger",
    dom_id: '#swagger-ui',
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    layout: "StandaloneLayout"
  });

  window.ui = ui;
}
